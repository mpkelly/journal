var CACHE_NAME = "journal-pwa";
var urlsToCache = [
  "./public/fonts/noto-sans-tc-v10-latin-700.woff2",
  "./public/fonts/noto-sans-tc-v10-latin-regular.woff2",
  "./public/fonts/noto-sans-tc.css",
  "./public/icons/icon.png",
  "./public/icons/material-round.css",
  "./public/icons/MaterialRoundIconFont.woff2",
  "./public/lib/react.production.min.js",
  "./public/lib/react-dom.production.min.js",
  "./journal.js",
  "./manifest.json",
  "./worker.js",
  "./index.html",
];

// Install a service worker
self.addEventListener("install", (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Cache and return requests
self.addEventListener("fetch", (event) => {
  if (event.request.mode == "navigate") {
    console.log("Handling fetch event for", event.request.url);
    console.log(event.request);
    event.respondWith(
      fetch(event.request).catch(function (exception) {
        // The `catch` is only triggered if `fetch()` throws an exception,
        // which most likely happens due to the server being unreachable.
        console.error(
          "Fetch failed; returning offline page instead.",
          exception
        );
        return caches.open(CACHE_NAME).then(function (cache) {
          return cache.match("./index.html");
        });
      })
    );
  } else {
    // It’s not a request for an HTML document, but rather for a CSS or SVG
    // file or whatever…
    event.respondWith(
      caches.match(event.request).then(function (response) {
        return response || fetch(event.request);
      })
    );
  }
});

// Update a service worker
self.addEventListener("activate", (event) => {
  var cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log("Deleting cache", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

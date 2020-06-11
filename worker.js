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
  "./public/journal.js",
  "./public/manifest.json",
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
  console.log("fetch", event.request);
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

// Update a service worker
self.addEventListener("activate", (event) => {
  var cacheWhitelist = ["journal-pwa"];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

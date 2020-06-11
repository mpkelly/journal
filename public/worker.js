var CACHE_NAME = "journal-pwa";
var urlsToCache = [
  "./manifest.json",
  "./fonts/noto-sans-tc-v10-latin-700.woff2",
  "./fonts/noto-sans-tc-v10-latin-regular.woff2",
  "./fonts/noto-sans-tc.css",
  "./icons/icon.png",
  "./icons/material-round.css",
  "./icons/MaterialRoundIconFont.woff2",
  "./lib/react.production.min.js",
  "./lib/react-dom.production.min.js",
  "./journal.js",
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

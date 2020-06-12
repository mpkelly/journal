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
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.mode == "navigate") {
    event.respondWith(
      fetch(event.request).catch(function (exception) {
        //Assume error is due to being offline and try to load page from cacge
        return caches.open(CACHE_NAME).then(function (cache) {
          return cache.match("./index.html");
        });
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request).then(function (response) {
        return response || fetch(event.request);
      })
    );
  }
});

self.addEventListener("activate", (event) => {
  var cacheWhitelist = [CACHE_NAME];
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

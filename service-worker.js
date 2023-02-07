let cacheName = "petstore-v1";
var cacheFiles = ["test.html", "products.js", "petstore.webmanifest", "img"];

self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("[Service Worker] Caching all the files");
      return cache.addAll(cacheFiles);
    })
  );
});

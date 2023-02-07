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
self.addEventListener("fetch", (e) => {
  e.respondWith(
    // CHECK WIF TGE CACHE HAS THE FILE
    caches.match(e.request).then((r) => {
      console.log("[Service Worker] Fetching Resources" + e.request.url);
      // 'r' IS THE MATCHING FILE IF IT EXISTS IN THE CACHE || DOWNLOAD IF FILE DOESNT EXIST
      return (
        r ||
        fetch(e.request).then((res) => {
          return caches.open(cacheName).then((cache) => {
            cache.put(e.request, res.clone());
            return res;
          });
        })
      );
    })
  );
});

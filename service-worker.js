self.addEventListener('install', (event) => {

  self.skipWaiting(); // сразу активирует SW

  event.waitUntil(
    caches.open('unity-pwa-v1').then(cache =>
      cache.addAll([
        '/',
        '/index.html',
        '/app.js',
        '/router.js',
        '/unity-loader.js',
        '/style.css',
        '/manifest.json'
      ])
    )
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  );
});

// v0.05
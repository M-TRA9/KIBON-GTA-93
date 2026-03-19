const cacheName = 'gta93-v2'; // Changé en v2 pour forcer la mise à jour
const assets = [
  './',
  './index.html',
  './manifest.json',
  './logo.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});

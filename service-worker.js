// Cache files on install
const cacheName = 'pwa-fitness-cache-v1';
const filesToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './pushups.json',
  './agility.json',
  './run.json'
];

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(response => {
      return response || fetch(evt.request);
    })
  );
});
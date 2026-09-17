// Service Worker BeByte — bikin bisa di-install (PWA) + tetap segar saat online.
// NAIKKAN CACHE_NAME (v1 -> v2 dst) setiap rilis agar klien langsung ambil versi baru.
const CACHE_NAME = 'bebyte-v1';
const CORE_ASSETS = [
  './', './index.html', './manifest.json',
  './css/style.css',
  './js/app.js', './js/data.js', './js/discord.js', './js/report.js', './js/qris.js',
  './assets/icon-192.png', './assets/icon-512.png',
  './assets/bebyte-logo.png', './assets/bebyte-mascot.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(CORE_ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Network-first (selalu segar saat online) + fallback cache saat offline.
// CDN (tailwind, QR lib, font, sfx) tidak di-cache di sini, biar ke cache browser biasa.
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  if (new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(
    fetch(e.request).then((res) => {
      const copy = res.clone();
      caches.open(CACHE_NAME).then((c) => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match(e.request).then((m) => m || caches.match('./index.html')))
  );
});

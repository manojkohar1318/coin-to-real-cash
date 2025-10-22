// Service Worker for Coin To Real Cash
const CACHE_NAME = 'coin-to-cash-v1';

self.addEventListener('install', (event) => {
  console.log('Service Worker installed');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated');
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Let all requests pass through - Firebase handles its own caching
  event.respondWith(fetch(event.request));
});

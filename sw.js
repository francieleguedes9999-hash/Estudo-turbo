const CACHE = 'estudo-turbo-v6';
const CORE = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/privacy.html',
  '/terms.html',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await Promise.all(CORE.map(async url => {
      try {
        const res = await fetch(url, {cache: 'no-store'});
        if (res.ok) await cache.put(url, res.clone());
      } catch (_) {}
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  // HTML sempre tenta a rede primeiro para evitar servir uma versão antiga do app.
  if (req.mode === 'navigate' || req.url.endsWith('/index.html')) {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(req, {cache: 'no-store'});
        if (fresh.ok) {
          const cache = await caches.open(CACHE);
          await cache.put('/index.html', fresh.clone());
        }
        return fresh;
      } catch (_) {
        return (await caches.match('/index.html')) || Response.error();
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cached = await caches.match(req);
    if (cached) return cached;
    try {
      const fresh = await fetch(req);
      if (fresh.ok && new URL(req.url).origin === self.location.origin) {
        const cache = await caches.open(CACHE);
        cache.put(req, fresh.clone());
      }
      return fresh;
    } catch (_) {
      return cached || Response.error();
    }
  })());
});

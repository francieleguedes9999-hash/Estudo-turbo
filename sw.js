const CACHE='estudo-turbo-v10';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./privacy.html','./terms.html'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>Promise.all(ASSETS.map(u=>c.add(u).catch(()=>null)))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return; e.respondWith(fetch(e.request).then(r=>{if(e.request.mode==='navigate'){const c=r.clone();caches.open(CACHE).then(x=>x.put('./index.html',c));}return r;}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))))});

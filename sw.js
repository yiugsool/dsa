const CACHE_NAME = 'dsa-app-v4.2.1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon.png'
];

// 安装时缓存所有文件
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// 断网时直接从手机本地提取缓存
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

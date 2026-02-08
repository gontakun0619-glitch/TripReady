const CACHE_NAME = 'tripready-v1.0.8';
const STATIC_CACHE = 'tripready-static-v1.0.8';

// キャッシュするファイル
const urlsToCache = [
  '/TripReady/',
  '/TripReady/index.html',
  '/TripReady/style.css',
  '/TripReady/app.js',
  '/TripReady/app-link-helper.js',
  '/TripReady/thailand-data.js',
  '/TripReady/korea-data.js',
  '/TripReady/manifest.json',
  '/TripReady/icon-192.png',
  '/TripReady/icon-512.png'
];

// インストール時
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[Service Worker] Caching static files');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('[Service Worker] Installation complete');
        return self.skipWaiting();
      })
  );
});

// アクティベーション時（古いキャッシュ削除）
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[Service Worker] Activation complete');
      return self.clients.claim();
    })
  );
});

// フェッチ時（キャッシュファースト戦略）
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // キャッシュがあればそれを返す
        if (cachedResponse) {
          console.log('[Service Worker] Serving from cache:', event.request.url);
          
          // バックグラウンドで更新をチェック
          fetch(event.request)
            .then((networkResponse) => {
              if (networkResponse && networkResponse.status === 200) {
                caches.open(STATIC_CACHE).then((cache) => {
                  cache.put(event.request, networkResponse.clone());
                });
              }
            })
            .catch(() => {
              // ネットワークエラーは無視（オフライン対応）
            });
          
          return cachedResponse;
        }
        
        // キャッシュになければネットワークから取得
        console.log('[Service Worker] Fetching from network:', event.request.url);
        return fetch(event.request)
          .then((networkResponse) => {
            // レスポンスが有効な場合はキャッシュに保存
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type === 'error') {
              return networkResponse;
            }
            
            // 静的ファイルをキャッシュ
            const responseToCache = networkResponse.clone();
            caches.open(STATIC_CACHE).then((cache) => {
              cache.put(event.request, responseToCache);
            });
            
            return networkResponse;
          })
          .catch(() => {
            // オフライン時のフォールバック
            console.log('[Service Worker] Offline - no cached version available');
            
            // HTMLリクエストの場合はindex.htmlを返す
            if (event.request.headers.get('accept').includes('text/html')) {
              return caches.match('/TripReady/index.html');
            }
          });
      })
  );
});

// メッセージ受信（手動キャッシュ更新など）
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => caches.delete(cacheName))
        );
      }).then(() => {
        console.log('[Service Worker] All caches cleared');
      })
    );
  }
});

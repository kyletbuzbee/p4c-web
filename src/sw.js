/**
 * Service Worker for Properties 4 Creation
 * Provides offline functionality and caching strategies
 */

// Workbox manifest injection point - VitePWA will inject the manifest here
import { precacheAndRoute } from 'workbox-precaching';

// The build system will replace this with the actual manifest
// Wrap in try-catch to handle precache failures gracefully
let precacheSuccessful = false;
try {
  precacheAndRoute(self.__WB_MANIFEST);
  precacheSuccessful = true;
} catch (error) {
  console.error('[SW] Precaching failed:', error);
}

// Dynamic cache versioning - update this when deploying new versions
const CACHE_VERSION = '2.0.1';
const STATIC_CACHE = `p4c-static-v${CACHE_VERSION}`;
const DYNAMIC_CACHE = `p4c-dynamic-v${CACHE_VERSION}`;
const IMAGE_CACHE = `p4c-images-v${CACHE_VERSION}`;

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  // Add other static assets here
];

// Cache strategies
const CACHE_STRATEGIES = {
  CACHE_FIRST: 'cache-first',
  NETWORK_FIRST: 'network-first',
  STALE_WHILE_REVALIDATE: 'stale-while-revalidate',
};

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => {
        // Use individual cache.put for better error handling
        const cachePromises = STATIC_ASSETS.map(async (asset) => {
          try {
            const response = await fetch(asset, { cache: 'no-cache' });
            if (response.ok) {
              await cache.put(asset, response);
            }
          } catch (error) {
            console.warn(`[SW] Failed to cache ${asset}:`, error);
          }
        });
        return Promise.all(cachePromises);
      })
      .then(() => {
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[SW] Failed to cache static assets:', error);
        // Continue installation even if caching fails
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames.map((cacheName) => {
            // Delete old caches that don't match current version
            if (
              cacheName !== STATIC_CACHE &&
              cacheName !== DYNAMIC_CACHE &&
              cacheName !== IMAGE_CACHE
            ) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        )
      )
      .then(() => {
        return self.clients.claim();
      })
  );
});

// Fetch event - handle requests with appropriate strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip API requests (let them go to the server)
  if (url.pathname.startsWith('/api/')) {
    return;
  }

  // Handle different types of requests
  if (isImageRequest(request)) {
    event.respondWith(handleImageRequest(request));
  } else if (isStaticAsset(request)) {
    event.respondWith(handleStaticAsset(request));
  } else if (isNavigationRequest(request)) {
    event.respondWith(handleNavigationRequest(request));
  } else {
    event.respondWith(handleDynamicRequest(request));
  }
});

// Check if request is for an image
function isImageRequest(request) {
  const url = new URL(request.url);
  return /\.(png|jpg|jpeg|gif|svg|webp|ico)$/i.test(url.pathname);
}

// Check if request is for a static asset
function isStaticAsset(request) {
  const url = new URL(request.url);
  return (
    STATIC_ASSETS.some((asset) => url.pathname === asset) ||
    /\.(css|js|woff|woff2|ttf|otf)$/i.test(url.pathname)
  );
}

// Check if request is for navigation
function isNavigationRequest(request) {
  return request.mode === 'navigate';
}

// Cache-first strategy for images with graceful fallback
async function handleImageRequest(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(IMAGE_CACHE);
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    console.error('[SW] Image request failed:', error);

    // Return a transparent 1x1 pixel as fallback (data URI)
    const transparentPixel =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';
    return fetch(transparentPixel);
  }
}

// Cache-first strategy for static assets with graceful fallback
async function handleStaticAsset(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    console.error('[SW] Static asset request failed:', error);

    // For CSS/JS files, return empty response to prevent breaking the app
    const url = new URL(request.url);
    if (/\.css$/i.test(url.pathname)) {
      return new Response('/* CSS failed to load */', {
        status: 200,
        headers: { 'Content-Type': 'text/css' },
      });
    }
    if (/\.js$/i.test(url.pathname)) {
      return new Response('/* JS failed to load */', {
        status: 200,
        headers: { 'Content-Type': 'application/javascript' },
      });
    }

    return new Response('Asset not available', { status: 404 });
  }
}

// Network-first strategy for navigation requests with graceful fallback
async function handleNavigationRequest(request) {
  try {
    const networkResponse = await fetch(request);

    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    console.error('[SW] Navigation request failed, trying cache:', error);

    // Fallback to cached version
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    // Final fallback to index.html for SPA routing
    const fallbackResponse = await caches.match('/index.html');
    if (fallbackResponse) {
      return fallbackResponse;
    }

    // Ultimate fallback - return a basic HTML page
    const offlineHtml = `
      <!DOCTYPE html>
      <html>
        <head><title>Offline - Properties 4 Creation</title></head>
        <body style="font-family: sans-serif; text-align: center; padding: 50px;">
          <h1>You are offline</h1>
          <p>Please check your internet connection and try again.</p>
          <button onclick="window.location.reload()">Retry</button>
        </body>
      </html>
    `;
    return new Response(offlineHtml, {
      status: 200,
      headers: { 'Content-Type': 'text/html' },
    });
  }
}

// Stale-while-revalidate strategy for dynamic content
async function handleDynamicRequest(request) {
  try {
    const cachedResponse = await caches.match(request);

    // Fetch from network in background
    const networkResponsePromise = fetch(request)
      .then(async (networkResponse) => {
        if (networkResponse.ok) {
          const cache = await caches.open(DYNAMIC_CACHE);
          // Clone the response before putting it in cache
          const responseToCache = networkResponse.clone();
          await cache.put(request, responseToCache);
        }
        return networkResponse;
      })
      .catch((error) => {
        console.error('[SW] Network request failed:', error);
        return null;
      });

    // Return cached response immediately if available
    if (cachedResponse) {
      // Background update already triggered by networkResponsePromise
      return cachedResponse;
    }

    // Wait for network if no cache
    const networkResponse = await networkResponsePromise;
    if (networkResponse) {
      return networkResponse;
    }

    // Return graceful fallback
    return new Response('Content not available', {
      status: 503,
      statusText: 'Service Unavailable',
    });
  } catch (error) {
    console.error('[SW] Dynamic request failed:', error);

    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    return new Response('Content not available', {
      status: 503,
      statusText: 'Service Unavailable',
    });
  }
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(performBackgroundSync());
  }
});

// Handle background sync
async function performBackgroundSync() {
  try {
    // Sync any pending data when connection is restored
    // Add your background sync logic here
  } catch (error) {
    console.error('[SW] Background sync failed:', error);
  }
}

// Push notifications (if needed in future)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New notification',
    icon: '/pwa-192x192.png',
    badge: '/pwa-192x192.png',
    tag: 'p4c-notification',
    requireInteraction: true,
  };

  event.waitUntil(
    self.registration.showNotification('Properties 4 Creation', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  event.waitUntil(clients.openWindow('/'));
});

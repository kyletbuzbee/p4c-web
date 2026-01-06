/**
 * Service Worker for Properties 4 Creation
 * Provides offline functionality and caching strategies
 */

const CACHE_NAME = 'p4c-v2.0.0';
const STATIC_CACHE = 'p4c-static-v2.0.0';
const DYNAMIC_CACHE = 'p4c-dynamic-v2.0.0';
const IMAGE_CACHE = 'p4c-images-v2.0.0';

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
self.addEventListener("install", (event) => {
/n  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => {

        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {

        return self.skipWaiting();
      })
      .catch((error) => {
        console.error("[SW] Failed to cache static assets:", error);
      }),
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
/n  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames.map((cacheName) => {
            // Delete old caches
            if (
              cacheName !== STATIC_CACHE &&
              cacheName !== DYNAMIC_CACHE &&
              cacheName !== IMAGE_CACHE
            ) {

              return caches.delete(cacheName);
            }
          }),
        ),
      )
      .then(() => {

        return self.clients.claim();
      }),
  );
});

// Fetch event - handle requests with appropriate strategies
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== "GET") {
    return;
  }

  // Skip API requests (let them go to the server)
  if (url.pathname.startsWith("/api/")) {
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
  return request.mode === "navigate";
}

// Cache-first strategy for images
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
    console.error("[SW] Image request failed:", error);

    // Return a fallback image if available
    const fallbackResponse = await caches.match("/images/fallback.png");
    return (
      fallbackResponse || new Response("Image not available", { status: 404 })
    );
  }
}

// Cache-first strategy for static assets
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
    console.error("[SW] Static asset request failed:", error);
    return new Response("Asset not available", { status: 404 });
  }
}

// Network-first strategy for navigation requests
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
    console.error("[SW] Navigation request failed, trying cache:", error);

    // Fallback to cached version
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    // Final fallback to index.html for SPA routing
    const fallbackResponse = await caches.match("/index.html");
    return (
      fallbackResponse || new Response("Page not available", { status: 404 })
    );
  }
}

// Stale-while-revalidate strategy for dynamic content
async function handleDynamicRequest(request) {
  try {
    const cachedResponse = await caches.match(request);

    // Fetch from network in background
    const networkResponsePromise = fetch(request)
      .then((networkResponse) => {
        if (networkResponse.ok) {
          const cache = caches.open(DYNAMIC_CACHE);
          cache.then((c) => c.put(request, networkResponse.clone()));
        }
        return networkResponse;
      })
      .catch((error) => {
        console.error("[SW] Network request failed:", error);
        return null;
      });

    // Return cached response immediately if available
    if (cachedResponse) {
      // Update cache in background
      networkResponsePromise;
      return cachedResponse;
    }

    // Wait for network if no cache
    const networkResponse = await networkResponsePromise;
    return (
      networkResponse || new Response("Content not available", { status: 404 })
    );
  } catch (error) {
    console.error("[SW] Dynamic request failed:", error);

    const cachedResponse = await caches.match(request);
    return (
      cachedResponse || new Response("Content not available", { status: 404 })
    );
  }
}

// Background sync for offline actions
self.addEventListener("sync", (event) => {
  if (event.tag === "background-sync") {

    event.waitUntil(performBackgroundSync());
  }
});

// Handle background sync
async function performBackgroundSync() {
  try {
    // Sync any pending data when connection is restored

    // Add your background sync logic here
  } catch (error) {
    console.error("[SW] Background sync failed:", error);
  }
}

// Push notifications (if needed in future)
self.addEventListener("push", (event) => {
/n  const options = {
    body: event.data ? event.data.text() : "New notification",
    icon: "/icon-192x192.png",
    badge: "/badge-72x72.png",
    tag: "p4c-notification",
    requireInteraction: true,
  };

  event.waitUntil(
    self.registration.showNotification("Properties 4 Creation", options),
  );
});

// Handle notification clicks
self.addEventListener("notificationclick", (event) => {
/n  event.notification.close();

  event.waitUntil(clients.openWindow("/"));
});
/n
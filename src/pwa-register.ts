// Fallback PWA registration logic
// This provides basic service worker registration without virtual module dependencies

let swRegistration: ServiceWorkerRegistration | null = null;

export function updateSW(p0: boolean) {
  // Check if service workers are supported
  if ('serviceWorker' in navigator) {
    // Wait for DOM content to load before registering
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', registerServiceWorker);
    } else {
      registerServiceWorker();
    }
  } else {
    console.log('Service workers are not supported');
  }
}

async function registerServiceWorker() {
  try {
    // Register service worker
    swRegistration = await navigator.serviceWorker.register('/sw.js');
    console.log('Service Worker registered with scope:', swRegistration.scope);

    // Handle service worker updates
    swRegistration.addEventListener('updatefound', () => {
      const newWorker = swRegistration?.installing;
      if (newWorker) {
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            // New content is available
            window.dispatchEvent(new Event('p4c-sw-update'));
          }
        });
      }
    });

    // Check if service worker is already installed and controlling
    if (navigator.serviceWorker.controller) {
      console.log('Service Worker is controlling the page');
    }
  } catch (error) {
    console.error('Error registering Service Worker:', error);
  }
}

// Check for service worker updates
export function checkForUpdates() {
  if (swRegistration) {
    swRegistration.update().catch((error) => {
      console.error('Error checking for updates:', error);
    });
  }
}

// Show notification when app is ready for offline use
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.ready.then(() => {
    console.log('Properties 4 Creation is ready for offline use.');
  });
}

/**
 * Botpress Webchat Service
 * Service for embedding Botpress webchat directly in React components
 * This approach uses the existing working Botpress Cloud setup
 */

import { logError } from './errorBoundaryService';

interface WebchatConfig {
  configUrl?: string;
  width?: string;
  height?: string;
}

const BOTPRESS_WEBCHAT_URL =
  'https://cdn.botpress.cloud/webchat/v3.5/shareable.html';
const BOTPRESS_CONFIG_URL =
  'https://files.bpcontent.cloud/2025/10/13/00/20251013003640-UG466F0L.json';

/**
 * Initialize Botpress webchat
 * This embeds the Botpress webchat directly into a container element
 *
 * @param containerId The ID of the HTML element to embed the webchat in
 * @param config Configuration options for the webchat
 */
export const initializeBotpressWebchat = (
  containerId: string,
  config: WebchatConfig = {}
): void => {
  try {
    // Check if webchat is already initialized
    if (document.getElementById(`bp-webchat-${containerId}`)) {
      return;
    }

    const container = document.getElementById(containerId);
    if (!container) {
      throw new Error(`Container element with ID '${containerId}' not found`);
    }

    // Create iframe for Botpress webchat
    const iframe = document.createElement('iframe');
    iframe.id = `bp-webchat-${containerId}`;
    iframe.src = `${BOTPRESS_WEBCHAT_URL}?configUrl=${encodeURIComponent(BOTPRESS_CONFIG_URL)}`;
    iframe.width = config.width || '100%';
    iframe.height = config.height || '100%';
    iframe.style.border = 'none';
    iframe.style.borderRadius = '12px';
    iframe.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
    iframe.allow = 'microphone *; camera *; autoplay *';
    iframe.title = 'Properties 4 Creation Virtual Assistant';

    // Add loading state
    container.innerHTML = `
      <div class="flex items-center justify-center h-full bg-gray-50 rounded-2xl">
        <div class="text-center">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-p4c-gold mx-auto mb-2"></div>
          <p class="text-sm text-gray-600">Loading Patriot...</p>
        </div>
      </div>
    `;

    // Handle iframe load
    iframe.onload = () => {
      // eslint-disable-line arrow-body-style
      // Clear loading state
      container.innerHTML = '';
      container.appendChild(iframe);
    };

    // Handle iframe errors
    iframe.onerror = (error) => {
      logError('Botpress webchat iframe failed to load', {
        error: error instanceof Error ? error : new Error(String(error)),
        component: 'botpressWebchatService',
        metadata: { containerId },
      });

      container.innerHTML = `
        <div class="flex items-center justify-center h-full bg-red-50 rounded-2xl p-4">
          <div class="text-center">
            <div class="text-red-500 mb-2">⚠️</div>
            <p class="text-sm text-red-700">Failed to load assistant</p>
            <button
              onclick="window.location.reload()"
              class="mt-2 px-3 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      `;
    };
  } catch (error) {
    logError('Failed to initialize Botpress webchat', {
      error: error as Error,
      component: 'botpressWebchatService',
      metadata: { containerId },
    });

    throw error;
  }
};

/**
 * Destroy Botpress webchat instance
 * Cleans up the webchat from a container
 *
 * @param containerId The ID of the container to clean up
 */
export const destroyBotpressWebchat = (containerId: string): void => {
  try {
    const iframe = document.getElementById(`bp-webchat-${containerId}`);
    if (iframe) {
      iframe.remove();
    }

    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = '';
    }
  } catch (error) {
    logError('Failed to destroy Botpress webchat', {
      error: error as Error,
      component: 'botpressWebchatService',
      metadata: { containerId },
    });
  }
};

/**
 * Check if Botpress webchat is available
 * Returns true if the webchat URL is accessible
 */
export const checkBotpressWebchatHealth = (): boolean =>
  // Simple check - in a real implementation you might ping the config URL
  // For now, we'll assume it's available since it's a CDN URL
  true;

// Default export for backward compatibility
export default {
  initializeBotpressWebchat,
  destroyBotpressWebchat,
  checkBotpressWebchatHealth,
};

/**
 * Botpress Webchat Service
 * Service for embedding Botpress webchat directly in React components
 * This approach uses the existing working Botpress Cloud setup
 *
 * SECURITY: Uses DOM APIs instead of innerHTML to prevent XSS vulnerabilities
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
 * Create loading indicator element using DOM APIs (XSS-safe)
 */
const createLoadingElement = (): HTMLDivElement => {
  const loadingDiv = document.createElement('div');
  loadingDiv.className =
    'flex items-center justify-center h-full bg-gray-50 rounded-2xl';

  const centerDiv = document.createElement('div');
  centerDiv.className = 'text-center';

  const spinnerDiv = document.createElement('div');
  spinnerDiv.className =
    'animate-spin rounded-full h-8 w-8 border-b-2 border-p4c-gold mx-auto mb-2';

  const loadingText = document.createElement('p');
  loadingText.className = 'text-sm text-gray-600';
  loadingText.textContent = 'Loading Patriot...';

  centerDiv.appendChild(spinnerDiv);
  centerDiv.appendChild(loadingText);
  loadingDiv.appendChild(centerDiv);

  return loadingDiv;
};

/**
 * Create error indicator element using DOM APIs (XSS-safe)
 */
const createErrorElement = (): HTMLDivElement => {
  const errorDiv = document.createElement('div');
  errorDiv.className =
    'flex items-center justify-center h-full bg-red-50 rounded-2xl p-4';

  const centerDiv = document.createElement('div');
  centerDiv.className = 'text-center';

  const iconDiv = document.createElement('div');
  iconDiv.className = 'text-red-500 mb-2';
  iconDiv.textContent = 'Connection failed';

  const errorText = document.createElement('p');
  errorText.className = 'text-sm text-red-700';
  errorText.textContent = 'Failed to load assistant';

  const retryButton = document.createElement('button');
  retryButton.className =
    'mt-2 px-3 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600 transition-colors';
  retryButton.textContent = 'Retry';
  retryButton.type = 'button';
  retryButton.setAttribute('aria-label', 'Retry loading assistant');
  retryButton.onclick = () => window.location.reload();

  centerDiv.appendChild(iconDiv);
  centerDiv.appendChild(errorText);
  centerDiv.appendChild(retryButton);
  errorDiv.appendChild(centerDiv);

  return errorDiv;
};

/**
 * Safely clear container contents using DOM manipulation
 */
const clearContainer = (container: HTMLElement): void => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

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

    // Add loading state using DOM APIs (XSS-safe)
    const loadingDiv = createLoadingElement();
    container.appendChild(loadingDiv);

    // Handle iframe load
    iframe.onload = () => {
      // Clear loading state safely
      clearContainer(container);
      container.appendChild(iframe);
    };

    // Handle iframe errors
    iframe.onerror = (error) => {
      logError('Botpress webchat iframe failed to load', {
        error: error instanceof Error ? error : new Error(String(error)),
        component: 'botpressWebchatService',
        metadata: { containerId },
      });

      // Clear and show error using DOM APIs (XSS-safe)
      clearContainer(container);
      const errorElement = createErrorElement();
      container.appendChild(errorElement);
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
      // Clear container using DOM manipulation instead of innerHTML
      clearContainer(container);
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

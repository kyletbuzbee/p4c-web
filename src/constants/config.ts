/**
 * Application Configuration Constants
 * Centralized configuration values for consistent timing and settings
 */

// Timing Constants (in milliseconds)
export const TIMING = {
  /** Simulated API call delay for form submissions */
  FORM_SUBMISSION_DELAY: 1500,
  /** Application form submission delay (slightly longer for complex processing) */
  APPLICATION_SUBMISSION_DELAY: 2000,
  /** Button press animation duration */
  BUTTON_PRESS_DURATION: 150,
  /** Cookie consent banner display delay to prevent layout shift */
  COOKIE_BANNER_DELAY: 1000,
} as const;

// Animation Durations (in milliseconds)
export const ANIMATION = {
  /** Quick transition duration */
  QUICK: 150,
  /** Standard transition duration */
  STANDARD: 300,
  /** Slow transition duration for dramatic effects */
  SLOW: 500,
} as const;

// API Configuration
export const API_CONFIG = {
  /** Default timeout for API requests (10 seconds) */
  DEFAULT_TIMEOUT: 10000,
  /** Maximum retry attempts for failed requests */
  MAX_RETRIES: 3,
  /** Delay between retry attempts */
  RETRY_DELAY: 1000,
} as const;

// Pagination
export const PAGINATION = {
  /** Default number of items per page */
  DEFAULT_PAGE_SIZE: 10,
  /** Maximum items per page */
  MAX_PAGE_SIZE: 50,
} as const;

// File Upload
export const FILE_UPLOAD = {
  /** Maximum file size in bytes (5MB) */
  MAX_FILE_SIZE: 5 * 1024 * 1024,
  /** Allowed image file types */
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
  /** Allowed document file types */
  ALLOWED_DOCUMENT_TYPES: ['application/pdf', 'application/msword'],
} as const;

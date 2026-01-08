/**
 * Error Boundary Service
 * Centralized error logging and monitoring service
 * Follows architectural rules for error handling
 */

type ErrorSeverity = 'low' | 'medium' | 'high' | 'critical';

/**
 * Log an error to the monitoring service
 */
export const logError = (
  message: string,
  options?: {
    error?: Error;
    component?: string;
    severity?: ErrorSeverity;
    metadata?: Record<string, unknown>;
  }
): void => {
  const { error, component, severity = 'medium', metadata } = options || {};

  // In development, also log to console
  if (import.meta.env.DEV) {
    console.error(`[ErrorBoundary] ${severity.toUpperCase()}: ${message}`, {
      component,
      metadata,
      error,
    });
  }

  // In production, send to monitoring service (placeholder for future integration)
  // TODO: Integrate with Sentry, LogRocket, or similar
};

/**
 * Log a warning message
 */
export const logWarning = (
  message: string,
  options?: {
    component?: string;
    metadata?: Record<string, unknown>;
  }
): void => {
  const { component, metadata } = options || {};

  if (import.meta.env.DEV) {
    console.warn(`[Warning] ${message}`, { component, metadata });
  }
};

/**
 * Log an info message
 */
export const logInfo = (
  message: string,
  options?: {
    component?: string;
    metadata?: Record<string, unknown>;
  }
): void => {
  const { component, metadata } = options || {};

  if (import.meta.env.DEV) {
    console.log(`[Info] ${message}`, { component, metadata });
  }
};

export default {
  logError,
  logWarning,
  logInfo,
};

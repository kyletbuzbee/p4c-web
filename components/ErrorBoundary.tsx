import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  enableLogging?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorId: string;
  timestamp: string;
}

class ErrorBoundary extends Component<Props, State> {
  public override state: State = {
    hasError: false,
    error: null,
    errorId: '',
    timestamp: '',
  };

  public static getDerivedStateFromError(error: Error): State {
    // Generate unique error ID for tracking
    const errorId = `ERR_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    return {
      hasError: true,
      error,
      errorId,
      timestamp: new Date().toISOString(),
    };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Enhanced error logging with security considerations
    this.logErrorToService(error, errorInfo, this.state.errorId);

    // Call custom error handler if provided
    this.props.onError?.(error, errorInfo);
  }

  private logErrorToService = async (
    error: Error,
    errorInfo: ErrorInfo,
    errorId: string,
  ) => {
    // Only log if enabled (security consideration)
    if (!this.props.enableLogging) {
      return;
    }

    try {
      // Sanitize error data to prevent information disclosure
      const sanitizedErrorData = {
        errorId,
        message: this.sanitizeErrorMessage(error.message),
        errorType: error.constructor.name,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent.substring(0, 200), // Limit length
        url: window.location.href,
        userId: this.getCurrentUserId(),
        // Stack trace - only include filename and line numbers, not full paths
        stack: this.sanitizeStackTrace(error.stack || ''),
        componentStack: this.sanitizeComponentStack(
          errorInfo.componentStack || '',
        ),
      };

      // Send to secure logging endpoint
      await fetch('/api/errors/log', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: JSON.stringify(sanitizedErrorData),
      });
    } catch (loggingError) {
      // Fail silently to avoid recursive errors
      console.warn('Failed to log error to service:', loggingError);
    }
  };

  private sanitizeErrorMessage = (message: string): string =>
    // Remove potential sensitive information from error messages
    message
      .replace(
        /api[_-]?key["\s]*[:=]["\s]*[a-zA-Z0-9\-_]+/gi,
        "api_key: [REDACTED]",
      )
      .replace(/token["\s]*[:=]["\s]*[a-zA-Z0-9\-_]+/gi, "token: [REDACTED]")
      .replace(/password["\s]*[:=]["\s]*[^,\s]+/gi, "password: [REDACTED]")
      .replace(/email["\s]*[:=]["\s]*[^,\s]+@[^,\s]+/gi, "email: [REDACTED]")
      .substring(0, 500); // Limit length

  private sanitizeStackTrace = (stack: string): string => {
    if (!stack) return '';

    return stack
      .split('\n')
      .slice(0, 10) // Limit stack depth
      .map((line) => {
        // Remove file paths, keep only filename and line number
        const match = line.match(/\(([^)]+)\)/);
        if (match) {
          const path = match[1] || '';
          const filename = path.split('/').pop() || path;
          return line.replace(path, filename);
        }
        return line;
      })
      .join('\n')
      .substring(0, 2000); // Limit total length
  };

  private sanitizeComponentStack = (componentStack: string): string => {
    if (!componentStack) return '';

    return componentStack
      .split('\n')
      .slice(0, 5) // Limit component stack depth
      .map((line) => {
        // Remove full component paths, keep only component names
        const match = line.match(/in\s+(\w+)/);
        if (match) {
          return `in ${match[1]}`;
        }
        return line.trim();
      })
      .join('\n')
      .substring(0, 500); // Limit length
  };

  private getCurrentUserId = (): string | null => {
    try {
      const userData = localStorage.getItem('p4c_user');
      if (userData) {
        const user = JSON.parse(userData);
        return user.id || null;
      }
    } catch {
      // Ignore parsing errors
    }
    return null;
  };

  private handleReload = () => {
    // Clear any corrupted state
    this.setState({
      hasError: false,
      error: null,
      errorId: '',
      timestamp: '',
    });

    // Reload the page
    window.location.reload();
  };

  private handleReset = () => {
    // Clear any corrupted state and try to recover
    this.setState({
      hasError: false,
      error: null,
      errorId: '',
      timestamp: '',
    });
  };

  private handleReportError = async () => {
    if (!this.state.error) return;

    try {
      // Create a simplified error report
      const reportData = {
        errorId: this.state.errorId,
        timestamp: this.state.timestamp,
        userAgent: navigator.userAgent.substring(0, 100),
        url: window.location.href,
        userMessage: 'User reported this error via error boundary',
      };

      await fetch('/api/errors/report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: JSON.stringify(reportData),
      });

      alert(
        'Error report submitted successfully. Thank you for your feedback!',
      );
    } catch (error) {
      alert('Failed to submit error report. Please try again later.');
    }
  };

  public override render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-p4c-beige p-4">
          <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full text-center border-t-4 border-red-500">
            <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
            <h1 className="text-2xl font-serif font-bold text-p4c-navy mb-2">
              Something went wrong
            </h1>
            <p className="text-gray-600 mb-2">
              We encountered an unexpected issue and are working to resolve it.
            </p>

            {/* Security-conscious error details */}
            <div className="bg-gray-50 p-3 rounded-lg mb-6 text-left">
              <p className="text-sm text-gray-500 mb-1">
                <strong>Error ID:</strong> {this.state.errorId}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                <strong>Time:</strong>{' '}
                {new Date(this.state.timestamp).toLocaleString()}
              </p>
              <p className="text-sm text-gray-500">
                <strong>Status:</strong> Application error detected
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={this.handleReset}
                className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md font-medium hover:bg-gray-300 transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={this.handleReload}
                className="flex-1 bg-p4c-navy text-white px-4 py-2 rounded-md font-bold hover:bg-p4c-slate transition-colors flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Reload Page
              </button>
              <button
                onClick={this.handleReportError}
                className="flex-1 bg-blue-100 text-blue-800 px-4 py-2 rounded-md font-medium hover:bg-blue-200 transition-colors text-sm"
              >
                Report This Error
              </button>
            </div>

            {/* Support contact */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                If this problem persists, please contact support at{' '}
                <a
                  href="mailto:support@p4c-homes.com"
                  className="text-blue-600 hover:underline"
                >
                  support@p4c-homes.com
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

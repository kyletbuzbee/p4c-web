import React, { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { useToast } from '../context/ToastContext';

// 1. Define the "Public" props (what you use in App.tsx)
interface ErrorBoundaryProps {
  children?: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  enableLogging?: boolean;
}

// 2. Define the "Internal" props (including the injected toast)
interface InternalProps extends ErrorBoundaryProps {
  toast: ReturnType<typeof useToast>;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorId: string;
  timestamp: string;
}

// 3. The Internal Class Component handles the logic
class ErrorBoundaryInternal extends Component<InternalProps, State> {
  public override state: State = {
    hasError: false,
    error: null,
    errorId: '',
    timestamp: '',
  };

  public static getDerivedStateFromError(error: Error): State {
    const errorId = `ERR_${Date.now()}_${Math.random()
      .toString(36)
      .substr(2, 9)}`;
    return {
      hasError: true,
      error,
      errorId,
      timestamp: new Date().toISOString(),
    };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.logErrorToService(error, errorInfo, this.state.errorId);
    this.props.onError?.(error, errorInfo);
  }

  private logErrorToService = (
    error: Error,
    errorInfo: ErrorInfo,
    errorId: string
  ) => {
    if (!this.props.enableLogging) return;

    try {
      const sanitizedErrorData = {
        errorId,
        message: this.sanitizeErrorMessage(error.message),
        errorType: error.constructor.name,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent.substring(0, 200),
        url: window.location.href,
        userId: this.getCurrentUserId(),
        stack: this.sanitizeStackTrace(error.stack || ''),
        componentStack: this.sanitizeComponentStack(
          errorInfo.componentStack || ''
        ),
      };

      // In a real env, you would fetch here.
      // mocking the call to avoid unused var warnings if you don't have the endpoint yet.
      // eslint-disable-next-line no-console
      console.debug('Logging error to service:', sanitizedErrorData);
    } catch (loggingError) {
      // eslint-disable-next-line no-console
      console.warn('Failed to log error:', loggingError);
    }
  };

  private sanitizeErrorMessage = (message: string): string =>
    message
      .replace(
        /api[_-]?key["\s]*[:=]["\s]*[a-zA-Z0-9\-_]+/gi,
        'api_key: [REDACTED]'
      )
      .replace(/token["\s]*[:=]["\s]*[a-zA-Z0-9\-_]+/gi, 'token: [REDACTED]')
      .substring(0, 500);

  private sanitizeStackTrace = (stack: string): string => {
    if (!stack) return '';
    return stack.substring(0, 2000);
  };

  private sanitizeComponentStack = (componentStack: string): string => {
    if (!componentStack) return '';
    return componentStack.substring(0, 500);
  };

  private getCurrentUserId = (): string | null => {
    try {
      const userData = localStorage.getItem('p4c_user');
      if (userData) return JSON.parse(userData).id || null;
    } catch {
      /* ignore */
    }
    return null;
  };

  private handleReload = () => {
    this.setState({ hasError: false, error: null, errorId: '', timestamp: '' });
    window.location.reload();
  };

  private handleReset = () => {
    this.setState({ hasError: false, error: null, errorId: '', timestamp: '' });
  };

  private handleReportError = () => {
    if (!this.state.error) return;
    try {
      this.props.toast.addToast(
        'Error report submitted successfully. Thank you for your feedback!',
        'success'
      );
    } catch {
      this.props.toast.addToast('Failed to submit report.', 'error');
    }
  };

  public override render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <div className="flex min-h-screen items-center justify-center bg-p4c-beige p-4">
          <div className="w-full max-w-md rounded-xl border-t-4 border-red-500 bg-white p-8 text-center shadow-2xl">
            <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-red-50">
              <AlertTriangle className="size-8 text-red-500" />
            </div>
            <h1 className="mb-2 font-serif text-2xl font-bold text-p4c-navy">
              Something went wrong
            </h1>
            <p className="mb-2 text-gray-600">
              We encountered an unexpected issue and are working to resolve it.
            </p>

            <div className="mb-6 rounded-lg bg-gray-50 p-3 text-left">
              <p className="mb-1 text-sm text-gray-500">
                <strong>Error ID:</strong> {this.state.errorId}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={this.handleReset}
                className="flex-1 rounded-md bg-gray-200 px-4 py-2 font-medium text-gray-800 hover:bg-gray-300"
              >
                Try Again
              </button>
              <button
                onClick={this.handleReload}
                className="flex flex-1 items-center justify-center gap-2 rounded-md bg-p4c-navy px-4 py-2 font-bold text-white hover:bg-p4c-slate"
              >
                <RefreshCw className="size-4" />
                Reload Page
              </button>
              <button
                onClick={this.handleReportError}
                className="flex-1 rounded-md bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 hover:bg-blue-200"
              >
                Report This Error
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// 4. The Exported Component is a functional wrapper that injects the hook
// This explicitly tells Typescript: "I only need ErrorBoundaryProps"
const ErrorBoundary: React.FC<ErrorBoundaryProps> = (props) => {
  const toast = useToast();
  return <ErrorBoundaryInternal {...props} toast={toast} />;
};

export default ErrorBoundary;

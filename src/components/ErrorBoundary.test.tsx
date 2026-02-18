/**
 * ErrorBoundary Component Tests
 */

import { render, screen, fireEvent } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import { ToastProvider } from '../context/ToastContext';

// Component that throws an error for testing
const ThrowError = ({ shouldThrow = true }: { shouldThrow?: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error</div>;
};

// Component that works fine
const WorkingComponent = () => <div data-testid="working">Working component</div>;

describe('ErrorBoundary', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Normal operation', () => {
    it('should render children when no error occurs', () => {
      render(
        <BrowserRouter>
          <ToastProvider>
            <ErrorBoundary>
              <WorkingComponent />
            </ErrorBoundary>
          </ToastProvider>
        </BrowserRouter>
      );

      expect(screen.getByTestId('working')).toBeInTheDocument();
    });

    it('should render without children (just the boundary)', () => {
      const { container } = render(
        <BrowserRouter>
          <ToastProvider>
            <ErrorBoundary>
              <div>Content</div>
            </ErrorBoundary>
          </ToastProvider>
        </BrowserRouter>
      );

      expect(container).toHaveTextContent('Content');
    });
  });

  describe('Error handling', () => {
    it('should catch errors and display fallback UI', () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

      render(
        <BrowserRouter>
          <ToastProvider>
            <ErrorBoundary>
              <ThrowError shouldThrow={true} />
            </ErrorBoundary>
          </ToastProvider>
        </BrowserRouter>
      );

      expect(screen.getByText(/Something went wrong/)).toBeInTheDocument();
      expect(screen.getByText(/Error ID:/)).toBeInTheDocument();
      
      consoleSpy.mockRestore();
    });

    it('should render custom fallback when provided', () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

      const CustomFallback = () => <div data-testid="custom-fallback">Custom Error UI</div>;

      render(
        <BrowserRouter>
          <ToastProvider>
            <ErrorBoundary fallback={<CustomFallback />}>
              <ThrowError shouldThrow={true} />
            </ErrorBoundary>
          </ToastProvider>
        </BrowserRouter>
      );

      expect(screen.getByTestId('custom-fallback')).toBeInTheDocument();
      expect(screen.queryByText(/Something went wrong/)).not.toBeInTheDocument();
      
      consoleSpy.mockRestore();
    });
  });

  describe('Error recovery actions', () => {
    it('should have a "Try Again" button that resets error state', () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

      const { rerender } = render(
        <BrowserRouter>
          <ToastProvider>
            <ErrorBoundary>
              <ThrowError shouldThrow={true} />
            </ErrorBoundary>
          </ToastProvider>
        </BrowserRouter>
      );

      expect(screen.getByText(/Something went wrong/)).toBeInTheDocument();

      // Click "Try Again" button
      const tryAgainButton = screen.getByRole('button', { name: /Try Again/i });
      fireEvent.click(tryAgainButton);

      // After reset, should render children again
      rerender(
        <BrowserRouter>
          <ToastProvider>
            <ErrorBoundary>
              <WorkingComponent />
            </ErrorBoundary>
          </ToastProvider>
        </BrowserRouter>
      );

      expect(screen.getByTestId('working')).toBeInTheDocument();
      
      consoleSpy.mockRestore();
    });

    it('should have a "Reload Page" button', () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      const reloadSpy = vi.spyOn(window.location, 'reload').mockImplementation(() => {});

      render(
        <BrowserRouter>
          <ToastProvider>
            <ErrorBoundary>
              <ThrowError shouldThrow={true} />
            </ErrorBoundary>
          </ToastProvider>
        </BrowserRouter>
      );

      const reloadButton = screen.getByRole('button', { name: /Reload Page/i });
      expect(reloadButton).toBeInTheDocument();

      consoleSpy.mockRestore();
      reloadSpy.mockRestore();
    });

    it('should have a "Report This Error" button', () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

      render(
        <BrowserRouter>
          <ToastProvider>
            <ErrorBoundary>
              <ThrowError shouldThrow={true} />
            </ErrorBoundary>
          </ToastProvider>
        </BrowserRouter>
      );

      const reportButton = screen.getByRole('button', { name: /Report This Error/i });
      expect(reportButton).toBeInTheDocument();

      consoleSpy.mockRestore();
    });
  });

  describe('Error ID generation', () => {
    it('should generate unique error IDs', () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

      const { rerender } = render(
        <BrowserRouter>
          <ToastProvider>
            <ErrorBoundary enableLogging={true}>
              <ThrowError shouldThrow={true} />
            </ErrorBoundary>
          </ToastProvider>
        </BrowserRouter>
      );

      const errorId1 = screen.getByText(/Error ID:/).textContent;

      // Reset and throw again
      const tryAgainButton = screen.getByRole('button', { name: /Try Again/i });
      fireEvent.click(tryAgainButton);

      rerender(
        <BrowserRouter>
          <ToastProvider>
            <ErrorBoundary enableLogging={true}>
              <ThrowError shouldThrow={true} />
            </ErrorBoundary>
          </ToastProvider>
        </BrowserRouter>
      );

      const errorId2 = screen.getByText(/Error ID:/).textContent;
      
      // Error IDs should be different
      expect(errorId1).not.toBe(errorId2);
      
      consoleSpy.mockRestore();
    });
  });

  describe('onError callback', () => {
    it('should call onError callback when error occurs', () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      const onErrorSpy = vi.fn();

      render(
        <BrowserRouter>
          <ToastProvider>
            <ErrorBoundary onError={onErrorSpy}>
              <ThrowError shouldThrow={true} />
            </ErrorBoundary>
          </ToastProvider>
        </BrowserRouter>
      );

      expect(onErrorSpy).toHaveBeenCalled();
      
      consoleSpy.mockRestore();
    });
  });

  describe('Accessibility', () => {
    it('should have proper error message structure', () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

      render(
        <BrowserRouter>
          <ToastProvider>
            <ErrorBoundary>
              <ThrowError shouldThrow={true} />
            </ErrorBoundary>
          </ToastProvider>
        </BrowserRouter>
      );

      // Check for proper heading
      expect(screen.getByRole('heading', { name: /Something went wrong/i })).toBeInTheDocument();

      consoleSpy.mockRestore();
    });
  });
});

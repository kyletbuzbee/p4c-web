/**
 * Toast Context Tests - Simplified
 */

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import { ToastProvider, useToast } from './ToastContext';

const TestConsumer = () => {
  const { addToast, removeToast } = useToast();
  
  return (
    <div>
      <button data-testid="add-success" onClick={() => addToast('Success message', 'success')}>
        Add Success
      </button>
      <button data-testid="add-error" onClick={() => addToast('Error message', 'error')}>
        Add Error
      </button>
    </div>
  );
};

describe('ToastContext', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('ToastProvider', () => {
    it('should render children correctly', () => {
      render(
        <ToastProvider>
          <div data-testid="child">Test Child</div>
        </ToastProvider>
      );

      expect(screen.getByTestId('child')).toBeInTheDocument();
    });

    it('should throw error when useToast is used outside provider', () => {
      const renderWithError = () => {
        render(<TestConsumer />);
      };

      expect(renderWithError).toThrow('useToast must be used within a ToastProvider');
    });

    it('should add success toast', async () => {
      render(
        <ToastProvider>
          <TestConsumer />
        </ToastProvider>
      );

      fireEvent.click(screen.getByTestId('add-success'));

      await waitFor(() => {
        expect(screen.getByText('Success message')).toBeInTheDocument();
      });
    });

    it('should add error toast', async () => {
      render(
        <ToastProvider>
          <TestConsumer />
        </ToastProvider>
      );

      fireEvent.click(screen.getByTestId('add-error'));

      await waitFor(() => {
        expect(screen.getByText('Error message')).toBeInTheDocument();
      });
    });
  });

  describe('Accessibility', () => {
    it('should have accessible notification region', () => {
      render(
        <ToastProvider>
          <TestConsumer />
        </ToastProvider>
      );

      const region = document.querySelector('[role="region"][aria-label="System Notifications"]');
      expect(region).toBeInTheDocument();
    });

    it('should have aria-live="polite" on notification region', () => {
      render(
        <ToastProvider>
          <TestConsumer />
        </ToastProvider>
      );

      const region = document.querySelector('[aria-live="polite"]');
      expect(region).toBeInTheDocument();
    });
  });
});

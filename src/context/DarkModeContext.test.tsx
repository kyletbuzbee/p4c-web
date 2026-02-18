/**
 * Dark Mode Context Tests - Simplified
 */

import { render, screen, fireEvent } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { DarkModeProvider, useDarkMode } from './DarkModeContext';

// Simple test wrapper
const TestConsumer = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  
  return (
    <div>
      <span data-testid="dark-mode">{isDarkMode ? 'dark' : 'light'}</span>
      <button data-testid="toggle" onClick={toggleDarkMode}>Toggle</button>
    </div>
  );
};

// Helper to properly mock localStorage
const createLocalStorageMock = () => {
  let store: Record<string, string> = {};
  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => { store[key] = value; }),
    removeItem: vi.fn((key: string) => { delete store[key]; }),
    clear: vi.fn(() => { store = {}; }),
    get length() { return Object.keys(store).length; },
    key: vi.fn((i: number) => Object.keys(store)[i] || null),
  };
};

describe('DarkModeContext', () => {
  let localStorageMock: ReturnType<typeof createLocalStorageMock>;

  beforeEach(() => {
    localStorageMock = createLocalStorageMock();
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
    
    // Clear document classes
    document.documentElement.classList.remove('dark');
    document.body.classList.remove('bg-gray-900', 'text-white');
    document.body.classList.add('bg-white', 'text-gray-900');
  });

  describe('useDarkMode hook', () => {
    it('should throw error when used outside provider', () => {
      const renderWithError = () => {
        render(<TestConsumer />);
      };
      expect(renderWithError).toThrow('useDarkMode must be used within a DarkModeProvider');
    });
  });

  describe('DarkModeProvider', () => {
    it('should render children correctly', () => {
      render(
        <DarkModeProvider>
          <div data-testid="child">Test Child</div>
        </DarkModeProvider>
      );

      expect(screen.getByTestId('child')).toBeInTheDocument();
    });

    it('should initialize with light mode when no localStorage value', () => {
      localStorageMock.getItem.mockReturnValue(null);

      render(
        <DarkModeProvider>
          <TestConsumer />
        </DarkModeProvider>
      );

      expect(screen.getByTestId('dark-mode').textContent).toBe('light');
    });

    it('should initialize with dark mode from localStorage', () => {
      localStorageMock.getItem.mockReturnValue('true');

      render(
        <DarkModeProvider>
          <TestConsumer />
        </DarkModeProvider>
      );

      expect(screen.getByTestId('dark-mode').textContent).toBe('dark');
    });

    it('should toggle dark mode when toggle button is clicked', () => {
      localStorageMock.getItem.mockReturnValue(null);

      render(
        <DarkModeProvider>
          <TestConsumer />
        </DarkModeProvider>
      );

      expect(screen.getByTestId('dark-mode').textContent).toBe('light');

      fireEvent.click(screen.getByTestId('toggle'));
      
      expect(screen.getByTestId('dark-mode').textContent).toBe('dark');
    });
  });
});

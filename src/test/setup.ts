/**
 * Global test setup file for Vitest
 * Configures the test environment for P4C React components
 */

import { vi } from 'vitest';

// Mock window.matchMedia for components that use it
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock ResizeObserver for components using it
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Suppress console.error in tests to reduce noise
// Only uncomment if debugging: vi.spyOn(console, 'error').mockImplementation(() => {});

// Set default test timeout
vi.setConfig({
  testTimeout: 10000,
});

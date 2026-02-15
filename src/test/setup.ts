import { vi } from 'vitest';

// Mock IntersectionObserver for LazyImage component
(globalThis as typeof globalThis).IntersectionObserver = function () {
  return {
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
    takeRecords: vi.fn(),
  };
} as unknown as typeof IntersectionObserver;

// Mock ResizeObserver
(globalThis as typeof globalThis).ResizeObserver = function () {
  return {
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  };
} as unknown as typeof ResizeObserver;

// Mock matchMedia for responsive design
window.matchMedia = vi.fn((query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}));

// Mock localStorage
(globalThis as typeof globalThis).localStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
  length: 0,
  key: vi.fn(),
};

// Extend expect with jest-dom matchers
import '@testing-library/jest-dom';

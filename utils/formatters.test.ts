/**
 * Unit tests for formatting utilities
 */

import { describe, it, expect } from 'vitest';
import {
  formatCurrency,
  formatNumber,
  formatDate,
  truncateText,
  getInitials,
  slugify,
} from './formatters';

describe('formatCurrency', () => {
  it('formats whole numbers correctly', () => {
    expect(formatCurrency(950)).toBe('$950');
  });

  it('formats numbers with cents', () => {
    expect(formatCurrency(950.50)).toBe('$951');
  });

  it('handles zero', () => {
    expect(formatCurrency(0)).toBe('$0');
  });

  it('formats large numbers with commas', () => {
    expect(formatCurrency(2400000)).toBe('$2,400,000');
  });

  it('respects custom currency options', () => {
    expect(formatCurrency(950, { minimumFractionDigits: 2 })).toBe('$950.00');
  });
});

describe('formatNumber', () => {
  it('formats numbers with thousands separators', () => {
    expect(formatNumber(1000)).toBe('1,000');
  });

  it('handles small numbers', () => {
    expect(formatNumber(100)).toBe('100');
  });

  it('formats large numbers', () => {
    expect(formatNumber(2400000)).toBe('2,400,000');
  });
});

describe('formatDate', () => {
  it('formats ISO date strings', () => {
    expect(formatDate('2023-10-15')).toBe('October 15, 2023');
  });

  it('handles invalid dates gracefully', () => {
    expect(formatDate('invalid-date')).toBe('Invalid Date');
  });

  it('respects custom format options', () => {
    expect(formatDate('2023-10-15', { year: '2-digit', month: 'short' })).toBe('Oct 23');
  });
});

describe('truncateText', () => {
  it('returns original text if shorter than max length', () => {
    expect(truncateText('Hello', 10)).toBe('Hello');
  });

  it('truncates text with ellipsis', () => {
    expect(truncateText('Hello World', 8)).toBe('Hello...');
  });

  it('handles exact max length', () => {
    expect(truncateText('Hello', 5)).toBe('Hello');
  });

  it('handles empty string', () => {
    expect(truncateText('', 10)).toBe('');
  });
});

describe('getInitials', () => {
  it('generates initials from full name', () => {
    expect(getInitials('John Doe')).toBe('JD');
  });

  it('handles single name', () => {
    expect(getInitials('John')).toBe('J');
  });

  it('handles multiple names', () => {
    expect(getInitials('John Michael Doe')).toBe('JM');
  });

  it('handles lowercase names', () => {
    expect(getInitials('john doe')).toBe('JD');
  });
});

describe('slugify', () => {
  it('converts text to URL-safe slug', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  it('removes special characters', () => {
    expect(slugify('Hello @#$% World')).toBe('hello-world');
  });

  it('replaces multiple spaces with single dash', () => {
    expect(slugify('Hello   World')).toBe('hello-world');
  });

  it('handles empty string', () => {
    expect(slugify('')).toBe('');
  });

  it('handles leading/trailing spaces', () => {
    expect(slugify('  Hello World  ')).toBe('hello-world');
  });
});

import { describe, it, expect } from 'vitest';
import { formatCurrency } from './src/utils/formatters';

describe('Formatter Tests', () => {
  it('should format currency correctly', () => {
    expect(formatCurrency(1000)).toBe('$1,000');
  });
});

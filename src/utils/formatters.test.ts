import {
  formatCurrency,
  formatNumber,
  formatDate,
  truncateText,
  getInitials,
  slugify,
} from './formatters';

describe('Formatters', () => {
  describe('formatCurrency', () => {
    it('should format numbers as USD currency', () => {
      expect(formatCurrency(1000)).toBe('$1,000');
      expect(formatCurrency(1500.5)).toBe('$1,501');
      expect(formatCurrency(500)).toBe('$500');
    });

    it('should handle large numbers correctly', () => {
      expect(formatCurrency(1000000)).toBe('$1,000,000');
      expect(formatCurrency(1234567.89)).toBe('$1,234,568');
    });

    it('should handle negative numbers', () => {
      expect(formatCurrency(-500)).toBe('-$500');
      expect(formatCurrency(-1234.56)).toBe('-$1,235');
    });

    it('should allow custom Intl.NumberFormat options', () => {
      expect(
        formatCurrency(1000, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      ).toBe('$1,000.00');
    });
  });

  describe('formatNumber', () => {
    it('should format numbers with thousands separators', () => {
      expect(formatNumber(1000)).toBe('1,000');
      expect(formatNumber(1234567)).toBe('1,234,567');
    });

    it('should handle decimal numbers', () => {
      expect(formatNumber(1234.56)).toBe('1,234.56');
    });
  });

  describe('formatDate', () => {
    it('should format ISO date strings', () => {
      const result = formatDate('2023-12-25');
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
    });

    it('should allow custom Intl.DateTimeFormat options', () => {
      const result = formatDate('2023-12-25', {
        month: 'short',
        year: 'numeric',
      });
      expect(typeof result).toBe('string');
    });
  });

  describe('truncateText', () => {
    it('should return text as-is if length <= maxLength', () => {
      expect(truncateText('Hello', 10)).toBe('Hello');
    });

    it('should truncate text to maxLength with ellipsis', () => {
      expect(truncateText('Hello World', 5)).toBe('Hello...');
      expect(truncateText('Hello World', 8)).toBe('Hello Wo...');
    });

    it('should handle empty string', () => {
      expect(truncateText('', 5)).toBe('');
    });
  });

  describe('getInitials', () => {
    it('should generate initials from full names', () => {
      expect(getInitials('John Doe')).toBe('JD');
      expect(getInitials('Jane Smith')).toBe('JS');
    });

    it('should handle single names', () => {
      expect(getInitials('John')).toBe('J');
    });

    it('should handle multi-part names', () => {
      expect(getInitials('John Doe Smith')).toBe('JD');
    });

    it('should handle empty string', () => {
      expect(getInitials('')).toBe('');
    });
  });

  describe('slugify', () => {
    it('should create URL-safe slugs', () => {
      expect(slugify('Hello World')).toBe('hello-world');
      expect(slugify('Hello   World')).toBe('hello-world');
    });

    it('should handle special characters', () => {
      expect(slugify('Hello!@#World')).toBe('helloworld');
    });

    it('should handle diacritics', () => {
      expect(slugify('Café')).toBe('caf'); // This is the current behavior
    });

    it('should trim and normalize whitespace', () => {
      expect(slugify('  Hello World  ')).toBe('hello-world');
    });
  });
});

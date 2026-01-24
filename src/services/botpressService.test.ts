/**
 * Botpress Service Tests
 * Unit tests for the Botpress service layer
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  sendChatMessage,
  checkBotpressHealth,
  validationUtils,
} from './botpressService';

// Mock the global fetch function
global.fetch = vi.fn();

describe('Botpress Service', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('validationUtils', () => {
    const { validateBase64, validateMimeType, sanitizeInput } = validationUtils;

    describe('validateBase64', () => {
      it('should return true for valid base64 strings', () => {
        expect(validateBase64('SGVsbG8gd29ybGQ=')).toBe(true);
        expect(validateBase64('aGVsbG8=')).toBe(true);
        expect(validateBase64('aGVsbG8gd29ybGQ=')).toBe(true);
      });

      it('should return false for invalid base64 strings', () => {
        expect(validateBase64('not-base64')).toBe(false);
        expect(validateBase64('')).toBe(false);
        expect(validateBase64('SGVsbG8gd29ybGQ!')).toBe(false);
      });

      it('should return false for non-string inputs', () => {
        expect(validateBase64(123 as any)).toBe(false);
        expect(validateBase64(null as any)).toBe(false);
        expect(validateBase64(undefined as any)).toBe(false);
      });
    });

    describe('validateMimeType', () => {
      it('should return true for allowed image mime types', () => {
        expect(validateMimeType('image/jpeg')).toBe(true);
        expect(validateMimeType('image/jpg')).toBe(true);
        expect(validateMimeType('image/png')).toBe(true);
        expect(validateMimeType('image/webp')).toBe(true);
      });

      it('should return false for disallowed mime types', () => {
        expect(validateMimeType('image/gif')).toBe(false);
        expect(validateMimeType('image/svg+xml')).toBe(false);
        expect(validateMimeType('application/pdf')).toBe(false);
      });
    });

    describe('sanitizeInput', () => {
      it('should sanitize HTML special characters', () => {
        expect(sanitizeInput('<script>alert("xss")</script>')).toBe(
          '<script>alert("xss")</script>'
        );
        expect(sanitizeInput('Hello & goodbye')).toBe('Hello & goodbye');
        expect(sanitizeInput("'single quotes'")).toBe(
          '&#x27;single quotes&#x27;'
        );
      });

      it('should return empty string for non-string inputs', () => {
        expect(sanitizeInput(123 as any)).toBe('');
        expect(sanitizeInput(null as any)).toBe('');
        expect(sanitizeInput(undefined as any)).toBe('');
      });
    });
  });

  describe('sendChatMessage', () => {
    it('should throw error for empty message', async () => {
      await expect(sendChatMessage('')).rejects.toThrow('Message is required');
    });

    it('should throw error for message that is too long', async () => {
      const longMessage = 'a'.repeat(4001);
      await expect(sendChatMessage(longMessage)).rejects.toThrow(
        'Message too long (max 4000 characters)'
      );
    });

    it('should call the API with correct parameters', async () => {
      const mockResponse = {
        success: true,
        message: 'Hello from Botpress!',
        timestamp: new Date().toISOString(),
      };

      vi.spyOn(global, 'fetch').mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      } as Response);

      const result = await sendChatMessage('Hello');

      expect(fetch).toHaveBeenCalledWith('/api/ai/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: JSON.stringify({
          message: 'Hello',
          history: [],
        }),
      });

      expect(result).toBe('Hello from Botpress!');
    });

    it('should handle API errors gracefully', async () => {
      vi.spyOn(global, 'fetch').mockResolvedValueOnce({
        ok: false,
        status: 500,
        json: () => Promise.resolve({ error: 'Internal server error' }),
      } as Response);

      await expect(sendChatMessage('Hello')).rejects.toThrow(
        'Internal server error'
      );
    });

    it('should handle network errors gracefully', async () => {
      vi.spyOn(global, 'fetch').mockRejectedValueOnce(
        new TypeError('Failed to fetch')
      );

      await expect(sendChatMessage('Hello')).rejects.toThrow(
        'Unable to connect to AI service. Please try again later.'
      );
    });
  });

  describe('checkBotpressHealth', () => {
    it('should return true for healthy service', async () => {
      const mockResponse = {
        status: 'healthy',
      };

      vi.spyOn(global, 'fetch').mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      } as Response);

      const result = await checkBotpressHealth();
      expect(result).toBe(true);
    });

    it('should return false for unhealthy service', async () => {
      vi.spyOn(global, 'fetch').mockResolvedValueOnce({
        ok: false,
      } as Response);

      const result = await checkBotpressHealth();
      expect(result).toBe(false);
    });

    it('should return false on network error', async () => {
      vi.spyOn(global, 'fetch').mockRejectedValueOnce(
        new Error('Network error')
      );

      const result = await checkBotpressHealth();
      expect(result).toBe(false);
    });
  });
});

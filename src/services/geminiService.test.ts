/**
 * Unit tests for geminiService.ts
 * Tests validation utilities and service functions
 */

import {
  editImageWithGemini,
  sendChatMessage,
  checkAiServiceHealth,
  validationUtils,
} from '../../services/geminiService';

describe('geminiService Validation Utilities', () => {
  describe('validateBase64', () => {
    it('should return true for valid base64 string', () => {
      expect(validationUtils.validateBase64('SGVsbG8gV29ybGQ=')).toBe(true);
      expect(validationUtils.validateBase64('dGVzdDEyMzQ=')).toBe(true);
      expect(validationUtils.validateBase64('YWJjZGVmZ2hpamtsbW5vcA==')).toBe(true);
    });

    it('should return false for invalid base64 string', () => {
      expect(validationUtils.validateBase64('')).toBe(false);
      expect(validationUtils.validateBase64('!!!')).toBe(false);
      expect(validationUtils.validateBase64(null as unknown as string)).toBe(false);
      expect(validationUtils.validateBase64(undefined as unknown as string)).toBe(false);
    });

    it('should return false for non-string input', () => {
      expect(validationUtils.validateBase64(123 as unknown as string)).toBe(false);
      expect(validationUtils.validateBase64({} as unknown as string)).toBe(false);
    });
  });

  describe('validateMimeType', () => {
    it('should return true for allowed mime types', () => {
      expect(validationUtils.validateMimeType('image/jpeg')).toBe(true);
      expect(validationUtils.validateMimeType('image/jpg')).toBe(true);
      expect(validationUtils.validateMimeType('image/png')).toBe(true);
      expect(validationUtils.validateMimeType('image/webp')).toBe(true);
    });

    it('should return false for disallowed mime types', () => {
      expect(validationUtils.validateMimeType('image/gif')).toBe(false);
      expect(validationUtils.validateMimeType('image/bmp')).toBe(false);
      expect(validationUtils.validateMimeType('application/pdf')).toBe(false);
      expect(validationUtils.validateMimeType('')).toBe(false);
    });
  });

  describe('sanitizeInput', () => {
    it('should sanitize HTML special characters', () => {
      expect(validationUtils.sanitizeInput('<script>alert("xss")</script>')).toBe('<script>alert("xss")</script>');
      expect(validationUtils.sanitizeInput("It's a test")).toBe("It&#x27;s a test");
      expect(validationUtils.sanitizeInput('AT&T')).toBe('AT&T');
      expect(validationUtils.sanitizeInput('<div>Content</div>')).toBe('<div>Content</div>');
    });

    it('should return empty string for non-string input', () => {
      expect(validationUtils.sanitizeInput(null as unknown as string)).toBe('');
      expect(validationUtils.sanitizeInput(undefined as unknown as string)).toBe('');
      expect(validationUtils.sanitizeInput(123 as unknown as string)).toBe('');
    });

    it('should pass through safe strings unchanged', () => {
      expect(validationUtils.sanitizeInput('Hello World')).toBe('Hello World');
      expect(validationUtils.sanitizeInput('Property at 123 Main St')).toBe('Property at 123 Main St');
    });
  });
});

describe('geminiService API Functions', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('editImageWithGemini', () => {
    it('should throw error for invalid base64 image', async () => {
      await expect(
        editImageWithGemini('!!!invalid!!!', 'image/jpeg', 'Make it brighter')
      ).rejects.toThrow('Invalid image format');
    });

    it('should throw error for unsupported mime type', async () => {
      await expect(
        editImageWithGemini('SGVsbG8gV29ybGQ=', 'image/gif', 'Make it brighter')
      ).rejects.toThrow('Unsupported image format');
    });

    it('should throw error for empty prompt', async () => {
      await expect(
        editImageWithGemini('SGVsbG8gV29ybGQ=', 'image/jpeg', '')
      ).rejects.toThrow('Prompt is required');
    });

    it('should throw error for prompt exceeding max length', async () => {
      const longPrompt = 'a'.repeat(1001);
      await expect(
        editImageWithGemini('SGVsbG8gV29ybGQ=', 'image/jpeg', longPrompt)
      ).rejects.toThrow('Prompt too long');
    });

    it('should throw error for non-string prompt', async () => {
      await expect(
        editImageWithGemini('SGVsbG8gV29ybGQ=', 'image/jpeg', null as unknown as string)
      ).rejects.toThrow('Prompt is required');
    });
  });

  describe('sendChatMessage', () => {
    it('should throw error for empty message', async () => {
      await expect(
        sendChatMessage('')
      ).rejects.toThrow('Message is required');
    });

    it('should throw error for non-string message', async () => {
      await expect(
        sendChatMessage(null as unknown as string)
      ).rejects.toThrow('Message is required');
    });

    it('should throw error for message exceeding max length', async () => {
      const longMessage = 'a'.repeat(4001);
      await expect(
        sendChatMessage(longMessage)
      ).rejects.toThrow('Message too long');
    });

    it('should handle empty history array gracefully', async () => {
      globalThis.fetch = vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        json: () => Promise.resolve({ success: true, message: 'Hello back!' }),
      });
      const result = await sendChatMessage('Hello', []);
      expect(Array.isArray(result)).toBe(false);
      expect(result).toBe('Hello back!');
    });
  });

  describe('checkAiServiceHealth', () => {
    it('should return false on fetch failure', async () => {
      globalThis.fetch = vi.fn().mockRejectedValue(new Error('Network error'));
      const result = await checkAiServiceHealth();
      expect(result).toBe(false);
    });

    it('should return false for non-ok response', async () => {
      globalThis.fetch = vi.fn().mockResolvedValue({
        ok: false,
        status: 500,
        json: () => Promise.resolve({}),
      });
      const result = await checkAiServiceHealth();
      expect(result).toBe(false);
    });

    it('should return false when status is not healthy', async () => {
      globalThis.fetch = vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        json: () => Promise.resolve({ status: 'unhealthy' }),
      });
      const result = await checkAiServiceHealth();
      expect(result).toBe(false);
    });
  });
});

describe('validationUtils export', () => {
  it('should export all validation functions', () => {
    expect(validationUtils).toHaveProperty('validateBase64');
    expect(validationUtils).toHaveProperty('validateMimeType');
    expect(validationUtils).toHaveProperty('sanitizeInput');
    expect(typeof validationUtils.validateBase64).toBe('function');
    expect(typeof validationUtils.validateMimeType).toBe('function');
    expect(typeof validationUtils.sanitizeInput).toBe('function');
  });
});

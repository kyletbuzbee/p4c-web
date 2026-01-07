/**
 * Unit tests for Gemini Service validation utilities
 */

import { describe, it, expect } from 'vitest';
import { validationUtils } from './geminiService';

const { validateBase64, validateMimeType, sanitizeInput } = validationUtils;

describe('validateBase64', () => {
  it('validates correct base64 strings', () => {
    expect(validateBase64('SGVsbG8gV29ybGQ=')).toBe(true);
    expect(validateBase64('dGVzdA==')).toBe(true);
    expect(validateBase64('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/')).toBe(true);
  });

  it('rejects invalid base64 characters', () => {
    expect(validateBase64('Hello@World')).toBe(false);
    expect(validateBase64('test<script>')).toBe(false);
  });

  it('rejects non-string inputs', () => {
    expect(validateBase64(null as unknown as string)).toBe(false);
    expect(validateBase64(undefined as unknown as string)).toBe(false);
    expect(validateBase64(123 as unknown as string)).toBe(false);
    expect(validateBase64({} as unknown as string)).toBe(false);
  });

  it('rejects empty strings', () => {
    expect(validateBase64('')).toBe(false);
  });

  it('rejects strings with invalid padding', () => {
    expect(validateBase64('abc')).toBe(false);
    expect(validateBase64('abcd')).toBe(true);
  });
});

describe('validateMimeType', () => {
  it('validates allowed image types', () => {
    expect(validateMimeType('image/jpeg')).toBe(true);
    expect(validateMimeType('image/jpg')).toBe(true);
    expect(validateMimeType('image/png')).toBe(true);
    expect(validateMimeType('image/webp')).toBe(true);
  });

  it('rejects disallowed mime types', () => {
    expect(validateMimeType('image/gif')).toBe(false);
    expect(validateMimeType('image/svg+xml')).toBe(false);
    expect(validateMimeType('application/pdf')).toBe(false);
    expect(validateMimeType('text/plain')).toBe(false);
  });

  it('handles case sensitivity', () => {
    expect(validateMimeType('IMAGE/JPEG')).toBe(false);
    expect(validateMimeType('Image/Jpeg')).toBe(false);
  });
});

describe('sanitizeInput', () => {
  it('escapes HTML special characters', () => {
    expect(sanitizeInput('<script>alert("xss")</script>')).toBe('<script>alert("xss")</script>');
    expect(sanitizeInput('<div>Hello</div>')).toBe('<div>Hello</div>');
    expect(sanitizeInput("onclick='alert(1)'")).toBe('onclick=&#x27;alert(1)&#x27;');
  });

  it('escapes ampersands', () => {
    expect(sanitizeInput('AT&T')).toBe('AT&T');
    expect(sanitizeInput('A & B')).toBe('A & B');
  });

  it('returns empty string for non-string inputs', () => {
    expect(sanitizeInput(null as unknown as string)).toBe('');
    expect(sanitizeInput(undefined as unknown as string)).toBe('');
    expect(sanitizeInput(123 as unknown as string)).toBe('');
  });

  it('preserves safe characters', () => {
    expect(sanitizeInput('Hello World 123')).toBe('Hello World 123');
    expect(sanitizeInput('test@example.com')).toBe('test@example.com');
  });

  it('handles mixed content', () => {
    expect(sanitizeInput('Hello <World> & "Friends"')).toBe('Hello <World> & "Friends"');
  });
});

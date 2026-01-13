/**
 * Botpress Service Layer
 * Client-side service for Botpress AI operations
 * Maintains same interface as geminiService for easy migration
 */

import { logError } from './errorBoundaryService';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: T; // For chat responses
  error?: string;
  code?: string;
  timestamp?: string;
}

interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}

const API_BASE_URL = '/api';

// Input validation utilities (maintained from geminiService for consistency)
const validateBase64 = (base64Image: string): boolean => {
  if (typeof base64Image !== 'string') return false;
  const base64Regex = /^[A-Za-z0-9+/]*={0,2}$/;
  return base64Regex.test(base64Image) && base64Image.length > 0;
};

const validateMimeType = (mimeType: string): boolean => {
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  return allowedTypes.includes(mimeType);
};

const sanitizeInput = (input: string): string => {
  if (typeof input !== 'string') return '';
  return input.replace(/[<>\"'&]/g, (match) => {
    const entities: Record<string, string> = {
      '<': '<',
      '>': '>',
      '"': '"',
      "'": '&#x27;',
      '&': '&',
    };
    // Type assertion: match is guaranteed to be a key of entities due to regex
    return entities[match as keyof typeof entities] || '';
  });
};

/**
 * Sends a chat message to Botpress via secure proxy
 * Maintains same interface as geminiService.sendChatMessage for compatibility
 *
 * @param message The user's message.
 * @param history The chat history.
 * @returns The model's text response.
 */
export const sendChatMessage = async (
  message: string,
  history: ChatMessage[] = []
): Promise<string> => {
  try {
    // Input validation (maintained from geminiService)
    if (!message || typeof message !== 'string') {
      throw new Error('Message is required');
    }

    if (message.length > 4000) {
      throw new Error('Message too long (max 4000 characters)');
    }

    // Validate history format
    if (!Array.isArray(history)) {
      history = [];
    }

    // Sanitize message
    const sanitizedMessage = sanitizeInput(message);
    const response = await fetch(`${API_BASE_URL}/ai/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      body: JSON.stringify({
        message: sanitizedMessage,
        history: history.map((msg) => ({
          role: msg.role,
          parts: [{ text: sanitizeInput(msg.parts[0]?.text || '') }],
        })),
      }),
    });

    if (!response.ok) {
      const errorData: ApiResponse<null> = await response.json().catch(() => ({
        success: false,
        error: 'Server communication error',
      }));

      throw new Error(errorData.error || `HTTP ${response.status}`);
    }

    const result: ApiResponse<string> = await response.json();

    if (!result.success || !result.message) {
      throw new Error(result.error || 'Chat processing failed');
    }
    return result.message;
  } catch (error) {
    logError('Botpress chat error', {
      error: error as Error,
      component: 'botpressService',
    });

    // Provide user-friendly error messages (maintained from geminiService)
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error(
        'Unable to connect to AI service. Please try again later.'
      );
    }

    throw error;
  }
};

/**
 * Health check for the Botpress service
 * Maintains same interface as geminiService.checkAiServiceHealth
 * @returns Promise<boolean> indicating service availability
 */
export const checkBotpressHealth = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`, {
      method: 'GET',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
    });

    if (!response.ok) {
      return false;
    }

    const data = await response.json();
    return data.status === 'healthy';
  } catch (error) {
    logError('Botpress health check failed', {
      error: error as Error,
      component: 'botpressService',
    });
    return false;
  }
};

/**
 * Image editing with Botpress (if supported)
 * This is a placeholder - Botpress may not support image editing like Gemini
 * For now, maintain the interface but throw a clear error
 *
 * @param base64Image The source image in base64 format
 * @param mimeType The mime type of the image
 * @param prompt The user's text instruction for editing
 * @returns Promise that rejects with clear error about unsupported feature
 */
export const editImageWithBotpress = async (
  base64Image: string,
  mimeType: string,
  prompt: string
): Promise<string> => {
  // Botpress doesn't typically support image editing like Gemini
  // This maintains interface compatibility but provides clear feedback
  throw new Error(
    `Image editing is not supported with Botpress. This feature was available with Gemini but is not part of the Botpress integration. Attempted to edit ${mimeType} image (${base64Image.length} bytes) with prompt: "${prompt}"`
  );
};

// Export validation utilities for testing (maintained from geminiService)
export const validationUtils = {
  validateBase64,
  validateMimeType,
  sanitizeInput,
};

// Default export for backward compatibility
export default {
  sendChatMessage,
  checkBotpressHealth,
  editImageWithBotpress,
  validationUtils,
};

/**
 * Secure Client-Side Service for AI Operations
 * All sensitive operations are now handled server-side via proxy
 * This eliminates API key exposure vulnerabilities
 */

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

// Input validation utilities
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
      '&': '&'
    };
    return entities[match];
  });
};

/**
 * Edits an image based on a text prompt using secure server proxy
 * 
 * @param base64Image The source image in base64 format (without the data prefix).
 * @param mimeType The mime type of the image.
 * @param prompt The user's text instruction for editing.
 * @returns A promise resolving to the base64 data URI of the generated image.
 */
export const editImageWithGemini = async (
  base64Image: string,
  mimeType: string,
  prompt: string
): Promise<string> => {
  try {
    // Input validation - CRITICAL for security
    if (!validateBase64(base64Image)) {
      throw new Error('Invalid image format');
    }
    
    if (!validateMimeType(mimeType)) {
      throw new Error('Unsupported image format');
    }
    
    if (!prompt || typeof prompt !== 'string') {
      throw new Error('Prompt is required');
    }
    
    if (prompt.length > 1000) {
      throw new Error('Prompt too long (max 1000 characters)');
    }

    // Sanitize inputs
    const sanitizedPrompt = sanitizeInput(prompt);
    
    console.log('Sending image edit request to secure proxy...');
    
    const response = await fetch(`${API_BASE_URL}/ai/edit-image`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: JSON.stringify({
        base64Image,
        mimeType,
        prompt: sanitizedPrompt
      })
    });

    if (!response.ok) {
      const errorData: ApiResponse<null> = await response.json().catch(() => ({
        success: false,
        error: 'Server communication error'
      }));
      
      throw new Error(errorData.error || `HTTP ${response.status}`);
    }

    const result: ApiResponse<string> = await response.json();
    
    if (!result.success || !result.data) {
      throw new Error(result.error || 'Image processing failed');
    }
    
    console.log('Image edit successful');
    return result.data;
    
  } catch (error) {
    console.error('Image edit error:', error);
    
    // Provide user-friendly error messages
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error('Unable to connect to AI service. Please try again later.');
    }
    
    throw error;
  }
};

/**
 * Sends a chat message to Gemini via secure proxy
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
    // Input validation
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
    
    console.log('Sending chat request to secure proxy...');
    
    const response = await fetch(`${API_BASE_URL}/ai/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: JSON.stringify({
        message: sanitizedMessage,
        history: history.map(msg => ({
          role: msg.role,
          parts: [{ text: sanitizeInput(msg.parts[0]?.text || '') }]
        }))
      })
    });

    if (!response.ok) {
      const errorData: ApiResponse<null> = await response.json().catch(() => ({
        success: false,
        error: 'Server communication error'
      }));
      
      throw new Error(errorData.error || `HTTP ${response.status}`);
    }

    const result: ApiResponse<string> = await response.json();
    
    if (!result.success || !result.message) {
      throw new Error(result.error || 'Chat processing failed');
    }
    
    console.log('Chat response successful');
    return result.message;
    
  } catch (error) {
    console.error('Chat error:', error);
    
    // Provide user-friendly error messages
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error('Unable to connect to AI service. Please try again later.');
    }
    
    throw error;
  }
};

/**
 * Health check for the AI service
 * @returns Promise<boolean> indicating service availability
 */
export const checkAiServiceHealth = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`, {
      method: 'GET',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    });
    
    if (!response.ok) {
      return false;
    }
    
    const data = await response.json();
    return data.status === 'healthy';
  } catch (error) {
    console.error('Health check failed:', error);
    return false;
  }
};

// Export validation utilities for testing
export const validationUtils = {
  validateBase64,
  validateMimeType,
  sanitizeInput
};

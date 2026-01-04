
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { sendChatMessage } from '../services/geminiService';

// Mock the GoogleGenAI library
vi.mock('@google/genai', () => {
  return {
    GoogleGenAI: vi.fn().mockImplementation(() => ({
      chats: {
        create: vi.fn().mockReturnValue({
          sendMessage: vi.fn().mockResolvedValue({
            text: 'Hello, this is a mock response from Patriot.'
          })
        })
      },
      models: {
        generateContent: vi.fn()
      }
    })),
    Chat: vi.fn()
  };
});

describe('Gemini Service', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('sendChatMessage should return text response on success', async () => {
    const history = [{ role: 'user', parts: [{ text: 'Hi' }] }] as any;
    const response = await sendChatMessage('How are you?', history);
    expect(response).toBe('Hello, this is a mock response from Patriot.');
  });

  it('sendChatMessage should handle API failures gracefully', async () => {
    // Override mock to throw error
    const { GoogleGenAI } = await import('@google/genai');
    (GoogleGenAI as any).mockImplementationOnce(() => ({
      chats: {
        create: vi.fn().mockReturnValue({
          sendMessage: vi.fn().mockRejectedValue(new Error('Network error'))
        })
      }
    }));

    await expect(sendChatMessage('Hi', [])).rejects.toThrow('Failed to connect to AI service.');
  });
});

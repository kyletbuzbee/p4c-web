import {
  GoogleGenerativeAI,
  ChatSession as GoogleChatSession,
} from '@google/generative-ai';

// Initialize Google Generative AI with API key
// eslint-disable-next-line dot-notation
const apiKey =
  (import.meta.env as Record<string, string>)['VITE_GEMINI_API_KEY'] ||
  // eslint-disable-next-line dot-notation
  process.env['VITE_GEMINI_API_KEY'];

if (!apiKey) {
  // eslint-disable-next-line no-console
  console.warn(
    'Gemini API key not found. Set VITE_GEMINI_API_KEY in your environment variables.'
  );
}

const genAI = new GoogleGenerativeAI(apiKey || '');

interface Message {
  role: 'user' | 'model';
  text: string;
}

class GeminiService {
  private chatSession: GoogleChatSession | null = null;
  private isInitialized = false;

  /**
   * Initialize the Gemini service with the specified model
   */
  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      // Use the cost-effective gemini-2.5-flash model
      const model = genAI.getGenerativeModel({
        model: 'gemini-2.5-flash',
        systemInstruction: {
          role: 'system',
          parts: [
            {
              text: `You are Patriot, a virtual concierge for Properties 4 Creation (P4C).
            Help veterans with housing/vouchers and their families find suitable homes.
            Your tone should be warm, professional, and supportive.
            Focus on providing helpful information about housing options,
            veteran resources, and the application process.
            You are knowledgeable about East Texas housing market and veteran benefits.`,
            },
          ],
        },
      });

      // Configure generation parameters for cost efficiency
      const generationConfig = {
        temperature: 0.7,
        topK: 1,
        topP: 1,
        maxOutputTokens: 250, // Limit tokens to save quota
        stopSequences: ['\n\n'],
      };

      this.chatSession = model.startChat({
        generationConfig,
        history: [],
      }) as GoogleChatSession;

      this.isInitialized = true;
      // eslint-disable-next-line no-console
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to initialize Gemini service:', error);
      throw new Error('Gemini service initialization failed');
    }
  }

  /**
   * Send a chat message to the Gemini model
   * @param message - The user's message
   * @returns Promise with the model's response
   */
  async sendChatMessage(message: string): Promise<string> {
    if (!this.isInitialized) {
      await this.initialize();
    }

    try {
      if (!this.chatSession) {
        throw new Error('Chat session not initialized');
      }

      const result = await this.chatSession.sendMessage(message);
      const response = result.response;
      const text = response.text();

      return text;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error sending chat message:', error);

      // Return a helpful fallback message
      if (error instanceof Error) {
        if (error.message.includes('quota')) {
          return "I'm sorry, but I've reached my usage limit for today. Please try again later, or contact our team directly for assistance with your housing needs.";
        }
        if (error.message.includes('API key')) {
          return "I'm currently unable to access the AI service. Please try refreshing the page or contact our support team for assistance.";
        }
      }

      return "I apologize, but I'm experiencing technical difficulties. Please try your question again in a moment, or contact our team directly for immediate assistance with your housing needs.";
    }
  }

  /**
   * Edit an image with Gemini (placeholder for future implementation)
   * @param imageData - Base64 encoded image data (not used yet)
   * @param prompt - The editing prompt (not used yet)
   * @returns Promise with the edited image or error message
   */
  async editImageWithGemini(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _imageData: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _prompt: string
  ): Promise<string> {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      // Note: The gemini-2.5-flash model is primarily text-focused
      // For image editing, you would typically use gemini-pro-vision
      // This is a placeholder that returns a helpful message

      return `I'm currently unable to edit images directly. However, I can help you with:

      1. **Finding suitable properties** based on your preferences
      2. **Understanding veteran housing benefits** and how to apply for them
      3. **Guidance on the application process** for our properties
      4. **Information about available housing programs** in East Texas

      If you have a specific property image you'd like to discuss or need help with any housing-related questions, please let me know!`;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error editing image:', error);
      return "I'm sorry, but I'm currently unable to process image editing requests. Please try again later or contact our team for assistance.";
    }
  }

  /**
   * Get the current chat history
   */
  async getChatHistory(): Promise<Message[]> {
    if (!this.chatSession) {
      return [];
    }

    try {
      const history = await this.chatSession.getHistory();
      return history.map((entry: any) => ({
        role: entry.role === 'user' ? 'user' : 'model',
        text: entry.parts[0]?.text || '',
      }));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error getting chat history:', error);
      return [];
    }
  }

  /**
   * Clear the chat history
   */
  async clearChatHistory(): Promise<void> {
    if (this.chatSession) {
      try {
        // Restart the chat session to clear history
        await this.initialize();
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error clearing chat history:', error);
      }
    }
  }
}

// Export singleton instance
export const geminiService = new GeminiService();

// Export types for use in components
export type { Message };
export default geminiService;

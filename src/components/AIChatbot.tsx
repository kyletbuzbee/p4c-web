import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, Loader2, Sparkles, User } from 'lucide-react';
import { geminiService } from '../services/geminiService';

interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: "Hello! I'm Patriot, your virtual concierge at Properties 4 Creation. How can I help you find your perfect home today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    setError(null);

    // Add user message to chat
    const userMessageObj: Message = {
      role: 'user',
      text: userMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessageObj]);
    setIsTyping(true);

    try {
      // Send message to Gemini service
      const response = await geminiService.sendChatMessage(userMessage);

      // Add AI response to chat
      const aiMessageObj: Message = {
        role: 'model',
        text: response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessageObj]);
    } catch (err) {
      console.error('Chat error:', err);
      setError('Failed to send message. Please try again.');

      // Add fallback error message
      const errorMessageObj: Message = {
        role: 'model',
        text: "I'm sorry, I'm experiencing technical difficulties right now. Please try again in a moment, or contact our team directly for immediate assistance.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessageObj]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSendMessage(e);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setError(null);
    }
  };

  const clearChat = async () => {
    try {
      await geminiService.clearChatHistory();
      setMessages([
        {
          role: 'model',
          text: "Chat cleared! How can I help you today?",
          timestamp: new Date(),
        },
      ]);
    } catch (err) {
      console.error('Error clearing chat:', err);
      setError('Failed to clear chat history.');
    }
  };

  const formatTime = (date: Date) =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleChat}
          className={`w-16 h-16 rounded-full shadow-lg transition-all duration-300 ${
            isOpen
              ? 'bg-p4c-navy text-white hover:bg-p4c-navy/90'
              : 'bg-p4c-gold text-p4c-navy hover:bg-p4c-goldHover'
          }`}
          aria-label="Open chat"
        >
          {isOpen ? (
            <X className="w-8 h-8 mx-auto" />
          ) : (
            <Sparkles className="w-8 h-8 mx-auto" />
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 bg-white border border-p4c-navy/20 rounded-xl shadow-2xl z-50 overflow-hidden animate-slide-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-p4c-navy to-p4c-gold p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">Patriot AI Concierge</h3>
                  <p className="text-xs opacity-80">Your housing assistant</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={clearChat}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  title="Clear chat"
                >
                  <X className="w-4 h-4" />
                </button>
                <button
                  onClick={toggleChat}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  title="Close chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="h-96 overflow-y-auto p-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                    message.role === 'user'
                      ? 'bg-p4c-gold text-p4c-navy'
                      : 'bg-white text-gray-800'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {message.role === 'user' ? (
                      <User className="w-4 h-4" />
                    ) : (
                      <Bot className="w-4 h-4 text-p4c-gold" />
                    )}
                    <span className="text-xs text-gray-500">
                      {formatTime(message.timestamp)}
                    </span>
                  </div>
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="bg-white px-4 py-2 rounded-2xl">
                  <div className="flex items-center gap-2">
                    <Bot className="w-4 h-4 text-p4c-gold" />
                    <span className="text-xs text-gray-500">Typing</span>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-p4c-gold rounded-full animate-bounce" />
                      <div
                        className="w-2 h-2 bg-p4c-gold rounded-full animate-bounce"
                        style={{ animationDelay: '0.1s' }}
                      />
                      <div
                        className="w-2 h-2 bg-p4c-gold rounded-full animate-bounce"
                        style={{ animationDelay: '0.2s' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="flex justify-start mb-4">
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-2xl">
                  <p className="text-sm">{error}</p>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-p4c-navy/20">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-p4c-gold focus:border-transparent"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className={`p-2 rounded-lg transition-colors ${
                  !inputValue.trim() || isTyping
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-p4c-navy text-white hover:bg-p4c-navy/90'
                }`}
                title="Send message"
              >
                {isTyping ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Powered by Google Gemini Flash
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;

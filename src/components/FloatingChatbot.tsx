import React, { useState, useEffect, useRef } from 'react';
import BotAvatar from './BotAvatar';
import {
  initializeBotpressWebchat,
  destroyBotpressWebchat,
} from '../services/botpressWebchatService';

interface FloatingChatbotProps {
  className?: string;
}

const FloatingChatbot: React.FC<FloatingChatbotProps> = ({
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const containerId = 'botpress-webchat-container';

  useEffect(() => {
    if (isOpen && !isLoaded) {
      // Initialize webchat when opened
      try {
        initializeBotpressWebchat(containerId, {
          width: '100%',
          height: '400px',
        });
        setIsLoaded(true);
      } catch (error) {
        console.error('Failed to initialize chatbot:', error);
      }
    } else if (!isOpen && isLoaded) {
      // Clean up when closed
      try {
        destroyBotpressWebchat(containerId);
        setIsLoaded(false);
      } catch (error) {
        console.error('Failed to destroy chatbot:', error);
      }
    }
  }, [isOpen, isLoaded]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-50 p-4 bg-p4c-navy hover:bg-p4c-navy/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-p4c-gold/50 ${className}`}
        aria-label={isOpen ? 'Close chat assistant' : 'Open chat assistant'}
        title={isOpen ? 'Close chat assistant' : 'Open chat assistant'}
      >
        <BotAvatar size={32} className="transition-transform duration-300" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-p4c-navy text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BotAvatar size={24} />
              <div>
                <h3 className="font-semibold text-sm">Patriot Assistant</h3>
                <p className="text-xs opacity-90">Properties 4 Creation</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:text-p4c-gold transition-colors p-1"
              aria-label="Close chat"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Chat Container */}
          <div
            id={containerId}
            ref={chatContainerRef}
            className="h-96 bg-gray-50"
            style={{ minHeight: '400px' }}
          />

          {/* Footer */}
          <div className="bg-gray-50 px-4 py-2 border-t border-gray-200">
            <p className="text-xs text-gray-600 text-center">
              Powered by Botpress • Veteran-Owned Business
            </p>
          </div>
        </div>
      )}

      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleChat}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default FloatingChatbot;

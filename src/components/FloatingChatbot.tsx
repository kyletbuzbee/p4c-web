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
        // Log error in development only
        if (import.meta.env.DEV) {
          console.error('Failed to initialize chatbot:', error);
        }
      }
    } else if (!isOpen && isLoaded) {
      // Clean up when closed
      try {
        destroyBotpressWebchat(containerId);
        setIsLoaded(false);
      } catch (error) {
        // Log error in development only
        if (import.meta.env.DEV) {
          console.error('Failed to destroy chatbot:', error);
        }
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
        className={`hover:bg-p4c-navy/90 focus:ring-p4c-gold/50 fixed bottom-6 right-6 z-50 rounded-full bg-p4c-navy p-4 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4${className}`}
        aria-label={isOpen ? 'Close chat assistant' : 'Open chat assistant'}
        title={isOpen ? 'Close chat assistant' : 'Open chat assistant'}
      >
        <BotAvatar size={32} className="transition-transform duration-300" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between bg-p4c-navy p-4 text-white">
            <div className="flex items-center space-x-3">
              <BotAvatar size={24} />
              <div>
                <h3 className="text-sm font-semibold">Patriot Assistant</h3>
                <p className="text-xs opacity-90">Properties 4 Creation</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="p-1 text-white transition-colors hover:text-p4c-gold"
              aria-label="Close chat"
            >
              <svg
                className="size-5"
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
          <div className="border-t border-gray-200 bg-gray-50 px-4 py-2">
            <p className="text-center text-xs text-gray-600">
              Powered by Botpress • Veteran-Owned Business
            </p>
          </div>
        </div>
      )}

      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={toggleChat}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default FloatingChatbot;

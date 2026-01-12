import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Loader2,
  Bot,
  Wifi,
  WifiOff,
  RefreshCw,
} from 'lucide-react';
import {
  sendChatMessage,
  checkBotpressHealth,
} from '../services/botpressService';
import { logError } from '../services/errorBoundaryService';

interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

type ConnectionState = 'checking' | 'online' | 'offline' | 'error';

const AIChatbotEnhanced: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: "Welcome to Properties 4 Creation! I'm Patriot, your virtual concierge. How can I help you find your home today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [connectionStatus, setConnectionStatus] =
    useState<ConnectionState>('checking');
  const [retryCount, setRetryCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Connection status monitoring
  useEffect(() => {
    const checkConnection = async () => {
      try {
        const isHealthy = await checkBotpressHealth();
        setConnectionStatus(isHealthy ? 'online' : 'offline');
        setRetryCount(0);
      } catch (error) {
        setConnectionStatus('error');
        logError('Connection check failed', {
          error: error as Error,
          component: 'AIChatbotEnhanced',
        });
      }
    };

    // Initial check
    checkConnection();

    // Set up periodic checks
    const interval = setInterval(checkConnection, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  useEffect((): (() => void) | void => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      const handleKeyDown = (e: KeyboardEvent): void => {
        if (e.key === 'Escape') {
          setIsOpen(false);
          return;
        }
        if (e.key === 'Tab' && chatContainerRef.current) {
          const focusableElements = chatContainerRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[
            focusableElements.length - 1
          ] as HTMLElement;

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  const handleRetryConnection = async () => {
    setConnectionStatus('checking');
    setRetryCount((prev) => prev + 1);

    try {
      const isHealthy = await checkBotpressHealth();
      if (isHealthy) {
        setConnectionStatus('online');
        setRetryCount(0);

        // Add a success message
        setMessages((prev) => [
          ...prev,
          {
            role: 'model',
            text: "Connection restored! I'm ready to help you again.",
            timestamp: new Date(),
          },
        ]);
      } else {
        setConnectionStatus('offline');
      }
    } catch (error) {
      setConnectionStatus('error');
      logError('Manual connection retry failed', {
        error: error as Error,
        component: 'AIChatbotEnhanced',
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || connectionStatus !== 'online') return;

    const userMessage = input;
    setInput('');
    setIsLoading(true);

    // Add user message immediately
    setMessages((prev) => [
      ...prev,
      {
        role: 'user',
        text: userMessage,
        timestamp: new Date(),
      },
    ]);

    try {
      const response = await sendChatMessage(userMessage);
      setMessages((prev) => [
        ...prev,
        {
          role: 'model',
          text: response,
          timestamp: new Date(),
        },
      ]);
    } catch (error) {
      logError('Chat failure', {
        error: error as Error,
        component: 'AIChatbotEnhanced',
      });

      setMessages((prev) => [
        ...prev,
        {
          role: 'model',
          text: "I'm having trouble connecting to the AI service. Please try again in a moment or check your internet connection.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const getConnectionStatusColor = () => {
    switch (connectionStatus) {
      case 'online':
        return 'text-green-500 bg-green-100';
      case 'offline':
        return 'text-yellow-500 bg-yellow-100';
      case 'error':
        return 'text-red-500 bg-red-100';
      case 'checking':
        return 'text-blue-500 bg-blue-100';
      default:
        return 'text-gray-500 bg-gray-100';
    }
  };

  const getConnectionStatusIcon = () => {
    switch (connectionStatus) {
      case 'online':
        return <Wifi className="w-3 h-3 animate-pulse" />;
      case 'offline':
        return <WifiOff className="w-3 h-3" />;
      case 'error':
        return <WifiOff className="w-3 h-3" />;
      case 'checking':
        return <Loader2 className="w-3 h-3 animate-spin" />;
      default:
        return <WifiOff className="w-3 h-3" />;
    }
  };

  const canSendMessage = connectionStatus === 'online' && !isLoading;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {isOpen && (
        <div
          ref={chatContainerRef}
          className="bg-white w-[380px] h-[550px] rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden mb-4 pointer-events-auto animate-fade-in-up ring-1 ring-black/5"
          role="dialog"
          aria-label="Patriot: P4C Virtual Concierge"
        >
          {/* Header with connection status */}
          <div className="bg-p4c-navy p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="bg-p4c-gold p-1.5 rounded-full shadow-md">
                <Bot className="w-4 h-4 text-p4c-navy" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-sm font-serif">
                  Patriot Concierge
                </h3>
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getConnectionStatusColor()}`}
                  >
                    {getConnectionStatusIcon()}
                    {connectionStatus === 'online' && 'Connected'}
                    {connectionStatus === 'offline' && 'Offline'}
                    {connectionStatus === 'error' && 'Error'}
                    {connectionStatus === 'checking' && 'Checking...'}
                  </span>
                  {connectionStatus === 'error' && (
                    <button
                      onClick={handleRetryConnection}
                      className="flex items-center gap-1 text-xs text-white hover:text-p4c-gold transition-colors"
                      aria-label="Retry connection"
                    >
                      <RefreshCw className="w-3 h-3" />
                      Retry
                    </button>
                  )}
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/10 p-1.5 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-p4c-gold"
              aria-label="Close concierge chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Connection warning banner */}
          {connectionStatus !== 'online' && (
            <div className="bg-yellow-50 border-b border-yellow-200 p-3">
              <div className="flex items-start gap-2">
                <span className="text-yellow-600 mt-0.5">⚠️</span>
                <div className="text-sm text-yellow-800">
                  <strong>Service Status:</strong>
                  {connectionStatus === 'checking' && ' Checking connection...'}
                  {connectionStatus === 'offline' &&
                    ' AI service is currently offline. Messages cannot be sent.'}
                  {connectionStatus === 'error' &&
                    ' Connection error detected. Please check your internet or try again.'}
                  {retryCount > 0 && ` (Retry attempt: ${retryCount})`}
                </div>
              </div>
            </div>
          )}

          <div
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50"
            aria-live="polite"
            aria-relevant="additions"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-p4c-navy text-white rounded-br-sm'
                      : 'bg-white border border-gray-100 text-gray-800 rounded-bl-sm'
                  }`}
                >
                  <span className="sr-only">
                    {msg.role === 'user' ? 'You:' : 'Patriot:'}
                  </span>
                  <div className="opacity-80 text-xs mb-1">
                    {msg.timestamp.toLocaleTimeString()}
                  </div>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-bl-sm shadow-sm flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-p4c-gold" />
                  <span className="text-xs text-gray-500 font-medium italic">
                    Patriot is searching listings...
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-3 bg-white border-t border-gray-100 flex gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                connectionStatus === 'online'
                  ? 'Ask about availability in Tyler...'
                  : 'Service unavailable - please wait for connection...'
              }
              disabled={!canSendMessage}
              aria-label="Message Patriot"
              className={`flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-p4c-gold focus:ring-2 focus:ring-p4c-gold/20 transition-all bg-gray-50 focus:bg-white ${
                !canSendMessage ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            />
            <button
              type="submit"
              disabled={!canSendMessage}
              className={`p-2.5 rounded-xl transition-all shadow-sm hover:shadow-md active:scale-95 focus:outline-none focus:ring-2 ${
                canSendMessage
                  ? 'bg-p4c-gold text-p4c-navy hover:bg-p4c-goldHover'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              aria-label="Send message to concierge"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Footer info */}
          <div className="px-3 py-2 bg-gray-50 text-xs text-gray-500 border-t border-gray-100 text-center">
            {connectionStatus === 'online'
              ? 'Secure connection active • Messages are encrypted'
              : 'Please wait for service to come online'}
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-p4c-navy text-white p-4 rounded-full shadow-xl hover:bg-p4c-slate transition-all duration-300 hover:scale-105 pointer-events-auto border-2 border-p4c-gold group focus:outline-none focus:ring-4 focus:ring-p4c-gold/50 relative"
        aria-label={
          isOpen
            ? 'Close assistance chat'
            : 'Chat with Patriot for housing assistance'
        }
        aria-expanded={isOpen}
      >
        {/* Connection status indicator */}
        <div
          className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
            connectionStatus === 'online'
              ? 'bg-green-500'
              : connectionStatus === 'checking'
                ? 'bg-blue-500 animate-pulse'
                : 'bg-red-500'
          }`}
        >
          {connectionStatus === 'checking' && (
            <Loader2 className="w-2 h-2 animate-spin mx-auto my-0.5" />
          )}
        </div>

        {isOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <MessageSquare className="w-7 h-7" />
        )}
      </button>
    </div>
  );
};

export default AIChatbotEnhanced;

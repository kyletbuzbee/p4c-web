import React, { useState, useEffect } from 'react';

interface AccessibilityToolsProps {
  className?: string;
}

const AccessibilityTools: React.FC<AccessibilityToolsProps> = ({
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [contrast, setContrast] = useState('normal');
  const [readingMode, setReadingMode] = useState(false);
  const [focusMode, setFocusMode] = useState(false);
  const [audioAssistance, setAudioAssistance] = useState(false);

  // Apply styles to document
  useEffect(() => {
    const root = document.documentElement;

    // Font size
    root.style.setProperty('--accessibility-font-size', `${fontSize}%`);

    // Contrast
    if (contrast === 'high') {
      root.classList.add('high-contrast');
      root.classList.remove('dark-high-contrast');
    } else if (contrast === 'dark-high') {
      root.classList.add('dark-high-contrast');
      root.classList.remove('high-contrast');
    } else {
      root.classList.remove('high-contrast', 'dark-high-contrast');
    }

    // Reading mode
    if (readingMode) {
      root.classList.add('reading-mode');
    } else {
      root.classList.remove('reading-mode');
    }

    // Focus mode
    if (focusMode) {
      root.classList.add('focus-mode');
    } else {
      root.classList.remove('focus-mode');
    }
  }, [fontSize, contrast, readingMode, focusMode]);

  const increaseFontSize = () => {
    if (fontSize < 150) setFontSize((prev) => prev + 10);
  };

  const decreaseFontSize = () => {
    if (fontSize > 80) setFontSize((prev) => prev - 10);
  };

  const toggleContrast = () => {
    setContrast((prev) => {
      if (prev === 'normal') return 'high';
      if (prev === 'high') return 'dark-high';
      return 'normal';
    });
  };

  const toggleReadingMode = () => {
    setReadingMode(!readingMode);
  };

  const toggleFocusMode = () => {
    setFocusMode(!focusMode);
  };

  const toggleAudioAssistance = () => {
    setAudioAssistance(!audioAssistance);
    if (!audioAssistance) {
      // Announce feature activation
      const utterance = new SpeechSynthesisUtterance(
        'Audio assistance activated. Use keyboard shortcuts for navigation.'
      );
      speechSynthesis.speak(utterance);
    }
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case '+':
            e.preventDefault();
            increaseFontSize();
            break;
          case '-':
            e.preventDefault();
            decreaseFontSize();
            break;
          case '0':
            e.preventDefault();
            setFontSize(100);
            break;
          case 'k':
            e.preventDefault();
            toggleContrast();
            break;
          case 'r':
            e.preventDefault();
            toggleReadingMode();
            break;
          case 'f':
            e.preventDefault();
            toggleFocusMode();
            break;
          case 'm':
            e.preventDefault();
            toggleAudioAssistance();
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [fontSize, contrast, readingMode, focusMode, audioAssistance]);

  return (
    <>
      {/* Floating Accessibility Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 bg-p4c-navy text-white p-4 rounded-full shadow-lg hover:bg-p4c-gold hover:text-p4c-navy transition-all duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-p4c-gold focus:ring-offset-2 ${className}`}
        aria-label="Accessibility Tools"
        title="Accessibility Tools (Ctrl/Cmd + K for contrast, + and - for font size)"
      >
        <span className="text-lg">⚙️</span>
        {isOpen && (
          <span className="absolute -top-2 -right-2 w-3 h-3 bg-red-500 rounded-full" />
        )}
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 bg-white border border-gray-200 rounded-lg shadow-xl p-4 w-80 z-50 animate-in slide-in-from-bottom-2 duration-200">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-gray-800">Accessibility Tools</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close accessibility tools"
            >
              ✕
            </button>
          </div>

          <div className="space-y-4">
            {/* Font Size Control */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Font Size: {fontSize}%
              </label>
              <div className="flex gap-2">
                <button
                  onClick={decreaseFontSize}
                  disabled={fontSize <= 80}
                  className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Decrease font size"
                >
                  A-
                </button>
                <button
                  onClick={increaseFontSize}
                  disabled={fontSize >= 150}
                  className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Increase font size"
                >
                  A+
                </button>
              </div>
            </div>

            {/* Contrast Control */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contrast Mode
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setContrast('normal')}
                  className={`flex-1 px-3 py-2 rounded text-sm ${
                    contrast === 'normal'
                      ? 'bg-p4c-navy text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Normal
                </button>
                <button
                  onClick={() => setContrast('high')}
                  className={`flex-1 px-3 py-2 rounded text-sm ${
                    contrast === 'high'
                      ? 'bg-p4c-navy text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  High
                </button>
                <button
                  onClick={() => setContrast('dark-high')}
                  className={`flex-1 px-3 py-2 rounded text-sm ${
                    contrast === 'dark-high'
                      ? 'bg-p4c-navy text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Dark High
                </button>
              </div>
            </div>

            {/* Reading Mode */}
            <div>
              <button
                onClick={toggleReadingMode}
                className={`w-full flex items-center justify-between px-3 py-2 rounded ${
                  readingMode
                    ? 'bg-p4c-beige text-p4c-navy'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>Reading Mode</span>
                <span
                  className={`w-4 h-4 border-2 rounded ${
                    readingMode
                      ? 'bg-p4c-navy border-p4c-navy'
                      : 'border-gray-400'
                  }`}
                />
              </button>
            </div>

            {/* Focus Mode */}
            <div>
              <button
                onClick={toggleFocusMode}
                className={`w-full flex items-center justify-between px-3 py-2 rounded ${
                  focusMode
                    ? 'bg-p4c-beige text-p4c-navy'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>Focus Mode</span>
                <span
                  className={`w-4 h-4 border-2 rounded ${
                    focusMode
                      ? 'bg-p4c-navy border-p4c-navy'
                      : 'border-gray-400'
                  }`}
                />
              </button>
            </div>

            {/* Audio Assistance */}
            <div>
              <button
                onClick={toggleAudioAssistance}
                className={`w-full flex items-center justify-between px-3 py-2 rounded ${
                  audioAssistance
                    ? 'bg-p4c-beige text-p4c-navy'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>Audio Assistance</span>
                <span
                  className={`w-4 h-4 border-2 rounded ${
                    audioAssistance
                      ? 'bg-p4c-navy border-p4c-navy'
                      : 'border-gray-400'
                  }`}
                />
              </button>
            </div>

            {/* Keyboard Shortcuts */}
            <div className="pt-2 border-t border-gray-200">
              <p className="text-xs text-gray-600 mb-2">Keyboard Shortcuts:</p>
              <div className="text-xs space-y-1 text-gray-500">
                <div>Ctrl/Cmd + +/-: Font size</div>
                <div>Ctrl/Cmd + 0: Reset font</div>
                <div>Ctrl/Cmd + K: Contrast</div>
                <div>Ctrl/Cmd + R: Reading mode</div>
                <div>Ctrl/Cmd + F: Focus mode</div>
                <div>Ctrl/Cmd + M: Audio assistance</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityTools;

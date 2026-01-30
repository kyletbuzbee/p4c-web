import React, { useState, useEffect, useCallback, useRef } from 'react';

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

  // Use refs for stable access in event listeners
  const stateRef = useRef({
    fontSize,
    contrast,
    readingMode,
    focusMode,
    audioAssistance,
  });

  // Keep refs synced with state
  useEffect(() => {
    stateRef.current = {
      fontSize,
      contrast,
      readingMode,
      focusMode,
      audioAssistance,
    };
  }, [fontSize, contrast, readingMode, focusMode, audioAssistance]);

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

  const increaseFontSize = useCallback(() => {
    setFontSize((prev) => Math.min(prev + 10, 150));
  }, []);

  const decreaseFontSize = useCallback(() => {
    setFontSize((prev) => Math.max(prev - 10, 80));
  }, []);

  const toggleContrast = useCallback(() => {
    setContrast((prev) => {
      if (prev === 'normal') return 'high';
      if (prev === 'high') return 'dark-high';
      return 'normal';
    });
  }, []);

  const toggleReadingMode = useCallback(() => {
    setReadingMode((prev) => !prev);
  }, []);

  const toggleFocusMode = useCallback(() => {
    setFocusMode((prev) => !prev);
  }, []);

  const toggleAudioAssistance = useCallback(() => {
    setAudioAssistance((prev) => {
      const newValue = !prev;
      if (newValue) {
        // Announce feature activation
        const utterance = new SpeechSynthesisUtterance(
          'Audio assistance activated. Use keyboard shortcuts for navigation.'
        );
        speechSynthesis.speak(utterance);
      }
      return newValue;
    });
  }, []);

  // Keyboard shortcuts - stable event listener
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const { ctrlKey, metaKey } = e;
      if (!ctrlKey && !metaKey) return;

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
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [
    increaseFontSize,
    decreaseFontSize,
    toggleContrast,
    toggleReadingMode,
    toggleFocusMode,
    toggleAudioAssistance,
  ]);

  return (
    <>
      {/* Floating Accessibility Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 left-6 z-50 rounded-full bg-p4c-navy p-4 text-white shadow-lg transition-all duration-300 hover:bg-p4c-gold hover:text-p4c-navy focus:outline-none focus:ring-2 focus:ring-p4c-gold focus:ring-offset-2 ${className}`}
        aria-label="Accessibility Tools"
        title="Accessibility Tools (Ctrl/Cmd + K for contrast, + and - for font size)"
      >
        <span className="text-lg">⚙️</span>
        {isOpen && (
          <span className="absolute -left-2 -top-2 size-3 rounded-full bg-red-500" />
        )}
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="animate-in slide-in-from-bottom-2 fixed bottom-24 left-6 z-50 w-80 rounded-lg border border-gray-200 bg-white p-4 shadow-xl duration-200">
          <div className="mb-3 flex items-center justify-between">
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
              <span className="mb-2 block text-sm font-medium text-gray-700">
                Font Size: {fontSize}%
              </span>
              <div className="flex gap-2">
                <button
                  onClick={decreaseFontSize}
                  disabled={fontSize <= 80}
                  className="flex-1 rounded bg-gray-100 px-3 py-2 text-gray-700 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Decrease font size"
                >
                  A-
                </button>
                <button
                  onClick={increaseFontSize}
                  disabled={fontSize >= 150}
                  className="flex-1 rounded bg-gray-100 px-3 py-2 text-gray-700 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Increase font size"
                >
                  A+
                </button>
              </div>
            </div>

            {/* Contrast Control */}
            <div>
              <span className="mb-2 block text-sm font-medium text-gray-700">
                Contrast Mode
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setContrast('normal')}
                  className={`flex-1 rounded px-3 py-2 text-sm ${
                    contrast === 'normal'
                      ? 'bg-p4c-navy text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  aria-label="Normal contrast mode"
                >
                  Normal
                </button>
                <button
                  onClick={() => setContrast('high')}
                  className={`flex-1 rounded px-3 py-2 text-sm ${
                    contrast === 'high'
                      ? 'bg-p4c-navy text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  aria-label="High contrast mode"
                >
                  High
                </button>
                <button
                  onClick={() => setContrast('dark-high')}
                  className={`flex-1 rounded px-3 py-2 text-sm ${
                    contrast === 'dark-high'
                      ? 'bg-p4c-navy text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  aria-label="Dark high contrast mode"
                >
                  Dark High
                </button>
              </div>
            </div>

            {/* Reading Mode */}
            <div>
              <button
                onClick={toggleReadingMode}
                className={`flex w-full items-center justify-between rounded px-3 py-2 ${
                  readingMode
                    ? 'bg-p4c-beige text-p4c-navy'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-label={`Reading mode ${readingMode ? 'on' : 'off'}`}
              >
                <span>Reading Mode</span>
                <span
                  className={`size-4 rounded border-2 ${
                    readingMode
                      ? 'border-p4c-navy bg-p4c-navy'
                      : 'border-gray-400'
                  }`}
                />
              </button>
            </div>

            {/* Focus Mode */}
            <div>
              <button
                onClick={toggleFocusMode}
                className={`flex w-full items-center justify-between rounded px-3 py-2 ${
                  focusMode
                    ? 'bg-p4c-beige text-p4c-navy'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-label={`Focus mode ${focusMode ? 'on' : 'off'}`}
              >
                <span>Focus Mode</span>
                <span
                  className={`size-4 rounded border-2 ${
                    focusMode
                      ? 'border-p4c-navy bg-p4c-navy'
                      : 'border-gray-400'
                  }`}
                />
              </button>
            </div>

            {/* Audio Assistance */}
            <div>
              <button
                onClick={toggleAudioAssistance}
                className={`flex w-full items-center justify-between rounded px-3 py-2 ${
                  audioAssistance
                    ? 'bg-p4c-beige text-p4c-navy'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-label={`Audio assistance ${audioAssistance ? 'on' : 'off'}`}
              >
                <span>Audio Assistance</span>
                <span
                  className={`size-4 rounded border-2 ${
                    audioAssistance
                      ? 'border-p4c-navy bg-p4c-navy'
                      : 'border-gray-400'
                  }`}
                />
              </button>
            </div>

            {/* Keyboard Shortcuts */}
            <div className="border-t border-gray-200 pt-2">
              <p className="mb-2 text-xs text-gray-600">Keyboard Shortcuts:</p>
              <div className="space-y-1 text-xs text-gray-500">
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

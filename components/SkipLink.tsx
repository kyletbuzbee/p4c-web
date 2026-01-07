import React, { useEffect, useState, useCallback } from 'react';
import { ArrowRight, X } from 'lucide-react';

const SkipLink: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const hideSkipLink = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Show skip link when user presses Tab for the first time
      if (e.key === 'Tab' && !e.shiftKey) {
        setIsVisible(true);
      }
      // Dismiss with Escape key
      if (e.key === 'Escape') {
        hideSkipLink();
      }
    },
    [hideSkipLink]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.setAttribute('tabindex', '-1');
      mainContent.focus();
      mainContent.removeAttribute('tabindex');
    }
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] flex justify-start"
      role="region"
      aria-label="Skip navigation"
    >
      <a
        href="#main-content"
        onClick={handleClick}
        onKeyDown={(e) => e.key === 'Escape' && hideSkipLink()}
        className="skip-link inline-flex items-center px-4 py-3 bg-p4c-navy text-white font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-p4c-gold focus:ring-offset-2"
        aria-label="Skip to main content"
      >
        <span>Skip to main content</span>
        <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            hideSkipLink();
          }}
          onKeyDown={(e) => e.key === 'Enter' && hideSkipLink()}
          className="ml-3 p-1 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Dismiss skip link"
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>
      </a>
    </div>
  );
};

export default SkipLink;

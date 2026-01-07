import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const SkipLink: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Show skip link when user presses Tab for the first time
      if (e.key === 'Tab' && !e.shiftKey) {
        setIsVisible(true);
      }
    };

    // Hide after first press or when user clicks
    const handleClick = () => setIsVisible(false);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleClick);
    };
  }, []);

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
    <a
      href="#main-content"
      onClick={handleClick}
      className="skip-link"
      aria-label="Skip to main content"
    >
      Skip to main content
      <ArrowRight className="w-4 h-4 ml-2" />
    </a>
  );
};

export default SkipLink;

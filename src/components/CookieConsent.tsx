import React, { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';
import { TIMING } from '../constants/config';

const CookieConsent: React.FC = (): React.ReactNode => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('p4c_cookie_consent');
    if (!consent) {
      // Small delay to prevent layout shift on immediate load
      const timer = setTimeout(
        () => setIsVisible(true),
        TIMING.COOKIE_BANNER_DELAY
      );
      return () => clearTimeout(timer);
    }
    return undefined;
  }, []);

  const handleAccept = () => {
    localStorage.setItem('p4c_cookie_consent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('p4c_cookie_consent', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full animate-slide-in border-t border-gray-200 bg-white p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-start gap-4">
          <div className="hidden rounded-full bg-p4c-beige p-2 sm:block">
            <Cookie className="size-6 text-p4c-gold" />
          </div>
          <div className="text-sm text-gray-600">
            <p className="mb-1 font-bold text-p4c-navy">
              We value your privacy
            </p>
            <p>
              We use cookies to enhance your browsing experience, serve
              personalized content, and analyze our traffic. By clicking
              &quot;Accept&quot;, you consent to our use of cookies.{' '}
              <a
                href="/privacy"
                className="text-p4c-navy underline hover:text-p4c-gold"
              >
                Read our Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
        <div className="flex w-full gap-3 md:w-auto">
          <button
            onClick={handleDecline}
            className="flex-1 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 md:flex-none"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 rounded-md bg-p4c-navy px-6 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-p4c-slate md:flex-none"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;

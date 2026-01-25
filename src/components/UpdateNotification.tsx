import React, { useEffect, useState } from 'react';
import { RefreshCw, X } from 'lucide-react';
import { updateSW } from '../pwa-register'; // Ensure this points to your src/pwa-register.ts

export const UpdateNotification: React.FC = () => {
  const [showUpdate, setShowUpdate] = useState(false);

  useEffect(() => {
    // Listen for the custom event dispatched by pwa-register.ts
    // This event name 'p4c-sw-update' MUST match what is in pwa-register.ts
    const handleUpdateEvent = () => setShowUpdate(true);

    window.addEventListener('p4c-sw-update', handleUpdateEvent);

    return () => window.removeEventListener('p4c-sw-update', handleUpdateEvent);
  }, []);

  if (!showUpdate) return null;

  return (
    <div
      className="fixed bottom-4 right-4 z-50"
      role="alert"
      aria-live="polite"
    >
      <div className="bg-white border-l-4 border-p4c-gold rounded-r-xl shadow-2xl p-4 max-w-sm flex items-start gap-4 animate-bounce">
        <div className="text-p4c-navy mt-1">
          <RefreshCw className="w-5 h-5 animate-spin" />
        </div>

        <div className="flex-1">
          <h4 className="text-sm font-serif font-bold text-p4c-navy">
            Update Available
          </h4>
          <p className="text-xs text-slate-600 mt-1 mb-3">
            We&apos;ve updated the listings. Refresh to see the latest homes.
          </p>

          <div className="flex gap-2">
            <button
              onClick={() => updateSW()}
              className="px-3 py-1.5 bg-p4c-navy text-p4c-gold text-xs font-bold rounded hover:bg-slate-800 transition-colors"
            >
              Refresh Now
            </button>
            <button
              onClick={() => setShowUpdate(false)}
              className="px-3 py-1.5 text-slate-500 text-xs font-medium hover:text-slate-800 transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>

        <button
          onClick={() => setShowUpdate(false)}
          className="text-slate-400 hover:text-slate-600"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

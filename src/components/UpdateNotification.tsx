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
      <div className="flex max-w-sm animate-bounce items-start gap-4 rounded-r-xl border-l-4 border-p4c-gold bg-white p-4 shadow-2xl">
        <div className="mt-1 text-p4c-navy">
          <RefreshCw className="size-5 animate-spin" />
        </div>

        <div className="flex-1">
          <h4 className="font-serif text-sm font-bold text-p4c-navy">
            Update Available
          </h4>
          <p className="mb-3 mt-1 text-xs text-slate-600">
            We&apos;ve updated the listings. Refresh to see the latest homes.
          </p>

          <div className="flex gap-2">
            <button
              onClick={() => updateSW()}
              className="rounded bg-p4c-navy px-3 py-1.5 text-xs font-bold text-p4c-gold transition-colors hover:bg-slate-800"
            >
              Refresh Now
            </button>
            <button
              onClick={() => setShowUpdate(false)}
              className="px-3 py-1.5 text-xs font-medium text-slate-500 transition-colors hover:text-slate-800"
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
          <X className="size-4" />
        </button>
      </div>
    </div>
  );
};

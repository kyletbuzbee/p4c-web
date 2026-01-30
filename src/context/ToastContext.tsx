import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
} from 'react';
import type { ReactNode } from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

type ToastType = 'success' | 'error' | 'info';

interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  addToast: (message: string, type: ToastType) => void;
  removeToast: (id: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const timeoutIdsRef = useRef<Set<number>>(new Set());

  useEffect(
    () => () => {
      timeoutIdsRef.current.forEach((timeoutId) => {
        clearTimeout(timeoutId);
      });
      timeoutIdsRef.current.clear();
    },
    []
  );

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback(
    (message: string, type: ToastType) => {
      const id = Date.now();
      setToasts((prev) => [...prev, { id, message, type }]);

      const timeoutId = window.setTimeout(() => {
        removeToast(id);
        timeoutIdsRef.current.delete(timeoutId);
      }, 5000);

      timeoutIdsRef.current.add(timeoutId);
    },
    [removeToast]
  );

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div
        className="fixed bottom-6 right-6 z-[60] flex flex-col gap-3"
        role="region"
        aria-label="System Notifications"
        aria-live="polite"
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            role="alert"
            className={`animate-slide-in-from-bottom flex min-w-[320px] max-w-md items-start gap-3 rounded-xl border-l-4 p-4 text-white shadow-2xl ${
              toast.type === 'success'
                ? 'border-green-400 bg-green-700'
                : toast.type === 'error'
                  ? 'border-red-400 bg-red-700'
                  : 'border-p4c-gold bg-p4c-navy'
            }`}
          >
            <div className="mt-0.5 shrink-0">
              {toast.type === 'success' && (
                <CheckCircle className="size-5 text-green-200" />
              )}
              {toast.type === 'error' && (
                <AlertCircle className="size-5 text-red-200" />
              )}
              {toast.type === 'info' && (
                <Info className="size-5 text-p4c-gold" />
              )}
            </div>
            <p className="flex-1 text-sm font-semibold leading-snug">
              {toast.message}
            </p>
            <button
              onClick={() => removeToast(toast.id)}
              className="rounded-xl p-1 transition-colors hover:bg-white/10"
              aria-label="Dismiss notification"
            >
              <X className="size-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

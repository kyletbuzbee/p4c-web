import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  setDarkMode: (isDark: boolean) => void;
  systemPreference: 'light' | 'dark' | 'no-preference';
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

interface DarkModeProviderProps {
  children: ReactNode;
}

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Check localStorage first
    const saved = localStorage.getItem('p4c-dark-mode');
    if (saved !== null) {
      return JSON.parse(saved);
    }
    
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark;
  });

  const [systemPreference, setSystemPreference] = useState<'light' | 'dark' | 'no-preference'>('no-preference');

  // Detect system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const updateSystemPreference = (e: MediaQueryListEvent) => {
      setSystemPreference(e.matches ? 'dark' : 'light');
      // Only auto-switch if user hasn't explicitly set a preference
      const hasUserPreference = localStorage.getItem('p4c-dark-mode') !== null;
      if (!hasUserPreference) {
        setIsDarkMode(e.matches);
      }
    };

    // Initial check
    setSystemPreference(mediaQuery.matches ? 'dark' : 'light');

    // Listen for changes
    mediaQuery.addEventListener('change', updateSystemPreference);

    return () => {
      mediaQuery.removeEventListener('change', updateSystemPreference);
    };
  }, []);

  // Apply dark mode to document
  useEffect(() => {
    const root = document.documentElement;
    
    if (isDarkMode) {
      root.classList.add('dark');
      document.body.classList.add('bg-gray-900', 'text-white');
      document.body.classList.remove('bg-white', 'text-gray-900');
    } else {
      root.classList.remove('dark');
      document.body.classList.add('bg-white', 'text-gray-900');
      document.body.classList.remove('bg-gray-900', 'text-white');
    }

    // Store user preference
    localStorage.setItem('p4c-dark-mode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const setDarkMode = (isDark: boolean) => {
    setIsDarkMode(isDark);
  };

  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
        setDarkMode,
        systemPreference
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
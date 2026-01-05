import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';

interface DarkModeToggleProps {
  className?: string;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ className = '' }) => {
  const { isDarkMode, toggleDarkMode, systemPreference } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className={`p-2 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-p4c-navy focus:ring-opacity-50 ${className}`}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={`Current: ${isDarkMode ? 'Dark' : 'Light'} mode | System preference: ${systemPreference}`}
    >
      <div className="relative w-6 h-6">
        {/* Sun Icon */}
        <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${
          isDarkMode 
            ? 'opacity-0 scale-50 rotate-180' 
            : 'opacity-100 scale-100 rotate-0'
        }`}>
          <svg className="w-full h-full text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
          </svg>
        </div>
        
        {/* Moon Icon */}
        <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${
          isDarkMode 
            ? 'opacity-100 scale-100 rotate-0' 
            : 'opacity-0 scale-50 -rotate-180'
        }`}>
          <svg className="w-full h-full text-gray-200" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </div>
      </div>
      
      {/* Tooltip */}
      <span className="sr-only">
        {isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
      
      {/* System preference indicator */}
      {systemPreference !== 'no-preference' && (
        <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
              title={`System prefers ${systemPreference} mode`}>
        </span>
      )}
    </button>
  );
};

export default DarkModeToggle;
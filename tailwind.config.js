/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    // REMOVED redundant ./components and ./pages as they are inside src/
  ],
  darkMode: 'class', // ✅ CRITICAL: Enables manual dark mode toggling
  theme: {
    extend: {
      colors: {
        p4c: {
          navy: 'var(--color-navy)',
          beige: 'var(--color-beige)',
          gold: 'var(--color-gold)',
          goldHover: 'var(--color-gold-hover)',
          slate: 'var(--color-slate)',
        },
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards', // Adjusted duration for smoother entry
        'slide-in': 'slideIn 0.3s ease-out forwards', // Horizontal slide
        'slide-up': 'slideInFromBottom 0.5s ease-out forwards', // ✅ NEW: Vertical slide for sections
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        // ✅ NEW: Matches the slide-up animation
        slideInFromBottom: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

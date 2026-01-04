import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
        headers: {
          // Security Headers - CRITICAL for XSS Protection
          'X-Frame-Options': 'DENY',
          'X-Content-Type-Options': 'nosniff',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
          'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
          // Content Security Policy - XSS Prevention
          'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' http://localhost:3001; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests;"
        },
        proxy: {
          // Proxy API calls to secure server
          '/api': {
            target: 'http://localhost:3001',
            changeOrigin: true,
            secure: false,
            rewrite: (path) => path.replace(/^\/api/, '/api')
          }
        }
      },
      plugins: [react()],
      define: {
        // REMOVED: API key exposure vulnerability (CRITICAL FIX)
        // API keys are now handled server-side only via proxy
        'process.env.NODE_ENV': JSON.stringify(mode),
        'process.env.VITE_API_BASE_URL': JSON.stringify('/api')
      },
      resolve: {
        alias: {
          '@': new URL('.', import.meta.url).pathname,
        }
      },
      build: {
        sourcemap: mode !== 'production',
        rollupOptions: {
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom'],
              router: ['react-router-dom'],
              ui: ['lucide-react']
            }
          }
        }
      }
    };
  });

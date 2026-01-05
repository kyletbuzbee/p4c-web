import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    
    // GitHub Pages configuration
    const isProduction = mode === 'production';
    const repositoryName = env['VITE_REPOSITORY_NAME'] || '';
    const base = isProduction ? `/${repositoryName}/` : '/';
    
    return {
      base: base,
      server: {
        port: 3000,
        host: '0.0.0.0',
        headers: {
          // Security Headers - CRITICAL for XSS Protection
          'X-Frame-Options': 'DENY',
          'X-Content-Type-Options': 'nosniff',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
          'Strict-Transport-Security': 'mndax-age=31536000; includeSubDomains; preload',
          // Content Security Policy - XSS Prevention
          'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' http://localhost:3001; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests;"
        },
        proxy: {
          // Proxy API calls to secure server
          '/api': {
            target: 'http://localhost:3001',
            changeOrigin: true,
            secure: false,
            rewrite: (path) => path
          }
        }
      },
      plugins: [
        react(),
        // Add PWA and compression plugins in production
        ...(mode === 'production' ? [
          // These would be added when dependencies are installed
          // VitePWA({...}),
          // viteCompression({algorithm: 'gzip'})
        ] : [])
      ],
      define: {
        // REMOVED: API key exposure vulnerability (CRITICAL FIX)
        // API keys are now handled server-side only via proxy
        'process.env.NODE_ENV': JSON.stringify(mode),
        'process.env.VITE_API_BASE_URL': JSON.stringify('/api')
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        target: 'es2020',
        sourcemap: mode !== 'production',
        minify: 'terser',
        cssMinify: true,
        // Performance optimizations
        rollupOptions: {
          output: {
            // Manual chunks for better caching
            manualChunks: {
              // React and React DOM together
              react: ['react', 'react-dom'],
              // Router
              router: ['react-router-dom'],
              // UI library
              ui: ['lucide-react'],
              // AI service
              ai: ['@google/generative-ai'],
              // Utils
              utils: ['react-helmet-async']
            },
            // Optimize chunk file names
            chunkFileNames: 'js/[name]-[hash].js',
            assetFileNames: (assetInfo) => {
              if (/\.(png|jpe?g|gif|svg|webp)$/i.test(assetInfo.name || '')) {
                return `images/[name]-[hash][extname]`;
              }
              if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name || '')) {
                return `fonts/[name]-[hash][extname]`;
              }
              return `assets/[name]-[hash][extname]`;
            }
          }
        },
        // Optimize terser options
        terserOptions: {
          compress: {
            drop_console: mode === 'production',
            drop_debugger: mode === 'production',
            pure_funcs: mode === 'production' ? ['console.log', 'console.info', 'console.debug'] : []
          }
        },
        // Chunk size warnings
        chunkSizeWarningLimit: 1000
      },
      // Performance optimizations
      optimizeDeps: {
        include: [
          'react',
          'react-dom',
          'react-router-dom',
          'lucide-react',
          '@google/generative-ai'
        ]
      },
      // CSS optimizations
      css: {
        devSourcemap: mode !== 'production'
      }
    };
  });
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

interface EnvVariables {
  [key: string]: string | undefined;
  VITE_REPOSITORY_NAME?: string;
  VITE_USE_CUSTOM_DOMAIN?: string;
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '') as EnvVariables;

  // GitHub Pages configuration
  const isProduction = mode === 'production';
  // eslint-disable-next-line dot-notation
  const repositoryName = env['VITE_REPOSITORY_NAME'] || '';
  const useCustomDomain = env.VITE_USE_CUSTOM_DOMAIN === 'true';
  // For custom domain (CNAME), use root path '/'; for github.io pages, use repository path
  const base = isProduction
    ? useCustomDomain || !repositoryName
      ? '/'
      : `/${repositoryName}/`
    : '/';

  return {
    base,
    server: {
      port: 5173,
      host: '0.0.0.0', // Exposes the server to your local network (0.0.0.0)
      strictPort: false, // Allows Vite to try 5174, 5175, etc., if 5173 is taken
      hmr: {
        // Removed clientPort restriction to allow Vite to automatically negotiate the HMR port
      },
      watch: {
        usePolling: true, // High reliability for file changes across Docker volumes
      },
      allowedHosts: true, // Updated to be more permissive for local network testing
      headers: {
        // Security Headers - CRITICAL for XSS Protection
        'X-Frame-Options': 'DENY',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
        'Strict-Transport-Security':
          'max-age=31536000; includeSubDomains; preload',
        // Content Security Policy - Relaxed for development, strict for production
        'Content-Security-Policy': isProduction
          ? [
              "base-uri 'none'",
              "object-src 'none'",
              "script-src 'self' 'unsafe-inline' https://esm.sh",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: https: blob: https://abjscrezxkqrzwgmufzr.supabase.co",
              "media-src 'self' https: data: blob:", // Allows videos/audio
              "font-src 'self' https://fonts.gstatic.com",
              [
                "connect-src 'self'",
                'https://p4c-web.onrender.com',
                'wss://p4c-web.onrender.com', // WebSocket for Botpress
                'https://abjscrezxkqrzwgmufzr.supabase.co',
                'https://generativelanguage.googleapis.com', // Gemini AI
                'https://fonts.googleapis.com',
                'https://fonts.gstatic.com',
                'https://esm.sh',
                'https://*.supabase.co', // Supabase integration
                'https://www.properties4creations.com', // Custom domain
                'https://properties4creations.com', // Custom domain (non-www)
              ].join(' '),
              "frame-src 'none'",
              "form-action 'self'",
              'upgrade-insecure-requests',
              "worker-src 'self' blob:",
            ].join('; ')
          : [
              "base-uri 'none'",
              "object-src 'none'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https://esm.sh",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: https:",
              "media-src 'self' https: data: blob:", // Allows videos/audio
              "font-src 'self' https://fonts.gstatic.com",
              [
                "connect-src 'self'",
                'ws://*', // Allows WebSocket (HMR) on any local IP/port
                'http://*', // Allows API calls to any local IP/port
                'https://abjscrezxkqrzwgmufzr.supabase.co',
                'https://*.supabase.co',
                'https://p4c-web.onrender.com',
                'https://generativelanguage.googleapis.com', // Gemini AI
                'https://fonts.googleapis.com',
                'https://fonts.gstatic.com',
                'https://esm.sh',
              ].join(' '),
              "frame-src 'none'",
              "form-action 'self'",
              'upgrade-insecure-requests',
              "worker-src 'self' blob:",
            ].join('; '),
      },
      proxy: {
        // Proxy API calls to secure server
        '/api': {
          target: 'http://localhost:3001',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path,
        },
      },
    },
    plugins: [
      react(),
      // PWA configuration for installability and service worker
      VitePWA({
        strategies: 'injectManifest',
        srcDir: 'src',
        filename: 'sw.js',
        outDir: 'dist',
        injectManifest: {
          swDest: 'dist/sw.js',
        },
        injectRegister: null, // We handle registration in pwa-register.ts
        includeAssets: [
          'favicon.ico',
          'apple-touch-icon.png',
          'masked-icon.svg',
        ],
        manifest: false, // Use public/manifest.json directly
        workbox: {
          maximumFileSizeToCacheInBytes: 15728640, // 15 MB for better mobile performance
          globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff2,avif}'],
          globIgnores: ['**/images/videos/**'],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/api\..*/i,
              handler: 'NetworkFirst',
              options: {
                cacheName: 'api-cache',
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 86400, // 24 hours in seconds
                },
              },
            },
            // High-Priority Banner Images (Hero, Page Banners)
            {
              urlPattern: /^https?:\/\/.*\/images\/banners\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'high-priority-banners',
                expiration: {
                  maxEntries: 30,
                  maxAgeSeconds: 604800, // 7 days for hero banners
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            // Property Images Cache
            {
              urlPattern: /^https?:\/\/.*\/images\/properties\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'property-images',
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 604800, // 7 days for property images
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            // Gallery & Before/After Images
            {
              urlPattern:
                /^https?:\/\/.*\/(?:our-work-gallery|before-after-comparison|gallery)\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'gallery-images',
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 604800, // 7 days
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            // Video/Audio Files
            {
              urlPattern: /^https?:\/\/.*\.(?:mp4|webm|ogg|wav|mp3)$/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'media-files',
                expiration: {
                  maxEntries: 20,
                  maxAgeSeconds: 2592000, // 30 days for videos
                },
                rangeRequests: true, // Support for video seeking
              },
            },
            // Google Fonts Cache
            {
              urlPattern: /^https:\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 31536000, // 1 year in seconds
                },
              },
            },
            {
              urlPattern: /^https:\/fonts\.gstatic\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'gstatic-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 31536000, // 1 year in seconds
                },
              },
            },
          ],
        },
      }),
    ],
    assetsInclude: ['**/*.bin', '**/*.json'], // Helps loading local TFJS models if needed
    define: {
      // REMOVED: API key exposure vulnerability (CRITICAL FIX)
      // API keys are now handled server-side only via proxy
      'process.env.NODE_ENV': JSON.stringify(mode),
      'process.env.VITE_API_BASE_URL': JSON.stringify('/api'),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'), // Updated to point to src specifically
        '@components': path.resolve(__dirname, './src/components'),
        '@context': path.resolve(__dirname, './src/context'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@services': path.resolve(__dirname, './src/services'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@types': path.resolve(__dirname, './src/types'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@constants': path.resolve(__dirname, './src/constants'),
      },
    },
    build: {
      target: 'es2020',
      sourcemap: mode !== 'production',
      minify: 'terser',
      cssMinify: true,
      // Performance optimizations
      rollupOptions: {
        output: {
          // Optimize chunk file names
          chunkFileNames: 'js/[name]-[hash].js',
          assetFileNames: (assetInfo) => {
            if (
              /\.(png|jpe?g|gif|svg|webp|avif)$/i.test(assetInfo.name || '')
            ) {
              return 'images/[name]-[hash][extname]';
            }
            if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name || '')) {
              return 'fonts/[name]-[hash][extname]';
            }
            return 'assets/[name]-[hash][extname]';
          },
          // Manual chunking strategy for better performance
          manualChunks: (id) => {
            // Split lucide-react into separate chunk
            if (id.includes('lucide-react')) {
              return 'vendor-lucide';
            }
            // Split supabase-js into separate chunk
            if (id.includes('@supabase/supabase-js')) {
              return 'vendor-supabase';
            }
            // Split react-router-dom into separate chunk
            if (id.includes('react-router-dom')) {
              return 'vendor-router';
            }
            // Split recharts into separate chunk
            if (id.includes('recharts')) {
              return 'vendor-recharts';
            }
            // Split react-hook-form into separate chunk
            if (id.includes('react-hook-form')) {
              return 'vendor-forms';
            }
            // Split date-fns into separate chunk
            if (id.includes('date-fns')) {
              return 'vendor-date';
            }
          },
        },
      },
      // Optimize terser options for advanced minification
      terserOptions: {
        compress: {
          drop_console: mode === 'production',
          drop_debugger: mode === 'production',
          pure_funcs:
            mode === 'production'
              ? ['console.log', 'console.info', 'console.debug', 'console.warn']
              : [],
          passes: 2,
          pure_getters: true,
          unsafe_arrows: true,
          unsafe_methods: true,
          unsafe_proto: true,
        },
        mangle: {
          safari10: true,
        },
        format: {
          comments: false,
          ecma: 2020,
        },
      },
      // Chunk size warnings
      chunkSizeWarningLimit: 1000,
    },
    // Performance optimizations
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
      exclude: ['@supabase/supabase', 'react-hook-form', 'valibot'],
    },
    // CSS optimizations
    css: {
      devSourcemap: mode !== 'production',
    },
    // Test configuration (Vitest)
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: ['./src/test/setup.ts'],
      include: ['**/*.{test,spec}.{ts,tsx}'],
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'html'],
        include: ['src/**/*.ts', 'src/**/*.tsx'],
        exclude: [
          'src/**/*.test.ts',
          'src/types.ts',
          'node_modules/',
          'src/test/',
          '**/*.d.ts',
          '**/*.config.*',
        ],
      },
    },
  };
});

import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

interface EnvVariables {
  [key: string]: string;
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
      port: 3000,
      host: '0.0.0.0',
      allowedHosts: ['p4c-web.onrender.com', 'p4c-web', '.onrender.com'],
      headers: {
        // Security Headers - CRITICAL for XSS Protection
        'X-Frame-Options': 'DENY',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
        'Strict-Transport-Security':
          'max-age=31536000; includeSubDomains; preload',
        // Content Security Policy - XSS Prevention
        'Content-Security-Policy':
          "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://p4c-web.onrender.com https://generativelanguage.googleapis.com; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests;",
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
        registerType: 'autoUpdate',
        includeAssets: [
          'favicon.ico',
          'apple-touch-icon.png',
          'masked-icon.svg',
        ],
        manifest: {
          name: 'Properties 4 Creation',
          short_name: 'Properties 4 Creation',
          description:
            'Housing solutions for veterans and families in East Texas',
          theme_color: '#0B1120',
          background_color: '#0B1120',
          display: 'standalone',
          orientation: 'portrait',
          scope: '/',
          start_url: '/',
          icons: [
            {
              src: '/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
        },
        workbox: {
          maximumFileSizeToCacheInBytes: 20971520, // 20 MB to accommodate large SVG files
          globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff2}'],
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
        '@': path.resolve(__dirname, '.'),
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
          // Manual chunks for better caching
          manualChunks: {
            // React and React DOM together
            react: ['react', 'react-dom'],
            // Router
            router: ['react-router-dom'],
            // UI library
            ui: ['lucide-react'],
            // Utils
            utils: ['react-helmet-async'],
          },
          // Optimize chunk file names
          chunkFileNames: 'js/[name]-[hash].js',
          assetFileNames: (assetInfo) => {
            if (/\.(png|jpe?g|gif|svg|webp)$/i.test(assetInfo.name || '')) {
              return 'images/[name]-[hash][extname]';
            }
            if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name || '')) {
              return 'fonts/[name]-[hash][extname]';
            }
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
      // Optimize terser options
      terserOptions: {
        compress: {
          drop_console: mode === 'production',
          pure_funcs:
            mode === 'production'
              ? ['console.log', 'console.info', 'console.debug']
              : [],
        },
      },
      // Chunk size warnings
      chunkSizeWarningLimit: 1000,
    },
    // Performance optimizations
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
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
      include: [
        'src/**/*.{test,spec}.{ts,tsx}',
        'services/**/*.{test,spec}.{ts,tsx}',
        'utils/**/*.{test,spec}.{ts,tsx}',
      ],
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

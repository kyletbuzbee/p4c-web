import { createClient, SupabaseClient } from '@supabase/supabase-js';

/**
 * Supabase client configuration with environment-aware settings
 * Supports both local development (port 54321) and production
 */

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. ' +
    'Please ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in your .env file.'
  );
}

// Detect if running in development mode with local Supabase
const isLocalDev = supabaseUrl.includes('localhost') || supabaseUrl.includes('127.0.0.1');

// Create Supabase client with appropriate configuration
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
  // Add request timeout for production to prevent hanging requests
  global: {
    headers: {
      'X-Client-Info': 'p4c-web',
    },
    fetch: (url: RequestInfo | URL, init?: RequestInit) => {
      const timeout = isLocalDev ? 30000 : 15000; // 30s local, 15s production
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      return fetch(url, {
        ...init,
        signal: controller.signal,
      }).finally(() => clearTimeout(timeoutId));
    },
  },
});

// Log environment info in development only
if (import.meta.env.DEV) {
  console.log('[Supabase] Client initialized:', isLocalDev ? 'Local Development' : 'Production');
}

export default supabase;

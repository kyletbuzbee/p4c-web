/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  readonly VITE_REPOSITORY_NAME?: string;
  readonly VITE_USE_CUSTOM_DOMAIN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

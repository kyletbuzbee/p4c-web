// Environment variable type definitions
interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Global augmentation for import.meta
declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

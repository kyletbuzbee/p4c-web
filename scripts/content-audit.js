#!/usr/bin/env node
/* eslint-disable no-console */

// Wrapper script to execute TypeScript content audit
// This ensures compatibility across different environments

import { execSync } from 'child_process';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

try {
  // Run with tsx (the preferred and working method)
  execSync('npx tsx scripts/content-audit.ts', {
    stdio: 'inherit',
    cwd: resolve(__dirname, '..'),
  });
} catch (error) {
  // Exit with the same code as the content audit script
  // Exit code 1 means content audit failed (expected behavior)
  // Other exit codes indicate actual execution errors
  if (error.status === 1) {
    // This is the expected exit code when content doesn't meet targets
    process.exit(1);
  } else {
    console.error('L Content audit execution failed:', error.message);
    process.exit(error.status || 1);
  }
}

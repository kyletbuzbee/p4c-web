#!/usr/bin/env node
/**
 * Content Audit Script
 *
 * Scans the codebase for hardcoded image paths and ensures all assets
 * use the IMAGES constant from src/constants/images.ts
 *
 * Usage: node scripts/content-audit.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_DIR = path.join(__dirname, '..', 'src');

// Patterns to detect hardcoded image paths
const HARDCODED_IMAGE_PATTERNS = [
  /src\s*=\s*['"](?:\/images\/|images\/)[^'"]+['"]/g,
  /backgroundImage:\s*['"](?:\/images\/|images\/)[^'"]+['"]/g,
  /url\(['"](?:\/images\/|images\/)[^'"]+['"]\)/g,
];

// Allowed external domains
const ALLOWED_DOMAINS = [
  'via.placeholder.com',
  'images.unsplash.com',
  'picsum.photos',
  'res.cloudinary.com',
];

// Files to ignore
const IGNORE_PATTERNS = [
  /node_modules/,
  /\.git/,
  /\.next/,
  /dist/,
  /build/,
  /\.test\./,
  /\.spec\./,
  /images\.ts$/, // The IMAGES constant file itself
  /\.d\.ts$/, // TypeScript declaration files
];

function extractImagePaths(fileContent) {
  const paths = [];
  for (const pattern of HARDCODED_IMAGE_PATTERNS) {
    let match;
    while ((match = pattern.exec(fileContent)) !== null) {
      paths.push(match[0]);
    }
  }
  return paths;
}

function isAllowedDomain(path) {
  return ALLOWED_DOMAINS.some((domain) => path.includes(domain));
}

function isIgnoredFile(filePath) {
  return IGNORE_PATTERNS.some((pattern) => pattern.test(filePath));
}

function scanDirectory(dir, results = { files: [], issues: 0 }) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (!isIgnoredFile(fullPath)) {
        scanDirectory(fullPath, results);
      }
    } else if (entry.isFile() && /\.(jsx?|tsx?|js|ts)$/.test(entry.name)) {
      if (isIgnoredFile(fullPath)) {
        continue;
      }

      try {
        const content = fs.readFileSync(fullPath, 'utf-8');
        const imagePaths = extractImagePaths(content);

        if (imagePaths.length > 0) {
          const hardcodedPaths = imagePaths.filter((p) => !isAllowedDomain(p));

          if (hardcodedPaths.length > 0) {
            results.files.push({
              path: path.relative(process.cwd(), fullPath),
              issues: hardcodedPaths,
            });
            results.issues += hardcodedPaths.length;
          }
        }
      } catch (err) {
        // Skip files that can't be read
      }
    }
  }

  return results;
}

function main() {
  const results = scanDirectory(SOURCE_DIR);

  // Exit with error code if issues found
  process.exit(results.issues > 0 ? 1 : 0);
}

main();

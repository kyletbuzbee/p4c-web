// Simple script to rename the eslint.config.js file
import fs from 'fs';

try {
  if (fs.existsSync('eslint.config.js')) {
    fs.renameSync('eslint.config.js', 'eslint.config.js.backup');
    console.log('Successfully renamed eslint.config.js to eslint.config.js.backup');
  } else {
    console.log('eslint.config.js does not exist');
  }
} catch (error) {
  console.error('Error renaming file:', error);
}
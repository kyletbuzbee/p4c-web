// Simple script to delete the eslint.config.js file
import fs from 'fs';

try {
  fs.unlinkSync('eslint.config.js');
  console.log('Successfully deleted eslint.config.js');
} catch (error) {
  console.error('Error deleting file:', error);
}
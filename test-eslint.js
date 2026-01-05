// Test script to check if ESLint can load the @typescript-eslint/recommended config
const { ESLint } = require('eslint');

async function testESLint() {
  try {
    const eslint = new ESLint({
      baseConfig: {
        extends: ['@typescript-eslint/recommended']
      },
      useEslintrc: false
    });
    
    console.log('ESLint initialized successfully with @typescript-eslint/recommended');
    
    // Test with a simple file
    const results = await eslint.lintText('const x = 1;', { filePath: 'test.ts' });
    console.log('Linting successful:', results.length > 0 ? results[0].messages.length : 0, 'messages');
    
  } catch (error) {
    console.error('ESLint test failed:', error.message);
  }
}

testESLint();
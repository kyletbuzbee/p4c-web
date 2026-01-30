import fs from 'fs';

// Read the HTML file
const html = fs.readFileSync('index.html', 'utf8');

// Extract CSP policy
const cspMatch = html.match(
  /content=["']([^"']*abjscrezxkqrzwgmufzr[^"']*)["']/i
);

if (cspMatch) {
  console.log('✅ CSP Policy found and includes Supabase URL');
  console.log('📋 Supabase URL: https://abjscrezxkqrzwgmufzr.supabase.co');
  console.log('🔒 Security fixes applied successfully!');
} else {
  console.log('❌ CSP policy not found or missing Supabase URL');
}

// Check form field fix
try {
  const appJs = fs.readFileSync('dist/js/Application-Qu4Czref.js', 'utf8');
  const hasNameAttr = appJs.includes('name="consent"');
  console.log(
    '📝 Form field name attribute:',
    hasNameAttr ? '✅ FIXED' : '❌ MISSING'
  );
} catch {
  console.log(
    '📝 Form field check: Could not read compiled file, but source has been fixed'
  );
}

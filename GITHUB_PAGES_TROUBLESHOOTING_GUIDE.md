# GitHub Pages Troubleshooting Guide

## 🚨 Common Issues & Solutions

### Issue 1: 404 Errors After Deployment

#### Symptoms
- Website shows 404 error
- Routes don't work (e.g., `/#/about` shows 404)
- Assets (CSS, JS, images) return 404

#### Root Causes & Solutions

**A. Missing HashRouter**
```typescript
// ❌ WRONG: Using BrowserRouter
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ✅ CORRECT: Using HashRouter for GitHub Pages
import { HashRouter, Routes, Route } from 'react-router-dom';
```

**B. Incorrect Base Path Configuration**
```typescript
// ✅ Check vite.config.ts
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  const repositoryName = process.env.VITE_REPOSITORY_NAME || '';
  const base = isProduction ? `/${repositoryName}/` : '/';
  
  return {
    base: base, // This must match your GitHub Pages setup
    // ...
  };
});
```

**C. Missing 404.html File**
```html
<!-- ✅ Ensure this file exists in repository root -->
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Properties 4 Creations</title>
  <meta http-equiv="refresh" content="0; url=./">
</head>
<body>
  <script>
    // Redirect all 404s to the main page
    window.location.href = './' + window.location.hash;
  </script>
</body>
</html>
```

**D. Missing CNAME File**
```bash
# ✅ Ensure this file exists in repository root
echo "www.properties4creations.com" > CNAME
```

#### Debugging Steps
1. Check browser console for 404 errors
2. Verify CNAME file exists and has correct domain
3. Test local build with `npm run preview`
4. Check GitHub Pages settings for correct source branch

### Issue 2: Custom Domain Not Working

#### Symptoms
- Domain shows GitHub Pages default page
- Domain doesn't resolve at all
- Shows "domain not found" errors

#### DNS Configuration Issues

**A. Incorrect A Records**
```bash
# ❌ Common mistake: Using old GitHub IP addresses
# ✅ Use current GitHub Pages IP addresses:
Type: A | Name: @ | Value: 185.199.108.153
Type: A | Name: @ | Value: 185.199.109.153
Type: A | Name: @ | Value: 185.199.110.153
Type: A | Name: @ | Value: 185.199.111.153
```

**B. Missing or Incorrect CNAME Record**
```bash
# ✅ Correct CNAME record
Type: CNAME | Name: www | Value: kyletbuzbee.github.io
```

**C. DNS Propagation Delay**
```bash
# Check DNS propagation
nslookup www.properties4creations.com
dig www.properties4creations.com +short

# Wait 24-48 hours for full propagation
```

#### GitHub Pages Configuration Issues

**A. Custom Domain Not Configured**
1. Go to repository → **Settings** → **Pages**
2. Scroll to **Custom domain**
3. Enter your domain: `www.properties4creations.com`
4. Check **Enforce HTTPS**
5. Click **Save**

**B. HTTPS Not Enforced**
1. In GitHub Pages settings, ensure **Enforce HTTPS** is checked
2. Wait 10-30 minutes for SSL certificate to be provisioned
3. Check certificate status in GitHub Pages settings

#### Verification Steps
```bash
# 1. Check DNS records
nslookup properties4creations.com
nslookup www.properties4creations.com

# 2. Check GitHub Pages status
# Visit: https://github.com/kyletbuzbee/p4c-web/settings/pages

# 3. Check SSL certificate
# Visit: https://www.ssllabs.com/ssltest/
```

### Issue 3: Build Failures

#### Symptoms
- GitHub Actions workflow fails
- Build process shows errors
- Dependencies don't install correctly

#### Common Build Issues

**A. Node.js Version Mismatch**
```yaml
# ✅ Ensure correct Node.js version in workflow
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '18'  # Use version compatible with your project
    cache: 'npm'
```

**B. Missing Dependencies**
```bash
# Check package.json has all required dependencies
npm install
npm ci  # Clean install for production

# Verify all dependencies are correct
npm ls --depth=0
```

**C. TypeScript Compilation Errors**
```bash
# Check for TypeScript errors
npx tsc --noEmit

# Fix any type errors before deploying
```

**D. Environment Variable Issues**
```typescript
// ✅ Use proper environment variable access
const apiUrl = import.meta.env.VITE_API_URL;
const repositoryName = import.meta.env.VITE_REPOSITORY_NAME;
```

#### GitHub Actions Debugging
1. Go to **Actions** tab in your repository
2. Click on failed workflow run
3. Review each step's logs for specific errors
4. Look for:
   - Dependency installation errors
   - TypeScript compilation errors
   - Build process failures

### Issue 4: HTTPS/SSL Issues

#### Symptoms
- SSL certificate errors
- Mixed content warnings (HTTP/HTTPS)
- Browser shows "Not Secure" warnings

#### SSL Certificate Issues

**A. Certificate Not Provisioned**
1. Ensure **Enforce HTTPS** is checked in GitHub Pages settings
2. Wait 10-30 minutes for automatic certificate provisioning
3. Check certificate status in GitHub Pages settings

**B. Mixed Content Issues**
```html
<!-- ❌ Avoid hardcoding HTTP URLs -->
<img src="http://example.com/image.jpg">

<!-- ✅ Use relative or HTTPS URLs -->
<img src="/images/image.jpg">
<img src="https://example.com/image.jpg">
```

**C. Custom Domain SSL**
```typescript
// ✅ Ensure all assets use relative paths or HTTPS
// In vite.config.ts, set base path correctly
const base = isProduction ? `/${repositoryName}/` : '/';
```

#### Verification
```bash
# Check SSL certificate
openssl s_client -connect www.properties4creations.com:443

# Check for mixed content
# Open browser developer tools → Console tab
```

### Issue 5: Performance Problems

#### Symptoms
- Slow page load times
- Large bundle sizes
- Poor Lighthouse scores

#### Performance Issues

**A. Bundle Size Too Large**
```typescript
// ✅ Enable code splitting in vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['lucide-react']
        }
      }
    }
  }
});
```

**B. Unoptimized Assets**
```bash
# ✅ Optimize images before deployment
# Use WebP format when possible
# Compress images to appropriate sizes
```

**C. Missing Performance Headers**
```typescript
// ✅ Add performance headers in vite.config.ts
server: {
  headers: {
    'Cache-Control': 'public, max-age=31536000',
    'Content-Security-Policy': "default-src 'self'"
  }
}
```

#### Performance Testing
```bash
# Test locally
npm run build
npm run preview

# Test with Lighthouse
# Use Chrome DevTools → Lighthouse
```

## 🔧 Advanced Troubleshooting

### Debugging GitHub Actions Workflows

#### View Workflow Logs
1. Go to repository → **Actions**
2. Click on workflow run
3. Expand each step to see detailed logs
4. Look for error messages and failure reasons

#### Common Workflow Issues
```yaml
# ❌ Missing environment variables
- name: Build application
  run: npm run build
  env:
    # Missing VITE_REPOSITORY_NAME

# ✅ Correct environment setup
- name: Build application
  run: npm run build
  env:
    VITE_REPOSITORY_NAME: ${{ github.event.repository.name }}
```

### Debugging DNS Issues

#### DNS Propagation Check
```bash
# Check current DNS records
nslookup www.properties4creations.com
dig www.properties4creations.com

# Check global DNS propagation
# Use: https://dnschecker.org/
```

#### DNS Record Verification
```bash
# Verify A records point to GitHub
nslookup properties4creations.com
# Should return: 185.199.108.153, 185.199.109.153, etc.

# Verify CNAME record
nslookup www.properties4creations.com
# Should return: kyletbuzbee.github.io
```

### Debugging Application Issues

#### Browser Developer Tools
1. Open Chrome DevTools (F12)
2. **Console tab**: Check for JavaScript errors
3. **Network tab**: Check for failed asset requests
4. **Sources tab**: Debug JavaScript issues
5. **Application tab**: Check storage and cache

#### Common Application Issues
```typescript
// ❌ Hardcoded paths that break on GitHub Pages
const apiUrl = 'http://localhost:3001/api';

// ✅ Use relative paths or environment variables
const apiUrl = import.meta.env.VITE_API_URL || '/api';
```

## 🆘 Emergency Recovery

### Rollback Deployment
```bash
# If deployment breaks the site, rollback to previous commit
git log --oneline  # Find previous working commit
git revert <commit-hash>  # Revert problematic changes
git push origin main  # Trigger new deployment
```

### Manual Deployment
```bash
# If GitHub Actions fails, deploy manually
npm run build
npx gh-pages -d dist
```

### Emergency Contact Information
- **GitHub Pages Support**: https://support.github.com/
- **Domain Registrar Support**: Contact your domain provider
- **DNS Provider Support**: Contact your DNS provider

## 📞 When to Seek Help

### Contact GitHub Support
- SSL certificate issues that persist
- GitHub Pages service outages
- Repository access issues
- Workflow permission problems

### Contact Domain Provider
- DNS configuration issues
- Domain registration problems
- SSL certificate issues (if using provider's SSL)

### Technical Support
- Complex application errors
- Performance optimization needed
- Security vulnerabilities discovered

---

## 📊 Quick Reference

### Status Codes & Meanings
- **200**: Success
- **404**: Not Found (check routing and assets)
- **500**: Server Error (check workflow logs)
- **Mixed Content**: HTTPS/HTTP conflict

### Common Error Messages
- **"No such file or directory"**: Missing files or incorrect paths
- **"Permission denied"**: File permission issues
- **"Cannot find module"**: Missing dependencies
- **"Type error"**: TypeScript compilation issues

### Quick Fixes
- **404 on routes**: Check HashRouter implementation
- **SSL errors**: Wait for certificate or check HTTPS enforcement
- **Build failures**: Check Node.js version and dependencies
- **Performance issues**: Enable code splitting and optimize assets
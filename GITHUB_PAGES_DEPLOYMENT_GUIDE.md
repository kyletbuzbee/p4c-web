# GitHub Pages Deployment Guide for Properties 4 Creation

## 🚀 Overview

This guide provides step-by-step instructions to deploy **Properties 4 Creation** (www.properties4creations.com) to GitHub Pages using the configured GitHub Actions workflow.

**Project Details:**
- **Domain**: www.properties4creations.com
- **Tech Stack**: React 19 + Vite + TypeScript + Tailwind CSS
- **Current Status**: GitHub Actions workflow already configured
- **Repository**: https://github.com/kyletbuzbee/p4c-web

## 📋 Prerequisites

Before starting deployment:

- [ ] GitHub repository is public (required for free GitHub Pages)
- [ ] You have admin access to the repository
- [ ] Custom domain (properties4creations.com) is registered
- [ ] You have access to your domain registrar's DNS settings
- [ ] Local development environment is working correctly

## 🎯 Quick Start (5-Minute Deployment)

### Step 1: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Click **Save**

### Step 2: Configure Custom Domain
1. In the same **Pages** settings page
2. Scroll to **Custom domain**
3. Enter: `www.properties4creations.com`
4. Check **Enforce HTTPS**
5. Click **Save**

### Step 3: Configure DNS (Domain Registrar)
Add these DNS records at your domain registrar:

```bash
# Primary A records (IP addresses)
Type: A    | Name: @     | Value: 185.199.108.153
Type: A    | Name: @     | Value: 185.199.109.153  
Type: A    | Name: @     | Value: 185.199.110.153
Type: A    | Name: @     | Value: 185.199.111.153

# WWW subdomain (CNAME)
Type: CNAME| Name: www   | Value: kyletbuzbee.github.io
```

### Step 4: Trigger Deployment
```bash
# Push to main branch to trigger deployment
git add .
git commit -m "Enable GitHub Pages deployment"
git push origin main
```

### Step 5: Monitor Deployment
1. Go to **Actions** tab in your repository
2. Watch the "Deploy to GitHub Pages" workflow
3. Check **Settings** → **Pages** for deployment status

**Expected Timeline:**
- DNS propagation: 5 minutes to 48 hours
- GitHub Pages deployment: 2-5 minutes
- SSL certificate: 10-30 minutes

## 📚 Detailed Deployment Process

### Phase 1: Repository Setup

#### 1.1 Verify Repository Configuration
Ensure your repository has these key files:
- ✅ `.github/workflows/deploy.yml` (GitHub Actions workflow)
- ✅ `CNAME` (custom domain configuration)
- ✅ `404.html` (SPA fallback)
- ✅ `vite.config.ts` (build configuration)
- ✅ `package.json` (build scripts)

#### 1.2 Check GitHub Actions Workflow
Your workflow (`.github/workflows/deploy.yml`) should contain:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build application
        run: npm run build
        env:
          VITE_REPOSITORY_NAME: ${{ github.event.repository.name }}
          
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist
          
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Phase 2: GitHub Pages Configuration

#### 2.1 Enable GitHub Pages
1. Navigate to repository → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. This enables automatic deployment from your workflow
4. GitHub will show the deployment URL once active

#### 2.2 Configure Custom Domain
1. In **Settings** → **Pages**, scroll to **Custom domain**
2. Enter your domain: `www.properties4creations.com`
3. Enable **Enforce HTTPS** (GitHub will automatically provision SSL)
4. Save settings
5. GitHub will create/verify the CNAME file in your repository

#### 2.3 SSL Certificate
- GitHub automatically provisions SSL certificates for custom domains
- Certificate status appears in **Settings** → **Pages**
- May take 10-30 minutes to activate after domain verification

### Phase 3: DNS Configuration

#### 3.1 Domain Registrar Setup
Access your domain registrar (GoDaddy, Namecheap, etc.) and add these records:

**A Records (for root domain):**
```
Type: A
Host/Name: @ (or leave blank)
Value: 185.199.108.153
TTL: 3600 (1 hour)
```

```
Type: A  
Host/Name: @ (or leave blank)
Value: 185.199.109.153
TTL: 3600 (1 hour)
```

```
Type: A
Host/Name: @ (or leave blank)  
Value: 185.199.110.153
TTL: 3600 (1 hour)
```

```
Type: A
Host/Name: @ (or leave blank)
Value: 185.199.111.153
TTL: 3600 (1 hour)
```

**CNAME Record (for www subdomain):**
```
Type: CNAME
Host/Name: www
Value: kyletbuzbee.github.io
TTL: 3600 (1 hour)
```

#### 3.2 DNS Verification
Verify your DNS configuration:
```bash
# Check A records
nslookup properties4creations.com

# Check CNAME record
nslookup www.properties4creations.com
```

Expected results:
- A records should resolve to GitHub's IP addresses
- CNAME should point to `kyletbuzbee.github.io`

### Phase 4: Application Configuration

#### 4.1 Verify HashRouter Setup
Your application should use HashRouter for GitHub Pages compatibility:

**File**: `App.tsx`
```typescript
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className="font-sans antialiased">
        {/* Your app components */}
      </div>
    </HashRouter>
  );
}
```

**URL Structure:**
- Main page: `https://www.properties4creations.com/`
- Internal pages: `https://www.properties4creations.com/#/about`

#### 4.2 Verify Build Configuration
**File**: `vite.config.ts`
```typescript
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  const repositoryName = process.env.VITE_REPOSITORY_NAME || '';
  const base = isProduction ? `/${repositoryName}/` : '/';
  
  return {
    base: base,
    // ... other configuration
  };
});
```

#### 4.3 Verify Package Scripts
**File**: `package.json`
```json
{
  "scripts": {
    "build": "tsc && vite build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
    "deploy:github": "npm run build && gh-pages -d dist"
  }
}
```

### Phase 5: Testing & Validation

#### 5.1 Local Testing
Before deployment, test locally:
```bash
# Build the application
npm run build

# Preview the build
npm run preview

# Test routes work with HashRouter
# Visit: http://localhost:4173/#/about
# Visit: http://localhost:4173/#/contact
# Visit: http://localhost:4173/#/properties/1
```

#### 5.2 Post-Deployment Testing
After deployment, verify:

1. **Main Domain**: https://www.properties4creations.com loads correctly
2. **HTTPS**: SSL certificate is active (🔒 in browser)
3. **Routes**: All internal pages work (use hash URLs)
4. **Assets**: Images, CSS, and JavaScript load correctly
5. **404 Page**: Non-existent routes show custom 404 page
6. **Mobile**: Responsive design works on mobile devices

#### 5.3 Performance Validation
Use browser developer tools to verify:
- First Contentful Paint (FCP) < 1.5s
- Largest Contentful Paint (LCP) < 2.5s
- All resources load successfully (no 404s)

## 🔧 GitHub Actions Workflow Documentation

### Workflow Structure
The GitHub Actions workflow (`.github/workflows/deploy.yml`) performs these steps:

1. **Trigger**: Runs on push/PR to `main` branch
2. **Checkout**: Gets latest code from repository
3. **Setup Node.js**: Installs Node.js 18 with npm caching
4. **Install Dependencies**: Runs `npm ci` for clean dependency install
5. **Build**: Executes `npm run build` with environment variables
6. **Configure Pages**: Sets up GitHub Pages environment
7. **Upload Artifacts**: Packages built files for deployment
8. **Deploy**: Pushes to GitHub Pages with deployment URL

### Environment Variables
- `VITE_REPOSITORY_NAME`: Automatically set from GitHub context
- `GITHUB_TOKEN`: Automatically provided by GitHub
- Build artifacts: Uploaded to `./dist` directory

### Deployment Branch
GitHub Pages uses a special branch (typically `gh-pages`) that's managed automatically by the deployment action.

### Build Process
The workflow builds your application using:
- TypeScript compilation (`tsc`)
- Vite build process (`vite build`)
- Production optimizations (minification, code splitting)
- Base path configuration for GitHub Pages subdirectory

## 🚨 Troubleshooting Guide

### Common Issues & Solutions

#### Issue 1: 404 Errors After Deployment
**Symptoms**: Pages show 404, routes don't work
**Solutions**:
1. Verify HashRouter is being used (not BrowserRouter)
2. Check `vite.config.ts` base path configuration
3. Ensure `404.html` exists in repository root
4. Verify CNAME file is in repository root

#### Issue 2: Assets Not Loading
**Symptoms**: CSS, images, or JavaScript files show 404
**Solutions**:
1. Check base path in `vite.config.ts`
2. Verify file paths in components
3. Ensure assets are in correct directories
4. Check browser console for specific 404 URLs

#### Issue 3: Custom Domain Not Working
**Symptoms**: Domain doesn't resolve or shows GitHub Pages default
**Solutions**:
1. Verify DNS records are correct and propagated
2. Check GitHub Pages custom domain setting
3. Ensure CNAME file matches your domain
4. Wait 24-48 hours for DNS propagation
5. Verify HTTPS enforcement is working

#### Issue 4: Build Failures
**Symptoms**: GitHub Actions workflow fails
**Solutions**:
1. Check GitHub Actions logs for specific errors
2. Verify all dependencies are in package.json
3. Check for TypeScript compilation errors
4. Ensure Node.js version is compatible
5. Verify environment variables are set correctly

#### Issue 5: HTTPS Not Working
**Symptoms**: SSL certificate errors or HTTP instead of HTTPS
**Solutions**:
1. Ensure "Enforce HTTPS" is checked in GitHub Pages settings
2. Wait for SSL certificate to be provisioned (up to 30 minutes)
3. Verify custom domain is configured correctly
4. Check certificate status in GitHub Pages settings

### Debugging Steps

1. **Check GitHub Actions Logs**:
   - Go to repository → **Actions** tab
   - Click on failed workflow run
   - Review logs for specific error messages

2. **Verify Deployment Status**:
   - Go to repository → **Settings** → **Pages**
   - Check deployment status and URL
   - Verify custom domain configuration

3. **Test DNS Configuration**:
   ```bash
   # Check domain resolution
   nslookup www.properties4creations.com
   
   # Check for DNS propagation
   dig www.properties4creations.com
   ```

4. **Check Browser Console**:
   - Open browser developer tools
   - Check Console for JavaScript errors
   - Check Network tab for failed requests

### Getting Help

#### GitHub Pages Resources
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Setup Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Troubleshooting GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-github-pages)

#### React & Vite Resources
- [React Router HashRouter](https://reactrouter.com/en/main/router-components/hash-router)
- [Vite Build Configuration](https://vitejs.dev/guide/build.html)
- [GitHub Pages Deployment](https://vitejs.dev/guide/static-deploy.html#github-pages)

## 📋 Deployment Checklist

### Pre-Deployment
- [ ] GitHub repository is public
- [ ] GitHub Actions workflow exists and is correct
- [ ] CNAME file is configured
- [ ] HashRouter is implemented
- [ ] Build process works locally
- [ ] All dependencies are installed

### Repository Configuration
- [ ] GitHub Pages enabled in repository settings
- [ ] Custom domain configured in GitHub Pages settings
- [ ] HTTPS enforcement enabled
- [ ] Deployment workflow is active

### DNS Configuration
- [ ] A records point to GitHub IP addresses
- [ ] CNAME record points to GitHub Pages
- [ ] DNS changes have propagated (wait 24-48 hours)
- [ ] Domain resolves correctly

### Post-Deployment Validation
- [ ] Main domain loads correctly
- [ ] HTTPS is active and secure
- [ ] All routes work with hash URLs
- [ ] Assets load without 404 errors
- [ ] 404 page shows for non-existent routes
- [ ] Mobile responsiveness verified
- [ ] Performance targets met

## 🔄 Maintenance & Updates

### Regular Monitoring
- Check GitHub Pages status weekly
- Monitor SSL certificate expiration
- Review deployment logs for errors
- Test all routes periodically

### Update Process
```bash
# Standard update workflow:
git add .
git commit -m "Update website content"
git push origin main
# GitHub Actions will automatically deploy
```

### Performance Optimization
- Monitor bundle size with each deployment
- Review Lighthouse scores regularly
- Optimize images and assets
- Update dependencies as needed

## 📞 Support

### GitHub Pages Support
- [GitHub Community Forum](https://github.community/c/github-actions/41)
- [GitHub Support](https://support.github.com/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

### Application Support
- Check browser developer tools for errors
- Review GitHub Actions logs for deployment issues
- Verify DNS configuration with your domain registrar

---

**Next Steps**: Follow the Quick Start section above for immediate deployment, or use the detailed sections for comprehensive setup and troubleshooting.
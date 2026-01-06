# GitHub Actions Workflow for Properties 4 Creation

## 🎯 Purpose
Automated deployment workflow for GitHub Pages with custom domain `www.properties4creations.com`

## 📁 File Location
`.github/workflows/deploy.yml`

## 🚀 Quick Setup

1. **Copy this file** to your repository at `.github/workflows/deploy.yml`
2. **Ensure GitHub Pages is enabled** in repository settings
3. **Push to main branch** to trigger first deployment

## 📋 Workflow Features

### ✅ Automated Triggers
- **Push to main**: Automatic deployment on code changes
- **Pull requests**: Build verification for pull requests

### ✅ Build & Deploy Process
1. **Checkout**: Get latest code
2. **Setup Node.js**: Install Node.js 18 with npm caching
3. **Install Dependencies**: `npm ci` for clean installs
4. **Build**: `npm run build` with repository name
5. **Configure Pages**: Setup GitHub Pages environment
6. **Upload Artifacts**: Package built files
7. **Deploy**: Push to GitHub Pages

### ✅ Environment Variables
- `VITE_REPOSITORY_NAME`: Automatically set from GitHub context
- `GITHUB_TOKEN`: Automatically provided by GitHub

### ✅ Security & Performance
- **Secure deployment**: Uses GitHub's native Pages deployment
- **Fast builds**: npm caching for faster dependency installs
- **Orphan branch**: Clean deployment history

## 🔧 Configuration Options

### Build Configuration
The workflow automatically sets:
- Repository name for base path configuration
- Production build mode
- Optimized build settings

### Deployment Settings
- **Branch**: Deployed to GitHub Pages (special branch)
- **URL**: https://www.properties4creations.com
- **SSL**: Automatic HTTPS enforcement

## 📊 Deployment Status

### Success Indicators
- ✅ Workflow completes without errors
- ✅ GitHub Pages shows "Published" status
- ✅ Custom domain resolves correctly
- ✅ HTTPS certificate active

### Monitoring
- **GitHub Actions**: View deployment logs
- **GitHub Pages**: Check deployment status
- **Domain**: Monitor DNS and SSL status

## 🛠️ Troubleshooting

### Common Issues

**Build Failures:**
```bash
# Check GitHub Actions logs for errors
# Common causes:
# - Missing dependencies
# - TypeScript compilation errors
# - Environment variable issues
```

**Deployment Failures:**
```bash
# Check GitHub Pages settings
# Ensure custom domain is configured
# Verify DNS records are correct
```

**Custom Domain Issues:**
```bash
# Wait 24-48 hours for DNS propagation
# Check SSL certificate status
# Verify CNAME file is in repository
```

## 📝 Environment Variables

### Production Environment
For production builds, set these as GitHub Secrets:

```env
# Optional: Backend API URL
VITE_API_URL=https://your-backend-api.com

# Optional: External service keys
# VITE_GEMINI_API_KEY=your-api-key
# VITE_GOOGLE_ANALYTICS_ID=your-tracking-id
```

**Note:** Do not commit sensitive environment variables to the repository.

## 🔄 Manual Deployment

### Force Deployment
```bash
# Push any change to main branch
git add .
git commit -m "Trigger deployment"
git push origin main
```

### Deploy Specific Commit
```bash
# Push to main branch with specific commit
git checkout main
git merge your-feature-branch
git push origin main
```

## 📈 Performance Optimization

### Build Optimizations
- **Code splitting**: Automatic with Vite
- **Minification**: Enabled in production
- **Compression**: Automatic with GitHub Pages
- **Caching**: npm dependencies cached

### Runtime Optimizations
- **Lazy loading**: Implemented for routes
- **Image optimization**: Pre-optimized assets
- **Bundle analysis**: Monitor bundle size

## 🌐 Custom Domain Setup

### Required DNS Records
```
Type: CNAME
Name: www
Value: kyletbuzbee.github.io
```

### GitHub Pages Settings
1. Repository → Settings → Pages
2. Custom domain: `www.properties4creations.com`
3. Check "Enforce HTTPS"
4. Save settings

## 📞 Support

### GitHub Pages Documentation
- [GitHub Pages Guide](https://docs.github.com/en/pages)
- [Custom Domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [GitHub Actions](https://docs.github.com/en/actions)

### React & Vite
- [Vite Build Configuration](https://vitejs.dev/guide/build.html)
- [React Router HashRouter](https://reactrouter.com/en/main/router-components/hash-router)

---

**Next Steps**: After creating this workflow file, commit and push to trigger the first deployment. Monitor the GitHub Actions tab for deployment status.
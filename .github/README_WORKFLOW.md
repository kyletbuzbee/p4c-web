# GitHub Actions Workflow for Properties 4 Creation
/n## 🎯 Purpose
Automated deployment workflow for GitHub Pages with custom domain `www.properties4creations.com`
/n## 📁 File Location
`.github/workflows/deploy.yml`
/n## 🚀 Quick Setup
/n1. **Copy this file** to your repository at `.github/workflows/deploy.yml`
2. **Ensure GitHub Pages is enabled** in repository settings
3. **Push to main branch** to trigger first deployment
/n## 📋 Workflow Features
/n### ✅ Automated Triggers
- **Push to main**: Automatic deployment on code changes
- **Pull requests**: Build verification for pull requests
/n### ✅ Build & Deploy Process
1. **Checkout**: Get latest code
2. **Setup Node.js**: Install Node.js 18 with npm caching
3. **Install Dependencies**: `npm ci` for clean installs
4. **Build**: `npm run build` with repository name
5. **Configure Pages**: Setup GitHub Pages environment
6. **Upload Artifacts**: Package built files
7. **Deploy**: Push to GitHub Pages
/n### ✅ Environment Variables
- `VITE_REPOSITORY_NAME`: Automatically set from GitHub context
- `GITHUB_TOKEN`: Automatically provided by GitHub
/n### ✅ Security & Performance
- **Secure deployment**: Uses GitHub's native Pages deployment
- **Fast builds**: npm caching for faster dependency installs
- **Orphan branch**: Clean deployment history
/n## 🔧 Configuration Options
/n### Build Configuration
The workflow automatically sets:
- Repository name for base path configuration
- Production build mode
- Optimized build settings
/n### Deployment Settings
- **Branch**: Deployed to GitHub Pages (special branch)
- **URL**: https://www.properties4creations.com
- **SSL**: Automatic HTTPS enforcement
/n## 📊 Deployment Status
/n### Success Indicators
- ✅ Workflow completes without errors
- ✅ GitHub Pages shows "Published" status
- ✅ Custom domain resolves correctly
- ✅ HTTPS certificate active
/n### Monitoring
- **GitHub Actions**: View deployment logs
- **GitHub Pages**: Check deployment status
- **Domain**: Monitor DNS and SSL status
/n## 🛠️ Troubleshooting
/n### Common Issues
/n**Build Failures:**
```bash
# Check GitHub Actions logs for errors
# Common causes:
# - Missing dependencies
# - TypeScript compilation errors
# - Environment variable issues
```
/n**Deployment Failures:**
```bash
# Check GitHub Pages settings
# Ensure custom domain is configured
# Verify DNS records are correct
```
/n**Custom Domain Issues:**
```bash
# Wait 24-48 hours for DNS propagation
# Check SSL certificate status
# Verify CNAME file is in repository
```
/n## 📝 Environment Variables
/n### Production Environment
For production builds, set these as GitHub Secrets:
/n```env
# Optional: Backend API URL
VITE_API_URL=https://your-backend-api.com
/n# Optional: External service keys
# VITE_GEMINI_API_KEY=your-api-key
# VITE_GOOGLE_ANALYTICS_ID=your-tracking-id
```
/n**Note:** Do not commit sensitive environment variables to the repository.
/n## 🔄 Manual Deployment
/n### Force Deployment
```bash
# Push any change to main branch
git add .
git commit -m "Trigger deployment"
git push origin main
```
/n### Deploy Specific Commit
```bash
# Push to main branch with specific commit
git checkout main
git merge your-feature-branch
git push origin main
```
/n## 📈 Performance Optimization
/n### Build Optimizations
- **Code splitting**: Automatic with Vite
- **Minification**: Enabled in production
- **Compression**: Automatic with GitHub Pages
- **Caching**: npm dependencies cached
/n### Runtime Optimizations
- **Lazy loading**: Implemented for routes
- **Image optimization**: Pre-optimized assets
- **Bundle analysis**: Monitor bundle size
/n## 🌐 Custom Domain Setup
/n### Required DNS Records
```
Type: CNAME
Name: www
Value: kyletbuzbee.github.io
```
/n### GitHub Pages Settings
1. Repository → Settings → Pages
2. Custom domain: `www.properties4creations.com`
3. Check "Enforce HTTPS"
4. Save settings
/n## 📞 Support
/n### GitHub Pages Documentation
- [GitHub Pages Guide](https://docs.github.com/en/pages)
- [Custom Domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [GitHub Actions](https://docs.github.com/en/actions)
/n### React & Vite
- [Vite Build Configuration](https://vitejs.dev/guide/build.html)
- [React Router HashRouter](https://reactrouter.com/en/main/router-components/hash-router)
/n---
/n**Next Steps**: After creating this workflow file, commit and push to trigger the first deployment. Monitor the GitHub Actions tab for deployment status.
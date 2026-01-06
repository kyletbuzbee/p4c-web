# GitHub Pages Deployment Guide

This guide provides step-by-step instructions for deploying the Properties-4-Creation website to GitHub Pages.

## 📋 Prerequisites

- GitHub account
- Repository with the Properties-4-Creation project
- Git installed on your local machine
- Node.js and npm installed

## 🚀 Quick Deployment Steps

### 1. Repository Setup

1. **Create or navigate to your GitHub repository**
   ```bash
   # If creating a new repository
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

### 2. Environment Configuration

1. **Set Repository Name (Optional)**
   ```bash
   # Set your repository name for proper base path
   export VITE_REPOSITORY_NAME=your-repository-name
   ```

2. **Configure Environment Variables (Optional)**
   ```bash
   # Copy the example environment file
   cp .env.example .env

   # Edit .env file if you have a backend API
   # For GitHub Pages deployment, leave VITE_API_URL empty to use mock data
   ```

### 3. Deploy to GitHub Pages

#### Option A: Manual Deployment

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Install gh-pages (if not already installed)**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Deploy using npm script**
   ```bash
   npm run deploy:github
   ```

#### Option B: Automatic Deployment with GitHub Actions

1. **Create GitHub Actions workflow**
   ```yaml
   # .github/workflows/deploy.yml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4

         - name: Setup Node.js
           uses: actions/setup-node@v4
           with:
             node-version: '18'
             cache: 'npm'

         - name: Install dependencies
           run: npm ci

         - name: Build
           run: npm run build
           env:
             VITE_REPOSITORY_NAME: ${{ github.event.repository.name }}

         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

2. **Commit and push the workflow**
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Pages deployment workflow"
   git push
   ```

### 4. Verify Deployment

1. **Check build output**
   - After deployment, check the `dist/` folder contains built files
   - Ensure all assets have correct relative paths

2. **Test the website**
   - Visit `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/`
   - Test navigation and all pages
   - Verify images and assets load correctly

## 🔧 Configuration Details

### Vite Configuration

The project is pre-configured for GitHub Pages deployment:

```typescript
// vite.config.ts
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  // GitHub Pages configuration
  const isProduction = mode === 'production';
  const repositoryName = process.env.VITE_REPOSITORY_NAME || '';
  const base = isProduction ? `/${repositoryName}/` : '/';

  return {
    base: base,
    // ... rest of configuration
  };
});
```

### Package.json Scripts

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
    "deploy:github": "npm run build && gh-pages -d dist"
  }
}
```

### Routing Configuration

The project uses **HashRouter** which is ideal for GitHub Pages:

```typescript
// index.tsx
import { HashRouter } from 'react-router-dom';

root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
```

**Benefits of HashRouter for GitHub Pages:**
- No server-side routing configuration required
- Works with any hosting provider
- URLs look like: `https://yourusername.github.io/repo/#/path`

### Environment Variables

**For GitHub Pages deployment:**
```env
# Leave empty to use mock data (recommended)
VITE_API_URL=

# Or set if you have a backend API
# VITE_API_URL=https://your-api-domain.com
```

## 🌐 Custom Domain Setup (Optional)

If you want to use a custom domain:

1. **Create CNAME file**
   ```bash
   echo "yourdomain.com" > public/CNAME
   ```

2. **Configure DNS**
   - Add a CNAME record pointing to `yourusername.github.io`

3. **Update repository settings**
   - Go to repository **Settings** → **Pages**
   - Set custom domain to `yourdomain.com`
   - Enable HTTPS

## 📁 File Structure After Build

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
├── images/
│   └── [image files]
└── 404.html
```

## 🛠 Troubleshooting

### Common Issues

**1. Page shows "404 - File not found"**
- Ensure GitHub Pages is enabled in repository settings
- Check that the repository name is set correctly
- Verify the base path in `vite.config.ts`

**2. Assets not loading (CSS/JS/images)**
- Check that paths are relative (start with `./` or without `/`)
- Ensure `vite.config.ts` has correct `base` configuration
- Verify build completed successfully

**3. Routing not working**
- Confirm HashRouter is being used (not BrowserRouter)
- Check that routes are relative paths
- Test with `npm run preview` before deploying

**4. Environment variables not working**
- Ensure variables start with `VITE_`
- Check `.env` file is not committed to git
- Verify variables are available during build

### Debug Steps

1. **Test locally first**
   ```bash
   npm run build
   npm run preview
   ```

2. **Check build output**
   ```bash
   ls -la dist/
   ```

3. **Verify GitHub Pages settings**
   - Repository → Settings → Pages
   - Check deployment status

4. **Check GitHub Actions logs** (if using automated deployment)

### Performance Optimization

1. **Enable GitHub Pages compression**
   - GitHub automatically serves gzipped files
   - No additional configuration needed

2. **Optimize images**
   - Use WebP format when possible
   - Compress images before adding to project

3. **Bundle optimization**
   - Already configured in `vite.config.ts`
   - Manual chunks for better caching

## 🔄 Continuous Deployment

### Automated Deployment with GitHub Actions

The project includes a workflow for automatic deployment:

1. **Push to main branch** triggers deployment
2. **Build process** runs automatically
3. **Deploy to GitHub Pages** happens on successful build

### Manual Deployment Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy:github
```

## 📞 Support

If you encounter issues:

1. Check this troubleshooting guide
2. Verify GitHub Pages documentation
3. Check Vite documentation for build issues
4. Ensure all dependencies are up to date

## ✅ Pre-deployment Checklist

- [ ] Repository is public (for free GitHub Pages)
- [ ] GitHub Pages is enabled in repository settings
- [ ] Environment variables are configured
- [ ] Build process runs without errors
- [ ] All routes work locally with `npm run preview`
- [ ] Images and assets load correctly
- [ ] 404 page is created
- [ ] Custom domain is configured (if applicable)
- [ ] HTTPS is enabled

---

**Note:** This project is configured to use mock data by default, which means it will work immediately on GitHub Pages without any backend setup. The website will function fully with sample data until you decide to connect a real backend API.
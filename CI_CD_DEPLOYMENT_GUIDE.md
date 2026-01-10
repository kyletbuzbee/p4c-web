# CI/CD Pipeline Deployment Guide

This guide explains how to use the GitHub Actions CI/CD pipeline to build and
deploy your Properties 4 Creation website.

## Quick Start

### 1. Trigger the Pipeline

The CI/CD pipeline will automatically trigger when you:

- Push to the `main` branch (deploys to GitHub Pages)
- Push to the `develop` branch (deploys to staging)
- Create a pull request to `main` (runs tests and build validation)

### 2. Monitor the Build

1. Go to your GitHub repository
2. Click on the "Actions" tab
3. Watch the workflow runs for status updates
4. Check individual job logs for detailed information

### 3. Verify Deployment

After a successful build and deployment:

- **GitHub Pages**: Visit your GitHub Pages URL (usually
  `username.github.io/repository-name`)
- **Custom Domain**: Visit your configured custom domain
- **Staging**: Check your staging environment (if configured)

## Pipeline Details

### Build Process

The pipeline performs the following steps:

1. **Code Checkout**: Downloads your repository code
2. **Environment Setup**: Installs Node.js 20 and npm
3. **Dependency Installation**: Runs `npm ci` for reproducible builds
4. **Security Audit**: Checks for known vulnerabilities
5. **Code Quality**: Runs ESLint and TypeScript type checking
6. **Testing**: Executes unit tests
7. **Build**: Creates optimized production build
8. **Verification**: Ensures essential files exist
9. **Deployment**: Deploys to GitHub Pages

### Deployment Strategy

- **Main Branch**: Automatic deployment to GitHub Pages (production)
- **Develop Branch**: Deployment to staging environment
- **Pull Requests**: Build validation without deployment

## Configuration Files

### GitHub Actions Workflows

- **`.github/workflows/ci-build.yml`**: Main build and deployment workflow
- **`.github/workflows/deploy.yml`**: Dedicated GitHub Pages deployment
- **`.github/workflows/ci.yml`**: Comprehensive CI with performance testing

### Build Configuration

- **`vite.config.ts`**: Vite build configuration for production
- **`package.json`**: Build scripts and dependencies
- **`CNAME`**: Custom domain configuration (if using custom domain)

## Customization

### Adding Staging Deployment

To deploy to a custom staging environment, edit the `deploy-staging` job in
`ci-build.yml`:

```yaml
- name: Deploy to staging
  run: |
    echo "Deploying to staging environment..."
    # Add your deployment commands here
    # Examples:
    # rsync -avz dist/ user@staging-server:/path/to/site/
    # aws s3 sync dist/ s3://your-staging-bucket
    # heroku deploy:jar target/app.jar
```

### Adding Environment Variables

For environment-specific configuration, add secrets to your GitHub repository:

1. Go to repository Settings → Secrets and variables → Actions
2. Add new repository secrets
3. Reference them in workflows using `${{ secrets.VARIABLE_NAME }}`

### Custom Build Steps

Add additional build steps to the `build-and-test` job:

```yaml
- name: Custom build step
  run: |
    # Your custom commands here
    npm run custom-script
```

## Troubleshooting

### Common Issues

#### Build Failures

- **Dependency Issues**: Run `npm install` locally and commit
  `package-lock.json`
- **TypeScript Errors**: Fix type errors in your code
- **Test Failures**: Review and fix failing tests
- **ESLint Errors**: Fix linting issues or update `.eslintrc.cjs`

#### Deployment Issues

- **GitHub Pages Not Enabled**: Enable GitHub Pages in repository settings
- **404 Errors**: Check that `dist/index.html` exists and is properly configured
- **Custom Domain Issues**: Verify CNAME file and DNS settings

#### Performance Issues

- **Slow Builds**: Enable caching and optimize dependencies
- **Large Bundle Size**: Review bundle analysis and optimize imports

### Debugging

1. **Check Workflow Logs**: Review detailed logs in GitHub Actions
2. **Local Testing**: Test build process locally with `npm run build`
3. **Validate Configuration**: Use the validation script:
   `./scripts/validate-ci.sh`
4. **Review Documentation**: Check `.github/README_WORKFLOWS.md` for detailed
   information

## Best Practices

### Code Quality

- Maintain high test coverage
- Follow ESLint rules consistently
- Use TypeScript for type safety
- Regular dependency updates

### Deployment

- Use feature branches for development
- Test thoroughly before merging to main
- Monitor deployment status
- Keep deployment configuration in version control

### Security

- Never commit secrets to the repository
- Use GitHub Secrets for sensitive data
- Regularly audit dependencies
- Follow security best practices

## Monitoring and Maintenance

### Regular Tasks

- Review and update dependencies monthly
- Monitor GitHub Actions usage
- Check deployment status regularly
- Review and update workflow configurations

### Performance Monitoring

- Monitor build times
- Track bundle size
- Review GitHub Pages analytics
- Check Lighthouse scores

## Support

For additional help:

1. **Documentation**: Read `.github/README_WORKFLOWS.md`
2. **GitHub Actions**: Check GitHub Actions documentation
3. **Vite**: Review Vite build documentation
4. **GitHub Pages**: Consult GitHub Pages documentation

## Next Steps

1. **Test the Pipeline**: Make a small change and push to trigger the pipeline
2. **Monitor Deployment**: Verify the website deploys correctly
3. **Customize**: Adapt the pipeline to your specific needs
4. **Optimize**: Fine-tune build and deployment settings
5. **Monitor**: Set up monitoring and alerting for deployments

Your CI/CD pipeline is now ready to automatically build and deploy your website
whenever you push changes to your repository!

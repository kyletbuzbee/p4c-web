# GitHub Actions CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment. The
pipeline ensures code quality, runs tests, builds the application, and deploys
it to GitHub Pages.

## Workflow Overview

### 1. Build and Test Workflow (`.github/workflows/ci-build.yml`)

**Triggers:**

- Push to `main` or `develop` branches
- Pull requests to `main` branch

**Jobs:**

#### `build-and-test`

- **Purpose**: Validates code quality and builds the application
- **Steps**:
  1. Checkout code with full history
  2. Setup Node.js 20 with npm caching
  3. Install dependencies using `npm ci`
  4. Run security audit
  5. Run ESLint for code quality
  6. Run TypeScript type checking
  7. Execute unit tests
  8. Build application using `npm run build`
  9. Verify build output exists and contains essential files
  10. Upload build artifacts

#### `deploy-github-pages`

- **Purpose**: Deploys to GitHub Pages (production)
- **Triggers**: Only on push to `main` branch
- **Steps**:
  1. Download build artifacts
  2. Configure GitHub Pages
  3. Upload artifacts to Pages
  4. Deploy using GitHub's deploy-pages action
  5. Notify deployment status

#### `deploy-staging`

- **Purpose**: Deploys to staging environment
- **Triggers**: Only on push to `develop` branch
- **Note**: Currently outputs deployment message, customize for your staging
  environment

### 2. Legacy CI Workflow (`.github/workflows/ci.yml`)

**Note**: This workflow contains additional features like performance testing
and comprehensive security scanning. It can be used for more advanced CI/CD
needs.

**Jobs:**

- `security-scan`: Runs security audits and vulnerability checks
- `test`: Comprehensive test suite including unit, integration, and E2E tests
- `build`: Application build with artifact upload
- `performance-test`: Lighthouse performance testing
- `deploy-staging`: Staging deployment
- `deploy-production`: Production deployment

### 3. GitHub Pages Deployment (`.github/workflows/deploy.yml`)

**Purpose**: Dedicated workflow for GitHub Pages deployment with enhanced
validation

**Features:**

- Manual trigger support (`workflow_dispatch`)
- Build verification with health checks
- Deployment validation job
- Enhanced error handling and notifications

## Environment Variables

The build process uses the following environment variables:

- `VITE_USE_CUSTOM_DOMAIN=true`: Configures the build for custom domain
  deployment
- `NODE_VERSION=20`: Specifies Node.js version for builds

## Build Process

1. **Dependency Installation**: Uses `npm ci` for reproducible builds
2. **Security Checks**: Runs `npm audit` to check for vulnerabilities
3. **Code Quality**: ESLint and TypeScript type checking
4. **Testing**: Unit tests and type checking
5. **Build**: Production build with optimizations
6. **Verification**: Ensures essential files exist in build output
7. **Deployment**: Automatic deployment to GitHub Pages

## Customization

### For Custom Staging Deployment

Edit the `deploy-staging` job in `ci-build.yml`:

```yaml
- name: Deploy to staging
  run: |
    echo "Deploying to staging environment..."
    # Add your staging deployment commands here
    # Example: rsync, FTP, or cloud provider CLI commands
```

### For Additional Environments

Add new jobs to the workflow or create separate workflow files for different
environments.

### For Performance Testing

The legacy CI workflow includes Lighthouse CI for performance testing. Enable it
by:

1. Adding Lighthouse configuration
2. Installing Lighthouse CI in the build process
3. Configuring performance budgets

## Troubleshooting

### Build Failures

1. **Dependencies**: Ensure `package-lock.json` is up to date
2. **Node Version**: Verify Node.js version compatibility
3. **TypeScript Errors**: Check for type errors in the codebase
4. **Test Failures**: Review failing tests and fix issues

### Deployment Issues

1. **GitHub Pages**: Ensure GitHub Pages is enabled in repository settings
2. **Custom Domain**: Verify CNAME file and DNS settings
3. **Build Artifacts**: Check that `dist` directory is created and contains
   files

### Security Issues

1. **Vulnerabilities**: Address any npm audit failures
2. **Permissions**: Ensure proper GitHub Actions permissions
3. **Secrets**: Use GitHub Secrets for sensitive configuration

## Best Practices

1. **Keep Dependencies Updated**: Regularly update dependencies and run security
   audits
2. **Test Coverage**: Maintain good test coverage for critical functionality
3. **Build Caching**: Use npm caching to speed up builds
4. **Error Handling**: Implement proper error handling and notifications
5. **Environment Separation**: Use separate environments for staging and
   production

## Monitoring

- Monitor GitHub Actions runs for failures
- Check GitHub Pages deployment status
- Review build logs for warnings or errors
- Set up notifications for deployment status

## Support

For issues with the CI/CD pipeline:

1. Check GitHub Actions logs for detailed error messages
2. Verify repository settings and permissions
3. Review workflow configuration for syntax errors
4. Test build process locally before pushing changes

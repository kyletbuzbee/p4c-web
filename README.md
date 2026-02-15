# Properties 4 Creations 🏡

> **Transforming Communities Through Affordable Housing**  
> A veteran-owned company dedicated to revitalizing East Texas neighborhoods
> while providing dignified, safe housing for families and veterans.

[![Build Status](https://github.com/kyletbuzbee/p4c-web/actions/workflows/main.yml/badge.svg)](https://github.com/kyletbuzbee/p4c-web/actions/workflows/main.yml)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Node Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org/)
[![React Version](https://img.shields.io/badge/react-18.2.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.4-blue)](https://www.typescriptlang.org/)

**Live Site**:
[www.properties4creations.com](https://www.properties4creations.com)

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Quick Start](#-quick-start)
- [Development](#-development)
- [Testing](#-testing)
- [Build & Deployment](#-build--deployment)
- [Architecture](#-architecture)
- [Environment Variables](#-environment-variables)
- [Troubleshooting](#-troubleshooting)
- [Maintenance](#-maintenance)
- [Documentation](#-documentation)
- [Contact](#-contact)

---

## 🎯 About

**Properties 4 Creations (P4C)** is more than a housing platform—it's a
mission-driven initiative to rebuild communities through strategic
revitalization and affordable, accessible housing. As a veteran-owned business,
we lead with community impact first.

### Our Mission

Transform neighborhoods in East Texas through:

- 🏘️ **50% Community Focus** - Neighborhood revitalization and economic
  transformation
- 👨‍👩‍👧 **30% Families** - Providing safe, community-centered homes near quality
  schools
- 💼 **15% Investors/Sellers** - Offering strategic investment opportunities and
  fair property acquisitions
- 🎖️ **5% Veterans** - Supporting those who served through HUD-VASH partnerships

### Core Values

- **Community First**: Neighborhood revitalization drives everything we do
- **Transparency**: Real-time impact metrics and renovation standards
- **Accessibility**: WCAG-compliant platform, physically accessible properties
- **Strategic Investment**: Economic development through thoughtful real estate
  transformation

---

## ✨ Features

### 🏘️ Community Revitalization (PRIMARY FOCUS)

- **Neighborhood Transformation** - Strategic acquisition and renovation of
  distressed properties
- **Economic Impact Tracking** - Real-time metrics on block-level improvements
  and property value growth
- **Before/After Documentation** - Comprehensive visual records of community
  transformation
- **Local Partnership Programs** - Collaboration with municipalities and
  community organizations

### 🏘️ Property Management

- **Live Property Listings** - Supabase-powered real-time property database
- **Advanced Search & Filters** - Search by location, price, beds/baths,
  accessibility features
- **Detailed Property Views** - High-quality images, amenities, neighborhood
  info, school districts
- **Availability Tracking** - Real-time status updates for rental properties

### 👨‍👩‍👧 Family Resources

- **School District Information** - Detailed data on local schools and ratings
- **Community Safety Data** - Neighborhood crime statistics and safety resources
- **Family-Friendly Amenities** - Parks, playgrounds, and community centers
  nearby
- **Community-Centered Housing** - Homes designed for growing families in
  thriving neighborhoods

### 💼 Investor Opportunities

- **Portfolio Performance Metrics** - Real-time ROI tracking and market analysis
- **Strategic Investment Data** - Community impact investing with transparent
  returns
- **Fair Property Acquisitions** - Fast, as-is purchases with competitive offers
- **Market Intelligence** - East Texas real estate trends and growth
  opportunities

### 🎖️ Veteran Support

- **HUD-VASH Partnership** - Streamlined access to VA housing assistance
  programs
- **Priority Resources** - Dedicated support for military families
- **Respectful Service** - Honoring those who served with dignity and care

### 📊 Transparency & Impact

- **Live Impact Dashboard** - Real-time metrics on homes renovated, families
  housed, veterans served
- **Renovation Standards** - Detailed documentation of our renovation process
  and quality standards
- **Financial Transparency** - Breakdown of how every dollar is invested in the
  community

### 🤖 AI-Powered Assistance

- **Botpress Chatbot** - 24/7 AI assistant for property inquiries, application
  help, and FAQ
- **Gemini AI Integration** - Intelligent property recommendations based on user
  preferences

### 📱 Progressive Web App

- **Offline Support** - Browse properties even without internet connection
- **Install as App** - Add to home screen on mobile devices for native-like
  experience
- **Push Notifications** - Get alerts for new properties matching your criteria
- **Fast Performance** - Optimized caching and lazy loading for instant page
  loads

### ♿ Accessibility Features

- **WCAG 2.1 AA Compliant** - Screen reader support, keyboard navigation, high
  contrast
- **Accessibility Tools** - Built-in font size adjustment, contrast controls
- **Skip Links** - Quick navigation for keyboard users
- **Semantic HTML** - Properly structured content for assistive technologies

---

## 🛠️ Tech Stack

### Frontend

- **React 18.2.0** - UI library with Suspense and lazy loading
- **TypeScript 5.5.4** - Type-safe development
- **Vite 7.3.0** - Lightning-fast build tool and dev server
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **React Router 6.22.3** - Client-side routing
- **Lucide React** - Icon library (500+ icons)

### Backend & Services

- **Supabase** - PostgreSQL database, authentication, real-time subscriptions
- **Express.js** - Proxy server for API security and rate limiting
- **Botpress** - AI chatbot platform integration
- **Google Gemini AI** - Advanced language model for recommendations

### Testing & Quality

- **Vitest 4.0.16** - Unit and integration testing framework
- **React Testing Library 16.3.2** - Component testing utilities
- **ESLint 9.18.0** - Code linting with flat config
- **Prettier 3.5.3** - Code formatting
- **Lighthouse CI** - Performance and accessibility auditing

### DevOps & Deployment

- **GitHub Actions** - CI/CD pipeline
- **GitHub Pages** - Static site hosting with custom domain
- **Docker** - Containerized development environment
- **Workbox** - Service worker and PWA support

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 20.0.0 ([Download](https://nodejs.org/))
- **npm** >= 10.0.0 (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))
- **Code Editor** - VS Code recommended with extensions:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - TypeScript and JavaScript Language Features

### Optional

- **Docker Desktop** - For containerized development
  ([Download](https://www.docker.com/products/docker-desktop))
- **Supabase CLI** - For local database development
  ([Install Guide](https://supabase.com/docs/guides/cli))

---

## 🚀 Quick Start

Get up and running in 5 minutes:

```bash
# 1. Clone the repository
git clone https://github.com/kyletbuzbee/p4c-web.git
cd p4c-web

# 2. Install dependencies
npm install

# 3. Copy environment file
cp .env.example .env

# 4. Start development server
npm run dev

# 5. Open in browser
# Navigate to http://localhost:3001
```

The application will start with mock data by default. No backend setup required
for frontend development!

---

## 💻 Development

### Available Commands

#### Development Servers

```bash
npm run dev              # Start Vite dev server (port 3001)
npm run server           # Start Express proxy server (port 3001)
npm run dev:all          # Start both servers concurrently
```

#### Code Quality

```bash
npm run lint             # Run ESLint
npm run format           # Format code with Prettier
npm run format:check     # Check formatting without changes
npm run type-check       # TypeScript type checking (no emit)
```

#### Testing

```bash
npm test                 # Run tests in watch mode
npm run test:run         # Run tests once (CI mode)
npm run test:unit        # Run unit tests
npm run test:integration # Run integration tests
npm run test:coverage    # Generate coverage report
npm run test:ui          # Open Vitest UI
```

#### Build

```bash
npm run build            # Production build (TypeScript + Vite)
npm run preview          # Preview production build locally
```

#### Utilities

```bash
npm run content:audit    # Run content accessibility audit
npm run optimize:svg     # Optimize SVG files in public/images
npm run lighthouse:run   # Run Lighthouse CI audit
```

### Development Workflow

1. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make changes following conventions**
   - Use TypeScript strict mode
   - Follow ESLint rules (enforced on commit)
   - Use Tailwind CSS (no custom CSS unless necessary)
   - Add tests for new components
   - Follow accessibility guidelines (aria-labels, alt text)

3. **Run quality checks**

   ```bash
   npm run lint           # Fix linting issues
   npm run type-check     # Verify types
   npm run test:run       # Ensure tests pass
   ```

4. **Commit and push**

   ```bash
   git add .
   git commit -m "feat: add your feature description"
   git push origin feature/your-feature-name
   ```

5. **CI/CD runs automatically**
   - Linting and type checking
   - Unit tests
   - Production build
   - Auto-deploy to GitHub Pages (main branch only)

### Development Tips

- **Hot Module Replacement (HMR)**: Changes reflect instantly without full page
  reload
- **Mock Data**: Development uses mock data from `src/data/` by default
- **Path Aliases**: Use `@components/`, `@services/`, etc. instead of relative
  paths
- **Component Structure**: Keep files under 300 lines, split into smaller
  components if needed
- **Icons**: Use Lucide React for all icons
  (`import { IconName } from 'lucide-react'`)

---

## 🧪 Testing

### Test Structure

```
src/
├── components/
│   ├── Footer.tsx
│   └── Footer.test.tsx          # Co-located with component
├── services/
│   ├── api.ts
│   └── api.test.ts              # Co-located with service
└── test/
    └── setup.ts                 # Global test configuration
```

### Running Tests

```bash
# Watch mode (default) - great for TDD
npm test

# Run once (CI mode)
npm run test:run

# Run specific test file
npx vitest src/components/Footer.test.tsx

# Run tests with UI
npm run test:ui

# Generate coverage report
npm run test:coverage
```

### Writing Tests

Example component test:

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders copyright information', () => {
    render(<Footer />);
    expect(screen.getByText(/Properties 4 Creations/i)).toBeInTheDocument();
  });

  it('has accessible navigation links', () => {
    render(<Footer />);
    const contactLink = screen.getByRole('link', { name: /contact/i });
    expect(contactLink).toHaveAttribute('href', '/contact');
  });
});
```

### Coverage Goals

- **Statements**: > 80%
- **Branches**: > 75%
- **Functions**: > 80%
- **Lines**: > 80%

Coverage reports are generated in `coverage/` directory.

---

## 🏗️ Build & Deployment

### Production Build

```bash
# Build for production
npm run build

# Output directory: dist/
# - Minified JavaScript bundles
# - Optimized CSS
# - Compressed images
# - Service worker for PWA
```

### Build Optimizations

The production build includes:

- **Code Splitting** - Separate chunks for vendors (React, Supabase, Recharts,
  etc.)
- **Tree Shaking** - Unused code eliminated
- **Minification** - Terser with advanced compression
- **CSS Optimization** - PurgeCSS removes unused Tailwind classes
- **Image Optimization** - WebP/AVIF conversion, lazy loading
- **Console Removal** - All console.log statements removed in production

### Deployment (GitHub Pages)

Deployment is fully automated via GitHub Actions.

#### Automatic Deployment

Push to `main` branch triggers:

1. ✅ Lint and type check
2. ✅ Run unit tests
3. ✅ Build production bundle
4. ✅ Inject CNAME for custom domain
5. ✅ Deploy to GitHub Pages

#### Manual Deployment

```bash
# Build locally
npm run build

# Preview before deploy
npm run preview

# Deploy manually (if needed)
# Note: Automated via GitHub Actions
```

#### Custom Domain Setup

The site uses a custom domain: **www.properties4creations.com**

Configuration:

- **CNAME file**: Automatically injected in `dist/CNAME` during build
- **DNS records**: Managed at domain registrar
  - A records point to GitHub Pages IPs
  - CNAME record for www subdomain
- **HTTPS**: Automatically enabled via GitHub Pages

---

## 🏛️ Architecture

### High-Level Overview

```
┌─────────────────────────────────────────────────────────────┐
│                         Frontend (React)                     │
│  ┌─────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │   Pages     │  │  Components  │  │   Context/State  │  │
│  └─────────────┘  └──────────────┘  └──────────────────┘  │
│         │                  │                    │           │
│         └──────────────────┴────────────────────┘           │
│                            ↓                                │
│                    ┌──────────────┐                         │
│                    │   Services   │ (Service Layer)         │
│                    └──────────────┘                         │
└─────────────────────────┬───────────────────────────────────┘
                          ↓
         ┌────────────────┴────────────────┐
         ↓                                  ↓
┌──────────────────┐            ┌───────────────────┐
│  Express Proxy   │            │     Supabase      │
│  (Security Layer)│            │  (PostgreSQL DB)  │
└──────────────────┘            └───────────────────┘
         │
         ↓
┌──────────────────┐
│  External APIs   │
│  - Botpress      │
│  - Gemini AI     │
└──────────────────┘
```

### Service Layer Pattern ⚡ **CRITICAL**

**Rule**: UI components must NEVER import data directly. Always use the service
layer.

```typescript
// ❌ WRONG - Direct data import
import properties from '../data/properties.json';

// ✅ CORRECT - Service layer
import { api } from '@services/api';
const properties = await api.properties.getAll();
```

**Why?**

- Centralized data fetching logic
- Easy to swap mock data for real API calls
- Consistent error handling
- Type safety across the application

### Data Flow

```typescript
// 1. UI Component requests data
const { data } = useEffect(() => {
  api.properties.getAll();
}, []);

// 2. Service layer checks configuration
// api.ts decides: Supabase or Mock Data?

// 3a. Production: Supabase Query
const { data } = await supabase.from('properties').select('*');

// 3b. Development: Mock Data Fallback
return mockProperties;

// 4. Data flows back to UI
// Component renders with type-safe data
```

### Path Aliases

TypeScript and Vite are configured with path aliases for clean imports:

```typescript
// ❌ Relative path hell
import { api } from '../../../services/api';
import { Button } from '../../components/ui/Button';

// ✅ Clean aliases
import { api } from '@services/api';
import { Button } from '@components/ui/Button';
```

**Available aliases** (configured in `tsconfig.app.json` and `vite.config.ts`):

- `@/` → `./src/`
- `@components/` → `./src/components/`
- `@pages/` → `./src/pages/`
- `@services/` → `./src/services/`
- `@utils/` → `./src/utils/`
- `@types/` → `./src/types/`
- `@context/` → `./src/context/`
- `@hooks/` → `./src/hooks/`
- `@constants/` → `./src/constants/`
- `@assets/` → `./src/assets/`

### Express Proxy Server (Security Layer)

The `server/` directory contains an Express.js proxy that protects the
application:

**Features**:

- ✅ **API Key Security** - Keeps secrets server-side (never exposed to client)
- ✅ **Rate Limiting** - 100 requests per 15 minutes per IP
- ✅ **Input Validation** - Sanitizes and validates all inputs
- ✅ **Security Headers** - CSP, HSTS, X-Frame-Options, etc.
- ✅ **Request Size Limits** - 10MB max payload
- ✅ **Performance Monitoring** - Prometheus metrics endpoint

**API Endpoints**:

```
/api/chat         - Botpress chatbot messages
/api/gemini       - Gemini AI completions (secured)
/api/health       - Health check endpoint
/metrics          - Prometheus metrics
```

### Component Organization

```
src/
├── components/
│   ├── ui/                    # Reusable UI primitives
│   ├── sections/              # Page sections (Hero, Features, etc.)
│   ├── admin/                 # Admin dashboard components
│   ├── Navbar.tsx             # Global navigation
│   ├── Footer.tsx             # Global footer
│   └── FloatingChatbot.tsx    # AI assistant
├── pages/                     # Route-level components (lazy loaded)
├── services/                  # API and external integrations
├── context/                   # React Context providers
├── hooks/                     # Custom React hooks
├── utils/                     # Helper functions
├── types/                     # TypeScript type definitions
├── constants/                 # App-wide constants
└── data/                      # Mock data for development
```

### State Management

- **React Context** - Global state (Auth, Theme, Toast notifications)
- **Local Component State** - useState for component-specific data
- **URL State** - React Router for navigation and filters
- **Server State** - Supabase real-time subscriptions

No Redux/Zustand needed for this application's complexity.

---

## 🔐 Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

### Required Variables

```bash
# API Configuration
VITE_API_URL=http://localhost:3001/api  # Backend proxy URL

# Supabase (for production)
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

# Botpress Chatbot
BOTPRESS_API_URL=https://your-botpress-instance.com
BOTPRESS_API_KEY=your-api-key
BOTPRESS_BOT_ID=your-bot-id

# Deployment
VITE_USE_CUSTOM_DOMAIN=true               # For GitHub Pages
VITE_REPOSITORY_NAME=p4c-web              # GitHub repo name
```

### Environment Modes

**Development** (default):

- Uses mock data from `src/data/`
- No backend required
- Fast iteration

**Production**:

- Connects to Supabase database
- Uses real API endpoints
- Requires all environment variables

---

## 🐛 Troubleshooting

### Common Issues

#### TypeScript Errors in Test Files

**Problem**: Type errors in `.test.ts` files

**Solution**: Test files are excluded from main TypeScript project. Ensure:

- File ends with `.test.ts` or `.spec.ts`
- Listed in `tsconfig.app.json` exclude section

#### Vite HMR Not Working in Docker

**Problem**: File changes not triggering hot reload

**Solution**: Already configured with `usePolling: true` in `vite.config.ts`

```typescript
watch: {
  usePolling: true,
}
```

#### Supabase Connection Failed

**Problem**: Cannot connect to Supabase

**Solution**: App gracefully falls back to mock data. Check:

1. `VITE_SUPABASE_URL` is correct in `.env`
2. `VITE_SUPABASE_ANON_KEY` is valid
3. Supabase project is not paused
4. Network connectivity

#### ESLint Errors on Build

**Problem**: Linting fails in CI/CD

**Solution**:

```bash
# Fix auto-fixable issues
npm run lint

# Check specific errors
npm run lint -- --debug
```

#### CSP Violations in Production

**Problem**: Resources blocked by Content Security Policy

**Solution**: Add domains to `vite.config.ts`:

```typescript
// In server.headers['Content-Security-Policy']
"connect-src 'self' https://your-new-domain.com";
```

#### Port 3001 Already in Use

**Problem**: Cannot start dev server

**Solution**: Vite auto-increments ports (3002, 3003, etc.) Or manually kill
process:

```bash
# Windows
netstat -ano | findstr :3001
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:3001 | xargs kill -9
```

---

## 🔧 Maintenance

### Regular Tasks

#### Weekly

- [ ] Review and merge Dependabot PRs
- [ ] Check GitHub Actions workflow status
- [ ] Review Lighthouse audit scores

#### Monthly

- [ ] Run security audit: `npm audit`
- [ ] Update dependencies: `npm update`
- [ ] Review and optimize bundle size
- [ ] Check accessibility compliance
- [ ] Review Supabase usage and costs

#### Quarterly

- [ ] Major dependency updates (React, Vite, TypeScript)
- [ ] Performance profiling
- [ ] User feedback review and prioritization
- [ ] Database optimization (indexes, queries)

### Audit Commands

```bash
# Security audit
npm audit
npm audit fix  # Apply automatic fixes

# Lighthouse performance
npm run lighthouse:run

# Content accessibility
npm run content:audit

# Bundle size analysis
npm run build
# Review dist/ folder sizes
```

### Dependency Updates

```bash
# Check outdated packages
npm outdated

# Update specific package
npm update package-name

# Update all minor/patch versions
npm update

# Update major versions (careful!)
npm install package-name@latest
```

### Database Maintenance (Supabase)

Access Supabase dashboard:

1. Navigate to [app.supabase.com](https://app.supabase.com)
2. Select your project
3. Check:
   - Database health
   - Storage usage
   - API request counts
   - Realtime connections

---

## 📚 Documentation

### Internal Documentation

- **[Copilot Instructions](.github/copilot-instructions.md)** - Developer
  conventions and patterns
- **[Project Intelligence](P4C_PROJECT_INTELLIGENCE.md)** - Deep project context
  (3.6 MB)
- **[TODO](TODO.md)** - Current priorities and task backlog
- **[Deployment Plan](.github/GITHUB_PAGES_DEPLOYMENT_PLAN.md)** - GitHub Pages
  setup
- **[Workflow README](.github/README_WORKFLOWS.md)** - CI/CD pipeline
  documentation
- **[ESLint Migration](ESLINT_9_MIGRATION.md)** - ESLint 9 flat config notes

### External Resources

- **[React Documentation](https://react.dev)** - React 18 features
- **[Vite Documentation](https://vitejs.dev)** - Build tool configuration
- **[Tailwind CSS](https://tailwindcss.com)** - Utility classes and
  customization
- **[Supabase Docs](https://supabase.com/docs)** - Database and auth
- **[Vitest Documentation](https://vitest.dev)** - Testing framework

---

## 📞 Contact

### Development Team

For technical questions or support:

- **Repository**:
  [github.com/kyletbuzbee/p4c-web](https://github.com/kyletbuzbee/p4c-web)
- **Issues**: [GitHub Issues](https://github.com/kyletbuzbee/p4c-web/issues)
- **Pull Requests**: Internal team only

### Properties 4 Creations

For business inquiries:

- **Website**:
  [www.properties4creations.com](https://www.properties4creations.com)
- **Contact Page**: [Contact Form](https://www.properties4creations.com/contact)

---

## 📄 License

ISC License - See repository for full license text.

---

## 🙏 Acknowledgments

Built with dedication to serve veterans, families, and communities in East
Texas.

**Tech Credits**:

- React team for React 18
- Evan You for Vite
- Tailwind Labs for Tailwind CSS
- Supabase team for open-source backend
- Lucide for beautiful icons
- Vercel for inspiration on modern web development

---

<div align="center">

**Made with ❤️ by Properties 4 Creations**

_Transforming lives through dignified, affordable housing_

[⬆ Back to Top](#properties-4-creations-)

</div>

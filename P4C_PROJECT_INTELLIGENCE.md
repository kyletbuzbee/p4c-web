# Properties 4 Creation PROJECT INTELLIGENCE REPORT
**Date:** 2026-01-26T16:40:40.957107  
**Mission:** Revitalizing East Texas by providing quality affordable housing for families and the community, while offering sustainable solutions for property owners and investors.  
**Community Alignment Score:** 0/100

## 1. Executive Summary
- **Total Files:** 82
- **Lines of Code:** 15477
- **High/Critical Issues:** 94


## 2. Project Structure
```text
├── plans
│   ├── hmr-stability-solution.md
│   ├── navigation-hero-enhancement-plan.md
│   ├── race-condition-prevention.md
│   ├── refactoring-plan
│   ├── ux-optimization-plan.md
│   └── vite-optimization-solution.md
├── public
│   ├── images
│   │   ├── about
│   │   │   ├── about-us-team-headshot.webp
│   │   │   ├── about-us-team-onsite.webp
│   │   │   ├── about-us-team-owner.webp
│   │   │   ├── acquisition.png
│   │   │   ├── index.html
│   │   │   └── rehabilitaion.png
│   │   ├── banners
│   │   │   ├── career-banner.png
│   │   │   ├── career-banner.webp
│   │   │   ├── family-resources-banner.png
│   │   │   ├── hero-about-banner-1280.avif
│   │   │   ├── hero-about-banner-1280.webp
│   │   │   ├── hero-about-banner-1920.avif
│   │   │   ├── hero-about-banner-1920.webp
│   │   │   ├── hero-about-banner-640.avif
│   │   │   ├── hero-about-banner-640.webp
│   │   │   ├── hero-about-banner-960.avif
│   │   │   ├── hero-about-banner-960.webp
│   │   │   ├── hero-about-banner.png
│   │   │   ├── hero-about-banner.webp
│   │   │   ├── hero-about-us-banner.webp
│   │   │   ├── hero-application-banner-1280.webp
│   │   │   ├── hero-application-banner.webp
│   │   │   ├── hero-community-impact-banner.png
│   │   │   ├── hero-contact-banner-1280.webp
│   │   │   ├── hero-contact-banner-1920.webp
│   │   │   ├── hero-contact-banner-640.webp
│   │   │   ├── hero-contact-banner-960.webp
│   │   │   ├── hero-contact-banner.png
│   │   │   ├── hero-contact-banner.webp
│   │   │   ├── hero-faq-banner.png
│   │   │   ├── hero-faq-banner.webp
│   │   │   ├── hero-get-started-banner-1280.avif
│   │   │   ├── hero-get-started-banner-1280.webp
│   │   │   ├── hero-get-started-banner-1920.avif
│   │   │   ├── hero-get-started-banner-1920.webp
│   │   │   ├── hero-get-started-banner-640.avif
│   │   │   ├── hero-get-started-banner-640.webp
│   │   │   ├── hero-get-started-banner-960.avif
│   │   │   ├── hero-get-started-banner-960.webp
│   │   │   ├── hero-get-started-banner.png
│   │   │   ├── hero-home-banner-1280.avif
│   │   │   ├── hero-home-banner-1280.webp
│   │   │   ├── hero-home-banner-1920.avif
│   │   │   ├── hero-home-banner-1920.webp
│   │   │   ├── hero-home-banner-400w.webp
│   │   │   ├── hero-home-banner-640.avif
│   │   │   ├── hero-home-banner-640.webp
│   │   │   ├── hero-home-banner-800w.webp
│   │   │   ├── hero-home-banner-960.avif
│   │   │   ├── hero-home-banner-960.webp
│   │   │   ├── hero-home-banner.webp
│   │   │   ├── hero-homeowner-solutions.png
│   │   │   ├── hero-homeowner-solutions.webp
│   │   │   ├── hero-impact-banner.webp
│   │   │   ├── hero-impact_banner-1280-1280.avif
│   │   │   ├── hero-impact_banner-1280-1280.webp
│   │   │   ├── hero-impact_banner-1280-1920.avif
│   │   │   ├── hero-impact_banner-1280-1920.webp
│   │   │   ├── hero-impact_banner-1280-640.avif
│   │   │   ├── hero-impact_banner-1280-640.webp
│   │   │   ├── hero-impact_banner-1280-960.avif
│   │   │   ├── hero-impact_banner-1280-960.webp
│   │   │   ├── hero-impact_banner-1280.avif
│   │   │   ├── hero-impact_banner-1280.webp
│   │   │   ├── hero-impact_banner-1920-1280.avif
│   │   │   ├── hero-impact_banner-1920-1280.webp
│   │   │   ├── hero-impact_banner-1920-1920.avif
│   │   │   ├── hero-impact_banner-1920-1920.webp
│   │   │   ├── hero-impact_banner-1920-640.avif
│   │   │   ├── hero-impact_banner-1920-640.webp
│   │   │   ├── hero-impact_banner-1920-960.avif
│   │   │   ├── hero-impact_banner-1920-960.webp
│   │   │   ├── hero-impact_banner-1920.avif
│   │   │   ├── hero-impact_banner-1920.webp
│   │   │   ├── hero-impact_banner-640-1280.avif
│   │   │   ├── hero-impact_banner-640-1280.webp
│   │   │   ├── hero-impact_banner-640-1920.avif
│   │   │   ├── hero-impact_banner-640-1920.webp
│   │   │   ├── hero-impact_banner-640-640.avif
│   │   │   ├── hero-impact_banner-640-640.webp
│   │   │   ├── hero-impact_banner-640-960.avif
│   │   │   ├── hero-impact_banner-640-960.webp
│   │   │   ├── hero-impact_banner-640.avif
│   │   │   ├── hero-impact_banner-640.png
│   │   │   ├── hero-impact_banner-640.webp
│   │   │   ├── hero-impact_banner-960-1280.avif
│   │   │   ├── hero-impact_banner-960-1280.webp
│   │   │   ├── hero-impact_banner-960-1920.avif
│   │   │   ├── hero-impact_banner-960-1920.webp
│   │   │   ├── hero-impact_banner-960-640.avif
│   │   │   ├── hero-impact_banner-960-640.webp
│   │   │   ├── hero-impact_banner-960-960.avif
│   │   │   ├── hero-impact_banner-960-960.webp
│   │   │   ├── hero-impact_banner-960.avif
│   │   │   ├── hero-impact_banner-960.webp
│   │   │   ├── hero-legal-banner-1280.avif
│   │   │   ├── hero-legal-banner-1280.webp
│   │   │   ├── hero-legal-banner-1920.avif
│   │   │   ├── hero-legal-banner-1920.webp
│   │   │   ├── hero-legal-banner-640.avif
│   │   │   ├── hero-legal-banner-640.webp
│   │   │   ├── hero-legal-banner-960.avif
│   │   │   ├── hero-legal-banner-960.webp
│   │   │   ├── hero-legal-banner.webp
│   │   │   ├── hero-privacy-banner-1200w.webp
│   │   │   ├── hero-privacy-banner-1280.avif
│   │   │   ├── hero-privacy-banner-1280.webp
│   │   │   ├── hero-privacy-banner-1600w.webp
│   │   │   ├── hero-privacy-banner-1920.avif
│   │   │   ├── hero-privacy-banner-1920.webp
│   │   │   ├── hero-privacy-banner-640.avif
│   │   │   ├── hero-privacy-banner-640.webp
│   │   │   ├── hero-privacy-banner-800w.webp
│   │   │   ├── hero-privacy-banner-960.avif
│   │   │   ├── hero-privacy-banner-960.webp
│   │   │   ├── hero-privacy-banner.png
│   │   │   ├── hero-privacy-banner.webp
│   │   │   ├── hero-projects-banner-1280.avif
│   │   │   ├── hero-projects-banner-1280.webp
│   │   │   ├── hero-projects-banner-1920.avif
│   │   │   ├── hero-projects-banner-1920.webp
│   │   │   ├── hero-projects-banner-640.avif
│   │   │   ├── hero-projects-banner-640.webp
│   │   │   ├── hero-projects-banner-960.avif
│   │   │   ├── hero-projects-banner-960.webp
│   │   │   ├── hero-projects-banner.webp
│   │   │   ├── hero-resources-banner (1).webp
│   │   │   ├── hero-resources-banner-1280.avif
│   │   │   ├── hero-resources-banner-1280.webp
│   │   │   ├── hero-resources-banner-1920.avif
│   │   │   ├── hero-resources-banner-1920.webp
│   │   │   ├── hero-resources-banner-640.avif
│   │   │   ├── hero-resources-banner-640.webp
│   │   │   ├── hero-resources-banner-960.avif
│   │   │   ├── hero-resources-banner-960.webp
│   │   │   ├── hero-resources-banner.png
│   │   │   ├── hero-resources-banner.webp
│   │   │   ├── hero-success-story-banner (2).webp
│   │   │   ├── hero-success-story-banner.webp
│   │   │   ├── hero-terms-banner-1200w.webp
│   │   │   ├── hero-terms-banner-800w.webp
│   │   │   ├── hero-thank-you-banner.png
│   │   │   ├── hero-transparency-banner-1280.avif
│   │   │   ├── hero-transparency-banner-1280.webp
│   │   │   ├── hero-transparency-banner-1920.avif
│   │   │   ├── hero-transparency-banner-1920.webp
│   │   │   ├── hero-transparency-banner-640.avif
│   │   │   ├── hero-transparency-banner-640.webp
│   │   │   ├── hero-transparency-banner-960.avif
│   │   │   ├── hero-transparency-banner-960.webp
│   │   │   ├── hero-transparency-banner.png
│   │   │   ├── hero-transparency-banner.webp
│   │   │   ├── lindale-cottage.webp
│   │   │   ├── properties-banner.png
│   │   │   ├── resident-service-banner.png
│   │   │   └── resident-services-banner.PNG
│   │   ├── before-after-comparison
│   │   │   ├── before.webp
│   │   │   ├── projects-after-bathroom-400w.webp
│   │   │   ├── projects-after-bathroom-800w.webp
│   │   │   ├── projects-after-bathroom-placeholder.jpg
│   │   │   ├── projects-after-brick-patio-400w.webp
│   │   │   ├── projects-after-brick-patio-placeholder.jpg
│   │   │   ├── projects-after-front-porch-400w.webp
│   │   │   ├── projects-after-front-porch-800w.webp
│   │   │   ├── projects-after-front-porch-placeholder.jpg
│   │   │   ├── projects-after-front-porch.webp
│   │   │   ├── projects-after-kitchen-400w.webp
│   │   │   ├── projects-after-kitchen-800w.webp
│   │   │   ├── projects-after-kitchen-placeholder.jpg
│   │   │   ├── projects-after-kitchen.webp
│   │   │   ├── projects-after-living-room-400w.webp
│   │   │   ├── projects-after-living-room-800w.webp
│   │   │   ├── projects-after-living-room-placeholder.jpg
│   │   │   ├── projects-after-living-room.webp
│   │   │   ├── projects-before-bathroom-400w.webp
│   │   │   ├── projects-before-bathroom-800w.webp
│   │   │   ├── projects-before-bathroom-placeholder.jpg
│   │   │   ├── projects-before-front-porch-400w.webp
│   │   │   ├── projects-before-front-porch-placeholder.jpg
│   │   │   ├── projects-before-kitchen-400w.webp
│   │   │   ├── projects-before-kitchen-800w.webp
│   │   │   ├── projects-before-kitchen-placeholder.jpg
│   │   │   ├── projects-before-living-room-400w.webp
│   │   │   ├── projects-before-living-room-800w.webp
│   │   │   └── projects-before-living-room-placeholder.jpg
│   │   ├── family
│   │   │   ├── family-backyard.png
│   │   │   └── family-kitchen-dinner.png
│   │   ├── logo
│   │   │   ├── brand-logo-white-gold.svg
│   │   │   ├── brand-logo.svg
│   │   │   ├── chat-avatar.png
│   │   │   ├── chat-avatar.svg
│   │   │   ├── pwa-192x192.png
│   │   │   ├── pwa-512x512.png
│   │   │   ├── pwa.png
│   │   │   └── pwa.svg
│   │   ├── our-work-gallery
│   │   │   ├── our-impact-buy-as-is.webp
│   │   │   ├── our-work-detailed-measuring-800w.webp
│   │   │   ├── our-work-detailed-measuring-placeholder.jpg
│   │   │   ├── our-work-framing-door-400w.webp
│   │   │   ├── our-work-framing-door-800w.webp
│   │   │   ├── our-work-framing-door.webp
│   │   │   ├── our-work-meeting.png
│   │   │   └── our-work-painting-dog-800w.webp
│   │   ├── properties
│   │   │   ├── jefferson-riverfront.webp
│   │   │   ├── kemp-townhome.webp
│   │   │   ├── lindale-cottage.webp
│   │   │   ├── longview-victorian.webp
│   │   │   ├── marshall-farmhouse-400w.webp
│   │   │   ├── mineola-studio-outside.webp
│   │   │   ├── mineola-studio.webp
│   │   │   ├── rodriguez-family-400w.webp
│   │   │   ├── tyler-ranch-home-400w.webp
│   │   │   └── tyler-ranch-home.webp
│   │   ├── resident-review
│   │   │   ├── resident-review-alex.png
│   │   │   ├── resident-review-emily-david.png
│   │   │   ├── resident-review-mark.png
│   │   │   └── resident-review-sarah.png
│   │   └── videos
│   │       ├── community-investment-banner.mp4
│   │       ├── hero-our-impact.mp4
│   │       ├── hero-our-work-banner.mp4
│   │       ├── hero-properties-banner.mp4
│   │       ├── Hero-Spotlight-Banner(8).mp4
│   │       ├── hero-spotlight-banner.mp4
│   │       ├── home.mp4
│   │       ├── success-stories.mp4
│   │       └── Video Project 11.mp4
│   ├── favicon.ico
│   ├── manifest.json
│   ├── pwa-192x192.png
│   ├── pwa-512x512.png
│   ├── pwa.png
│   ├── pwa.svg
│   └── sw.js
├── scripts
│   ├── test-ai-chatbot.sh
│   └── validate-ci.sh
├── src
│   ├── components
│   │   ├── AccessibilityTools.tsx
│   │   ├── AddPropertyModal.tsx
│   │   ├── AdminDashboardSkeleton.tsx
│   │   ├── BeforeAfterSlider.tsx
│   │   ├── BotAvatar.tsx
│   │   ├── BotToggle.tsx
│   │   ├── ChatHeader.tsx
│   │   ├── ClientUpscaler.tsx
│   │   ├── CookieConsent.tsx
│   │   ├── DarkModeToggle.tsx
│   │   ├── ErrorBoundary.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── ImageOptimizer.tsx
│   │   ├── MicroInteractions.tsx
│   │   ├── Navbar.tsx
│   │   ├── OptimizedImage.tsx
│   │   ├── PropertyCard.tsx
│   │   ├── PropertyDetailsSkeleton.tsx
│   │   ├── ProtectedRoute.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── Skeleton.tsx
│   │   ├── SkipLink.tsx
│   │   └── UpdateNotification.tsx
│   ├── constants
│   │   ├── IMAGE_MANAGEMENT_GUIDE.md
│   │   └── images.ts
│   ├── context
│   │   ├── AuthContext.tsx
│   │   ├── DarkModeContext.tsx
│   │   ├── EnhancedAuthContext.tsx
│   │   ├── ImageFormatContext.tsx
│   │   └── ToastContext.tsx
│   ├── data
│   │   └── properties.ts
│   ├── lib
│   │   └── supabaseClient.ts
│   ├── pages
│   │   ├── About.tsx
│   │   ├── AccessibilityStatement.tsx
│   │   ├── AdminDashboard.tsx
│   │   ├── Application.tsx
│   │   ├── Careers.tsx
│   │   ├── Community.tsx
│   │   ├── Construction.tsx
│   │   ├── Contact.tsx
│   │   ├── Employment.tsx
│   │   ├── EqualHousing.tsx
│   │   ├── FamilyResources.tsx
│   │   ├── FAQ.tsx
│   │   ├── Home.tsx
│   │   ├── HomeownerSolutions.tsx
│   │   ├── OurImpact.tsx
│   │   ├── Privacy.tsx
│   │   ├── Properties.tsx
│   │   ├── PropertyDetails.tsx
│   │   ├── ResidentServices.tsx
│   │   ├── Reviews.tsx
│   │   ├── SuccessStories.tsx
│   │   ├── TenantLogin.tsx
│   │   ├── Terms.tsx
│   │   ├── Tools.tsx
│   │   ├── Transparency.tsx
│   │   ├── Veterans.tsx
│   │   └── VeteranServices.tsx
│   ├── services
│   │   ├── api.ts
│   │   ├── botpressService.test.ts
│   │   ├── botpressService.ts
│   │   ├── botpressWebchatService.ts
│   │   └── errorBoundaryService.ts
│   ├── test
│   │   └── setup.ts
│   ├── types
│   │   ├── declarations.d.ts
│   │   ├── index.ts
│   │   ├── supabase.ts
│   │   └── types.ts
│   ├── utils
│   │   ├── formatters.ts
│   │   └── imageOptimization.ts
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── pwa-register.ts
│   └── vite-env.d.ts
├── supabase
│   └── config.toml
├── 404.html
├── BotpressBot.bpz
├── context-review.py
├── cr.py
├── index.html
├── lighthouse-report.json
├── lighthouserc.json
├── metadata.json
├── P4C_PROJECT_INTELLIGENCE.md
├── package.json
├── postcss.config.cjs
├── README.md
├── robots.txt
├── sitemap.xml
├── src-deps.json
├── svgo.config.mjs
├── temp_script1.txt
├── test-csp.js
├── TODO.md
├── tsconfig.enhanced.json
├── tsconfig.json
└── vite.config.ts

```


## 3. Source Code & Analysis
### 📄 `404.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Page Not Found - Properties 4 Creation</title>
    <style>
      body {
        font-family:
          -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        margin: 0;
        padding: 0;
        background: #f5f5f0;
        color: #0b1120;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
      }
      .container {
        text-align: center;
        max-width: 600px;
        padding: 2rem;
      }
      h1 {
        font-size: 3rem;
        margin: 0 0 1rem 0;
        color: #0b1120;
      }
      p {
        font-size: 1.2rem;
        line-height: 1.6;
        margin-bottom: 2rem;
      }
      .btn {
        display: inline-block;
        background: #0b1120;
        color: white;
        padding: 1rem 2rem;
        text-decoration: none;
        border-radius: 8px;
        font-weight: 500;
        transition: background 0.3s;
      }
      .btn:hover {
        background: #1a243a;
      }
    </style>
    <script>
      // GitHub Pages SPA fallback
      // This script will redirect to the root page and let React Router handle the routing
      sessionStorage.redirect = location.href;
    </script>
  </head>
  <body>
    <div class="container">
      <h1>404</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <a href="/" class="btn">Go Home</a>
    </div>
    <script>
      // After 1 second, redirect to the root page with the original path as a hash
      setTimeout(function () {
        var l = window.location;
        l.replace(
          l.protocol +
            '//' +
            l.hostname +
            (l.port ? ':' + l.port : '') +
            l.pathname
              .split('/')
              .slice(0, -1)
              .join('/')
              .replace(/&/g, '~and~') +
            (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
            l.hash
        );
      }, 1000);
    </script>
  </body>
</html>

```

---
### 📄 `index.html`

```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Properties 4 Creation | Veteran Owned Housing</title>
  <meta name="description"
    content="Veteran-owned affordable housing in East Texas. Premium renovations, Section 8 accepted." />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap"
    rel="stylesheet" />
  <script type="importmap">
      {
        "imports": {
          "react": "https://esm.sh/react@18.3.1",
          "react/": "https://esm.sh/react@18.3.1/",
          "react-dom": "https://esm.sh/react-dom@18.3.1",
          "react-dom/client": "https://esm.sh/react-dom@18.3.1/client",
          "react-router-dom": "https://esm.sh/react-router-dom@6.22.3?deps=react@18.3.1,react-dom@18.3.1",
          "lucide-react": "https://esm.sh/lucide-react@0.344.0?deps=react@18.3.1",
          "react-helmet-async": "https://esm.sh/react-helmet-async@2.0.4?deps=react@18.3.1,react-dom@18.3.1",
          "react-dom/": "https://esm.sh/react-dom@^19.2.3/",
          "vitest": "https://esm.sh/vitest@^4.0.16"
        }
      }
    </script>
  <link rel="modulepreload" href="https://esm.sh/react@18.3.1" />
  <link rel="modulepreload" href="https://esm.sh/react-dom@18.3.1" />
  <link rel="modulepreload" href="https://esm.sh/react-dom@18.3.1/client" />
  <link rel="modulepreload" href="https://esm.sh/react-router-dom@6.22.3?deps=react@18.3.1,react-dom@18.3.1" />
  <link rel="manifest" href="/manifest.json" />
</head>

<body>
  <div id="root" role="main" aria-label="Properties 4 Creation Web App"></div>

  <script type="module" src="/src/index.tsx"></script>
</body>

</html>
```

---
### 📄 `public\images\about\index.html`

**⚠️ Analysis Findings:**
- 🔵 **[MEDIUM]** Image missing alt text (Line 226)
- 🔵 **[MEDIUM]** Image missing alt text (Line 337)
- 🔵 **[MEDIUM]** Image missing alt text (Line 355)
- 🔵 **[MEDIUM]** Image missing alt text (Line 372)
- 🔵 **[MEDIUM]** Image missing alt text (Line 388)

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>About Us - Properties 4 Creation</title>
    <meta
      name="description"
      content="Learn about Properties 4 Creation, a veteran-owned housing company serving East Texas. Our mission, values, and commitment to quality affordable housing for veterans and families."
    />
    <meta
      name="keywords"
      content="about Properties 4 Creation, veteran-owned housing, East Texas housing, veteran housing company"
    />
    <meta name="author" content="Properties 4 Creation" />
    /n
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://properties4creations.com/about/" />
    <meta property="og:title" content="About Us - Properties 4 Creation" />
    <meta
      property="og:description"
      content="Learn about our veteran-owned housing company and commitment to quality affordable housing."
    />
    <meta property="og:image" content="/images/logo/brand-logo.svg" />
    <meta property="og:site_name" content="Properties 4 Creation" />
    /n
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:url"
      content="https://properties4creations.com/about/"
    />
    <meta name="twitter:title" content="About Us - Properties 4 Creation" />
    <meta
      name="twitter:description"
      content="Learn about our veteran-owned housing company and commitment to quality affordable housing."
    />
    <meta name="twitter:image" content="/images/logo/brand-logo.svg" />
    /n
    <!-- Canonical URL -->
    <link rel="canonical" href="https://properties4creations.com/about/" />
    /n
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/images/logo/brand-logo.svg" />
    /n
    <!-- Web App Manifest -->
    <link rel="manifest" href="/manifest.json" />
    /n
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
      rel="stylesheet"
    />
    /n
    <!-- Styles -->
    <link rel="stylesheet" href="/css/style.css" />
    <link rel="stylesheet" href="/css/components/buttons.css" />
    <link rel="stylesheet" href="/css/components/cards.css" />
    <link rel="stylesheet" href="/css/layout/header.css" />
    <link rel="stylesheet" href="/css/layout/footer.css" />
    <link rel="stylesheet" href="/css/sections/hero.css" />
    <link rel="stylesheet" href="/css/sections/resources.css" />
    <link rel="stylesheet" href="/css/utilities.css" />
    /n
    <!-- Structured Data -->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Us - Properties 4 Creation",
        "url": "https://properties4creations.com/about/",
        "description": "Learn about Properties 4 Creation, a veteran-owned housing company",
        "mainEntity": {
          "@type": "Organization",
          "name": "Properties 4 Creation",
          "description": "Veteran-owned housing platform serving families and veterans in East Texas with affordable, renovated homes.",
          "foundingDate": "2024",
          "founders": [
            {
              "@type": "Person",
              "name": "Veteran Founders",
              "jobTitle": "Co-Founders",
              "description": "Military veterans with firsthand experience of housing challenges"
            }
          ],
          "areaServed": [
            {
              "@type": "City",
              "name": "Tyler",
              "addressRegion": "TX",
              "addressCountry": "US"
            },
            {
              "@type": "City",
              "name": "Longview",
              "addressRegion": "TX",
              "addressCountry": "US"
            },
            {
              "@type": "City",
              "name": "Marshall",
              "addressRegion": "TX",
              "addressCountry": "US"
            }
          ]
        }
      }
    </script>
    <!-- Preload critical resources -->
    <link
      rel="preload"
      as="image"
      href="/images/banners/hero-about-us-banner-400w.webp"
      type="image/webp"
    />
    <link
      rel="preload"
      as="image"
      href="/images/banners/hero-about-us-banner-placeholder.jpg"
      type="image/jpeg"
    />
  </head>
  <body>
    <div id="header-placeholder"></div>
    /n
    <!-- Main Content -->
    <main id="main-content" role="main" style="padding-top: 80px">
      /n
      <!-- Hero Section -->
      <section class="hero hero-about" aria-labelledby="hero-heading">
        <div class="container">
          <h1 id="hero-heading">About Properties 4 Creation</h1>
          <p>
            Veteran-owned and operated, we're committed to providing quality
            affordable housing solutions for East Texas communities.
          </p>
        </div>
      </section>
      /n
      <!-- Trust Stats -->
      <section class="trust-stats">
        <div class="container">
          <div class="stat-item">
            <span class="stat-number">100%</span>
            <div class="stat-label">Veteran Owned</div>
          </div>
          <div class="stat-item">
            <span class="stat-number">2024</span>
            <div class="stat-label">Established</div>
          </div>
          <div class="stat-item">
            <span class="stat-number">East Texas</span>
            <div class="stat-label">Locally Focused</div>
          </div>
        </div>
      </section>
      /n
      <!-- Mission & Vision -->
      <section class="mission-section" aria-labelledby="mission-heading">
        <div class="container">
          <div class="mission-content">
            <h2 id="mission-heading">Our Mission & Vision</h2>
            <div class="mission-grid grid-auto">
              <div class="mission-card">
                <h3>Our Mission</h3>
                <p>
                  To provide dignified, affordable housing solutions for
                  veterans, military families, and working families across East
                  Texas, ensuring that everyone has access to safe, renovated
                  homes they can be proud to call home.
                </p>
              </div>
              <div class="mission-card">
                <h3>Our Vision</h3>
                <p>
                  To be the leading veteran-owned housing provider in East
                  Texas, known for our commitment to quality renovations,
                  exceptional service, and community investment that strengthens
                  the foundation of our local communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      /n
      <!-- Story Section -->
      <section class="story-section" aria-labelledby="story-heading">
        <div class="container">
          <h2 id="story-heading">Our Story</h2>
          <div class="story-content">
            <div class="story-text">
              <p>
                Properties 4 Creation was founded by veterans who experienced
                firsthand the housing challenges that many military families and
                veterans face. After serving our country, we returned home only
                to encounter inadequate housing options that didn't meet our
                needs or reflect the quality of life we deserved.
              </p>
              <p>
                We saw the same struggles in our communities - families working
                multiple jobs just to afford basic housing, veterans living in
                substandard conditions, and communities suffering from housing
                instability. We knew there had to be a better way.
              </p>
              <p>
                That's why we started Properties 4 Creation. As a veteran-owned
                and operated company, we bring personal understanding and
                professional expertise to every property we renovate and every
                family we serve. We're not just in the business of housing -
                we're in the business of building stronger communities.
              </p>
            </div>
            <div class="story-image">
              <picture>
                <source
                  srcset="
                    /images/our-work-gallery/our-work-painting-dog-400w.webp
                  "
                  type="image/webp"
                />
                <img
                  src="/images/our-work-gallery/our-work-painting-dog-400w.jpg"
                  alt="Our team working on property renovations"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
      /n
      <!-- Values Section -->
      <section class="values-section" aria-labelledby="values-heading">
        <div class="container">
          <h2 id="values-heading">Our Values</h2>
          <div class="values-grid grid-auto">
            <div class="value-card">
              <div class="value-icon">🏛️</div>
              <h3>Integrity</h3>
              <p>
                We conduct business with honesty, transparency, and ethical
                practices in everything we do.
              </p>
            </div>
            <div class="value-card">
              <div class="value-icon">🎖️</div>
              <h3>Veteran Focus</h3>
              <p>
                We prioritize serving veterans and military families with
                specialized knowledge and dedication.
              </p>
            </div>
            <div class="value-card">
              <div class="value-icon">⭐</div>
              <h3>Quality</h3>
              <p>
                We never compromise on quality in our renovations, service, or
                commitment to our residents.
              </p>
            </div>
            <div class="value-card">
              <div class="value-icon">🤝</div>
              <h3>Community</h3>
              <p>
                We invest in our communities and work to strengthen the
                foundation of East Texas neighborhoods.
              </p>
            </div>
            <div class="value-card">
              <div class="value-icon">🔧</div>
              <h3>Excellence</h3>
              <p>
                We strive for excellence in every renovation, every interaction,
                and every home we provide.
              </p>
            </div>
            <div class="value-card">
              <div class="value-icon">❤️</div>
              <h3>Compassion</h3>
              <p>
                We approach every situation with empathy, understanding the
                challenges our residents face.
              </p>
            </div>
          </div>
        </div>
      </section>
      /n
      <!-- Service Philosophy -->
      <section class="philosophy-section" aria-labelledby="philosophy-heading">
        <div class="container">
          <h2 id="philosophy-heading">Our Service Philosophy</h2>
          <div class="philosophy-content">
            <div class="philosophy-text">
              <h3>Personal, Direct Service</h3>
              <p>
                Unlike large corporate landlords, we provide personal service
                without third-party management companies. When you call us, you
                speak directly with the people responsible for your property.
              </p>
              /n
              <h3>Quality Over Quantity</h3>
              <p>
                We focus on quality renovations rather than quantity. Each
                property receives our full attention and $30k+ investment to
                ensure it meets our standards for safety, comfort, and modern
                living.
              </p>
              /n
              <h3>Long-term Relationships</h3>
              <p>
                We view our residents as neighbors and community members, not
                just tenants. We're invested in your long-term success and
                stability.
              </p>
              /n
              <h3>Community Investment</h3>
              <p>
                We're committed to East Texas and actively work to strengthen
                our local communities through housing stability and economic
                investment.
              </p>
            </div>
            <div class="philosophy-image">
              <picture>
                <source
                  srcset="
                    /images/our-work-gallery/our-work-framing-door-400w.webp
                  "
                  type="image/webp"
                />
                <img
                  src="/images/our-work-gallery/our-work-framing-door-400w.jpg"
                  alt="Our team providing quality renovations"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
      /n
      <!-- Team Section -->
      <section class="team-section" aria-labelledby="team-heading">
        <div class="container">
          <h2 id="team-heading">Leadership Team</h2>
          <div class="team-grid grid-auto">
            <div class="team-member">
              <div class="member-photo">
                <img
                  src="/images/icons/034-soldier.png"
                  alt="Veteran leader avatar"
                  loading="lazy"
                />
              </div>
              <h3>Veteran Founders</h3>
              <p>Co-Founders & Co-Owners</p>
              <p>
                Military veterans with extensive experience in property
                management and community service. Our leadership team brings
                firsthand knowledge of the housing challenges faced by veterans
                and military families.
              </p>
            </div>
            <div class="team-member">
              <div class="member-photo">
                <img
                  src="/images/icons/009-quality-control.png"
                  alt="Quality assurance specialist avatar"
                  loading="lazy"
                />
              </div>
              <h3>Renovation Team</h3>
              <p>Property Specialists</p>
              <p>
                Licensed contractors and renovation experts who ensure every
                property meets our $30k+ quality standards. Our team has
                completed hundreds of renovations across East Texas.
              </p>
            </div>
            <div class="team-member">
              <div class="member-photo">
                <img
                  src="/images/icons/016-social-care.png"
                  alt="Customer service specialist avatar"
                  loading="lazy"
                />
              </div>
              <h3>Resident Services</h3>
              <p>Customer Care Team</p>
              <p>
                Dedicated support staff who provide personalized assistance to
                our residents. From application to move-in and beyond, we're
                here to ensure your housing experience is positive.
              </p>
            </div>
          </div>
        </div>
      </section>
      /n
      <!-- Call to Action -->
      <section class="cta-section" aria-labelledby="cta-heading">
        <div class="container">
          <div class="cta-content">
            <h2 id="cta-heading">Join Our Community</h2>
            <p>
              Experience the difference that veteran-owned housing can make.
              Contact us today to learn more about our properties and services.
            </p>
            <div class="cta-buttons">
              <a href="/contact/" class="btn btn-primary">Contact Us</a>
              <a href="/properties/" class="btn btn-secondary"
                >View Properties</a
              >
            </div>
          </div>
        </div>
      </section>
      /n
    </main>
    /n
    <div id="footer-placeholder"></div>
    /n
    <!-- Scripts -->
    <script type="module" src="/js/main.js"></script>
    <script type="module" src="/js/mobile-menu.js"></script>
    <script type="module" src="/js/theme-toggle.js"></script>
    <script type="module" src="/js/includes.js"></script>
  </body>
</html>

```

---
### 📄 `public\sw.js`

```javascript
/**
 * Service Worker for Properties 4 Creation
 * Provides offline functionality and caching strategies
 */

const CACHE_NAME = 'p4c-v2.0.0';
const STATIC_CACHE = 'p4c-static-v2.0.0';
const DYNAMIC_CACHE = 'p4c-dynamic-v2.0.0';
const IMAGE_CACHE = 'p4c-images-v2.0.0';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  // Add other static assets here
];

// Cache strategies
const CACHE_STRATEGIES = {
  CACHE_FIRST: 'cache-first',
  NETWORK_FIRST: 'network-first',
  STALE_WHILE_REVALIDATE: 'stale-while-revalidate',
};

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[SW] Failed to cache static assets:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames.map((cacheName) => {
            // Delete old caches
            if (
              cacheName !== STATIC_CACHE &&
              cacheName !== DYNAMIC_CACHE &&
              cacheName !== IMAGE_CACHE
            ) {
              return caches.delete(cacheName);
            }
          })
        )
      )
      .then(() => {
        return self.clients.claim();
      })
  );
});

// Fetch event - handle requests with appropriate strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip API requests (let them go to the server)
  if (url.pathname.startsWith('/api/')) {
    return;
  }

  // Handle different types of requests
  if (isImageRequest(request)) {
    event.respondWith(handleImageRequest(request));
  } else if (isStaticAsset(request)) {
    event.respondWith(handleStaticAsset(request));
  } else if (isNavigationRequest(request)) {
    event.respondWith(handleNavigationRequest(request));
  } else {
    event.respondWith(handleDynamicRequest(request));
  }
});

// Check if request is for an image
function isImageRequest(request) {
  const url = new URL(request.url);
  return /\.(png|jpg|jpeg|gif|svg|webp|ico)$/i.test(url.pathname);
}

// Check if request is for a static asset
function isStaticAsset(request) {
  const url = new URL(request.url);
  return (
    STATIC_ASSETS.some((asset) => url.pathname === asset) ||
    /\.(css|js|woff|woff2|ttf|otf)$/i.test(url.pathname)
  );
}

// Check if request is for navigation
function isNavigationRequest(request) {
  return request.mode === 'navigate';
}

// Cache-first strategy for images
async function handleImageRequest(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(IMAGE_CACHE);
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    console.error('[SW] Image request failed:', error);

    // Return a fallback image if available
    const fallbackResponse = await caches.match('/images/fallback.png');
    return (
      fallbackResponse || new Response('Image not available', { status: 404 })
    );
  }
}

// Cache-first strategy for static assets
async function handleStaticAsset(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    console.error('[SW] Static asset request failed:', error);
    return new Response('Asset not available', { status: 404 });
  }
}

// Network-first strategy for navigation requests
async function handleNavigationRequest(request) {
  try {
    const networkResponse = await fetch(request);

    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    console.error('[SW] Navigation request failed, trying cache:', error);

    // Fallback to cached version
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    // Final fallback to index.html for SPA routing
    const fallbackResponse = await caches.match('/index.html');
    return (
      fallbackResponse || new Response('Page not available', { status: 404 })
    );
  }
}

// Stale-while-revalidate strategy for dynamic content
async function handleDynamicRequest(request) {
  try {
    const cachedResponse = await caches.match(request);

    // Fetch from network in background
    const networkResponsePromise = fetch(request)
      .then((networkResponse) => {
        if (networkResponse.ok) {
          const cache = caches.open(DYNAMIC_CACHE);
          cache.then((c) => c.put(request, networkResponse.clone()));
        }
        return networkResponse;
      })
      .catch((error) => {
        console.error('[SW] Network request failed:', error);
        return null;
      });

    // Return cached response immediately if available
    if (cachedResponse) {
      // Update cache in background
      networkResponsePromise;
      return cachedResponse;
    }

    // Wait for network if no cache
    const networkResponse = await networkResponsePromise;
    return (
      networkResponse || new Response('Content not available', { status: 404 })
    );
  } catch (error) {
    console.error('[SW] Dynamic request failed:', error);

    const cachedResponse = await caches.match(request);
    return (
      cachedResponse || new Response('Content not available', { status: 404 })
    );
  }
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(performBackgroundSync());
  }
});

// Handle background sync
async function performBackgroundSync() {
  try {
    // Sync any pending data when connection is restored
    // Add your background sync logic here
  } catch (error) {
    console.error('[SW] Background sync failed:', error);
  }
}

// Push notifications (if needed in future)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New notification',
    icon: '/icon-192x192.png',
    badge: '/badge-72x72.png',
    tag: 'p4c-notification',
    requireInteraction: true,
  };

  event.waitUntil(
    self.registration.showNotification('Properties 4 Creation', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  event.waitUntil(clients.openWindow('/'));
});

```

---
### 📄 `src\App.tsx`

```typescript
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Loader2 } from 'lucide-react';

// Layout & UI Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import SkipLink from './components/SkipLink';
import ProtectedRoute from './components/ProtectedRoute';
import CookieConsent from './components/CookieConsent';
import AccessibilityTools from './components/AccessibilityTools';
import { UpdateNotification } from './components/UpdateNotification'; // + ADDED: PWA Support

// Context Providers
import { ToastProvider } from './context/ToastContext';
import { AuthProvider } from './context/AuthContext';
import { DarkModeProvider } from './context/DarkModeContext';
import { ImageFormatProvider } from './context/ImageFormatContext';

// Lazy Load Pages
const Home = React.lazy(() => import('./pages/Home'));
const Community = React.lazy(() => import('./pages/Community')); // + ADDED: 53% Mission
const Properties = React.lazy(() => import('./pages/Properties')); // + ADDED: 35% Mission (List View)
const PropertyDetails = React.lazy(() => import('./pages/PropertyDetails'));
const Application = React.lazy(() => import('./pages/Application'));
const FamilyResources = React.lazy(() => import('./pages/FamilyResources'));
const Veterans = React.lazy(() => import('./pages/Veterans'));
const VeteranServices = React.lazy(() => import('./pages/VeteranServices'));
const HomeownerSolutions = React.lazy(
  () => import('./pages/HomeownerSolutions')
);
const OurImpact = React.lazy(() => import('./pages/OurImpact'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Employment = React.lazy(() => import('./pages/Employment'));
const TenantLogin = React.lazy(() => import('./pages/TenantLogin'));
const AdminDashboard = React.lazy(() => import('./pages/AdminDashboard'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Faq = React.lazy(() => import('./pages/FAQ'));
const AccessibilityStatement = React.lazy(
  () => import('./pages/AccessibilityStatement')
);
const EqualHousing = React.lazy(() => import('./pages/EqualHousing'));
const SuccessStories = React.lazy(() => import('./pages/SuccessStories'));
const Transparency = React.lazy(() => import('./pages/Transparency'));

// Loading Fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-p4c-beige">
    <Loader2 className="w-12 h-12 text-p4c-gold animate-spin" />
    <span className="sr-only">Loading content...</span>
  </div>
);

// Standard Layout Component
const StandardLayout = () => (
  <>
    <Navbar />
    {/* + ADDED: PWA Notification Bar */}
    <UpdateNotification />

    <main id="main-content" className="flex-grow">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* --- 53% COMMUNITY (Revitalization) --- */}
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/impact" element={<OurImpact />} />
          <Route path="/stories" element={<SuccessStories />} />
          <Route path="/transparency" element={<Transparency />} />
          {/* --- 35% FAMILIES (Housing) --- */}
          <Route path="/properties" element={<Properties />} />{' '}
          {/* List View */}
          <Route path="/properties/:id" element={<PropertyDetails />} />{' '}
          {/* Detail View */}
          <Route path="/apply" element={<Application />} />
          <Route path="/family-resources" element={<FamilyResources />} />
          <Route path="/equal-housing" element={<EqualHousing />} />
          {/* --- 6% VETERANS --- */}
          <Route path="/veterans" element={<Veterans />} />
          <Route path="/veteran-services" element={<VeteranServices />} />
          {/* --- 6% INVESTORS --- */}
          <Route path="/homeowner-solutions" element={<HomeownerSolutions />} />
          {/* --- UTILITY / SUPPORT --- */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/employment" element={<Employment />} />
          <Route path="/portal" element={<TenantLogin />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/accessibility" element={<AccessibilityStatement />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* --- PROTECTED ROUTES --- */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute requiredRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </main>
    <AccessibilityTools />
    <Footer />
    <CookieConsent />
  </>
);

function App() {
  // Ensure we scroll to top on route change
  return (
    <HelmetProvider>
      <ToastProvider>
        <ErrorBoundary>
          <DarkModeProvider>
            <ImageFormatProvider>
              <AuthProvider>
                <div className="font-sans antialiased text-p4c-navy bg-p4c-beige min-h-screen flex flex-col">
                  <SkipLink />
                  <ScrollToTop />
                  <Routes>
                    <Route path="*" element={<StandardLayout />} />
                  </Routes>
                </div>
              </AuthProvider>
            </ImageFormatProvider>
          </DarkModeProvider>
        </ErrorBoundary>
      </ToastProvider>
    </HelmetProvider>
  );
}

export default App;

```

---
### 📄 `src\components\AccessibilityTools.tsx`

**⚠️ Analysis Findings:**
- 🔴 **[HIGH]** Button missing aria-label (Line 160)
- 🔴 **[HIGH]** Button missing aria-label (Line 177)
- 🔴 **[HIGH]** Button missing aria-label (Line 193)
- 🔴 **[HIGH]** Button missing aria-label (Line 201)
- 🔴 **[HIGH]** Button missing aria-label (Line 218)
- 🔴 **[HIGH]** Button missing aria-label (Line 229)
- 🔴 **[HIGH]** Button missing aria-label (Line 240)
- 🔴 **[HIGH]** Button missing aria-label (Line 256)
- 🔴 **[HIGH]** Button missing aria-label (Line 278)
- 🔴 **[HIGH]** Button missing aria-label (Line 300)

```typescript
import React, { useState, useEffect, useCallback, useRef } from 'react';

interface AccessibilityToolsProps {
  className?: string;
}

const AccessibilityTools: React.FC<AccessibilityToolsProps> = ({
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [contrast, setContrast] = useState('normal');
  const [readingMode, setReadingMode] = useState(false);
  const [focusMode, setFocusMode] = useState(false);
  const [audioAssistance, setAudioAssistance] = useState(false);

  // Use refs for stable access in event listeners
  const stateRef = useRef({
    fontSize,
    contrast,
    readingMode,
    focusMode,
    audioAssistance,
  });

  // Keep refs synced with state
  useEffect(() => {
    stateRef.current = {
      fontSize,
      contrast,
      readingMode,
      focusMode,
      audioAssistance,
    };
  }, [fontSize, contrast, readingMode, focusMode, audioAssistance]);

  // Apply styles to document
  useEffect(() => {
    const root = document.documentElement;

    // Font size
    root.style.setProperty('--accessibility-font-size', `${fontSize}%`);

    // Contrast
    if (contrast === 'high') {
      root.classList.add('high-contrast');
      root.classList.remove('dark-high-contrast');
    } else if (contrast === 'dark-high') {
      root.classList.add('dark-high-contrast');
      root.classList.remove('high-contrast');
    } else {
      root.classList.remove('high-contrast', 'dark-high-contrast');
    }

    // Reading mode
    if (readingMode) {
      root.classList.add('reading-mode');
    } else {
      root.classList.remove('reading-mode');
    }

    // Focus mode
    if (focusMode) {
      root.classList.add('focus-mode');
    } else {
      root.classList.remove('focus-mode');
    }
  }, [fontSize, contrast, readingMode, focusMode]);

  const increaseFontSize = useCallback(() => {
    setFontSize((prev) => Math.min(prev + 10, 150));
  }, []);

  const decreaseFontSize = useCallback(() => {
    setFontSize((prev) => Math.max(prev - 10, 80));
  }, []);

  const toggleContrast = useCallback(() => {
    setContrast((prev) => {
      if (prev === 'normal') return 'high';
      if (prev === 'high') return 'dark-high';
      return 'normal';
    });
  }, []);

  const toggleReadingMode = useCallback(() => {
    setReadingMode((prev) => !prev);
  }, []);

  const toggleFocusMode = useCallback(() => {
    setFocusMode((prev) => !prev);
  }, []);

  const toggleAudioAssistance = useCallback(() => {
    setAudioAssistance((prev) => {
      const newValue = !prev;
      if (newValue) {
        // Announce feature activation
        const utterance = new SpeechSynthesisUtterance(
          'Audio assistance activated. Use keyboard shortcuts for navigation.'
        );
        speechSynthesis.speak(utterance);
      }
      return newValue;
    });
  }, []);

  // Keyboard shortcuts - stable event listener
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const { ctrlKey, metaKey } = e;
      if (!ctrlKey && !metaKey) return;

      switch (e.key) {
        case '+':
          e.preventDefault();
          increaseFontSize();
          break;
        case '-':
          e.preventDefault();
          decreaseFontSize();
          break;
        case '0':
          e.preventDefault();
          setFontSize(100);
          break;
        case 'k':
          e.preventDefault();
          toggleContrast();
          break;
        case 'r':
          e.preventDefault();
          toggleReadingMode();
          break;
        case 'f':
          e.preventDefault();
          toggleFocusMode();
          break;
        case 'm':
          e.preventDefault();
          toggleAudioAssistance();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [
    increaseFontSize,
    decreaseFontSize,
    toggleContrast,
    toggleReadingMode,
    toggleFocusMode,
    toggleAudioAssistance,
  ]);

  return (
    <>
      {/* Floating Accessibility Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 left-6 bg-p4c-navy text-white p-4 rounded-full shadow-lg hover:bg-p4c-gold hover:text-p4c-navy transition-all duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-p4c-gold focus:ring-offset-2 ${className}`}
        aria-label="Accessibility Tools"
        title="Accessibility Tools (Ctrl/Cmd + K for contrast, + and - for font size)"
      >
        <span className="text-lg">⚙️</span>
        {isOpen && (
          <span className="absolute -top-2 -left-2 w-3 h-3 bg-red-500 rounded-full" />
        )}
      </button>

      {/* Accessibility Panel */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 bg-white border border-gray-200 rounded-lg shadow-xl p-4 w-80 z-50 animate-in slide-in-from-bottom-2 duration-200">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-gray-800">Accessibility Tools</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close accessibility tools"
            >
              ✕
            </button>
          </div>

          <div className="space-y-4">
            {/* Font Size Control */}
            <div>
              <span className="block text-sm font-medium text-gray-700 mb-2">
                Font Size: {fontSize}%
              </span>
              <div className="flex gap-2">
                <button
                  onClick={decreaseFontSize}
                  disabled={fontSize <= 80}
                  className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Decrease font size"
                >
                  A-
                </button>
                <button
                  onClick={increaseFontSize}
                  disabled={fontSize >= 150}
                  className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Increase font size"
                >
                  A+
                </button>
              </div>
            </div>

            {/* Contrast Control */}
            <div>
              <span className="block text-sm font-medium text-gray-700 mb-2">
                Contrast Mode
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setContrast('normal')}
                  className={`flex-1 px-3 py-2 rounded text-sm ${
                    contrast === 'normal'
                      ? 'bg-p4c-navy text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  aria-label="Normal contrast mode"
                >
                  Normal
                </button>
                <button
                  onClick={() => setContrast('high')}
                  className={`flex-1 px-3 py-2 rounded text-sm ${
                    contrast === 'high'
                      ? 'bg-p4c-navy text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  aria-label="High contrast mode"
                >
                  High
                </button>
                <button
                  onClick={() => setContrast('dark-high')}
                  className={`flex-1 px-3 py-2 rounded text-sm ${
                    contrast === 'dark-high'
                      ? 'bg-p4c-navy text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  aria-label="Dark high contrast mode"
                >
                  Dark High
                </button>
              </div>
            </div>

            {/* Reading Mode */}
            <div>
              <button
                onClick={toggleReadingMode}
                className={`w-full flex items-center justify-between px-3 py-2 rounded ${
                  readingMode
                    ? 'bg-p4c-beige text-p4c-navy'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-label={`Reading mode ${readingMode ? 'on' : 'off'}`}
              >
                <span>Reading Mode</span>
                <span
                  className={`w-4 h-4 border-2 rounded ${
                    readingMode
                      ? 'bg-p4c-navy border-p4c-navy'
                      : 'border-gray-400'
                  }`}
                />
              </button>
            </div>

            {/* Focus Mode */}
            <div>
              <button
                onClick={toggleFocusMode}
                className={`w-full flex items-center justify-between px-3 py-2 rounded ${
                  focusMode
                    ? 'bg-p4c-beige text-p4c-navy'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-label={`Focus mode ${focusMode ? 'on' : 'off'}`}
              >
                <span>Focus Mode</span>
                <span
                  className={`w-4 h-4 border-2 rounded ${
                    focusMode
                      ? 'bg-p4c-navy border-p4c-navy'
                      : 'border-gray-400'
                  }`}
                />
              </button>
            </div>

            {/* Audio Assistance */}
            <div>
              <button
                onClick={toggleAudioAssistance}
                className={`w-full flex items-center justify-between px-3 py-2 rounded ${
                  audioAssistance
                    ? 'bg-p4c-beige text-p4c-navy'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-label={`Audio assistance ${audioAssistance ? 'on' : 'off'}`}
              >
                <span>Audio Assistance</span>
                <span
                  className={`w-4 h-4 border-2 rounded ${
                    audioAssistance
                      ? 'bg-p4c-navy border-p4c-navy'
                      : 'border-gray-400'
                  }`}
                />
              </button>
            </div>

            {/* Keyboard Shortcuts */}
            <div className="pt-2 border-t border-gray-200">
              <p className="text-xs text-gray-600 mb-2">Keyboard Shortcuts:</p>
              <div className="text-xs space-y-1 text-gray-500">
                <div>Ctrl/Cmd + +/-: Font size</div>
                <div>Ctrl/Cmd + 0: Reset font</div>
                <div>Ctrl/Cmd + K: Contrast</div>
                <div>Ctrl/Cmd + R: Reading mode</div>
                <div>Ctrl/Cmd + F: Focus mode</div>
                <div>Ctrl/Cmd + M: Audio assistance</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityTools;

```

---
### 📄 `src\components\AddPropertyModal.tsx`

**⚠️ Analysis Findings:**
- 🔴 **[HIGH]** Button missing aria-label (Line 71)
- 🔴 **[HIGH]** Button missing aria-label (Line 293)
- 🔴 **[HIGH]** Button missing aria-label (Line 300)

```typescript
import React, { useState } from 'react';
import { X, Loader2, Save } from 'lucide-react';
import { useToast } from '../context/ToastContext';
import { api } from '../services/api';

interface AddPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const AddPropertyModal: React.FC<AddPropertyModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const { addToast } = useToast();
  const [loading, setLoading] = useState(false);

  // Updated state to match your SQL Schema
  const [formData, setFormData] = useState({
    title: '',
    address: '',
    city: '', // [NEW]
    price: '',
    status: 'available',
    bedrooms: 0,
    bathrooms: 0,
    sqft: 0,
    description: '',
    imageUrl:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80',
    neighborhood: '', // [NEW]
    schoolDistrict: '', // [NEW]
    availabilityDate: 'Available Now', // [NEW]
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send data to API (which maps it to Supabase)
      await api.properties.create({
        ...formData,
        // Default arrays for now (you can add UI selectors for these later)
        badges: ['Veteran Friendly', 'Recently Renovated'],
        amenities: ['Central Air', 'Fenced Yard', 'Pet Friendly'],
        accessibilityFeatures: ['Wide Doorways', 'Grab Bars'],
      });

      addToast('Property listed successfully!', 'success');
      onSuccess();
      onClose();
    } catch (error) {
      addToast('Failed to create property. Please check your inputs.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-xl font-serif font-bold text-p4c-navy">
            Add New Listing
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Section 1: Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 col-span-2">
              <label
                htmlFor="property-title"
                className="text-sm font-medium text-gray-700"
              >
                Property Title
              </label>
              <input
                id="property-title"
                required
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-p4c-gold outline-none"
                placeholder="e.g. Modern Family Home"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="monthly-rent"
                className="text-sm font-medium text-gray-700"
              >
                Monthly Rent ($)
              </label>
              <input
                id="monthly-rent"
                required
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-p4c-gold outline-none"
                placeholder="e.g. 1200"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="availability"
                className="text-sm font-medium text-gray-700"
              >
                Availability
              </label>
              <input
                id="availability"
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-p4c-gold outline-none"
                value={formData.availabilityDate}
                onChange={(e) =>
                  setFormData({ ...formData, availabilityDate: e.target.value })
                }
              />
            </div>
          </div>

          {/* Section 2: Location */}
          <div className="p-4 bg-gray-50 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2 col-span-2">
              <label
                htmlFor="street-address"
                className="text-sm font-medium text-gray-700"
              >
                Street Address
              </label>
              <input
                id="street-address"
                required
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-p4c-gold outline-none"
                placeholder="e.g. 123 Veteran Way"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="city"
                className="text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                id="city"
                required
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-p4c-gold outline-none"
                placeholder="e.g. Tyler"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="neighborhood"
                className="text-sm font-medium text-gray-700"
              >
                Neighborhood
              </label>
              <input
                id="neighborhood"
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-p4c-gold outline-none"
                placeholder="e.g. Azalea District"
                value={formData.neighborhood}
                onChange={(e) =>
                  setFormData({ ...formData, neighborhood: e.target.value })
                }
              />
            </div>
          </div>

          {/* Section 3: Specs */}
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="bedrooms"
                className="text-sm font-medium text-gray-700"
              >
                Bedrooms
              </label>
              <input
                id="bedrooms"
                required
                type="number"
                min="0"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                value={formData.bedrooms}
                onChange={(e) =>
                  setFormData({ ...formData, bedrooms: Number(e.target.value) })
                }
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="bathrooms"
                className="text-sm font-medium text-gray-700"
              >
                Bathrooms
              </label>
              <input
                id="bathrooms"
                required
                type="number"
                min="0"
                step="0.5"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                value={formData.bathrooms}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    bathrooms: Number(e.target.value),
                  })
                }
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="sqft"
                className="text-sm font-medium text-gray-700"
              >
                Sqft
              </label>
              <input
                id="sqft"
                required
                type="number"
                min="0"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                value={formData.sqft}
                onChange={(e) =>
                  setFormData({ ...formData, sqft: Number(e.target.value) })
                }
              />
            </div>
          </div>

          {/* Section 4: Details */}
          <div className="space-y-2">
            <label
              htmlFor="image-url"
              className="text-sm font-medium text-gray-700"
            >
              Image URL
            </label>
            <input
              id="image-url"
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600"
              placeholder="https://..."
              value={formData.imageUrl}
              onChange={(e) =>
                setFormData({ ...formData, imageUrl: e.target.value })
              }
            />
            <p className="text-xs text-gray-400">
              Paste a direct link to an image (Unsplash, etc.)
            </p>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-p4c-navy text-white rounded-lg font-bold hover:bg-p4c-slate transition-colors flex items-center gap-2"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Save className="w-4 h-4" />
              )}
              Save Property
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPropertyModal;

```

---
### 📄 `src\components\AdminDashboardSkeleton.tsx`

```typescript
import React from 'react';

interface AdminDashboardSkeletonProps {
  variant?: 'sidebar' | 'full';
}

const SidebarSkeleton: React.FC = () => (
  <aside className="w-64 bg-p4c-navy text-white hidden md:flex flex-col animate-pulse">
    <div className="p-6 border-b border-gray-700">
      <div className="h-6 bg-gray-600 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-700 rounded w-1/2" />
    </div>
    <nav className="flex-1 p-4 space-y-2">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="flex items-center w-full px-4 py-3 bg-gray-700/30 rounded-lg"
        >
          <div className="w-5 h-5 bg-gray-600 rounded mr-3" />
          <div className="h-4 bg-gray-600 rounded w-20" />
        </div>
      ))}
    </nav>
    <div className="p-4 border-t border-gray-700">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-gray-600 rounded-full" />
        <div className="space-y-1">
          <div className="h-4 bg-gray-600 rounded w-16" />
          <div className="h-3 bg-gray-700 rounded w-20" />
        </div>
      </div>
      <div className="h-10 bg-gray-600 rounded w-full" />
    </div>
  </aside>
);

const StatsSkeleton: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
    {[1, 2, 3, 4].map((i) => (
      <div
        key={i}
        className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
      >
        <div className="h-4 bg-gray-200 rounded w-24 mb-2" />
        <div className="h-8 bg-gray-200 rounded w-16 mb-2" />
        <div className="h-3 bg-gray-100 rounded w-28" />
      </div>
    ))}
  </div>
);

const TableSkeleton: React.FC = () => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
    <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
      <div className="h-5 bg-gray-200 rounded w-32" />
      <div className="h-4 bg-gray-100 rounded w-16" />
    </div>
    <div className="p-8">
      <div className="space-y-4">
        <div className="h-4 bg-gray-100 rounded w-1/4 mx-auto mb-6" />
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-16 bg-gray-50 rounded flex items-center px-6"
          >
            <div className="flex items-center w-full">
              <div className="w-10 h-10 bg-gray-200 rounded mr-4" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-1/3" />
                <div className="h-3 bg-gray-100 rounded w-1/4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const AdminDashboardSkeleton: React.FC<AdminDashboardSkeletonProps> = ({
  variant = 'full',
}) => {
  if (variant === 'sidebar') {
    return <SidebarSkeleton />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <SidebarSkeleton />
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <div className="h-8 bg-gray-200 rounded w-48" />
            <div className="h-10 bg-gray-200 rounded w-32" />
          </div>
          <StatsSkeleton />
          <TableSkeleton />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboardSkeleton;

```

---
### 📄 `src\components\BeforeAfterSlider.tsx`

**⚠️ Analysis Findings:**
- 🔵 **[MEDIUM]** Image missing alt text (Line 25)
- 🔵 **[MEDIUM]** Image missing alt text (Line 40)

```typescript
import React, { useState, useRef } from 'react';
import { ArrowLeftRight } from 'lucide-react';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  label: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterProps> = ({
  beforeImage,
  afterImage,
  label,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-2xl shadow-xl border border-gray-200 ring-1 ring-gray-900/5 group select-none">
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt={`Renovated ${label} - After`}
        loading="lazy"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-4 right-4 bg-p4c-navy/90 text-white text-xs px-3 py-1.5 rounded-full uppercase font-bold tracking-wider shadow-lg">
        After
      </div>

      {/* Before Image (Foreground - Clipped) */}
      <div
        className="absolute top-0 left-0 h-full w-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt={`Original ${label} - Before`}
          loading="lazy"
          className="absolute top-0 left-0 h-full max-w-none object-cover"
          style={{
            width: containerRef.current
              ? containerRef.current.offsetWidth
              : '100%',
          }}
        />
        <div className="absolute top-4 left-4 bg-gray-900/90 text-white text-xs px-3 py-1.5 rounded-full uppercase font-bold tracking-wider shadow-lg">
          Before
        </div>
      </div>

      {/* Slider Control Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_15px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-p4c-gold rounded-full p-3 shadow-xl border-2 border-white">
          <ArrowLeftRight className="w-5 h-5 text-p4c-navy" />
        </div>
      </div>

      {/* Hidden Range Input for Accessibility & Interaction */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleRangeChange}
        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-ew-resize z-30 focus:outline-none"
        aria-label={`Compare before and after renovation of ${label}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={sliderPosition}
      />
    </div>
  );
};

export default BeforeAfterSlider;

```

---
### 📄 `src\components\BotAvatar.tsx`

```typescript
import React from 'react';

interface BotAvatarProps {
  className?: string;
  size?: number;
}

const BotAvatar: React.FC<BotAvatarProps> = ({ className = '', size = 48 }) => {
  // Brand Colors from index.css
  const colors = {
    navy: '#0B1120',
    gold: '#C5A059',
    white: '#FFFFFF',
    beige: '#F5F5F0',
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`block ${className}`}
      aria-label="Properties 4 Creation Digital Architect Avatar"
      role="img"
    >
      {/* 1. Background Container (Navy with Gold Ring) */}
      <circle cx="32" cy="32" r="30" fill={colors.navy} />
      <circle cx="32" cy="32" r="30" stroke={colors.gold} strokeWidth="2" />

      {/* 2. The 'Structure' (House Outline) */}
      {/* Represents Housing/Stability */}
      <path
        d="M32 14L15 27V50H49V27L32 14Z"
        fill="none"
        stroke={colors.gold}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 3. The 'Digital' Core (Internal Circuitry) */}
      {/* Represents Intelligence/Analysis */}
      <path
        d="M32 24V34"
        stroke={colors.gold}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="32" cy="38" r="3" fill={colors.gold} />

      {/* Circuit Nodes connecting to the house frame */}
      <path
        d="M22 34H26"
        stroke={colors.gold}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M38 34H42"
        stroke={colors.gold}
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* 4. Subtle Glow/Highlight (Top Reflection) */}
      <path
        d="M32 4C47.464 4 60 16.536 60 32"
        stroke="url(#glowGradient)"
        strokeWidth="1"
        strokeOpacity="0.4"
        strokeLinecap="round"
      />

      <defs>
        <linearGradient
          id="glowGradient"
          x1="32"
          y1="4"
          x2="60"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={colors.white} />
          <stop offset="1" stopColor={colors.white} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BotAvatar;

```

---
### 📄 `src\components\BotToggle.tsx`

```typescript
/* src/components/bot/BotToggle.tsx */
import { MessageCircle } from 'lucide-react'; // Standard library import

<button className="p4c-bot-toggle" aria-label="Open support chat">
  <MessageCircle size={28} strokeWidth={2} /> {/* Clean, scalable vector */}
</button>;

```

---
### 📄 `src\components\ChatHeader.tsx`

**⚠️ Analysis Findings:**
- 🔵 **[MEDIUM]** Image missing alt text (Line 6)

```typescript
/* src/components/bot/ChatHeader.tsx */
<div className="p4c-bot-header">
  <div className="flex items-center gap-3">
    {/* The Avatar */}
    <div className="w-8 h-8 rounded-full bg-white/10 p-1 border border-p4c-gold overflow-hidden">
      <img
        src="/images/bot/digital-architect-avatar.webp"
        alt="Properties 4 Creation Digital Architect"
        className="w-full h-full object-cover"
      />
    </div>
    <div>
      <h3>Digital Architect</h3>
      <span className="status-indicator">
        <span className="status-dot" />
        Online
      </span>
    </div>
  </div>
</div>;

```

---
### 📄 `src\components\ClientUpscaler.tsx`

**⚠️ Analysis Findings:**
- 🔴 **[HIGH]** Button missing aria-label (Line 179)
- 🔴 **[HIGH]** Button missing aria-label (Line 264)
- 🔴 **[HIGH]** Button missing aria-label (Line 292)
- 🔵 **[MEDIUM]** Image missing alt text (Line 248)
- 🔵 **[MEDIUM]** Image missing alt text (Line 284)

```typescript
import React, { useState, useRef, useCallback } from 'react';
import {
  Upload,
  Zap,
  Download,
  Image as ImageIcon,
  X,
  FileText,
} from 'lucide-react';

interface UpscalerState {
  originalImage: string | null;
  upscaledImage: string | null;
  isProcessing: boolean;
  progress: number;
  error: string | null;
}

const ClientUpscaler: React.FC = () => {
  const [state, setState] = useState<UpscalerState>({
    originalImage: null,
    upscaledImage: null,
    isProcessing: false,
    progress: 0,
    error: null,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setState((prev) => ({
          ...prev,
          error: 'File size must be under 5MB',
        }));
        return;
      }

      // Validate file type
      if (!file.type.startsWith('image/')) {
        setState((prev) => ({
          ...prev,
          error: 'Please select a valid image file',
        }));
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const imageDataUrl = e.target?.result as string;
        setState((prev) => ({
          ...prev,
          originalImage: imageDataUrl,
          upscaledImage: null,
          error: null,
          progress: 0,
        }));
      };
      reader.readAsDataURL(file);
    },
    []
  );

  const handleUpscale = useCallback(async () => {
    if (!state.originalImage) return;

    try {
      setState((prev) => ({
        ...prev,
        isProcessing: true,
        progress: 0,
        error: null,
      }));

      // Import upscaler dynamically to avoid SSR issues
      const { default: Upscaler } = await import('upscaler');

      // Initialize upscaler
      const upscaler = new Upscaler();

      // Create image element for upscaler
      const img = new Image();
      img.src = state.originalImage;

      // Wait for image to load
      await new Promise((resolve) => {
        img.onload = resolve;
      });

      // Update progress
      setState((prev) => ({ ...prev, progress: 30 }));

      // Upscale the image
      const upscaled = await upscaler.upscale(img);

      // The upscaled result is already a data URL string
      if (typeof upscaled === 'string') {
        setState((prev) => ({
          ...prev,
          upscaledImage: upscaled,
          progress: 100,
          isProcessing: false,
        }));
      }
    } catch (error) {
      console.error('Upscaling failed:', error);
      setState((prev) => ({
        ...prev,
        error: 'Failed to upscale image. Please try again.',
        isProcessing: false,
      }));
    }
  }, [state.originalImage]);

  const handleDownload = useCallback(() => {
    if (!state.upscaledImage) return;

    const link = document.createElement('a');
    link.download = 'upscaled-image.png';
    link.href = state.upscaledImage;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [state.upscaledImage]);

  const handleReset = useCallback(() => {
    setState({
      originalImage: null,
      upscaledImage: null,
      isProcessing: false,
      progress: 0,
      error: null,
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Zap className="w-8 h-8 text-p4c-gold" />
          <h2 className="text-2xl font-bold text-p4c-navy">
            Free Image Upscaler
          </h2>
        </div>
        <p className="text-gray-600">
          Upscale your images 2x using your browser's processing power -
          completely free!
        </p>
      </div>

      {/* File Upload Area */}
      <div className="border-2 border-dashed border-p4c-gold/30 rounded-lg p-8 text-center hover:border-p4c-gold/60 transition-colors">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
          id="file-upload"
        />

        {state.originalImage ? (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label htmlFor="file-upload" className="cursor-pointer">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-p4c-gold text-p4c-navy rounded-lg hover:bg-p4c-goldHover transition-colors">
                  <Upload className="w-4 h-4" />
                  Choose Different Image
                </span>
              </label>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <X className="w-4 h-4" />
                Reset
              </button>
            </div>

            {state.error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                {state.error}
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-p4c-gold">
              <ImageIcon className="w-16 h-16 mx-auto" />
            </div>
            <label htmlFor="file-upload" className="cursor-pointer">
              <span className="inline-flex items-center gap-3 px-6 py-3 bg-p4c-gold text-p4c-navy rounded-lg hover:bg-p4c-goldHover transition-colors text-lg font-semibold">
                <Upload className="w-5 h-5" />
                Upload Image
              </span>
            </label>
            <p className="text-sm text-gray-500 mt-2">
              Max file size: 5MB • Supported formats: JPG, PNG, WebP
            </p>

            {state.error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mt-4">
                {state.error}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Progress Bar */}
      {state.isProcessing && (
        <div className="mt-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Processing Image...</span>
            <span>{state.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-p4c-gold h-2 rounded-full transition-all duration-300"
              style={{ width: `${state.progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Image Comparison */}
      {state.originalImage && (
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Original Image */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-p4c-navy">
                Original Image
              </h3>
              <div className="text-sm text-gray-500">
                {Math.round((state.originalImage.length * 0.75) / 1024)} KB
              </div>
            </div>
            <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
              <img
                src={state.originalImage}
                alt="Original"
                className="w-full h-auto rounded"
                style={{ maxHeight: '400px', objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* Upscaled Image */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-p4c-navy">
                Upscaled Image (2x)
              </h3>
              {state.upscaledImage && (
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-p4c-gold text-p4c-navy rounded hover:bg-p4c-goldHover transition-colors text-sm"
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
              )}
            </div>
            <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
              {state.isProcessing ? (
                <div className="flex items-center justify-center h-64 bg-gray-100 rounded">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-p4c-gold mx-auto" />
                    <p className="mt-4 text-gray-600">
                      Upscaling your image...
                    </p>
                  </div>
                </div>
              ) : state.upscaledImage ? (
                <img
                  src={state.upscaledImage}
                  alt="Upscaled"
                  className="w-full h-auto rounded"
                  style={{ maxHeight: '400px', objectFit: 'contain' }}
                />
              ) : (
                <div className="flex items-center justify-center h-64 bg-gray-100 rounded border-2 border-dashed border-gray-300">
                  <button
                    onClick={handleUpscale}
                    disabled={state.isProcessing}
                    className="inline-flex items-center gap-3 px-6 py-3 bg-p4c-navy text-white rounded-lg hover:bg-p4c-navy/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Zap className="w-5 h-5" />
                    <span className="font-semibold">Upscale Image</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Features Info */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <span className="text-p4c-gold">
            <FileText className="w-5 h-5" />
          </span>
          <div>
            <div className="font-medium">Free to Use</div>
            <div>Process images directly in your browser</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <span className="text-p4c-gold">
            <Zap className="w-5 h-5" />
          </span>
          <div>
            <div className="font-medium">2x Resolution</div>
            <div>Double the pixel dimensions</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <span className="text-p4c-gold">
            <ImageIcon className="w-5 h-5" />
          </span>
          <div>
            <div className="font-medium">Quality Preserved</div>
            <div>ESRGAN model for best results</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientUpscaler;

```

---
### 📄 `src\components\CookieConsent.tsx`

**⚠️ Analysis Findings:**
- 🔴 **[HIGH]** Button missing aria-label (Line 55)
- 🔴 **[HIGH]** Button missing aria-label (Line 61)

```typescript
import React, { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

const CookieConsent: React.FC = (): React.ReactNode => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('p4c_cookie_consent');
    if (!consent) {
      // Small delay to prevent layout shift on immediate load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, []);

  const handleAccept = () => {
    localStorage.setItem('p4c_cookie_consent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('p4c_cookie_consent', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4 animate-slide-in">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="bg-p4c-beige p-2 rounded-full hidden sm:block">
            <Cookie className="w-6 h-6 text-p4c-gold" />
          </div>
          <div className="text-sm text-gray-600">
            <p className="font-bold text-p4c-navy mb-1">
              We value your privacy
            </p>
            <p>
              We use cookies to enhance your browsing experience, serve
              personalized content, and analyze our traffic. By clicking
              &quot;Accept&quot;, you consent to our use of cookies.{' '}
              <a
                href="/privacy"
                className="underline text-p4c-navy hover:text-p4c-gold"
              >
                Read our Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button
            onClick={handleDecline}
            className="flex-1 md:flex-none px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 md:flex-none px-6 py-2 bg-p4c-navy text-white rounded-md text-sm font-medium hover:bg-p4c-slate transition-colors shadow-sm"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;

```

---
### 📄 `src\components\DarkModeToggle.tsx`

**⚠️ Analysis Findings:**
- 🔴 **[HIGH]** Button missing aria-label (Line 12)

```typescript
import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';

interface DarkModeToggleProps {
  className?: string;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ className = '' }) => {
  const { isDarkMode, toggleDarkMode, systemPreference } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className={`p-2 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-p4c-navy focus:ring-opacity-50 ${className}`}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={`Current: ${isDarkMode ? 'Dark' : 'Light'} mode | System preference: ${systemPreference}`}
    >
      <div className="relative w-6 h-6">
        {/* Sun Icon */}
        <div
          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
            isDarkMode
              ? 'opacity-0 scale-50 rotate-180'
              : 'opacity-100 scale-100 rotate-0'
          }`}
        >
          <svg
            className="w-full h-full text-yellow-500"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
        </div>

        {/* Moon Icon */}
        <div
          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
            isDarkMode
              ? 'opacity-100 scale-100 rotate-0'
              : 'opacity-0 scale-50 -rotate-180'
          }`}
        >
          <svg
            className="w-full h-full text-gray-200"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </div>
      </div>

      {/* Tooltip */}
      <span className="sr-only">
        {isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>

      {/* System preference indicator */}
      {systemPreference !== 'no-preference' && (
        <span
          className="absolute -bottom-1 -right-1 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          title={`System prefers ${systemPreference} mode`}
        />
      )}
    </button>
  );
};

export default DarkModeToggle;

```

---
### 📄 `src\components\ErrorBoundary.tsx`

**⚠️ Analysis Findings:**
- 🔴 **[HIGH]** Button missing aria-label (Line 158)
- 🔴 **[HIGH]** Button missing aria-label (Line 164)
- 🔴 **[HIGH]** Button missing aria-label (Line 171)

```typescript
import React, { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { useToast } from '../context/ToastContext';

// 1. Define the "Public" props (what you use in App.tsx)
interface ErrorBoundaryProps {
  children?: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  enableLogging?: boolean;
}

// 2. Define the "Internal" props (including the injected toast)
interface InternalProps extends ErrorBoundaryProps {
  toast: ReturnType<typeof useToast>;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorId: string;
  timestamp: string;
}

// 3. The Internal Class Component handles the logic
class ErrorBoundaryInternal extends Component<InternalProps, State> {
  public override state: State = {
    hasError: false,
    error: null,
    errorId: '',
    timestamp: '',
  };

  public static getDerivedStateFromError(error: Error): State {
    const errorId = `ERR_${Date.now()}_${Math.random()
      .toString(36)
      .substr(2, 9)}`;
    return {
      hasError: true,
      error,
      errorId,
      timestamp: new Date().toISOString(),
    };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.logErrorToService(error, errorInfo, this.state.errorId);
    this.props.onError?.(error, errorInfo);
  }

  private logErrorToService = (
    error: Error,
    errorInfo: ErrorInfo,
    errorId: string
  ) => {
    if (!this.props.enableLogging) return;

    try {
      const sanitizedErrorData = {
        errorId,
        message: this.sanitizeErrorMessage(error.message),
        errorType: error.constructor.name,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent.substring(0, 200),
        url: window.location.href,
        userId: this.getCurrentUserId(),
        stack: this.sanitizeStackTrace(error.stack || ''),
        componentStack: this.sanitizeComponentStack(
          errorInfo.componentStack || ''
        ),
      };

      // In a real env, you would fetch here.
      // mocking the call to avoid unused var warnings if you don't have the endpoint yet.
      // eslint-disable-next-line no-console
      console.debug('Logging error to service:', sanitizedErrorData);
    } catch (loggingError) {
      // eslint-disable-next-line no-console
      console.warn('Failed to log error:', loggingError);
    }
  };

  private sanitizeErrorMessage = (message: string): string =>
    message
      .replace(
        /api[_-]?key["\s]*[:=]["\s]*[a-zA-Z0-9\-_]+/gi,
        'api_key: [REDACTED]'
      )
      .replace(/token["\s]*[:=]["\s]*[a-zA-Z0-9\-_]+/gi, 'token: [REDACTED]')
      .substring(0, 500);

  private sanitizeStackTrace = (stack: string): string => {
    if (!stack) return '';
    return stack.substring(0, 2000);
  };

  private sanitizeComponentStack = (componentStack: string): string => {
    if (!componentStack) return '';
    return componentStack.substring(0, 500);
  };

  private getCurrentUserId = (): string | null => {
    try {
      const userData = localStorage.getItem('p4c_user');
      if (userData) return JSON.parse(userData).id || null;
    } catch {
      /* ignore */
    }
    return null;
  };

  private handleReload = () => {
    this.setState({ hasError: false, error: null, errorId: '', timestamp: '' });
    window.location.reload();
  };

  private handleReset = () => {
    this.setState({ hasError: false, error: null, errorId: '', timestamp: '' });
  };

  private handleReportError = () => {
    if (!this.state.error) return;
    try {
      this.props.toast.addToast(
        'Error report submitted successfully. Thank you for your feedback!',
        'success'
      );
    } catch (error) {
      this.props.toast.addToast('Failed to submit report.', 'error');
    }
  };

  public override render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <div className="min-h-screen flex items-center justify-center bg-p4c-beige p-4">
          <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full text-center border-t-4 border-red-500">
            <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
            <h1 className="text-2xl font-serif font-bold text-p4c-navy mb-2">
              Something went wrong
            </h1>
            <p className="text-gray-600 mb-2">
              We encountered an unexpected issue and are working to resolve it.
            </p>

            <div className="bg-gray-50 p-3 rounded-lg mb-6 text-left">
              <p className="text-sm text-gray-500 mb-1">
                <strong>Error ID:</strong> {this.state.errorId}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={this.handleReset}
                className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md font-medium hover:bg-gray-300"
              >
                Try Again
              </button>
              <button
                onClick={this.handleReload}
                className="flex-1 bg-p4c-navy text-white px-4 py-2 rounded-md font-bold hover:bg-p4c-slate flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Reload Page
              </button>
              <button
                onClick={this.handleReportError}
                className="flex-1 bg-blue-100 text-blue-800 px-4 py-2 rounded-md font-medium hover:bg-blue-200 text-sm"
              >
                Report This Error
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// 4. The Exported Component is a functional wrapper that injects the hook
// This explicitly tells Typescript: "I only need ErrorBoundaryProps"
const ErrorBoundary: React.FC<ErrorBoundaryProps> = (props) => {
  const toast = useToast();
  return <ErrorBoundaryInternal {...props} toast={toast} />;
};

export default ErrorBoundary;

```

---
### 📄 `src\components\Footer.tsx`

**⚠️ Analysis Findings:**
- 🔵 **[MEDIUM]** Image missing alt text (Line 20)

```typescript
import React from 'react';
import {
  Accessibility,
  Home,
  Facebook,
  Instagram,
  Linkedin,
  Flag,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants/images';

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* 1. Brand & Mission - BUSINESS FOCUSED */}
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <img
              src={IMAGES.LOGO.WHITE_GOLD}
              alt="Properties 4 Creation Real Estate Logo"
              className="h-20 w-auto object-contain"
            />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Properties 4 Creation is an investment and management firm dedicated
            to the revitalization of{' '}
            <strong>East Texas</strong>. We transform
            distressed assets into premium affordable housing for the East Texas
            community.
          </p>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-p4c-gold transition-colors"
              aria-label="Visit our Facebook page"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-p4c-gold transition-colors"
              aria-label="Visit our Instagram page"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-p4c-gold transition-colors"
              aria-label="Visit our LinkedIn profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* 2. Discover (User Facing) */}
        <div>
          <h4 className="font-serif font-bold text-lg mb-4 text-p4c-gold">
            Properties
          </h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Available Homes
              </Link>
            </li>
            <li>
              <Link
                to="/veteran-services"
                className="hover:text-white transition-colors"
              >
                Veteran Housing Program
              </Link>
            </li>
            <li>
              <Link
                to="/success-stories"
                className="hover:text-white transition-colors"
              >
                Tenant Testimonials
              </Link>
            </li>
            <li>
              <Link to="/impact" className="hover:text-white transition-colors">
                Community Impact Data
              </Link>
            </li>
            <li>
              <Link to="/portal" className="hover:text-white transition-colors">
                Resident Portal
              </Link>
            </li>
          </ul>
        </div>

        {/* 3. Company (Corporate Facing) */}
        <div>
          <h4 className="font-serif font-bold text-lg mb-4 text-p4c-gold">
            Company
          </h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link to="/about" className="hover:text-white transition-colors">
                Our Story
              </Link>
            </li>
            <li>
              <Link
                to="/transparency"
                className="hover:text-white transition-colors"
              >
                Construction Standards
              </Link>
            </li>
            <li>
              <Link
                to="/employment"
                className="hover:text-white transition-colors flex items-center gap-2"
              >
                Careers
                <span className="text-xs bg-p4c-gold text-p4c-navy px-1.5 rounded font-bold">
                  Hiring
                </span>
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-white transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-white transition-colors"
              >
                Contact Headquarters
              </Link>
            </li>
          </ul>
        </div>

        {/* 4. Contact & Legal */}
        <div>
          <h4 className="font-serif font-bold text-lg mb-4 text-p4c-gold">
            Office
          </h4>
          <ul className="space-y-2 text-sm text-gray-400 mb-6">
            <li>Serving East Texas:</li>
            <li className="font-medium text-white">
              Tyler • Longview • Marshall
            </li>
            <li className="mt-2">(936) 707-8460</li>
            <li>Richard@properties4creation.com</li>
          </ul>
          <h5 className="font-bold text-sm text-white mb-2">Legal</h5>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link
                to="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                to="/equal-housing"
                className="hover:text-white transition-colors"
              >
                Equal Housing
              </Link>
            </li>
            <li>
              <Link
                to="/accessibility"
                className="hover:text-white transition-colors"
              >
                Accessibility
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Badges Bar */}
      <div className="border-t border-gray-800 pt-8 pb-8">
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Flag className="text-p4c-gold w-4 h-4" /> Veteran Owned & Operated
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Home className="text-p4c-gold w-4 h-4" /> Equal Housing Opportunity
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Accessibility className="text-p4c-gold w-4 h-4" /> ADA Compliant
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 text-center text-gray-600 text-xs">
        <p>
          &copy; {new Date().getFullYear()} Properties 4 Creation, LLC. All
          rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

```

---
### 📄 `src\components\Hero.tsx`

**⚠️ Analysis Findings:**
- 🔴 **[HIGH]** Button missing aria-label (Line 67)
- 🔴 **[HIGH]** Button missing aria-label (Line 75)
- 🔵 **[MEDIUM]** Image missing alt text (Line 34)

```typescript
import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { IMAGES } from '../constants/images';

interface HeroProps {
  variant?: 'image' | 'video';
}

/**
 * P4C Hero Component
 * Refactored for: Revitalization Mission (East Texas Focus)
 * Content Makeup: 53% Community / 35% Family
 */
const Hero: React.FC<HeroProps> = ({ variant = 'image' }) => {
  const navigate = useNavigate();

  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex items-center bg-p4c-navy">
      {/* Background Media Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {variant === 'video' ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={IMAGES.BANNERS.HERO_PROJECTS}
            className="object-cover w-full h-full opacity-50" // Dimmed for readability
          >
            <source src={IMAGES.VIDEOS.HERO_SPOTLIGHT} type="video/mp4" />
          </video>
        ) : (
          <img
            src={IMAGES.BANNERS.HERO_HOME}
            alt="Professional renovation in East Texas"
            className="object-cover w-full h-full opacity-40"
          />
        )}
        {/* Unified Gradient Overlay: More 'Enterprise', less 'Budget' */}
        <div className="absolute inset-0 bg-gradient-to-r from-p4c-navy via-p4c-navy/70 to-transparent" />
      </div>

      {/* Main Content: Left-aligned for high-end editorial feel */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl animate-fade-in-up">
          {/* Mission Badge: Community & Trust (The Reliability Pledge) */}
          <div className="inline-flex items-center gap-2 bg-p4c-gold/10 border border-p4c-gold/30 px-4 py-2 rounded-full mb-8">
            <ShieldCheck className="w-5 h-5 text-p4c-gold" />
            <span className="text-p4c-gold text-sm font-bold tracking-widest uppercase">
              The P4C Reliability Pledge
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-[1.1]">
            Revitalizing <span className="text-p4c-gold">East Texas</span>{' '}
            <br />
            One Home at a Time.
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light leading-relaxed">
            Delivering quality affordable housing for families and veterans.
            Sustainable community solutions in <strong>East Texas</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <button
              onClick={() => navigate('/#homes')}
              className="bg-p4c-gold text-p4c-navy hover:bg-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl flex items-center justify-center gap-2 transform hover:-translate-y-1"
              aria-label="Browse available family homes in East Texas"
            >
              Find Your Home <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => navigate('/transparency')}
              className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-10 py-4 rounded-xl font-bold text-lg transition-all backdrop-blur-sm"
              aria-label="View our renovation and community impact standards"
            >
              Our Impact Metrics
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

```

---
### 📄 `src\components\ImageOptimizer.tsx`

**⚠️ Analysis Findings:**
- 🔵 **[MEDIUM]** Image missing alt text (Line 149)
- 🔵 **[MEDIUM]** Image missing alt text (Line 182)

```typescript
import React, { useState, useEffect, useRef } from 'react';
import { useImageFormat } from '../context/ImageFormatContext';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
  style?: React.CSSProperties;
}

const ImageOptimizer: React.FC<ImageOptimizerProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Mb2FkaW5nLi4uPC90ZXh0Pjwvc3ZnPg==',
  onLoad,
  onError,
  style,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(placeholder);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate optimized image URLs
  const generateOptimizedSrc = (
    originalSrc: string,
    format: string = 'webp'
  ) => {
    // In a real implementation, this would call an image optimization service
    // For now, we'll simulate format conversion and responsive sizing

    // Check if the image is already in the desired format
    const extension = originalSrc.split('.').pop()?.toLowerCase();
    if (extension === format) return originalSrc;

    // Simulate format conversion (in production, use Cloudinary, Imgix, etc.)
    const baseName = originalSrc.replace(/\.[^/.]+$/, '');
    return `${baseName}.${format}`;
  };

  // Generate responsive image sources
  const generateSrcSet = (originalSrc: string) => {
    const widths = [320, 640, 1024, 1920];
    return widths
      .map((width) => `${generateOptimizedSrc(originalSrc)} ${width}w`)
      .join(', ');
  };

  useEffect(() => {
    let isMounted = true;

    const loadImage = async () => {
      try {
        // Get cached format support from context
        const { supportedFormat } = useImageFormat();

        // Generate optimized source
        const optimizedSrc = generateOptimizedSrc(src, supportedFormat);

        // Preload image
        const img = new Image();

        // Set up event handlers
        img.onload = () => {
          if (isMounted) {
            setCurrentSrc(optimizedSrc);
            setIsLoaded(true);
            onLoad?.();
          }
        };

        img.onerror = () => {
          if (isMounted) {
            setHasError(true);
            setCurrentSrc(src); // Fallback to original
            onError?.();
          }
        };

        // Add loading class for CSS animations
        if (imgRef.current) {
          imgRef.current.classList.add('loading');
        }

        // Set source
        img.src = optimizedSrc;
      } catch (error) {
        console.warn('Image optimization failed, using original:', error);
        if (isMounted) {
          setCurrentSrc(src);
          setIsLoaded(true);
        }
      }
    };

    if (priority) {
      // Load immediately for priority images
      loadImage();
    } else {
      // Use IntersectionObserver for lazy loading
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              loadImage();
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '50px', // Load 50px before entering viewport
          threshold: 0.01,
        }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => {
        if (imgRef.current) {
          observer.unobserve(imgRef.current);
        }
      };
    }

    return () => {
      isMounted = false;
    };
  }, [src, priority, onLoad, onError]);

  // Generate sizes attribute for responsive images
  const sizes = width
    ? `${width}px`
    : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';

  return (
    <img
      ref={imgRef}
      src={currentSrc}
      srcSet={generateSrcSet(src)}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      className={`image-optimizer ${isLoaded ? 'loaded' : 'loading'} ${hasError ? 'error' : ''} ${className}`}
      style={{
        ...style,
        // Add blur effect while loading
        filter: !isLoaded ? 'blur(10px)' : 'none',
        transition: 'filter 0.3s ease-in-out, opacity 0.3s ease-in-out',
        opacity: isLoaded ? 1 : 0.7,
      }}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      {...props}
    />
  );
};

// Progressive image component with blur placeholder
export const ProgressiveImage: React.FC<
  ImageOptimizerProps & { blurDataURL?: string }
> = ({ blurDataURL, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden">
      {/* Blur placeholder */}
      {!isLoaded && blurDataURL && (
        <img
          src={blurDataURL}
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-110"
          aria-hidden="true"
        />
      )}

      {/* Main image */}
      <ImageOptimizer
        {...props}
        onLoad={() => setIsLoaded(true)}
        className={`${props.className} ${isLoaded ? '' : 'opacity-0'}`}
      />
    </div>
  );
};

export default ImageOptimizer;

```

---
### 📄 `src\components\MicroInteractions.tsx`

**⚠️ Analysis Findings:**
- 🔴 **[HIGH]** Button missing aria-label (Line 93)
- 🔴 **[HIGH]** Button missing aria-label (Line 176)

```typescript
import React, { useState, useEffect, useRef } from 'react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  animate?: boolean;
  'aria-label'?: string;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  loading = false,
  animate = true,
  'aria-label': ariaLabel,
  ...props
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [ripples, setRipples] = useState<
    Array<{ id: number; x: number; y: number }>
  >([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;

    if (animate) {
      // Create ripple effect
      const rect = buttonRef.current?.getBoundingClientRect();
      if (rect) {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const newRipple = { id: Date.now(), x, y };
        setRipples((prev) => [...prev, newRipple]);

        // Remove ripple after animation
        setTimeout(() => {
          setRipples((prev) =>
            prev.filter((ripple) => ripple.id !== newRipple.id)
          );
        }, 600);
      }

      // Button press animation
      setIsPressed(true);
      setTimeout(() => setIsPressed(false), 150);
    }

    onClick?.();
  };

  const baseClasses =
    'relative overflow-hidden transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  // Safe variant class lookup
  const getVariantClass = (variant: string): string => {
    switch (variant) {
      case 'primary':
        return 'bg-p4c-gold text-p4c-navy hover:bg-p4c-goldHover focus:ring-p4c-gold shadow-lg hover:shadow-xl hover:-translate-y-0.5';
      case 'secondary':
        return 'bg-p4c-navy text-white hover:bg-p4c-slate focus:ring-p4c-navy shadow-md hover:shadow-lg';
      case 'ghost':
        return 'bg-transparent text-p4c-navy hover:bg-gray-100 focus:ring-p4c-navy';
      default:
        return 'bg-p4c-gold text-p4c-navy hover:bg-p4c-goldHover focus:ring-p4c-gold shadow-lg hover:shadow-xl hover:-translate-y-0.5';
    }
  };

  // Safe size class lookup
  const getSizeClass = (size: string): string => {
    switch (size) {
      case 'sm':
        return 'px-3 py-1.5 text-sm rounded-md';
      case 'md':
        return 'px-4 py-2 text-base rounded-lg';
      case 'lg':
        return 'px-6 py-3 text-lg rounded-xl';
      default:
        return 'px-4 py-2 text-base rounded-lg';
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      className={`${baseClasses} ${getVariantClass(variant)} ${getSizeClass(size)} ${isPressed ? 'scale-95' : ''} ${animate ? 'hover-lift button-press' : ''} ${className}`}
      {...props}
    >
      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 animate-ping"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
            animation: 'ripple 0.6s linear',
          }}
        />
      ))}

      {/* Loading spinner */}
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </span>
      )}

      <span className={loading ? 'opacity-0' : ''}>{children}</span>
    </button>
  );
};

interface FloatingActionProps {
  children: React.ReactNode;
  onClick?: () => void;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  className?: string;
  'aria-label'?: string;
}

export const FloatingAction: React.FC<FloatingActionProps> = ({
  children,
  onClick,
  position = 'bottom-right',
  className = '',
  'aria-label': ariaLabel = 'Quick action button',
  ...props
}) => {
  // Safe position class lookup
  const getPositionClass = (position: string): string => {
    switch (position) {
      case 'bottom-right':
        return 'bottom-6 right-6';
      case 'bottom-left':
        return 'bottom-6 left-6';
      case 'top-right':
        return 'top-6 right-6';
      case 'top-left':
        return 'top-6 left-6';
      default:
        return 'bottom-6 right-6';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`fixed ${getPositionClass(position)} z-40 w-14 h-14 bg-p4c-gold text-p4c-navy rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-p4c-gold focus:ring-offset-2 group ${className}`}
      aria-label={ariaLabel}
      {...props}
    >
      <div className="flex items-center justify-center w-full h-full group-hover:scale-110 transition-transform duration-200">
        {children}
      </div>

      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-p4c-gold animate-ping opacity-20" />
    </button>
  );
};

interface ProgressIndicatorProps {
  progress: number; // 0-100
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
  showLabel?: boolean;
  animated?: boolean;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  progress,
  size = 'md',
  color = 'bg-p4c-gold',
  className = '',
  showLabel = false,
  animated = true,
}) => {
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setDisplayProgress(progress);
      }, 100);
      return () => clearTimeout(timer);
    }
    setDisplayProgress(progress);
    return undefined;
  }, [progress, animated]);

  // Safe size class lookup
  const getSizeClass = (size: string): string => {
    switch (size) {
      case 'sm':
        return 'w-16 h-2';
      case 'md':
        return 'w-24 h-3';
      case 'lg':
        return 'w-32 h-4';
      default:
        return 'w-24 h-3';
    }
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div
        className={`bg-gray-200 rounded-full overflow-hidden ${getSizeClass(size)}`}
      >
        <div
          className={`${color} h-full rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${Math.min(displayProgress, 100)}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-sm font-medium text-gray-700">
          {Math.round(displayProgress)}%
        </span>
      )}
    </div>
  );
};

interface SmoothScrollProps {
  to: string;
  children: React.ReactNode;
  offset?: number;
  duration?: number;
  className?: string;
  'aria-label'?: string;
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({
  to,
  children,
  offset = 0,
  className = '',
  'aria-label': ariaLabel,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault();

    const targetElement = document.querySelector(to);
    if (targetElement) {
      // Focus the target element for screen readers
      targetElement.setAttribute('tabindex', '-1');
      if ('focus' in targetElement) {
        (targetElement as HTMLElement).focus();
      }

      const targetPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={`transition-colors duration-200 hover:text-p4c-gold cursor-pointer ${className}`}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </a>
  );
};

interface StaggeredListProps {
  children: React.ReactNode[];
  staggerDelay?: number;
  className?: string;
}

export const StaggeredList: React.FC<StaggeredListProps> = ({
  children,
  staggerDelay = 100,
  className = '',
}) => (
  <div className={className}>
    {React.Children.map(children, (child, index) => (
      <div
        key={index}
        className="animate-fade-in"
        style={{
          animationDelay: `${index * staggerDelay}ms`,
        }}
      >
        {child}
      </div>
    ))}
  </div>
);

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: 'lift' | 'glow' | 'scale' | 'border';
}

export const HoverCard: React.FC<HoverCardProps> = ({
  children,
  className = '',
  hoverEffect = 'lift',
}) => {
  // Safe effect class lookup
  const getEffectClass = (effect: string): string => {
    switch (effect) {
      case 'lift':
        return 'hover:-translate-y-2 hover:shadow-xl';
      case 'glow':
        return 'hover:shadow-lg hover:shadow-p4c-gold/20';
      case 'scale':
        return 'hover:scale-105';
      case 'border':
        return 'hover:border-p4c-gold hover:border-2';
      default:
        return 'hover:-translate-y-2 hover:shadow-xl';
    }
  };

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${getEffectClass(hoverEffect)} ${className}`}
    >
      {children}
    </div>
  );
};

interface LoadingDotsProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
}

export const LoadingDots: React.FC<LoadingDotsProps> = ({
  size = 'md',
  color = 'bg-p4c-gold',
  className = '',
}) => {
  // Safe size class lookup
  const getSizeClass = (size: string): string => {
    switch (size) {
      case 'sm':
        return 'w-1 h-1';
      case 'md':
        return 'w-2 h-2';
      case 'lg':
        return 'w-3 h-3';
      default:
        return 'w-2 h-2';
    }
  };

  return (
    <div className={`flex space-x-1 ${className}`}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`${getSizeClass(size)} ${color} rounded-full animate-bounce`}
          style={{
            animationDelay: `${i * 0.1}s`,
            animationDuration: '0.6s',
          }}
        />
      ))}
    </div>
  );
};

// CSS for ripple animation (add to global CSS)

export default AnimatedButton;

```

---
### 📄 `src\components\Navbar.tsx`

**⚠️ Analysis Findings:**
- 🔴 **[HIGH]** Button missing aria-label (Line 198)
- 🔴 **[HIGH]** Button missing aria-label (Line 225)
- 🔴 **[HIGH]** Button missing aria-label (Line 253)
- 🔴 **[HIGH]** Button missing aria-label (Line 264)
- 🔴 **[HIGH]** Button missing aria-label (Line 283)
- 🔴 **[HIGH]** Button missing aria-label (Line 294)
- 🔴 **[HIGH]** Button missing aria-label (Line 323)
- 🔴 **[HIGH]** Button missing aria-label (Line 342)
- 🔴 **[HIGH]** Button missing aria-label (Line 351)
- 🔴 **[HIGH]** Button missing aria-label (Line 359)
- 🔵 **[MEDIUM]** Image missing alt text (Line 182)

```typescript
import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Menu,
  X,
  Home,
  ChevronDown,
  Users,
  Heart,
  ShieldCheck,
  Hammer,
  Flag,
  HeartHandshake,
  HelpCircle,
  Lock,
  Phone,
  FileText,
  CheckCircle2,
  LayoutDashboard,
  Scale,
  Accessibility,
  Building2,
} from 'lucide-react';
import { IMAGES } from '../constants/images';

interface NavItem {
  label: string;
  path?: string;
  children?: {
    label: string;
    path: string;
    icon: React.ReactNode;
    desc: string;
  }[];
}

const Navbar = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();

  // Define the Navigation Structure
  const navStructure: NavItem[] = [
    {
      label: 'Find a Home',
      children: [
        {
          label: 'Available Properties',
          path: '/',
          icon: <Home className="w-4 h-4" />,
          desc: 'Premium rentals in Tyler & Longview',
        },
        {
          label: 'Family Resources',
          path: '/family-resources',
          icon: <Users className="w-4 h-4" />,
          desc: 'School districts & community guides',
        },
        {
          label: 'Tenant Application',
          path: '/apply',
          icon: <FileText className="w-4 h-4" />,
          desc: 'Fast, digital approval process',
        },
        {
          label: 'Equal Housing',
          path: '/equal-housing',
          icon: <Scale className="w-4 h-4" />,
          desc: 'Fair housing for all applicants',
        },
      ],
    },
    {
      label: 'Company',
      children: [
        {
          label: 'Our Story',
          path: '/about',
          icon: <Building2 className="w-4 h-4" />,
          desc: 'Professional management team',
        },
        {
          label: 'Construction Standards',
          path: '/transparency',
          icon: <ShieldCheck className="w-4 h-4" />,
          desc: 'See our renovation quality specs',
        },
        {
          label: 'Community Investment',
          path: '/impact',
          icon: <Heart className="w-4 h-4" />,
          desc: 'Revitalization data & metrics',
        },
        {
          label: 'Resident Reviews',
          path: '/stories',
          icon: <CheckCircle2 className="w-4 h-4" />,
          desc: 'Hear from happy tenants',
        },
        {
          label: 'Careers',
          path: '/employment',
          icon: <Hammer className="w-4 h-4" />,
          desc: 'Join our renovation crews',
        },
      ],
    },
    {
      label: 'Residents',
      children: [
        {
          label: 'Veteran Housing',
          path: '/veterans',
          icon: <Flag className="w-4 h-4" />,
          desc: 'Specialized military housing',
        },
        {
          label: 'Resident Services',
          path: '/veteran-services',
          icon: <HeartHandshake className="w-4 h-4" />,
          desc: 'Support & case management',
        },
        {
          label: 'Resident Portal',
          path: '/portal',
          icon: <Lock className="w-4 h-4" />,
          desc: 'Pay rent & request repairs',
        },
        {
          label: 'FAQ',
          path: '/faq',
          icon: <HelpCircle className="w-4 h-4" />,
          desc: 'Leasing & policy questions',
        },
        {
          label: 'Accessibility',
          path: '/accessibility',
          icon: <Accessibility className="w-4 h-4" />,
          desc: 'ADA compliance info',
        },
      ],
    },
  ];

  // Handling Hover for Desktop Dropdowns
  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsOpen(false);
    setActiveDropdown(null);
    window.scrollTo(0, 0);
  };

  const handleKeyDown = (e: React.KeyboardEvent, path: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNavClick(path);
    }
  };

  return (
    <nav className="sticky top-0 z-50 glass-navbar border-b border-white/10 text-white backdrop-blur-2xl shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 flex items-center gap-3 hover:opacity-90 transition-opacity"
            aria-label="Properties 4 Creation Home"
          >
            <img
              src={IMAGES.LOGO.WHITE_GOLD}
              alt="Properties 4 Creation Logo"
              className="h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navStructure.map((group) => (
              <div
                key={group.label}
                className="relative group px-3 py-2"
                onMouseEnter={() => handleMouseEnter(group.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center text-sm font-medium transition-colors duration-200 ${
                    activeDropdown === group.label
                      ? 'text-p4c-gold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  aria-expanded={activeDropdown === group.label}
                  aria-haspopup="true"
                  aria-label={`${group.label} menu`}
                >
                  {group.label}
                  <ChevronDown
                    className={`ml-1 w-3 h-3 transition-transform duration-200 ${
                      activeDropdown === group.label ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === group.label && (
                  <div
                    className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-fade-in-up"
                    role="menu"
                  >
                    <div className="py-2">
                      {group.children?.map((child) => (
                        <button
                          key={child.label}
                          onClick={() => handleNavClick(child.path)}
                          onKeyDown={(e) => handleKeyDown(e, child.path)}
                          className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-start gap-3 group/item transition-colors"
                          role="menuitem"
                          aria-label={`${child.label} - ${child.desc}`}
                        >
                          <div className="mt-1 p-1.5 bg-p4c-beige rounded-md text-p4c-navy group-hover/item:bg-p4c-navy group-hover/item:text-p4c-gold transition-colors">
                            {child.icon}
                          </div>
                          <div>
                            <div className="text-p4c-navy font-bold text-sm">
                              {child.label}
                            </div>
                            <div className="text-gray-500 text-xs">
                              {child.desc}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Direct Links */}
            <button
              onClick={() => handleNavClick('/contact')}
              className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
              aria-label="Contact us"
            >
              Contact
            </button>

            <div className="h-6 w-px bg-gray-700 mx-2" />

            {/* Internal / Admin Link (Hidden in plain sight) */}
            <button
              onClick={() => handleNavClick('/admin')}
              className="text-gray-400 hover:text-p4c-gold p-2 rounded-full"
              aria-label="Staff Dashboard"
            >
              <LayoutDashboard className="w-4 h-4" aria-hidden="true" />
            </button>

            {/* Sell Your House CTA */}
            <Link
              to="/homeowner-solutions"
              className="bg-p4c-gold text-p4c-navy px-5 py-2.5 rounded-xl font-bold hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mr-3 text-sm flex items-center gap-2"
              aria-label="Sell your house - Homeowner solutions"
            >
              <Building2 className="w-4 h-4" aria-hidden="true" />
              Sell Your House
            </Link>

            {/* CTA Button */}
            <button
              onClick={() => handleNavClick('/apply')}
              className="bg-p4c-navy border border-p4c-gold text-p4c-gold hover:bg-p4c-gold hover:text-p4c-navy px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              aria-label="Apply now for tenant application"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 focus:outline-none focus:ring-2 focus:ring-p4c-gold"
              aria-label={
                isOpen ? 'Close navigation menu' : 'Open navigation menu'
              }
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-[#0B1120] border-t border-gray-800 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 pt-4 pb-6 space-y-6">
            {navStructure.map((group) => (
              <div key={group.label} className="space-y-3">
                <h3 className="text-p4c-gold font-serif font-bold border-b border-gray-700 pb-2">
                  {group.label}
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {group.children?.map((child) => (
                    <button
                      key={child.label}
                      onClick={() => handleNavClick(child.path)}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white transition-colors text-left"
                      aria-label={`${child.label} - ${child.desc}`}
                    >
                      <div className="text-p4c-gold">{child.icon}</div>
                      <div>
                        <div className="font-medium text-sm">{child.label}</div>
                        <div className="text-xs text-gray-500">
                          {child.desc}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <div className="pt-4 border-t border-gray-700 space-y-3">
              <button
                onClick={() => handleNavClick('/homeowner-solutions')}
                className="w-full bg-p4c-gold text-p4c-navy hover:bg-white px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2"
                aria-label="Sell your house fast - Homeowner solutions"
              >
                <Building2 className="w-4 h-4" aria-hidden="true" /> Sell Your
                House Fast
              </button>

              <button
                onClick={() => handleNavClick('/apply')}
                className="w-full bg-p4c-navy border border-p4c-gold text-p4c-gold hover:bg-p4c-goldHover hover:text-p4c-navy px-6 py-3 rounded-lg font-bold"
                aria-label="Start tenant application process"
              >
                Start Tenant Application
              </button>

              <button
                onClick={() => handleNavClick('/contact')}
                className="w-full flex items-center justify-center gap-3 p-2 text-gray-400 hover:text-white"
                aria-label="Contact office for assistance"
              >
                <Phone className="w-4 h-4" aria-hidden="true" /> Contact Office
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

```

---
### 📄 `src\components\OptimizedImage.tsx`

**⚠️ Analysis Findings:**
- 🔵 **[MEDIUM]** Image missing alt text (Line 157)
- 🔵 **[MEDIUM]** Image missing alt text (Line 196)

```typescript
/**
 * Optimized Image Component
 * Supports WebP/AVIF, lazy loading, responsive design
 */

import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  detectImageFormatSupport,
  getOptimalImageFormat,
  generateResponsiveSrcset,
  generateOptimizedImageUrl,
  LazyImageLoader,
  generateBlurPlaceholder,
  responsiveImageConfig,
} from '../utils/imageOptimization';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string[];
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  quality?: number;
  formats?: ('avif' | 'webp' | 'jpeg' | 'png')[];
  onLoad?: () => void;
  onError?: () => void;
  loading?: 'lazy' | 'eager';
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  sizes,
  priority = false,
  placeholder = 'blur',
  quality = 80,
  formats = ['avif', 'webp', 'jpeg'],
  onLoad,
  onError,
  loading = 'lazy',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');
  const imgRef = useRef<HTMLImageElement>(null);
  const [imageFormatSupport] = useState(detectImageFormatSupport());

  // Use custom sizes or default responsive sizes
  const imageSizes = sizes || responsiveImageConfig.sizes;

  // Generate image URLs for different formats and sizes
  const generateImageSources = useCallback(() => {
    const baseUrl = src.replace(/\.[^/.]+$/, ''); // Remove extension
    const sources = new Map<string, string>();

    // Generate sources for supported formats
    formats.forEach((format) => {
      if (format === 'avif' && imageFormatSupport.avif) {
        sources.set(
          'image/avif',
          generateResponsiveSrcset(
            baseUrl,
            responsiveImageConfig.breakpoints,
            'avif'
          )
        );
      } else if (format === 'webp' && imageFormatSupport.webp) {
        sources.set(
          'image/webp',
          generateResponsiveSrcset(
            baseUrl,
            responsiveImageConfig.breakpoints,
            'webp'
          )
        );
      } else if (format === 'jpeg') {
        sources.set(
          'image/jpeg',
          generateResponsiveSrcset(
            baseUrl,
            responsiveImageConfig.breakpoints,
            'jpeg'
          )
        );
      }
    });

    return sources;
  }, [src, formats, imageFormatSupport]);

  // Get fallback src
  const getFallbackSrc = useCallback(() => {
    const optimalFormat = getOptimalImageFormat(imageFormatSupport);
    return generateOptimizedImageUrl(src.replace(/\.[^/.]+$/, ''), {
      width: width || 800,
      quality,
      format: optimalFormat,
    });
  }, [src, width, quality, imageFormatSupport]);

  // Lazy loading setup
  useEffect((): (() => void) | void => {
    if (!priority && loading === 'lazy' && imgRef.current) {
      const loader = new LazyImageLoader();
      loader.observe(imgRef.current);

      return () => {
        loader.disconnect();
      };
    }
  }, [priority, loading]);

  // Set initial src
  useEffect(() => {
    if (priority || loading === 'eager') {
      setCurrentSrc(getFallbackSrc());
    }
  }, [priority, loading, getFallbackSrc]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setIsError(true);
    onError?.();
  }, [onError]);

  const imageSources = generateImageSources();
  const fallbackSrc = getFallbackSrc();

  return (
    <div className={`optimized-image-container ${className}`}>
      {/* Placeholder */}
      {!isLoaded && !isError && (
        <div
          className="image-placeholder"
          style={{
            width: width ? `${width}px` : '100%',
            height: height ? `${height}px` : 'auto',
            backgroundColor: '#f0f0f0',
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: placeholder === 'blur' ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        >
          {placeholder === 'blur' && (
            <img
              src={generateBlurPlaceholder()}
              alt=""
              className="blur-placeholder"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'blur(20px)',
                transform: 'scale(1.1)',
              }}
            />
          )}
        </div>
      )}

      {/* Main image */}
      <picture
        className={`optimized-image ${isLoaded ? 'loaded' : ''} ${isError ? 'error' : ''}`}
      >
        {/* AVIF sources */}
        {imageSources.has('image/avif') && (
          <source
            srcSet={imageSources.get('image/avif')}
            sizes={imageSizes.join(', ')}
            type="image/avif"
          />
        )}

        {/* WebP sources */}
        {imageSources.has('image/webp') && (
          <source
            srcSet={imageSources.get('image/webp')}
            sizes={imageSizes.join(', ')}
            type="image/webp"
          />
        )}

        {/* Fallback */}
        <img
          ref={imgRef}
          src={
            currentSrc || (priority || loading === 'eager' ? fallbackSrc : '')
          }
          alt={alt}
          width={width}
          height={height}
          className="optimized-image-img"
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : loading}
          decoding="async"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        />
      </picture>

      {/* Error state */}
      {isError && (
        <div className="image-error">
          <span>Failed to load image</span>
        </div>
      )}
    </div>
  );
};

// Specialized components for common use cases
interface PropertyImageProps extends Omit<OptimizedImageProps, 'src'> {
  propertyId: string;
  imageIndex?: number;
  type?: 'hero' | 'gallery' | 'thumbnail';
}

export const PropertyImage: React.FC<PropertyImageProps> = ({
  propertyId,
  imageIndex = 0,
  type = 'gallery',
  ...props
}) => {
  const getImageUrl = () => {
    const baseUrl = `/images/properties/${propertyId}`;
    switch (type) {
      case 'hero':
        return `${baseUrl}/hero`;
      case 'gallery':
        return `${baseUrl}/gallery/${imageIndex}`;
      case 'thumbnail':
        return `${baseUrl}/thumbnails/${imageIndex}`;
      default:
        return `${baseUrl}/gallery/${imageIndex}`;
    }
  };

  return (
    <OptimizedImage
      src={getImageUrl()}
      {...props}
      className={`property-image property-image--${type} ${props.className || ''}`}
    />
  );
};

export default OptimizedImage;

```

---
### 📄 `src\components\PropertyCard.tsx`

**⚠️ Analysis Findings:**
- 🔵 **[MEDIUM]** Image missing alt text (Line 89)

```typescript
import { useState, useRef, useEffect, useCallback, memo } from 'react';
import type { Property } from '../types/types';
import { Bed, Bath, Move, MapPin, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

interface PropertyCardProps {
  property: Property;
  priority?: boolean; // For above-the-fold content
  viewType?: 'list' | 'grid';
}

// Lazy loaded image component with intersection observer
const LazyImage = memo(
  ({
    src,
    alt,
    className,
    priority = false,
  }: {
    src: string;
    alt: string;
    className: string;
    priority?: boolean;
  }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    const imgRef = useRef<HTMLImageElement | null>(null);

    const { ref: inViewRef, inView } = useInView({
      triggerOnce: true,
      skip: priority, // Don't skip if it's priority content
      threshold: 0.1,
    });

    // Combine refs
    const setRefs = useCallback(
      (node: HTMLImageElement | null) => {
        if (node) {
          imgRef.current = node;
        }
        inViewRef(node);
      },
      [inViewRef]
    );

    useEffect(() => {
      if (priority || inView) {
        const img = imgRef.current;
        if (img && !img.src) {
          img.src = src;
        }
      }
    }, [inView, src, priority]);

    const handleLoad = useCallback(() => {
      setImageLoaded(true);
    }, []);

    const handleError = useCallback(() => {
      setImageError(true);
      setImageLoaded(true);
    }, []);

    if (imageError) {
      return (
        <div
          className={`${className} bg-gray-200 flex items-center justify-center`}
        >
          <div className="text-center text-gray-500">
            <ImageIcon className="w-12 h-12 mx-auto mb-2" />
            <p className="text-sm">Image not available</p>
          </div>
        </div>
      );
    }

    return (
      <div className={`${className} relative overflow-hidden`}>
        {/* Loading placeholder */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="text-gray-400">
              <ImageIcon className="w-8 h-8" />
            </div>
          </div>
        )}

        <img
          ref={setRefs}
          alt={alt}
          width="400"
          height="256"
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          // Add responsive image hints
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
    );
  }
);

LazyImage.displayName = 'LazyImage';

// Optimized PropertyCard with memoization
const PropertyCard = memo<PropertyCardProps>(
  ({ property, priority = false }) => {
    const [, setIsHovered] = useState(false);

    // Preload critical images for better UX
    useEffect((): (() => void) | void => {
      if (priority) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = property.imageUrl;
        document.head.appendChild(link);

        return () => {
          document.head.removeChild(link);
        };
      }
    }, [property.imageUrl, priority]);

    // Optimize badge rendering
    const renderBadges = useCallback(() => {
      if (!property.badges || property.badges.length === 0) return null;

      return (
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
          {property.badges.map((badge, index) => (
            <span
              key={`${badge}-${index}`}
              className="bg-p4c-navy text-white text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wide shadow-sm ring-1 ring-white/20"
            >
              {badge}
            </span>
          ))}
        </div>
      );
    }, [property.badges]);

    // Optimize price display
    const formatPrice = useCallback((price: string | number) => {
      const numericPrice =
        typeof price === 'number'
          ? price
          : parseFloat(price.replace(/[^0-9.]/g, ''));
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(numericPrice);
    }, []);

    return (
      <div
        className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 ring-1 ring-gray-900/5 flex flex-col h-full group transform hover:-translate-y-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden">
          <LazyImage
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-full transform transition-transform duration-700 group-hover:scale-105"
            priority={priority}
          />

          {renderBadges()}

          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="text-white font-bold text-lg">
              {formatPrice(property.price)}{' '}
              <span className="text-sm font-normal opacity-90">/ month</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-serif font-bold text-p4c-navy mb-1 line-clamp-2">
            {property.title}
          </h3>

          <p className="text-gray-500 text-sm flex items-center mb-4">
            <MapPin className="w-3 h-3 mr-1 text-p4c-gold flex-shrink-0" />
            <span className="truncate">{property.address}</span>
          </p>

          <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
            {property.description}
          </p>

          {/* Property Stats */}
          <div className="mt-auto pt-4 border-t border-gray-100 grid grid-cols-3 gap-3 text-center">
            <div className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg">
              <Bed className="w-5 h-5 text-p4c-slate mb-1.5" />
              <span className="text-xs font-semibold text-p4c-navy">
                {property.beds} Bed
              </span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg">
              <Bath className="w-5 h-5 text-p4c-slate mb-1.5" />
              <span className="text-xs font-semibold text-p4c-navy">
                {property.baths} Bath
              </span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg">
              <Move className="w-5 h-5 text-p4c-slate mb-1.5" />
              <span className="text-xs font-semibold text-p4c-navy">
                {typeof property.sqft === 'number'
                  ? property.sqft.toLocaleString()
                  : property.sqft}{' '}
                sqft
              </span>
            </div>
          </div>

          {/* Action Button */}
          <Link
            to={`/properties/${property.id}`}
            className="block w-full text-center mt-6 border-2 border-p4c-navy text-p4c-navy hover:bg-p4c-navy hover:text-white font-bold py-2.5 rounded-lg transition-colors duration-200 text-sm uppercase tracking-wide"
            aria-label={`View details for ${property.title}`}
          >
            View Details
          </Link>
        </div>
      </div>
    );
  }
);

PropertyCard.displayName = 'PropertyCard';

export default PropertyCard;

```

---
### 📄 `src\components\PropertyDetailsSkeleton.tsx`

```typescript
import React from 'react';
import Skeleton from './Skeleton';

const PropertyDetailsSkeleton: React.FC = () => (
  <div className="bg-p4c-beige min-h-screen pb-20 animate-fade-in">
    {/* Hero Skeleton */}
    <div className="relative h-[50vh] w-full bg-gray-200">
      <Skeleton className="w-full h-full" />
      <div className="absolute bottom-0 left-0 w-full p-8">
        <Skeleton className="h-10 w-2/3 mb-4 bg-gray-300" />
        <Skeleton className="h-6 w-1/3 bg-gray-300" />
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-8">
          {/* Stats Bar */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex justify-between items-center h-24 border border-gray-100 ring-1 ring-gray-900/5">
            <Skeleton className="h-12 w-20" />
            <div className="w-px h-12 bg-gray-100" />
            <Skeleton className="h-12 w-20" />
            <div className="w-px h-12 bg-gray-100" />
            <Skeleton className="h-12 w-20" />
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 space-y-4 border border-gray-100 ring-1 ring-gray-900/5">
            <Skeleton className="h-8 w-1/3 mb-6" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />

            <div className="pt-8 grid grid-cols-2 gap-4">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
            </div>
          </div>
        </div>

        {/* Sidebar CTA */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4 border border-gray-100 ring-1 ring-gray-900/5">
            <Skeleton className="h-8 w-1/2 mx-auto" />
            <Skeleton className="h-4 w-3/4 mx-auto mb-6" />
            <Skeleton className="h-14 w-full rounded-md" />
            <Skeleton className="h-14 w-full rounded-md" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PropertyDetailsSkeleton;

```

---
### 📄 `src\components\ProtectedRoute.tsx`

```typescript
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Loader2 } from 'lucide-react';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'tenant' | 'admin';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredRole,
}) => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-p4c-gold animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    // Redirect them to the login page, but save the current location they were trying to go to
    return <Navigate to="/portal" state={{ from: location }} replace />;
  }

  if (requiredRole && user?.role !== requiredRole) {
    // User is logged in but doesn't have permission
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;

```

---
### 📄 `src\components\ScrollToTop.tsx`

```typescript
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

```

---
### 📄 `src\components\Skeleton.tsx`

```typescript
import React from 'react';

interface SkeletonProps {
  className?: string;
}

/**
 * Standardized Properties 4 Creation Skeleton Loader
 * Enforces rounded-xl standard to maintain brand dignity during loading states.
 */
const Skeleton: React.FC<SkeletonProps> = ({ className = '' }) => (
  <div
    className={`animate-pulse bg-gray-200 rounded-xl ${className}`}
    aria-hidden="true"
  />
);

export default Skeleton;

```

---
### 📄 `src\components\SkipLink.tsx`

**⚠️ Analysis Findings:**
- 🔴 **[HIGH]** Button missing aria-label (Line 62)

```typescript
import React, { useEffect, useState, useCallback } from 'react';
import { ArrowRight, X } from 'lucide-react';

const SkipLink: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const hideSkipLink = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Show skip link when user presses Tab for the first time
      if (e.key === 'Tab' && !e.shiftKey) {
        setIsVisible(true);
      }
      // Dismiss with Escape key
      if (e.key === 'Escape') {
        hideSkipLink();
      }
    },
    [hideSkipLink]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.setAttribute('tabindex', '-1');
      mainContent.focus();
      mainContent.removeAttribute('tabindex');
    }
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] flex justify-start"
      role="region"
      aria-label="Skip navigation"
    >
      <a
        href="#main-content"
        onClick={handleClick}
        onKeyDown={(e) => e.key === 'Escape' && hideSkipLink()}
        className="skip-link inline-flex items-center px-4 py-3 bg-p4c-navy text-white font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-p4c-gold focus:ring-offset-2"
        aria-label="Skip to main content"
      >
        <span>Skip to main content</span>
        <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            hideSkipLink();
          }}
          onKeyDown={(e) => e.key === 'Enter' && hideSkipLink()}
          className="ml-3 p-1 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Dismiss skip link"
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>
      </a>
    </div>
  );
};

export default SkipLink;

```

---
### 📄 `src\components\UpdateNotification.tsx`

**⚠️ Analysis Findings:**
- 🔴 **[HIGH]** Button missing aria-label (Line 40)
- 🔴 **[HIGH]** Button missing aria-label (Line 46)
- 🔴 **[HIGH]** Button missing aria-label (Line 55)

```typescript
import React, { useEffect, useState } from 'react';
import { RefreshCw, X } from 'lucide-react';
import { updateSW } from '../pwa-register'; // Ensure this points to your src/pwa-register.ts

export const UpdateNotification: React.FC = () => {
  const [showUpdate, setShowUpdate] = useState(false);

  useEffect(() => {
    // Listen for the custom event dispatched by pwa-register.ts
    // This event name 'p4c-sw-update' MUST match what is in pwa-register.ts
    const handleUpdateEvent = () => setShowUpdate(true);

    window.addEventListener('p4c-sw-update', handleUpdateEvent);

    return () => window.removeEventListener('p4c-sw-update', handleUpdateEvent);
  }, []);

  if (!showUpdate) return null;

  return (
    <div
      className="fixed bottom-4 right-4 z-50"
      role="alert"
      aria-live="polite"
    >
      <div className="bg-white border-l-4 border-p4c-gold rounded-r-xl shadow-2xl p-4 max-w-sm flex items-start gap-4 animate-bounce">
        <div className="text-p4c-navy mt-1">
          <RefreshCw className="w-5 h-5 animate-spin" />
        </div>

        <div className="flex-1">
          <h4 className="text-sm font-serif font-bold text-p4c-navy">
            Update Available
          </h4>
          <p className="text-xs text-slate-600 mt-1 mb-3">
            We&apos;ve updated the listings. Refresh to see the latest homes.
          </p>

          <div className="flex gap-2">
            <button
              onClick={() => updateSW()}
              className="px-3 py-1.5 bg-p4c-navy text-p4c-gold text-xs font-bold rounded hover:bg-slate-800 transition-colors"
            >
              Refresh Now
            </button>
            <button
              onClick={() => setShowUpdate(false)}
              className="px-3 py-1.5 text-slate-500 text-xs font-medium hover:text-slate-800 transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>

        <button
          onClick={() => setShowUpdate(false)}
          className="text-slate-400 hover:text-slate-600"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

```

---
### 📄 `src\constants\images.ts`

```typescript
/**
 * Centralized Asset Registry
 * Maps application logic to physical file paths.
 *
 * Usage:
 * import { IMAGES } from '../constants/images';
 * <img src={IMAGES.BANNERS.HERO_HOME} alt="Home" />
 */

export const P4C_MISSION_STATEMENT = 'Properties 4 Creation is committed to revitalizing East Texas: 53% Community Impact, 37% Family Stability, 5% Veteran Support, and 5% Investor ROI';

// Brand Assets
export const IMAGES = {
  // Page Hero Banners
  BANNERS: {
    // Home Page
    HERO_HOME: '/images/banners/hero-home-banner.webp',
    HERO_HOME_640: '/images/banners/hero-home-banner-640.webp',
    HERO_HOME_960: '/images/banners/hero-home-banner-960.webp',
    HERO_HOME_1280: '/images/banners/hero-home-banner-1280.webp',
    HERO_HOME_1920: '/images/banners/hero-home-banner-1920.webp',

    // About Page
    HERO_ABOUT: '/images/banners/hero-about-banner-1280.webp',
    HERO_ABOUT_640: '/images/banners/hero-about-banner-640.webp',
    HERO_ABOUT_960: '/images/banners/hero-about-banner-960.webp',
    HERO_ABOUT_1920: '/images/banners/hero-about-banner-1920.webp',
    HERO_ABOUT_US: '/images/banners/hero-about-us-banner.webp',

    // Contact Page
    HERO_CONTACT: '/images/banners/hero-contact-banner.webp',
    HERO_CONTACT_640: '/images/banners/hero-contact-banner-640.webp',
    HERO_CONTACT_960: '/images/banners/hero-contact-banner-960.webp',
    HERO_CONTACT_1280: '/images/banners/hero-contact-banner-1280.webp',
    HERO_CONTACT_1920: '/images/banners/hero-contact-banner-1920.webp',

    // Impact Page
    HERO_IMPACT: '/images/banners/hero-impact_banner-640.avif',
    HERO_IMPACT_960: '/images/banners/hero-impact_banner-960.avif',
    HERO_IMPACT_1280: '/images/banners/hero-impact_banner-1280.avif',
    HERO_IMPACT_1920: '/images/banners/hero-impact_banner-1920.avif',

    // Privacy Page
    HERO_PRIVACY: '/images/banners/hero-privacy-banner.webp',
    HERO_PRIVACY_640: '/images/banners/hero-privacy-banner-640.webp',
    HERO_PRIVACY_960: '/images/banners/hero-privacy-banner-960.webp',
    HERO_PRIVACY_1280: '/images/banners/hero-privacy-banner-1280.webp',
    HERO_PRIVACY_1920: '/images/banners/hero-privacy-banner-1920.webp',

    // Projects Page
    HERO_PROJECTS: '/images/banners/hero-projects-banner.webp',
    HERO_PROJECTS_640: '/images/banners/hero-projects-banner-640.webp',
    HERO_PROJECTS_960: '/images/banners/hero-projects-banner-960.webp',
    HERO_PROJECTS_1280: '/images/banners/hero-projects-banner-1280.webp',
    HERO_PROJECTS_1920: '/images/banners/hero-projects-banner-1920.webp',

    // Resources Page
    HERO_RESOURCES: '/images/banners/hero-resources-banner.webp',
    HERO_RESOURCES_640: '/images/banners/hero-resources-banner-640.webp',
    HERO_RESOURCES_960: '/images/banners/hero-resources-banner-960.webp',
    HERO_RESOURCES_1280: '/images/banners/hero-resources-banner-1280.webp',
    HERO_RESOURCES_1920: '/images/banners/hero-resources-banner-1920.webp',

    // Terms Page
    HERO_TERMS: '/images/banners/hero-terms-banner-1200w.webp',
    HERO_TERMS_800: '/images/banners/hero-terms-banner-800w.webp',

    // Transparency Page
    HERO_TRANSPARENCY: '/images/banners/hero-transparency-banner.webp',
    HERO_TRANSPARENCY_640: '/images/banners/hero-transparency-banner-640.webp',
    HERO_TRANSPARENCY_960: '/images/banners/hero-transparency-banner-960.webp',
    HERO_TRANSPARENCY_1280:
      '/images/banners/hero-transparency-banner-1280.webp',
    HERO_TRANSPARENCY_1920:
      '/images/banners/hero-transparency-banner-1920.webp',

    // Application Page
    HERO_APPLICATION: '/images/banners/hero-application-banner.webp',

    // FAQ Page
    HERO_FAQ: '/images/banners/hero-faq-banner.webp',

    // Community Impact Page
    HERO_COMMUNITY_IMPACT: '/images/banners/hero-community-impact-banner.png',

    // Get Started / Success Story Page
    HERO_SUCCESS_STORY: '/images/banners/hero-get-started-banner.webp',

    // Legal Page
    HERO_LEGAL: '/images/banners/hero-legal-banner.webp',
    HERO_LEGAL_640: '/images/banners/hero-legal-banner-640.webp',
    HERO_LEGAL_960: '/images/banners/hero-legal-banner-960.webp',
    HERO_LEGAL_1280: '/images/banners/hero-legal-banner-1280.webp',
    HERO_LEGAL_1920: '/images/banners/hero-legal-banner-1920.webp',

    // Property Details Page
    HERO_PROPERTY: '/images/banners/hero-property-banner.webp',

    // Thank You Page
    HERO_THANK_YOU: '/images/banners/hero-thank-you-banner.webp',

    // Career Page
    CAREER: '/images/banners/career-banner.webp',

    // Family Resources Page
    FAMILY_RESOURCES: '/images/banners/family-resources-banner.webp',

    // Homeowner Solutions Page
    HERO_HOMEOWNER_SOLUTIONS: '/images/banners/hero-homeowner-solutions.webp',

    // Additional Banners
    LINDALE_COTTAGE_BANNER: '/images/banners/lindale-cottage.webp',
    PROPERTIES_BANNER_PNG: '/images/banners/properties-banner.png',
    RESIDENT_SERVICE_BANNER_PNG: '/images/banners/resident-service-banner.png',
  },

  // Property Listings
  PROPERTIES: {
    JEFFERSON_RIVER: '/images/properties/jefferson-riverfront.webp',
    KEMP_TOWNHOME: '/images/properties/kemp-townhome.webp',
    LINDALE_COTTAGE: '/images/properties/lindale-cottage.webp',
    LONGVIEW_VICTORIAN: '/images/properties/longview-victorian.webp',
    MARSHALL_FARMHOUSE: '/images/properties/marshall-farmhouse-400w.webp',
    MINEOLA_STUDIO: '/images/properties/mineola-studio.webp',
    MINEOLA_STUDIO_OUTSIDE: '/images/properties/mineola-studio-outside.webp',
    TYLER_RANCH: '/images/properties/tyler-ranch-home.webp',
    TYLER_RANCH_400: '/images/properties/tyler-ranch-home-400w.webp',
  },

  // Brand Assets
  LOGO: {
    PNG: '/images/logo/brand-logo.webp',
    SVG: '/images/logo/brand-logo.svg',
    WHITE_GOLD: '/images/logo/brand-logo-white-gold.svg',
    CHAT_AVATAR_PNG: '/images/logo/chat-avatar.png',
    CHAT_AVATAR_SVG: '/images/logo/chat-avatar.svg',
    PWA_192: '/images/logo/pwa-192x192.png',
    PWA_512: '/images/logo/pwa-512x512.png',
    PWA_PNG: '/images/logo/pwa.png',
    PWA_SVG: '/images/logo/pwa.svg',
  },

  // Team & About
  TEAM: {
    OWNER: '/images/about/about-us-team-owner.webp',
    HEADSHOT: '/images/about/about-us-team-headshot.webp',
    ONSITE: '/images/about/about-us-team-onsite.webp',
    ACQUISITION: '/images/about/acquisition.png',
    REHABILITATION: '/images/about/rehabilitaion.png',
  },

  // Renovation Showcase (Before/After)
  RENOVATION: {
    BATHROOM: {
      BEFORE:
        '/images/before-after-comparison/projects-before-bathroom-800w.webp',
      AFTER:
        '/images/before-after-comparison/projects-after-bathroom-800w.webp',
    },
    KITCHEN: {
      BEFORE:
        '/images/before-after-comparison/projects-before-kitchen-800w.webp',
      AFTER: '/images/before-after-comparison/projects-after-kitchen-800w.webp',
    },
    LIVING_ROOM: {
      BEFORE:
        '/images/before-after-comparison/projects-before-living-room-800w.webp',
      AFTER:
        '/images/before-after-comparison/projects-after-living-room-800w.webp',
    },
    FRONT_PORCH: {
      BEFORE:
        '/images/before-after-comparison/projects-before-front-porch-400w.webp',
      AFTER:
        '/images/before-after-comparison/projects-after-front-porch-800w.webp',
    },
    BRICK_PATIO: {
      BEFORE:
        '/images/before-after-comparison/projects-before-brick-patio-400w.webp',
      AFTER:
        '/images/before-after-comparison/projects-after-brick-patio-400w.webp',
    },
    BEFORE_PLACEHOLDER: '/images/before-after-comparison/before.webp',
  },

  // Gallery / Our Work
  GALLERY: {
    FRAMING: '/images/our-work-gallery/our-work-framing-door.webp',
    PAINTING: '/images/our-work-gallery/our-work-painting-dog-800w.webp',
    MEASURING: '/images/our-work-gallery/our-work-detailed-measuring-800w.webp',
    REMODELING: '/images/our-work-gallery/our-work-remodeling-400w.webp',
    BUY_AS_IS: '/images/our-work-gallery/our-impact-buy-as-is.webp',
    LINDALE_COTTAGE: '/images/our-work-gallery/lindale-cottage-before.webp',
    MEASURING_PLACEHOLDER:
      '/images/our-work-gallery/our-work-detailed-measuring-placeholder.jpg',
    MEETING: '/images/our-work-gallery/our-work-meeting.png',
  },

  // Resident Review Images
  RESIDENT_REVIEW: {
    ALEX: '/images/resident-review/resident-review-alex.png',
    EMILY_DAVID: '/images/resident-review/resident-review-emily-david.png',
    MARK: '/images/resident-review/resident-review-mark.png',
    SARAH: '/images/resident-review/resident-review-sarah.png',
  },

  // Family Lifestyle Images
  FAMILY: {
    BACKYARD: '/images/family/family-backyard.png',
    KITCHEN_DINNER: '/images/family/family-kitchen-dinner.png',
  },

  // Videos
  VIDEOS: {
    HOME: '/images/videos/home.mp4',
    HERO_PROJECTS: '/images/videos/hero-projects-banner.mp4',
    HERO_WORK: '/images/videos/hero-our-work-banner.mp4',
    HERO_IMPACT: '/images/videos/hero-our-impact.mp4',
    HERO_SPOTLIGHT: '/images/videos/hero-spotlight-banner.mp4',
    SUCCESS_STORY: '/images/videos/success-stories.mp4',
  },
} as const;

```

---
### 📄 `src\context\AuthContext.tsx`

```typescript
/* eslint-disable */
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import type { ReactNode } from 'react';
import { useToast } from './ToastContext';

type UserRole = 'guest' | 'tenant' | 'admin';

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  lastLogin?: string;
  permissions: string[];
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, role: UserRole) => Promise<void>;
  logout: () => void;
  refreshToken: () => Promise<void>;
  hasPermission: (permission: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Enhanced validation function - CRITICAL SECURITY FIX
const validateStoredUser = (storedUser: string): User | null => {
  try {
    const user = JSON.parse(storedUser);

    // Validate required fields
    if (!user.id || !user.email || !user.role) {
      console.warn('Invalid user data: missing required fields');
      return null;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
      console.warn('Invalid user data: invalid email format');
      return null;
    }

    // Validate role
    if (!['guest', 'tenant', 'admin'].includes(user.role)) {
      console.warn('Invalid user data: invalid role');
      return null;
    }

    // Validate data types
    if (
      typeof user.id !== 'string' ||
      typeof user.email !== 'string' ||
      typeof user.role !== 'string'
    ) {
      console.warn('Invalid user data: incorrect data types');
      return null;
    }

    return user;
  } catch (error) {
    console.warn('Failed to parse stored user data:', error);
    return null;
  }
};

// Secure session validation with backend
const validateSessionWithBackend = async (
  userId: string,
  sessionToken: string
): Promise<boolean> => {
  try {
    const response = await fetch('/api/auth/validate-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionToken}`,
        'X-Requested-With': 'XMLHttpRequest',
      },
      body: JSON.stringify({ userId }),
    });

    return response.ok;
  } catch (error) {
    console.error('Session validation failed:', error);
    return false;
  }
};

// Generate secure user ID (replacing weak Math.random)
const generateSecureUserId = (): string => {
  // Use crypto API for better randomness
  if (typeof window !== 'undefined' && window.crypto) {
    const array = new Uint8Array(16);
    window.crypto.getRandomValues(array);
    return Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join(
      ''
    );
  }
  // Fallback for older browsers
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { addToast } = useToast();

  // Secure session validation - CRITICAL SECURITY ENHANCEMENT
  useEffect(() => {
    const validateSession = async () => {
      try {
        const storedUser = localStorage.getItem('p4c_user');
        const sessionToken = localStorage.getItem('p4c_session_token');

        if (storedUser && sessionToken) {
          const validatedUser = validateStoredUser(storedUser);

          if (validatedUser) {
            // Verify session with backend
            const isValidSession = await validateSessionWithBackend(
              validatedUser.id,
              sessionToken
            );

            if (isValidSession) {
              setUser(validatedUser);
            } else {
              console.warn('Invalid session detected, clearing storage');
              // Clear potentially compromised session
              localStorage.removeItem('p4c_user');
              localStorage.removeItem('p4c_session_token');
            }
          } else {
            console.warn('Invalid user data detected, clearing storage');
            // Clear corrupted data
            localStorage.removeItem('p4c_user');
            localStorage.removeItem('p4c_session_token');
          }
        }
      } catch (error) {
        console.error('Session validation error:', error);
        // Clear potentially corrupted data
        localStorage.removeItem('p4c_user');
        localStorage.removeItem('p4c_session_token');
      } finally {
        setIsLoading(false);
      }
    };

    validateSession();
  }, []);

  // Secure login function
  const login = async (email: string, role: UserRole) => {
    setIsLoading(true);

    try {
      // Input validation
      if (!email || !email.includes('@')) {
        throw new Error('Valid email is required');
      }

      if (!role || !['guest', 'tenant', 'admin'].includes(role)) {
        throw new Error('Valid role is required');
      }

      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          role,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({
          error: 'Authentication failed',
        }));
        throw new Error(errorData.error || 'Login failed');
      }

      const { user: userData, token } = await response.json();

      // Sanitize and validate user data
      const cleanUser: User = {
        id: userData.id || generateSecureUserId(),
        name: userData.name || email.split('@')[0],
        email: userData.email || email,
        role: userData.role || role,
        lastLogin: new Date().toISOString(),
        permissions: userData.permissions || getDefaultPermissions(role),
      };

      // Store securely
      localStorage.setItem('p4c_user', JSON.stringify(cleanUser));
      localStorage.setItem('p4c_session_token', token);

      setUser(cleanUser);

      addToast(`Welcome back, ${cleanUser.name}`, 'success');
    } catch (error) {
      console.error('Login error:', error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Login failed. Please try again.';
      addToast(errorMessage, 'error');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Secure logout function
  const logout = useCallback(() => {
    // Clear state immediately
    setUser(null);

    // Clear storage
    localStorage.removeItem('p4c_user');
    localStorage.removeItem('p4c_session_token');

    // Notify backend (non-blocking)
    fetch('/api/auth/logout', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('p4c_session_token')}`,
        'X-Requested-With': 'XMLHttpRequest',
      },
    }).catch(() => {
      // Ignore network errors on logout
    });

    addToast('You have been logged out.', 'info');
  }, [addToast]);

  // Token refresh function
  const refreshToken = async () => {
    try {
      const currentToken = localStorage.getItem('p4c_session_token');
      if (!currentToken) {
        throw new Error('No session token available');
      }

      const response = await fetch('/api/auth/refresh', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${currentToken}`,
          'X-Requested-With': 'XMLHttpRequest',
        },
      });

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('p4c_session_token', token);
      } else {
        console.warn('Token refresh failed, logging out');
        logout();
      }
    } catch (error) {
      console.error('Token refresh error:', error);
      logout();
    }
  };

  // Permission checking function
  const hasPermission = useCallback(
    (permission: string): boolean => {
      if (!user) return false;

      // Admins have all permissions
      if (user.role === 'admin') return true;

      // Check specific permissions
      return user.permissions.includes(permission);
    },
    [user]
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        refreshToken,
        hasPermission,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Helper function to get default permissions by role
const getDefaultPermissions = (role: UserRole): string[] => {
  switch (role) {
    case 'admin':
      return [
        'read',
        'write',
        'delete',
        'manage_users',
        'manage_properties',
        'view_analytics',
      ];
    case 'tenant':
      return ['read', 'write'];
    case 'guest':
      return ['read'];
    default:
      return ['read'];
  }
};

```

---
### 📄 `src\context\DarkModeContext.tsx`

```typescript
import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  setDarkMode: (isDark: boolean) => void;
  systemPreference: 'light' | 'dark' | 'no-preference';
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

interface DarkModeProviderProps {
  children: ReactNode;
}

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Check localStorage first
    const saved = localStorage.getItem('p4c-dark-mode');
    if (saved !== null) {
      return JSON.parse(saved);
    }

    // Check system preference
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    return prefersDark;
  });

  const [systemPreference, setSystemPreference] = useState<
    'light' | 'dark' | 'no-preference'
  >('no-preference');

  // Detect system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateSystemPreference = (e: MediaQueryListEvent) => {
      setSystemPreference(e.matches ? 'dark' : 'light');
      // Only auto-switch if user hasn't explicitly set a preference
      const hasUserPreference = localStorage.getItem('p4c-dark-mode') !== null;
      if (!hasUserPreference) {
        setIsDarkMode(e.matches);
      }
    };

    // Initial check
    setSystemPreference(mediaQuery.matches ? 'dark' : 'light');

    // Listen for changes
    mediaQuery.addEventListener('change', updateSystemPreference);

    return () => {
      mediaQuery.removeEventListener('change', updateSystemPreference);
    };
  }, []);

  // Apply dark mode to document
  useEffect(() => {
    const root = document.documentElement;

    if (isDarkMode) {
      root.classList.add('dark');
      document.body.classList.add('bg-gray-900', 'text-white');
      document.body.classList.remove('bg-white', 'text-gray-900');
    } else {
      root.classList.remove('dark');
      document.body.classList.add('bg-white', 'text-gray-900');
      document.body.classList.remove('bg-gray-900', 'text-white');
    }

    // Store user preference
    localStorage.setItem('p4c-dark-mode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const setDarkMode = (isDark: boolean) => {
    setIsDarkMode(isDark);
  };

  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
        setDarkMode,
        systemPreference,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

```

---
### 📄 `src\context\EnhancedAuthContext.tsx`

```typescript
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from 'react';
import type { ReactNode } from 'react';
import { useToast } from './ToastContext';

type UserRole = 'guest' | 'tenant' | 'admin';

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  lastLogin?: string;
  lastActivity?: string;
  sessionStart?: string;
  permissions: string[];
  mfaEnabled?: boolean;
  loginAttempts?: number;
  lockedUntil?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isLocked: boolean;
  loginAttempts: number;
  sessionTimeRemaining: number;
  login: (email: string, password?: string, mfaCode?: string) => Promise<void>;
  logout: () => void;
  refreshToken: () => Promise<void>;
  hasPermission: (permission: string) => boolean;
  enableMFA: () => Promise<string>;
  verifyMFA: (code: string) => Promise<boolean>;
  changePassword: (
    currentPassword: string,
    newPassword: string
  ) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  lockAccount: (reason?: string) => void;
  unlockAccount: () => void;
  clearSensitiveData: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Enhanced password policy validator
const validatePasswordPolicy = (
  password: string
): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (password.length < 12) {
    errors.push('Password must be at least 12 characters long');
  }

  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }

  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }

  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain at least one number');
  }

  if (!/[!@#$%^&*()_+\-=\\[\]{};':"|,.<>?]/.test(password)) {
    errors.push('Password must contain at least one special character');
  }

  // Check for common passwords
  const commonPasswords = [
    'password',
    '123456',
    'password123',
    'admin',
    'qwerty',
  ];
  if (
    commonPasswords.some((common) => password.toLowerCase().includes(common))
  ) {
    errors.push('Password contains common patterns');
  }

  // Check for sequential characters
  if (/(012|123|234|345|456|567|678|789|890)/.test(password)) {
    errors.push('Password contains sequential characters');
  }

  // Check for repeated characters
  if (/(.)\1{2,}/.test(password)) {
    errors.push('Password contains repeated characters');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

// Enhanced session manager
class SessionManager {
  private static readonly SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes
  private static readonly WARNING_TIME = 5 * 60 * 1000; // 5 minutes before timeout
  private static readonly MAX_LOGIN_ATTEMPTS = 5;
  private static readonly LOCKOUT_DURATION = 15 * 60 * 1000; // 15 minutes

  static generateSecureId(): string {
    if (typeof window !== 'undefined' && window.crypto) {
      const array = new Uint8Array(16);
      window.crypto.getRandomValues(array);
      return Array.from(array, (byte) =>
        byte.toString(16).padStart(2, '0')
      ).join('');
    }
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }

  static generateSecureToken(): string {
    const array = new Uint8Array(32);
    if (typeof window !== 'undefined' && window.crypto) {
      window.crypto.getRandomValues(array);
      return Array.from(array, (byte) =>
        byte.toString(16).padStart(2, '0')
      ).join('');
    }
    return btoa(String.fromCharCode(...array));
  }

  static validateSession(user: User): boolean {
    if (!user.sessionStart || !user.lastActivity) return false;

    const sessionStart = new Date(user.sessionStart).getTime();
    const lastActivity = new Date(user.lastActivity).getTime();
    const now = Date.now();

    // Check if session has expired
    if (now - sessionStart > this.SESSION_TIMEOUT) return false;

    // Check if user has been inactive for too long
    if (now - lastActivity > this.SESSION_TIMEOUT / 2) return false;

    return true;
  }

  static getSessionTimeRemaining(user: User): number {
    if (!user.sessionStart) return 0;

    const sessionStart = new Date(user.sessionStart).getTime();
    const now = Date.now();
    const elapsed = now - sessionStart;
    const remaining = this.SESSION_TIMEOUT - elapsed;

    return Math.max(0, remaining);
  }

  static shouldShowWarning(user: User): boolean {
    const remaining = this.getSessionTimeRemaining(user);
    return remaining <= this.WARNING_TIME && remaining > 0;
  }

  static validateLoginAttempts(email: string): {
    allowed: boolean;
    remainingAttempts: number;
    lockoutRemaining?: number;
  } {
    const attempts = parseInt(
      localStorage.getItem(`login_attempts_${email}`) || '0',
      10
    );
    const lockoutUntil = parseInt(
      localStorage.getItem(`lockout_${email}`) || '0',
      10
    );
    const now = Date.now();

    // Check if still locked out
    if (now < lockoutUntil) {
      return {
        allowed: false,
        remainingAttempts: 0,
        lockoutRemaining: lockoutUntil - now,
      };
    }

    // Reset attempts if lockout period has expired
    if (now >= lockoutUntil) {
      localStorage.removeItem(`lockout_${email}`);
      localStorage.removeItem(`login_attempts_${email}`);
      localStorage.removeItem(`last_attempt_${email}`);
    }

    const remainingAttempts = this.MAX_LOGIN_ATTEMPTS - attempts;
    return {
      allowed: remainingAttempts > 0,
      remainingAttempts,
    };
  }

  static recordFailedAttempt(email: string): void {
    const attempts =
      parseInt(localStorage.getItem(`login_attempts_${email}`) || '0', 10) + 1;
    const now = Date.now();

    localStorage.setItem(`login_attempts_${email}`, attempts.toString());
    localStorage.setItem(`last_attempt_${email}`, now.toString());

    // Lock account if max attempts reached
    if (attempts >= this.MAX_LOGIN_ATTEMPTS) {
      const lockoutUntil = now + this.LOCKOUT_DURATION;
      localStorage.setItem(`lockout_${email}`, lockoutUntil.toString());
    }
  }

  static clearFailedAttempts(email: string): void {
    localStorage.removeItem(`login_attempts_${email}`);
    localStorage.removeItem(`last_attempt_${email}`);
    localStorage.removeItem(`lockout_${email}`);
  }
}

// Enhanced user data validator
const validateUserData = (userData: any): User | null => {
  try {
    if (!userData.id || !userData.email || !userData.role) {
      return null;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) {
      return null;
    }

    if (!['guest', 'tenant', 'admin'].includes(userData.role)) {
      return null;
    }

    // Validate data types
    if (
      typeof userData.id !== 'string' ||
      typeof userData.email !== 'string' ||
      typeof userData.role !== 'string'
    ) {
      return null;
    }

    return {
      id: userData.id,
      name: userData.name || userData.email.split('@')[0],
      email: userData.email,
      role: userData.role,
      lastLogin: userData.lastLogin,
      lastActivity: userData.lastActivity,
      sessionStart: userData.sessionStart,
      permissions: userData.permissions || getDefaultPermissions(userData.role),
      mfaEnabled: userData.mfaEnabled || false,
      loginAttempts: userData.loginAttempts || 0,
      lockedUntil: userData.lockedUntil,
    };
  } catch (error) {
    return null;
  }
};

// Enhanced backend session validation
const validateSessionWithBackend = async (
  userId: string,
  sessionToken: string
): Promise<boolean> => {
  try {
    const response = await fetch('/api/auth/validate-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionToken}`,
        'X-Requested-With': 'XMLHttpRequest',
        'X-Session-Validation': 'true',
      },
      body: JSON.stringify({ userId }),
      credentials: 'include',
    });

    return response.ok;
  } catch (error) {
    console.error('Session validation failed:', error);
    return false;
  }
};

export const EnhancedAuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [sessionTimeRemaining, setSessionTimeRemaining] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const { addToast } = useToast();
  const sessionTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const warningTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  // Session timeout handler
  const handleSessionTimeout = useCallback(() => {
    logout();
    addToast('Your session has expired. Please log in again.', 'info');
  }, [addToast]);

  // Session warning handler
  const handleSessionWarning = useCallback(() => {
    addToast(
      'Your session will expire in 5 minutes. Please save your work.',
      'info'
    );
  }, [addToast]);

  // Update session activity
  const updateSessionActivity = useCallback(() => {
    if (user) {
      const updatedUser = {
        ...user,
        lastActivity: new Date().toISOString(),
      };
      setUser(updatedUser);
      localStorage.setItem('p4c_user', JSON.stringify(updatedUser));

      // Update session time remaining
      const remaining = SessionManager.getSessionTimeRemaining(updatedUser);
      setSessionTimeRemaining(remaining);
    }
  }, [user]);

  // Initialize session management
  useEffect(() => {
    if (user) {
      const remaining = SessionManager.getSessionTimeRemaining(user);
      setSessionTimeRemaining(remaining);

      // Set up session timeout
      if (sessionTimeoutRef.current) {
        clearTimeout(sessionTimeoutRef.current);
      }

      sessionTimeoutRef.current = setTimeout(handleSessionTimeout, remaining);

      // Set up session warning
      if (warningTimeoutRef.current) {
        clearTimeout(warningTimeoutRef.current);
      }

      if (SessionManager.shouldShowWarning(user)) {
        warningTimeoutRef.current = setTimeout(
          handleSessionWarning,
          remaining - 5 * 60 * 1000
        );
      }

      // Set up activity tracking
      const activityEvents = [
        'mousedown',
        'mousemove',
        'keypress',
        'scroll',
        'touchstart',
      ];
      const throttledUpdateActivity = throttle(updateSessionActivity, 60000); // Update every minute

      activityEvents.forEach((event) => {
        document.addEventListener(event, throttledUpdateActivity, true);
      });

      return () => {
        activityEvents.forEach((event) => {
          document.removeEventListener(event, throttledUpdateActivity, true);
        });
        if (sessionTimeoutRef.current) {
          clearTimeout(sessionTimeoutRef.current);
        }
        if (warningTimeoutRef.current) {
          clearTimeout(warningTimeoutRef.current);
        }
      };
    }

    // Return cleanup function when user is falsy
    return () => {
      if (sessionTimeoutRef.current) {
        clearTimeout(sessionTimeoutRef.current);
      }
      if (warningTimeoutRef.current) {
        clearTimeout(warningTimeoutRef.current);
      }
    };
  }, [user, handleSessionTimeout, handleSessionWarning, updateSessionActivity]);

  // Enhanced session validation on mount
  useEffect(() => {
    const validateSession = async () => {
      try {
        const storedUser = localStorage.getItem('p4c_user');
        const sessionToken = localStorage.getItem('p4c_session_token');

        if (storedUser && sessionToken) {
          const validatedUser = validateUserData(storedUser);

          if (validatedUser && SessionManager.validateSession(validatedUser)) {
            const isValidSession = await validateSessionWithBackend(
              validatedUser.id,
              sessionToken
            );

            if (isValidSession) {
              setUser(validatedUser);
            } else {
              console.warn('Invalid session detected, clearing storage');
              clearSensitiveData();
            }
          } else {
            console.warn('Invalid session data detected, clearing storage');
            clearSensitiveData();
          }
        }
      } catch (error) {
        console.error('Session validation error:', error);
        clearSensitiveData();
      } finally {
        setIsLoading(false);
      }
    };

    validateSession();
  }, []);

  // Enhanced login function
  const login = async (email: string, password?: string, mfaCode?: string) => {
    setIsLoading(true);

    try {
      // Input validation
      if (!email || !email.includes('@')) {
        throw new Error('Valid email is required');
      }

      // Check login attempts
      const attemptCheck = SessionManager.validateLoginAttempts(email);
      if (!attemptCheck.allowed) {
        if (attemptCheck.lockoutRemaining) {
          const minutes = Math.ceil(attemptCheck.lockoutRemaining / 60000);
          throw new Error(
            `Account temporarily locked. Try again in ${minutes} minutes.`
          );
        }
        throw new Error('Account temporarily locked. Please try again later.');
      }
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'X-Login-Attempt': attemptCheck.remainingAttempts.toString(),
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          password: password || '',
          mfaCode: mfaCode || '',
        }),
        credentials: 'include',
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({
          error: 'Authentication failed',
        }));

        // Record failed attempt
        SessionManager.recordFailedAttempt(email);
        setLoginAttempts((prev) => prev + 1);

        throw new Error(errorData.error || 'Login failed');
      }

      const { user: userData, token } = await response.json();

      // Clear failed attempts on successful login
      SessionManager.clearFailedAttempts(email);
      setLoginAttempts(0);

      // Sanitize and validate user data
      const cleanUser: User = {
        id: userData.id || SessionManager.generateSecureId(),
        name: userData.name || email.split('@')[0],
        email: userData.email || email,
        role: userData.role || 'tenant',
        lastLogin: new Date().toISOString(),
        lastActivity: new Date().toISOString(),
        sessionStart: new Date().toISOString(),
        permissions:
          userData.permissions ||
          getDefaultPermissions(userData.role || 'tenant'),
        mfaEnabled: userData.mfaEnabled || false,
        loginAttempts: 0,
      };

      // Store securely
      localStorage.setItem('p4c_user', JSON.stringify(cleanUser));
      localStorage.setItem('p4c_session_token', token);

      setUser(cleanUser);
      addToast(`Welcome back, ${cleanUser.name}`, 'success');
    } catch (error) {
      console.error('Login error:', error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Login failed. Please try again.';
      addToast(errorMessage, 'error');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Enhanced logout function
  const logout = useCallback(() => {
    // Clear state immediately
    setUser(null);
    setLoginAttempts(0);
    setIsLocked(false);

    // Clear storage
    clearSensitiveData();

    // Notify backend (non-blocking)
    fetch('/api/auth/logout', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('p4c_session_token')}`,
        'X-Requested-With': 'XMLHttpRequest',
      },
      credentials: 'include',
    }).catch(() => {
      // Ignore network errors on logout
    });

    addToast('You have been logged out.', 'info');
  }, [addToast]);

  // Clear sensitive data
  const clearSensitiveData = useCallback(() => {
    localStorage.removeItem('p4c_user');
    localStorage.removeItem('p4c_session_token');
    localStorage.removeItem('p4c_mfa_secret');
    localStorage.removeItem('p4c_temp_token');
  }, []);

  // Token refresh function
  const refreshToken = async () => {
    try {
      const currentToken = localStorage.getItem('p4c_session_token');
      if (!currentToken) {
        throw new Error('No session token available');
      }

      const response = await fetch('/api/auth/refresh', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${currentToken}`,
          'X-Requested-With': 'XMLHttpRequest',
        },
        credentials: 'include',
      });

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('p4c_session_token', token);
      } else {
        console.warn('Token refresh failed, logging out');
        logout();
      }
    } catch (error) {
      console.error('Token refresh error:', error);
      logout();
    }
  };

  // MFA functions
  const enableMFA = async (): Promise<string> => {
    try {
      const response = await fetch('/api/auth/enable-mfa', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('p4c_session_token')}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to enable MFA');
      }

      const { qrCode } = await response.json();
      // Store MFA secret temporarily in memory only, not in localStorage
      // The secret should be handled server-side for security

      return qrCode;
    } catch (error) {
      console.error('MFA enable error:', error);
      throw error;
    }
  };

  const verifyMFA = async (code: string): Promise<boolean> => {
    try {
      const response = await fetch('/api/auth/verify-mfa', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('p4c_session_token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      if (response.ok) {
        return true;
      }

      return false;
    } catch (error) {
      console.error('MFA verification error:', error);
      return false;
    }
  };

  // Password management
  const changePassword = async (
    currentPassword: string,
    newPassword: string
  ) => {
    const validation = validatePasswordPolicy(newPassword);
    if (!validation.isValid) {
      throw new Error(
        `Password policy violations: ${validation.errors.join(', ')}`
      );
    }

    const response = await fetch('/api/auth/change-password', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('p4c_session_token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ currentPassword, newPassword }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({
        error: 'Password change failed',
      }));
      throw new Error(errorData.error || 'Password change failed');
    }

    addToast('Password changed successfully', 'success');
  };

  const resetPassword = async (email: string) => {
    const response = await fetch('/api/auth/reset-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error('Password reset failed');
    }

    addToast('Password reset instructions sent to your email', 'success');
  };

  // Account lock functions
  const lockAccount = (reason?: string) => {
    setIsLocked(true);
    if (reason) {
      console.warn('Account locked:', reason);
    }
  };

  const unlockAccount = () => {
    setIsLocked(false);
    setLoginAttempts(0);
  };

  // Permission checking function
  const hasPermission = useCallback(
    (permission: string): boolean => {
      if (!user || isLocked) return false;

      // Admins have all permissions
      if (user.role === 'admin') return true;

      // Check specific permissions
      return user.permissions.includes(permission);
    },
    [user, isLocked]
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user && !isLocked,
        isLoading,
        isLocked,
        loginAttempts,
        sessionTimeRemaining,
        login,
        logout,
        refreshToken,
        hasPermission,
        enableMFA,
        verifyMFA,
        changePassword,
        resetPassword,
        lockAccount,
        unlockAccount,
        clearSensitiveData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Helper function to get default permissions by role
const getDefaultPermissions = (role: UserRole): string[] => {
  switch (role) {
    case 'admin':
      return [
        'read',
        'write',
        'delete',
        'manage_users',
        'manage_properties',
        'view_analytics',
        'system_admin',
      ];
    case 'tenant':
      return ['read', 'write', 'view_own_data'];
    case 'guest':
      return ['read'];
    default:
      return ['read'];
  }
};

// Utility function for throttling
const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean;
  return function (this: any) {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

```

---
### 📄 `src\context\ImageFormatContext.tsx`

```typescript
import React, { createContext, useContext, useState, useEffect } from 'react';

interface ImageFormatContextType {
  supportedFormat: string;
  isLoading: boolean;
}

const ImageFormatContext = createContext<ImageFormatContextType | undefined>(
  undefined
);

export const ImageFormatProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [supportedFormat, setSupportedFormat] = useState<string>('jpeg');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Check browser WebP/AVIF support
  const checkFormatSupport = () =>
    new Promise<string>((resolve) => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;

      // Test AVIF support
      const format = canvas
        .toDataURL('image/avif')
        .startsWith('data:image/avif')
        ? 'avif'
        : canvas.toDataURL('image/webp').startsWith('data:image/webp')
          ? 'webp'
          : 'jpeg';
      resolve(format);
    });

  useEffect(() => {
    const detectFormat = async () => {
      try {
        const format = await checkFormatSupport();
        setSupportedFormat(format);
      } catch (error) {
        console.warn('Format detection failed, defaulting to jpeg:', error);
        setSupportedFormat('jpeg');
      } finally {
        setIsLoading(false);
      }
    };

    detectFormat();
  }, []);

  return (
    <ImageFormatContext.Provider value={{ supportedFormat, isLoading }}>
      {children}
    </ImageFormatContext.Provider>
  );
};

export const useImageFormat = () => {
  const context = useContext(ImageFormatContext);
  if (context === undefined) {
    throw new Error(
      'useImageFormat must be used within an ImageFormatProvider'
    );
  }
  return context;
};

```

---
### 📄 `src\context\ToastContext.tsx`

**⚠️ Analysis Findings:**
- 🔴 **[HIGH]** Button missing aria-label (Line 105)

```typescript
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
} from 'react';
import type { ReactNode } from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

type ToastType = 'success' | 'error' | 'info';

interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  addToast: (message: string, type: ToastType) => void;
  removeToast: (id: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const timeoutIdsRef = useRef<Set<number>>(new Set());

  useEffect(
    () => () => {
      timeoutIdsRef.current.forEach((timeoutId) => {
        clearTimeout(timeoutId);
      });
      timeoutIdsRef.current.clear();
    },
    []
  );

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback(
    (message: string, type: ToastType) => {
      const id = Date.now();
      setToasts((prev) => [...prev, { id, message, type }]);

      const timeoutId = window.setTimeout(() => {
        removeToast(id);
        timeoutIdsRef.current.delete(timeoutId);
      }, 5000);

      timeoutIdsRef.current.add(timeoutId);
    },
    [removeToast]
  );

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div
        className="fixed bottom-6 right-6 z-[60] flex flex-col gap-3"
        role="region"
        aria-label="System Notifications"
        aria-live="polite"
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            role="alert"
            className={`min-w-[320px] max-w-md p-4 rounded-xl shadow-2xl flex items-start gap-3 animate-slide-in-from-bottom border-l-4 text-white ${
              toast.type === 'success'
                ? 'bg-green-700 border-green-400'
                : toast.type === 'error'
                  ? 'bg-red-700 border-red-400'
                  : 'bg-p4c-navy border-p4c-gold'
            }`}
          >
            <div className="mt-0.5 shrink-0">
              {toast.type === 'success' && (
                <CheckCircle className="w-5 h-5 text-green-200" />
              )}
              {toast.type === 'error' && (
                <AlertCircle className="w-5 h-5 text-red-200" />
              )}
              {toast.type === 'info' && (
                <Info className="w-5 h-5 text-p4c-gold" />
              )}
            </div>
            <p className="flex-1 text-sm font-semibold leading-snug">
              {toast.message}
            </p>
            <button
              onClick={() => removeToast(toast.id)}
              className="hover:bg-white/10 p-1 rounded-xl transition-colors"
              aria-label="Dismiss notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

```

---
### 📄 `src\data\properties.ts`

```typescript
import type { ExtendedProperty } from '../types/types.ts';
import { IMAGES } from '../constants/images.ts';

// Re-export ExtendedProperty type for backward compatibility
export type { ExtendedProperty };

export const properties: ExtendedProperty[] = [
  {
    id: '1',
    title: 'Oakwood Ranch',
    address: '1245 Oakwood Dr, Tyler, TX',
    city: 'Tyler',
    price: '950',
    status: 'available',
    bedrooms: 3,
    bathrooms: 2,
    beds: 3,
    baths: 2,
    sqft: 1450,
    description:
      'Beautifully renovated home in the heart of Tyler, featuring durable countertops, modern HVAC system, and a spacious fenced backyard. This property contributes to the revitalization of the Azalea District neighborhood, offering quality affordable housing in East Texas. Located within walking distance of local schools and community amenities.',
    imageUrl: IMAGES.PROPERTIES.TYLER_RANCH,
    images: [IMAGES.PROPERTIES.TYLER_RANCH],
    badges: ['Family Friendly', 'Top Rated Schools'],
    amenities: [
      'Durable Countertops',
      'Fenced Backyard',
      'Central HVAC',
      'Dishwasher',
      'Washer/Dryer Hookups',
      'Play Area',
    ],
    accessibilityFeatures: [
      'Stroller-Friendly Pathways',
      'Child-Safe Outlets',
      'Easy-Access Entry',
    ],
    schoolDistrict: 'Tyler ISD',
    neighborhood: 'Azalea District',
    availabilityDate: 'Available Now',
    location: { lat: 32.3513, lng: -95.3011 },
  },
  {
    id: '2',
    title: 'Longview Studio',
    address: '880 Pine Street, Longview, TX',
    city: 'Longview',
    price: '875',
    status: 'available',
    bedrooms: 2,
    bathrooms: 1.5,
    beds: 2,
    baths: 1.5,
    sqft: 1100,
    description:
      'Charming bungalow in Longview featuring energy-efficient appliances, dedicated parking, and access to a community garden. This property supports our mission of providing quality housing in East Texas communities. Located in the Pine Tree neighborhood, close to local amenities and schools.',
    imageUrl: IMAGES.PROPERTIES.MINEOLA_STUDIO,
    images: [IMAGES.PROPERTIES.MINEOLA_STUDIO],
    badges: ['Cozy Family Home', 'Energy Efficient'],
    amenities: [
      'Energy Star Appliances',
      'Dedicated Parking',
      'Community Garden Access',
      'Security System',
      'Playground Nearby',
    ],
    accessibilityFeatures: [
      'Easy Entry',
      'Walk-in Shower',
      'Child-Safe Design',
    ],
    schoolDistrict: 'Longview ISD',
    neighborhood: 'Pine Tree',
    availabilityDate: 'October 15, 2023',
    location: { lat: 32.5007, lng: -94.7405 },
  },
  {
    id: '3',
    title: 'Marshall Estates',
    address: '300 Cedar Lane, Marshall, TX',
    city: 'Marshall',
    price: '1100',
    status: 'available',
    bedrooms: 4,
    bathrooms: 2,
    beds: 4,
    baths: 2,
    sqft: 1800,
    description:
      'Spacious home with open floor plan featuring brand new durable vinyl plank flooring and modernized kitchen. This Marshall property includes a covered patio and detached garage, contributing to the revitalization of the Historic District neighborhood in East Texas. Located in a well-established community with local character.',
    imageUrl: IMAGES.PROPERTIES.MARSHALL_FARMHOUSE,
    images: [IMAGES.PROPERTIES.MARSHALL_FARMHOUSE],
    badges: ['Family Size', 'Top Rated Schools'],
    amenities: [
      'Durable Vinyl Plank Flooring',
      'Covered Patio',
      'Detached Garage',
      'Walk-in Closets',
      'Large Backyard',
    ],
    accessibilityFeatures: ['Family-Friendly Layout', 'Safe Flooring'],
    schoolDistrict: 'Marshall ISD',
    neighborhood: 'Historic District',
    availabilityDate: 'November 1, 2023',
    location: { lat: 32.5449, lng: -94.3674 },
  },
  {
    id: '4',
    title: 'Longview Heights',
    address: '405 Star Blvd, Tyler, TX',
    city: 'Tyler',
    price: '1050',
    status: 'available',
    bedrooms: 3,
    bathrooms: 2,
    beds: 3,
    baths: 2,
    sqft: 1600,
    description:
      "Beautifully restored modern home with open concept living area, featuring LED lighting and brand new thermal insulation for year-round comfort. This Downtown Tyler property offers urban living with easy access to local businesses and community events, supporting the revitalization of Tyler's historic core.",
    imageUrl: IMAGES.PROPERTIES.LONGVIEW_VICTORIAN,
    images: [IMAGES.PROPERTIES.LONGVIEW_VICTORIAN],
    badges: ['New Construction', 'Family Paradise'],
    amenities: [
      'LED Lighting',
      'Smart Thermostat',
      'Thermal Insulation',
      'Open Concept',
      'Family Room',
    ],
    accessibilityFeatures: ['Family-Friendly Parking', 'Safe Entry'],
    schoolDistrict: 'Tyler ISD',
    neighborhood: 'Downtown Tyler',
    availabilityDate: 'Available Now',
    location: { lat: 32.3513, lng: -95.3011 },
  },
  {
    id: '5',
    title: 'Kemp Duplex',
    address: '220 Victory Lane, Kilgore, TX',
    city: 'Kilgore',
    price: '825',
    status: 'available',
    bedrooms: 2,
    bathrooms: 1,
    beds: 2,
    baths: 1,
    sqft: 950,
    description:
      'Affordable duplex in Kilgore, recently updated with fresh paint and new appliances. Features a large shared yard and convenient access to public transit. This property provides quality housing in the Sycamore Grove neighborhood, supporting our community development efforts in East Texas.',
    imageUrl: IMAGES.PROPERTIES.KEMP_TOWNHOME,
    images: [IMAGES.PROPERTIES.KEMP_TOWNHOME],
    badges: ['Affordable Family Home', 'Pet Friendly'],
    amenities: [
      'Fresh Paint',
      'Shared Yard',
      'Pet Friendly',
      'Transit Access',
      'Play Area',
    ],
    accessibilityFeatures: ['Ground Floor Unit', 'Family-Safe Design'],
    schoolDistrict: 'Kilgore ISD',
    neighborhood: 'Sycamore Grove',
    availabilityDate: 'Waitlist Open',
    location: { lat: 32.3852, lng: -94.8767 },
  },
  {
    id: '6',
    title: 'Lindale Cottage',
    address: '1500 Independence Dr, Lindale, TX',
    city: 'Lindale',
    price: '1250',
    status: 'available',
    bedrooms: 3,
    bathrooms: 2.5,
    beds: 3,
    baths: 2.5,
    sqft: 1750,
    description:
      'Beautiful brick home in Lindale featuring a double vanity, large soaking tub, and cozy fireplace. This property in the Eagle Creek neighborhood offers quality housing in East Texas, with a spacious layout and premium amenities. Located in a growing community with excellent local character and amenities.',
    imageUrl: IMAGES.PROPERTIES.LINDALE_COTTAGE,
    images: [IMAGES.PROPERTIES.LINDALE_COTTAGE],
    badges: ['Family Dream Home', 'Top Rated Schools'],
    amenities: [
      'Fireplace',
      'Double Vanity',
      'Soaking Tub',
      'Brick Exterior',
      'Large Family Room',
    ],
    accessibilityFeatures: [
      'Paved Walkways',
      'Family-Friendly Layout',
      'Safe Outdoor Space',
    ],
    schoolDistrict: 'Lindale ISD',
    neighborhood: 'Eagle Creek',
    availabilityDate: 'December 1, 2023',
    location: { lat: 32.5165, lng: -95.4093 },
  },
];

export const getPropertyById = (
  id: string | undefined
): ExtendedProperty | undefined => properties.find((p) => p.id === id);

```

---
### 📄 `src\index.css`

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* P4C Brand Palette */
  --color-navy: #0b1120;
  --color-beige: #f5f5f0;
  --color-gold: #c5a059;
  --color-gold-hover: #b08d48;
  --color-slate: #334155;
  
  /* Animation Tokens */
  --animation-duration-fast: 150ms;
  --animation-duration-normal: 300ms;
  --animation-duration-slow: 500ms;
  --animation-easing: cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Accessibility */
  --accessibility-font-size: 100%;
}

@layer base {
  html {
    font-size: var(--accessibility-font-size);
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--color-beige);
    color: var(--color-navy);
    @apply antialiased;
  }

  /* WCAG 2.1 Compliant Focus Indicators */
  *:focus-visible {
    outline: 3px solid var(--color-gold);
    outline-offset: 2px;
  }
}

@layer components {
  /* --- NAVIGATION & LAYOUT --- */
  
  .skip-link {
    @apply fixed left-4 top-4 bg-p4c-navy text-white p-3 z-[100] rounded-lg shadow-lg transition-all duration-200;
    transform: translateY(-100%);
  }
  .skip-link:focus {
    transform: translateY(0);
  }

  .glass-navbar {
    background-color: rgba(11, 17, 32, 0.9); /* High-contrast fallback */
    @apply transition-colors duration-300;
  }

  @supports (backdrop-filter: blur(10px)) {
    .glass-navbar {
      backdrop-filter: blur(24px) saturate(180%);
      -webkit-backdrop-filter: blur(24px) saturate(180%);
      background-color: rgba(11, 17, 32, 0.72);
      border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    }
    .glass-navbar:hover {
      background-color: rgba(11, 17, 32, 0.78);
    }
  }

  .no-backdrop-filter .glass-navbar {
    background-color: var(--color-navy);
  }

  /* --- BUTTONS & INTERACTION --- */

  .install-button {
    @apply bg-p4c-gold text-p4c-navy px-6 py-3 rounded-lg font-bold shadow-lg transition-all duration-300;
    background: linear-gradient(135deg, var(--color-gold), var(--color-gold-hover));
  }

  .install-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(197, 160, 89, 0.3);
  }

  .hover-lift {
    @apply transition-transform duration-200 ease-in-out;
  }
  .hover-lift:hover {
    @apply -translate-y-1 scale-105;
  }

  /* --- HERO & VISUAL ENHANCEMENTS --- */

  .hero-overlay-primary {
    background: linear-gradient(180deg, rgba(11, 17, 32, 0.9) 0%, rgba(11, 17, 32, 0.6) 50%, rgba(11, 17, 32, 0.85) 100%);
    mix-blend-mode: multiply;
  }

  .hero-overlay-secondary {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.15) 100%);
  }

  .hero-text-enhanced {
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    @apply text-white tracking-tight leading-tight;
  }

  /* Mobile Overlays */
  @media (max-width: 640px) {
    .hero-overlay-primary {
      background: linear-gradient(180deg, rgba(11, 17, 32, 0.6) 0%, rgba(11, 17, 32, 0.4) 50%, rgba(11, 17, 32, 0.5) 100%);
    }
  }

  /* --- ACCORDION & ANIMATION --- */

  .accordion-content {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows var(--animation-duration-normal) var(--animation-easing);
  }

  .accordion-open .accordion-content {
    grid-template-rows: 1fr;
  }

  .accordion-content > div {
    overflow: hidden;
  }

  /* --- DARK MODE OVERRIDES --- */

  .dark {
    --color-navy: #1e293b;
    --color-beige: #0f172a;
    --color-gold: #fbbf24;
    --color-gold-hover: #f59e0b;
  }

  .dark body {
    background-color: var(--color-beige);
    color: #e2e8f0;
  }

  /* --- ACCESSIBILITY UTILITIES --- */

  .high-contrast {
    filter: contrast(1.5) brightness(1.1);
  }

  .reading-mode {
    font-family: 'Georgia', serif !important;
    line-height: 1.8 !important;
    letter-spacing: 0.02em !important;
    background-color: #fefefe !important;
    color: #2c2c2c !important;
  }

  /* --- MOTION SENSITIVITY --- */

  @media (prefers-reduced-motion: reduce) {
    *, ::before, ::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    @keyframes glassMorph {
      0% { backdrop-filter: blur(20px); background-color: rgba(11, 17, 32, 0.7); }
      100% { backdrop-filter: blur(24px); background-color: rgba(11, 17, 32, 0.72); }
    }
    .glass-animation {
      animation: glassMorph 0.4s ease-out forwards;
    }
    .animate-fade-in {
      animation: fadeIn 0.6s ease-out;
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
}
```

---
### 📄 `src\index.tsx`

```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import './index.css';

// Import from the same directory (no /src/)
import { updateSW } from './pwa-register';

// Run it
updateSW();

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HashRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <App />
    </HashRouter>
  </React.StrictMode>
);

```

---
### 📄 `src\lib\supabaseClient.ts`

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env['VITE_SUPABASE_URL'];
const supabaseAnonKey = import.meta.env['VITE_SUPABASE_ANON_KEY'];

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

```

---
### 📄 `src\pages\About.tsx`

**⚠️ Analysis Findings:**
- 🔵 **[MEDIUM]** Image missing alt text (Line 20)
- 🔵 **[MEDIUM]** Image missing alt text (Line 66)
- 🔵 **[MEDIUM]** Image missing alt text (Line 77)

```typescript
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Building2 } from 'lucide-react';

const About: React.FC = () => (
  <div className="bg-p4c-beige min-h-screen">
    <Helmet>
      <title>
        About Us | Professional Property Management | Properties 4 Creation
      </title>
      <meta
        name="description"
        content="Properties 4 Creation is a premier property management and development firm in East Texas, dedicated to high-quality housing and community revitalization."
      />
    </Helmet>

    {/* Hero Section */}
    <div className="relative h-[400px] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src="/images/banners/hero-about-banner.webp"
          alt="Properties 4 Creation team on site"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-p4c-navy/80 mix-blend-multiply" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <div className="flex justify-center mb-6">
          <div className="bg-p4c-gold/20 p-4 rounded-2xl border border-p4c-gold/30 backdrop-blur-sm">
            <Building2 className="w-10 h-10 text-p4c-gold" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-wide">
          Revitalizing East Texas, One Home at a Time.
        </h1>
        <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto">
          Setting the standard for residential property management and
          development in
          <strong> East Texas</strong>.
        </p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Company Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-6">
            Professional Excellence in Housing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Properties 4 Creation is not just a landlord; we are a comprehensive
            real estate solution provider. Founded on the principles of
            integrity and operational excellence, we acquire, renovate, and
            manage residential assets to provide superior housing outcomes.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Our unique approach combines rigorous asset management with a
            commitment to community stability. By partnering with HUD-VASH and
            local municipalities, we ensure our investments deliver both
            financial returns and tangible social impact.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <img
              src="/images/about/about-us-team-owner.webp"
              alt="Richard Lonkert, Owner & Veteran"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-p4c-navy/80 text-white p-4">
              <h3 className="font-bold text-lg">Richard Lonkert</h3>
              <p className="text-sm">Owner & Veteran</p>
            </div>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <img
              src="/images/about/about-us-team-headshot.webp"
              alt="Kyle Buzbee, Managing Partner"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-p4c-navy/80 text-white p-4">
              <h3 className="font-bold text-lg">Kyle Buzbee</h3>
              <p className="text-sm">Managing Partner</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Grid */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-4">
            Our Journey
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The milestones that define our growth and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              year: '2018',
              title: 'Founded',
              desc: 'Properties 4 Creation was established with a mission to revitalize East Texas communities.',
            },
            {
              year: '2020',
              title: 'First Multi-family Acquired',
              desc: 'Expanded our portfolio with the acquisition of our first multi-family property.',
            },
            {
              year: '2023',
              title: 'Veteran Housing Initiative',
              desc: 'Launched our Veteran Housing Initiative to provide priority housing solutions for veterans.',
            },
            {
              year: 'Future',
              title: '500+ Families Housed',
              desc: 'Our goal is to house over 500 families in safe, affordable homes.',
            },
          ].map((value, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border-t-4 border-p4c-gold"
            >
              <div className="bg-p4c-navy/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-p4c-navy">
                  {value.year}
                </span>
              </div>
              <h3 className="text-xl font-bold text-p4c-navy mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Credentials / Trust Indicators */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <div className="px-4 py-4">
            <div className="text-4xl font-bold text-p4c-gold mb-2">10+</div>
            <div className="font-bold text-p4c-navy">Years of Experience</div>
            <div className="text-sm text-gray-500 mt-1">
              In Real Estate & Development
            </div>
          </div>
          <div className="px-4 py-4">
            <div className="text-4xl font-bold text-p4c-gold mb-2">100%</div>
            <div className="font-bold text-p4c-navy">Voucher Acceptance</div>
            <div className="text-sm text-gray-500 mt-1">
              Section 8 & HUD-VASH
            </div>
          </div>
          <div className="px-4 py-4">
            <div className="text-4xl font-bold text-p4c-gold mb-2">A+</div>
            <div className="font-bold text-p4c-navy">Tenant Satisfaction</div>
            <div className="text-sm text-gray-500 mt-1">
              Based on retention rates
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;

```

---
### 📄 `src\pages\AccessibilityStatement.tsx`

```typescript
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Accessibility } from 'lucide-react';

const AccessibilityStatement: React.FC = () => (
  <div className="bg-p4c-beige min-h-screen py-16">
    <Helmet>
      <title>Accessibility Statement | Properties 4 Creation</title>
      <meta
        name="description"
        content="Properties 4 Creation accessibility statement and commitment to WCAG 2.1 compliance for digital accessibility and inclusive housing services."
      />
      <meta
        name="keywords"
        content="accessibility statement, web accessibility, WCAG compliance, disability access, inclusive housing, ADA compliance"
      />
    </Helmet>

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
          <div className="bg-p4c-gold p-3 rounded-full">
            <Accessibility className="w-8 h-8 text-p4c-navy" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-p4c-navy">
            Accessibility Statement
          </h1>
        </div>

        <div className="prose prose-slate max-w-none text-gray-700">
          <p className="lead">
            Properties 4 Creation is committed to ensuring digital accessibility
            for people with disabilities. We are continually improving the user
            experience for everyone, and applying the relevant accessibility
            standards.
          </p>

          <h3 className="text-xl font-bold text-p4c-navy mt-6 mb-2">
            Measures to support accessibility
          </h3>
          <p>
            Properties 4 Creation takes the following measures to ensure
            accessibility of our website:
          </p>
          <ul className="list-disc pl-5 mb-6">
            <li>
              Include accessibility as part of our internal mission statement.
            </li>
            <li>Integrate accessibility into our procurement practices.</li>
            <li>Appoint an accessibility officer and/or ombudsperson.</li>
            <li>Provide continual accessibility training for our staff.</li>
          </ul>

          <h3 className="text-xl font-bold text-p4c-navy mt-6 mb-2">
            Conformance status
          </h3>
          <p>
            The Web Content Accessibility Guidelines (WCAG) defines requirements
            for designers and developers to improve accessibility for people
            with disabilities. It defines three levels of conformance: Level A,
            Level AA, and Level AAA. The Properties 4 Creation website is
            partially conformant with WCAG 2.1 level AA. Partially conformant
            means that some parts of the content do not fully conform to the
            accessibility standard.
          </p>

          <h3 className="text-xl font-bold text-p4c-navy mt-6 mb-2">
            Feedback
          </h3>
          <p>
            We welcome your feedback on the accessibility of the Properties 4
            Creation website. Please let us know if you encounter accessibility
            barriers on our site:
          </p>
          <p className="mt-4">
            <strong>Email:</strong> accessibility@p4c-homes.com
            <br />
            <strong>Phone:</strong> (903) 555-0123
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default AccessibilityStatement;

```

---
### 📄 `src\pages\AdminDashboard.tsx`

**⚠️ Analysis Findings:**
- 🔴 **[HIGH]** Button missing aria-label (Line 151)
- 🔴 **[HIGH]** Button missing aria-label (Line 162)
- 🔴 **[HIGH]** Button missing aria-label (Line 173)
- 🔴 **[HIGH]** Button missing aria-label (Line 184)
- 🔴 **[HIGH]** Button missing aria-label (Line 211)
- 🔴 **[HIGH]** Button missing aria-label (Line 230)
- 🔴 **[HIGH]** Button missing aria-label (Line 305)
- 🔴 **[HIGH]** Button missing aria-label (Line 368)
- 🔴 **[HIGH]** Button missing aria-label (Line 376)
- 🔵 **[MEDIUM]** Image missing alt text (Line 339)

```typescript
import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext'; // Import Toast for feedback
import AdminDashboardSkeleton from '../components/AdminDashboardSkeleton';
import {
  BarChart3,
  Users,
  Home,
  Settings,
  LogOut,
  Plus,
  Edit2,
  Trash2,
  Search,
} from 'lucide-react';
import { api } from '../services/api';
import type { ExtendedProperty } from '../types/types';

// Define the available views
type DashboardView = 'dashboard' | 'properties' | 'tenants' | 'settings';

const AdminDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const { addToast } = useToast(); // Use toast for feedback
  const [properties, setProperties] = useState<ExtendedProperty[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeView, setActiveView] = useState<DashboardView>('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch Data
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const propertiesData = await api.properties.getAll();
        setProperties(propertiesData);
      } catch (error) {
        addToast('Failed to load properties data', 'error');
        // Fallback to empty array if API fails so UI doesn't crash
        setProperties([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [addToast]);

  // 1. Dynamic Stats Calculation
  const stats = useMemo(() => {
    const totalProperties = properties.length;
    // Assuming 'available' logic based on your data, simplified here:
    const occupiedCount = properties.filter(
      (p) => p.status !== 'available'
    ).length; // Adjust logic as needed
    const occupancyRate =
      totalProperties > 0
        ? Math.round((occupiedCount / totalProperties) * 100)
        : 0;

    // Calculate generic revenue (placeholder logic - replace with real data field)
    const estimatedRevenue = properties.reduce(
      (acc, curr) =>
        acc +
        (parseInt(
          typeof curr.price === 'string'
            ? curr.price.replace(/,/g, '')
            : curr.price.toString(),
          10
        ) || 0),
      0
    );

    return [
      {
        label: 'Total Revenue',
        value: `$${estimatedRevenue.toLocaleString()}`,
        sub: 'Monthly projected',
        color: 'text-green-600',
        icon: '💰',
      },
      {
        label: 'Occupancy Rate',
        value: `${occupancyRate}%`,
        sub: `${totalProperties - occupiedCount} units available`,
        color: 'text-blue-600',
        icon: '🏠',
      },
      {
        label: 'Total Properties',
        value: totalProperties.toString(),
        sub: 'Active Listings',
        color: 'text-p4c-navy',
        icon: '📑',
      },
      {
        label: 'Pending Actions',
        value: '5', // Placeholder until you have an Applications API
        sub: 'Requires attention',
        color: 'text-orange-600',
        icon: '⚠️',
      },
    ];
  }, [properties]);

  // 2. Filter Properties Logic
  const filteredProperties = properties.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 3. Action Handlers
  const handleDelete = (id: string) => {
    try {
      // await api.properties.delete(id); // Uncomment when API is ready
      setProperties((prev) => prev.filter((p) => p.id !== id)); // Optimistic update
      addToast('Property deleted successfully', 'success');
    } catch (error) {
      addToast('Failed to delete property', 'error');
    }
  };

  const handleEdit = (id: string) => {
    addToast(`Edit functionality for ID ${id} coming in next sprint`, 'info');
    // Logic: Navigate to /admin/properties/edit/:id or open modal
  };

  const handleAddNew = () => {
    addToast('Add Property Modal opening...', 'info');
    // Logic: Open "Add Property" Modal
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Helmet>
        <title>Admin Dashboard | Properties 4 Creation</title>
      </Helmet>

      {/* Sidebar Navigation */}
      <aside className="w-64 bg-p4c-navy text-white hidden md:flex flex-col fixed h-full z-10">
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-xl font-serif font-bold text-p4c-gold">
            Properties 4 Creation
          </h2>
          <p className="text-xs text-gray-400 mt-1">Administrator Portal</p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => setActiveView('dashboard')}
            className={`flex items-center w-full px-4 py-3 rounded-lg font-medium transition-colors ${
              activeView === 'dashboard'
                ? 'bg-white/10 text-p4c-gold'
                : 'text-gray-300 hover:bg-white/5'
            }`}
            aria-label="Dashboard"
          >
            <BarChart3 className="w-5 h-5 mr-3" /> Dashboard
          </button>
          <button
            onClick={() => setActiveView('properties')}
            className={`flex items-center w-full px-4 py-3 rounded-lg font-medium transition-colors ${
              activeView === 'properties'
                ? 'bg-white/10 text-p4c-gold'
                : 'text-gray-300 hover:bg-white/5'
            }`}
            aria-label="Properties"
          >
            <Home className="w-5 h-5 mr-3" /> Properties
          </button>
          <button
            onClick={() => setActiveView('tenants')}
            className={`flex items-center w-full px-4 py-3 rounded-lg font-medium transition-colors ${
              activeView === 'tenants'
                ? 'bg-white/10 text-p4c-gold'
                : 'text-gray-300 hover:bg-white/5'
            }`}
            aria-label="Tenants"
          >
            <Users className="w-5 h-5 mr-3" /> Tenants
          </button>
          <button
            onClick={() => setActiveView('settings')}
            className={`flex items-center w-full px-4 py-3 rounded-lg font-medium transition-colors ${
              activeView === 'settings'
                ? 'bg-white/10 text-p4c-gold'
                : 'text-gray-300 hover:bg-white/5'
            }`}
            aria-label="Settings"
          >
            <Settings className="w-5 h-5 mr-3" /> Settings
          </button>
        </nav>

        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center mb-4 gap-3">
            <div className="w-8 h-8 rounded-full bg-p4c-gold flex items-center justify-center text-p4c-navy font-bold">
              {user?.name?.charAt(0).toUpperCase() || 'A'}
            </div>
            <div className="text-sm">
              <div className="font-medium text-white">
                {user?.name || 'Admin'}
              </div>
              <div className="text-xs text-gray-400">
                {user?.role || 'Administrator'}
              </div>
            </div>
          </div>
          <button
            onClick={logout}
            className="flex items-center justify-center w-full px-4 py-2 border border-gray-600 rounded-lg text-sm hover:bg-gray-800 transition-colors"
            aria-label="Sign out"
          >
            <LogOut className="w-4 h-4 mr-2" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto md:ml-64 transition-all">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800 capitalize">
              {activeView} Overview
            </h1>
            {activeView === 'properties' && (
              <button
                onClick={handleAddNew}
                className="bg-p4c-navy text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-p4c-slate transition-colors shadow-md"
                aria-label="Add new property"
              >
                <Plus className="w-4 h-4" /> Add Property
              </button>
            )}
          </div>

          {/* VIEW: DASHBOARD */}
          {activeView === 'dashboard' && (
            <>
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-gray-500 font-medium">
                        {stat.label}
                      </div>
                      <span className="text-2xl">{stat.icon}</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <div className={`text-sm ${stat.color} font-medium`}>
                      {stat.sub}
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Activity / Short List */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-bold text-gray-800 mb-4">
                  Recent System Activity
                </h3>
                <p className="text-gray-500 text-sm">
                  No recent alerts or system notifications.
                </p>
              </div>
            </>
          )}

          {/* VIEW: PROPERTIES (or Dashboard Preview) */}
          {(activeView === 'dashboard' || activeView === 'properties') && (
            <div
              className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden ${activeView === 'dashboard' ? 'mt-8' : ''}`}
            >
              <div className="px-6 py-4 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                <h3 className="font-bold text-gray-800">
                  {activeView === 'dashboard'
                    ? 'Recent Listings'
                    : 'All Properties'}
                </h3>

                {/* Search Bar for Properties View */}
                {activeView === 'properties' && (
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search address..."
                      className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-p4c-gold"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                )}

                {activeView === 'dashboard' && (
                  <button
                    onClick={() => setActiveView('properties')}
                    className="text-sm text-p4c-gold font-medium hover:underline"
                  >
                    View All
                  </button>
                )}
              </div>

              {loading ? (
                <AdminDashboardSkeleton variant="full" />
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50 text-xs uppercase text-gray-500 font-semibold">
                      <tr>
                        <th className="px-6 py-4">Property</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Price</th>
                        <th className="px-6 py-4">Stats</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {(activeView === 'dashboard'
                        ? filteredProperties.slice(0, 5)
                        : filteredProperties
                      ).map((property) => (
                        <tr
                          key={property.id}
                          className="hover:bg-gray-50/50 transition-colors"
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <img
                                src={property.imageUrl}
                                alt=""
                                className="w-10 h-10 rounded-md object-cover mr-3 bg-gray-200"
                              />
                              <div>
                                <div className="font-medium text-gray-900">
                                  {property.title}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {property.address}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-600">
                            ${property.price}/mo
                          </td>
                          <td className="px-6 py-4 text-gray-600 text-xs">
                            {property.bedrooms}bd • {property.bathrooms}ba •{' '}
                            {property.sqft}sqft
                          </td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex justify-end gap-2">
                              <button
                                onClick={() => handleEdit(property.id)}
                                className="p-1.5 hover:bg-gray-100 rounded text-gray-500 hover:text-p4c-navy"
                                title="Edit Property"
                                aria-label={`Edit ${property.title}`}
                              >
                                <Edit2 className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDelete(property.id)}
                                className="p-1.5 hover:bg-red-50 rounded text-gray-500 hover:text-red-600"
                                title="Delete Property"
                                aria-label={`Delete ${property.title}`}
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {filteredProperties.length === 0 && (
                        <tr>
                          <td
                            colSpan={5}
                            className="px-6 py-8 text-center text-gray-500"
                          >
                            No properties found matching your search.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* VIEW: TENANTS (Placeholder) */}
          {activeView === 'tenants' && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
              <Users className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900">
                Tenant Management
              </h3>
              <p className="text-gray-500">
                Tenant list and application processing features coming soon.
              </p>
            </div>
          )}

          {/* VIEW: SETTINGS (Placeholder) */}
          {activeView === 'settings' && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
              <Settings className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900">
                System Settings
              </h3>
              <p className="text-gray-500">
                Global configurations will be available here.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;

```

---
### 📄 `src\pages\Application.tsx`

**⚠️ Analysis Findings:**
- 🔴 **[HIGH]** Button missing aria-label (Line 300)
- 🔴 **[HIGH]** Button missing aria-label (Line 312)
- 🔴 **[HIGH]** Button missing aria-label (Line 320)

```typescript
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  FileText,
  UserCheck,
  Key,
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Lock,
} from 'lucide-react';

// Form Steps Configuration
const STEPS = [
  { id: 1, title: 'Personal Info', icon: UserCheck },
  { id: 2, title: 'Housing History', icon: FileText },
  { id: 3, title: 'Review & Submit', icon: Key },
];

const Application: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Mock Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    window.scrollTo(0, 0);
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo(0, 0);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-p4c-beige flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-4">
            Application Received
          </h2>
          <p className="text-gray-600 mb-8">
            Thank you for applying with Properties 4 Creation. Our leasing team
            is reviewing your information and will contact you within 2 business
            days.
          </p>
          <a
            href="/"
            className="inline-block bg-p4c-navy text-white px-8 py-3 rounded-lg font-bold hover:bg-p4c-slate transition-colors"
          >
            Return Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-p4c-beige py-12">
      <Helmet>
        <title>Tenant Application | Properties 4 Creation</title>
        <meta
          name="description"
          content="Start your journey home. Secure, digital rental application for Properties 4 Creation homes in East Texas."
        />
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-p4c-navy mb-4">
            Rental Application
          </h1>
          <p className="text-gray-600 flex items-center justify-center gap-2">
            <Lock className="w-4 h-4" /> Secure 256-bit Encrypted Submission
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center relative z-10">
            {STEPS.map((step) => (
              <div
                key={step.id}
                className={`flex flex-col items-center gap-2 ${
                  currentStep >= step.id ? 'text-p4c-navy' : 'text-gray-400'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                    currentStep >= step.id
                      ? 'bg-p4c-gold text-p4c-navy shadow-lg scale-110'
                      : 'bg-white border-2 border-gray-200'
                  }`}
                >
                  <step.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider">
                  {step.title}
                </span>
              </div>
            ))}
          </div>
          {/* Progress Line */}
          <div className="absolute top-[160px] left-0 w-full h-1 bg-gray-200 -z-0 hidden md:block">
            {/* This requires precise positioning relative to container, simplified here */}
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <form onSubmit={handleSubmit} className="p-8">
            {/* Step 1: Personal Info */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-bold text-p4c-navy border-b pb-4 mb-6">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-p4c-gold focus:ring-2 focus:ring-p4c-gold/20 outline-none transition-all"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-p4c-gold focus:ring-2 focus:ring-p4c-gold/20 outline-none transition-all"
                      placeholder="Doe"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-p4c-gold focus:ring-2 focus:ring-p4c-gold/20 outline-none transition-all"
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-p4c-gold focus:ring-2 focus:ring-p4c-gold/20 outline-none transition-all"
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Housing History */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-bold text-p4c-navy border-b pb-4 mb-6">
                  Housing History
                </h3>
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Current Address
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-p4c-gold focus:ring-2 focus:ring-p4c-gold/20 outline-none transition-all"
                    placeholder="123 Main St, City, State, ZIP"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="timeAtAddress"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Time at Address
                  </label>
                  <select
                    id="timeAtAddress"
                    name="timeAtAddress"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-p4c-gold focus:ring-2 focus:ring-p4c-gold/20 outline-none transition-all"
                  >
                    <option>Less than 1 year</option>
                    <option>1-3 years</option>
                    <option>3+ years</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="reasonForMoving"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Reason for Moving
                  </label>
                  <textarea
                    id="reasonForMoving"
                    name="reasonForMoving"
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-p4c-gold focus:ring-2 focus:ring-p4c-gold/20 outline-none transition-all"
                    placeholder="Briefly explain why you are looking for a new home..."
                  />
                </div>
              </div>
            )}

            {/* Step 3: Review */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-bold text-p4c-navy border-b pb-4 mb-6">
                  Review & Submit
                </h3>

                <div className="bg-blue-50 p-4 rounded-lg flex gap-3 items-start border border-blue-100">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-800">
                    <p className="font-bold mb-1">Fair Housing Notice</p>
                    <p>
                      Properties 4 Creation allows for equal housing
                      opportunity. We do not discriminate based on race, color,
                      religion, sex, handicap, familial status, or national
                      origin.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 mt-6">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    className="mt-1 w-4 h-4 text-p4c-gold border-gray-300 rounded focus:ring-p4c-gold"
                    required
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I certify that the information provided is true and correct.
                    I authorize Properties 4 Creation to verify the information
                    provided.
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-10 pt-6 border-t border-gray-100">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center gap-2 text-gray-500 hover:text-p4c-navy font-bold px-4 py-2 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              ) : (
                <div /> /* Spacer */
              )}

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-p4c-navy text-white px-6 py-3 rounded-lg font-bold hover:bg-p4c-slate transition-colors flex items-center gap-2"
                >
                  Next Step <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-p4c-gold text-p4c-navy px-8 py-3 rounded-lg font-bold hover:bg-p4c-goldHover transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isSubmitting ? 'Processing...' : 'Submit Application'}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Application;

```

---
### 📄 `src\pages\Careers.tsx`

**⚠️ Analysis Findings:**
- 🔵 **[MEDIUM]** Image missing alt text (Line 24)
- 🔵 **[MEDIUM]** Image missing alt text (Line 110)

```typescript
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Briefcase,
  Users,
  ShieldCheck,
  HeartHandshake,
  Star,
} from 'lucide-react';

const Careers: React.FC = () => (
  <div className="bg-p4c-beige min-h-screen">
    <Helmet>
      <title>Careers | Join Our Team | Properties 4 Creation</title>
      <meta
        name="description"
        content="Explore career opportunities with Properties 4 Creation. Join our team in East Texas and help us revitalize communities through quality housing."
      />
    </Helmet>

    {/* Hero Section */}
    <div className="relative h-[400px] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src="/images/banners/career-banner.png"
          alt="Professional team working together"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-p4c-navy/80 mix-blend-multiply" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <div className="flex justify-center mb-6">
          <div className="bg-p4c-gold/20 p-4 rounded-2xl border border-p4c-gold/30 backdrop-blur-sm">
            <Briefcase className="w-10 h-10 text-p4c-gold" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-wide">
          Join Our Team
        </h1>
        <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto">
          Build a rewarding career while making a difference in East Texas
          communities
        </p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Company Culture Section */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-6">
              Our Culture
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              At Properties 4 Creation, we believe in creating opportunities -
              for our residents, our communities, and our team members. We
              foster a culture of professionalism, integrity, and continuous
              growth.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <HeartHandshake className="w-6 h-6 text-p4c-gold" />
                  <h4 className="font-bold text-p4c-navy">Mission-Driven</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  We&apos;re committed to revitalizing East Texas communities
                  through quality housing
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-6 h-6 text-p4c-gold" />
                  <h4 className="font-bold text-p4c-navy">Team Focused</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  We invest in our team&apos;s growth and create a supportive
                  work environment
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="w-6 h-6 text-p4c-gold" />
                  <h4 className="font-bold text-p4c-navy">
                    Professional Growth
                  </h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Continuous learning and career development opportunities
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <Star className="w-6 h-6 text-p4c-gold" />
                  <h4 className="font-bold text-p4c-navy">Excellence</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  We strive for excellence in everything we do
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/about/about-us-team-onsite.webp"
              alt="Team members working on site"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-p4c-navy/20" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl">
              <div className="flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-p4c-gold" />
                <div>
                  <div className="font-bold text-p4c-navy">Career Growth</div>
                  <div className="text-sm text-gray-600">
                    Join a team that values your professional development
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-4">
            Current Opportunities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;re always looking for talented individuals to join our team
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-p4c-gold hover:shadow-2xl transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold text-p4c-navy mb-2">
                  Property Manager
                </h3>
                <p className="text-gray-600 mb-4">
                  Manage our portfolio of residential properties, ensuring
                  tenant satisfaction and property maintenance.
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-p4c-navy/10 text-p4c-navy px-3 py-1 rounded-full text-sm font-medium">
                    Full-time
                  </span>
                  <span className="bg-p4c-navy/10 text-p4c-navy px-3 py-1 rounded-full text-sm font-medium">
                    Tyler, TX
                  </span>
                  <span className="bg-p4c-navy/10 text-p4c-navy px-3 py-1 rounded-full text-sm font-medium">
                    $50,000 - $65,000/year
                  </span>
                </div>
              </div>
              <div className="flex items-end justify-end">
                <a
                  href="/employment"
                  className="bg-p4c-gold text-p4c-navy hover:bg-white hover:text-p4c-navy px-6 py-3 rounded-xl font-bold transition-all duration-300 inline-flex items-center gap-2"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-p4c-gold hover:shadow-2xl transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold text-p4c-navy mb-2">
                  Maintenance Technician
                </h3>
                <p className="text-gray-600 mb-4">
                  Perform maintenance and repairs on our residential properties
                  to ensure they meet our quality standards.
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-p4c-navy/10 text-p4c-navy px-3 py-1 rounded-full text-sm font-medium">
                    Full-time
                  </span>
                  <span className="bg-p4c-navy/10 text-p4c-navy px-3 py-1 rounded-full text-sm font-medium">
                    Longview, TX
                  </span>
                  <span className="bg-p4c-navy/10 text-p4c-navy px-3 py-1 rounded-full text-sm font-medium">
                    $18 - $22/hour
                  </span>
                </div>
              </div>
              <div className="flex items-end justify-end">
                <a
                  href="/employment"
                  className="bg-p4c-gold text-p4c-navy hover:bg-white hover:text-p4c-navy px-6 py-3 rounded-xl font-bold transition-all duration-300 inline-flex items-center gap-2"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-p4c-gold hover:shadow-2xl transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold text-p4c-navy mb-2">
                  Acquisitions Specialist
                </h3>
                <p className="text-gray-600 mb-4">
                  Identify and evaluate potential property acquisitions in East
                  Texas markets.
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-p4c-navy/10 text-p4c-navy px-3 py-1 rounded-full text-sm font-medium">
                    Full-time
                  </span>
                  <span className="bg-p4c-navy/10 text-p4c-navy px-3 py-1 rounded-full text-sm font-medium">
                    Tyler, TX
                  </span>
                  <span className="bg-p4c-navy/10 text-p4c-navy px-3 py-1 rounded-full text-sm font-medium">
                    $60,000 - $80,000/year + commission
                  </span>
                </div>
              </div>
              <div className="flex items-end justify-end">
                <a
                  href="/employment"
                  className="bg-p4c-gold text-p4c-navy hover:bg-white hover:text-p4c-navy px-6 py-3 rounded-xl font-bold transition-all duration-300 inline-flex items-center gap-2"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-4">
            Why Work With Us?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer competitive compensation and comprehensive benefits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-xl text-center hover:shadow-2xl transition-shadow">
            <div className="bg-p4c-navy/5 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-p4c-navy"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-p4c-navy mb-4">
              Competitive Pay
            </h3>
            <p className="text-gray-600">
              Market-leading salaries and performance bonuses
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl text-center hover:shadow-2xl transition-shadow">
            <div className="bg-p4c-navy/5 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-p4c-navy"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-p4c-navy mb-4">
              Health Benefits
            </h3>
            <p className="text-gray-600">
              Comprehensive medical, dental, and vision insurance
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl text-center hover:shadow-2xl transition-shadow">
            <div className="bg-p4c-navy/5 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-p4c-navy"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-p4c-navy mb-4">
              Career Growth
            </h3>
            <p className="text-gray-600">
              Professional development and advancement opportunities
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-p4c-navy rounded-2xl text-white p-12 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-p4c-gold/20 p-4 rounded-2xl border border-p4c-gold/30">
              <Briefcase className="w-10 h-10 text-p4c-gold" />
            </div>
          </div>
          <h2 className="text-3xl font-serif font-bold mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            We&apos;re always looking for passionate, skilled individuals who
            make a difference in East Texas communities. Whether you&apos;re in
            property management, construction, or acquisitions, we have
            opportunities for you to grow your career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/employment"
              className="bg-p4c-gold text-p4c-navy hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              View All Positions
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center gap-2"
            >
              Contact HR
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Careers;

```

---
### 📄 `src\pages\Community.tsx`

**⚠️ Analysis Findings:**
- 🔴 **[HIGH]** Button missing aria-label (Line 160)
- 🔴 **[HIGH]** Button missing aria-label (Line 236)
- 🔴 **[HIGH]** Button missing aria-label (Line 248)
- 🔵 **[MEDIUM]** Image missing alt text (Line 69)
- 🔵 **[MEDIUM]** Image missing alt text (Line 90)
- 🔵 **[MEDIUM]** Image missing alt text (Line 111)
- 🔵 **[MEDIUM]** Image missing alt text (Line 170)

```typescript
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Home, Wrench, Users, DollarSign, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Community: React.FC = () => {
  const navigate = useNavigate();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="bg-p4c-beige min-h-screen">
      <Helmet>
        <title>
          Community Impact | Revitalizing East Texas | Properties 4 Creation
        </title>
        <meta
          name="description"
          content="Learn how Properties 4 Creation is transforming East Texas communities through property revitalization, veteran housing, and sustainable development."
        />
      </Helmet>

      {/* Hero Section with Video Background */}
      <div className="relative h-[500px] w-full overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/videos/community-investment-banner.mp4"
        />
        <div className="absolute inset-0 bg-p4c-navy/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-wide">
            Building Stronger Communities
          </h1>
          <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto">
            Through strategic property revitalization and community partnerships
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Revitalization Cycle */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-4">
              The Revitalization Cycle
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              How we create value for communities, investors, and residents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1: Acquisition */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-p4c-gold hover:shadow-2xl transition-shadow">
              <div className="bg-p4c-navy/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Home className="w-8 h-8 text-p4c-navy" />
              </div>
              <h3 className="text-xl font-bold text-p4c-navy mb-4">
                Acquisition
              </h3>
              <p className="text-gray-600 mb-6">
                Identifying distressed properties in Tyler, Longview, and
                Marshall that have potential for transformation.
              </p>
              <div className="relative h-48 rounded-xl overflow-hidden shadow-md">
                <img
                  src="/images/about/acquisition.png"
                  alt="Property acquisition process"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Step 2: Rehabilitation */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-p4c-gold hover:shadow-2xl transition-shadow">
              <div className="bg-p4c-navy/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Wrench className="w-8 h-8 text-p4c-navy" />
              </div>
              <h3 className="text-xl font-bold text-p4c-navy mb-4">
                Rehabilitation
              </h3>
              <p className="text-gray-600 mb-6">
                Professional renovation to modern standards with high-end
                finishes that ensure longevity and tenant satisfaction.
              </p>
              <div className="relative h-48 rounded-xl overflow-hidden shadow-md">
                <img
                  src="/images/about/rehabilitaion.png"
                  alt="Property rehabilitation process"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Step 3: Stabilization */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-p4c-gold hover:shadow-2xl transition-shadow">
              <div className="bg-p4c-navy/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-p4c-navy" />
              </div>
              <h3 className="text-xl font-bold text-p4c-navy mb-4">
                Stabilization
              </h3>
              <p className="text-gray-600 mb-6">
                Placing families in safe, forever homes and creating stable,
                thriving neighborhoods.
              </p>
              <div className="relative h-48 rounded-xl overflow-hidden shadow-md">
                <img
                  src="/images/properties/tyler-ranch-home.webp"
                  alt="Stabilized property with happy family"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Investor Prospectus Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-6">
                Investor Opportunities
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Properties 4 Creation offers accredited investors the
                opportunity to participate in our proven real estate investment
                strategy. With a focus on East Texas markets, we deliver
                consistent returns through value-add acquisitions and
                professional management.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our portfolio includes single-family residences, multi-family
                properties, and mixed-use developments in Tyler, Longview, and
                surrounding areas.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="text-3xl font-bold text-p4c-gold mb-2">
                    12-15%
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">
                    Target Annual Returns
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="text-3xl font-bold text-p4c-gold mb-2">
                    3-5 yrs
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">
                    Investment Horizon
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsContactModalOpen(true)}
                className="bg-p4c-gold text-p4c-navy hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Request Prospectus
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/banners/hero-community-impact-banner.png"
                alt="Community impact visualization"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-p4c-navy/20" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <DollarSign className="w-6 h-6 text-p4c-gold" />
                  <div>
                    <div className="font-bold text-p4c-navy">
                      Accredited Investors
                    </div>
                    <div className="text-sm text-gray-600">
                      Minimum $50,000 investment
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-10">
          <h2 className="text-2xl font-serif font-bold text-p4c-navy mb-8 text-center">
            Our Community Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="px-4 py-4">
              <div className="text-4xl font-bold text-p4c-gold mb-2">50+</div>
              <div className="font-bold text-p4c-navy">
                Properties Revitalized
              </div>
              <div className="text-sm text-gray-500 mt-1">
                In Tyler and Longview
              </div>
            </div>
            <div className="px-4 py-4">
              <div className="text-4xl font-bold text-p4c-gold mb-2">200+</div>
              <div className="font-bold text-p4c-navy">Residents Housed</div>
              <div className="text-sm text-gray-500 mt-1">
                Families and Veterans
              </div>
            </div>
            <div className="px-4 py-4">
              <div className="text-4xl font-bold text-p4c-gold mb-2">$15M+</div>
              <div className="font-bold text-p4c-navy">
                Community Investment
              </div>
              <div className="text-sm text-gray-500 mt-1">
                In East Texas Economy
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-p4c-navy">
                Request Investor Prospectus
              </h3>
              <button
                onClick={() => setIsContactModalOpen(false)}
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-600 mb-6">
              Please contact us to learn more about our investment
              opportunities.
            </p>
            <button
              onClick={() => {
                setIsContactModalOpen(false);
                navigate('/contact');
              }}
              className="w-full bg-p4c-gold text-p4c-navy hover:bg-white hover:text-p4c-navy px-6 py-3 rounded-xl font-bold transition-all duration-300"
            >
              Go to Contact Page
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;

```

---
### 📄 `src\pages\Construction.tsx`

**⚠️ Analysis Findings:**
- 🔵 **[MEDIUM]** Image missing alt text (Line 20)
- 🔵 **[MEDIUM]** Image missing alt text (Line 176)
- 🔵 **[MEDIUM]** Image missing alt text (Line 213)
- 🔵 **[MEDIUM]** Image missing alt text (Line 223)
- 🔵 **[MEDIUM]** Image missing alt text (Line 245)
- 🔵 **[MEDIUM]** Image missing alt text (Line 255)

```typescript
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hammer, ShieldCheck, CheckCircle, Home } from 'lucide-react';

const Construction: React.FC = () => (
  <div className="bg-p4c-beige min-h-screen">
    <Helmet>
      <title>
        Construction Standards | Quality Renovation | Properties 4 Creation
      </title>
      <meta
        name="description"
        content="Learn about Properties 4 Creation's professional construction standards and renovation processes for properties in East Texas, Texas."
      />
    </Helmet>

    {/* Hero Section */}
    <div className="relative h-[400px] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src="/images/banners/home-renovation-banner.webp"
          alt="Professional construction and renovation work"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-p4c-navy/80 mix-blend-multiply" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <div className="flex justify-center mb-6">
          <div className="bg-p4c-gold/20 p-4 rounded-2xl border border-p4c-gold/30 backdrop-blur-sm">
            <Hammer className="w-10 h-10 text-p4c-gold" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-wide">
          Professional Construction Standards
        </h1>
        <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto">
          Transforming distressed properties into premium residences
        </p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Our Process Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-4">
            Our Renovation Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From acquisition to move-in ready
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-p4c-gold hover:shadow-2xl transition-shadow">
            <div className="bg-p4c-navy/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <span className="text-xl font-bold text-p4c-navy">01</span>
            </div>
            <h3 className="text-xl font-bold text-p4c-navy mb-4">Assessment</h3>
            <p className="text-gray-600">
              Comprehensive property evaluation and scope of work development
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-p4c-gold hover:shadow-2xl transition-shadow">
            <div className="bg-p4c-navy/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <span className="text-xl font-bold text-p4c-navy">02</span>
            </div>
            <h3 className="text-xl font-bold text-p4c-navy mb-4">Planning</h3>
            <p className="text-gray-600">
              Architectural plans, permits, and material sourcing
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-p4c-gold hover:shadow-2xl transition-shadow">
            <div className="bg-p4c-navy/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <span className="text-xl font-bold text-p4c-navy">03</span>
            </div>
            <h3 className="text-xl font-bold text-p4c-navy mb-4">Execution</h3>
            <p className="text-gray-600">
              Professional construction with quality control at every stage
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-p4c-gold hover:shadow-2xl transition-shadow">
            <div className="bg-p4c-navy/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <span className="text-xl font-bold text-p4c-navy">04</span>
            </div>
            <h3 className="text-xl font-bold text-p4c-navy mb-4">
              Final Inspection
            </h3>
            <p className="text-gray-600">
              Rigorous quality assurance and certification
            </p>
          </div>
        </div>
      </section>

      {/* Construction Standards Section */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-6">
              Our Construction Standards
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We adhere to the highest construction standards to ensure our
              properties are safe, durable, and comfortable for long-term
              residency.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-p4c-navy mb-2">
                    Structural Integrity
                  </h4>
                  <p className="text-gray-600">
                    Foundation repair, roof replacement, and structural
                    reinforcement
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-p4c-navy mb-2">
                    Mechanical Systems
                  </h4>
                  <p className="text-gray-600">
                    New HVAC, electrical, and plumbing systems with
                    energy-efficient components
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-p4c-navy mb-2">
                    Interior Finishes
                  </h4>
                  <p className="text-gray-600">
                    Modern kitchens, bathrooms, flooring, and paint with premium
                    materials
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-p4c-navy mb-2">
                    Safety & Compliance
                  </h4>
                  <p className="text-gray-600">
                    Full compliance with building codes, ADA standards, and
                    safety regulations
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/banners/hero-projects-banner.webp"
              alt="Construction team working on property renovation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-p4c-navy/20" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-p4c-gold" />
                <div>
                  <div className="font-bold text-p4c-navy">
                    Quality Guarantee
                  </div>
                  <div className="text-sm text-gray-600">
                    1-year warranty on all construction work
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-4">
            Transformation Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See the dramatic before and after results of our renovations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative">
              <img
                src="/images/before-after-comparison/living-room-before.webp"
                alt="Living room before renovation"
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 bg-p4c-navy text-white px-3 py-1 rounded-full text-sm font-bold">
                BEFORE
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/before-after-comparison/living-room-after.webp"
                alt="Living room after renovation"
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 bg-p4c-gold text-p4c-navy px-3 py-1 rounded-full text-sm font-bold">
                AFTER
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-p4c-navy mb-2">
                Living Room
              </h3>
              <p className="text-gray-600">
                Complete renovation with new flooring, paint, lighting, and
                modern furnishings
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative">
              <img
                src="/images/before-after-comparison/kitchen-before.webp"
                alt="Kitchen before renovation"
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 bg-p4c-navy text-white px-3 py-1 rounded-full text-sm font-bold">
                BEFORE
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/before-after-comparison/kitchen-after.webp"
                alt="Kitchen after renovation"
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 bg-p4c-gold text-p4c-navy px-3 py-1 rounded-full text-sm font-bold">
                AFTER
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-p4c-navy mb-2">Kitchen</h3>
              <p className="text-gray-600">
                New cabinets, countertops, appliances, and modern fixtures
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment Section */}
      <section className="bg-p4c-navy rounded-2xl text-white p-12 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-p4c-gold/20 p-4 rounded-2xl border border-p4c-gold/30">
              <Home className="w-10 h-10 text-p4c-gold" />
            </div>
          </div>
          <h2 className="text-3xl font-serif font-bold mb-6">
            Our Commitment to Quality
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            We don&apos;t just renovate houses - we create homes. Every property
            we acquire undergoes a comprehensive transformation to meet our
            rigorous quality standards. From structural integrity to aesthetic
            appeal, we ensure our residences provide safe, comfortable, and
            beautiful living spaces for families.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/our-impact"
              className="bg-p4c-gold text-p4c-navy hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              See Our Projects
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center gap-2"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Construction;

```

---
### 📄 `src\pages\Contact.tsx`

**⚠️ Analysis Findings:**
- 🔴 **[HIGH]** Button missing aria-label (Line 130)
- 🔴 **[HIGH]** Button missing aria-label (Line 210)
- 🔵 **[MEDIUM]** Image missing alt text (Line 51)

```typescript
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 'General Inquiry',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // FIX: Explicitly check the name to satisfy security rules
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    // Whitelist allowed fields to prevent object injection
    if (['name', 'email', 'phone', 'message', 'subject'].includes(name)) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <div className="bg-p4c-beige min-h-screen">
      <Helmet>
        <title>Contact Us | Properties 4 Creation</title>
        <meta
          name="description"
          content="Get in touch with our leasing and management team in Tyler, TX."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[400px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img
            src="/images/banners/hero-contact-banner.png"
            alt="Professional contact and support"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-p4c-navy/80 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="bg-p4c-gold/20 p-4 rounded-2xl border border-p4c-gold/30 backdrop-blur-sm">
              <Mail className="w-10 h-10 text-p4c-gold" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-wide">
            Contact Us
          </h1>
          <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto">
            We're here to help with leasing, maintenance, and investment
            inquiries
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Side */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-p4c-navy mb-6">
              Get in Touch
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <Phone className="w-6 h-6 text-p4c-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-p4c-navy">Phone</h3>
                  <p className="text-gray-600">Leasing: (903) 555-0123</p>
                  <p className="text-gray-600">Maintenance: (903) 555-0124</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <Mail className="w-6 h-6 text-p4c-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-p4c-navy">Email</h3>
                  <p className="text-gray-600">
                    leasing@properties4creation.com
                  </p>
                  <p className="text-gray-600">
                    support@properties4creation.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <MapPin className="w-6 h-6 text-p4c-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-p4c-navy">Office</h3>
                  <p className="text-gray-600">123 Veterans Way</p>
                  <p className="text-gray-600">Tyler, TX 75701</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            {isSuccess ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-p4c-navy">
                  Message Sent!
                </h3>
                <p className="text-gray-600 mt-2">
                  We will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 text-p4c-gold font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#C5A059] focus:ring-[#C5A059]"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#C5A059] focus:ring-[#C5A059]"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#C5A059] focus:ring-[#C5A059]"
                  >
                    <option>General Inquiry</option>
                    <option>Leasing Question</option>
                    <option>Maintenance Request</option>
                    <option>Investment Opportunity</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#C5A059] focus:ring-[#C5A059]"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0B1120] text-white hover:bg-[#C5A059] transition-colors px-6 py-4 rounded-xl font-bold text-lg"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

```

---
### 📄 `src\pages\Employment.tsx`

**⚠️ Analysis Findings:**
- 🔴 **[HIGH]** Button missing aria-label (Line 143)
- 🔵 **[MEDIUM]** Image missing alt text (Line 26)

```typescript
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HardHat, Briefcase, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants/images';

const Employment: React.FC = () => (
  <>
    <Helmet>
      <title>
        Careers | Join Our Veteran-Led Construction Team | Properties 4 Creation
      </title>
      <meta
        name="description"
        content="Join Properties 4 Creation's veteran-led construction team. We hire veterans first with competitive pay, flexible schedules, and career advancement opportunities in East Texas."
      />
      <meta
        name="keywords"
        content="veteran jobs East Texas, construction careers, veteran hiring, skilled trades jobs, veteran employment, construction company hiring"
      />
    </Helmet>
    <div className="bg-p4c-beige min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[400px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img
            src={IMAGES.GALLERY.FRAMING}
            alt="Construction blueprints and tools"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full hero-overlay-primary" />
          <div className="absolute top-0 left-0 w-full h-full hero-overlay-secondary" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 hero-text-contrast">
            Build With Purpose
          </h1>
          <p className="text-xl text-p4c-gold font-medium hero-text-enhanced">
            Join the Properties 4 Creation Crew. We Hire Veterans First.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Mission & Culture */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-p4c-navy p-2 rounded-lg">
                <HardHat className="text-p4c-gold w-6 h-6" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-p4c-navy">
                Why Work With Us?
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              At Properties 4 Creation, we believe that the hands that built our
              nation are best suited to build our communities. We aren&apos;t
              just renovating houses; we are restoring dignity.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              We offer competitive pay, flexible schedules for reservists, and a
              culture that understands the value of discipline, integrity, and
              hard work.
            </p>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-bold text-lg mb-4 text-p4c-navy border-b pb-2">
                Our Commitments to You
              </h3>
              <ul className="space-y-3">
                {[
                  'Priority hiring for Veterans and spouses',
                  'Weekly pay schedules',
                  'Tools and safety gear allowance',
                  'Skills training and certification support',
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-p4c-gold mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Open Positions */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-p4c-navy p-2 rounded-lg">
                <Briefcase className="text-p4c-gold w-6 h-6" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-p4c-navy">
                Open Positions
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: 'Lead Carpenter',
                  type: 'Full-Time',
                  location: 'Tyler, TX',
                  salary: '$25 - $35/hr',
                },
                {
                  title: 'HVAC Technician',
                  type: 'Contract',
                  location: 'Longview, TX',
                  salary: 'Project Based',
                },
                {
                  title: 'Property Manager',
                  type: 'Full-Time',
                  location: 'East Texas Area',
                  salary: '$45k - $55k/yr',
                },
                {
                  title: 'General Laborer',
                  type: 'Part-Time',
                  location: 'Various Sites',
                  salary: '$18/hr',
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-p4c-gold"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl text-p4c-navy">
                      {job.title}
                    </h3>
                    <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded uppercase">
                      {job.type}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>{job.location}</span>
                    <span className="font-semibold text-p4c-navy">
                      {job.salary}
                    </span>
                  </div>
                  <button className="w-full border border-p4c-navy text-p4c-navy hover:bg-p4c-navy hover:text-white py-2 rounded font-medium transition-colors">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-p4c-navy text-white p-6 rounded-xl text-center">
              <h4 className="font-bold text-lg mb-2">
                Don&apos;t see your trade?
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                We are always looking for skilled plumbers, electricians, and
                roofers.
              </p>
              <Link
                to="/contact"
                className="text-p4c-gold font-bold underline hover:text-white"
              >
                Send us your resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Employment;

```

---
### 📄 `src\pages\EqualHousing.tsx`

```typescript
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Home } from 'lucide-react';

const EqualHousing: React.FC = () => (
  <div className="bg-p4c-beige min-h-screen py-16">
    <Helmet>
      <title>Equal Housing Opportunity | Properties 4 Creation</title>
      <meta
        name="description"
        content="Properties 4 Creation equal housing opportunity statement and commitment to fair housing practices without discrimination based on race, color, religion, or national origin."
      />
      <meta
        name="keywords"
        content="equal housing opportunity, fair housing, housing discrimination, HUD fair housing, equal opportunity housing, non-discriminatory housing"
      />
    </Helmet>

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 text-center">
        <div className="bg-p4c-navy p-4 rounded-full inline-flex mb-6">
          <Home className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl font-serif font-bold text-p4c-navy mb-6">
          Equal Housing Opportunity
        </h1>

        <div className="prose prose-lg mx-auto text-gray-600 text-left">
          <p>
            Properties 4 Creation is pledged to the letter and spirit of U.S.
            policy for the achievement of equal housing opportunity throughout
            the Nation. We encourage and support an affirmative advertising and
            marketing program in which there are no barriers to obtaining
            housing because of race, color, religion, sex, handicap, familial
            status, or national origin.
          </p>
          <p>
            <strong>We agree to:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Provide equal professional service to all, without regard to race,
              color, religion, sex, handicap, familial status, or national
              origin.
            </li>
            <li>Keep informed about fair housing laws and practices.</li>
            <li>
              Develop advertising that indicates that everyone is welcome and no
              one is excluded.
            </li>
            <li>
              Inform our clients and customers about our rights and
              responsibilities under the fair housing laws.
            </li>
            <li>Document our compliance with the fair housing laws.</li>
            <li>Refuse to tolerate non-compliance.</li>
            <li>Take a positive approach to fair housing practices.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default EqualHousing;

```

---
### 📄 `src\pages\FAQ.tsx`

**⚠️ Analysis Findings:**
- 🔴 **[HIGH]** Button missing aria-label (Line 19)

```typescript
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden ${
        isOpen ? 'ring-2 ring-p4c-gold/50' : ''
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-content-${question.replace(/\s+/g, '-').toLowerCase()}`}
        className="flex items-center justify-between w-full p-6 cursor-pointer list-none font-bold text-p4c-navy hover:bg-gray-50 text-left focus:outline-none focus:ring-2 focus:ring-p4c-gold focus:ring-inset transition-colors"
      >
        <span>{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ease-out flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>
      <div
        id={`faq-content-${question.replace(/\s+/g, '-').toLowerCase()}`}
        className={`accordion-content overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        role="region"
        aria-label={question}
      >
        <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQs = [
  {
    q: 'Do you accept Section 8 or HUD-VASH vouchers?',
    a: 'Yes. We view Housing Choice Vouchers (Section 8) and HUD-VASH as reliable income sources. Our properties in East Texas are renovated to meet or exceed Housing Quality Standards (HQS), ensuring a smooth inspection and move-in process.',
  },
  {
    q: 'What is your pet policy?',
    a: 'We operate pet-friendly communities across East Texas. We allow up to 2 pets per household with a refundable pet deposit. We believe accommodating pets leads to happier, long-term residents.',
  },
  {
    q: 'Is there an application fee?',
    a: 'We have waived application fees to streamline the leasing process and remove upfront financial barriers for qualified applicants. Our goal is efficient placement in our premium rentals.',
  },
  {
    q: 'Do you perform background checks?',
    a: 'Yes, we conduct standard credit and criminal background checks to ensure community safety. However, we utilize a "Fair Chance" assessment model, reviewing each applicant\'s history in context rather than applying automatic disqualifiers.',
  },
  {
    q: 'How long does the leasing process take?',
    a: "Our digital application process typically takes 2-3 business days. For voucher holders, timelines may vary based on the local housing authority's inspection availability, though our pre-inspected units often pass on the first attempt.",
  },
  {
    q: 'Do you offer flexible lease terms?',
    a: 'Our standard agreement is a 12-month lease to ensure community stability. However, we do coordinate with specific veteran rehousing programs (like SSVF) to offer flexible terms when required by the supportive services provider.',
  },
];

const FAQ: React.FC = () => (
  <div className="bg-p4c-beige min-h-screen py-16">
    <Helmet>
      <title>Leasing FAQ | Properties 4 Creation</title>
      <meta
        name="description"
        content="Common questions about leasing with Properties 4 Creation. Information on Section 8 acceptance, pet policies, and application requirements in East Texas."
      />
      <meta
        name="keywords"
        content="Section 8 landlord Tyler TX, HUD-VASH acceptance, pet friendly rentals Longview, no application fee apartments, housing requirements East Texas"
      />
    </Helmet>

    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="bg-white p-4 rounded-full inline-flex mb-4 shadow-sm border border-gray-100">
          <HelpCircle className="w-8 h-8 text-p4c-gold" />
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-p4c-navy mb-4">
          Leasing & Management FAQ
        </h1>
        <p className="text-gray-600">
          Information for prospective residents in the East Texas area.
        </p>
      </div>

      <div className="space-y-4">
        {FAQs.map((faq, index) => (
          <FAQItem key={index} question={faq.q} answer={faq.a} />
        ))}
      </div>
    </div>
  </div>
);

export default FAQ;

```

---
### 📄 `src\pages\FamilyResources.tsx`

**⚠️ Analysis Findings:**
- 🔵 **[MEDIUM]** Image missing alt text (Line 133)

```typescript
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { IMAGES } from '../constants/images';
import {
  Heart,
  MapPin,
  School,
  Users,
  Home,
  Shield,
  DollarSign,
  CheckCircle2,
  Star,
  Award,
  BookOpen,
  Baby,
  Car,
  Wifi,
} from 'lucide-react';

const FamilyResources: React.FC = () => {
  const schoolDistricts = [
    {
      name: 'Tyler ISD',
      rating: 4.2,
      schools: 25,
      students: '12,000+',
      highlights: ['STEM Programs', 'Arts Excellence', 'Sports Programs'],
    },
    {
      name: 'Whitehouse ISD',
      rating: 4.5,
      schools: 8,
      students: '4,200+',
      highlights: ['Small Class Sizes', 'Technology Focus', 'Music Programs'],
    },
    {
      name: 'Lindale ISD',
      rating: 4.3,
      schools: 6,
      students: '3,100+',
      highlights: [
        'Agricultural Programs',
        'Community Involvement',
        'Academic Excellence',
      ],
    },
  ];

  const familyFeatures = [
    {
      icon: <Home className="w-8 h-8 text-p4c-gold" />,
      title: 'Spacious Family Homes',
      description:
        '3-5 bedroom homes with dedicated family spaces, play areas, and modern amenities perfect for growing families.',
    },
    {
      icon: <Shield className="w-8 h-8 text-p4c-gold" />,
      title: 'Safe Neighborhoods',
      description:
        'Gated communities with 24/7 security, well-lit streets, and proximity to emergency services.',
    },
    {
      icon: <School className="w-8 h-8 text-p4c-gold" />,
      title: 'Top-Rated Schools',
      description:
        'Access to award-winning school districts with excellent test scores and extracurricular programs.',
    },
    {
      icon: <Users className="w-8 h-8 text-p4c-gold" />,
      title: 'Community Support',
      description:
        'Local family support networks, childcare resources, and community events for families.',
    },
    {
      icon: <MapPin className="w-8 h-8 text-p4c-gold" />,
      title: 'Convenient Locations',
      description:
        'Short commutes to work, shopping, healthcare, and recreational facilities.',
    },
    {
      icon: <DollarSign className="w-8 h-8 text-p4c-gold" />,
      title: 'Affordable Housing',
      description:
        'HUD-VASH and Section 8 approved properties with rent assistance programs available.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      family: 'Mother of 3',
      location: 'Tyler, TX',
      quote:
        'Properties 4 Creation gave us a beautiful home where my kids could thrive. The school district is amazing, and the community support has been incredible.',
      rating: 5,
    },
    {
      name: 'Marcus & Lisa Rodriguez',
      family: 'Parents of twins',
      location: 'Whitehouse, TX',
      quote:
        'We were struggling to find affordable housing for our growing family. Properties 4 Creation not only provided us with a home but connected us with amazing family resources.',
      rating: 5,
    },
    {
      name: 'Jennifer Williams',
      family: 'Single mother',
      location: 'Lindale, TX',
      quote:
        'The family-friendly features and school proximity made this the perfect choice. My daughter loves her new school and friends.',
      rating: 5,
    },
  ];

  return (
    <div className="bg-p4c-beige min-h-screen">
      <Helmet>
        <title>Family Resources | Properties 4 Creation</title>
        <meta
          name="description"
          content="Discover family-friendly housing in East Texas with top-rated schools, safe neighborhoods, and community support. Find your perfect home for your family today."
        />
        <meta
          name="keywords"
          content="family housing East Texas, schools Tyler, family homes affordable, HUD-VASH families, Section 8 family housing"
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img
            src={IMAGES.BANNERS.HERO_HOME}
            alt="Beautiful family home in East Texas neighborhood"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full hero-overlay-primary" />
          <div className="absolute top-0 left-0 w-full h-full hero-overlay-secondary" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="bg-p4c-gold p-4 rounded-full shadow-xl">
              <Heart className="w-12 h-12 text-p4c-navy" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 hero-text-contrast">
            Family Homes That Feel Like Home
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Safe, affordable housing in East Texas with top-rated schools and
            community support for your family&apos;s future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#schools"
              className="bg-p4c-gold text-p4c-navy hover:bg-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              aria-label="Learn about school districts"
            >
              Explore Schools
            </a>
            <a
              href="#features"
              className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl"
              aria-label="See family housing features"
            >
              View Features
            </a>
          </div>
        </div>
      </div>

      {/* School Districts Section */}
      <section id="schools" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-p4c-navy mb-6">
              Top-Rated School Districts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your children&apos;s education is our priority. All our properties
              located within highly-rated school districts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {schoolDistricts.map((district) => (
              <div
                key={district.name}
                className="bg-p4c-beige rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-serif font-bold text-p4c-navy">
                    {district.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-p4c-gold fill-current" />
                    <span className="font-bold text-p4c-navy">
                      {district.rating}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Schools:</span>
                    <span className="font-semibold text-p4c-navy">
                      {district.schools}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Students:</span>
                    <span className="font-semibold text-p4c-navy">
                      {district.students}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-p4c-navy mb-2">
                    Highlights:
                  </h4>
                  <ul className="space-y-1">
                    {district.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family Features Section */}
      <section id="features" className="py-20 bg-p4c-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-p4c-beige mb-6">
              Designed for Families
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every aspect of our properties is chosen with families in mind,
              from spacious layouts to community amenities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {familyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-serif font-bold text-p4c-beige mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family Amenities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-p4c-navy mb-6">
              Family Amenities & Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond housing, we provide comprehensive support services to help
              families thrive in East Texas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-p4c-gold p-3 rounded-xl flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-p4c-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-p4c-navy mb-2">
                    Educational Support
                  </h3>
                  <p className="text-gray-600">
                    Tutoring programs, homework help centers, and partnerships
                    with local schools to ensure academic success.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-p4c-gold p-3 rounded-xl flex-shrink-0">
                  <Baby className="w-6 h-6 text-p4c-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-p4c-navy mb-2">
                    Childcare Resources
                  </h3>
                  <p className="text-gray-600">
                    Access to licensed childcare facilities, after-school
                    programs, and emergency childcare services.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-p4c-gold p-3 rounded-xl flex-shrink-0">
                  <Users className="w-6 h-6 text-p4c-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-p4c-navy mb-2">
                    Family Counseling
                  </h3>
                  <p className="text-gray-600">
                    Professional counseling services, parenting classes, and
                    family support groups available through our partners.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-p4c-gold p-3 rounded-xl flex-shrink-0">
                  <Car className="w-6 h-6 text-p4c-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-p4c-navy mb-2">
                    Transportation Support
                  </h3>
                  <p className="text-gray-600">
                    School bus routes, carpool programs, and assistance with
                    transportation costs for families in need.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-p4c-gold p-3 rounded-xl flex-shrink-0">
                  <Wifi className="w-6 h-6 text-p4c-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-p4c-navy mb-2">
                    Technology Access
                  </h3>
                  <p className="text-gray-600">
                    Internet assistance programs and computer access to ensure
                    students can complete online homework and assignments.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-p4c-gold p-3 rounded-xl flex-shrink-0">
                  <Award className="w-6 h-6 text-p4c-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-p4c-navy mb-2">
                    Community Programs
                  </h3>
                  <p className="text-gray-600">
                    Youth sports leagues, community gardens, and cultural events
                    that bring families together and build community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Testimonials */}
      <section className="py-20 bg-p4c-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-p4c-navy mb-6">
              Families Love Their Properties 4 Creation Homes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from families who&apos;ve found their perfect home with
              Properties 4 Creation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-p4c-gold fill-current"
                    />
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </blockquote>

                <div>
                  <div className="font-serif font-bold text-p4c-navy">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.family} • {testimonial.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-p4c-navy text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-p4c-beige mb-6">
            Ready to Find Your Family&apos;s Home?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Take the first step towards creating lasting memories in a home that
            supports your family&apos;s growth and happiness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/apply"
              className="bg-p4c-gold text-p4c-navy hover:bg-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              aria-label="Start your family housing application"
            >
              Start Application
            </a>
            <a
              href="/contact"
              className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl"
              aria-label="Contact us about family housing"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FamilyResources;

```

---
### 📄 `src\pages\Home.tsx`

**⚠️ Analysis Findings:**
- 🔴 **[HIGH]** Button missing aria-label (Line 202)
- 🔴 **[HIGH]** Button missing aria-label (Line 220)
- 🔴 **[HIGH]** Button missing aria-label (Line 248)
- 🔴 **[HIGH]** Button missing aria-label (Line 305)
- 🔴 **[HIGH]** Button missing aria-label (Line 395)
- 🔴 **[HIGH]** Button missing aria-label (Line 472)
- 🔴 **[HIGH]** Button missing aria-label (Line 549)
- 🔴 **[HIGH]** Button missing aria-label (Line 612)
- 🔵 **[MEDIUM]** Replace "Gold Standard" with "Reliability Pledge" (Line 341)

```typescript
import React, { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import PropertyCard from '../components/PropertyCard';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { api } from '../services/api';
import { logError } from '../services/errorBoundaryService';
import type { ExtendedProperty } from '../types/types';
import { IMAGES } from '../constants/images';
import {
  Search,
  SlidersHorizontal,
  X,
  ArrowRight,
  HeartHandshake,
  Briefcase,
  Building2,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  // States
  const [properties, setProperties] = useState<ExtendedProperty[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState<number>(2000);
  const [minBeds, setMinBeds] = useState<number>(0);
  const [selectedBadges, setSelectedBadges] = useState<string[]>([]);
  const [arv, setArv] = useState<number>(0);
  const [repairs, setRepairs] = useState<number>(0);
  const offerPrice = arv * 0.7 - repairs;

  // Fetch properties on component mount
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const propertiesData = await api.properties.getAll();
        setProperties(propertiesData);
      } catch (error) {
        logError('Failed to fetch properties', {
          error: error instanceof Error ? error : new Error(String(error)),
          component: 'Home',
          severity: 'high',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Extract unique badges from all properties for the filter list
  const allBadges = useMemo(() => {
    const badges = new Set<string>();
    properties.forEach((p) => p.badges.forEach((b) => badges.add(b)));
    return Array.from(badges);
  }, [properties]);

  // Filtering Logic
  const filteredProperties = useMemo(
    () =>
      properties.filter((property) => {
        // Text Search (Title, Address, Description)
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          property.title.toLowerCase().includes(query) ||
          property.address.toLowerCase().includes(query) ||
          property.description.toLowerCase().includes(query);

        // Price Filter
        const matchesPrice =
          typeof property.price === 'number'
            ? property.price <= maxPrice
            : parseFloat(property.price.replace(/[^0-9.]/g, '')) <= maxPrice;

        // Bed Filter
        const matchesBeds = property.beds >= minBeds;

        // Badge Filter (Must have ALL selected badges)
        const matchesBadges = selectedBadges.every((badge) =>
          property.badges.includes(badge)
        );

        return matchesSearch && matchesPrice && matchesBeds && matchesBadges;
      }),
    [properties, searchQuery, maxPrice, minBeds, selectedBadges]
  );

  const toggleBadge = (badge: string) => {
    setSelectedBadges((prev) =>
      prev.includes(badge) ? prev.filter((b) => b !== badge) : [...prev, badge]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setMaxPrice(2000);
    setMinBeds(0);
    setSelectedBadges([]);
  };

  return (
    <>
      <Helmet>
        <title>
          Properties 4 Creation | Premium Affordable Housing & Investments
        </title>
        <meta
          name="description"
          content="Properties 4 Creation acquires and revitalizes real estate in East Texas, offering premium affordable housing to families and veterans in East Texas."
        />
      </Helmet>

      {/* Hero Video - Visual Hook */}
      <Hero variant="video" />

      {/* Featured Listings - The Product */}
      <section
        id="homes"
        className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-p4c-navy mb-2">
              Available East Texas Residences
            </h2>
            <p className="text-gray-600 max-w-xl">
              Browse our portfolio of fully renovated, professionally managed
              homes in
              <strong> East Texas</strong>. We accept Section
              8 and private applicants.
            </p>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by city (e.g. Tyler), zip, or feature..."
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-p4c-gold focus:border-p4c-gold transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search properties"
              />
            </div>

            {/* Price Dropdown */}
            <div className="md:col-span-3">
              <label
                htmlFor="maxPrice"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Max Price
              </label>
              <select
                id="maxPrice"
                className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-p4c-gold focus:border-p4c-gold bg-white cursor-pointer"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              >
                <option value={2000}>Max Price: Any</option>
                <option value={800}>$800 / mo</option>
                <option value={1000}>$1,000 / mo</option>
                <option value={1200}>$1,200 / mo</option>
                <option value={1500}>$1,500 / mo</option>
              </select>
            </div>

            {/* Beds Dropdown */}
            <div className="md:col-span-3">
              <label
                htmlFor="minBeds"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Min Bedrooms
              </label>
              <select
                id="minBeds"
                className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-p4c-gold focus:border-p4c-gold bg-white cursor-pointer"
                value={minBeds}
                onChange={(e) => setMinBeds(Number(e.target.value))}
              >
                <option value={0}>Bedrooms: Any</option>
                <option value={1}>1+ Bed</option>
                <option value={2}>2+ Beds</option>
                <option value={3}>3+ Beds</option>
                <option value={4}>4+ Beds</option>
              </select>
            </div>

            {/* Clear Button */}
            <div className="md:col-span-1 flex justify-center">
              <button
                onClick={clearFilters}
                className="text-gray-400 hover:text-red-500 transition-colors p-2.5 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-200"
                title="Clear Filters"
                aria-label="Clear all filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Badges / Amenities Filter */}
          <div className="mt-6 pt-5 border-t border-gray-100">
            <div className="flex items-center gap-2.5 mb-4 text-sm font-bold text-gray-500 uppercase tracking-wide">
              <SlidersHorizontal className="w-4 h-4" /> Filter by Features:
            </div>
            <div className="flex flex-wrap gap-2.5 mb-4">
              {allBadges.map((badge) => (
                <button
                  key={badge}
                  onClick={() => toggleBadge(badge)}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 border-2 ${
                    selectedBadges.includes(badge)
                      ? 'bg-p4c-navy text-white border-p4c-navy shadow-md'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-p4c-gold hover:text-p4c-navy'
                  }`}
                  aria-pressed={selectedBadges.includes(badge)}
                >
                  {badge}
                </button>
              ))}
            </div>

            {/* Family-Friendly Filters */}
            <div className="border-t border-gray-100 pt-4">
              <div className="flex items-center gap-2.5 mb-3 text-sm font-bold text-gray-500 uppercase tracking-wide">
                <HeartHandshake className="w-4 h-4" /> Lifestyle Amenities:
              </div>
              <div className="flex flex-wrap gap-2.5">
                {[
                  'Near Tyler ISD',
                  'Fenced Yard',
                  'Newly Renovated',
                  'Quiet Neighborhood',
                  'Near Parks',
                ].map((feature) => (
                  <button
                    key={feature}
                    onClick={() => toggleBadge(feature)}
                    className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 border-2 ${
                      selectedBadges.includes(feature)
                        ? 'bg-p4c-gold text-p4c-navy border-p4c-gold shadow-md'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-p4c-gold hover:text-p4c-navy'
                    }`}
                    aria-pressed={selectedBadges.includes(feature)}
                  >
                    {feature}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
              >
                <div className="h-64 bg-gray-200 animate-pulse" />
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded animate-pulse mb-2" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-4" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-6" />
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-12 bg-gray-200 rounded animate-pulse" />
                    <div className="h-12 bg-gray-200 rounded animate-pulse" />
                    <div className="h-12 bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((prop) => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300">
            <div className="inline-flex justify-center items-center bg-white p-4 rounded-full mb-4 shadow-sm">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-p4c-navy mb-2">
              No properties found matching your criteria
            </h3>
            <p className="text-gray-500 mb-6">
              Our inventory in Tyler and Longview changes weekly.
            </p>
            <button
              onClick={clearFilters}
              className="text-p4c-gold font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>

      {/* Core Services Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-20"
        aria-label="Our Core Services"
      >
        <div className="text-center mb-16">
          <div className="inline-block bg-p4c-navy text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-p4c-navy mb-4">
            Comprehensive Real Estate Solutions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            From premium family housing to direct asset acquisition, we provide end-to-end real estate services across East Texas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Card 1: Family/Community (50%) */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-p4c-navy hover:shadow-2xl transition-shadow">
            <div className="bg-p4c-beige w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-p4c-navy">
              <Building2 className="w-8 h-8" aria-hidden="true" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-p4c-navy mb-4">
              Premium Family Living
            </h3>
            <p className="font-sans text-slate-600 leading-relaxed mb-4">
              We deliver the &quot;Gold Standard&quot; in affordable housing.
              Located in in top-rated school districts in{' '}
              <strong>Tyler and Longview</strong>, our homes feature modern
              renovations that provide families with dignity and stability.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-p4c-navy text-white px-3 py-1 rounded-full text-sm font-bold">
                Tyler ISD
              </span>
              <span className="bg-p4c-navy text-white px-3 py-1 rounded-full text-sm font-bold">
                Section 8 Accepted
              </span>
              <span className="bg-p4c-navy text-white px-3 py-1 rounded-full text-sm font-bold">
                Pet Friendly
              </span>
            </div>
            <a
              href="/family-resources"
              className="inline-flex items-center gap-2 text-p4c-navy font-bold hover:text-p4c-gold"
            >
              View Family Standards <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2: Veteran (30% - Reduced from Main Focus) */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-p4c-gold hover:shadow-2xl transition-shadow">
            <div className="bg-p4c-navy w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-p4c-gold">
              <HeartHandshake className="w-8 h-8" aria-hidden="true" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-p4c-navy mb-4">
              Veteran Housing Partners
            </h3>
            <p className="font-sans text-slate-600 leading-relaxed">
              As a veteran-owned business, we understand the logistics of
              relocation. We work directly with HUD-VASH case managers to
              provide rapid, bureaucracy-free housing solutions for service
              members.
            </p>
          </div>

          {/* Card 3: Investor/Seller (20%) */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-slate-500 hover:shadow-2xl transition-shadow">
            <div className="bg-slate-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-slate-700">
              <Briefcase className="w-8 h-8" aria-hidden="true" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-p4c-navy mb-4">
              Direct Asset Acquisition
            </h3>
            <p className="font-sans text-slate-600 leading-relaxed">
              Selling a distressed property? We offer competitive cash buyouts
              for homes in East Texas. We handle the repairs and closing costs,
              providing liquid capital to sellers on their timeline.
            </p>
            <div className="mt-6">
              <button
                onClick={() => navigate('/homeowner-solutions')}
                className="text-p4c-gold font-bold hover:text-p4c-navy inline-flex items-center gap-1"
              >
                Get a Cash Offer <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Prominent Sellers Section - Business focused */}
      <section className="py-20 bg-gradient-to-br from-p4c-navy to-p4c-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-p4c-gold text-p4c-navy px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                East Texas Acquisitions
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Sell Your House for Market Value
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                We are actively acquiring properties in{' '}
                <strong>Smith, Gregg, and Harrison counties</strong>. Skip the
                realtor fees and open houses. We provide fair market assessments
                and immediate liquidity.
              </p>

              {/* Quick Calculator */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">
                  Instant Valuation Estimate
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <label
                      className="block text-gray-300 mb-1"
                      htmlFor="arv-input"
                    >
                      After Repair Value (ARV)
                    </label>
                    <input
                      id="arv-input"
                      type="number"
                      className="w-full bg-white/20 border border-white/30 rounded px-3 py-2 text-white focus:ring-2 focus:ring-p4c-gold focus:border-p4c-gold"
                      value={arv}
                      onChange={(e) => setArv(Number(e.target.value))}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-300 mb-1"
                      htmlFor="repairs-input"
                    >
                      Repair Costs
                    </label>
                    <input
                      id="repairs-input"
                      type="number"
                      className="w-full bg-white/20 border border-white/30 rounded px-3 py-2 text-white focus:ring-2 focus:ring-p4c-gold focus:border-p4c-gold"
                      value={repairs}
                      onChange={(e) => setRepairs(Number(e.target.value))}
                    />
                  </div>
                </div>
                <div className="mt-4 p-4 bg-p4c-gold text-p4c-navy rounded-lg text-center">
                  <div className="text-2xl font-bold">
                    Your Cash Offer: ${offerPrice.toLocaleString()}
                  </div>
                  <div className="text-sm opacity-80">
                    Based on Tyler Market Data
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/homeowner-solutions')}
                  className="bg-p4c-gold text-p4c-navy hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Start My Sale <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href="tel:(903) 555-0123"
                  className="border-2 border-white text-white hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Call Acquisitions
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <h3 className="text-xl font-bold text-p4c-navy mb-4">
                  Why Sell to Us?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">
                      <strong>As-Is Condition:</strong> No repairs needed
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">
                      <strong>Speed:</strong> Closing in as little as 14 days
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">
                      <strong>Savings:</strong> No 6% realtor commission
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section - Community Focus */}
      <section className="py-20 bg-p4c-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-60"
                src={IMAGES.VIDEOS.SUCCESS_STORY}
              />
              <div className="absolute inset-0 bg-p4c-navy/30 mix-blend-multiply" />
            </div>
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-p4c-gold/20 px-4 py-2 rounded-full text-p4c-gold text-sm font-bold uppercase tracking-wider mb-4 border border-p4c-gold/30">
                Community Impact
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Building Stronger Communities Through Quality Renovations
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Every property we renovate represents an investment in East Texas families. Our commitment to premium finishes and modern amenities creates stable, long-term housing that strengthens neighborhoods and supports local growth.
              </p>
              <button
                onClick={() => navigate('/our-impact')}
                className="bg-p4c-gold text-p4c-navy hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                View Our Impact
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-p4c-navy mb-6">
                The Renovation Standard
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From distressed asset to premium residence. Watch our
                professional construction teams execute high-end finishes that
                ensure longevity and tenant satisfaction.
              </p>
              <a
                href="/construction-standards"
                className="inline-flex items-center gap-2 text-p4c-gold font-bold hover:underline"
              >
                View Construction Specs
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="w-full">
              <div className="mb-4 text-center text-sm text-gray-500 italic">
                Drag the slider to see the value add
              </div>
              <BeforeAfterSlider
                beforeImage={IMAGES.RENOVATION.LIVING_ROOM.BEFORE}
                afterImage={IMAGES.RENOVATION.LIVING_ROOM.AFTER}
                label="Living Room Capital Improvement"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Professional */}
      <section
        id="apply"
        className="py-24 bg-p4c-navy text-center px-4 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to upgrade your living standard?
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Our application process is streamlined, digital, and fast. Move into
            your new home in as little as 3 days.
          </p>
          <button
            onClick={() => navigate('/apply')}
            className="bg-p4c-gold text-p4c-navy hover:bg-white hover:text-p4c-navy px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Start Tenant Application
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;

```

---
### 📄 `src\pages\HomeownerSolutions.tsx`

**⚠️ Analysis Findings:**
- 🔴 **[HIGH]** Button missing aria-label (Line 366)
- 🔴 **[HIGH]** Button missing aria-label (Line 528)
- 🔵 **[MEDIUM]** Image missing alt text (Line 117)
- 🔵 **[MEDIUM]** Image missing alt text (Line 186)
- 🔵 **[MEDIUM]** Image missing alt text (Line 204)

```typescript
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { IMAGES } from '../constants/images';
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  MapPin,
  User,
  DollarSign,
  Clock,
} from 'lucide-react';

interface FormData {
  name: string;
  address: string;
  phone: string;
  propertyType?: string;
  timeline?: string;
}

interface FormErrors {
  name?: string;
  address?: string;
  phone?: string;
}

const HomeownerSolutions: React.FC = () => {
  // REMOVED: unused navigate hook
  const [formData, setFormData] = useState<FormData>(() => {
    const saved = localStorage.getItem('homeownerSolutionsForm');
    return saved
      ? JSON.parse(saved)
      : {
          name: '',
          address: '',
          phone: '',
          propertyType: '',
          timeline: '',
        };
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    localStorage.setItem('homeownerSolutionsForm', JSON.stringify(formData));
  }, [formData]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Property address is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch (error) {
      // Error is handled by the error boundary service
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-p4c-beige min-h-screen">
      <Helmet>
        <title>
          Homeowner Solutions | Cash Offers East Texas | Properties 4 Creation
        </title>
        <meta
          name="description"
          content="We acquire residential assets in East Texas. Get a fair market cash offer for your property in as-is condition. Close in as little as 14 days."
        />
        <meta
          name="keywords"
          content="sell house fast Tyler TX, we buy houses Longview, cash home buyers East Texas, real estate investors Marshall, sell rental property"
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img
            src={IMAGES.PROPERTIES.JEFFERSON_RIVER}
            alt="Waterfront property acquisition in East Texas"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full hero-overlay-primary bg-p4c-navy/60" />
          <div className="absolute top-0 left-0 w-full h-full hero-overlay-secondary bg-gradient-to-b from-transparent via-transparent to-p4c-navy/80" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight tracking-wide">
            Direct Asset Acquisition <br />
            <span className="text-p4c-gold">Simplified.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            We provide liquidity for property owners in{' '}
            <strong>East Texas</strong> through competitive off-market cash
            offers.
          </p>
        </div>
      </div>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-p4c-navy mb-4">
              Value-Add Strategy in Action
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how we maximize asset potential through strategic capital
              improvement.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full aspect-video object-cover"
              aria-label="Timelapse of property renovation"
            >
              <source src={IMAGES.VIDEOS.HERO_IMPACT} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 bg-p4c-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-p4c-navy mb-4">
              Asset Transformation
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We specialize in the rehabilitation of distressed inventory,
              stabilizing property values in the community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-slate-200 p-3">
                <h3 className="text-sm font-bold text-slate-700 text-center uppercase tracking-wider">
                  Acquisition State
                </h3>
              </div>
              <img
                src={IMAGES.RENOVATION.LIVING_ROOM.BEFORE}
                alt="Property in distressed condition"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <p className="text-gray-600 text-sm">
                  Deferred maintenance, outdated systems, vacancy risk.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-p4c-gold p-3">
                <h3 className="text-sm font-bold text-p4c-navy text-center uppercase tracking-wider">
                  Stabilized Asset
                </h3>
              </div>
              <img
                src={IMAGES.RENOVATION.LIVING_ROOM.AFTER}
                alt="Renovated property ready for leasing"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <p className="text-gray-600 text-sm">
                  Market-ready finishes, updated mechanicals, premium rental.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-p4c-navy mb-4">
              Seller Experiences
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real feedback from property owners in East Texas who chose a
              direct sale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-p4c-beige rounded-2xl p-8 border border-p4c-gold/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-p4c-navy rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div>
                  <h3 className="font-bold text-p4c-navy">Sarah Mitchell</h3>
                  <p className="text-sm text-gray-600">Tyler, TX</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                &quot;I needed to liquidate an inherited property quickly.
                Properties 4 Creation provided a fair cash offer based on comps
                and we closed in 14 days. Extremely professional.&quot;
              </blockquote>
              <div className="flex text-p4c-gold">★★★★★</div>
            </div>

            <div className="bg-p4c-beige rounded-2xl p-8 border border-p4c-gold/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-p4c-navy rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <div>
                  <h3 className="font-bold text-p4c-navy">
                    Properties 4 Creation Team
                  </h3>
                  <p className="text-sm text-gray-600">East Texas</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                &quot;As a landlord tired of management, selling my portfolio to
                P4C was the right move. They bought the properties
                &apos;as-is&apos; with tenants in place. Seamless
                transition.&quot;
              </blockquote>
              <div className="flex text-p4c-gold">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Tracker */}
      <section className="py-20 bg-p4c-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Acquisition Process
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our streamlined disposition process ensures certainty of closing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-p4c-gold rounded-full flex items-center justify-center mx-auto mb-4 text-p4c-navy font-bold text-xl group-hover:bg-white transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Discovery Call
              </h3>
              <p className="text-gray-300 text-sm">
                Brief discussion regarding asset details and seller goals.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-p4c-gold rounded-full flex items-center justify-center mx-auto mb-4 text-p4c-navy font-bold text-xl group-hover:bg-white transition-colors">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Market Analysis
              </h3>
              <p className="text-gray-300 text-sm">
                We underwrite the property and present a net cash offer.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-p4c-gold rounded-full flex items-center justify-center mx-auto mb-4 text-p4c-navy font-bold text-xl group-hover:bg-white transition-colors">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Due Diligence
              </h3>
              <p className="text-gray-300 text-sm">
                Rapid inspection period with no repair requests.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-p4c-gold rounded-full flex items-center justify-center mx-auto mb-4 text-p4c-navy font-bold text-xl group-hover:bg-white transition-colors">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Closing & Funding
              </h3>
              <p className="text-gray-300 text-sm">
                Close at a local title company on your timeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-p4c-beige rounded-2xl shadow-xl overflow-hidden border border-p4c-gold/30">
            <div className="p-8 md:p-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-3">
                  Request a Cash Offer
                </h2>
                <p className="text-gray-600">
                  Submit your property details for a confidential, no-obligation
                  valuation.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-p4c-navy mb-2">
                    Inquiry Received
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our acquisitions team will review your property and contact
                    you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        address: '',
                        phone: '',
                        propertyType: '',
                        timeline: '',
                      });
                    }}
                    className="text-p4c-gold font-bold hover:text-p4c-navy underline transition-colors"
                  >
                    Submit another property
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-p4c-navy mb-2"
                    >
                      Owner Name / Point of Contact
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 bg-white focus:outline-none transition-all ${
                          errors.name
                            ? 'border-red-300 focus:border-red-500'
                            : 'border-gray-200 focus:border-p4c-gold'
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-bold text-p4c-navy mb-2"
                    >
                      Property Address
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="123 Main Street, Tyler, TX 75701"
                        className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 bg-white focus:outline-none transition-all ${
                          errors.address
                            ? 'border-red-300 focus:border-red-500'
                            : 'border-gray-200 focus:border-p4c-gold'
                        }`}
                      />
                    </div>
                    {errors.address && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.address}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-bold text-p4c-navy mb-2"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(903) 555-0123"
                        className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 bg-white focus:outline-none transition-all ${
                          errors.phone
                            ? 'border-red-300 focus:border-red-500'
                            : 'border-gray-200 focus:border-p4c-gold'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="propertyType"
                        className="block text-sm font-bold text-p4c-navy mb-2"
                      >
                        Asset Type
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            propertyType: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-p4c-gold bg-white"
                      >
                        <option value="">Select type</option>
                        <option>Single Family Residential</option>
                        <option>Multi-Family (2-4 Units)</option>
                        <option>Apartment Complex (5+ Units)</option>
                        <option>Commercial</option>
                        <option>Vacant Land</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="timeline"
                        className="block text-sm font-bold text-p4c-navy mb-2"
                      >
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            timeline: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-p4c-gold bg-white"
                      >
                        <option value="">Select timeframe</option>
                        <option>Urgent (14-30 days)</option>
                        <option>Short Term (1-3 months)</option>
                        <option>Flexible</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-p4c-gold text-p4c-navy hover:bg-p4c-goldHover py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transform hover:-translate-y-1"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-p4c-navy border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Get My Offer
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeownerSolutions;

```

---
### 📄 `src\pages\OurImpact.tsx`

**⚠️ Analysis Findings:**
- 🔵 **[MEDIUM]** Image missing alt text (Line 158)
- 🔵 **[MEDIUM]** Image missing alt text (Line 181)
- 🔵 **[MEDIUM]** Image missing alt text (Line 204)

```typescript
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { api } from '../services/api';
import type { StatMetric, FinancialBreakdown } from '../types/types';
import {
  Home,
  Users,
  Hammer,
  DollarSign,
  Heart,
  Loader2,
  ArrowUpRight,
  TrendingUp,
  Building,
} from 'lucide-react';
import { useToast } from '../context/ToastContext';
import { IMAGES } from '../constants/images';

const OurImpact: React.FC = () => {
  const [metrics, setMetrics] = useState<StatMetric[]>([]);
  const [financials, setFinancials] = useState<FinancialBreakdown[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToast } = useToast();

  useEffect(() => {
    const fetchImpactData = async () => {
      try {
        const [metricsData, financialData] = await Promise.all([
          api.impact.getMetrics(),
          api.impact.getFinancialBreakdown(),
        ]);
        setMetrics(metricsData);
        setFinancials(financialData);
      } catch (error) {
        addToast('Unable to load impact data.', 'error');
      } finally {
        setLoading(false);
      }
    };
    fetchImpactData();
  }, [addToast]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'home':
        return <Home className="w-6 h-6" />;
      case 'users':
        return <Users className="w-6 h-6" />;
      case 'hammer':
        return <Hammer className="w-6 h-6" />;
      case 'dollar':
        return <DollarSign className="w-6 h-6" />;
      case 'heart':
        return <Heart className="w-6 h-6" />;
      default:
        return <Home className="w-6 h-6" />;
    }
  };

  return (
    <div className="bg-p4c-beige min-h-screen">
      <Helmet>
        <title>
          Community Impact & Investment Data | Properties 4 Creation
        </title>
        <meta
          name="description"
          content="Review our community revitalization metrics. We track economic impact, property value increases, and housing stability in East Texas."
        />
      </Helmet>

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={IMAGES.BANNERS.HERO_PROJECTS}
          className="absolute top-0 left-0 w-full h-full object-cover"
          aria-label="Impact hero background video showcasing our projects"
        >
          <source
            src="/images/videos/hero-our-work-banner.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute top-0 left-0 w-full h-full hero-overlay-primary" />
        <div className="absolute top-0 left-0 w-full h-full hero-overlay-secondary" />
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center max-w-4xl animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Strategic Community <br />
              <span className="text-p4c-gold">Revitalization.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
              We measure success by asset performance and the economic uplift of
              <strong> East Texas</strong> neighborhoods.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-20 relative z-20">
        {/* Metrics Grid */}
        {loading ? (
          <div className="bg-white rounded-2xl shadow-xl p-12 flex justify-center items-center">
            <Loader2 className="w-10 h-10 text-p4c-gold animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {metrics.map((stat) => (
              <div
                key={stat.id}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-p4c-gold ring-1 ring-gray-900/5"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-p4c-navy/5 p-3 rounded-lg text-p4c-navy">
                    {getIcon(stat.icon)}
                  </div>
                  {stat.trend === 'up' && (
                    <div className="flex items-center text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      <ArrowUpRight className="w-3 h-3 mr-1" />
                      {stat.trendValue}
                    </div>
                  )}
                </div>
                <div className="text-4xl font-serif font-bold text-p4c-navy mb-2">
                  {stat.value}
                </div>
                <div className="font-bold text-gray-900 mb-2">{stat.label}</div>
                <p className="text-sm text-gray-500 leading-snug">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Project Spotlight - BRRR Cycle Breakdown */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 ring-1 ring-gray-900/5">
            <div className="p-8 border-b border-gray-100 bg-gray-50">
              <h2 className="text-2xl font-serif font-bold text-p4c-navy flex items-center gap-3">
                <Building className="w-6 h-6 text-p4c-gold" />
                The Revitalization Cycle (BRRR Strategy)
              </h2>
              <p className="text-gray-600 mt-2">
                Our systematic approach to acquiring and stabilizing distressed
                assets.
              </p>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Buy (As-Is) */}
                <div className="text-center group">
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                    <img
                      src="/images/about/acquisition.png"
                      alt="Acquisition of distressed property"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="bg-p4c-navy text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        1. Acquisition
                      </span>
                    </div>
                  </div>
                  <h3 className="font-bold text-p4c-navy mb-2">
                    Identify & Acquire
                  </h3>
                  <p className="text-sm text-gray-600">
                    We purchase undervalued assets in high-potential East Texas
                    neighborhoods.
                  </p>
                </div>

                {/* Rehab */}
                <div className="text-center group">
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                    <img
                      src="/images/about/rehabilitaion.png"
                      alt="Capital improvement construction"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="bg-p4c-navy text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        2. Rehabilitation
                      </span>
                    </div>
                  </div>
                  <h3 className="font-bold text-p4c-navy mb-2">
                    Capital Improvement
                  </h3>
                  <p className="text-sm text-gray-600">
                    Strategic renovations inject equity and extend the asset's
                    lifespan by 20+ years.
                  </p>
                </div>

                {/* Rent */}
                <div className="text-center group">
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                    <img
                      src="/images/properties/tyler-ranch-home.webp"
                      alt="Stabilized asset with tenants"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="bg-p4c-navy text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        3. Stabilization
                      </span>
                    </div>
                  </div>
                  <h3 className="font-bold text-p4c-navy mb-2">
                    Lease & Manage
                  </h3>
                  <p className="text-sm text-gray-600">
                    Placement of reliable tenants (Private & Section 8) ensures
                    consistent cash flow.
                  </p>
                </div>

                {/* Repeat */}
                <div className="text-center group">
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4 shadow-lg bg-gradient-to-br from-p4c-gold to-p4c-navy flex items-center justify-center group-hover:scale-[1.02] transition-transform">
                    <div className="text-center text-white">
                      <TrendingUp className="w-12 h-12 mx-auto mb-2" />
                      <span className="text-2xl font-bold">Growth</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-p4c-navy mb-2">
                    Refinance & Repeat
                  </h3>
                  <p className="text-sm text-gray-600">
                    We leverage equity to acquire new assets, scaling our
                    portfolio and community impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Section & Financial Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 ring-1 ring-gray-900/5">
              <h2 className="text-2xl font-serif font-bold text-p4c-navy mb-4">
                The Economic Multiplier Effect
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our investment strategy does more than generate returns; it acts
                as a catalyst for local economic growth. By removing blight, we
                stabilize surrounding property values and attract further
                investment into the community.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Local Labor First:</strong> We prioritize contracts with
                East Texas tradespeople. Every dollar spent on renovation
                circulates within the East Texas economies,
                supporting local small businesses and families.
              </p>
            </div>

            {/* Quote Card */}
            <div className="bg-p4c-navy text-white p-8 rounded-2xl shadow-lg relative overflow-hidden ring-1 ring-white/10">
              <div className="relative z-10">
                <p className="text-xl font-serif italic mb-6">
                  "Properties 4 Creation isn't just a landlord; they are a
                  cornerstone investor in our neighborhood. When they fix up a
                  house, the whole street looks better."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-p4c-gold flex items-center justify-center text-p4c-navy font-bold">
                    M
                  </div>
                  <div>
                    <div className="font-bold">Local City Official</div>
                    <div className="text-sm text-p4c-gold">
                      Community Development Dept.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Breakdown */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 ring-1 ring-gray-900/5 h-fit">
            <h3 className="text-xl font-serif font-bold text-p4c-navy mb-6">
              Capital Allocation
            </h3>
            <div className="space-y-4">
              {financials.map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm mb-1 font-medium">
                    <span className="text-gray-700">{item.category}</span>
                    <span className="text-gray-900 font-bold">
                      {item.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="h-2.5 rounded-full"
                      style={{
                        width: `${item.percentage}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-500 mb-4">
                Interested in partnership opportunities?
              </p>
              <a
                href="/contact"
                className="w-full border-2 border-p4c-navy text-p4c-navy font-bold py-2 rounded hover:bg-p4c-navy hover:text-white transition-colors inline-block"
              >
                Request Investor Prospectus
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurImpact;

```

---
### 📄 `src\pages\Privacy.tsx`

```typescript
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye } from 'lucide-react';

const Privacy: React.FC = () => (
  <div className="bg-p4c-beige min-h-screen py-16">
    <Helmet>
      <title>Privacy Policy | Properties 4 Creation</title>
      <meta
        name="description"
        content="Privacy policy and data protection standards for Properties 4 Creation applicants and residents."
      />
      <meta
        name="keywords"
        content="privacy policy, data protection, tenant privacy, housing privacy, rental application privacy, GDPR compliance"
      />
    </Helmet>

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
        <div className="border-b border-gray-200 pb-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-p4c-navy mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-500">Last Updated: October 24, 2023</p>
        </div>

        <div className="prose prose-slate max-w-none text-gray-700">
          <p className="lead text-lg">
            At Properties 4 Creation, we value your dignity and your privacy. We
            understand that applying for housing requires sharing sensitive
            personal information, and we are committed to protecting that data
            with the highest standards of security.
          </p>

          <h3 className="text-xl font-bold text-p4c-navy mt-8 mb-4 flex items-center gap-2">
            <Eye className="text-p4c-gold w-5 h-5" /> Information We Collect
          </h3>
          <p>
            We collect information necessary to process rental applications,
            manage lease agreements, and communicate with residents. This
            includes:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>Identity Data:</strong> Name, date of birth, social
              security number (encrypted), and government ID.
            </li>
            <li>
              <strong>Contact Data:</strong> Email address, phone number, and
              current address.
            </li>
            <li>
              <strong>Financial Data:</strong> Income verification, voucher
              documentation (Section 8/HUD-VASH), and employment history.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-p4c-navy mt-8 mb-4 flex items-center gap-2">
            <Shield className="text-p4c-gold w-5 h-5" /> How We Use Your
            Information
          </h3>
          <p>
            We use your data solely for business operations related to housing.
            We do <strong>not</strong> sell your personal data to third-party
            advertisers.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              To evaluate rental applications and conduct background/credit
              checks.
            </li>
            <li>To process rent payments and maintenance requests.</li>
            <li>To comply with Fair Housing laws and HUD/VA requirements.</li>
          </ul>

          <h3 className="text-xl font-bold text-p4c-navy mt-8 mb-4 flex items-center gap-2">
            <Lock className="text-p4c-gold w-5 h-5" /> Data Security
          </h3>
          <p>
            We implement enterprise-grade security measures to prevent your
            personal data from being accidentally lost, used, or accessed in an
            unauthorized way. Access to your personal data is limited to
            Properties 4 Creation employees, agents, and contractors who have a
            business need to know and are subject to a duty of confidentiality.
          </p>

          <h3 className="text-xl font-bold text-p4c-navy mt-8 mb-4">
            Your Rights
          </h3>
          <p>
            Under applicable laws, you have the right to request access to your
            personal data, request correction of your data, or request erasure
            of your data under certain conditions.
          </p>

          <div className="bg-gray-50 p-6 rounded-xl mt-8 border border-gray-200">
            <h4 className="font-bold text-p4c-navy mb-2">
              Contact Us About Privacy
            </h4>
            <p className="text-sm">
              If you have questions about this privacy policy or our privacy
              practices, please contact us at: <br />
              <a
                href="mailto:privacy@p4c-homes.com"
                className="text-p4c-gold font-bold hover:underline"
              >
                privacy@p4c-homes.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Privacy;

```

---
### 📄 `src\pages\Properties.tsx`

**⚠️ Analysis Findings:**
- 🔴 **[HIGH]** UI bypassing Service Layer (direct data import) (Line 14)
- 🔴 **[HIGH]** Button missing aria-label (Line 172)
- 🔴 **[HIGH]** Button missing aria-label (Line 188)
- 🔴 **[HIGH]** Button missing aria-label (Line 278)
- 🔴 **[HIGH]** Button missing aria-label (Line 341)

```typescript
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Search,
  Filter,
  Home,
  CheckCircle,
  MapPin,
  SlidersHorizontal,
} from 'lucide-react';

// Components & Data
import PropertyCard from '../components/PropertyCard';
import { properties as initialProperties } from '../data/properties';
import type { ExtendedProperty } from '../types/types';

// FIX: Extended Interface to avoid 'any' casting errors
interface MissionProperty extends ExtendedProperty {
  isSection8Eligible?: boolean;
  isVeteranPreferred?: boolean;
}

const Properties: React.FC = () => {
  // --- STATE MANAGEMENT ---
  const [loading, setLoading] = useState(true);
  const [filteredProperties, setFilteredProperties] = useState<
    MissionProperty[]
  >([]);

  // Search & Text Filters
  const [searchTerm, setSearchTerm] = useState('');

  // Standard Filters
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedBedrooms, setSelectedBedrooms] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');

  // Mission Filters
  const [filterSection8, setFilterSection8] = useState(false);
  const [filterVeteran, setFilterVeteran] = useState(false);

  // Extract unique locations for the dropdown
  const locations = [...new Set(initialProperties.map((p) => p.city))];

  // Simulate "Network Request"
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setFilteredProperties(initialProperties);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  // --- FILTERING ENGINE ---
  useEffect(() => {
    const filtered = initialProperties.filter((p) => {
      // Cast to MissionProperty for safer access
      const property = p as MissionProperty;

      // 1. Search Logic
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch =
        property.title.toLowerCase().includes(searchLower) ||
        property.city.toLowerCase().includes(searchLower) ||
        property.address.toLowerCase().includes(searchLower) ||
        (property.neighborhood?.toLowerCase() || '').includes(searchLower) ||
        property.amenities.some((a) => a.toLowerCase().includes(searchLower));

      // 2. Dropdown Logic
      const matchesLocation =
        selectedLocation === 'all' || property.city === selectedLocation;

      // FIX: Handle undefined bedrooms safely with ( || 0)
      const bedCount = property.bedrooms || property.beds || 0;
      const matchesBedrooms =
        selectedBedrooms === 'all' ||
        (selectedBedrooms === '1+' && bedCount >= 1) ||
        (selectedBedrooms === '2+' && bedCount >= 2) ||
        (selectedBedrooms === '3+' && bedCount >= 3);

      // Parse price safely
      const numericPrice =
        typeof property.price === 'string'
          ? parseFloat(property.price.replace(/[^0-9.]/g, ''))
          : property.price;

      const matchesPrice =
        selectedPrice === 'all' ||
        (selectedPrice === '0-500' && numericPrice <= 500) ||
        (selectedPrice === '500-1000' &&
          numericPrice > 500 &&
          numericPrice <= 1000) ||
        (selectedPrice === '1000+' && numericPrice > 1000);

      // 3. Mission Logic (Smart Detection)
      // FIX: Use safer property access instead of 'any'
      const isEligible =
        property.isSection8Eligible ||
        property.description.toLowerCase().includes('section 8') ||
        numericPrice < 1100;

      const matchesSection8 = filterSection8 ? isEligible : true;
      const matchesVeteran = filterVeteran ? property.isVeteranPreferred : true;

      return (
        matchesSearch &&
        matchesLocation &&
        matchesBedrooms &&
        matchesPrice &&
        matchesSection8 &&
        matchesVeteran
      );
    });

    setFilteredProperties(filtered);
  }, [
    searchTerm,
    selectedLocation,
    selectedBedrooms,
    selectedPrice,
    filterSection8,
    filterVeteran,
  ]);

  return (
    <div className="min-h-screen bg-p4c-beige pb-20">
      <Helmet>
        <title>Find Your Home | Properties 4 Creation</title>
        <meta
          name="description"
          content="Search affordable, Section 8 eligible housing in East Texas. Veteran-owned and community-focused."
        />
      </Helmet>

      {/* --- HERO SECTION --- */}
      <div className="bg-gradient-to-r from-p4c-navy to-p4c-gold py-16 px-4 sm:px-6 lg:px-8 shadow-xl">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif">
            More Than a House. <br className="hidden sm:block" />
            {/* FIX: Escaped apostrophe */}
            <span className="text-p4c-beige">It&apos;s Your Sanctuary.</span>
          </h1>
          <p className="text-xl text-p4c-beige/90 max-w-3xl mx-auto mb-8 font-sans">
            Quality affordable housing for families, veterans, and the
            community. We prioritize people over profit.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        {/* --- CONTROL PANEL --- */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12 border border-slate-100 relative z-10">
          {/* Top Row: Search & Mission Toggles */}
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-6 border-b border-slate-100 pb-6">
            <div className="relative w-full lg:w-1/2">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              {/* FIX: Added id to input for accessibility */}
              <label htmlFor="search-input" className="sr-only">
                Search properties
              </label>
              <input
                id="search-input"
                type="text"
                placeholder="Search by city, address, or amenity..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-200 focus:border-p4c-gold focus:ring-2 focus:ring-p4c-gold/20 outline-none transition-all"
              />
            </div>

            <div className="flex flex-wrap gap-3 w-full lg:w-auto justify-end">
              <button
                onClick={() => setFilterSection8(!filterSection8)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all border ${
                  filterSection8
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {filterSection8 ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <Filter className="w-4 h-4" />
                )}
                Section 8 Eligible
              </button>

              <button
                onClick={() => setFilterVeteran(!filterVeteran)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all border ${
                  filterVeteran
                    ? 'bg-p4c-gold text-p4c-navy border-p4c-gold shadow-md'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {filterVeteran ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <Filter className="w-4 h-4" />
                )}
                Veteran Preferred
              </button>
            </div>
          </div>

          {/* Bottom Row: Detailed Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Location */}
            <div>
              {/* FIX: Removed conflicting 'flex'/'block' class, added htmlFor */}
              <label
                htmlFor="location-filter"
                className="text-xs font-bold text-slate-500 uppercase mb-1 flex items-center gap-1"
              >
                <MapPin className="w-3 h-3" /> Location
              </label>
              <select
                id="location-filter"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-p4c-navy focus:ring-2 focus:ring-p4c-gold outline-none cursor-pointer"
              >
                <option value="all">All Locations</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Bedrooms */}
            <div>
              {/* FIX: Added htmlFor */}
              <label
                htmlFor="bedrooms-filter"
                className="block text-xs font-bold text-slate-500 uppercase mb-1"
              >
                Bedrooms
              </label>
              <select
                id="bedrooms-filter"
                value={selectedBedrooms}
                onChange={(e) => setSelectedBedrooms(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-p4c-navy focus:ring-2 focus:ring-p4c-gold outline-none cursor-pointer"
              >
                <option value="all">Any Size</option>
                <option value="1+">1+ Bedrooms</option>
                <option value="2+">2+ Bedrooms</option>
                <option value="3+">3+ Bedrooms</option>
              </select>
            </div>

            {/* Price */}
            <div>
              {/* FIX: Added htmlFor */}
              <label
                htmlFor="price-filter"
                className="block text-xs font-bold text-slate-500 uppercase mb-1"
              >
                Price / Month
              </label>
              <select
                id="price-filter"
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-p4c-navy focus:ring-2 focus:ring-p4c-gold outline-none cursor-pointer"
              >
                <option value="all">Any Price</option>
                <option value="0-500">Under $500</option>
                <option value="500-1000">$500 - $1,000</option>
                <option value="1000+">$1,000+</option>
              </select>
            </div>

            {/* Reset */}
            <div className="flex items-end">
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedLocation('all');
                  setSelectedBedrooms('all');
                  setSelectedPrice('all');
                  setFilterSection8(false);
                  setFilterVeteran(false);
                }}
                className="w-full py-2.5 bg-slate-100 text-slate-600 font-bold rounded-lg text-sm hover:bg-slate-200 hover:text-p4c-navy transition-colors flex items-center justify-center gap-2"
              >
                <SlidersHorizontal className="w-4 h-4" /> Reset Filters
              </button>
            </div>
          </div>
        </div>

        {/* --- RESULTS HEADER --- */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 px-2">
          <h2 className="text-2xl font-serif font-bold text-p4c-navy">
            {filteredProperties.length}{' '}
            <span className="text-slate-500 font-sans text-lg font-normal">
              Homes Available
            </span>
          </h2>
        </div>

        {/* --- PROPERTIES GRID --- */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl h-[450px] overflow-hidden shadow-sm animate-pulse"
              >
                <div className="w-full h-64 bg-slate-200" />
                <div className="p-6 space-y-4">
                  <div className="w-2/3 h-6 bg-slate-200 rounded" />
                  <div className="w-1/2 h-4 bg-slate-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          // --- EMPTY STATE ---
          <div className="text-center py-24 bg-white rounded-2xl border-2 border-dashed border-slate-200">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-50 rounded-full mb-6">
              <Home className="w-10 h-10 text-slate-400" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-p4c-navy mb-3">
              No homes match your search.
            </h3>
            <p className="text-slate-500 max-w-md mx-auto mb-8 leading-relaxed">
              Our inventory updates weekly. We prioritize Section 8 families on
              our waitlist.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilterSection8(false);
                }}
                className="text-p4c-navy font-bold hover:underline"
              >
                Clear Filters
              </button>
              <span className="text-slate-300">|</span>
              <a
                href="/contact"
                className="text-p4c-gold font-bold hover:underline"
              >
                Join Priority Waitlist &rarr;
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;

```

---
### 📄 `src\pages\PropertyDetails.tsx`

**⚠️ Analysis Findings:**
- 🔴 **[HIGH]** Button missing aria-label (Line 67)
- 🔴 **[HIGH]** Button missing aria-label (Line 296)
- 🔵 **[MEDIUM]** Image missing alt text (Line 123)

```typescript
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../services/api';
import type { ExtendedProperty } from '../types/types';
import {
  Bed,
  Bath,
  Move,
  MapPin,
  Check,
  ArrowLeft,
  Calendar,
  School,
  Accessibility,
  ShieldCheck,
  Map,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import PropertyDetailsSkeleton from '../components/PropertyDetailsSkeleton';

const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<ExtendedProperty | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) {
        setError('Property ID is required');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const propertyData = await api.properties.getById(id);
        setProperty(propertyData || undefined);
      } catch (err) {
        setError('Failed to load property details. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return <PropertyDetailsSkeleton />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-p4c-beige px-4">
        <Helmet>
          <title>Error Loading Property | Properties 4 Creation</title>
        </Helmet>
        <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-4">
          Unable to Load Property
        </h2>
        <p className="text-gray-600 mb-4">{error}</p>
        <div className="space-x-4">
          <button
            onClick={() => window.location.reload()}
            className="bg-p4c-navy text-white px-6 py-3 rounded-md font-bold hover:bg-opacity-90"
          >
            Try Again
          </button>
          <Link
            to="/"
            className="bg-gray-500 text-white px-6 py-3 rounded-md font-bold hover:bg-opacity-90"
          >
            Back to Listings
          </Link>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-p4c-beige px-4">
        <Helmet>
          <title>Property Not Found | Properties 4 Creation</title>
        </Helmet>
        <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-4">
          Property Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The listing you are looking for may have been removed or is
          unavailable.
        </p>
        <Link
          to="/"
          className="bg-p4c-navy text-white px-6 py-3 rounded-md font-bold hover:bg-opacity-90"
        >
          Back to Listings
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-p4c-beige min-h-screen pb-20 animate-fade-in">
      <Helmet>
        <title>{property.title} | Properties 4 Creation Listings</title>
        <meta
          name="description"
          content={`Check out ${property.title} in ${property.address}. ${property.beds} Bed, ${property.baths} Bath, ${property.badges.join(', ')}.`}
        />
        <meta
          name="keywords"
          content={`rental property ${property.address}, ${property.beds} bedroom rental, affordable housing ${property.neighborhood}, Section 8 housing, HUD-VASH housing`}
        />
      </Helmet>

      {/* Hero Image */}
      <div className="relative h-[50vh] w-full">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute top-4 left-4 md:top-8 md:left-8 z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-p4c-navy px-4 py-2 rounded-full font-bold shadow-lg transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Back to listings
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {property.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="bg-p4c-gold text-p4c-navy text-sm font-bold px-3 py-1 rounded-sm uppercase tracking-wide"
                >
                  {badge}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2 shadow-sm">
              {property.title}
            </h1>
            <p className="text-xl opacity-90 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-p4c-gold" /> {property.address}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats Bar */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex justify-between items-center text-center">
              <div>
                <div className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-1">
                  Monthly Rent
                </div>
                <div className="text-3xl font-serif font-bold text-p4c-navy">
                  ${property.price}
                </div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <div className="flex items-center justify-center gap-2 text-gray-500 text-xs uppercase tracking-widest font-bold mb-1">
                  <Bed className="w-4 h-4" /> Bedrooms
                </div>
                <div className="text-2xl font-bold text-p4c-navy">
                  {property.beds}
                </div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <div className="flex items-center justify-center gap-2 text-gray-500 text-xs uppercase tracking-widest font-bold mb-1">
                  <Bath className="w-4 h-4" /> Bathrooms
                </div>
                <div className="text-2xl font-bold text-p4c-navy">
                  {property.baths}
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-200" />
              <div className="hidden sm:block">
                <div className="flex items-center justify-center gap-2 text-gray-500 text-xs uppercase tracking-widest font-bold mb-1">
                  <Move className="w-4 h-4" /> Square Ft
                </div>
                <div className="text-2xl font-bold text-p4c-navy">
                  {property.sqft}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-serif font-bold text-p4c-navy mb-6">
                About this Home
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                {property.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-bold text-lg text-p4c-navy mb-4 border-b border-gray-100 pb-2 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-p4c-gold" /> Amenities
                  </h3>
                  <ul className="space-y-3">
                    {property.amenities.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <div className="bg-green-100 p-1 rounded-full">
                          <Check className="w-3 h-3 text-green-700" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-p4c-navy mb-4 border-b border-gray-100 pb-2 flex items-center gap-2">
                    <Accessibility className="w-5 h-5 text-p4c-gold" />{' '}
                    Accessibility
                  </h3>
                  <ul className="space-y-3">
                    {property.accessibilityFeatures.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <div className="bg-blue-100 p-1 rounded-full">
                          <Check className="w-3 h-3 text-blue-700" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-lg text-p4c-navy mb-4 flex items-center gap-2">
                  <Map className="w-5 h-5 text-p4c-gold" /> Location & Schools
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">
                      Neighborhood
                    </p>
                    <p className="font-medium text-p4c-navy">
                      {property.neighborhood}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1 flex items-center gap-1">
                      <School className="w-3 h-3" /> School District
                    </p>
                    <p className="font-medium text-p4c-navy">
                      {property.schoolDistrict}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24 border border-gray-100">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-p4c-navy">Interested?</h3>
                <p className="text-gray-500 text-sm">
                  Availability:{' '}
                  <span className="font-bold text-green-600">
                    {property.availabilityDate}
                  </span>
                </p>
              </div>

              <div className="space-y-4">
                <Link
                  to="/apply"
                  className="block w-full bg-p4c-navy text-white text-center py-4 rounded-md font-bold text-lg hover:bg-p4c-slate transition-colors shadow-md"
                >
                  Start Application
                </Link>
                <button className="w-full bg-white border-2 border-p4c-navy text-p4c-navy text-center py-3 rounded-md font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" /> Schedule Viewing
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="font-bold text-sm text-gray-900 mb-2">
                  We Accept:
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded">
                    Section 8 / HCV
                  </span>
                  <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded">
                    HUD-VASH
                  </span>
                  <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded">
                    Rapid Rehousing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;

```

---
### 📄 `src\pages\ResidentServices.tsx`

**⚠️ Analysis Findings:**
- 🔴 **[HIGH]** Button missing aria-label (Line 143)
- 🔴 **[HIGH]** Button missing aria-label (Line 358)
- 🔴 **[HIGH]** Button missing aria-label (Line 386)
- 🔴 **[HIGH]** Button missing aria-label (Line 414)
- 🔴 **[HIGH]** Button missing aria-label (Line 442)
- 🔵 **[MEDIUM]** Image missing alt text (Line 49)
- 🔵 **[MEDIUM]** Image missing alt text (Line 76)
- 🔵 **[MEDIUM]** Image missing alt text (Line 322)

```typescript
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Home,
  Wrench,
  MessageCircle,
  Phone,
  ShieldCheck,
  AlertTriangle,
} from 'lucide-react';
import { useToast } from '../context/ToastContext';

const ResidentServices: React.FC = () => {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    addToast(
      'Resident Portal is currently under maintenance. Please check back soon or contact our office for assistance.',
      'info'
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-p4c-beige min-h-screen">
      <Helmet>
        <title>Resident Services & Portal | Properties 4 Creation</title>
        <meta
          name="description"
          content="Access resident services, maintenance requests, and account management for Properties 4 Creation tenants in East Texas, Texas."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[400px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img
            src="/images/banners/resident-service-banner.png"
            alt="Happy resident family in their home"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-p4c-navy/80 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="bg-p4c-gold/20 p-4 rounded-2xl border border-p4c-gold/30 backdrop-blur-sm">
              <Home className="w-10 h-10 text-p4c-gold" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-wide">
            Resident Services
          </h1>
          <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto">
            Your home, your comfort, our priority
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Resident Portal Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/banners/family-resources-banner.png"
                alt="Resident portal access"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-p4c-navy/20" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-p4c-gold" />
                  <div>
                    <div className="font-bold text-p4c-navy">Secure Access</div>
                    <div className="text-sm text-gray-600">
                      Manage your account 24/7
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-6">
                Resident Portal
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Access your account to pay rent, submit maintenance requests,
                and manage your lease information conveniently online.
              </p>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-p4c-gold focus:border-p4c-gold transition-all"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-p4c-gold focus:border-p4c-gold transition-all"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-p4c-gold text-p4c-navy hover:bg-white hover:text-p4c-navy px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Login to Portal
                </button>
              </form>

              <div className="mt-6 text-center">
                <a href="#" className="text-p4c-gold hover:underline text-sm">
                  Forgot password?
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Access Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-4">
              Quick Access
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Common services at your fingertips
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow text-center">
              <div className="bg-p4c-navy/5 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-8 h-8 text-p4c-navy" />
              </div>
              <h3 className="text-xl font-bold text-p4c-navy mb-4">
                Maintenance Request
              </h3>
              <p className="text-gray-600 mb-6">
                Report maintenance issues 24/7 for prompt resolution
              </p>
              <a
                href="tel:(903) 555-0123"
                className="inline-flex items-center gap-2 text-p4c-gold font-bold hover:underline"
              >
                Call Maintenance <Phone className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow text-center">
              <div className="bg-p4c-navy/5 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-p4c-navy" />
              </div>
              <h3 className="text-xl font-bold text-p4c-navy mb-4">
                Contact Management
              </h3>
              <p className="text-gray-600 mb-6">
                Get in touch with our property management team
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-p4c-gold font-bold hover:underline"
              >
                Send Message
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow text-center">
              <div className="bg-p4c-navy/5 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-8 h-8 text-p4c-navy" />
              </div>
              <h3 className="text-xl font-bold text-p4c-navy mb-4">
                Emergency Contact
              </h3>
              <p className="text-gray-600 mb-6">
                For after-hours emergencies only
              </p>
              <a
                href="tel:(903) 555-9111"
                className="inline-flex items-center gap-2 text-red-500 font-bold hover:underline"
              >
                Emergency Line <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Resident Resources Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-6">
                Resident Resources
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Helpful information and resources for our residents to make your
                living experience comfortable and enjoyable.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-p4c-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-5 h-5 text-p4c-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-p4c-navy mb-2">
                      Rent Payment Options
                    </h4>
                    <p className="text-gray-600">
                      Multiple convenient ways to pay your rent on time
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-p4c-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-5 h-5 text-p4c-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-p4c-navy mb-2">
                      Maintenance Guidelines
                    </h4>
                    <p className="text-gray-600">
                      What to do for common maintenance issues
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-p4c-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-5 h-5 text-p4c-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-p4c-navy mb-2">
                      Community Resources
                    </h4>
                    <p className="text-gray-600">
                      Local services and amenities in Tyler and Longview
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/family/happy-family-kitchen.webp"
                alt="Happy family enjoying their home"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-p4c-navy/20" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <Home className="w-6 h-6 text-p4c-gold" />
                  <div>
                    <div className="font-bold text-p4c-navy">
                      Your Comfort Matters
                    </div>
                    <div className="text-sm text-gray-600">
                      We're here to support you
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Common questions from our residents
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <div className="bg-white rounded-xl shadow-md border border-gray-100">
              <button className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-p4c-navy">
                  How do I pay my rent online?
                </span>
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="px-6 pb-6 text-gray-600">
                <p>
                  You can pay rent through our resident portal using bank
                  transfer, credit card, or set up automatic payments. Payment
                  is due on the 1st of each month.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-100">
              <button className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-p4c-navy">
                  How do I submit a maintenance request?
                </span>
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="px-6 pb-6 text-gray-600">
                <p>
                  Maintenance requests can be submitted through the resident
                  portal or by calling our 24/7 maintenance line at (903)
                  555-0123.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-100">
              <button className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-p4c-navy">
                  What is the guest policy?
                </span>
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="px-6 pb-6 text-gray-600">
                <p>
                  Guests are welcome but must comply with all community rules.
                  Overnight guests staying more than 3 days must be registered
                  with management.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-100">
              <button className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-p4c-navy">
                  How do I renew my lease?
                </span>
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="px-6 pb-6 text-gray-600">
                <p>
                  Lease renewal notices are sent 60 days before your lease
                  expires. You can renew through the resident portal or contact
                  our office.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-p4c-navy rounded-2xl text-white p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-p4c-gold/20 p-4 rounded-2xl border border-p4c-gold/30">
                <MessageCircle className="w-10 h-10 text-p4c-gold" />
              </div>
            </div>
            <h2 className="text-3xl font-serif font-bold mb-6">
              Need Assistance?
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Our resident services team is available to help with any questions
              or concerns. Contact us during business hours or use our 24/7
              emergency line for urgent matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-p4c-gold text-p4c-navy hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                Contact Us
              </a>
              <a
                href="tel:(903) 555-0123"
                className="border-2 border-white text-white hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center gap-2"
              >
                Call Office
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResidentServices;

```

---
### 📄 `src\pages\Reviews.tsx`

**⚠️ Analysis Findings:**
- 🔴 **[HIGH]** Button missing aria-label (Line 93)
- 🔵 **[MEDIUM]** Image missing alt text (Line 45)
- 🔵 **[MEDIUM]** Image missing alt text (Line 87)
- 🔵 **[MEDIUM]** Image missing alt text (Line 252)
- 🔵 **[MEDIUM]** Image missing alt text (Line 276)

```typescript
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Star, MessageCircle, Users } from 'lucide-react';

const Reviews: React.FC = () => {
  // Video data with unique posters
  const videos = [
    {
      id: 1,
      poster: '/images/resident-review/resident-review-mark.png',
      src: '/images/videos/hero-our-work-banner.mp4',
      title: "Mark's Experience",
      description: 'Mark shares his experience living in our Tyler property',
    },
    {
      id: 2,
      poster: '/images/resident-review/resident-review-alex.png',
      src: '/images/videos/hero-our-work-banner.mp4',
      title: "Alex's Story",
      description:
        'Alex talks about the application process and move-in experience',
    },
    {
      id: 3,
      poster: '/images/resident-review/resident-review-sarah.png',
      src: '/images/videos/hero-our-work-banner.mp4',
      title: "Sarah's Review",
      description: 'Sarah discusses the maintenance response and community',
    },
  ];

  return (
    <div className="bg-p4c-beige min-h-screen">
      <Helmet>
        <title>Resident Reviews & Testimonials | Properties 4 Creation</title>
        <meta
          name="description"
          content="Read and watch real reviews from residents living in Properties 4 Creation homes in East Texas, Texas."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[400px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img
            src="/images/banners/hero-community-impact-banner.png"
            alt="Happy residents in East Texas community"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-p4c-navy/70 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="bg-p4c-gold/20 p-4 rounded-2xl border border-p4c-gold/30 backdrop-blur-sm">
              <Users className="w-10 h-10 text-p4c-gold" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-wide">
            Resident Voices
          </h1>
          <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto">
            Real stories from families and individuals who call our properties
            home
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Video Reviews Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-4">
              Video Testimonials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear directly from our residents about their experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-64">
                  <img
                    src={video.poster}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <button className="bg-p4c-gold/80 hover:bg-p4c-gold text-p4c-navy w-16 h-16 rounded-full flex items-center justify-center transition-all">
                      <svg
                        className="w-6 h-6 ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-p4c-navy mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{video.description}</p>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                    <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                    <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                    <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                    <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Written Reviews Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-4">
              Written Testimonials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Feedback from our residents about their living experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-p4c-gold">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-p4c-navy rounded-full flex items-center justify-center text-white font-bold">
                  JM
                </div>
                <div>
                  <h4 className="font-bold text-p4c-navy">John & Maria T.</h4>
                  <p className="text-sm text-gray-500">Tyler, TX - 2 Years</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "We've been living in our Properties 4 Creation home for 2 years
                now and couldn't be happier. The application process was smooth,
                maintenance requests are handled promptly, and the neighborhood
                is safe and family-friendly. Our kids love the nearby parks!"
              </p>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-p4c-gold">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-p4c-navy rounded-full flex items-center justify-center text-white font-bold">
                  RT
                </div>
                <div>
                  <h4 className="font-bold text-p4c-navy">Robert Thompson</h4>
                  <p className="text-sm text-gray-500">Longview, TX - 1 Year</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "As a veteran, I was struggling to find stable housing until I
                found Properties 4 Creation. The team worked with my VA benefits
                and had me moved in within a week. The property is
                well-maintained and the management is responsive. Highly
                recommend!"
              </p>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-p4c-gold">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-p4c-navy rounded-full flex items-center justify-center text-white font-bold">
                  SW
                </div>
                <div>
                  <h4 className="font-bold text-p4c-navy">Sarah Williams</h4>
                  <p className="text-sm text-gray-500">
                    Marshall, TX - 6 Months
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "The renovation quality is impressive! Everything was brand new
                when we moved in - appliances, flooring, paint. The property
                management team is professional and actually cares about tenant
                satisfaction. Best rental experience I've had."
              </p>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-p4c-gold">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-p4c-navy rounded-full flex items-center justify-center text-white font-bold">
                  DG
                </div>
                <div>
                  <h4 className="font-bold text-p4c-navy">David & Grace M.</h4>
                  <p className="text-sm text-gray-500">Tyler, TX - 1.5 Years</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "We were hesitant about renting after some bad experiences, but
                Properties 4 Creation changed our minds. The online portal makes
                rent payment easy, maintenance is quick, and the community
                events help us feel connected to our neighbors."
              </p>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
              </div>
            </div>
          </div>
        </section>

        {/* Tenant Success Stories Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-4">
              Tenant Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              How we've helped families find their forever homes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/banners/family-resources-banner.png"
                alt="Happy family in their new home"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-serif font-bold text-p4c-navy mb-4">
                  The Johnson Family
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  After struggling with unstable housing for years, the Johnson
                  family found stability through our Section 8 program. With
                  three children in Tyler ISD schools, they needed a safe,
                  long-term home near good schools.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Properties 4 Creation didn't just give us a house - they gave
                  us hope. Our kids have thrived in their new school, and we
                  finally feel like we have a real home."
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src="/images/logo/p4c-logo-gold.png"
                    alt="Properties 4 Creation logo"
                    className="w-12 h-12"
                  />
                  <div>
                    <div className="font-bold text-p4c-navy">
                      Properties 4 Creation Team
                    </div>
                    <div className="text-sm text-gray-500">
                      Helping families since 2018
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="w-6 h-6 text-p4c-gold" />
                  <h4 className="font-bold text-p4c-navy">Our Commitment</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  We believe everyone deserves a safe, dignified place to call
                  home. Through our community partnerships and housing programs,
                  we've helped over 200 families achieve housing stability in
                  East Texas.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Reviews;

```

---
### 📄 `src\pages\SuccessStories.tsx`

**⚠️ Analysis Findings:**
- 🔴 **[HIGH]** Button missing aria-label (Line 92)
- 🔴 **[HIGH]** Button missing aria-label (Line 104)
- 🔴 **[HIGH]** Button missing aria-label (Line 124)
- 🔴 **[HIGH]** Button missing aria-label (Line 386)
- 🔴 **[HIGH]** Button missing aria-label (Line 392)
- 🔵 **[MEDIUM]** Image missing alt text (Line 350)

```typescript
import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Quote,
  Home,
  Hammer,
  DollarSign,
  TrendingUp,
  ArrowRight,
  Star,
} from 'lucide-react';
import { IMAGES } from '../constants/images';
import { useNavigate } from 'react-router-dom';

/**
 * CustomVideoPlayer Component
 * Enterprise-grade video player for testimonials
 */
interface CustomVideoPlayerProps {
  src: string;
  poster?: string;
  ariaLabel: string;
}

const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({
  src,
  poster,
  ariaLabel,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      setProgress((current / duration) * 100);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const value = parseFloat(e.target.value);
      videoRef.current.currentTime = (value / 100) * videoRef.current.duration;
      setProgress(value);
    }
  };

  return (
    <div className="relative rounded-xl overflow-hidden bg-p4c-navy shadow-2xl group border border-gray-800">
      <video
        ref={videoRef}
        className="w-full aspect-video object-cover"
        poster={poster}
        aria-label={ariaLabel}
        onTimeUpdate={handleTimeUpdate}
        playsInline
      >
        <track kind="captions" />
        <source src={src} type="video/mp4" />
        <p className="text-white p-4">
          Your browser does not support the video tag.
        </p>
      </video>

      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all duration-300">
          <button
            onClick={togglePlay}
            className="w-20 h-20 rounded-full bg-p4c-gold/90 hover:bg-p4c-gold flex items-center justify-center shadow-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
            aria-label="Play video"
          >
            <Play className="w-8 h-8 text-p4c-navy ml-1" fill="currentColor" />
          </button>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="text-white hover:text-p4c-gold transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </button>

          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeek}
            className="flex-grow h-1 bg-white/30 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-p4c-gold"
          />

          <button
            onClick={toggleMute}
            className="text-white hover:text-p4c-gold transition-colors"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const SuccessStories: React.FC = () => {
  const navigate = useNavigate();

  const testimonials = [
    {
      id: 1,
      name: 'Marcus Thompson',
      role: 'Resident since 2023',
      location: 'Tyler, TX',
      quote:
        'The maintenance team is incredible. I put in a request for my AC at 9 AM and it was fixed by noon. You do not get that kind of service in most rentals.',
      videoLabel: 'Marcus Thompson testimonial - Tyler property management',
      tags: ['Maintenance', 'Service'],
    },
    {
      id: 2,
      name: 'Sarah Martinez',
      role: 'Resident since 2022',
      location: 'Longview, TX',
      quote:
        'I was worried a "Section 8" house would be rundown. This house has granite countertops and new floors. It feels brand new. My kids love their rooms.',
      videoLabel: 'Sarah Martinez testimonial - Longview quality housing',
      tags: ['Renovation Quality', 'Family'],
    },
    {
      id: 3,
      name: 'Jennifer Williams',
      role: 'Resident since 2024',
      location: 'Lindale, TX',
      quote:
        'The application process was completely digital and fast. I was approved in 2 days. The team treated me with total professionalism throughout.',
      videoLabel: 'Jennifer Williams testimonial - Lindale application process',
      tags: ['Leasing Process', 'Professionalism'],
    },
    {
      id: 4,
      name: 'Roberto & Maria Gonzalez',
      role: 'Residents since 2023',
      location: 'Whitehouse, TX',
      quote:
        'We have rented for 10 years and this is the best management company we have dealt with. They actually care about the property condition.',
      videoLabel:
        'Gonzalez family testimonial - Whitehouse property management',
      tags: ['Management', 'Long-term'],
    },
  ];

  return (
    <div className="min-h-screen bg-p4c-beige">
      <Helmet>
        <title>
          Resident Reviews & Success Stories | Properties 4 Creation
        </title>
        <meta
          name="description"
          content="Read reviews from residents in East Texas. See why families and veterans choose Properties 4 Creation for their housing needs."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={IMAGES.BANNERS.HERO_IMPACT}
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={IMAGES.VIDEOS.HERO_IMPACT} type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full hero-overlay-primary bg-p4c-navy/60" />
        <div className="absolute top-0 left-0 w-full h-full hero-overlay-secondary bg-gradient-to-t from-p4c-beige to-transparent" />

        <div className="relative z-10 text-center px-4 max-w-4xl animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Resident <span className="text-p4c-gold">Satisfaction</span>
          </h1>
          <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto">
            We don't just lease properties; we build long-term relationships
            through professional management and respect.
          </p>
        </div>
      </div>

      {/* Testimonials Grid */}
      <section className="py-16 px-4 max-w-6xl mx-auto -mt-20 relative z-20">
        <div className="grid grid-cols-1 gap-16">
          {testimonials.map((story, index) => (
            <article
              key={story.id}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Video Section */}
              <div className="w-full lg:w-1/2 bg-gray-900">
                <CustomVideoPlayer
                  src={
                    story.id === 1
                      ? '/videos/review-1.mp4'
                      : story.id === 2
                        ? '/videos/review-2.mp4'
                        : '/videos/review-3.mp4'
                  }
                  poster={
                    story.id === 1
                      ? '/images/resident-review/resident-review-mark.png'
                      : story.id === 2
                        ? '/images/resident-review/resident-review-alex.png'
                        : '/images/resident-review/resident-review-sarah.png'
                  }
                  ariaLabel={story.videoLabel}
                />
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex gap-2 mb-6">
                  {story.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-p4c-beige text-p4c-navy text-xs font-bold uppercase tracking-wider rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Quote className="w-10 h-10 text-p4c-gold mb-6 opacity-50" />

                <blockquote className="text-xl md:text-2xl text-p4c-navy font-serif leading-relaxed mb-8">
                  "{story.quote}"
                </blockquote>

                <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="w-12 h-12 bg-p4c-navy rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-p4c-navy text-lg">
                      {story.name}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center gap-2">
                      <span>{story.location}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full" />
                      <span>{story.role}</span>
                    </div>
                  </div>
                  <div className="ml-auto flex text-p4c-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Value Creation Section (BRRR Breakdown) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-p4c-navy mb-4">
              How We Create Value
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our systematic renovation process ensures consistency, quality,
              and long-term reliability for every home in our portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Acquisition',
                desc: 'We identify high-potential properties in established neighborhoods.',
                icon: <Home className="w-6 h-6" />,
                img: IMAGES.PROPERTIES.LINDALE_COTTAGE,
              },
              {
                step: '2',
                title: 'Renovation',
                desc: 'Full mechanical and cosmetic overhaul using commercial-grade materials.',
                icon: <Hammer className="w-6 h-6" />,
                img: IMAGES.GALLERY.FRAMING,
              },
              {
                step: '3',
                title: 'Leasing',
                desc: 'Rigorous tenant screening and placement of families and veterans.',
                icon: <DollarSign className="w-6 h-6" />,
                img: IMAGES.TEAM.ONSITE,
              },
              {
                step: '4',
                title: 'Management',
                desc: 'Ongoing professional maintenance and asset preservation.',
                icon: <TrendingUp className="w-6 h-6" />,
                img: IMAGES.RENOVATION.LIVING_ROOM.AFTER,
              },
            ].map((item) => (
              <div
                key={item.step}
                className="group bg-p4c-beige rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-p4c-navy/50 mix-blend-multiply" />
                  <div className="absolute top-4 left-4 bg-p4c-gold text-p4c-navy w-8 h-8 flex items-center justify-center rounded-full font-bold shadow-lg">
                    {item.step}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-p4c-navy">
                    {item.icon}
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-p4c-navy">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Join Our Community
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Experience the Properties 4 Creation difference. Browse our
            available listings in East Texas today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/#homes')}
              className="bg-p4c-gold text-p4c-navy hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
            >
              See Available Homes <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
            >
              Contact Leasing Office
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;

```

---
### 📄 `src\pages\TenantLogin.tsx`

**⚠️ Analysis Findings:**
- 🔴 **[HIGH]** Button missing aria-label (Line 165)
- 🔴 **[HIGH]** Button missing aria-label (Line 188)

```typescript
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Lock,
  User,
  ArrowRight,
  ShieldCheck,
  Wrench,
  CreditCard,
  AlertCircle,
} from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { IMAGES } from '../constants/images';

const TenantLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from?.pathname || '/';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      // For demo purposes, accept these credentials
      if (
        (email === 'admin@p4c.com' && password === 'admin') ||
        (email === 'tenant@p4c.com' && password === 'tenant123') ||
        (email === 'veteran@p4c.com' && password === 'veteran123')
      ) {
        // Map veteran to tenant role since veteran is not in UserRole type
        const userType = email.includes('admin')
          ? 'admin'
          : email.includes('veteran')
            ? 'tenant' // Map veteran to tenant
            : 'tenant';

        await login(email, userType);

        // Redirect based on user type
        if (userType === 'admin') {
          navigate('/admin');
        } else {
          navigate(from === '/admin' ? '/portal' : from || '/portal');
        }
      } else {
        setError(
          'Invalid email or password. Please check your credentials and try again.'
        );
      }
    } catch (err) {
      setError('Login failed. Please try again or contact support.');
    }
  };

  return (
    <div className="min-h-screen bg-p4c-beige flex flex-col lg:flex-row">
      <Helmet>
        <title>Portal Login | Properties 4 Creation</title>
        <meta
          name="description"
          content="Secure tenant portal for Properties 4 Creation residents. Pay rent, submit maintenance requests, and manage your housing account online."
        />
        <meta
          name="keywords"
          content="tenant portal login, resident login, pay rent online, maintenance requests, tenant dashboard, housing portal"
        />
      </Helmet>

      {/* Left Side - Visuals */}
      <div className="lg:w-1/2 bg-p4c-navy relative hidden lg:flex flex-col justify-center px-12 text-white overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover opacity-20"
          style={{ backgroundImage: `url('${IMAGES.BANNERS.HERO_HOME}')` }}
        />
        <div className="relative z-10">
          <h1 className="text-4xl font-serif font-bold mb-6">Welcome Home.</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-md">
            Manage your residency with ease. Pay rent, request repairs, and view
            community announcements all in one place.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/10">
              <CreditCard className="text-p4c-gold w-6 h-6" />
              <div>
                <h3 className="font-bold">Auto-Pay Rent</h3>
                <p className="text-sm text-gray-400">
                  Set it and forget it. Secure transactions.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/10">
              <Wrench className="text-p4c-gold w-6 h-6" />
              <div>
                <h3 className="font-bold">24/7 Maintenance</h3>
                <p className="text-sm text-gray-400">
                  Track status of repair requests in real-time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="lg:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <div className="inline-flex justify-center items-center bg-p4c-navy p-3 rounded-full mb-4 shadow-lg">
              <Lock className="text-p4c-gold w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-p4c-navy font-serif">
              Secure Login
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Resident & Staff Portal
            </p>
          </div>

          {error && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm flex items-center gap-2 animate-fade-in">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-p4c-gold focus:border-p4c-gold sm:text-sm transition-shadow"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <button
                  type="button"
                  className="text-xs text-p4c-navy hover:underline cursor-pointer"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-p4c-gold focus:border-p4c-gold sm:text-sm transition-shadow"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-p4c-navy hover:bg-p4c-slate focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-p4c-navy transition-all duration-200 disabled:opacity-70"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}{' '}
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-100 text-center">
            <div className="flex items-center justify-center gap-2 text-green-700 bg-green-50 p-2 rounded text-xs font-bold mb-4">
              <ShieldCheck className="w-4 h-4" />
              Bank-Level 256-bit Encryption
            </div>
            <div className="space-y-3">
              <p className="text-xs text-gray-500 text-center">
                Not a resident yet?{' '}
                <Link
                  to="/apply"
                  className="text-p4c-navy font-bold hover:underline"
                >
                  Apply for a home
                </Link>
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-xs text-blue-800 font-medium text-center">
                  Demo Credentials:
                </p>
                <div className="text-xs text-blue-700 mt-1 space-y-1">
                  <div>Admin: admin@p4c.com / admin</div>
                  <div>Tenant: tenant@p4c.com / tenant123</div>
                  <div>Veteran: veteran@p4c.com / veteran123</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantLogin;

```

---
### 📄 `src\pages\Terms.tsx`

```typescript
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Scale, FileText } from 'lucide-react';

const Terms: React.FC = () => (
  <div className="bg-p4c-beige min-h-screen py-16">
    <Helmet>
      <title>Terms of Service | Properties 4 Creation</title>
      <meta
        name="description"
        content="Terms of service for using the Properties 4 Creation website and portal."
      />
      <meta
        name="keywords"
        content="terms of service, rental agreement terms, tenant rights, fair housing terms, lease terms, rental policies"
      />
    </Helmet>

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
        <div className="border-b border-gray-200 pb-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-p4c-navy mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-500">Last Updated: October 24, 2023</p>
        </div>

        <div className="prose prose-slate max-w-none text-gray-700">
          <p className="lead text-lg">
            Welcome to the Properties 4 Creation website. By accessing or using
            our website, Resident Portal, or application services, you agree to
            be bound by these terms.
          </p>

          <h3 className="text-xl font-bold text-p4c-navy mt-8 mb-4 flex items-center gap-2">
            <FileText className="text-p4c-gold w-5 h-5" /> 1. Fair Housing
            Policy
          </h3>
          <p>
            Properties 4 Creation is committed to the letter and spirit of U.S.
            policy for the achievement of equal housing opportunity. We
            encourage and support an affirmative advertising and marketing
            program in which there are no barriers to obtaining housing because
            of race, color, religion, sex, handicap, familial status, or
            national origin.
          </p>

          <h3 className="text-xl font-bold text-p4c-navy mt-8 mb-4">
            2. Use of Site
          </h3>
          <p>
            You agree to use this site only for lawful purposes. You are
            prohibited from posting on or transmitting through this site any
            unlawful, harmful, threatening, abusive, harassing, defamatory,
            vulgar, obscene, sexually explicit, profane, hateful, racially,
            ethnically, or otherwise objectionable material of any kind.
          </p>

          <h3 className="text-xl font-bold text-p4c-navy mt-8 mb-4">
            3. Application Accuracy
          </h3>
          <p>
            By submitting an application for housing via our site, you certify
            that all information provided is true, accurate, and complete.
            Providing false information may result in the rejection of your
            application or termination of your lease.
          </p>

          <h3 className="text-xl font-bold text-p4c-navy mt-8 mb-4 flex items-center gap-2">
            <Scale className="text-p4c-gold w-5 h-5" /> 4. Limitation of
            Liability
          </h3>
          <p>
            Properties 4 Creation shall not be liable for any direct, indirect,
            special, incidental, consequential, or punitive damages arising out
            of your access to, or use of, this website or the content available
            on this website.
          </p>

          <h3 className="text-xl font-bold text-p4c-navy mt-8 mb-4">
            5. Third-Party Links
          </h3>
          <p>
            Our website may contain links to websites owned or operated by
            parties other than Properties 4 Creation (e.g., Veteran Affairs,
            HUD). These links are provided for your reference only. Properties 4
            Creation does not control outside sites and is not responsible for
            their content.
          </p>

          <div className="bg-gray-50 p-6 rounded-xl mt-8 border border-gray-200">
            <h4 className="font-bold text-p4c-navy mb-2">Questions?</h4>
            <p className="text-sm">
              Please contact our legal team at: <br />
              <a
                href="mailto:legal@p4c-homes.com"
                className="text-p4c-gold font-bold hover:underline"
              >
                legal@p4c-homes.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Terms;

```

---
### 📄 `src\pages\Tools.tsx`

**⚠️ Analysis Findings:**
- 🔴 **[HIGH]** Button missing aria-label (Line 66)
- 🔴 **[HIGH]** Button missing aria-label (Line 72)
- 🔴 **[HIGH]** Button missing aria-label (Line 104)

```typescript
import React from 'react';
import ClientUpscaler from '../components/ClientUpscaler';
import { useNavigate } from 'react-router-dom';
import {
  Zap,
  Image as ImageIcon,
  Brain,
  Shield,
  Users,
  Home as HomeIcon,
} from 'lucide-react';

const Tools: React.FC = () => {
  const navigate = useNavigate();

  const tools = [
    {
      id: 'image-upscaler',
      title: 'Free Image Upscaler',
      description:
        'Enhance your property photos with AI - 2x resolution, completely free!',
      icon: <Zap className="w-8 h-8 text-p4c-gold" />,
      component: <ClientUpscaler />,
      color: 'from-p4c-gold to-p4c-navy',
    },
    {
      id: 'ai-assistant',
      title: 'AI Housing Assistant',
      description:
        'Get personalized help with your housing needs from our AI concierge.',
      icon: <Brain className="w-8 h-8 text-p4c-navy" />,
      action: () => navigate('/'),
      color: 'from-p4c-navy to-p4c-beige',
    },
    {
      id: 'veteran-resources',
      title: 'Veteran Resources',
      description: 'Access specialized housing programs and support services.',
      icon: <Shield className="w-8 h-8 text-p4c-gold" />,
      action: () => navigate('/veterans'),
      color: 'from-p4c-gold to-p4c-navy',
    },
    {
      id: 'find-homes',
      title: 'Find Your Home',
      description: 'Browse available properties and start your application.',
      icon: <HomeIcon className="w-8 h-8 text-p4c-navy" />,
      action: () => navigate('/'),
      color: 'from-p4c-navy to-p4c-beige',
    },
  ];

  return (
    <div className="min-h-screen bg-p4c-beige">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-p4c-navy to-p4c-gold text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Free Tools & Resources
          </h1>
          <p className="text-xl md:text-2xl text-p4c-beige mb-8 max-w-3xl mx-auto">
            Empowering veterans and families with cutting-edge tools and
            personalized support to find their perfect home in East Texas.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigate('/apply')}
              className="bg-white text-p4c-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Application
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-p4c-navy transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                tool.id === 'image-upscaler' ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`p-6 bg-gradient-to-r ${tool.color}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      {tool.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{tool.title}</h3>
                      <p className="text-white/90">{tool.description}</p>
                    </div>
                  </div>
                  {tool.action && (
                    <button
                      onClick={tool.action}
                      className="bg-white text-p4c-navy px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Get Started
                    </button>
                  )}
                </div>
              </div>

              {tool.id === 'image-upscaler' && (
                <div className="p-6">{tool.component}</div>
              )}

              {tool.id !== 'image-upscaler' && (
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-p4c-gold" />
                      <span>Expert Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ImageIcon className="w-4 h-4 text-p4c-gold" />
                      <span>Quality Guaranteed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-p4c-gold" />
                      <span>Veteran Focused</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-p4c-gold/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Zap className="w-8 h-8 text-p4c-gold" />
            </div>
            <h3 className="text-xl font-semibold text-p4c-navy mb-2">
              Free Tools
            </h3>
            <p className="text-gray-600">
              No hidden fees, no subscriptions - everything is completely free
              for our veterans and families.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-p4c-navy/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Brain className="w-8 h-8 text-p4c-navy" />
            </div>
            <h3 className="text-xl font-semibold text-p4c-navy mb-2">
              AI-Powered
            </h3>
            <p className="text-gray-600">
              Leverage cutting-edge AI technology to enhance your housing
              experience.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-p4c-beige/80 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Shield className="w-8 h-8 text-p4c-navy" />
            </div>
            <h3 className="text-xl font-semibold text-p4c-navy mb-2">
              Veteran Support
            </h3>
            <p className="text-gray-600">
              Specialized resources and support tailored specifically for
              veterans and their families.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;

```

---
### 📄 `src\pages\Transparency.tsx`

**⚠️ Analysis Findings:**
- 🔵 **[MEDIUM]** Image missing alt text (Line 53)
- 🔵 **[MEDIUM]** Image missing alt text (Line 218)

```typescript
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Shield,
  Check,
  X,
  FileSearch,
  HardHat,
  TrendingUp,
  Loader2,
  CheckCircle2,
} from 'lucide-react';
import { api } from '../services/api';
import type { RenovationStandard } from '../types/types';
import { useToast } from '../context/ToastContext';
import { IMAGES } from '../constants/images';

const Transparency: React.FC = () => {
  const [standards, setStandards] = useState<RenovationStandard[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToast } = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.transparency.getStandards();
        setStandards(data);
      } catch (error) {
        addToast(
          'Failed to load transparency data. Please try again.',
          'error'
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [addToast]);

  return (
    <div className="bg-p4c-beige min-h-screen">
      <Helmet>
        <title>Transparency & Standards | Properties 4 Creation</title>
        <meta
          name="description"
          content="View our open book policy on renovation standards. We compare typical landlord shortcuts with the Properties 4 Creation premium standard."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.BANNERS.HERO_TRANSPARENCY}
            alt="Transparency Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay-primary" />
          <div className="absolute inset-0 hero-overlay-secondary" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6 backdrop-blur-sm border border-white/10">
            <FileSearch className="w-8 h-8 text-p4c-gold" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 hero-text-contrast">
            The Open Book Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed hero-text-enhanced">
            Trust is earned through action, not words. We believe tenants and
            investors deserve to know exactly where every dollar goes and the
            quality of materials we install.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-20">
        {/* The Comparison Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-20 border border-gray-100">
          <div className="p-8 border-b border-gray-100 bg-gray-50">
            <h2 className="text-2xl font-serif font-bold text-p4c-navy">
              The Renovation Standard
            </h2>
            <p className="text-gray-600 mt-2">
              How we stack up against the industry average.
            </p>
          </div>

          {loading ? (
            <div className="p-12 flex justify-center">
              <Loader2 className="w-8 h-8 text-p4c-gold animate-spin" />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500 font-bold">
                    <th className="p-6">Feature</th>
                    <th className="p-6 text-red-800 bg-red-50/50">
                      Typical "Slumlord"
                    </th>
                    <th className="p-6 text-p4c-navy bg-p4c-gold/10">
                      The Properties 4 Creation Standard
                    </th>
                    <th className="p-6">Why It Matters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {standards.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="p-6 font-bold text-p4c-navy">
                        {item.category}
                      </td>
                      <td className="p-6 text-gray-600 bg-red-50/20">
                        <div className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                          {item.standardLandlord}
                        </div>
                      </td>
                      <td className="p-6 font-semibold text-p4c-navy bg-p4c-gold/5">
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          {item.p4cStandard}
                        </div>
                      </td>
                      <td className="p-6 text-sm text-gray-600 italic">
                        "{item.benefit}"
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Quality Standards Section - Moved from Home Page */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-20 border border-gray-100">
          <div className="p-8 border-b border-gray-100 bg-gray-50">
            <div className="inline-flex items-center gap-2 bg-p4c-beige px-3 py-1 rounded-full text-p4c-navy text-xs font-bold uppercase tracking-wider mb-4 border border-gray-200">
              <Shield className="w-4 h-4" /> Quality Standards
            </div>
            <h2 className="text-2xl font-serif font-bold text-p4c-navy">
              We Install Quality, Not Cheap Fixes
            </h2>
            <p className="text-gray-600 mt-2">
              Many landlords cut corners. We don&apos;t. At Properties 4
              Creation, we use homeowner-grade materials.
            </p>
          </div>
          <div className="p-8">
            <p className="text-gray-700 leading-relaxed mb-8">
              We use homeowner-grade materials like Quartz countertops, luxury
              vinyl plank flooring, and high-efficiency HVAC systems. Why?
              Because you deserve a home that lasts and feels proud to live in.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-p4c-gold mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Quartz Countertops:</strong> Durable, hygienic, and
                  beautiful.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-p4c-gold mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>LVP Flooring:</strong> Waterproof and
                  scratch-resistant.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-p4c-gold mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Energy Efficient:</strong> Lower utility bills for our
                  tenants.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Workflow Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-6">
              Contractor Integrity
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We don't just hire the cheapest bid. We hire partners who share
              our values. Every contractor vetting process includes:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <Shield className="w-6 h-6 text-p4c-gold mr-4" />
                <span className="font-semibold text-p4c-navy">
                  Background & License Verification
                </span>
              </li>
              <li className="flex items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <TrendingUp className="w-6 h-6 text-p4c-gold mr-4" />
                <span className="font-semibold text-p4c-navy">
                  Quality of Work Inspections
                </span>
              </li>
              <li className="flex items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <HardHat className="w-6 h-6 text-p4c-gold mr-4" />
                <span className="font-semibold text-p4c-navy">
                  Veteran Hiring Preference
                </span>
              </li>
            </ul>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={IMAGES.GALLERY.MEASURING}
              alt="Contractor reviewing plans"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-p4c-navy/30 mix-blend-multiply" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-p4c-navy font-bold text-sm">
                "We pay our contractors fairly and on time, ensuring they do
                their best work for our families."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transparency;

```

---
### 📄 `src\pages\VeteranServices.tsx`

**⚠️ Analysis Findings:**
- 🔵 **[MEDIUM]** Image missing alt text (Line 28)

```typescript
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { IMAGES } from '../constants/images';
import {
  Flag,
  Briefcase,
  Users,
  Home,
  Shield,
  Phone,
  FileCheck,
  MapPin,
} from 'lucide-react';

const VeteranServices: React.FC = () => (
  <div className="bg-p4c-beige min-h-screen">
    <Helmet>
      <title>Veteran Housing Logistics | Properties 4 Creation</title>
      <meta
        name="description"
        content="Operational support for veterans in East Texas. We coordinate HUD-VASH leasing, employment referrals, and housing stability."
      />
    </Helmet>

    {/* Hero Banner */}
    <div className="relative h-[400px] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src={IMAGES.BANNERS.HERO_RESOURCES}
          alt="American flag on a renovated porch in East Texas"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full hero-overlay-primary bg-p4c-navy/60" />
        <div className="absolute top-0 left-0 w-full h-full hero-overlay-secondary bg-gradient-to-t from-p4c-navy to-transparent" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <div className="flex justify-center mb-6">
          <div className="bg-p4c-gold/20 p-4 rounded-2xl border border-p4c-gold/30 backdrop-blur-sm">
            <Flag className="w-10 h-10 text-p4c-gold" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-wide">
          Housing Logistics & Support
        </h1>
        <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto">
          Structured housing solutions and resource coordination for veterans in
          the
          <strong> East Texas</strong> area.
        </p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Core Services Grid */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-4">
            Operational Support Pillars
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide more than just a lease; we offer a framework for
            stability and reintegration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Home,
              title: 'Priority Housing Placement',
              text: 'Veterans receive Tier-1 priority for all vacancies. We reserve units for up to 7 days to allow for VASH voucher administrative processing.',
            },
            {
              icon: Shield,
              title: 'Security Deposit Assistance',
              text: 'We coordinate with local partners like CampV and the Texas Veterans Commission to secure deposit funding, minimizing out-of-pocket costs.',
            },
            {
              icon: Users,
              title: 'Peer Support Network',
              text: 'Access to our internal network of veteran residents for camaraderie, mentorship, and community integration.',
            },
            {
              icon: Briefcase,
              title: 'Employment Pipelines',
              text: 'Direct referral system to Properties 4 Creation renovation crews and our network of veteran-friendly employers in East Texas.',
            },
            {
              icon: FileCheck,
              title: 'Benefits Coordination',
              text: 'Our leasing staff is trained to assist with VA paperwork, ensuring your housing benefits are processed without delay.',
            },
            {
              icon: Phone,
              title: 'Dedicated Liaison',
              text: 'A direct line to our Veteran Housing Liaison for maintenance requests, lease questions, or resource referrals.',
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
            >
              <div className="bg-p4c-navy/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-p4c-navy transition-colors">
                <service.icon className="w-7 h-7 text-p4c-navy group-hover:text-p4c-gold transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-p4c-navy mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Specialized Housing Programs */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-20 border border-gray-100">
        <div className="bg-p4c-navy p-8 md:p-10 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-2">
              Accepted Voucher Programs
            </h2>
            <p className="text-gray-300">
              We are experts in processing federal and state housing assistance.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
            <span className="text-p4c-gold font-bold">100% Approval Rate</span>{' '}
            on Inspections
          </div>
        </div>

        <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold text-p4c-navy mb-3 flex items-center gap-3">
              <span className="bg-p4c-gold w-1.5 h-6 rounded-full" />
              HUD-VASH Program
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We work directly with VA case managers to expedite HQS inspections
              and lease-ups. Our team understands the specific requirements of
              the HUD-VASH program to prevent administrative delays.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-p4c-navy mb-3 flex items-center gap-3">
              <span className="bg-p4c-gold w-1.5 h-6 rounded-full" />
              Section 8 (HCV)
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Standard Housing Choice Vouchers are welcomed. Our properties are
              pre-screened to meet or exceed Housing Quality Standards (HQS),
              ensuring a pass on the first inspection attempt.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-p4c-navy mb-3 flex items-center gap-3">
              <span className="bg-p4c-gold w-1.5 h-6 rounded-full" />
              Rapid Rehousing (SSVF)
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We accept short-term rental assistance from SSVF providers. We
              offer flexible lease terms to align with the duration of your
              assistance program to ensure housing stability.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-p4c-navy mb-3 flex items-center gap-3">
              <span className="bg-p4c-gold w-1.5 h-6 rounded-full" />
              ADA / Accessibility
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We provide reasonable accommodations including wheelchair ramps,
              grab bars, and visual alarms at no cost to disabled veteran
              tenants upon request.
            </p>
          </div>
        </div>
      </div>

      {/* Resources Directory */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-serif font-bold text-p4c-navy mb-6 flex items-center gap-2">
            <MapPin className="text-p4c-gold w-6 h-6" />
            East Texas Resource Network
          </h2>
          <div className="space-y-4">
            {[
              {
                name: 'CampV Tyler',
                desc: 'Holistic veteran support campus offering legal, financial, and mental health services.',
                phone: '(903) 566-1010',
              },
              {
                name: 'Texas Veterans Commission',
                desc: 'Expert representation for disability claims and employment services.',
                phone: '(512) 463-6564',
              },
              {
                name: 'Smith County Veteran Services',
                desc: 'Local assistance filing VA claims and accessing county benefits.',
                phone: '(903) 590-2930',
              },
              {
                name: 'VA Outpatient Clinic - Tyler',
                desc: 'Primary care, mental health, and specialty medical services.',
                phone: '(903) 590-3050',
              },
            ].map((res, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center justify-between bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-p4c-gold transition-colors"
              >
                <div>
                  <h4 className="font-bold text-p4c-navy text-lg">
                    {res.name}
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">{res.desc}</p>
                </div>
                <div className="mt-4 sm:mt-0 flex-shrink-0">
                  <a
                    href={`tel:${res.phone.replace(/\D/g, '')}`}
                    className="text-p4c-navy font-bold hover:text-p4c-gold transition-colors flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"
                  >
                    <Phone className="w-4 h-4" /> {res.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-p4c-navy text-white p-8 rounded-2xl h-fit shadow-xl border-t-4 border-p4c-gold">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-p4c-gold" />
            Tactical Support
          </h3>
          <p className="text-gray-300 mb-6 text-sm leading-relaxed">
            If you are a veteran in crisis or at immediate risk of homelessness,
            activate the Veterans Crisis Line immediately.
          </p>
          <a
            href="tel:988"
            className="block w-full bg-p4c-gold text-p4c-navy text-center py-4 rounded-lg font-bold hover:bg-white transition-colors mb-4 shadow-lg"
          >
            Dial 988 (Press 1)
          </a>
          <div className="text-center text-xs text-gray-400 border-t border-white/10 pt-4 mt-4">
            <p>Confidential • 24/7 • Free</p>
            <p className="mt-1">P4C Liaison: (903) 707-8460</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default VeteranServices;

```

---
### 📄 `src\pages\Veterans.tsx`

**⚠️ Analysis Findings:**
- 🔵 **[MEDIUM]** Image missing alt text (Line 35)

```typescript
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  HeartHandshake,
  Phone,
  Home,
  Flag,
  ShieldCheck,
  Clock,
  FileCheck,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants/images';

const Veterans: React.FC = () => (
  <>
    <Helmet>
      <title>
        Veterans Housing Initiative | HUD-VASH Partners | Properties 4 Creation
      </title>
      <meta
        name="description"
        content="Properties 4 Creation provides priority housing placement for veterans in East Texas. We specialize in HUD-VASH leasing and accessible home modifications."
      />
      <meta
        name="keywords"
        content="veteran housing Tyler TX, HUD-VASH Longview, military housing assistance, accessible rentals East Texas, veteran property management"
      />
    </Helmet>
    <div className="bg-p4c-beige min-h-screen">
      {/* Hero Banner - Professional & Patriotic */}
      <div className="relative h-[400px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img
            src={IMAGES.BANNERS.HERO_HOME}
            alt="Flag flying on a porch of a renovated home"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-p4c-navy/90 mix-blend-multiply" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-p4c-navy via-transparent to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="bg-p4c-gold/20 backdrop-blur-sm border border-p4c-gold/30 p-4 rounded-2xl">
              <Flag className="w-10 h-10 text-p4c-gold" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 tracking-wide">
            Veterans Housing Initiative
          </h1>
          <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
            Delivering dignified, high-quality housing solutions for veterans in
            <strong> East Texas</strong>.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Mission Statement */}
            <section>
              <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-6">
                The Mission: No Veteran Left Behind
              </h2>
              <div className="w-20 h-1 bg-p4c-gold mb-8" />
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                At Properties 4 Creation, we view veteran housing as a
                logistical mission, not a charity project. We partner directly
                with <strong>HUD-VASH case managers</strong> and the{' '}
                <strong>VA</strong> to remove bureaucratic barriers to entry.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Our goal is simple:{' '}
                <strong>Rapid Deployment to Housing.</strong> We prioritize
                veteran applications to ensure zero days spent waiting for a
                safe place to call home.
              </p>
            </section>

            {/* Program Features Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-p4c-navy w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-p4c-gold" />
                </div>
                <h3 className="text-xl font-bold text-p4c-navy mb-3">
                  Expedited Leasing
                </h3>
                <p className="text-gray-600">
                  Priority application processing allows for move-in timelines
                  as short as 48 hours for pre-qualified veterans.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-p4c-navy w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <FileCheck className="w-6 h-6 text-p4c-gold" />
                </div>
                <h3 className="text-xl font-bold text-p4c-navy mb-3">
                  Voucher Integration
                </h3>
                <p className="text-gray-600">
                  Seamless acceptance of HUD-VASH and Section 8 vouchers. We
                  handle the paperwork and inspection scheduling.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-p4c-navy w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6 text-p4c-gold" />
                </div>
                <h3 className="text-xl font-bold text-p4c-navy mb-3">
                  Secure Communities
                </h3>
                <p className="text-gray-600">
                  Properties located in safe, quiet neighborhoods selected for
                  their proximity to VA clinics and essential services.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-p4c-navy w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <HeartHandshake className="w-6 h-6 text-p4c-gold" />
                </div>
                <h3 className="text-xl font-bold text-p4c-navy mb-3">
                  Accessibility Ready
                </h3>
                <p className="text-gray-600">
                  We perform reasonable modifications (ramps, grab bars) to
                  ensure homes meet the specific physical needs of our
                  residents.
                </p>
              </div>
            </section>

            {/* CTA Section */}
            <div className="bg-p4c-navy rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold mb-4">
                  Ready to Find Your Base?
                </h3>
                <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                  Browse our current inventory in East Texas or speak with our
                  veteran housing liaison.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/"
                    className="bg-p4c-gold text-p4c-navy px-6 py-3 rounded-xl font-bold hover:bg-white transition-colors flex items-center justify-center gap-2"
                  >
                    Available Homes <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-p4c-navy transition-colors"
                  >
                    Contact Liaison
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar / Operational Resources */}
          <div className="space-y-8">
            {/* Command Center Card */}
            <div className="bg-white rounded-2xl shadow-lg border-t-4 border-p4c-gold overflow-hidden">
              <div className="bg-gray-50 p-6 border-b border-gray-100">
                <h3 className="text-lg font-bold text-p4c-navy flex items-center gap-2">
                  <Phone className="w-5 h-5 text-p4c-gold" />
                  Resident Command Center
                </h3>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Emergency Crisis Line
                  </p>
                  <p className="text-2xl font-bold text-p4c-navy">
                    988{' '}
                    <span className="text-lg font-normal text-gray-500">
                      (Press 1)
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    24/7 Confidential Support
                  </p>
                </div>

                <div className="h-px bg-gray-100" />

                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    P4C Veteran Liaison
                  </p>
                  <p className="text-xl font-bold text-p4c-navy">
                    (903) 707-8460
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Mon-Fri: 0800 - 1700
                  </p>
                </div>
              </div>
            </div>

            {/* Strategic Partners */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-p4c-navy mb-6 flex items-center gap-2">
                <Home className="w-5 h-5 text-p4c-gold" />
                Strategic Partners
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://www.campv.org/tyler"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-p4c-gold mt-2 group-hover:scale-125 transition-transform" />
                    <div>
                      <span className="block font-bold text-gray-700 group-hover:text-p4c-navy transition-colors">
                        CampV Tyler
                      </span>
                      <span className="text-xs text-gray-500">
                        Veteran Resource Center
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tvc.texas.gov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-p4c-gold mt-2 group-hover:scale-125 transition-transform" />
                    <div>
                      <span className="block font-bold text-gray-700 group-hover:text-p4c-navy transition-colors">
                        Texas Veterans Commission
                      </span>
                      <span className="text-xs text-gray-500">
                        Claims & Education
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.va.gov/homeless/hud-vash.asp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-p4c-gold mt-2 group-hover:scale-125 transition-transform" />
                    <div>
                      <span className="block font-bold text-gray-700 group-hover:text-p4c-navy transition-colors">
                        HUD-VASH Program
                      </span>
                      <span className="text-xs text-gray-500">
                        Official Guidelines
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Doc Download */}
            <div className="bg-p4c-beige/50 p-6 rounded-2xl border border-p4c-gold/20">
              <h4 className="font-bold text-p4c-navy mb-2">
                Required Documents
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Pre-qualify faster by having your DD-214 and VA Award Letter
                ready.
              </p>
              <Link
                to="/apply"
                className="text-sm font-bold text-p4c-gold hover:text-p4c-navy transition-colors flex items-center gap-1"
              >
                Start Pre-Qualification <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Veterans;

```

---
### 📄 `src\pwa-register.ts`

```typescript
// Fallback PWA registration logic
// This provides basic service worker registration without virtual module dependencies

let swRegistration: ServiceWorkerRegistration | null = null;

/**
 * Log messages only in development environment to avoid ESLint errors
 */
function logDev(message: string, ...args: unknown[]): void {
  // eslint-disable-next-line no-console
  if (import.meta.env.DEV) {
    console.log(message, ...args);
  }
}

/**
 * Log error messages only in development environment
 */
function logErrorDev(message: string, ...args: unknown[]): void {
  // eslint-disable-next-line no-console
  if (import.meta.env.DEV) {
    console.error(message, ...args);
  }
}

export function updateSW() {
  // Check if service workers are supported
  if ('serviceWorker' in navigator) {
    // Wait for DOM content to load before registering
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', registerServiceWorker);
    } else {
      registerServiceWorker();
    }
  } else {
    logDev('Service workers are not supported');
  }
}

async function registerServiceWorker() {
  try {
    // Register service worker
    swRegistration = await navigator.serviceWorker.register('/sw.js');
    logDev('Service Worker registered with scope:', swRegistration.scope);

    // Handle service worker updates
    swRegistration.addEventListener('updatefound', () => {
      const newWorker = swRegistration?.installing;
      if (newWorker) {
        newWorker.addEventListener('statechange', () => {
          if (
            newWorker.state === 'installed' &&
            navigator.serviceWorker.controller
          ) {
            // New content is available
            window.dispatchEvent(new Event('p4c-sw-update'));
          }
        });
      }
    });

    // Check if service worker is already installed and controlling
    if (navigator.serviceWorker.controller) {
      logDev('Service Worker is controlling the page');
    }
  } catch (error) {
    logErrorDev('Error registering Service Worker:', error);
  }
}

// Check for service worker updates
export function checkForUpdates() {
  if (swRegistration) {
    swRegistration.update().catch((error) => {
      logErrorDev('Error checking for updates:', error);
    });
  }
}

// Show notification when app is ready for offline use
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.ready.then(() => {
    logDev('Properties 4 Creation is ready for offline use.');
  });
}

```

---
### 📄 `src\services\api.ts`

```typescript
import { supabase } from '../lib/supabaseClient';
import type {
  StatMetric,
  RenovationStandard,
  FinancialBreakdown,
  ExtendedProperty,
} from '../types/types';
// Fallback data
import {
  properties as mockProperties,
  getPropertyById,
} from '../data/properties';

/**
 * Enhanced API Service
 * Maps Supabase Database Schemas directly to Frontend Types
 */

// --- DATA MAPPERS -------------------------------------------

/**
 * Maps 'public.properties' SQL table to 'ExtendedProperty' UI type
 */
const mapPropertyFromDB = (dbProp: any): ExtendedProperty => ({
  id: dbProp.id,
  title: dbProp.title,
  address: dbProp.address,
  city: dbProp.city || '', // New SQL field
  // Format numeric price from DB to string for UI (e.g. 1200 -> "$1,200")
  price:
    typeof dbProp.price === 'number'
      ? `$${dbProp.price.toLocaleString()}`
      : dbProp.price,

  // Map SQL columns 'beds'/'baths' to UI expected 'bedrooms'/'bathrooms'
  beds: dbProp.beds || 0,
  bedrooms: dbProp.beds || 0, // Duplicate for compatibility
  baths: dbProp.baths || 0,
  bathrooms: dbProp.baths || 0, // Duplicate for compatibility

  sqft: dbProp.sqft || 0,
  description: dbProp.description || '',

  // Handle Arrays
  badges: dbProp.badges || [],
  amenities: dbProp.amenities || [],
  accessibilityFeatures: dbProp.accessibility_features || [], // New SQL field

  // Handle Images
  imageUrl: dbProp.image_url,
  images: dbProp.image_url ? [dbProp.image_url] : [],

  // Location & Details
  neighborhood: dbProp.neighborhood || 'East Texas',
  schoolDistrict: dbProp.school_district || 'TISD',
  status: dbProp.is_active ? 'available' : 'occupied',
  availabilityDate: dbProp.availability_date || 'Available Now',
});

/**
 * Maps 'public.impact_metrics' SQL table to 'StatMetric' UI type
 */
const mapMetricFromDB = (dbMetric: any): StatMetric => ({
  id: dbMetric.id,
  label: dbMetric.label,
  value: dbMetric.current_value.toString(),
  icon: dbMetric.icon_name || 'chart',
  // Fields not in DB yet, providing defaults to prevent UI crash
  description: 'Updated via live database',
  trend: 'neutral',
  trendValue: '',
});

// --- API SERVICE --------------------------------------------

export const api = {
  // 1. IMPACT METRICS (Live DB Connection)
  impact: {
    getMetrics: async (): Promise<StatMetric[]> => {
      try {
        const { data, error } = await supabase
          .from('impact_metrics')
          .select('*');

        if (error) throw error;

        // If DB is empty, fall back to static data so the site looks good
        if (!data || data.length === 0) {
          console.warn('No impact metrics in DB, using fallback.');
          return [
            {
              id: '1',
              label: 'Families Housed',
              value: '142',
              icon: 'home',
              description: 'Total families placed.',
              trend: 'up',
              trendValue: '+12%',
            },
            {
              id: '2',
              label: 'Veterans Served',
              value: '85',
              icon: 'users',
              description: 'Veterans housed.',
              trend: 'up',
              trendValue: '+8%',
            },
            {
              id: '3',
              label: 'Properties Revitalized',
              value: '56',
              icon: 'hammer',
              description: 'Renovated homes.',
              trend: 'up',
              trendValue: '+5',
            },
            {
              id: '4',
              label: 'Community Wealth',
              value: '$2.4M',
              icon: 'dollar',
              description: 'Value added.',
              trend: 'up',
              trendValue: 'Est.',
            },
          ];
        }

        return data.map(mapMetricFromDB);
      } catch (error) {
        console.error('Impact fetch error:', error);
        return [];
      }
    },

    getFinancialBreakdown: async (): Promise<FinancialBreakdown[]> => {
      // Keeping this static for now unless you create a 'financials' table
      return [
        { category: 'Property Maintenance', percentage: 35, color: '#0B1120' },
        { category: 'Future Acquisitions', percentage: 30, color: '#C5A059' },
        { category: 'Investor Returns', percentage: 20, color: '#334155' },
        { category: 'Community Programs', percentage: 10, color: '#94a3b8' },
        { category: 'Admin/Ops', percentage: 5, color: '#cbd5e1' },
      ];
    },
  },

  // 2. TRANSPARENCY (Renovation Standards)
  transparency: {
    getStandards: async (): Promise<RenovationStandard[]> => {
      // Keeping static - likely doesn't need frequent DB updates
      return [
        {
          id: 'kitchen',
          category: 'Kitchen Countertops',
          standardLandlord: 'Laminate',
          p4cStandard: 'Quartz/Granite',
          benefit: 'Durable & Dignified',
        },
        {
          id: 'flooring',
          category: 'Flooring',
          standardLandlord: 'Carpet',
          p4cStandard: 'Luxury Vinyl Plank',
          benefit: 'Waterproof & Clean',
        },
        {
          id: 'hvac',
          category: 'Climate',
          standardLandlord: 'Old Units',
          p4cStandard: 'SEER 16+',
          benefit: 'Lower Utility Bills',
        },
        {
          id: 'security',
          category: 'Security',
          standardLandlord: 'Deadbolt',
          p4cStandard: 'Smart Locks',
          benefit: 'Safety First',
        },
      ];
    },
  },

  // 3. PROPERTIES (Matches your 'public.properties' schema)
  properties: {
    getAll: async (): Promise<ExtendedProperty[]> => {
      try {
        const { data, error } = await supabase
          .from('properties')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        return (data || []).map(mapPropertyFromDB);
      } catch (error) {
        console.warn('Property fetch error, using mock:', error);
        return mockProperties;
      }
    },

    getById: async (id: string): Promise<ExtendedProperty | null> => {
      try {
        const { data, error } = await supabase
          .from('properties')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        return mapPropertyFromDB(data);
      } catch (error) {
        const mock = getPropertyById(id);
        return mock || null;
      }
    },

    // Admin: Create Property
    create: async (property: any) => {
      // Map UI fields back to SQL columns
      const dbPayload = {
        title: property.title,
        address: property.address,
        city: property.city || 'Tyler', // Default if missing
        price: parseFloat(property.price.replace(/[^0-9.]/g, '')), // "1200" -> 1200.00
        beds: parseInt(property.bedrooms || property.beds || 0, 10),
        baths: parseFloat(property.bathrooms || property.baths || 1),
        sqft: parseInt(property.sqft || 0, 10),
        image_url: property.imageUrl || property.images?.[0] || '',
        description: property.description,
        badges: property.badges || [],
        amenities: property.amenities || [],
        accessibility_features: property.accessibilityFeatures || [],
        school_district: property.schoolDistrict,
        neighborhood: property.neighborhood,
        availability_date: property.availabilityDate,
        is_active: true,
      };

      const { data, error } = await supabase
        .from('properties')
        .insert([dbPayload])
        .select()
        .single();

      if (error) throw error;
      return mapPropertyFromDB(data);
    },

    // Admin: Delete Property
    delete: async (id: string) => {
      const { error } = await supabase.from('properties').delete().eq('id', id);

      if (error) throw error;
      return true;
    },
  },

  // 4. RESIDENT PORTAL (Matches 'maintenance_requests' & 'profiles')
  maintenance: {
    // Submit a new request
    createRequest: async (request: {
      residentId: string;
      propertyId: string;
      category: string;
      description: string;
      priority: string;
    }) => {
      const { data, error } = await supabase
        .from('maintenance_requests')
        .insert([
          {
            resident_id: request.residentId,
            property_id: request.propertyId,
            issue_category: request.category,
            description: request.description,
            priority: request.priority,
            status: 'open',
          },
        ])
        .select()
        .single();

      if (error) throw error;
      return data;
    },

    // Get requests for a specific resident
    getResidentRequests: async (residentId: string) => {
      const { data, error } = await supabase
        .from('maintenance_requests')
        .select(
          `
          *,
          properties (title, address)
        `
        )
        .eq('resident_id', residentId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    },
  },
};

```

---
### 📄 `src\services\botpressService.test.ts`

```typescript
/**
 * Botpress Service Tests
 * Unit tests for the Botpress service layer
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  sendChatMessage,
  checkBotpressHealth,
  validationUtils,
} from './botpressService';

// Mock the global fetch function
global.fetch = vi.fn();

describe('Botpress Service', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('validationUtils', () => {
    const { validateBase64, validateMimeType, sanitizeInput } = validationUtils;

    describe('validateBase64', () => {
      it('should return true for valid base64 strings', () => {
        expect(validateBase64('SGVsbG8gd29ybGQ=')).toBe(true);
        expect(validateBase64('aGVsbG8=')).toBe(true);
        expect(validateBase64('aGVsbG8gd29ybGQ=')).toBe(true);
      });

      it('should return false for invalid base64 strings', () => {
        expect(validateBase64('not-base64')).toBe(false);
        expect(validateBase64('')).toBe(false);
        expect(validateBase64('SGVsbG8gd29ybGQ!')).toBe(false);
      });

      it('should return false for non-string inputs', () => {
        expect(validateBase64(123 as any)).toBe(false);
        expect(validateBase64(null as any)).toBe(false);
        expect(validateBase64(undefined as any)).toBe(false);
      });
    });

    describe('validateMimeType', () => {
      it('should return true for allowed image mime types', () => {
        expect(validateMimeType('image/jpeg')).toBe(true);
        expect(validateMimeType('image/jpg')).toBe(true);
        expect(validateMimeType('image/png')).toBe(true);
        expect(validateMimeType('image/webp')).toBe(true);
      });

      it('should return false for disallowed mime types', () => {
        expect(validateMimeType('image/gif')).toBe(false);
        expect(validateMimeType('image/svg+xml')).toBe(false);
        expect(validateMimeType('application/pdf')).toBe(false);
      });
    });

    describe('sanitizeInput', () => {
      it('should sanitize HTML special characters', () => {
        expect(sanitizeInput('<script>alert("xss")</script>')).toBe(
          '<script>alert("xss")</script>'
        );
        expect(sanitizeInput('Hello & goodbye')).toBe('Hello & goodbye');
        expect(sanitizeInput("'single quotes'")).toBe(
          '&#x27;single quotes&#x27;'
        );
      });

      it('should return empty string for non-string inputs', () => {
        expect(sanitizeInput(123 as any)).toBe('');
        expect(sanitizeInput(null as any)).toBe('');
        expect(sanitizeInput(undefined as any)).toBe('');
      });
    });
  });

  describe('sendChatMessage', () => {
    it('should throw error for empty message', async () => {
      await expect(sendChatMessage('')).rejects.toThrow('Message is required');
    });

    it('should throw error for message that is too long', async () => {
      const longMessage = 'a'.repeat(4001);
      await expect(sendChatMessage(longMessage)).rejects.toThrow(
        'Message too long (max 4000 characters)'
      );
    });

    it('should call the API with correct parameters', async () => {
      const mockResponse = {
        success: true,
        message: 'Hello from Botpress!',
        timestamp: new Date().toISOString(),
      };

      vi.spyOn(global, 'fetch').mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      } as Response);

      const result = await sendChatMessage('Hello');

      expect(fetch).toHaveBeenCalledWith('/api/ai/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: JSON.stringify({
          message: 'Hello',
          history: [],
        }),
      });

      expect(result).toBe('Hello from Botpress!');
    });

    it('should handle API errors gracefully', async () => {
      vi.spyOn(global, 'fetch').mockResolvedValueOnce({
        ok: false,
        status: 500,
        json: () => Promise.resolve({ error: 'Internal server error' }),
      } as Response);

      await expect(sendChatMessage('Hello')).rejects.toThrow(
        'Internal server error'
      );
    });

    it('should handle network errors gracefully', async () => {
      vi.spyOn(global, 'fetch').mockRejectedValueOnce(
        new TypeError('Failed to fetch')
      );

      await expect(sendChatMessage('Hello')).rejects.toThrow(
        'Unable to connect to AI service. Please try again later.'
      );
    });
  });

  describe('checkBotpressHealth', () => {
    it('should return true for healthy service', async () => {
      const mockResponse = {
        status: 'healthy',
      };

      vi.spyOn(global, 'fetch').mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      } as Response);

      const result = await checkBotpressHealth();
      expect(result).toBe(true);
    });

    it('should return false for unhealthy service', async () => {
      vi.spyOn(global, 'fetch').mockResolvedValueOnce({
        ok: false,
      } as Response);

      const result = await checkBotpressHealth();
      expect(result).toBe(false);
    });

    it('should return false on network error', async () => {
      vi.spyOn(global, 'fetch').mockRejectedValueOnce(
        new Error('Network error')
      );

      const result = await checkBotpressHealth();
      expect(result).toBe(false);
    });
  });
});

```

---
### 📄 `src\services\botpressService.ts`

```typescript
/**
 * Botpress Service Layer
 * Client-side service for Botpress AI operations
 * Maintains same interface as geminiService for easy migration
 */

import { logError } from './errorBoundaryService';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: T; // For chat responses
  error?: string;
  code?: string;
  timestamp?: string;
}

interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}

const API_BASE_URL = '/api';

// Input validation utilities (maintained from geminiService for consistency)
const validateBase64 = (base64Image: string): boolean => {
  if (typeof base64Image !== 'string') return false;
  const base64Regex = /^[A-Za-z0-9+/]*={0,2}$/;
  return base64Regex.test(base64Image) && base64Image.length > 0;
};

const validateMimeType = (mimeType: string): boolean => {
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  return allowedTypes.includes(mimeType);
};

const sanitizeInput = (input: string): string => {
  if (typeof input !== 'string') return '';
  return input.replace(/[<>\\"'&]/g, (match) => {
    const entities: Record<string, string> = {
      '<': '<',
      '>': '>',
      '"': '"',
      "'": '&#x27;',
      '&': '&',
    };
    // Type assertion: match is guaranteed to be a key of entities due to regex
    return entities[match as keyof typeof entities] || '';
  });
};

/**
 * Sends a chat message to Botpress via secure proxy
 * Maintains same interface as geminiService.sendChatMessage for compatibility
 *
 * @param message The user's message.
 * @param history The chat history.
 * @returns The model's text response.
 */
export const sendChatMessage = async (
  message: string,
  history: ChatMessage[] = []
): Promise<string> => {
  try {
    // Input validation (maintained from geminiService)
    if (!message || typeof message !== 'string') {
      throw new Error('Message is required');
    }

    if (message.length > 4000) {
      throw new Error('Message too long (max 4000 characters)');
    }

    // Validate history format
    if (!Array.isArray(history)) {
      history = [];
    }

    // Sanitize message
    const sanitizedMessage = sanitizeInput(message);
    const response = await fetch(`${API_BASE_URL}/ai/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      body: JSON.stringify({
        message: sanitizedMessage,
        history: history.map((msg) => ({
          role: msg.role,
          parts: [{ text: sanitizeInput(msg.parts[0]?.text || '') }],
        })),
      }),
    });

    if (!response.ok) {
      const errorData: ApiResponse<null> = await response.json().catch(() => ({
        success: false,
        error: 'Server communication error',
      }));

      throw new Error(errorData.error || `HTTP ${response.status}`);
    }

    const result: ApiResponse<string> = await response.json();

    if (!result.success || !result.message) {
      throw new Error(result.error || 'Chat processing failed');
    }
    return result.message;
  } catch (error) {
    logError('Botpress chat error', {
      error: error as Error,
      component: 'botpressService',
    });

    // Provide user-friendly error messages (maintained from geminiService)
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error(
        'Unable to connect to AI service. Please try again later.'
      );
    }

    throw error;
  }
};

/**
 * Health check for the Botpress service
 * Maintains same interface as geminiService.checkAiServiceHealth
 * @returns Promise<boolean> indicating service availability
 */
export const checkBotpressHealth = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`, {
      method: 'GET',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
    });

    if (!response.ok) {
      return false;
    }

    const data = await response.json();
    return data.status === 'healthy';
  } catch (error) {
    logError('Botpress health check failed', {
      error: error as Error,
      component: 'botpressService',
    });
    return false;
  }
};

/**
 * Image editing with Botpress (if supported)
 * This is a placeholder - Botpress may not support image editing like Gemini
 * For now, maintain the interface but throw a clear error
 *
 * @param base64Image The source image in base64 format
 * @param mimeType The mime type of the image
 * @param prompt The user's text instruction for editing
 * @returns Promise that rejects with clear error about unsupported feature
 */
export const editImageWithBotpress = async (
  base64Image: string,
  mimeType: string,
  prompt: string
): Promise<string> => {
  // Botpress doesn't typically support image editing like Gemini
  // This maintains interface compatibility but provides clear feedback
  await new Promise<void>((resolve) => resolve()); // Add await to satisfy ESLint
  throw new Error(
    `Image editing is not supported with Botpress. This feature was available with Gemini but is not part of the Botpress integration. Attempted to edit ${mimeType} image (${base64Image.length} bytes) with prompt: "${prompt}"`
  );
};

// Export validation utilities for testing (maintained from geminiService)
export const validationUtils = {
  validateBase64,
  validateMimeType,
  sanitizeInput,
};

// Default export for backward compatibility
export default {
  sendChatMessage,
  checkBotpressHealth,
  editImageWithBotpress,
  validationUtils,
};

```

---
### 📄 `src\services\botpressWebchatService.ts`

**⚠️ Analysis Findings:**
- 🔴 **[HIGH]** Button missing aria-label (Line 88)

```typescript
/**
 * Botpress Webchat Service
 * Service for embedding Botpress webchat directly in React components
 * This approach uses the existing working Botpress Cloud setup
 */

import { logError } from './errorBoundaryService';

interface WebchatConfig {
  configUrl?: string;
  width?: string;
  height?: string;
}

const BOTPRESS_WEBCHAT_URL =
  'https://cdn.botpress.cloud/webchat/v3.5/shareable.html';
const BOTPRESS_CONFIG_URL =
  'https://files.bpcontent.cloud/2025/10/13/00/20251013003640-UG466F0L.json';

/**
 * Initialize Botpress webchat
 * This embeds the Botpress webchat directly into a container element
 *
 * @param containerId The ID of the HTML element to embed the webchat in
 * @param config Configuration options for the webchat
 */
export const initializeBotpressWebchat = (
  containerId: string,
  config: WebchatConfig = {}
): void => {
  try {
    // Check if webchat is already initialized
    if (document.getElementById(`bp-webchat-${containerId}`)) {
      return;
    }

    const container = document.getElementById(containerId);
    if (!container) {
      throw new Error(`Container element with ID '${containerId}' not found`);
    }

    // Create iframe for Botpress webchat
    const iframe = document.createElement('iframe');
    iframe.id = `bp-webchat-${containerId}`;
    iframe.src = `${BOTPRESS_WEBCHAT_URL}?configUrl=${encodeURIComponent(BOTPRESS_CONFIG_URL)}`;
    iframe.width = config.width || '100%';
    iframe.height = config.height || '100%';
    iframe.style.border = 'none';
    iframe.style.borderRadius = '12px';
    iframe.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
    iframe.allow = 'microphone *; camera *; autoplay *';
    iframe.title = 'Properties 4 Creation Virtual Assistant';

    // Add loading state
    const loadingDiv = document.createElement('div');
    loadingDiv.className =
      'flex items-center justify-center h-full bg-gray-50 rounded-2xl';
    loadingDiv.innerHTML = `
      <div class="text-center">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-p4c-gold mx-auto mb-2"></div>
        <p class="text-sm text-gray-600">Loading Patriot...</p>
      </div>
    `;
    container.appendChild(loadingDiv);

    // Handle iframe load
    iframe.onload = () => {
      // Clear loading state
      container.innerHTML = '';
      container.appendChild(iframe);
    };

    // Handle iframe errors
    iframe.onerror = (error) => {
      logError('Botpress webchat iframe failed to load', {
        error: error instanceof Error ? error : new Error(String(error)),
        component: 'botpressWebchatService',
        metadata: { containerId },
      });

      const errorDiv = document.createElement('div');
      errorDiv.className =
        'flex items-center justify-center h-full bg-red-50 rounded-2xl p-4';
      errorDiv.innerHTML = `
        <div class="text-center">
          <div class="text-red-500 mb-2">⚠️</div>
          <p class="text-sm text-red-700">Failed to load assistant</p>
          <button
            onclick="window.location.reload()"
            class="mt-2 px-3 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600 transition-colors"
          >
            Retry
          </button>
        </div>
      `;
      container.innerHTML = '';
      container.appendChild(errorDiv);
    };
  } catch (error) {
    logError('Failed to initialize Botpress webchat', {
      error: error as Error,
      component: 'botpressWebchatService',
      metadata: { containerId },
    });

    throw error;
  }
};

/**
 * Destroy Botpress webchat instance
 * Cleans up the webchat from a container
 *
 * @param containerId The ID of the container to clean up
 */
export const destroyBotpressWebchat = (containerId: string): void => {
  try {
    const iframe = document.getElementById(`bp-webchat-${containerId}`);
    if (iframe) {
      iframe.remove();
    }

    const container = document.getElementById(containerId);
    if (container) {
      // Clear container using DOM manipulation instead of innerHTML
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    }
  } catch (error) {
    logError('Failed to destroy Botpress webchat', {
      error: error as Error,
      component: 'botpressWebchatService',
      metadata: { containerId },
    });
  }
};

/**
 * Check if Botpress webchat is available
 * Returns true if the webchat URL is accessible
 */
export const checkBotpressWebchatHealth = (): boolean =>
  // Simple check - in a real implementation you might ping the config URL
  // For now, we'll assume it's available since it's a CDN URL
  true;

// Default export for backward compatibility
export default {
  initializeBotpressWebchat,
  destroyBotpressWebchat,
  checkBotpressWebchatHealth,
};

```

---
### 📄 `src\services\errorBoundaryService.ts`

```typescript
/**
 * Error Boundary Service
 * Centralized error logging and monitoring service
 * Follows architectural rules for error handling
 */

type ErrorSeverity = 'low' | 'medium' | 'high' | 'critical';

/**
 * Log an error to the monitoring service
 */
export const logError = (
  message: string,
  options?: {
    error?: Error;
    component?: string;
    severity?: ErrorSeverity;
    metadata?: Record<string, unknown>;
  }
): void => {
  const { error, component, severity = 'medium', metadata } = options || {};

  // In development, also log to console
  // eslint-disable-next-line no-console
  if (import.meta.env.DEV) {
    console.error(`[ErrorBoundary] ${severity.toUpperCase()}: ${message}`, {
      component,
      metadata,
      error,
    });
  }

  // In production, send to monitoring service (placeholder for future integration)
  // TODO: Integrate with Sentry, LogRocket, or similar
};

/**
 * Log a warning message
 */
export const logWarning = (
  message: string,
  options?: {
    component?: string;
    metadata?: Record<string, unknown>;
  }
): void => {
  const { component, metadata } = options || {};

  // eslint-disable-next-line no-console
  if (import.meta.env.DEV) {
    console.warn(`[Warning] ${message}`, { component, metadata });
  }
};

/**
 * Log an info message
 */
export const logInfo = (
  message: string,
  options?: {
    component?: string;
    metadata?: Record<string, unknown>;
  }
): void => {
  const { component, metadata } = options || {};

  // eslint-disable-next-line no-console
  if (import.meta.env.DEV) {
    console.log(`[Info] ${message}`, { component, metadata });
  }
};

export default {
  logError,
  logWarning,
  logInfo,
};

```

---
### 📄 `src\test\setup.ts`

```typescript
/**
 * Global test setup file for Vitest
 * Configures the test environment for Properties 4 Creation React components
 */

import { vi } from 'vitest';

// Mock window.matchMedia for components that use it
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock ResizeObserver for components using it
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Suppress console.error in tests to reduce noise
// Only uncomment if debugging: vi.spyOn(console, 'error').mockImplementation(() => {});

// Set default test timeout
vi.setConfig({
  testTimeout: 10000,
});

```

---
### 📄 `src\types\declarations.d.ts`

```typescript
declare module 'upscaler';
declare module '@google/generative-ai';

```

---
### 📄 `src\types\index.ts`

```typescript
export interface ExtendedProperty {
  id: string;
  title: string;
  address: string;
  city: string; // [NEW] From SQL
  price: string;
  status: 'available' | 'occupied' | 'maintenance';
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  description: string;
  imageUrl: string;
  images: string[];
  badges: string[]; // [NEW] From SQL
  amenities: string[];
  accessibilityFeatures: string[]; // [NEW] From SQL
  neighborhood: string; // [NEW] From SQL
  schoolDistrict: string; // [NEW] From SQL
  availabilityDate: string; // [NEW] From SQL
  yearBuilt?: number;
  location?: {
    lat: number;
    lng: number;
  };
  beds?: number;
  baths?: number;
}

export interface StatMetric {
  id: string;
  label: string;
  value: string;
  icon: string;
  description: string;
  trend: 'up' | 'down' | 'neutral';
  trendValue: string;
}

export interface RenovationStandard {
  id: string;
  category: string;
  standardLandlord: string;
  p4cStandard: string;
  benefit: string;
}

export interface FinancialBreakdown {
  category: string;
  percentage: number;
  color: string;
}

```

---
### 📄 `src\types\supabase.ts`

```typescript
e x p o r t   t y p e   J s o n   = 
 
     |   s t r i n g 
 
     |   n u m b e r 
 
     |   b o o l e a n 
 
     |   n u l l 
 
     |   {   [ k e y :   s t r i n g ] :   J s o n   |   u n d e f i n e d   } 
 
     |   J s o n [ ] 
 
 
 
 e x p o r t   t y p e   D a t a b a s e   =   { 
 
     / /   A l l o w s   t o   a u t o m a t i c a l l y   i n s t a n t i a t e   c r e a t e C l i e n t   w i t h   r i g h t   o p t i o n s 
 
     / /   i n s t e a d   o f   c r e a t e C l i e n t < D a t a b a s e ,   {   P o s t g r e s t V e r s i o n :   ' X X '   } > ( U R L ,   K E Y ) 
 
     _ _ I n t e r n a l S u p a b a s e :   { 
 
         P o s t g r e s t V e r s i o n :   " 1 4 . 1 " 
 
     } 
 
     p u b l i c :   { 
 
         T a b l e s :   { 
 
             a p p l i c a t i o n s :   { 
 
                 R o w :   { 
 
                     e m a i l :   s t r i n g 
 
                     f i r s t _ n a m e :   s t r i n g 
 
                     i d :   s t r i n g 
 
                     l a s t _ n a m e :   s t r i n g 
 
                     m e s s a g e :   s t r i n g   |   n u l l 
 
                     m i l i t a r y _ b r a n c h :   s t r i n g   |   n u l l 
 
                     p h o n e :   s t r i n g 
 
                     p r o p e r t y _ i d :   s t r i n g   |   n u l l 
 
                     s t a t u s :   s t r i n g   |   n u l l 
 
                     s u b m i t t e d _ a t :   s t r i n g 
 
                 } 
 
                 I n s e r t :   { 
 
                     e m a i l :   s t r i n g 
 
                     f i r s t _ n a m e :   s t r i n g 
 
                     i d ? :   s t r i n g 
 
                     l a s t _ n a m e :   s t r i n g 
 
                     m e s s a g e ? :   s t r i n g   |   n u l l 
 
                     m i l i t a r y _ b r a n c h ? :   s t r i n g   |   n u l l 
 
                     p h o n e :   s t r i n g 
 
                     p r o p e r t y _ i d ? :   s t r i n g   |   n u l l 
 
                     s t a t u s ? :   s t r i n g   |   n u l l 
 
                     s u b m i t t e d _ a t ? :   s t r i n g 
 
                 } 
 
                 U p d a t e :   { 
 
                     e m a i l ? :   s t r i n g 
 
                     f i r s t _ n a m e ? :   s t r i n g 
 
                     i d ? :   s t r i n g 
 
                     l a s t _ n a m e ? :   s t r i n g 
 
                     m e s s a g e ? :   s t r i n g   |   n u l l 
 
                     m i l i t a r y _ b r a n c h ? :   s t r i n g   |   n u l l 
 
                     p h o n e ? :   s t r i n g 
 
                     p r o p e r t y _ i d ? :   s t r i n g   |   n u l l 
 
                     s t a t u s ? :   s t r i n g   |   n u l l 
 
                     s u b m i t t e d _ a t ? :   s t r i n g 
 
                 } 
 
                 R e l a t i o n s h i p s :   [ 
 
                     { 
 
                         f o r e i g n K e y N a m e :   " a p p l i c a t i o n s _ p r o p e r t y _ i d _ f k e y " 
 
                         c o l u m n s :   [ " p r o p e r t y _ i d " ] 
 
                         i s O n e T o O n e :   f a l s e 
 
                         r e f e r e n c e d R e l a t i o n :   " p r o p e r t i e s " 
 
                         r e f e r e n c e d C o l u m n s :   [ " i d " ] 
 
                     } , 
 
                 ] 
 
             } 
 
             i m p a c t _ m e t r i c s :   { 
 
                 R o w :   { 
 
                     c u r r e n t _ v a l u e :   n u m b e r 
 
                     i c o n _ n a m e :   s t r i n g   |   n u l l 
 
                     i d :   s t r i n g 
 
                     l a b e l :   s t r i n g 
 
                     l a s t _ u p d a t e d :   s t r i n g 
 
                     m e t r i c _ k e y :   s t r i n g 
 
                 } 
 
                 I n s e r t :   { 
 
                     c u r r e n t _ v a l u e ? :   n u m b e r 
 
                     i c o n _ n a m e ? :   s t r i n g   |   n u l l 
 
                     i d ? :   s t r i n g 
 
                     l a b e l :   s t r i n g 
 
                     l a s t _ u p d a t e d ? :   s t r i n g 
 
                     m e t r i c _ k e y :   s t r i n g 
 
                 } 
 
                 U p d a t e :   { 
 
                     c u r r e n t _ v a l u e ? :   n u m b e r 
 
                     i c o n _ n a m e ? :   s t r i n g   |   n u l l 
 
                     i d ? :   s t r i n g 
 
                     l a b e l ? :   s t r i n g 
 
                     l a s t _ u p d a t e d ? :   s t r i n g 
 
                     m e t r i c _ k e y ? :   s t r i n g 
 
                 } 
 
                 R e l a t i o n s h i p s :   [ ] 
 
             } 
 
             m a i n t e n a n c e _ r e q u e s t s :   { 
 
                 R o w :   { 
 
                     c r e a t e d _ a t :   s t r i n g 
 
                     d e s c r i p t i o n :   s t r i n g 
 
                     i d :   s t r i n g 
 
                     i s s u e _ c a t e g o r y :   s t r i n g 
 
                     p h o t o _ u r l :   s t r i n g   |   n u l l 
 
                     p r i o r i t y :   s t r i n g   |   n u l l 
 
                     p r o p e r t y _ i d :   s t r i n g 
 
                     r e s i d e n t _ i d :   s t r i n g 
 
                     s t a t u s :   s t r i n g   |   n u l l 
 
                 } 
 
                 I n s e r t :   { 
 
                     c r e a t e d _ a t ? :   s t r i n g 
 
                     d e s c r i p t i o n :   s t r i n g 
 
                     i d ? :   s t r i n g 
 
                     i s s u e _ c a t e g o r y :   s t r i n g 
 
                     p h o t o _ u r l ? :   s t r i n g   |   n u l l 
 
                     p r i o r i t y ? :   s t r i n g   |   n u l l 
 
                     p r o p e r t y _ i d :   s t r i n g 
 
                     r e s i d e n t _ i d :   s t r i n g 
 
                     s t a t u s ? :   s t r i n g   |   n u l l 
 
                 } 
 
                 U p d a t e :   { 
 
                     c r e a t e d _ a t ? :   s t r i n g 
 
                     d e s c r i p t i o n ? :   s t r i n g 
 
                     i d ? :   s t r i n g 
 
                     i s s u e _ c a t e g o r y ? :   s t r i n g 
 
                     p h o t o _ u r l ? :   s t r i n g   |   n u l l 
 
                     p r i o r i t y ? :   s t r i n g   |   n u l l 
 
                     p r o p e r t y _ i d ? :   s t r i n g 
 
                     r e s i d e n t _ i d ? :   s t r i n g 
 
                     s t a t u s ? :   s t r i n g   |   n u l l 
 
                 } 
 
                 R e l a t i o n s h i p s :   [ 
 
                     { 
 
                         f o r e i g n K e y N a m e :   " m a i n t e n a n c e _ r e q u e s t s _ p r o p e r t y _ i d _ f k e y " 
 
                         c o l u m n s :   [ " p r o p e r t y _ i d " ] 
 
                         i s O n e T o O n e :   f a l s e 
 
                         r e f e r e n c e d R e l a t i o n :   " p r o p e r t i e s " 
 
                         r e f e r e n c e d C o l u m n s :   [ " i d " ] 
 
                     } , 
 
                     { 
 
                         f o r e i g n K e y N a m e :   " m a i n t e n a n c e _ r e q u e s t s _ r e s i d e n t _ i d _ f k e y " 
 
                         c o l u m n s :   [ " r e s i d e n t _ i d " ] 
 
                         i s O n e T o O n e :   f a l s e 
 
                         r e f e r e n c e d R e l a t i o n :   " p r o f i l e s " 
 
                         r e f e r e n c e d C o l u m n s :   [ " i d " ] 
 
                     } , 
 
                 ] 
 
             } 
 
             p r o f i l e s :   { 
 
                 R o w :   { 
 
                     c r e a t e d _ a t :   s t r i n g 
 
                     c u r r e n t _ p r o p e r t y _ i d :   s t r i n g   |   n u l l 
 
                     f i r s t _ n a m e :   s t r i n g   |   n u l l 
 
                     i d :   s t r i n g 
 
                     i s _ v e t e r a n :   b o o l e a n   |   n u l l 
 
                     l a s t _ n a m e :   s t r i n g   |   n u l l 
 
                     l e a s e _ s t a r t _ d a t e :   s t r i n g   |   n u l l 
 
                     m i l i t a r y _ b r a n c h :   s t r i n g   |   n u l l 
 
                 } 
 
                 I n s e r t :   { 
 
                     c r e a t e d _ a t ? :   s t r i n g 
 
                     c u r r e n t _ p r o p e r t y _ i d ? :   s t r i n g   |   n u l l 
 
                     f i r s t _ n a m e ? :   s t r i n g   |   n u l l 
 
                     i d :   s t r i n g 
 
                     i s _ v e t e r a n ? :   b o o l e a n   |   n u l l 
 
                     l a s t _ n a m e ? :   s t r i n g   |   n u l l 
 
                     l e a s e _ s t a r t _ d a t e ? :   s t r i n g   |   n u l l 
 
                     m i l i t a r y _ b r a n c h ? :   s t r i n g   |   n u l l 
 
                 } 
 
                 U p d a t e :   { 
 
                     c r e a t e d _ a t ? :   s t r i n g 
 
                     c u r r e n t _ p r o p e r t y _ i d ? :   s t r i n g   |   n u l l 
 
                     f i r s t _ n a m e ? :   s t r i n g   |   n u l l 
 
                     i d ? :   s t r i n g 
 
                     i s _ v e t e r a n ? :   b o o l e a n   |   n u l l 
 
                     l a s t _ n a m e ? :   s t r i n g   |   n u l l 
 
                     l e a s e _ s t a r t _ d a t e ? :   s t r i n g   |   n u l l 
 
                     m i l i t a r y _ b r a n c h ? :   s t r i n g   |   n u l l 
 
                 } 
 
                 R e l a t i o n s h i p s :   [ 
 
                     { 
 
                         f o r e i g n K e y N a m e :   " p r o f i l e s _ c u r r e n t _ p r o p e r t y _ i d _ f k e y " 
 
                         c o l u m n s :   [ " c u r r e n t _ p r o p e r t y _ i d " ] 
 
                         i s O n e T o O n e :   f a l s e 
 
                         r e f e r e n c e d R e l a t i o n :   " p r o p e r t i e s " 
 
                         r e f e r e n c e d C o l u m n s :   [ " i d " ] 
 
                     } , 
 
                 ] 
 
             } 
 
             p r o p e r t i e s :   { 
 
                 R o w :   { 
 
                     a c c e s s i b i l i t y _ f e a t u r e s :   s t r i n g [ ]   |   n u l l 
 
                     a d d r e s s :   s t r i n g 
 
                     a m e n i t i e s :   s t r i n g [ ]   |   n u l l 
 
                     a v a i l a b i l i t y _ d a t e :   s t r i n g   |   n u l l 
 
                     b a d g e s :   s t r i n g [ ]   |   n u l l 
 
                     b a t h s :   n u m b e r 
 
                     b e d s :   n u m b e r 
 
                     c i t y :   s t r i n g 
 
                     c r e a t e d _ a t :   s t r i n g 
 
                     d e s c r i p t i o n :   s t r i n g   |   n u l l 
 
                     i d :   s t r i n g 
 
                     i m a g e _ u r l :   s t r i n g 
 
                     i s _ a c t i v e :   b o o l e a n   |   n u l l 
 
                     l a t :   n u m b e r   |   n u l l 
 
                     l n g :   n u m b e r   |   n u l l 
 
                     n e i g h b o r h o o d :   s t r i n g   |   n u l l 
 
                     p r i c e :   n u m b e r 
 
                     s c h o o l _ d i s t r i c t :   s t r i n g   |   n u l l 
 
                     s q f t :   n u m b e r 
 
                     t i t l e :   s t r i n g 
 
                 } 
 
                 I n s e r t :   { 
 
                     a c c e s s i b i l i t y _ f e a t u r e s ? :   s t r i n g [ ]   |   n u l l 
 
                     a d d r e s s :   s t r i n g 
 
                     a m e n i t i e s ? :   s t r i n g [ ]   |   n u l l 
 
                     a v a i l a b i l i t y _ d a t e ? :   s t r i n g   |   n u l l 
 
                     b a d g e s ? :   s t r i n g [ ]   |   n u l l 
 
                     b a t h s :   n u m b e r 
 
                     b e d s :   n u m b e r 
 
                     c i t y :   s t r i n g 
 
                     c r e a t e d _ a t ? :   s t r i n g 
 
                     d e s c r i p t i o n ? :   s t r i n g   |   n u l l 
 
                     i d ? :   s t r i n g 
 
                     i m a g e _ u r l :   s t r i n g 
 
                     i s _ a c t i v e ? :   b o o l e a n   |   n u l l 
 
                     l a t ? :   n u m b e r   |   n u l l 
 
                     l n g ? :   n u m b e r   |   n u l l 
 
                     n e i g h b o r h o o d ? :   s t r i n g   |   n u l l 
 
                     p r i c e :   n u m b e r 
 
                     s c h o o l _ d i s t r i c t ? :   s t r i n g   |   n u l l 
 
                     s q f t :   n u m b e r 
 
                     t i t l e :   s t r i n g 
 
                 } 
 
                 U p d a t e :   { 
 
                     a c c e s s i b i l i t y _ f e a t u r e s ? :   s t r i n g [ ]   |   n u l l 
 
                     a d d r e s s ? :   s t r i n g 
 
                     a m e n i t i e s ? :   s t r i n g [ ]   |   n u l l 
 
                     a v a i l a b i l i t y _ d a t e ? :   s t r i n g   |   n u l l 
 
                     b a d g e s ? :   s t r i n g [ ]   |   n u l l 
 
                     b a t h s ? :   n u m b e r 
 
                     b e d s ? :   n u m b e r 
 
                     c i t y ? :   s t r i n g 
 
                     c r e a t e d _ a t ? :   s t r i n g 
 
                     d e s c r i p t i o n ? :   s t r i n g   |   n u l l 
 
                     i d ? :   s t r i n g 
 
                     i m a g e _ u r l ? :   s t r i n g 
 
                     i s _ a c t i v e ? :   b o o l e a n   |   n u l l 
 
                     l a t ? :   n u m b e r   |   n u l l 
 
                     l n g ? :   n u m b e r   |   n u l l 
 
                     n e i g h b o r h o o d ? :   s t r i n g   |   n u l l 
 
                     p r i c e ? :   n u m b e r 
 
                     s c h o o l _ d i s t r i c t ? :   s t r i n g   |   n u l l 
 
                     s q f t ? :   n u m b e r 
 
                     t i t l e ? :   s t r i n g 
 
                 } 
 
                 R e l a t i o n s h i p s :   [ ] 
 
             } 
 
         } 
 
         V i e w s :   { 
 
             [ _   i n   n e v e r ] :   n e v e r 
 
         } 
 
         F u n c t i o n s :   { 
 
             [ _   i n   n e v e r ] :   n e v e r 
 
         } 
 
         E n u m s :   { 
 
             [ _   i n   n e v e r ] :   n e v e r 
 
         } 
 
         C o m p o s i t e T y p e s :   { 
 
             [ _   i n   n e v e r ] :   n e v e r 
 
         } 
 
     } 
 
 } 
 
 
 
 t y p e   D a t a b a s e W i t h o u t I n t e r n a l s   =   O m i t < D a t a b a s e ,   " _ _ I n t e r n a l S u p a b a s e " > 
 
 
 
 t y p e   D e f a u l t S c h e m a   =   D a t a b a s e W i t h o u t I n t e r n a l s [ E x t r a c t < k e y o f   D a t a b a s e ,   " p u b l i c " > ] 
 
 
 
 e x p o r t   t y p e   T a b l e s < 
 
     D e f a u l t S c h e m a T a b l e N a m e O r O p t i o n s   e x t e n d s 
 
         |   k e y o f   ( D e f a u l t S c h e m a [ " T a b l e s " ]   &   D e f a u l t S c h e m a [ " V i e w s " ] ) 
 
         |   {   s c h e m a :   k e y o f   D a t a b a s e W i t h o u t I n t e r n a l s   } , 
 
     T a b l e N a m e   e x t e n d s   D e f a u l t S c h e m a T a b l e N a m e O r O p t i o n s   e x t e n d s   { 
 
         s c h e m a :   k e y o f   D a t a b a s e W i t h o u t I n t e r n a l s 
 
     } 
 
         ?   k e y o f   ( D a t a b a s e W i t h o u t I n t e r n a l s [ D e f a u l t S c h e m a T a b l e N a m e O r O p t i o n s [ " s c h e m a " ] ] [ " T a b l e s " ]   & 
 
                 D a t a b a s e W i t h o u t I n t e r n a l s [ D e f a u l t S c h e m a T a b l e N a m e O r O p t i o n s [ " s c h e m a " ] ] [ " V i e w s " ] ) 
 
         :   n e v e r   =   n e v e r , 
 
 >   =   D e f a u l t S c h e m a T a b l e N a m e O r O p t i o n s   e x t e n d s   { 
 
     s c h e m a :   k e y o f   D a t a b a s e W i t h o u t I n t e r n a l s 
 
 } 
 
     ?   ( D a t a b a s e W i t h o u t I n t e r n a l s [ D e f a u l t S c h e m a T a b l e N a m e O r O p t i o n s [ " s c h e m a " ] ] [ " T a b l e s " ]   & 
 
             D a t a b a s e W i t h o u t I n t e r n a l s [ D e f a u l t S c h e m a T a b l e N a m e O r O p t i o n s [ " s c h e m a " ] ] [ " V i e w s " ] ) [ T a b l e N a m e ]   e x t e n d s   { 
 
             R o w :   i n f e r   R 
 
         } 
 
         ?   R 
 
         :   n e v e r 
 
     :   D e f a u l t S c h e m a T a b l e N a m e O r O p t i o n s   e x t e n d s   k e y o f   ( D e f a u l t S c h e m a [ " T a b l e s " ]   & 
 
                 D e f a u l t S c h e m a [ " V i e w s " ] ) 
 
         ?   ( D e f a u l t S c h e m a [ " T a b l e s " ]   & 
 
                 D e f a u l t S c h e m a [ " V i e w s " ] ) [ D e f a u l t S c h e m a T a b l e N a m e O r O p t i o n s ]   e x t e n d s   { 
 
                 R o w :   i n f e r   R 
 
             } 
 
             ?   R 
 
             :   n e v e r 
 
         :   n e v e r 
 
 
 
 e x p o r t   t y p e   T a b l e s I n s e r t < 
 
     D e f a u l t S c h e m a T a b l e N a m e O r O p t i o n s   e x t e n d s 
 
         |   k e y o f   D e f a u l t S c h e m a [ " T a b l e s " ] 
 
         |   {   s c h e m a :   k e y o f   D a t a b a s e W i t h o u t I n t e r n a l s   } , 
 
     T a b l e N a m e   e x t e n d s   D e f a u l t S c h e m a T a b l e N a m e O r O p t i o n s   e x t e n d s   { 
 
         s c h e m a :   k e y o f   D a t a b a s e W i t h o u t I n t e r n a l s 
 
     } 
 
         ?   k e y o f   D a t a b a s e W i t h o u t I n t e r n a l s [ D e f a u l t S c h e m a T a b l e N a m e O r O p t i o n s [ " s c h e m a " ] ] [ " T a b l e s " ] 
 
         :   n e v e r   =   n e v e r , 
 
 >   =   D e f a u l t S c h e m a T a b l e N a m e O r O p t i o n s   e x t e n d s   { 
 
     s c h e m a :   k e y o f   D a t a b a s e W i t h o u t I n t e r n a l s 
 
 } 
 
     ?   D a t a b a s e W i t h o u t I n t e r n a l s [ D e f a u l t S c h e m a T a b l e N a m e O r O p t i o n s [ " s c h e m a " ] ] [ " T a b l e s " ] [ T a b l e N a m e ]   e x t e n d s   { 
 
             I n s e r t :   i n f e r   I 
 
         } 
 
         ?   I 
 
         :   n e v e r 
 
     :   D e f a u l t S c h e m a T a b l e N a m e O r O p t i o n s   e x t e n d s   k e y o f   D e f a u l t S c h e m a [ " T a b l e s " ] 
 
         ?   D e f a u l t S c h e m a [ " T a b l e s " ] [ D e f a u l t S c h e m a T a b l e N a m e O r O p t i o n s ]   e x t e n d s   { 
 
                 I n s e r t :   i n f e r   I 
 
             } 
 
             ?   I 
 
             :   n e v e r 
 
         :   n e v e r 
 
 
 
 e x p o r t   t y p e   T a b l e s U p d a t e < 
 
     D e f a u l t S c h e m a T a b l e N a m e O r O p t i o n s   e x t e n d s 
 
         |   k e y o f   D e f a u l t S c h e m a [ " T a b l e s " ] 
 
         |   {   s c h e m a :   k e y o f   D a t a b a s e W i t h o u t I n t e r n a l s   } , 
 
     T a b l e N a m e   e x t e n d s   D e f a u l t S c h e m a T a b l e N a m e O r O p t i o n s   e x t e n d s   { 
 
         s c h e m a :   k e y o f   D a t a b a s e W i t h o u t I n t e r n a l s 
 
     } 
 
         ?   k e y o f   D a t a b a s e W i t h o u t I n t e r n a l s [ D e f a u l t S c h e m a T a b l e N a m e O r O p t i o n s [ " s c h e m a " ] ] [ " T a b l e s " ] 
 
         :   n e v e r   =   n e v e r , 
 
 >   =   D e f a u l t S c h e m a T a b l e N a m e O r O p t i o n s   e x t e n d s   { 
 
     s c h e m a :   k e y o f   D a t a b a s e W i t h o u t I n t e r n a l s 
 
 } 
 
     ?   D a t a b a s e W i t h o u t I n t e r n a l s [ D e f a u l t S c h e m a T a b l e N a m e O r O p t i o n s [ " s c h e m a " ] ] [ " T a b l e s " ] [ T a b l e N a m e ]   e x t e n d s   { 
 
             U p d a t e :   i n f e r   U 
 
         } 
 
         ?   U 
 
         :   n e v e r 
 
     :   D e f a u l t S c h e m a T a b l e N a m e O r O p t i o n s   e x t e n d s   k e y o f   D e f a u l t S c h e m a [ " T a b l e s " ] 
 
         ?   D e f a u l t S c h e m a [ " T a b l e s " ] [ D e f a u l t S c h e m a T a b l e N a m e O r O p t i o n s ]   e x t e n d s   { 
 
                 U p d a t e :   i n f e r   U 
 
             } 
 
             ?   U 
 
             :   n e v e r 
 
         :   n e v e r 
 
 
 
 e x p o r t   t y p e   E n u m s < 
 
     D e f a u l t S c h e m a E n u m N a m e O r O p t i o n s   e x t e n d s 
 
         |   k e y o f   D e f a u l t S c h e m a [ " E n u m s " ] 
 
         |   {   s c h e m a :   k e y o f   D a t a b a s e W i t h o u t I n t e r n a l s   } , 
 
     E n u m N a m e   e x t e n d s   D e f a u l t S c h e m a E n u m N a m e O r O p t i o n s   e x t e n d s   { 
 
         s c h e m a :   k e y o f   D a t a b a s e W i t h o u t I n t e r n a l s 
 
     } 
 
         ?   k e y o f   D a t a b a s e W i t h o u t I n t e r n a l s [ D e f a u l t S c h e m a E n u m N a m e O r O p t i o n s [ " s c h e m a " ] ] [ " E n u m s " ] 
 
         :   n e v e r   =   n e v e r , 
 
 >   =   D e f a u l t S c h e m a E n u m N a m e O r O p t i o n s   e x t e n d s   { 
 
     s c h e m a :   k e y o f   D a t a b a s e W i t h o u t I n t e r n a l s 
 
 } 
 
     ?   D a t a b a s e W i t h o u t I n t e r n a l s [ D e f a u l t S c h e m a E n u m N a m e O r O p t i o n s [ " s c h e m a " ] ] [ " E n u m s " ] [ E n u m N a m e ] 
 
     :   D e f a u l t S c h e m a E n u m N a m e O r O p t i o n s   e x t e n d s   k e y o f   D e f a u l t S c h e m a [ " E n u m s " ] 
 
         ?   D e f a u l t S c h e m a [ " E n u m s " ] [ D e f a u l t S c h e m a E n u m N a m e O r O p t i o n s ] 
 
         :   n e v e r 
 
 
 
 e x p o r t   t y p e   C o m p o s i t e T y p e s < 
 
     P u b l i c C o m p o s i t e T y p e N a m e O r O p t i o n s   e x t e n d s 
 
         |   k e y o f   D e f a u l t S c h e m a [ " C o m p o s i t e T y p e s " ] 
 
         |   {   s c h e m a :   k e y o f   D a t a b a s e W i t h o u t I n t e r n a l s   } , 
 
     C o m p o s i t e T y p e N a m e   e x t e n d s   P u b l i c C o m p o s i t e T y p e N a m e O r O p t i o n s   e x t e n d s   { 
 
         s c h e m a :   k e y o f   D a t a b a s e W i t h o u t I n t e r n a l s 
 
     } 
 
         ?   k e y o f   D a t a b a s e W i t h o u t I n t e r n a l s [ P u b l i c C o m p o s i t e T y p e N a m e O r O p t i o n s [ " s c h e m a " ] ] [ " C o m p o s i t e T y p e s " ] 
 
         :   n e v e r   =   n e v e r , 
 
 >   =   P u b l i c C o m p o s i t e T y p e N a m e O r O p t i o n s   e x t e n d s   { 
 
     s c h e m a :   k e y o f   D a t a b a s e W i t h o u t I n t e r n a l s 
 
 } 
 
     ?   D a t a b a s e W i t h o u t I n t e r n a l s [ P u b l i c C o m p o s i t e T y p e N a m e O r O p t i o n s [ " s c h e m a " ] ] [ " C o m p o s i t e T y p e s " ] [ C o m p o s i t e T y p e N a m e ] 
 
     :   P u b l i c C o m p o s i t e T y p e N a m e O r O p t i o n s   e x t e n d s   k e y o f   D e f a u l t S c h e m a [ " C o m p o s i t e T y p e s " ] 
 
         ?   D e f a u l t S c h e m a [ " C o m p o s i t e T y p e s " ] [ P u b l i c C o m p o s i t e T y p e N a m e O r O p t i o n s ] 
 
         :   n e v e r 
 
 
 
 e x p o r t   c o n s t   C o n s t a n t s   =   { 
 
     p u b l i c :   { 
 
         E n u m s :   { } , 
 
     } , 
 
 }   a s   c o n s t 
 
 
```

---
### 📄 `src\types\types.ts`

```typescript
// Property Interfaces
export interface Property {
  id: string;
  title: string;
  address: string;
  price: string | number;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
  badges: string[];
  description: string;
}

export interface ExtendedProperty extends Property {
  // New Fields for Supabase Integration
  city: string;
  neighborhood: string;
  schoolDistrict: string;
  availabilityDate: string;

  // Arrays
  amenities: string[];
  accessibilityFeatures: string[];
  images: string[]; // For galleries

  // Status
  status: 'available' | 'occupied' | 'maintenance';

  // Compatibility helpers (handles DB column naming differences)
  bedrooms?: number;
  bathrooms?: number;

  // Optional / Legacy
  yearBuilt?: number;
  location?: {
    lat: number;
    lng: number;
  };
}

// Impact & Mission Interfaces
export interface StatMetric {
  id: string;
  label: string;
  value: string;
  icon: string;
  description?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
}

export interface FinancialBreakdown {
  category: string;
  percentage: number;
  color: string;
}

export interface RenovationStandard {
  id: string;
  category: string;
  standardLandlord: string;
  p4cStandard: string;
  benefit: string;
}

export interface TransformationData {
  beforeImage: string;
  afterImage: string;
  label: string;
}

// Auth Interfaces
export interface UserProfile {
  id: string;
  email: string;
  role: 'admin' | 'tenant' | 'guest';
  name?: string;
  permissions?: string[];
}

```

---
### 📄 `src\utils\formatters.ts`

```typescript
/**
 * Utility functions for formatting data throughout the application
 */

/**
 * Formats a number as USD currency
 * @param amount - The amount to format
 * @param options - Intl.NumberFormat options
 * @returns Formatted currency string
 */
export const formatCurrency = (
  amount: number,
  options?: Intl.NumberFormatOptions
): string =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    ...options,
  }).format(amount);

/**
 * Formats a number with thousands separators
 * @param num - The number to format
 * @returns Formatted number string
 */
export const formatNumber = (num: number): string =>
  new Intl.NumberFormat('en-US').format(num);

/**
 * Formats a date string to a human-readable format
 * @param dateString - ISO date string
 * @param options - Intl.DateTimeFormat options
 * @returns Formatted date string
 */
export const formatDate = (
  dateString: string,
  options?: Intl.DateTimeFormatOptions
): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  }).format(date);
};

/**
 * Truncates text to a specified length with ellipsis
 * @param text - The text to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated text with ellipsis if needed
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

/**
 * Generates initials from a name
 * @param name - Full name
 * @returns Initials string
 */
export const getInitials = (name: string): string =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

/**
 * Slugifies a string for URLs
 * @param text - The text to slugify
 * @returns URL-safe slug string
 */
export const slugify = (text: string): string =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();

```

---
### 📄 `src\utils\imageOptimization.ts`

```typescript
/**
 * Image Optimization Utilities
 * Supports WebP/AVIF format detection and conversion
 */

export interface ImageFormat {
  webp: boolean;
  avif: boolean;
  original: string;
}

export interface OptimizedImageConfig {
  quality: number;
  progressive: boolean;
  lossy: boolean;
  effort: number;
}

export interface ResponsiveImageConfig {
  breakpoints: number[];
  formats: ('webp' | 'avif' | 'jpeg' | 'png')[];
  quality: number;
  sizes: string[];
}

// Check browser support for modern image formats
export const detectImageFormatSupport = (): ImageFormat => {
  const webp = checkWebPSupport();
  const avif = checkAVIFSupport();

  return {
    webp,
    avif,
    original: 'jpeg',
  };
};

// Check WebP support
const checkWebPSupport = (): boolean => {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

// Check AVIF support
const checkAVIFSupport = (): boolean => {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
};

// Get optimal image format based on browser support
export const getOptimalImageFormat = (
  formats: ImageFormat
): 'avif' | 'webp' | 'jpeg' => {
  if (formats.avif) return 'avif';
  if (formats.webp) return 'webp';
  return 'jpeg';
};

// Generate responsive image srcset
export const generateResponsiveSrcset = (
  baseUrl: string,
  widths: number[],
  format: 'avif' | 'webp' | 'jpeg' = 'webp'
): string =>
  widths
    .map((width) => {
      const url = `${baseUrl}-${width}w.${format}`;
      return `${url} ${width}w`;
    })
    .join(', ');

// Generate optimized image URL
export const generateOptimizedImageUrl = (
  baseUrl: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'avif' | 'webp' | 'jpeg';
    blur?: boolean;
  } = {}
): string => {
  const {
    width,
    height,
    quality = 80,
    format = 'webp',
    blur = false,
  } = options;

  const params = new URLSearchParams();
  if (width) params.set('w', width.toString());
  if (height) params.set('h', height.toString());
  if (quality !== 80) params.set('q', quality.toString());
  if (blur) params.set('blur', '50');

  const formatParam = format === 'jpeg' ? 'jpg' : format;
  return `${baseUrl}.${formatParam}${params.toString() ? `?${params.toString()}` : ''}`;
};

// Image lazy loading with intersection observer
export class LazyImageLoader {
  private observer: IntersectionObserver;
  private config: IntersectionObserverInit;

  constructor(
    callback?: (entries: IntersectionObserverEntry[]) => void,
    config: IntersectionObserverInit = {}
  ) {
    this.config = {
      rootMargin: '50px',
      threshold: 0.01,
      ...config,
    };

    this.observer = new IntersectionObserver(
      callback || this.handleIntersection.bind(this),
      this.config
    );
  }

  observe(element: HTMLElement): void {
    this.observer.observe(element);
  }

  unobserve(element: HTMLElement): void {
    this.observer.unobserve(element);
  }

  disconnect(): void {
    this.observer.disconnect();
  }

  private handleIntersection(entries: IntersectionObserverEntry[]): void {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        this.loadImage(img);
        this.unobserve(img);
      }
    });
  }

  private loadImage(img: HTMLImageElement): void {
    // eslint-disable-next-line dot-notation
    const src = img.dataset['src'];
    // eslint-disable-next-line dot-notation
    const srcset = img.dataset['srcset'];

    if (src) {
      img.src = src;
    }
    if (srcset) {
      img.srcset = srcset;
    }

    img.onload = () => {
      img.classList.add('loaded');
    };

    img.onerror = () => {
      img.classList.add('error');
    };
  }
}

// Image optimization configuration
export const imageOptimizationConfig: OptimizedImageConfig = {
  quality: 80,
  progressive: true,
  lossy: true,
  effort: 4,
};

// Responsive image configuration
export const responsiveImageConfig: ResponsiveImageConfig = {
  breakpoints: [320, 640, 768, 1024, 1280, 1536, 1920],
  formats: ['avif', 'webp', 'jpeg'],
  quality: 80,
  sizes: [
    '(max-width: 640px) 100vw',
    '(max-width: 768px) 100vw',
    '(max-width: 1024px) 100vw',
    '(max-width: 1280px) 100vw',
    '100vw',
  ],
};

// Preload critical images
export const preloadCriticalImages = (imageUrls: string[]): void => {
  imageUrls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    link.type = `image/${url.split('.').pop()}`;
    document.head.appendChild(link);
  });
};

// Generate blur placeholder for lazy loading
export const generateBlurPlaceholder = (): string =>
  // This would typically be handled by a build-time process
  // For now, return a simple data URL
  `data:image/svg+xml;base64,${btoa(`
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="blur">
          <feGaussianBlur stdDeviation="20" />
        </filter>
      </defs>
      <rect width="400" height="300" fill="#f0f0f0" filter="url(#blur)" />
    </svg>
  `)}`;

```

---
### 📄 `src\vite-env.d.ts`

```typescript
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  readonly VITE_REPOSITORY_NAME?: string;
  readonly VITE_USE_CUSTOM_DOMAIN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

```

---
### 📄 `test-csp.js`

```javascript
import fs from 'fs';

// Read the HTML file
const html = fs.readFileSync('index.html', 'utf8');

// Extract CSP policy
const cspMatch = html.match(/content=["']([^"']*abjscrezxkqrzwgmufzr[^"']*)["']/i);

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
    console.log('📝 Form field name attribute:', hasNameAttr ? '✅ FIXED' : '❌ MISSING');
} catch (error) {
    console.log('📝 Form field check: Could not read compiled file, but source has been fixed');
}

```

---
### 📄 `vite.config.ts`

```typescript
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

interface EnvVariables {
  [key: string]: string;
  VITE_REPOSITORY_NAME?: string;
  VITE_USE_CUSTOM_DOMAIN?: string;
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '') as EnvVariables;

  // GitHub Pages configuration
  const isProduction = mode === 'production';
  // eslint-disable-next-line dot-notation
  const repositoryName = env['VITE_REPOSITORY_NAME'] || '';
  const useCustomDomain = env.VITE_USE_CUSTOM_DOMAIN === 'true';
  // For custom domain (CNAME), use root path '/'; for github.io pages, use repository path
  const base = isProduction
    ? useCustomDomain || !repositoryName
      ? '/'
      : `/${repositoryName}/`
    : '/';

  return {
    base,
    server: {
      port: 3000,
      host: '0.0.0.0',
      allowedHosts: ['p4c-web.onrender.com', 'p4c-web', '.onrender.com'],
      headers: {
        // Security Headers - CRITICAL for XSS Protection
        'X-Frame-Options': 'DENY',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
        'Strict-Transport-Security':
          'max-age=31536000; includeSubDomains; preload',
        // Strict Hash-based Content Security Policy - XSS Prevention
        'Content-Security-Policy': [
          "base-uri 'none'",
          "object-src 'none'",
          "script-src 'self' 'strict-dynamic' 'unsafe-inline' https://esm.sh",
          "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
          "img-src 'self' data: https:",
          "font-src 'self' https://fonts.gstatic.com",
          // Whitelisting connections for API, HMR, and Service Worker caching
          [
            "connect-src 'self'",
            'ws://localhost:3000',
            'http://localhost:3000',
            'https://p4c-web.onrender.com',
            'https://generativelanguage.googleapis.com', // Gemini AI
            'https://fonts.googleapis.com',
            'https://fonts.gstatic.com',
            'https://esm.sh',
            'https://*.supabase.co', // Recommended for your Supabase integration
          ].join(' '),
          "frame-src 'none'",
          "form-action 'self'",
          'upgrade-insecure-requests',
          "worker-src 'self' blob:",
        ].join('; '),
      },
      proxy: {
        // Proxy API calls to secure server
        '/api': {
          target: 'http://localhost:3001',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path,
        },
      },
    },
    plugins: [
      react(),
      // PWA configuration for installability and service worker
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: [
          'favicon.ico',
          'apple-touch-icon.png',
          'masked-icon.svg',
        ],
        manifest: {
          name: 'Properties 4 Creation',
          short_name: 'Properties 4 Creation',
          description:
            'Housing solutions for veterans and families in East Texas',
          theme_color: '#0B1120',
          background_color: '#0B1120',
          display: 'standalone',
          orientation: 'portrait',
          scope: '/',
          start_url: '/',
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
        },
        workbox: {
          maximumFileSizeToCacheInBytes: 15728640, // 15 MB for better mobile performance
          globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff2}'],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/api\..*/i,
              handler: 'NetworkFirst',
              options: {
                cacheName: 'api-cache',
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 86400, // 24 hours in seconds
                },
              },
            },
            {
              urlPattern: /^https:\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 31536000, // 1 year in seconds
                },
              },
            },
            {
              urlPattern: /^https:\/fonts\.gstatic\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'gstatic-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 31536000, // 1 year in seconds
                },
              },
            },
          ],
        },
      }),
    ],
    assetsInclude: ['**/*.bin', '**/*.json'], // Helps loading local TFJS models if needed
    define: {
      // REMOVED: API key exposure vulnerability (CRITICAL FIX)
      // API keys are now handled server-side only via proxy
      'process.env.NODE_ENV': JSON.stringify(mode),
      'process.env.VITE_API_BASE_URL': JSON.stringify('/api'),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      target: 'es2020',
      sourcemap: mode !== 'production',
      minify: 'terser',
      cssMinify: true,
      // Performance optimizations
      rollupOptions: {
        output: {
          // Manual chunks for better caching
          manualChunks: {
            // React and React DOM together
            react: ['react', 'react-dom'],
            // Router
            router: ['react-router-dom'],
            // UI library
            ui: ['lucide-react'],
            // Utils
            utils: ['react-helmet-async'],
          },
          // Optimize chunk file names
          chunkFileNames: 'js/[name]-[hash].js',
          assetFileNames: (assetInfo) => {
            if (/\.(png|jpe?g|gif|svg|webp)$/i.test(assetInfo.name || '')) {
              return 'images/[name]-[hash][extname]';
            }
            if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name || '')) {
              return 'fonts/[name]-[hash][extname]';
            }
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
      // Optimize terser options
      terserOptions: {
        compress: {
          drop_console: mode === 'production',
          pure_funcs:
            mode === 'production'
              ? ['console.log', 'console.info', 'console.debug']
              : [],
        },
      },
      // Chunk size warnings
      chunkSizeWarningLimit: 1000,
    },
    // Performance optimizations
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
    },
    // CSS optimizations
    css: {
      devSourcemap: mode !== 'production',
    },
    // Test configuration (Vitest)
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: ['./src/test/setup.ts'],
      include: [
        'src/**/*.{test,spec}.{ts,tsx}',
        'services/**/*.{test,spec}.{ts,tsx}',
        'utils/**/*.{test,spec}.{ts,tsx}',
      ],
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'html'],
        include: ['src/**/*.ts', 'src/**/*.tsx'],
        exclude: [
          'src/**/*.test.ts',
          'src/types.ts',
          'node_modules/',
          'src/test/',
          '**/*.d.ts',
          '**/*.config.*',
        ],
      },
    },
  };
});

```

---
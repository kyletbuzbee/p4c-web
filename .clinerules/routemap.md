# CODEBASE_MAP (Non-page modules)

This map focuses on reusable components, app infrastructure, context/providers,
services, utilities, and scripts (excluding route-level page files).

## App shell / routing

| File                                | Purpose                                                                                                                            |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `src/App.tsx`                       | App composition root: wraps providers (toast/auth/dark mode/image format), mounts layout (Navbar/Footer/etc.), and defines routes. |
| `src/components/ProtectedRoute.tsx` | Route gate: checks auth/loading state and optional role; redirects unauthenticated users to `/portal`.                             |
| `src/components/ScrollToTop.tsx`    | Scroll-reset on route changes using `useLocation()` + `window.scrollTo(0, 0)`.                                                     |

## Prominent UI components

| File                                         | Purpose                                                                                        |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `src/components/Navbar.tsx`                  | Global navigation UI (not expanded in the available excerpt).                                  |
| `src/components/Footer.tsx`                  | Global footer with brand/mission block, navigation links, social links, and legal links.       |
| `src/components/Hero.tsx`                    | Reusable hero section with background media, mission messaging, and primary CTAs.              |
| `src/components/PropertyCard.tsx`            | Property listing card with lazy image loading, badge rendering, and a details link.            |
| `src/components/PropertyDetailsSkeleton.tsx` | Skeleton loader for the property details experience.                                           |
| `src/components/Skeleton.tsx`                | Base skeleton component (pulse + rounded style) used across skeleton UIs.                      |
| `src/components/AdminDashboardSkeleton.tsx`  | Skeleton UI for the admin dashboard (sidebar + stats + table placeholder).                     |
| `src/components/AddPropertyModal.tsx`        | Admin modal for creating property listings via the API layer; uses toasts for success/failure. |

## Accessibility & UX helpers

| File                                    | Purpose                                                                                                                              |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `src/components/SkipLink.tsx`           | Keyboard-first skip navigation link that focuses `#main-content` and can be dismissed.                                               |
| `src/components/AccessibilityTools.tsx` | Floating accessibility panel: font sizing, contrast modes, reading/focus modes, optional speech assistance, plus keyboard shortcuts. |
| `src/components/CookieConsent.tsx`      | Cookie banner that persists consent in `localStorage` and links to `/privacy`.                                                       |
| `src/components/DarkModeToggle.tsx`     | Theme toggle button driven by the dark-mode context.                                                                                 |

## Media & images

| File                                | Purpose                                                                                                           |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `src/components/OptimizedImage.tsx` | Responsive image component (multiple formats/`picture` sources, lazy loading hooks).                              |
| `src/components/ImageOptimizer.tsx` | Progressive image loading helper component (handles loading/error states).                                        |
| `src/utils/imageOptimization.ts`    | Image URL/srcset helpers used by `OptimizedImage` and related components (not expanded in the available excerpt). |
| `src/constants/images.ts`           | Central asset registry (`IMAGES`) mapping semantic names to physical file paths.                                  |

## Reliability, error handling, and PWA

| File                                    | Purpose                                                                                                                        |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `src/components/ErrorBoundary.tsx`      | Error boundary that creates an error id, sanitizes error details, optionally logs, and provides user recovery actions.         |
| `src/components/UpdateNotification.tsx` | Listens for a `p4c-sw-update` event and prompts users to refresh via the service worker update hook.                           |
| `src/pwa-register.ts`                   | Service worker registration + update event dispatch (present in the project structure; not expanded in the available excerpt). |

## Bot / chat UI

| File                                     | Purpose                                                                                                   |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `src/components/BotAvatar.tsx`           | SVG “Digital Architect” avatar (brand colored).                                                           |
| `src/components/bot/BotToggle.tsx`       | Button to open the support/chat experience.                                                               |
| `src/components/bot/ChatHeader.tsx`      | Header for the chat UI showing avatar + status.                                                           |
| `src/services/botpressWebchatService.ts` | Botpress webchat integration layer (present in project structure; not expanded in the available excerpt). |
| `src/services/botpressService.ts`        | Botpress service wrapper (present in project structure; not expanded in the available excerpt).           |

## Client tools (in-app utilities)

| File                                   | Purpose                                                                                                                            |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `src/components/ClientUpscaler.tsx`    | Client-side image upscaler UI (upload → upscale → download), dynamically imports an upscaler library and validates file size/type. |
| `src/components/BeforeAfterSlider.tsx` | Before/after renovation slider built around a range input.                                                                         |

## Context providers (global state)

| File                                  | Purpose                                                                                      |
| ------------------------------------- | -------------------------------------------------------------------------------------------- |
| `src/context/AuthContext.tsx`         | Auth state provider (consumed by `ProtectedRoute`).                                          |
| `src/context/DarkModeContext.tsx`     | Dark-mode provider + `useDarkMode()` hook (consumed by `DarkModeToggle`).                    |
| `src/context/ImageFormatContext.tsx`  | Tracks image-format support/preference for optimized media delivery.                         |
| `src/context/ToastContext.tsx`        | Toast/notification provider (consumed by `AddPropertyModal`, `ErrorBoundary`, etc.).         |
| `src/context/EnhancedAuthContext.tsx` | Enhanced auth context (present in project structure; not expanded in the available excerpt). |

## Services & data access

| File                        | Purpose                                                                                                                       |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `src/services/api.ts`       | API client layer used by UI (e.g., create properties).                                                                        |
| `src/lib/supabaseClient.ts` | Supabase client initialization (present in project structure; not expanded in the available excerpt).                         |
| `src/data/properties.ts`    | Local properties dataset used by tooling/content audit (present in project structure; not expanded in the available excerpt). |

## Audits, tests, and scripts

| File                                      | Purpose                                                                                                  |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `scripts/content-audit.ts`                | Runs content balance audit and exits non-zero on target mismatch (CI-friendly).                          |
| `scripts/content-audit.js`                | Wrapper to execute the TypeScript audit script in different environments.                                |
| `src/utils/contentBalanceAuditor.ts`      | Computes content category percentages + recommendations for the content audit.                           |
| `src/utils/contentBalanceAuditor.test.ts` | Tests for the content balance audit logic.                                                               |
| `src/services/botpressService.test.ts`    | Tests around botpress integration (present in project structure; not expanded in the available excerpt). |

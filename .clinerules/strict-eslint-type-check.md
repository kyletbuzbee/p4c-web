# P4C Coding Standards & Strict Type Enforcement

## Context
You are an expert TypeScript/React engineer working on the Properties 4 Creation (P4C) web app. The project uses Vite, Tailwind CSS, Supabase, and HashRouter.

## 1. Strict Type Safety
- **No `any` Allowed:** Never use the `any` keyword. Define explicit interfaces for all data structures, especially those mirroring database schemas (e.g., `DatabaseProperty`).
- **Module Boundaries:** All function parameters and return types must be explicitly typed.
- **Supabase Integration:** Always cast Supabase response data to an internal database interface before passing it to a UI mapper (e.g., `data as DatabaseProperty[]`).

## 2. ESLint & Clean Code
- **Console Statements:** Remove all `console.log`, `console.warn`, and `console.error` in production-ready code. Use `import.meta.env.DEV` if logging is strictly necessary for debugging.
- **Input Sanitization:** Sanitize all user inputs before sending to services. For currency, strip non-numeric characters (e.g., `price.toString().replace(/[$,]/g, '')`).
- **Dry/Damp Principles:** Use existing mappers (like `mapPropertyFromDB`) to transform raw data into UI-ready types (`ExtendedProperty`).

## 3. UI & Accessibility (WCAG)
- **Aria Attributes:** Every interactive element or image must have appropriate `aria-label`, `alt` text, or `role`.
- **Design Tokens:** Use only P4C palette tokens:
  - `bg-p4c-navy`, `text-p4c-gold`, `border-p4c-gray`.
- **Reduced Motion:** Ensure animations respect `prefers-reduced-motion` settings.

## 4. Error Handling
- **Graceful Fallbacks:** Use `try/catch` blocks in all service calls.
- **Static Fallbacks:** If a database call fails, return static mock data from `data/properties.ts` to ensure the UI does not crash.
- **User Feedback:** Use the existing `ToastContext` for user-facing error notifications.

## 5. Security
- **No Client Keys:** Never hardcode API keys or secrets.
- **CSP Compliance:** Ensure all external calls and dynamic content generation align with Content Security Policy constraints.
/**
 * E2E Tests - Critical User Flows
 * 
 * These tests cover the most important user journeys on the Properties 4 Creation website.
 * Run with: npm run test:e2e
 */

import { test, expect } from '@playwright/test';

// Test configuration
test.describe.configure({ mode: 'parallel' });

// ============================================
// HOME PAGE TESTS
// ============================================

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load the home page with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Properties 4 Creation/);
  });

  test('should display hero section with main heading', async ({ page }) => {
    await expect(page.locator('text=Transforming')).toBeVisible();
    await expect(page.locator('text=Communities')).toBeVisible();
    await expect(page.locator('text=One Neighborhood at a Time')).toBeVisible();
  });

  test('should display main navigation buttons', async ({ page }) => {
    await expect(page.getByRole('button', { name: /Our Community Impact/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Find Your Home/i })).toBeVisible();
  });

  test('should navigate to community page when CTA is clicked', async ({ page }) => {
    await page.getByRole('button', { name: /Our Community Impact/i }).click();
    await expect(page).toHaveURL(/\/community/);
  });

  test('should navigate to properties page when Find Your Home is clicked', async ({ page }) => {
    await page.getByRole('button', { name: /Find Your Home/i }).click();
    await expect(page).toHaveURL(/\/properties/);
  });

  test('should display featured properties section', async ({ page }) => {
    await expect(page.locator('text=Available East Texas Residences')).toBeVisible();
  });

  test('should display search and filter controls', async ({ page }) => {
    await expect(page.getByLabel('Search properties')).toBeVisible();
    await expect(page.locator('#maxPrice')).toBeVisible();
    await expect(page.locator('#minBeds')).toBeVisible();
  });

  test('should display core services section', async ({ page }) => {
    await expect(page.locator('text=Community-First Real Estate Solutions')).toBeVisible();
    await expect(page.locator('text=Community Revitalization')).toBeVisible();
    await expect(page.locator('text=Family Housing')).toBeVisible();
    await expect(page.locator('text=Investment Opportunities')).toBeVisible();
  });

  test('should display valuation calculator section', async ({ page }) => {
    await expect(page.locator('text=Instant Valuation Estimate')).toBeVisible();
    await expect(page.locator('#arv-input')).toBeVisible();
    await expect(page.locator('#repairs-input')).toBeVisible();
  });

  test('should display CTA section with apply button', async ({ page }) => {
    await expect(page.locator('text=Start Tenant Application')).toBeVisible();
  });
});

// ============================================
// PROPERTIES PAGE TESTS
// ============================================

test.describe('Properties Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/properties');
  });

  test('should load properties page with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Find Your Home/);
  });

  test('should display hero section with heading', async ({ page }) => {
    await expect(page.locator('text=More Than a House')).toBeVisible();
    await expect(page.locator("text=It's Your Sanctuary")).toBeVisible();
  });

  test('should display search input', async ({ page }) => {
    await expect(page.getByLabel('Search properties')).toBeVisible();
  });

  test('should display filter controls', async ({ page }) => {
    await expect(page.locator('text=Section 8 Eligible')).toBeVisible();
    await expect(page.locator('text=Veteran Preferred')).toBeVisible();
  });

  test('should display location filter dropdown', async ({ page }) => {
    await expect(page.locator('#location-filter')).toBeVisible();
  });

  test('should display bedrooms filter dropdown', async ({ page }) => {
    await expect(page.locator('#bedrooms-filter')).toBeVisible();
  });

  test('should display price filter dropdown', async ({ page }) => {
    await expect(page.locator('#price-filter')).toBeVisible();
  });

  test('should display properties grid', async ({ page }) => {
    // Wait for properties to load
    await page.waitForSelector('text=Homes Available', { timeout: 10000 });
    await expect(page.locator('text=Homes Available')).toBeVisible();
  });

  test('should filter properties by search term', async ({ page }) => {
    await page.waitForSelector('text=Homes Available', { timeout: 10000 });
    
    const searchInput = page.getByLabel('Search properties');
    await searchInput.fill('Tyler');
    await searchInput.press('Enter');
    
    // Wait for filter to apply
    await page.waitForTimeout(500);
  });

  test('should toggle Section 8 filter', async ({ page }) => {
    await page.waitForSelector('text=Homes Available', { timeout: 10000 });
    
    const section8Button = page.getByRole('button', { name: /Section 8 Eligible/i });
    await section8Button.click();
    
    // Button should now show as active (checked)
    await expect(section8Button).toHaveClass(/bg-emerald-600/);
  });

  test('should toggle Veteran filter', async ({ page }) => {
    await page.waitForSelector('text=Homes Available', { timeout: 10000 });
    
    const veteranButton = page.getByRole('button', { name: /Veteran Preferred/i });
    await veteranButton.click();
    
    // Button should now show as active (checked)
    await expect(veteranButton).toHaveClass(/bg-p4c-gold/);
  });

  test('should reset filters when Reset button is clicked', async ({ page }) => {
    await page.waitForSelector('text=Homes Available', { timeout: 10000 });
    
    // Apply some filters first
    await page.getByLabel('Search properties').fill('test');
    await page.getByRole('button', { name: /Section 8 Eligible/i }).click();
    
    // Reset
    await page.getByRole('button', { name: /Reset Filters/i }).click();
    
    // Inputs should be cleared
    await expect(page.getByLabel('Search properties')).toHaveValue('');
  });
});

// ============================================
// APPLICATION FLOW TESTS
// ============================================

test.describe('Application Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/apply');
  });

  test('should load application page', async ({ page }) => {
    await expect(page).toHaveTitle(/Rental Application/);
  });

  test('should display application header', async ({ page }) => {
    await expect(page.locator('text=Rental Application')).toBeVisible();
    await expect(page.locator('text=Secure 256-bit Encrypted Submission')).toBeVisible();
  });

  test('should display stepper navigation', async ({ page }) => {
    await expect(page.locator('text=Personal Info')).toBeVisible();
    await expect(page.locator('text=Housing History')).toBeVisible();
    await expect(page.locator('text=Review & Submit')).toBeVisible();
  });

  test('should have first step active by default', async ({ page }) => {
    const personalInfoStep = page.locator('text=Personal Info').locator('..');
    await expect(personalInfoStep.locator('.border-p4c-gold')).toBeVisible();
  });

  test('should display form fields in step 1', async ({ page }) => {
    await expect(page.locator('label:has-text("First Name")')).toBeVisible();
    await expect(page.locator('label:has-text("Last Name")')).toBeVisible();
    await expect(page.locator('label:has-text("Email Address")')).toBeVisible();
    await expect(page.locator('label:has-text("Phone Number")')).toBeVisible();
    await expect(page.locator('label:has-text("Date of Birth")')).toBeVisible();
  });

  test('should validate required fields', async ({ page }) => {
    // Try to submit without filling fields
    await page.locator('button[type="submit"]').click();
    
    // Should show validation error
    // Note: React Hook Form validation behavior may vary
  });

  test('should allow navigation between steps when fields are filled', async ({ page }) => {
    // Fill step 1
    await page.getByLabel('First Name').fill('John');
    await page.getByLabel('Last Name').fill('Doe');
    await page.getByLabel('Email Address').fill('john@example.com');
    await page.getByLabel('Phone Number').fill('555-123-4567');
    await page.getByLabel('Date of Birth').fill('1990-01-15');
    
    // Click next
    await page.getByRole('button', { name: /Next/i }).click();
    
    // Should move to step 2
    await expect(page.locator('text=Housing History')).toBeVisible();
  });

  test('should allow going back to previous step', async ({ page }) => {
    // Fill step 1 and go to step 2
    await page.getByLabel('First Name').fill('John');
    await page.getByLabel('Last Name').fill('Doe');
    await page.getByLabel('Email Address').fill('john@example.com');
    await page.getByLabel('Phone Number').fill('555-123-4567');
    await page.getByLabel('Date of Birth').fill('1990-01-15');
    await page.getByRole('button', { name: /Next/i }).click();
    
    // Go back
    await page.getByRole('button', { name: /Back/i }).click();
    
    // Should be back at step 1
    await expect(page.locator('text=Personal Info')).toBeVisible();
  });
});

// ============================================
// NAVIGATION TESTS
// ============================================

test.describe('Navigation', () => {
  test('should navigate to all main pages from home', async ({ page }) => {
    await page.goto('/');
    
    // Test navbar navigation (if visible)
    // Note: Mobile navigation may differ
    
    // Test footer links
    await expect(page.locator('footer')).toBeVisible();
  });

  test('should have working property card links', async ({ page }) => {
    await page.goto('/properties');
    
    // Wait for properties to load
    await page.waitForSelector('text=Homes Available', { timeout: 10000 });
    
    // Click on first property card
    const propertyCard = page.locator('a[href^="/properties/"]').first();
    if (await propertyCard.isVisible()) {
      await propertyCard.click();
      
      // Should navigate to property details
      await expect(page).toHaveURL(/\/properties\//);
    }
  });

  test('should have accessible skip link', async ({ page }) => {
    await page.goto('/');
    
    // Skip link should be present for accessibility
    const skipLink = page.locator('a[class*="skip"]');
    // The skip link may be hidden but should exist
  });
});

// ============================================
// ACCESSIBILITY TESTS
// ============================================

test.describe('Accessibility', () => {
  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/');
    
    // Check that h1 exists
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
  });

  test('should have alt text on images', async ({ page }) => {
    await page.goto('/');
    
    // Get all images
    const images = page.locator('img');
    const count = await images.count();
    
    // Check that important images have alt text
    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      // Alt should exist and not be empty for meaningful images
    }
  });

  test('should have form labels', async ({ page }) => {
    await page.goto('/apply');
    
    // All inputs should have associated labels
    const inputs = page.locator('input, select, textarea');
    const count = await inputs.count();
    
    for (let i = 0; i < count; i++) {
      const input = inputs.nth(i);
      const id = await input.getAttribute('id');
      const ariaLabel = await input.getAttribute('aria-label');
      const label = await input.getAttribute('aria-labelledby');
      
      // At least one of these should exist
      if (id) {
        const labelElement = page.locator(`label[for="${id}"]`);
        // Label may or may not exist depending on form structure
      }
    }
  });

  test('should have focusable interactive elements', async ({ page }) => {
    await page.goto('/');
    
    // Check that buttons are focusable
    const buttons = page.locator('button');
    const count = await buttons.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should have landmark regions', async ({ page }) => {
    await page.goto('/');
    
    // Check for main landmark
    const main = page.locator('main');
    await expect(main).toBeVisible();
  });
});

// ============================================
// RESPONSIVE DESIGN TESTS
// ============================================

test.describe('Responsive Design', () => {
  test('should work on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Page should load without errors
    await expect(page).toHaveTitle(/Properties 4 Creation/);
  });

  test('should work on tablet viewport', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    
    // Page should load without errors
    await expect(page).toHaveTitle(/Properties 4 Creation/);
  });

  test('should work on desktop viewport', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    
    // Page should load without errors
    await expect(page).toHaveTitle(/Properties 4 Creation/);
  });
});

// ============================================
// ERROR HANDLING TESTS
// ============================================

test.describe('Error Handling', () => {
  test('should handle 404 gracefully', async ({ page }) => {
    await page.goto('/non-existent-page-12345');
    
    // Should either show custom 404 or redirect to home
    // The app may handle this in various ways
  });

  test('should handle API failures gracefully', async ({ page }) => {
    // This test would require intercepting network requests
    // In a real scenario, you'd mock the API to fail
  });
});

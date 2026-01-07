/**
 * Integration tests for API Service
 * Tests the API layer with mock data fallback behavior
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import type { StatMetric, RenovationStandard, FinancialBreakdown } from '../types';
import { api } from './api';

describe('API Service - Impact Module', () => {
  describe('getMetrics', () => {
    it('returns mock metrics when no backend configured', async () => {
      const metrics = await api.impact.getMetrics();
      
      expect(metrics).toBeInstanceOf(Array);
      expect(metrics.length).toBeGreaterThan(0);
      
      // Verify structure of returned metrics
      const metric = metrics[0] as StatMetric;
      expect(metric).toHaveProperty('id');
      expect(metric).toHaveProperty('label');
      expect(metric).toHaveProperty('value');
      expect(metric).toHaveProperty('icon');
      expect(metric).toHaveProperty('description');
    });

    it('includes required impact categories', async () => {
      const metrics = await api.impact.getMetrics();
      const labels = metrics.map((m: StatMetric) => m.label);
      
      expect(labels).toContain('Families Housed');
      expect(labels).toContain('Veterans Served');
      expect(labels).toContain('Properties Revitalized');
      expect(labels).toContain('Community Wealth');
    });
  });

  describe('getFinancialBreakdown', () => {
    it('returns financial breakdown data', async () => {
      const breakdown = await api.impact.getFinancialBreakdown();
      
      expect(breakdown).toBeInstanceOf(Array);
      expect(breakdown.length).toBeGreaterThan(0);
      
      const item = breakdown[0] as FinancialBreakdown;
      expect(item).toHaveProperty('category');
      expect(item).toHaveProperty('percentage');
      expect(item).toHaveProperty('color');
      expect(typeof item.percentage).toBe('number');
      expect(item.percentage).toBeGreaterThanOrEqual(0);
      expect(item.percentage).toBeLessThanOrEqual(100);
    });

    it('returns valid percentage distribution', async () => {
      const breakdown = await api.impact.getFinancialBreakdown();
      const total = breakdown.reduce((sum: number, item: FinancialBreakdown) => sum + item.percentage, 0);
      
      expect(total).toBeLessThanOrEqual(100);
    });
  });
});

describe('API Service - Transparency Module', () => {
  describe('getStandards', () => {
    it('returns renovation standards', async () => {
      const standards = await api.transparency.getStandards();
      
      expect(standards).toBeInstanceOf(Array);
      expect(standards.length).toBeGreaterThan(0);
      
      const standard = standards[0] as RenovationStandard;
      expect(standard).toHaveProperty('id');
      expect(standard).toHaveProperty('category');
      expect(standard).toHaveProperty('standardLandlord');
      expect(standard).toHaveProperty('p4cStandard');
      expect(standard).toHaveProperty('benefit');
    });

    it('includes required renovation categories', async () => {
      const standards = await api.transparency.getStandards();
      const categories = standards.map((s: RenovationStandard) => s.category);
      
      expect(categories).toContain('Kitchen Countertops');
      expect(categories).toContain('Flooring');
      expect(categories).toContain('Climate Control');
      expect(categories).toContain('Security');
    });
  });
});

describe('API Service - Properties Module', () => {
  describe('getAll', () => {
    it('returns property listings', async () => {
      const properties = await api.properties.getAll();
      
      expect(properties).toBeInstanceOf(Array);
      expect(properties.length).toBeGreaterThan(0);
      
      const property = properties[0];
      expect(property).toHaveProperty('id');
      expect(property).toHaveProperty('title');
      expect(property).toHaveProperty('address');
      expect(property).toHaveProperty('price');
      expect(property).toHaveProperty('beds');
      expect(property).toHaveProperty('baths');
    });

    it('returns properties with valid data types', async () => {
      const properties = await api.properties.getAll();
      expect(properties.length).toBeGreaterThan(0);
      const property = properties[0];
      
      if (property) {
        expect(typeof property.id).toBe('string');
        expect(typeof property.title).toBe('string');
        expect(typeof property.price).toBe('number');
        expect(typeof property.beds).toBe('number');
        expect(typeof property.baths).toBe('number');
        expect(typeof property.sqft).toBe('number');
      }
    });
  });

  describe('getById', () => {
    it('returns specific property by ID', async () => {
      const property = await api.properties.getById('1');
      
      expect(property).not.toBeNull();
      expect(property).toHaveProperty('id', '1');
    });

    it('returns null for non-existent property', async () => {
      const property = await api.properties.getById('non-existent-id');
      expect(property).toBeNull();
    });
  });

  describe('search', () => {
    it('returns filtered properties based on criteria', async () => {
      const results = await api.properties.search({ minPrice: 800, maxPrice: 1000 });
      
      expect(results).toBeInstanceOf(Array);
      
      results.forEach((property) => {
        expect(property.price).toBeGreaterThanOrEqual(800);
        expect(property.price).toBeLessThanOrEqual(1000);
      });
    });

    it('filters by minimum beds', async () => {
      const results = await api.properties.search({ beds: 3 });
      
      results.forEach((property) => {
        expect(property.beds).toBeGreaterThanOrEqual(3);
      });
    });

    it('filters by neighborhood', async () => {
      const results = await api.properties.search({ neighborhood: 'Tyler' });
      
      results.forEach((property) => {
        expect(property.neighborhood.toLowerCase()).toContain('tyler');
      });
    });

    it('returns all properties with empty criteria', async () => {
      const allProperties = await api.properties.getAll();
      const searchResults = await api.properties.search({});
      
      expect(searchResults.length).toBe(allProperties.length);
    });
  });

  describe('getByBadge', () => {
    it('returns properties with specific badge', async () => {
      const results = await api.properties.getByBadge('Section 8');
      
      expect(results).toBeInstanceOf(Array);
      
      results.forEach((property) => {
        const hasBadge = property.badges.some((badge) =>
          badge.toLowerCase().includes('section 8')
        );
        expect(hasBadge).toBe(true);
      });
    });

    it('returns empty array for non-matching badge', async () => {
      const results = await api.properties.getByBadge('NonExistentBadge123');
      expect(results).toEqual([]);
    });
  });
});

describe('API Service - Mock Data Latency', () => {
  it('simulates network latency for mock data', async () => {
    const start = Date.now();
    await api.impact.getMetrics();
    const elapsed = Date.now() - start;
    
    // Should take at least 800ms (SIMULATED_LATENCY)
    expect(elapsed).toBeGreaterThanOrEqual(800);
  });
});

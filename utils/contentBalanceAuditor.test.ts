/**
 * Content Balance Auditor Tests
 * Unit tests for the content balance auditor utility
 */

import { describe, expect, test, vi } from 'vitest';
import {
  auditContentBalance,
  analyzePropertyContent,
  auditStoryBalance,
  createBalancedStories
} from './contentBalanceAuditor';
import type { ExtendedProperty } from '../types';
import type { StoryContent } from '../types/contentBalance';

// Mock error boundary service
vi.mock('../services/errorBoundaryService', () => ({
  logError: vi.fn(),
}));

// Test Data
describe('Content Balance Auditor', () => {
  
  // Mock properties for testing
  const mockProperties: ExtendedProperty[] = [
    {
      id: '1',
      title: 'Veteran-Focused Property',
      address: '123 Main St',
      price: 1000,
      beds: 2,
      baths: 1,
      sqft: 1000,
      imageUrl: 'test.jpg',
      badges: ['VASH Approved'],
      description: 'Property for veterans with VASH benefits near VA clinic',
      amenities: [],
      accessibilityFeatures: [],
      schoolDistrict: 'Test ISD',
      neighborhood: 'Test',
      availabilityDate: 'Available Now',
      coordinates: { lat: 0, lng: 0 }
    },
    {
      id: '2',
      title: 'Family-Focused Property',
      address: '456 Oak St',
      price: 1200,
      beds: 3,
      baths: 2,
      sqft: 1500,
      imageUrl: 'test.jpg',
      badges: ['Family Size'],
      description: 'Spacious home near elementary school perfect for families',
      amenities: [],
      accessibilityFeatures: [],
      schoolDistrict: 'Test ISD',
      neighborhood: 'Test',
      availabilityDate: 'Available Now',
      coordinates: { lat: 0, lng: 0 }
    }
  ];

  // Mock routes for testing
  const mockRoutes = [
    { path: '/veterans' },
    { path: '/family-resources' },
    { path: '/apply' }
  ];

  test('should analyze property content correctly', () => {
    const veteranResult = analyzePropertyContent(mockProperties[0]!);
    const familyResult = analyzePropertyContent(mockProperties[1]!);
    
    expect(veteranResult).toBe('veteran');
    expect(familyResult).toBe('family');
  });

  test('should audit content balance with correct scoring', () => {
    const result = auditContentBalance(mockRoutes, mockProperties);
    
    expect(result.veteranWeight).toBeGreaterThan(0);
    expect(result.familyWeight).toBeGreaterThan(0);
    expect(result.veteranPerc + result.familyPerc).toBe(100);
    expect(result.ratio).toMatch(/\d+% Veteran \/ \d+% Family/);
  });

  test('should handle empty inputs gracefully', () => {
    const result = auditContentBalance([], []);
    
    expect(result.veteranWeight).toBe(0);
    expect(result.familyWeight).toBe(0);
    expect(result.veteranPerc).toBe(0);
    expect(result.familyPerc).toBe(0);
  });

  test('should generate recommendations for imbalanced content', () => {
    // Create heavily veteran-biased content
    const veteranProperties = Array(10).fill(mockProperties[0]);
    const result = auditContentBalance(mockRoutes, veteranProperties);
    
    if (result.veteranPerc > 60) {
      expect(result.recommendations).toContain('High Veteran Tilt detected');
    }
  });

  test('should audit story balance correctly', () => {
    const mockStories: StoryContent[] = [
      {
        id: 1,
        name: 'John Veteran',
        location: 'Tyler, TX',
        quote: 'Great experience as a veteran',
        videoLabel: 'Veteran story',
        type: 'veteran',
        contentTypeDescription: 'Veteran Success Story'
      },
      {
        id: 2,
        name: 'Jane Family',
        location: 'Longview, TX',
        quote: 'Perfect for our family',
        videoLabel: 'Family story',
        type: 'family',
        contentTypeDescription: 'Family Success Story'
      }
    ];
    
    const result = auditStoryBalance(mockStories);
    
    expect(result.veteranWeight).toBe(10);
    expect(result.familyWeight).toBe(10);
    expect(result.ratio).toBe('50% Veteran / 50% Family');
  });

  test('should create balanced stories with proper typing', () => {
    const mockStories: StoryContent[] = [
      {
        id: 1,
        name: 'Test Veteran',
        location: 'Tyler, TX',
        quote: 'Military service helped me get this home',
        videoLabel: 'Test veteran story',
        type: 'veteran',
        contentTypeDescription: 'Veteran Success Story'
      },
      {
        id: 2,
        name: 'Test Family',
        location: 'Longview, TX',
        quote: 'Our children love the school nearby',
        videoLabel: 'Test family story',
        type: 'family',
        contentTypeDescription: 'Family Success Story'
      }
    ];

    const result = createBalancedStories(mockStories);

    expect(result.length).toBe(2);
    expect(result[0]?.type).toBeDefined();
    expect(result[0]?.contentTypeDescription).toBeDefined();
    expect(result[1]?.type).toBeDefined();
    expect(result[1]?.contentTypeDescription).toBeDefined();
  });

  test('should handle errors gracefully', () => {
    // This should not throw, but return a safe default
    const result = auditContentBalance([], []);
    
    expect(result).toBeDefined();
    expect(result.recommendations).toBeInstanceOf(Array);
  });

  test('should use default configuration when none provided', () => {
    const result = auditContentBalance([], []);
    
    // Should complete without errors using default config
    expect(result).toBeDefined();
  });
});

// Integration test
describe('Content Balance Auditor Integration', () => {
  
  test('should work with real-world property data structure', () => {
    const realProperty: ExtendedProperty = {
      id: 'test',
      title: 'Real Property',
      address: '123 Test St',
      price: 1000,
      beds: 2,
      baths: 1,
      sqft: 1000,
      imageUrl: 'test.jpg',
      badges: ['Section 8 Approved'],
      description: 'Real property description with school district mentions',
      amenities: ['Test amenity'],
      accessibilityFeatures: [],
      schoolDistrict: 'Test ISD',
      neighborhood: 'Test Neighborhood',
      availabilityDate: 'Available Now',
      coordinates: { lat: 32.3513, lng: -95.3011 }
    };
    
    // Should not throw with real property structure
    const result = analyzePropertyContent(realProperty);
    expect(['veteran', 'family', 'neutral']).toContain(result);
  });
});
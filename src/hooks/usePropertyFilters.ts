import { useState, useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { Property } from '../types/types';
import { PropertyFilterSchema } from '../types/schemas';

/**
 * Filter constants
 */
const SECTION_8_MAX_PRICE = 1100;

/**
 * Filter state interface
 */
export interface PropertyFilters {
  minPrice?: number;
  maxPrice?: number;
  minBeds?: number;
  maxBeds?: number;
  minBaths?: number;
  maxBaths?: number;
  status?: 'available' | 'occupied' | 'maintenance' | 'all';
  city?: string;
  neighborhood?: string;
  searchQuery?: string;
  // Mission filters
  section8Only?: boolean;
  veteranPreferred?: boolean;
}

/**
 * usePropertyFilters Hook
 * 
 * Manages property filtering with URL sync for shareable links.
 * Used by both Home and Properties pages for consistent filtering.
 */
export function usePropertyFilters(initialFilters: PropertyFilters = {}) {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Initialize state from URL params or initial filters
  const [filters, setFilters] = useState<PropertyFilters>(() => {
    // First check URL params
    const urlFilters: PropertyFilters = {};
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    const minBeds = searchParams.get('minBeds');
    const maxBeds = searchParams.get('maxBeds');
    const minBaths = searchParams.get('minBaths');
    const maxBaths = searchParams.get('maxBaths');
    const status = searchParams.get('status');
    const city = searchParams.get('city');
    const neighborhood = searchParams.get('neighborhood');
    const searchQuery = searchParams.get('q');

    if (minPrice) urlFilters.minPrice = Number(minPrice);
    if (maxPrice) urlFilters.maxPrice = Number(maxPrice);
    if (minBeds) urlFilters.minBeds = Number(minBeds);
    if (maxBeds) urlFilters.maxBeds = Number(maxBeds);
    if (minBaths) urlFilters.minBaths = Number(minBaths);
    if (maxBaths) urlFilters.maxBaths = Number(maxBaths);
    if (status) urlFilters.status = status as PropertyFilters['status'];
    if (city) urlFilters.city = city;
    if (neighborhood) urlFilters.neighborhood = neighborhood;
    if (searchQuery) urlFilters.searchQuery = searchQuery;

    // Merge with initial filters (URL takes precedence)
    return { ...initialFilters, ...urlFilters };
  });

  /**
   * Update a single filter and sync to URL
   */
  const updateFilter = useCallback(<K extends keyof PropertyFilters>(
    key: K,
    value: PropertyFilters[K]
  ) => {
    setFilters(prev => {
      const newFilters = { ...prev, [key]: value };
      
      // Sync to URL
      const params = new URLSearchParams();
      if (newFilters.minPrice) params.set('minPrice', String(newFilters.minPrice));
      if (newFilters.maxPrice) params.set('maxPrice', String(newFilters.maxPrice));
      if (newFilters.minBeds) params.set('minBeds', String(newFilters.minBeds));
      if (newFilters.maxBeds) params.set('maxBeds', String(newFilters.maxBeds));
      if (newFilters.minBaths) params.set('minBaths', String(newFilters.minBaths));
      if (newFilters.maxBaths) params.set('maxBaths', String(newFilters.maxBaths));
      if (newFilters.status && newFilters.status !== 'all') params.set('status', newFilters.status);
      if (newFilters.city) params.set('city', newFilters.city);
      if (newFilters.neighborhood) params.set('neighborhood', newFilters.neighborhood);
      if (newFilters.searchQuery) params.set('q', newFilters.searchQuery);

      setSearchParams(params, { replace: true });
      
      return newFilters;
    });
  }, [setSearchParams]);

  /**
   * Reset all filters to default
   */
  const resetFilters = useCallback(() => {
    setFilters({});
    setSearchParams({}, { replace: true });
  }, [setSearchParams]);

  /**
   * Apply filters to a list of properties
   */
  const filteredProperties = useCallback((properties: Property[]): Property[] => {
    return properties.filter(property => {
      // Price filter
      if (filters.minPrice !== undefined) {
        const price = typeof property.price === 'number' 
          ? property.price 
          : parseFloat(String(property.price).replace(/[^0-9.]/g, ''));
        if (price < filters.minPrice) return false;
      }
      if (filters.maxPrice !== undefined) {
        const price = typeof property.price === 'number' 
          ? property.price 
          : parseFloat(String(property.price).replace(/[^0-9.]/g, ''));
        if (price > filters.maxPrice) return false;
      }

      // Beds filter
      if (filters.minBeds !== undefined && property.beds < filters.minBeds) return false;
      if (filters.maxBeds !== undefined && property.beds > filters.maxBeds) return false;

      // Baths filter
      if (filters.minBaths !== undefined && property.baths < filters.minBaths) return false;
      if (filters.maxBaths !== undefined && property.baths > filters.maxBaths) return false;

      // Search query
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        const matchesTitle = property.title.toLowerCase().includes(query);
        const matchesAddress = property.address.toLowerCase().includes(query);
        const matchesDescription = property.description.toLowerCase().includes(query);
        const matchesAmenities = property.amenities?.some(a => a.toLowerCase().includes(query));
        if (!matchesTitle && !matchesAddress && !matchesDescription && !matchesAmenities) return false;
      }

      // Mission filters (Section 8 & Veteran)
      if (filters.section8Only) {
        const price = typeof property.price === 'number' 
          ? property.price 
          : parseFloat(String(property.price).replace(/[^0-9.]/g, ''));
        const isSection8Eligible = 
          property.description.toLowerCase().includes('section 8') || 
          price < SECTION_8_MAX_PRICE;
        if (!isSection8Eligible) return false;
      }

      return true;
    });
  }, [filters]);

  /**
   * Get active filter count for UI badges
   */
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.minPrice || filters.maxPrice) count++;
    if (filters.minBeds || filters.maxBeds) count++;
    if (filters.minBaths || filters.maxBaths) count++;
    if (filters.status && filters.status !== 'all') count++;
    if (filters.city) count++;
    if (filters.neighborhood) count++;
    if (filters.searchQuery) count++;
    return count;
  }, [filters]);

  return {
    filters,
    updateFilter,
    resetFilters,
    filteredProperties,
    activeFilterCount,
    isFilterActive: activeFilterCount > 0,
  };
}

export default usePropertyFilters;

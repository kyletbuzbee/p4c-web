import type {
  StatMetric,
  RenovationStandard,
  FinancialBreakdown,
} from '../types';
import type { ExtendedProperty } from '../data/properties';
import { properties, getPropertyById } from '../data/properties';

/**
 * Enhanced Backend API Service
 *
 * This service supports both development (mock data) and production (real backend) modes.
 *
 * Development Mode (Default):
 * - Uses mock data with simulated network latency
 * - No environment variables required
 * - Perfect for frontend development and testing
 *
 * Production Mode:
 * - Set VITE_API_URL environment variable to enable real backend integration
 * - Falls back to mock data if backend is unavailable
 * - Automatic switching based on environment configuration
 *
 * Environment Setup:
 * - Copy .env.example to .env and configure VITE_API_URL
 * - Development: Leave VITE_API_URL empty (uses mock data)
 * - Production: Set VITE_API_URL to your backend endpoint
 */

const SIMULATED_LATENCY = 800; // ms

// Environment configuration for backend integration
const API_CONFIG = {
  // Get API URL from environment variable, fallback to empty string for mock data
  baseUrl: import.meta.env.VITE_API_URL || "",

  // Check if we're in backend mode (has API URL) or mock mode (no API URL)
  get isBackendMode() {
    return this.baseUrl.trim().length > 0;
  },

  // Get full API endpoint URL
  getEndpointUrl(endpoint: string): string {
    return `${this.baseUrl.replace(/\/$/, '')}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
  },
};

/**
 * HTTP client for backend communication
 * Automatically falls back to mock data on network errors
 */
class ApiClient {
  private async makeRequest<T>(
    endpoint: string,
    options?: RequestInit,
  ): Promise<T> {
    if (!API_CONFIG.isBackendMode) {
      throw new Error('Backend mode disabled - using mock data');
    }

    try {
      const url = API_CONFIG.getEndpointUrl(endpoint);
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.warn(
        `Backend request failed for endpoint ${endpoint}, falling back to mock data:`,
        error,
      );
      throw new Error('Backend unavailable - using mock data');
    }
  }

  async get<T>(endpoint: string): Promise<T> {
    return this.makeRequest<T>(endpoint, { method: 'GET' });
  }

  async post<T>(endpoint: string, data?: any): Promise<T> {
    return this.makeRequest<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : null,
    });
  }
}

const apiClient = new ApiClient();

export const api = {
  impact: {
    /**
     * Get impact metrics
     * Tries backend first if VITE_API_URL is set, falls back to mock data
     */
    getMetrics: async (): Promise<StatMetric[]> => {
      try {
        // Try backend first if in backend mode
        if (API_CONFIG.isBackendMode) {
          const data = await apiClient.get<StatMetric[]>('/api/impact/metrics');
          return data;
        }
      } catch (error) {
        console.warn('Backend metrics request failed, using mock data:', error);
      }

      // Fallback to mock data
      await new Promise((resolve) => setTimeout(resolve, SIMULATED_LATENCY));
      return [
        {
          id: '1',
          label: 'Families Housed',
          value: '142',
          icon: 'home',
          description: 'Total families placed in safe, renovated homes.',
          trend: 'up',
          trendValue: '+12% this year',
        },
        {
          id: '2',
          label: 'Veterans Served',
          value: '85',
          icon: 'users',
          description: 'Veterans housed via HUD-VASH or direct placement.',
          trend: 'up',
          trendValue: '+8% this year',
        },
        {
          id: '3',
          label: 'Properties Revitalized',
          value: '56',
          icon: 'hammer',
          description: 'Distressed properties fully renovated.',
          trend: 'up',
          trendValue: '+5 this quarter',
        },
        {
          id: '4',
          label: 'Community Wealth',
          value: '$2.4M',
          icon: 'dollar',
          description: 'Estimated property value added to local neighborhoods.',
          trend: 'up',
          trendValue: 'Est. Value',
        },
      ];
    },

    /**
     * Get financial breakdown
     * Tries backend first if VITE_API_URL is set, falls back to mock data
     */
    getFinancialBreakdown: async (): Promise<FinancialBreakdown[]> => {
      try {
        // Try backend first if in backend mode
        if (API_CONFIG.isBackendMode) {
          const data = await apiClient.get<FinancialBreakdown[]>(
            '/api/impact/financial-breakdown',
          );
          return data;
        }
      } catch (error) {
        console.warn(
          'Backend financial breakdown request failed, using mock data:',
          error,
        );
      }

      // Fallback to mock data
      await new Promise((resolve) => setTimeout(resolve, SIMULATED_LATENCY));
      return [
        { category: 'Property Maintenance', percentage: 35, color: '#0B1120' },
        { category: 'Future Acquisitions', percentage: 30, color: '#C5A059' },
        { category: 'Investor Returns', percentage: 20, color: '#334155' },
        { category: 'Community Programs', percentage: 10, color: '#94a3b8' },
        { category: 'Admin/Ops', percentage: 5, color: '#cbd5e1' },
      ];
    },
  },

  transparency: {
    /**
     * Get renovation standards
     * Tries backend first if VITE_API_URL is set, falls back to mock data
     */
    getStandards: async (): Promise<RenovationStandard[]> => {
      try {
        // Try backend first if in backend mode
        if (API_CONFIG.isBackendMode) {
          const data = await apiClient.get<RenovationStandard[]>(
            '/api/transparency/standards',
          );
          return data;
        }
      } catch (error) {
        console.warn(
          'Backend standards request failed, using mock data:',
          error,
        );
      }

      // Fallback to mock data
      await new Promise((resolve) => setTimeout(resolve, SIMULATED_LATENCY));
      return [
        {
          id: 'kitchen',
          category: 'Kitchen Countertops',
          standardLandlord: 'Laminate / Formica',
          p4cStandard: 'Quartz or Granite',
          benefit: 'Hygienic, durable, heat resistant, and dignified.',
        },
        {
          id: 'flooring',
          category: 'Flooring',
          standardLandlord: 'Cheap Carpet or Sheet Vinyl',
          p4cStandard: 'Luxury Vinyl Plank (LVP)',
          benefit:
            'Waterproof, allergen-free, pet-friendly, and lasts 10+ years.',
        },
        {
          id: 'hvac',
          category: 'Climate Control',
          standardLandlord: 'Repair old units until failure',
          p4cStandard: 'New High-Efficiency SEER 16+',
          benefit:
            'Lowers tenant utility bills by ~25% and ensures reliability.',
        },
        {
          id: 'security',
          category: 'Security',
          standardLandlord: 'Standard deadbolt',
          p4cStandard: 'Smart Locks + Motion Lighting',
          benefit: 'Enhanced safety for families and peace of mind.',
        },
      ];
    },
  },

  properties: {
    /**
     * Get all available properties
     * Tries backend first if VITE_API_URL is set, falls back to mock data
     */
    getAll: async (): Promise<ExtendedProperty[]> => {
      try {
        // Try backend first if in backend mode
        if (API_CONFIG.isBackendMode) {
          const data =
            await apiClient.get<ExtendedProperty[]>('/api/properties');
          return data;
        }
      } catch (error) {
        console.warn(
          'Backend properties request failed, using mock data:',
          error,
        );
      }

      // Fallback to mock data
      await new Promise((resolve) => setTimeout(resolve, SIMULATED_LATENCY));
      return properties;
    },

    /**
     * Get a specific property by ID
     * Tries backend first if VITE_API_URL is set, falls back to mock data
     */
    getById: async (id: string): Promise<ExtendedProperty | null> => {
      try {
        // Try backend first if in backend mode
        if (API_CONFIG.isBackendMode) {
          const data = await apiClient.get<ExtendedProperty>(
            `/api/properties/${id}`,
          );
          return data;
        }
      } catch (error) {
        console.warn(
          'Backend property by ID request failed, using mock data:',
          error,
        );
      }

      // Fallback to mock data
      await new Promise((resolve) => setTimeout(resolve, SIMULATED_LATENCY));
      const property = getPropertyById(id);
      return property || null;
    },

    /**
     * Search properties by criteria
     * Tries backend first if VITE_API_URL is set, falls back to mock data
     */
    search: async (criteria: {
      minPrice?: number;
      maxPrice?: number;
      beds?: number;
      baths?: number;
      neighborhood?: string;
      schoolDistrict?: string;
    }): Promise<ExtendedProperty[]> => {
      try {
        // Try backend first if in backend mode
        if (API_CONFIG.isBackendMode) {
          const data = await apiClient.post<ExtendedProperty[]>(
            '/api/properties/search',
            criteria,
          );
          return data;
        }
      } catch (error) {
        console.warn(
          'Backend property search request failed, using mock data:',
          error,
        );
      }

      // Fallback to mock data
      await new Promise((resolve) => setTimeout(resolve, SIMULATED_LATENCY));

      return properties.filter((property) => {
        if (criteria.minPrice && property.price < criteria.minPrice)
          return false;
        if (criteria.maxPrice && property.price > criteria.maxPrice)
          return false;
        if (criteria.beds && property.beds < criteria.beds) return false;
        if (criteria.baths && property.baths < criteria.baths) return false;
        if (
          criteria.neighborhood &&
          !property.neighborhood
            .toLowerCase()
            .includes(criteria.neighborhood.toLowerCase())
        )
          return false;
        if (
          criteria.schoolDistrict &&
          property.schoolDistrict !== criteria.schoolDistrict
        )
          return false;
        return true;
      });
    },

    /**
     * Get properties by badge type
     * Tries backend first if VITE_API_URL is set, falls back to mock data
     */
    getByBadge: async (badge: string): Promise<ExtendedProperty[]> => {
      try {
        // Try backend first if in backend mode
        if (API_CONFIG.isBackendMode) {
          const data = await apiClient.get<ExtendedProperty[]>(
            `/api/properties/badge/${encodeURIComponent(badge)}`,
          );
          return data;
        }
      } catch (error) {
        console.warn(
          'Backend property by badge request failed, using mock data:',
          error,
        );
      }

      // Fallback to mock data
      await new Promise((resolve) => setTimeout(resolve, SIMULATED_LATENCY));

      return properties.filter((property) =>
        property.badges.some((propertyBadge) =>
          propertyBadge.toLowerCase().includes(badge.toLowerCase()),
        ),
      );
    },
  },
};

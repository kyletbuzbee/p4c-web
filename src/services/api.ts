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
        // Log error in development only
        if (import.meta.env.DEV) {
          console.error('Impact fetch error:', error);
        }
        return [];
      } catch (error) {
        console.error('Impact fetch error:', error);
        return [];
      }
    },

    getFinancialBreakdown: (): Promise<FinancialBreakdown[]> =>
      // Keeping this static for now unless you create a 'financials' table
      Promise.resolve([
        { category: 'Property Maintenance', percentage: 35, color: '#0B1120' },
        { category: 'Future Acquisitions', percentage: 30, color: '#C5A059' },
        { category: 'Investor Returns', percentage: 20, color: '#334155' },
        { category: 'Community Programs', percentage: 10, color: '#94a3b8' },
        { category: 'Admin/Ops', percentage: 5, color: '#cbd5e1' },
      ]),
  },

  // 2. TRANSPARENCY (Renovation Standards)
  transparency: {
    getStandards: (): Promise<RenovationStandard[]> =>
      // Keeping static - likely doesn't need frequent DB updates
      Promise.resolve([
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
      ]),
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
        // Log warning in development only
        if (import.meta.env.DEV) {
          console.warn('Property fetch error, using mock:', error);
        }
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
      // Hardened price parsing: handles $1,200.00 or 1200
      const priceStr = property.price.toString().replace(/[$,]/g, '');
      const dbPayload = {
        title: property.title,
        address: property.address,
        city: property.city || 'Tyler', // Default if missing
        price: parseFloat(priceStr) || 0,
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

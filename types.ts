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
  description: string;
  trend: 'up' | 'down' | 'neutral';
  trendValue: string;
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

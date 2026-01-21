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

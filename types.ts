
export interface Property {
  id: string;
  title: string;
  address: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
  badges: string[];
  description: string;
}

export interface TransformationData {
  beforeImage: string;
  afterImage: string;
  label: string;
}

export interface StatMetric {
  id: string;
  label: string;
  value: string;
  icon: 'users' | 'home' | 'hammer' | 'dollar' | 'heart';
  description?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
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

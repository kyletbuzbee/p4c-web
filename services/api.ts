
import { StatMetric, RenovationStandard, FinancialBreakdown } from '../types';

/**
 * Backend API Shell
 * 
 * In a production environment, these functions would use fetch() or axios
 * to communicate with your Node.js/Python/Go backend.
 * 
 * Currently, they simulate network latency and return strictly typed mock data.
 */

const SIMULATED_LATENCY = 800; // ms

export const api = {
  impact: {
    getMetrics: async (): Promise<StatMetric[]> => {
      await new Promise(resolve => setTimeout(resolve, SIMULATED_LATENCY));
      return [
        { 
          id: '1', 
          label: 'Families Housed', 
          value: '142', 
          icon: 'home', 
          description: 'Total families placed in safe, renovated homes.',
          trend: 'up',
          trendValue: '+12% this year'
        },
        { 
          id: '2', 
          label: 'Veterans Served', 
          value: '85', 
          icon: 'users',
          description: 'Veterans housed via HUD-VASH or direct placement.',
          trend: 'up',
          trendValue: '+8% this year'
        },
        { 
          id: '3', 
          label: 'Properties Revitalized', 
          value: '56', 
          icon: 'hammer',
          description: 'Distressed properties fully renovated.',
          trend: 'up',
          trendValue: '+5 this quarter'
        },
        { 
          id: '4', 
          label: 'Community Wealth', 
          value: '$2.4M', 
          icon: 'dollar',
          description: 'Estimated property value added to local neighborhoods.',
          trend: 'up',
          trendValue: 'Est. Value'
        }
      ];
    },
    
    getFinancialBreakdown: async (): Promise<FinancialBreakdown[]> => {
      await new Promise(resolve => setTimeout(resolve, SIMULATED_LATENCY));
      return [
        { category: 'Property Maintenance', percentage: 35, color: '#0B1120' },
        { category: 'Future Acquisitions', percentage: 30, color: '#C5A059' },
        { category: 'Investor Returns', percentage: 20, color: '#334155' },
        { category: 'Community Programs', percentage: 10, color: '#94a3b8' },
        { category: 'Admin/Ops', percentage: 5, color: '#cbd5e1' },
      ];
    }
  },

  transparency: {
    getStandards: async (): Promise<RenovationStandard[]> => {
      await new Promise(resolve => setTimeout(resolve, SIMULATED_LATENCY));
      return [
        {
          id: 'kitchen',
          category: 'Kitchen Countertops',
          standardLandlord: 'Laminate / Formica',
          p4cStandard: 'Quartz or Granite',
          benefit: 'Hygienic, durable, heat resistant, and dignified.'
        },
        {
          id: 'flooring',
          category: 'Flooring',
          standardLandlord: 'Cheap Carpet or Sheet Vinyl',
          p4cStandard: 'Luxury Vinyl Plank (LVP)',
          benefit: 'Waterproof, allergen-free, pet-friendly, and lasts 10+ years.'
        },
        {
          id: 'hvac',
          category: 'Climate Control',
          standardLandlord: 'Repair old units until failure',
          p4cStandard: 'New High-Efficiency SEER 16+',
          benefit: 'Lowers tenant utility bills by ~25% and ensures reliability.'
        },
        {
          id: 'security',
          category: 'Security',
          standardLandlord: 'Standard deadbolt',
          p4cStandard: 'Smart Locks + Motion Lighting',
          benefit: 'Enhanced safety for families and peace of mind.'
        }
      ];
    }
  }
};

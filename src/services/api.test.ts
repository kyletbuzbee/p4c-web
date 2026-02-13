import { api } from './api';

// Mock the supabase client
vi.mock('../lib/supabaseClient', () => ({
  supabase: {
    from: vi.fn(),
  },
}));

describe('API Service', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('properties.getAll', () => {
    it('should fetch all properties from the database', async () => {
      const mockData = {
        data: [
          {
            id: '1',
            title: 'Property 1',
            price: '1000',
            address: '123 Main St',
          },
          {
            id: '2',
            title: 'Property 2',
            price: '1500',
            address: '456 Oak St',
          },
        ],
        error: null,
      };

      // Create mock chain for supabase
      const mockSelect = vi.fn().mockReturnValue({
        order: vi.fn().mockResolvedValue(mockData),
      });

      const mockFrom = vi.fn().mockReturnValue({
        select: mockSelect,
      });

      const { supabase } = await import('../lib/supabaseClient');
      supabase.from = mockFrom;

      const properties = await api.properties.getAll();

      expect(properties.length).toBe(2);
      expect(properties[0].title).toBe('Property 1');
      expect(supabase.from).toHaveBeenCalledWith('properties');
    });

    it('should handle database errors and fall back to mock data', async () => {
      // Force an error
      const { supabase } = await import('../lib/supabaseClient');
      supabase.from = vi.fn().mockImplementation(() => {
        throw new Error('Database connection failed');
      });

      const properties = await api.properties.getAll();

      // Check that we fall back to mock data (which has 6 properties)
      expect(properties.length).toBeGreaterThan(0);
    });
  });

  describe('properties.getById', () => {
    it('should fetch a single property by ID', async () => {
      const mockData = {
        data: {
          id: '1',
          title: 'Property 1',
          price: '1000',
          address: '123 Main St',
        },
        error: null,
      };

      const mockSelect = vi.fn().mockReturnValue({
        single: vi.fn().mockResolvedValue(mockData),
      });

      const mockFrom = vi.fn().mockReturnValue({
        select: mockSelect,
      });

      const { supabase } = await import('../lib/supabaseClient');
      supabase.from = mockFrom;

      const property = await api.properties.getById('1');

      expect(property).toBeDefined();
      expect(property?.id).toBe('1');
      expect(supabase.from).toHaveBeenCalledWith('properties');
    });

    it('should return null if property not found', async () => {
      const mockData = {
        data: null,
        error: null,
      };

      const mockSelect = vi.fn().mockReturnValue({
        single: vi.fn().mockResolvedValue(mockData),
      });

      const mockFrom = vi.fn().mockReturnValue({
        select: mockSelect,
      });

      const { supabase } = await import('../lib/supabaseClient');
      supabase.from = mockFrom;

      const property = await api.properties.getById('999');

      expect(property).toBeNull();
    });
  });

  describe('properties.create', () => {
    it('should create a new property', async () => {
      const mockData = {
        data: { id: '1', title: 'New Property' },
        error: null,
      };

      const mockInsert = vi.fn().mockReturnValue({
        select: vi.fn().mockReturnValue({
          single: vi.fn().mockResolvedValue(mockData),
        }),
      });

      const mockFrom = vi.fn().mockReturnValue({
        insert: mockInsert,
      });

      const { supabase } = await import('../lib/supabaseClient');
      supabase.from = mockFrom;

      const newProperty = await api.properties.create({
        title: 'New Property',
        address: '789 Pine St',
        price: '1200',
        bedrooms: 3,
        bathrooms: 2,
        sqft: 1500,
        description: 'A beautiful new property',
        imageUrl: 'https://example.com/image.jpg',
      });

      expect(newProperty).toBeDefined();
      expect(newProperty?.title).toBe('New Property');
    });

    it('should handle creation errors', async () => {
      const mockError = {
        error: 'Invalid input data',
      };

      const mockInsert = vi.fn().mockReturnValue({
        select: vi.fn().mockReturnValue({
          single: vi.fn().mockResolvedValue(mockError),
        }),
      });

      const mockFrom = vi.fn().mockReturnValue({
        insert: mockInsert,
      });

      const { supabase } = await import('../lib/supabaseClient');
      supabase.from = mockFrom;

      await expect(
        api.properties.create({
          title: 'New Property',
          address: '789 Pine St',
          price: '1200',
          bedrooms: 3,
          bathrooms: 2,
          sqft: 1500,
          description: 'A beautiful new property',
          imageUrl: 'https://example.com/image.jpg',
        })
      ).rejects.toThrow();
    });
  });

  describe('properties.delete', () => {
    it('should delete a property', async () => {
      const mockData = {
        data: { id: '1' },
        error: null,
      };

      const mockDelete = vi.fn().mockReturnValue({
        eq: vi.fn().mockReturnValue({
          select: vi.fn().mockResolvedValue(mockData),
        }),
      });

      const mockFrom = vi.fn().mockReturnValue({
        delete: mockDelete,
      });

      const { supabase } = await import('../lib/supabaseClient');
      supabase.from = mockFrom;

      const deletedProperty = await api.properties.delete('1');

      expect(deletedProperty).toBeDefined();
    });
  });

  describe('impact.getMetrics', () => {
    it('should fetch impact metrics', async () => {
      const metrics = await api.impact.getMetrics();
      expect(Array.isArray(metrics)).toBe(true);
    });
  });

  describe('impact.getFinancialBreakdown', () => {
    it('should fetch financial breakdown', async () => {
      const financials = await api.impact.getFinancialBreakdown();
      expect(Array.isArray(financials)).toBe(true);
    });
  });

  describe('transparency.getStandards', () => {
    it('should fetch transparency standards', async () => {
      const standards = await api.transparency.getStandards();
      expect(Array.isArray(standards)).toBe(true);
    });
  });
});

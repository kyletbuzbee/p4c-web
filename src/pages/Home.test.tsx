/**
 * Home Page Tests
 */

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';

// Mock the API service
vi.mock('../services/api', () => ({
  api: {
    properties: {
      getAll: vi.fn().mockResolvedValue([
        {
          id: '1',
          title: 'Test Property 1',
          address: '123 Main St, Tyler, TX',
          price: '$1,200',
          beds: 3,
          baths: 2,
          sqft: 1500,
          imageUrl: 'https://example.com/image1.jpg',
          badges: ['Available', 'Pet Friendly'],
          description: 'A beautiful test property',
        },
        {
          id: '2',
          title: 'Test Property 2',
          address: '456 Oak Ave, Longview, TX',
          price: '$950',
          beds: 2,
          baths: 1,
          sqft: 1000,
          imageUrl: 'https://example.com/image2.jpg',
          badges: ['Available'],
          description: 'Another great property',
        },
      ]),
    },
  },
}));

// Mock error boundary service
vi.mock('../services/errorBoundaryService', () => ({
  logError: vi.fn(),
}));

// Mock react-router-dom
const mockNavigate = vi.fn();
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

// Mock BeforeAfterSlider component
vi.mock('../components/BeforeAfterSlider', () => ({
  default: ({ beforeImage, afterImage, label }: any) => (
    <div data-testid="before-after-slider">
      <img src={beforeImage} alt={`${label} before`} data-testid="before-image" />
      <img src={afterImage} alt={`${label} after`} data-testid="after-image" />
    </div>
  ),
}));

describe('Home Page', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Page Rendering', () => {
    it('should render the home page without errors', async () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );

      // Wait for page to load
      await waitFor(() => {
        expect(screen.getByText(/Transforming/)).toBeInTheDocument();
      });
    });

    it('should render the hero section', async () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );

      await waitFor(() => {
        expect(screen.getByText(/One Neighborhood at a Time/)).toBeInTheDocument();
      });
    });

    it('should render the core services section', async () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );

      await waitFor(() => {
        expect(screen.getByText(/Community-First Real Estate Solutions/)).toBeInTheDocument();
      });
    });
  });

  describe('Property Filtering', () => {
    it('should render search input', async () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );

      await waitFor(() => {
        const searchInput = document.querySelector('input[aria-label="Search properties"]');
        expect(searchInput).toBeInTheDocument();
      });
    });

    it('should update search query state on input', async () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );

      await waitFor(() => {
        const searchInput = document.querySelector('input[aria-label="Search properties"]') as HTMLInputElement;
        fireEvent.change(searchInput, { target: { value: 'Tyler' } });
        expect(searchInput.value).toBe('Tyler');
      });
    });

    it('should render price filter dropdown', async () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );

      await waitFor(() => {
        const priceSelect = document.querySelector('#maxPrice');
        expect(priceSelect).toBeInTheDocument();
      });
    });

    it('should render bedrooms filter dropdown', async () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );

      await waitFor(() => {
        const bedsSelect = document.querySelector('#minBeds');
        expect(bedsSelect).toBeInTheDocument();
      });
    });

    it('should render property cards when properties are loaded', async () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );

      await waitFor(() => {
        expect(screen.getByText('Test Property 1')).toBeInTheDocument();
      }, { timeout: 3000 });
    });
  });

  describe('Navigation', () => {
    it('should navigate to community page when CTA is clicked', async () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );

      await waitFor(() => {
        const ctaButton = screen.getByRole('button', { name: /Our Community Impact/i });
        fireEvent.click(ctaButton);
      });

      expect(mockNavigate).toHaveBeenCalledWith('/community');
    });

    it('should navigate to properties page when Find Your Home is clicked', async () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );

      await waitFor(() => {
        const findHomeButton = screen.getByRole('button', { name: /Find Your Home/i });
        fireEvent.click(findHomeButton);
      });

      expect(mockNavigate).toHaveBeenCalledWith('/properties');
    });

    it('should navigate to apply page when Start Tenant Application is clicked', async () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );

      await waitFor(() => {
        const applyButton = screen.getByRole('button', { name: /Start Tenant Application/i });
        fireEvent.click(applyButton);
      });

      expect(mockNavigate).toHaveBeenCalledWith('/apply');
    });
  });

  describe('Loading State', () => {
    it('should show loading skeletons while fetching properties', async () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );

      // Initially should have loading state
      await waitFor(() => {
        const loadingSkeletons = document.querySelectorAll('.animate-pulse');
        expect(loadingSkeletons.length).toBeGreaterThan(0);
      }, { timeout: 3000 });
    });
  });

  describe('Empty State', () => {
    it('should show empty state message when no properties match filters', async () => {
      // Mock empty results
      const { api } = await import('../services/api');
      vi.mocked(api.properties.getAll).mockResolvedValueOnce([]);

      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );

      await waitFor(() => {
        const searchInput = document.querySelector('input[aria-label="Search properties"]') as HTMLInputElement;
        fireEvent.change(searchInput, { target: { value: 'NonExistentLocation123' } });
      });

      await waitFor(() => {
        expect(screen.getByText(/No properties found/)).toBeInTheDocument();
      }, { timeout: 3000 });
    });
  });

  describe('Calculator', () => {
    it('should render ARV input', async () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );

      await waitFor(() => {
        const arvInput = document.querySelector('#arv-input');
        expect(arvInput).toBeInTheDocument();
      });
    });

    it('should render repairs input', async () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );

      await waitFor(() => {
        const repairsInput = document.querySelector('#repairs-input');
        expect(repairsInput).toBeInTheDocument();
      });
    });
  });
});

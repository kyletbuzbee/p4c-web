import { render, screen } from '@testing-library/react';
import PropertyCard from './PropertyCard';
import type { Property } from '../types/types';
import { BrowserRouter as Router } from 'react-router-dom';

// Mock data
const mockProperty: Property = {
  id: '1',
  title: 'Beautiful 3-Bedroom Home',
  address: '123 Main St, Anytown, USA',
  price: '1200',
  beds: 3,
  baths: 2,
  sqft: 1500,
  imageUrl: 'https://example.com/image.jpg',
  badges: ['Available', 'Pet Friendly'],
  description:
    'A beautiful home in a quiet neighborhood with modern amenities.',
};

describe('PropertyCard', () => {
  it('should render property details correctly', () => {
    render(
      <Router>
        <PropertyCard property={mockProperty} />
      </Router>
    );

    // Check that property title is rendered
    expect(screen.getByText(mockProperty.title)).toBeInTheDocument();
    // Check that address is rendered
    expect(screen.getByText(mockProperty.address)).toBeInTheDocument();
    // Check that price is rendered (now with dollar sign and comma)
    expect(screen.getByText(/\$1,200/i)).toBeInTheDocument();
    // Check that beds and baths are rendered
    expect(screen.getByText(`${mockProperty.beds} Bed`)).toBeInTheDocument();
    expect(screen.getByText(`${mockProperty.baths} Bath`)).toBeInTheDocument();
    // Check that square footage is rendered
    expect(screen.getByText(/1,500 sqft/i)).toBeInTheDocument();
  });

  it('should display all property badges', () => {
    render(
      <Router>
        <PropertyCard property={mockProperty} />
      </Router>
    );

    mockProperty.badges.forEach((badge) => {
      expect(screen.getByText(badge)).toBeInTheDocument();
    });
  });

  it('should render the property image with correct attributes', () => {
    render(
      <Router>
        <PropertyCard property={mockProperty} />
      </Router>
    );

    const img = document.querySelector('img');
    expect(img).toBeInTheDocument();
    // Check that alt text is present (src might be lazy loaded)
    expect(img).toHaveAttribute('alt', mockProperty.title);
    expect(img).toHaveAttribute('loading', 'lazy');
  });

  it('should have correct link to property details page', () => {
    render(
      <Router>
        <PropertyCard property={mockProperty} />
      </Router>
    );

    const link = document.querySelector('a');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', `/properties/${mockProperty.id}`);
  });

  it('should handle image loading states correctly', () => {
    // Render with custom image onLoad handler
    const { container } = render(
      <Router>
        <PropertyCard property={{ ...mockProperty }} />
      </Router>
    );

    // Check if loading placeholder is rendered initially
    const placeholder = container.querySelector('.animate-pulse');
    expect(placeholder).toBeInTheDocument();
  });

  it('should handle missing property image', () => {
    // This test would require mocking image error handling
    // For now, we'll just check that the card still renders without an image
    render(
      <Router>
        <PropertyCard property={{ ...mockProperty, imageUrl: '' }} />
      </Router>
    );
    const card = document.querySelector('.group');
    expect(card).toBeInTheDocument();
  });

  it('should apply correct styling for grid layout', () => {
    const { container } = render(
      <Router>
        <PropertyCard property={mockProperty} />
      </Router>
    );
    const card = container.querySelector('.group');

    expect(card).toHaveClass('flex');
    expect(card).toHaveClass('flex-col');
    expect(card).toHaveClass('rounded-xl');
  });

  it('should handle priority loading correctly', () => {
    render(
      <Router>
        <PropertyCard property={mockProperty} priority />
      </Router>
    );

    const img = document.querySelector('img');
    expect(img).toHaveAttribute('loading', 'eager');
  });
});

/**
 * Hero Component Tests - Simplified
 */

import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Hero from './Hero';

// Mock react-router-dom
vi.mock('react-router-dom', () => ({
  useNavigate: () => vi.fn(),
}));

// Mock OptimizedImage component
vi.mock('./OptimizedImage', () => ({
  default: ({ src, alt, className, priority }: any) => (
    <img src={src} alt={alt} className={className} data-priority={priority} data-testid="optimized-image" />
  ),
}));

describe('Hero', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Rendering', () => {
    it('should render the hero component', () => {
      render(
        <BrowserRouter>
          <Hero />
        </BrowserRouter>
      );

      const hero = document.querySelector('section');
      expect(hero).toBeInTheDocument();
    });

    it('should render main heading text', () => {
      render(
        <BrowserRouter>
          <Hero />
        </BrowserRouter>
      );

      expect(screen.getByText(/Transforming/)).toBeInTheDocument();
      expect(screen.getByText(/Communities/)).toBeInTheDocument();
    });

    it('should render description text', () => {
      render(
        <BrowserRouter>
          <Hero />
        </BrowserRouter>
      );

      expect(screen.getByText(/Strategic revitalization/)).toBeInTheDocument();
    });

    it('should render both CTA buttons', () => {
      render(
        <BrowserRouter>
          <Hero />
        </BrowserRouter>
      );

      expect(screen.getByRole('button', { name: /Our Community Impact/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Find Your Home/i })).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have accessible button labels', () => {
      render(
        <BrowserRouter>
          <Hero />
        </BrowserRouter>
      );

      const communityButton = screen.getByRole('button', { name: /Our Community Impact/i });
      const findHomeButton = screen.getByRole('button', { name: /Find Your Home/i });

      expect(communityButton).toHaveAttribute('aria-label');
      expect(findHomeButton).toHaveAttribute('aria-label');
    });
  });

  describe('Image variant', () => {
    it('should render with image variant by default', () => {
      render(
        <BrowserRouter>
          <Hero variant="image" />
        </BrowserRouter>
      );

      const optimizedImage = screen.getByTestId('optimized-image');
      expect(optimizedImage).toBeInTheDocument();
    });

    it('should render with video variant', () => {
      render(
        <BrowserRouter>
          <Hero variant="video" />
        </BrowserRouter>
      );

      const video = document.querySelector('video');
      expect(video).toBeInTheDocument();
      expect(video).toHaveAttribute('autoPlay');
    });
  });
});

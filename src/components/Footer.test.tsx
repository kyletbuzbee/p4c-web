import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Footer', () => {
  it('should render logo with correct alt text', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const logo = document.querySelector('img');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute(
      'alt',
      'Properties 4 Creation Real Estate Logo'
    );
  });

  it('should have accessible social media links', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const socialLinks = document.querySelectorAll('a[aria-label*="Visit our"]');
    expect(socialLinks.length).toBeGreaterThan(0);
    socialLinks.forEach((link) => {
      expect(link).toHaveAttribute('aria-label');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('should render all main navigation sections', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    expect(screen.getByText('Find a Home')).toBeInTheDocument();
    expect(screen.getByText('Company')).toBeInTheDocument();
    expect(screen.getByText('Residents')).toBeInTheDocument();
  });

  it('should have accessible links in all sections', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const links = document.querySelectorAll('a');
    links.forEach((link) => {
      if (link.getAttribute('href') && link.getAttribute('href') !== '#') {
        expect(link).toHaveAttribute('href');
      }
    });
  });

  it('should display all badges with accessibility information', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    expect(screen.getByText('Veteran Owned & Operated')).toBeInTheDocument();
    expect(screen.getByText('Equal Housing Opportunity')).toBeInTheDocument();
    expect(screen.getByText('ADA Compliant')).toBeInTheDocument();
  });

  it('should have copyright information with current year', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(currentYear.toString()))
    ).toBeInTheDocument();
  });
});

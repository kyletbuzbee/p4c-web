import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Navbar', () => {
  it('should render logo with correct alt text', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const logo = document.querySelector('img');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('alt', 'Properties 4 Creation Logo');
  });

  it('should have accessible navigation menu', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const nav = document.querySelector('nav');
    expect(nav).toBeInTheDocument();

    // Check that nav items have accessible attributes
    const navItems = document.querySelectorAll('button[role="menuitem"]');
    navItems.forEach((item) => {
      expect(item).toHaveAttribute('aria-label');
    });
  });

  it('should have accessible mobile menu button', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const mobileMenuButton = document.querySelector(
      'button[aria-label*="navigation menu"]'
    );
    expect(mobileMenuButton).toBeInTheDocument();
    expect(mobileMenuButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('should toggle mobile menu accessibility attributes', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const mobileMenuButton = document.querySelector(
      'button[aria-label*="navigation menu"]'
    );
    fireEvent.click(mobileMenuButton!);

    expect(mobileMenuButton).toHaveAttribute('aria-expanded', 'true');
  });

  it('should render all main navigation sections', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    // Top-level navigation items
    expect(screen.getByText('Community Impact')).toBeInTheDocument();
    expect(screen.getByText('Find a Home')).toBeInTheDocument();
    expect(screen.getByText('Investors')).toBeInTheDocument();
    expect(screen.getByText('Resources')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('should have accessible sell your house link', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const sellLink = screen.getByRole('link', { name: /sell your house/i });
    expect(sellLink).toBeInTheDocument();
    expect(sellLink).toHaveAttribute('aria-label');
  });

  it('should have accessible apply now button', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const applyButton = screen.getByRole('button', { name: /apply now/i });
    expect(applyButton).toBeInTheDocument();
    expect(applyButton).toHaveAttribute('aria-label');
  });
});

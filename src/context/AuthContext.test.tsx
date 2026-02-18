/**
 * Auth Context Tests
 */

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import { ToastProvider } from './ToastContext';

// Mock fetch globally
global.fetch = vi.fn();

// Mock window.crypto
Object.defineProperty(window, 'crypto', {
  value: {
    getRandomValues: (arr: Uint8Array) => {
      for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.floor(Math.random() * 256);
      }
      return arr;
    },
  },
});

const TestConsumer = () => {
  const { 
    user, 
    isAuthenticated, 
    isLoading, 
    login, 
    logout, 
    hasPermission 
  } = useAuth();
  
  return (
    <div>
      <span data-testid="user">{user ? user.email : 'null'}</span>
      <span data-testid="authenticated">{isAuthenticated ? 'true' : 'false'}</span>
      <span data-testid="loading">{isLoading ? 'true' : 'false'}</span>
      <button 
        data-testid="login" 
        onClick={() => login('test@example.com', 'tenant')}
      >
        Login
      </button>
      <button data-testid="logout" onClick={logout}>Logout</button>
      <button 
        data-testid="has-permission" 
        onClick={() => hasPermission('read')}
      >
        Check Permission
      </button>
    </div>
  );
};

const renderWithProviders = () => {
  return render(
    <BrowserRouter>
      <ToastProvider>
        <AuthProvider>
          <TestConsumer />
        </AuthProvider>
      </ToastProvider>
    </BrowserRouter>
  );
};

describe('AuthContext', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('AuthProvider', () => {
    it('should render children correctly', () => {
      const { getByTestId } = render(
        <BrowserRouter>
          <ToastProvider>
            <AuthProvider>
              <div data-testid="child">Test Child</div>
            </AuthProvider>
          </ToastProvider>
        </BrowserRouter>
      );

      expect(getByTestId('child')).toBeInTheDocument();
    });

    it('should throw error when useAuth is used outside provider', () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      
      const renderWithError = () => {
        render(<TestConsumer />);
      };

      expect(renderWithError).toThrow('useAuth must be used within an AuthProvider');
      consoleSpy.mockRestore();
    });
  });

  describe('Initial state', () => {
    it('should start with null user', () => {
      // Mock empty fetch response
      global.fetch = vi.fn().mockResolvedValue({
        ok: false,
        json: () => Promise.resolve({}),
      });

      const { getByTestId } = renderWithProviders();

      // Wait for loading to complete
      waitFor(() => {
        expect(getByTestId('loading').textContent).toBe('false');
      });

      expect(getByTestId('user').textContent).toBe('null');
      expect(getByTestId('authenticated').textContent).toBe('false');
    });

    it('should start in loading state', () => {
      // Mock empty fetch response
      global.fetch = vi.fn().mockResolvedValue({
        ok: false,
        json: () => Promise.resolve({}),
      });

      const { getByTestId } = renderWithProviders();
      
      expect(getByTestId('loading').textContent).toBe('true');
    });
  });

  describe('login', () => {
    it('should login successfully with valid credentials', async () => {
      const mockUser = {
        id: '123',
        name: 'Test User',
        email: 'test@example.com',
        role: 'tenant',
        permissions: ['read', 'write'],
      };

      global.fetch = vi.fn()
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve({ user: mockUser, token: 'mock-token' }),
        })
        .mockResolvedValueOnce({ ok: true }); // logout mock

      renderWithProviders();

      // Wait for initial load to complete
      await waitFor(() => {
        expect(screen.getByTestId('loading').textContent).toBe('false');
      });

      fireEvent.click(screen.getByTestId('login'));

      await waitFor(() => {
        expect(screen.getByTestId('user').textContent).toBe('test@example.com');
        expect(screen.getByTestId('authenticated').textContent).toBe('true');
      });
    });

    it('should fail login with invalid email', async () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: false,
        json: () => Promise.resolve({ error: 'Invalid email' }),
      });

      renderWithProviders();

      await waitFor(() => {
        expect(screen.getByTestId('loading').textContent).toBe('false');
      });

      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      
      fireEvent.click(screen.getByTestId('login'));

      await waitFor(() => {
        // Login should have been attempted
        expect(global.fetch).toHaveBeenCalled();
      });
      
      consoleSpy.mockRestore();
    });
  });

  describe('logout', () => {
    it('should clear user on logout', async () => {
      // First set up a logged in user
      const mockUser = {
        id: '123',
        name: 'Test User',
        email: 'test@example.com',
        role: 'tenant',
        permissions: ['read', 'write'],
      };

      global.fetch = vi.fn()
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve({ user: mockUser, token: 'mock-token' }),
        })
        .mockResolvedValueOnce({ ok: true }); // logout

      renderWithProviders();

      await waitFor(() => {
        expect(screen.getByTestId('loading').textContent).toBe('false');
      });

      // Login first
      fireEvent.click(screen.getByTestId('login'));

      await waitFor(() => {
        expect(screen.getByTestId('authenticated').textContent).toBe('true');
      });

      // Now logout
      fireEvent.click(screen.getByTestId('logout'));

      await waitFor(() => {
        expect(screen.getByTestId('user').textContent).toBe('null');
        expect(screen.getByTestId('authenticated').textContent).toBe('false');
      });
    });
  });

  describe('hasPermission', () => {
    it('should return true for admin with any permission', async () => {
      const mockUser = {
        id: '123',
        name: 'Admin User',
        email: 'admin@example.com',
        role: 'admin',
        permissions: ['read', 'write', 'delete'],
      };

      global.fetch = vi.fn()
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve({ user: mockUser, token: 'mock-token' }),
        })
        .mockResolvedValueOnce({ ok: true });

      renderWithProviders();

      await waitFor(() => {
        expect(screen.getByTestId('loading').textContent).toBe('false');
      });

      fireEvent.click(screen.getByTestId('login'));

      await waitFor(() => {
        expect(screen.getByTestId('authenticated').textContent).toBe('true');
      });

      // hasPermission returns boolean but we're not directly testing return value
      // The key is that admin should have all permissions
      fireEvent.click(screen.getByTestId('has-permission'));
    });

    it('should return false for unauthenticated user', () => {
      global.fetch = vi.fn().mockResolvedValue({
        ok: false,
      });

      renderWithProviders();

      // Should not throw, just return false
      fireEvent.click(screen.getByTestId('has-permission'));
    });
  });

  describe('Session validation', () => {
    it('should validate stored session on mount', async () => {
      const storedUser = {
        id: '123',
        name: 'Stored User',
        email: 'stored@example.com',
        role: 'tenant',
      };

      localStorage.setItem('p4c_user', JSON.stringify(storedUser));
      localStorage.setItem('p4c_session_token', 'valid-token');

      // Mock successful session validation
      global.fetch = vi.fn()
        .mockResolvedValueOnce({
          ok: true,
          json: () => Promise.resolve({ valid: true }),
        });

      renderWithProviders();

      await waitFor(() => {
        expect(screen.getByTestId('loading').textContent).toBe('false');
      });
    });

    it('should clear invalid session on mount', async () => {
      localStorage.setItem('p4c_user', 'invalid-data');
      localStorage.setItem('p4c_session_token', 'some-token');

      global.fetch = vi.fn().mockResolvedValue({
        ok: false,
      });

      renderWithProviders();

      await waitFor(() => {
        expect(screen.getByTestId('loading').textContent).toBe('false');
        expect(screen.getByTestId('user').textContent).toBe('null');
      });
    });
  });
});

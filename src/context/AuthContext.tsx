/* eslint-disable */
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import type { ReactNode } from 'react';
import { useToast } from './ToastContext';

type UserRole = 'guest' | 'tenant' | 'admin';

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  lastLogin?: string;
  permissions: string[];
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, role: UserRole) => Promise<void>;
  logout: () => void;
  refreshToken: () => Promise<void>;
  hasPermission: (permission: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Enhanced validation function - CRITICAL SECURITY FIX
const validateStoredUser = (storedUser: string): User | null => {
  try {
    const user = JSON.parse(storedUser);

    // Validate required fields
    if (!user.id || !user.email || !user.role) {
      return null;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
      return null;
    }

    // Validate role
    if (!['guest', 'tenant', 'admin'].includes(user.role)) {
      return null;
    }

    // Validate data types
    if (
      typeof user.id !== 'string' ||
      typeof user.email !== 'string' ||
      typeof user.role !== 'string'
    ) {
      return null;
    }

    return user;
  } catch (error) {
    return null;
  }
};

// Secure session validation with backend
const validateSessionWithBackend = async (
  userId: string,
  sessionToken: string
): Promise<boolean> => {
  try {
    const response = await fetch('/api/auth/validate-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionToken}`,
        'X-Requested-With': 'XMLHttpRequest',
      },
      body: JSON.stringify({ userId }),
    });

    return response.ok;
  } catch (error) {
    return false;
  }
};

// Generate secure user ID (replacing weak Math.random)
const generateSecureUserId = (): string => {
  // Use crypto API for better randomness
  if (typeof window !== 'undefined' && window.crypto) {
    const array = new Uint8Array(16);
    window.crypto.getRandomValues(array);
    return Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join(
      ''
    );
  }
  // Fallback for older browsers
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { addToast } = useToast();

  // Secure session validation - CRITICAL SECURITY ENHANCEMENT
  useEffect(() => {
    const validateSession = async () => {
      try {
        const storedUser = localStorage.getItem('p4c_user');
        const sessionToken = localStorage.getItem('p4c_session_token');

        if (storedUser && sessionToken) {
          const validatedUser = validateStoredUser(storedUser);

          if (validatedUser) {
            // Verify session with backend
            const isValidSession = await validateSessionWithBackend(
              validatedUser.id,
              sessionToken
            );

            if (isValidSession) {
              setUser(validatedUser);
            } else {
              // Clear potentially compromised session
              localStorage.removeItem('p4c_user');
              localStorage.removeItem('p4c_session_token');
            }
          } else {
            // Clear corrupted data
            localStorage.removeItem('p4c_user');
            localStorage.removeItem('p4c_session_token');
          }
        }
      } catch (error) {
        // Clear potentially corrupted data
        localStorage.removeItem('p4c_user');
        localStorage.removeItem('p4c_session_token');
      } finally {
        setIsLoading(false);
      }
    };

    validateSession();
  }, []);

  // Secure login function
  const login = async (email: string, role: UserRole) => {
    setIsLoading(true);

    try {
      // Input validation
      if (!email || !email.includes('@')) {
        throw new Error('Valid email is required');
      }

      if (!role || !['guest', 'tenant', 'admin'].includes(role)) {
        throw new Error('Valid role is required');
      }

      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          role,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({
          error: 'Authentication failed',
        }));
        throw new Error(errorData.error || 'Login failed');
      }

      const { user: userData, token } = await response.json();

      // Sanitize and validate user data
      const cleanUser: User = {
        id: userData.id || generateSecureUserId(),
        name: userData.name || email.split('@')[0],
        email: userData.email || email,
        role: userData.role || role,
        lastLogin: new Date().toISOString(),
        permissions: userData.permissions || getDefaultPermissions(role),
      };

      // Store securely
      localStorage.setItem('p4c_user', JSON.stringify(cleanUser));
      localStorage.setItem('p4c_session_token', token);

      setUser(cleanUser);

      addToast(`Welcome back, ${cleanUser.name}`, 'success');
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Login failed. Please try again.';
      addToast(errorMessage, 'error');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Secure logout function
  const logout = useCallback(() => {
    // Clear state immediately
    setUser(null);

    // Clear storage
    localStorage.removeItem('p4c_user');
    localStorage.removeItem('p4c_session_token');

    // Notify backend (non-blocking)
    fetch('/api/auth/logout', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('p4c_session_token')}`,
        'X-Requested-With': 'XMLHttpRequest',
      },
    }).catch(() => {
      // Ignore network errors on logout
    });

    addToast('You have been logged out.', 'info');
  }, [addToast]);

  // Token refresh function
  const refreshToken = async () => {
    try {
      const currentToken = localStorage.getItem('p4c_session_token');
      if (!currentToken) {
        throw new Error('No session token available');
      }

      const response = await fetch('/api/auth/refresh', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${currentToken}`,
          'X-Requested-With': 'XMLHttpRequest',
        },
      });

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('p4c_session_token', token);
      } else {
        logout();
      }
    } catch (error) {
      logout();
    }
  };

  // Permission checking function
  const hasPermission = useCallback(
    (permission: string): boolean => {
      if (!user) return false;

      // Admins have all permissions
      if (user.role === 'admin') return true;

      // Check specific permissions
      return user.permissions.includes(permission);
    },
    [user]
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        refreshToken,
        hasPermission,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Helper function to get default permissions by role
const getDefaultPermissions = (role: UserRole): string[] => {
  switch (role) {
    case 'admin':
      return [
        'read',
        'write',
        'delete',
        'manage_users',
        'manage_properties',
        'view_analytics',
      ];
    case 'tenant':
      return ['read', 'write'];
    case 'guest':
      return ['read'];
    default:
      return ['read'];
  }
};

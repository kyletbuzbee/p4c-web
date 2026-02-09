import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
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
  lastActivity?: string;
  sessionStart?: string;
  permissions: string[];
  mfaEnabled?: boolean;
  loginAttempts?: number;
  lockedUntil?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isLocked: boolean;
  loginAttempts: number;
  sessionTimeRemaining: number;
  login: (email: string, password?: string, mfaCode?: string) => Promise<void>;
  logout: () => void;
  refreshToken: () => Promise<void>;
  hasPermission: (permission: string) => boolean;
  enableMFA: () => Promise<string>;
  verifyMFA: (code: string) => Promise<boolean>;
  changePassword: (
    currentPassword: string,
    newPassword: string
  ) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  lockAccount: (reason?: string) => void;
  unlockAccount: () => void;
  clearSensitiveData: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Enhanced password policy validator
const validatePasswordPolicy = (
  password: string
): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (password.length < 12) {
    errors.push('Password must be at least 12 characters long');
  }

  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }

  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }

  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain at least one number');
  }

  if (!/[!@#$%^&*()_+\-=\\[\]{};':"|,.<>?]/.test(password)) {
    errors.push('Password must contain at least one special character');
  }

  // Check for common passwords
  const commonPasswords = [
    'password',
    '123456',
    'password123',
    'admin',
    'qwerty',
  ];
  if (
    commonPasswords.some((common) => password.toLowerCase().includes(common))
  ) {
    errors.push('Password contains common patterns');
  }

  // Check for sequential characters
  if (/(012|123|234|345|456|567|678|789|890)/.test(password)) {
    errors.push('Password contains sequential characters');
  }

  // Check for repeated characters
  if (/(.)\1{2,}/.test(password)) {
    errors.push('Password contains repeated characters');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

// Enhanced session manager
class SessionManager {
  private static readonly SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes
  private static readonly WARNING_TIME = 5 * 60 * 1000; // 5 minutes before timeout
  private static readonly MAX_LOGIN_ATTEMPTS = 5;
  private static readonly LOCKOUT_DURATION = 15 * 60 * 1000; // 15 minutes

  static generateSecureId(): string {
    if (typeof window !== 'undefined' && window.crypto) {
      const array = new Uint8Array(16);
      window.crypto.getRandomValues(array);
      return Array.from(array, (byte) =>
        byte.toString(16).padStart(2, '0')
      ).join('');
    }
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }

  static generateSecureToken(): string {
    const array = new Uint8Array(32);
    if (typeof window !== 'undefined' && window.crypto) {
      window.crypto.getRandomValues(array);
      return Array.from(array, (byte) =>
        byte.toString(16).padStart(2, '0')
      ).join('');
    }
    return btoa(String.fromCharCode(...array));
  }

  static validateSession(user: User): boolean {
    if (!user.sessionStart || !user.lastActivity) return false;

    const sessionStart = new Date(user.sessionStart).getTime();
    const lastActivity = new Date(user.lastActivity).getTime();
    const now = Date.now();

    // Check if session has expired
    if (now - sessionStart > this.SESSION_TIMEOUT) return false;

    // Check if user has been inactive for too long
    if (now - lastActivity > this.SESSION_TIMEOUT / 2) return false;

    return true;
  }

  static getSessionTimeRemaining(user: User): number {
    if (!user.sessionStart) return 0;

    const sessionStart = new Date(user.sessionStart).getTime();
    const now = Date.now();
    const elapsed = now - sessionStart;
    const remaining = this.SESSION_TIMEOUT - elapsed;

    return Math.max(0, remaining);
  }

  static shouldShowWarning(user: User): boolean {
    const remaining = this.getSessionTimeRemaining(user);
    return remaining <= this.WARNING_TIME && remaining > 0;
  }

  static validateLoginAttempts(email: string): {
    allowed: boolean;
    remainingAttempts: number;
    lockoutRemaining?: number;
  } {
    const attempts = parseInt(
      localStorage.getItem(`login_attempts_${email}`) || '0',
      10
    );
    const lockoutUntil = parseInt(
      localStorage.getItem(`lockout_${email}`) || '0',
      10
    );
    const now = Date.now();

    // Check if still locked out
    if (now < lockoutUntil) {
      return {
        allowed: false,
        remainingAttempts: 0,
        lockoutRemaining: lockoutUntil - now,
      };
    }

    // Reset attempts if lockout period has expired
    if (now >= lockoutUntil) {
      localStorage.removeItem(`lockout_${email}`);
      localStorage.removeItem(`login_attempts_${email}`);
      localStorage.removeItem(`last_attempt_${email}`);
    }

    const remainingAttempts = this.MAX_LOGIN_ATTEMPTS - attempts;
    return {
      allowed: remainingAttempts > 0,
      remainingAttempts,
    };
  }

  static recordFailedAttempt(email: string): void {
    const attempts =
      parseInt(localStorage.getItem(`login_attempts_${email}`) || '0', 10) + 1;
    const now = Date.now();

    localStorage.setItem(`login_attempts_${email}`, attempts.toString());
    localStorage.setItem(`last_attempt_${email}`, now.toString());

    // Lock account if max attempts reached
    if (attempts >= this.MAX_LOGIN_ATTEMPTS) {
      const lockoutUntil = now + this.LOCKOUT_DURATION;
      localStorage.setItem(`lockout_${email}`, lockoutUntil.toString());
    }
  }

  static clearFailedAttempts(email: string): void {
    localStorage.removeItem(`login_attempts_${email}`);
    localStorage.removeItem(`last_attempt_${email}`);
    localStorage.removeItem(`lockout_${email}`);
  }
}

// Enhanced user data validator
const validateUserData = (userData: unknown): User | null => {
  try {
    const data = userData as Record<string, unknown>;
    if (!data.id || !data.email || !data.role) {
      return null;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email as string)) {
      return null;
    }

    if (!['guest', 'tenant', 'admin'].includes(data.role as string)) {
      return null;
    }

    // Validate data types
    if (
      typeof data.id !== 'string' ||
      typeof data.email !== 'string' ||
      typeof data.role !== 'string'
    ) {
      return null;
    }

    return {
      id: data.id,
      name: data.name || (data.email as string).split('@')[0],
      email: data.email,
      role: data.role as UserRole,
      lastLogin: data.lastLogin as string | undefined,
      lastActivity: data.lastActivity as string | undefined,
      sessionStart: data.sessionStart as string | undefined,
      permissions:
        (data.permissions as string[]) ||
        getDefaultPermissions(data.role as UserRole),
      mfaEnabled: (data.mfaEnabled as boolean) || false,
      loginAttempts: (data.loginAttempts as number) || 0,
      lockedUntil: data.lockedUntil as string | undefined,
    };
  } catch {
    return null;
  }
};

// Enhanced backend session validation
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
        'X-Session-Validation': 'true',
      },
      body: JSON.stringify({ userId }),
      credentials: 'include',
    });

    return response.ok;
  } catch {
    return false;
  }
};

export const EnhancedAuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [sessionTimeRemaining, setSessionTimeRemaining] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const { addToast } = useToast();
  const sessionTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const warningTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  // Session timeout handler - uses logout which is defined later
  const handleSessionTimeout = useCallback(() => {
    logout();
    addToast('Your session has expired. Please log in again.', 'info');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addToast]);

  // Session warning handler
  const handleSessionWarning = useCallback(() => {
    addToast(
      'Your session will expire in 5 minutes. Please save your work.',
      'info'
    );
  }, [addToast]);

  // Update session activity
  const updateSessionActivity = useCallback(() => {
    if (user) {
      const updatedUser = {
        ...user,
        lastActivity: new Date().toISOString(),
      };
      setUser(updatedUser);
      localStorage.setItem('p4c_user', JSON.stringify(updatedUser));

      // Update session time remaining
      const remaining = SessionManager.getSessionTimeRemaining(updatedUser);
      setSessionTimeRemaining(remaining);
    }
  }, [user]);

  // Initialize session management
  useEffect(() => {
    if (user) {
      const remaining = SessionManager.getSessionTimeRemaining(user);
      setSessionTimeRemaining(remaining);

      // Set up session timeout
      if (sessionTimeoutRef.current) {
        clearTimeout(sessionTimeoutRef.current);
      }

      sessionTimeoutRef.current = setTimeout(handleSessionTimeout, remaining);

      // Set up session warning
      if (warningTimeoutRef.current) {
        clearTimeout(warningTimeoutRef.current);
      }

      if (SessionManager.shouldShowWarning(user)) {
        warningTimeoutRef.current = setTimeout(
          handleSessionWarning,
          remaining - 5 * 60 * 1000
        );
      }

      // Set up activity tracking
      const activityEvents = [
        'mousedown',
        'mousemove',
        'keypress',
        'scroll',
        'touchstart',
      ];
      const throttledUpdateActivity = throttle(updateSessionActivity, 60000); // Update every minute

      activityEvents.forEach((event) => {
        document.addEventListener(event, throttledUpdateActivity, true);
      });

      return () => {
        activityEvents.forEach((event) => {
          document.removeEventListener(event, throttledUpdateActivity, true);
        });
        if (sessionTimeoutRef.current) {
          clearTimeout(sessionTimeoutRef.current);
        }
        if (warningTimeoutRef.current) {
          clearTimeout(warningTimeoutRef.current);
        }
      };
    }

    // Return cleanup function when user is falsy
    return () => {
      if (sessionTimeoutRef.current) {
        clearTimeout(sessionTimeoutRef.current);
      }
      if (warningTimeoutRef.current) {
        clearTimeout(warningTimeoutRef.current);
      }
    };
  }, [user, handleSessionTimeout, handleSessionWarning, updateSessionActivity]);

  // Enhanced session validation on mount
  useEffect(() => {
    const validateSession = async () => {
      try {
        const storedUser = localStorage.getItem('p4c_user');
        const sessionToken = localStorage.getItem('p4c_session_token');

        if (storedUser && sessionToken) {
          const parsedUser = JSON.parse(storedUser) as unknown;
          const validatedUser = validateUserData(parsedUser);

          if (validatedUser && SessionManager.validateSession(validatedUser)) {
            const isValidSession = await validateSessionWithBackend(
              validatedUser.id,
              sessionToken
            );

            if (isValidSession) {
              setUser(validatedUser);
            } else {
              clearSensitiveData();
            }
          } else {
            clearSensitiveData();
          }
        }
      } catch {
        clearSensitiveData();
      } finally {
        setIsLoading(false);
      }
    };

    validateSession();
  }, []);

  // Enhanced login function
  const login = async (email: string, password?: string, mfaCode?: string) => {
    setIsLoading(true);

    try {
      // Input validation
      if (!email || !email.includes('@')) {
        throw new Error('Valid email is required');
      }

      // Check login attempts
      const attemptCheck = SessionManager.validateLoginAttempts(email);
      if (!attemptCheck.allowed) {
        if (attemptCheck.lockoutRemaining) {
          const minutes = Math.ceil(attemptCheck.lockoutRemaining / 60000);
          throw new Error(
            `Account temporarily locked. Try again in ${minutes} minutes.`
          );
        }
        throw new Error('Account temporarily locked. Please try again later.');
      }
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'X-Login-Attempt': attemptCheck.remainingAttempts.toString(),
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          password: password || '',
          mfaCode: mfaCode || '',
        }),
        credentials: 'include',
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({
          error: 'Authentication failed',
        }));

        // Record failed attempt
        SessionManager.recordFailedAttempt(email);
        setLoginAttempts((prev) => prev + 1);

        throw new Error(errorData.error || 'Login failed');
      }

      const { user: userData, token } = await response.json();

      // Clear failed attempts on successful login
      SessionManager.clearFailedAttempts(email);
      setLoginAttempts(0);

      // Sanitize and validate user data
      const cleanUser: User = {
        id: userData.id || SessionManager.generateSecureId(),
        name: userData.name || email.split('@')[0],
        email: userData.email || email,
        role: userData.role || 'tenant',
        lastLogin: new Date().toISOString(),
        lastActivity: new Date().toISOString(),
        sessionStart: new Date().toISOString(),
        permissions:
          userData.permissions ||
          getDefaultPermissions(userData.role || 'tenant'),
        mfaEnabled: userData.mfaEnabled || false,
        loginAttempts: 0,
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

  // Enhanced logout function
  const logout = useCallback(() => {
    // Clear state immediately
    setUser(null);
    setLoginAttempts(0);
    setIsLocked(false);

    // Clear storage
    clearSensitiveData();

    // Notify backend (non-blocking)
    fetch('/api/auth/logout', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('p4c_session_token')}`,
        'X-Requested-With': 'XMLHttpRequest',
      },
      credentials: 'include',
    }).catch(() => {
      // Ignore network errors on logout
    });

    addToast('You have been logged out.', 'info');
  }, [addToast]);

  // Clear sensitive data - defined before logout to avoid dependency cycle
  const clearSensitiveData = useCallback(() => {
    localStorage.removeItem('p4c_user');
    localStorage.removeItem('p4c_session_token');
    localStorage.removeItem('p4c_mfa_secret');
    localStorage.removeItem('p4c_temp_token');
  }, []);

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
        credentials: 'include',
      });

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('p4c_session_token', token);
      } else {
        logout();
      }
    } catch {
      logout();
    }
  };

  // MFA functions
  const enableMFA = async (): Promise<string> => {
    const response = await fetch('/api/auth/enable-mfa', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('p4c_session_token')}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to enable MFA');
    }

    const { qrCode } = await response.json();
    // Store MFA secret temporarily in memory only, not in localStorage
    // The secret should be handled server-side for security

    return qrCode;
  };

  const verifyMFA = async (code: string): Promise<boolean> => {
    try {
      const response = await fetch('/api/auth/verify-mfa', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('p4c_session_token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      if (response.ok) {
        return true;
      }

      return false;
    } catch {
      return false;
    }
  };

  // Password management
  const changePassword = async (
    currentPassword: string,
    newPassword: string
  ) => {
    const validation = validatePasswordPolicy(newPassword);
    if (!validation.isValid) {
      throw new Error(
        `Password policy violations: ${validation.errors.join(', ')}`
      );
    }

    const response = await fetch('/api/auth/change-password', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('p4c_session_token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ currentPassword, newPassword }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({
        error: 'Password change failed',
      }));
      throw new Error(errorData.error || 'Password change failed');
    }

    addToast('Password changed successfully', 'success');
  };

  const resetPassword = async (email: string) => {
    const response = await fetch('/api/auth/reset-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error('Password reset failed');
    }

    addToast('Password reset instructions sent to your email', 'success');
  };

  // Account lock functions
  const lockAccount = (_reason?: string) => {
    setIsLocked(true);
  };

  const unlockAccount = () => {
    setIsLocked(false);
    setLoginAttempts(0);
  };

  // Permission checking function
  const hasPermission = useCallback(
    (permission: string): boolean => {
      if (!user || isLocked) return false;

      // Admins have all permissions
      if (user.role === 'admin') return true;

      // Check specific permissions
      return user.permissions.includes(permission);
    },
    [user, isLocked]
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user && !isLocked,
        isLoading,
        isLocked,
        loginAttempts,
        sessionTimeRemaining,
        login,
        logout,
        refreshToken,
        hasPermission,
        enableMFA,
        verifyMFA,
        changePassword,
        resetPassword,
        lockAccount,
        unlockAccount,
        clearSensitiveData,
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
        'system_admin',
      ];
    case 'tenant':
      return ['read', 'write', 'view_own_data'];
    case 'guest':
      return ['read'];
    default:
      return ['read'];
  }
};

// Utility function for throttling
const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): T => {
  let inThrottle: boolean;
  return function (this: unknown, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  } as T;
};

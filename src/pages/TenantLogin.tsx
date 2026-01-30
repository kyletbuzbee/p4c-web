import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Lock,
  User,
  ArrowRight,
  ShieldCheck,
  Wrench,
  CreditCard,
  AlertCircle,
} from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { IMAGES } from '../constants/images';

const TenantLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from?.pathname || '/';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      // For demo purposes, accept these credentials
      if (
        (email === 'admin@p4c.com' && password === 'admin') ||
        (email === 'tenant@p4c.com' && password === 'tenant123') ||
        (email === 'veteran@p4c.com' && password === 'veteran123')
      ) {
        // Map veteran to tenant role since veteran is not in UserRole type
        const userType = email.includes('admin')
          ? 'admin'
          : email.includes('veteran')
            ? 'tenant' // Map veteran to tenant
            : 'tenant';

        await login(email, userType);

        // Redirect based on user type
        if (userType === 'admin') {
          navigate('/admin');
        } else {
          navigate(from === '/admin' ? '/portal' : from || '/portal');
        }
      } else {
        setError(
          'Invalid email or password. Please check your credentials and try again.'
        );
      }
    } catch {
      setError('Login failed. Please try again or contact support.');
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-p4c-beige lg:flex-row">
      <Helmet>
        <title>Portal Login | Properties 4 Creation</title>
        <meta
          name="description"
          content="Secure tenant portal for Properties 4 Creation residents. Pay rent, submit maintenance requests, and manage your housing account online."
        />
        <meta
          name="keywords"
          content="tenant portal login, resident login, pay rent online, maintenance requests, tenant dashboard, housing portal"
        />
      </Helmet>

      {/* Left Side - Visuals */}
      <div className="relative hidden flex-col justify-center overflow-hidden bg-p4c-navy px-12 text-white lg:flex lg:w-1/2">
        <div
          className="absolute left-0 top-0 size-full bg-cover opacity-20"
          style={{ backgroundImage: `url('${IMAGES.BANNERS.HERO_HOME}')` }}
        />
        <div className="relative z-10">
          <h1 className="mb-6 font-serif text-4xl font-bold">Welcome Home.</h1>
          <p className="mb-8 max-w-md text-lg text-gray-300">
            Manage your residency with ease. Pay rent, request repairs, and view
            community announcements all in one place.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
              <CreditCard className="size-6 text-p4c-gold" />
              <div>
                <h3 className="font-bold">Auto-Pay Rent</h3>
                <p className="text-sm text-gray-400">
                  Set it and forget it. Secure transactions.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
              <Wrench className="size-6 text-p4c-gold" />
              <div>
                <h3 className="font-bold">24/7 Maintenance</h3>
                <p className="text-sm text-gray-400">
                  Track status of repair requests in real-time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex items-center justify-center p-8 lg:w-1/2">
        <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 shadow-xl">
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-full bg-p4c-navy p-3 shadow-lg">
              <Lock className="size-6 text-p4c-gold" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-p4c-navy">
              Secure Login
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Resident & Staff Portal
            </p>
          </div>

          {error && (
            <div className="mb-4 flex animate-fade-in items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              <AlertCircle className="size-4 shrink-0" />
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <User className="size-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border border-gray-300 py-3 pl-10 pr-3 shadow-sm transition-shadow placeholder:text-gray-400 focus:border-p4c-gold focus:outline-none focus:ring-p4c-gold sm:text-sm"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <div className="mb-1 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <button
                  type="button"
                  className="cursor-pointer text-xs text-p4c-navy hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock className="size-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border border-gray-300 py-3 pl-10 pr-3 shadow-sm transition-shadow placeholder:text-gray-400 focus:border-p4c-gold focus:outline-none focus:ring-p4c-gold sm:text-sm"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full justify-center rounded-md border border-transparent bg-p4c-navy px-4 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-p4c-slate focus:outline-none focus:ring-2 focus:ring-p4c-navy focus:ring-offset-2 disabled:opacity-70"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}{' '}
              <ArrowRight className="ml-2 size-4" />
            </button>
          </form>

          <div className="mt-6 border-t border-gray-100 pt-6 text-center">
            <div className="mb-4 flex items-center justify-center gap-2 rounded bg-green-50 p-2 text-xs font-bold text-green-700">
              <ShieldCheck className="size-4" />
              Bank-Level 256-bit Encryption
            </div>
            <div className="space-y-3">
              <p className="text-center text-xs text-gray-500">
                Not a resident yet?{' '}
                <Link
                  to="/apply"
                  className="font-bold text-p4c-navy hover:underline"
                >
                  Apply for a home
                </Link>
              </p>

              <div className="rounded-lg border border-blue-200 bg-blue-50 p-3">
                <p className="text-center text-xs font-medium text-blue-800">
                  Demo Credentials:
                </p>
                <div className="mt-1 space-y-1 text-xs text-blue-700">
                  <div>Admin: admin@p4c.com / admin</div>
                  <div>Tenant: tenant@p4c.com / tenant123</div>
                  <div>Veteran: veteran@p4c.com / veteran123</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantLogin;

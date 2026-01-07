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

    // Simulate simple auth check
    if (email === 'admin@p4c.com' && password === 'admin') {
      await login(email, 'admin');
      navigate('/admin');
    } else if (email === 'demo@p4c.com' && password === 'demo') {
      await login(email, 'tenant');
      navigate(from === '/admin' ? '/' : from); // Tenants can't go to admin
    } else {
      setError(
        'Invalid credentials. Try (admin@p4c.com / admin) or (demo@p4c.com / demo)'
      );
    }
  };

  return (
    <div className="min-h-screen bg-p4c-beige flex flex-col lg:flex-row">
      <Helmet>
        <title>Portal Login | Properties 4 Creation</title>
      </Helmet>

      {/* Left Side - Visuals */}
      <div className="lg:w-1/2 bg-p4c-navy relative hidden lg:flex flex-col justify-center px-12 text-white overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover opacity-20"
          style={{ backgroundImage: `url('${IMAGES.BANNERS.HERO_HOME}')` }}
        />
        <div className="relative z-10">
          <h1 className="text-4xl font-serif font-bold mb-6">Welcome Home.</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-md">
            Manage your residency with ease. Pay rent, request repairs, and view
            community announcements all in one place.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/10">
              <CreditCard className="text-p4c-gold w-6 h-6" />
              <div>
                <h3 className="font-bold">Auto-Pay Rent</h3>
                <p className="text-sm text-gray-400">
                  Set it and forget it. Secure transactions.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/10">
              <Wrench className="text-p4c-gold w-6 h-6" />
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
      <div className="lg:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <div className="inline-flex justify-center items-center bg-p4c-navy p-3 rounded-full mb-4 shadow-lg">
              <Lock className="text-p4c-gold w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-p4c-navy font-serif">
              Secure Login
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Resident & Staff Portal
            </p>
          </div>

          {error && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm flex items-center gap-2 animate-fade-in">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-p4c-gold focus:border-p4c-gold sm:text-sm transition-shadow"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <button
                  type="button"
                  className="text-xs text-p4c-navy hover:underline cursor-pointer"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-p4c-gold focus:border-p4c-gold sm:text-sm transition-shadow"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-p4c-navy hover:bg-p4c-slate focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-p4c-navy transition-all duration-200 disabled:opacity-70"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}{' '}
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-100 text-center">
            <div className="flex items-center justify-center gap-2 text-green-700 bg-green-50 p-2 rounded text-xs font-bold mb-4">
              <ShieldCheck className="w-4 h-4" />
              Bank-Level 256-bit Encryption
            </div>
            <p className="text-xs text-gray-500">
              Not a resident yet?{' '}
              <Link
                to="/apply"
                className="text-p4c-navy font-bold hover:underline"
              >
                Apply for a home
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantLogin;

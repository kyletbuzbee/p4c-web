
import React, { useState } from 'react';
import { Menu, X, Home, HeartHandshake, Info, BarChart3, UserCircle, LogOut, LayoutDashboard, Star } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import DarkModeToggle from './DarkModeToggle';

const NAV_LINKS = [
  { name: 'Properties', path: '/', icon: <Home className="w-4 h-4 mr-2" /> },
  { name: 'Veterans', path: '/veteran-services', icon: <HeartHandshake className="w-4 h-4 mr-2" /> },
  { name: 'Stories', path: '/success-stories', icon: <Star className="w-4 h-4 mr-2" /> },
  { name: 'Impact', path: '/impact', icon: <BarChart3 className="w-4 h-4 mr-2" /> },
  { name: 'About', path: '/about', icon: <Info className="w-4 h-4 mr-2" /> },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  const handleMobileNav = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-p4c-navy/80 backdrop-blur-md border-b border-white/10 text-white shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link 
            to="/"
            className="flex-shrink-0 flex items-center gap-3 hover:opacity-90 transition-opacity group"
          >
             <div className="bg-p4c-gold p-2 rounded-full shadow-lg group-hover:shadow-p4c-gold/20 transition-all">
                <Home className="text-p4c-navy w-6 h-6" />
             </div>
             <div className="text-left">
                <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-p4c-beige block drop-shadow-sm">
                  Properties 4 Creations
                </span>
                <p className="text-xs text-gray-300 uppercase tracking-widest hidden md:block font-medium">Veteran Owned & Operated</p>
             </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center font-sans text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  isActive(link.path) ? 'text-p4c-gold' : 'text-gray-200 hover:text-p4c-gold'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="w-px h-6 bg-gray-600 mx-2"></div>

            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                {user?.role === 'admin' ? (
                  <Link 
                    to="/admin"
                    className="flex items-center text-sm font-bold text-p4c-gold hover:text-white transition-colors"
                  >
                    <LayoutDashboard className="w-4 h-4 mr-1" /> Dashboard
                  </Link>
                ) : (
                  <span className="text-sm text-gray-300">Hi, {user?.name}</span>
                )}
                <button 
                  onClick={logout}
                  className="flex items-center text-sm font-medium text-gray-300 hover:text-red-400 transition-colors"
                >
                  <LogOut className="w-4 h-4 mr-1" /> Logout
                </button>
              </div>
            ) : (
              <Link 
                to="/portal"
                className="flex items-center text-sm font-bold text-gray-300 hover:text-white transition-colors"
              >
                  <UserCircle className="w-4 h-4 mr-1" /> Login
              </Link>
            )}

            {/* Dark Mode Toggle */}
            <DarkModeToggle className="group" />
            
            {!isAuthenticated && (
              <Link
                to="/apply"
                className="bg-p4c-gold text-p4c-navy hover:bg-p4c-goldHover px-5 py-2.5 rounded-md font-bold font-sans transition-all duration-200 shadow-lg hover:shadow-p4c-gold/30 hover:-translate-y-0.5 ml-2"
              >
                Find Your Home
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-white focus:outline-none p-2 rounded-md hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="xl:hidden bg-p4c-navy/95 backdrop-blur-xl border-t border-white/10 animate-fade-in h-screen overflow-y-auto pb-20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => handleMobileNav(link.path)}
                className="w-full text-left px-3 py-4 rounded-md text-base font-medium text-white hover:bg-white/10 hover:text-p4c-gold transition-colors"
              >
                <div className="flex items-center">
                    {link.icon}
                    {link.name}
                </div>
              </button>
            ))}
            <div className="pt-4 pb-4 px-2 space-y-3 border-t border-white/10 mt-2">
                {isAuthenticated ? (
                  <>
                    <div className="px-3 py-2 text-gray-400 text-sm">Signed in as {user?.email}</div>
                    {user?.role === 'admin' && (
                      <button 
                        onClick={() => handleMobileNav('/admin')}
                        className="w-full bg-white/10 text-p4c-gold px-6 py-3 rounded-md font-bold font-sans flex items-center justify-center gap-2 mb-2"
                      >
                        <LayoutDashboard className="w-5 h-5" /> Admin Dashboard
                      </button>
                    )}
                    <button 
                      onClick={() => { logout(); setIsOpen(false); }}
                      className="w-full bg-red-900/50 border border-red-800 text-red-200 px-6 py-3 rounded-md font-bold font-sans flex items-center justify-center gap-2"
                    >
                      <LogOut className="w-5 h-5" /> Logout
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      onClick={() => handleMobileNav('/portal')}
                      className="w-full bg-transparent border border-gray-500 text-white px-6 py-3 rounded-md font-bold font-sans flex items-center justify-center gap-2"
                    >
                      <UserCircle className="w-5 h-5" /> Resident Login
                    </button>
                    <button 
                      onClick={() => handleMobileNav('/apply')}
                      className="w-full bg-p4c-gold text-p4c-navy hover:bg-p4c-goldHover px-6 py-3 rounded-md font-bold font-sans shadow-md"
                    >
                      Find Your Home
                    </button>
                  </>
                )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

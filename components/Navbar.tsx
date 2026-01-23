import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Menu,
  X,
  Home,
  ChevronDown,
  Users,
  Heart,
  ShieldCheck,
  Hammer,
  Flag,
  HeartHandshake,
  HelpCircle,
  Lock,
  Phone,
  FileText,
  CheckCircle2,
  LayoutDashboard,
  Scale,
  Accessibility,
  Building2,
} from 'lucide-react';
import { IMAGES } from '../constants/images';

interface NavItem {
  label: string;
  path?: string;
  children?: {
    label: string;
    path: string;
    icon: React.ReactNode;
    desc: string;
  }[];
}

const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();

  // Define the Navigation Structure
  const navStructure: NavItem[] = [
    {
      label: 'Find a Home',
      children: [
        {
          label: 'Available Properties',
          path: '/',
          icon: <Home className="w-4 h-4" />,
          desc: 'Premium rentals in Tyler & Longview',
        },
        {
          label: 'Family Resources',
          path: '/family-resources',
          icon: <Users className="w-4 h-4" />,
          desc: 'School districts & community guides',
        },
        {
          label: 'Tenant Application',
          path: '/apply',
          icon: <FileText className="w-4 h-4" />,
          desc: 'Fast, digital approval process',
        },
        {
          label: 'Equal Housing',
          path: '/equal-housing',
          icon: <Scale className="w-4 h-4" />,
          desc: 'Fair housing for all applicants',
        },
      ],
    },
    {
      label: 'Company',
      children: [
        {
          label: 'Our Story',
          path: '/about',
          icon: <Building2 className="w-4 h-4" />,
          desc: 'Professional management team',
        },
        {
          label: 'Construction Standards',
          path: '/transparency',
          icon: <ShieldCheck className="w-4 h-4" />,
          desc: 'See our renovation quality specs',
        },
        {
          label: 'Community Investment',
          path: '/impact',
          icon: <Heart className="w-4 h-4" />,
          desc: 'Revitalization data & metrics',
        },
        {
          label: 'Resident Reviews',
          path: '/stories',
          icon: <CheckCircle2 className="w-4 h-4" />,
          desc: 'Hear from happy tenants',
        },
        {
          label: 'Careers',
          path: '/employment',
          icon: <Hammer className="w-4 h-4" />,
          desc: 'Join our renovation crews',
        },
      ],
    },
    {
      label: 'Residents',
      children: [
        {
          label: 'Veteran Housing',
          path: '/veterans',
          icon: <Flag className="w-4 h-4" />,
          desc: 'Specialized military housing',
        },
        {
          label: 'Resident Services',
          path: '/veteran-services',
          icon: <HeartHandshake className="w-4 h-4" />,
          desc: 'Support & case management',
        },
        {
          label: 'Resident Portal',
          path: '/portal',
          icon: <Lock className="w-4 h-4" />,
          desc: 'Pay rent & request repairs',
        },
        {
          label: 'FAQ',
          path: '/faq',
          icon: <HelpCircle className="w-4 h-4" />,
          desc: 'Leasing & policy questions',
        },
        {
          label: 'Accessibility',
          path: '/accessibility',
          icon: <Accessibility className="w-4 h-4" />,
          desc: 'ADA compliance info',
        },
      ],
    },
  ];

  // Handling Hover for Desktop Dropdowns
  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsOpen(false);
    setActiveDropdown(null);
    window.scrollTo(0, 0);
  };

  const handleKeyDown = (e: React.KeyboardEvent, path: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNavClick(path);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0B1120]/95 border-b border-[#0B1120]/30 text-white backdrop-blur-xl shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 flex items-center gap-3 hover:opacity-90 transition-opacity"
            aria-label="Properties 4 Creation Home"
          >
            <img
              src={IMAGES.LOGO.WHITE_GOLD}
              alt="Properties 4 Creation Logo"
              className="h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navStructure.map((group) => (
              <div
                key={group.label}
                className="relative group px-3 py-2"
                onMouseEnter={() => handleMouseEnter(group.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center text-sm font-medium transition-colors duration-200 ${
                    activeDropdown === group.label
                      ? 'text-p4c-gold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  aria-expanded={activeDropdown === group.label}
                  aria-haspopup="true"
                  aria-label={`${group.label} menu`}
                >
                  {group.label}
                  <ChevronDown
                    className={`ml-1 w-3 h-3 transition-transform duration-200 ${
                      activeDropdown === group.label ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === group.label && (
                  <div
                    className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-fade-in-up"
                    role="menu"
                  >
                    <div className="py-2">
                      {group.children?.map((child) => (
                        <button
                          key={child.label}
                          onClick={() => handleNavClick(child.path)}
                          onKeyDown={(e) => handleKeyDown(e, child.path)}
                          className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-start gap-3 group/item transition-colors"
                          role="menuitem"
                          aria-label={`${child.label} - ${child.desc}`}
                        >
                          <div className="mt-1 p-1.5 bg-p4c-beige rounded-md text-p4c-navy group-hover/item:bg-p4c-navy group-hover/item:text-p4c-gold transition-colors">
                            {child.icon}
                          </div>
                          <div>
                            <div className="text-p4c-navy font-bold text-sm">
                              {child.label}
                            </div>
                            <div className="text-gray-500 text-xs">
                              {child.desc}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Direct Links */}
            <button
              onClick={() => handleNavClick('/contact')}
              className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
              aria-label="Contact us"
            >
              Contact
            </button>

            <div className="h-6 w-px bg-gray-700 mx-2" />

            {/* Internal / Admin Link (Hidden in plain sight) */}
            <button
              onClick={() => handleNavClick('/admin')}
              className="text-gray-400 hover:text-p4c-gold p-2 rounded-full"
              aria-label="Staff Dashboard"
            >
              <LayoutDashboard className="w-4 h-4" aria-hidden="true" />
            </button>

            {/* Sell Your House CTA */}
            <Link
              to="/homeowner-solutions"
              className="bg-p4c-gold text-p4c-navy px-5 py-2.5 rounded-xl font-bold hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mr-3 text-sm flex items-center gap-2"
              aria-label="Sell your house - Homeowner solutions"
            >
              <Building2 className="w-4 h-4" aria-hidden="true" />
              Sell Your House
            </Link>

            {/* CTA Button */}
            <button
              onClick={() => handleNavClick('/apply')}
              className="bg-p4c-navy border border-p4c-gold text-p4c-gold hover:bg-p4c-gold hover:text-p4c-navy px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              aria-label="Apply now for tenant application"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 focus:outline-none focus:ring-2 focus:ring-p4c-gold"
              aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-[#0B1120] border-t border-gray-800 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 pt-4 pb-6 space-y-6">
            {navStructure.map((group) => (
              <div key={group.label} className="space-y-3">
                <h3 className="text-p4c-gold font-serif font-bold border-b border-gray-700 pb-2">
                  {group.label}
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {group.children?.map((child) => (
                    <button
                      key={child.label}
                      onClick={() => handleNavClick(child.path)}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white transition-colors text-left"
                      aria-label={`${child.label} - ${child.desc}`}
                    >
                      <div className="text-p4c-gold">{child.icon}</div>
                      <div>
                        <div className="font-medium text-sm">{child.label}</div>
                        <div className="text-xs text-gray-500">
                          {child.desc}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <div className="pt-4 border-t border-gray-700 space-y-3">
              <button
                onClick={() => handleNavClick('/homeowner-solutions')}
                className="w-full bg-p4c-gold text-p4c-navy hover:bg-white px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2"
                aria-label="Sell your house fast - Homeowner solutions"
              >
                <Building2 className="w-4 h-4" aria-hidden="true" /> Sell Your
                House Fast
              </button>

              <button
                onClick={() => handleNavClick('/apply')}
                className="w-full bg-p4c-navy border border-p4c-gold text-p4c-gold hover:bg-p4c-goldHover hover:text-p4c-navy px-6 py-3 rounded-lg font-bold"
                aria-label="Start tenant application process"
              >
                Start Tenant Application
              </button>

              <button
                onClick={() => handleNavClick('/contact')}
                className="w-full flex items-center justify-center gap-3 p-2 text-gray-400 hover:text-white"
                aria-label="Contact office for assistance"
              >
                <Phone className="w-4 h-4" aria-hidden="true" /> Contact Office
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

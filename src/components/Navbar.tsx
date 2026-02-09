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

const Navbar = (): React.ReactElement => {
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
          path: '/properties',
          icon: <Home className="size-4" />,
          desc: 'Premium rentals in Tyler & Longview',
        },
        {
          label: 'Apply for Housing',
          path: '/apply',
          icon: <FileText className="size-4" />,
          desc: 'Fast, digital approval process',
        },
        {
          label: 'Veteran Housing Program',
          path: '/veterans',
          icon: <Flag className="size-4" />,
          desc: 'Specialized military housing',
        },
        {
          label: 'Family Resources',
          path: '/family-resources',
          icon: <Users className="size-4" />,
          desc: 'School districts & community guides',
        },
      ],
    },
    {
      label: 'About Us',
      children: [
        {
          label: 'Our Story',
          path: '/about',
          icon: <Building2 className="size-4" />,
          desc: 'Professional management team',
        },
        {
          label: 'Community Impact',
          path: '/community',
          icon: <Heart className="size-4" />,
          desc: 'Revitalization data & metrics',
        },
        {
          label: 'Quality Standards',
          path: '/transparency',
          icon: <ShieldCheck className="size-4" />,
          desc: 'See our renovation quality specs',
        },
        {
          label: 'Resident Stories',
          path: '/reviews',
          icon: <CheckCircle2 className="size-4" />,
          desc: 'Our commitment to excellence',
        },
        {
          label: 'Careers',
          path: '/careers',
          icon: <Hammer className="size-4" />,
          desc: 'Join our renovation crews',
        },
      ],
    },
    {
      label: 'Residents',
      children: [
        {
          label: 'Resident Portal',
          path: '/portal',
          icon: <Lock className="size-4" />,
          desc: 'Pay rent & request repairs',
        },
        {
          label: 'Resident Services',
          path: '/resident-services',
          icon: <HeartHandshake className="size-4" />,
          desc: 'Support & case management',
        },
        {
          label: 'Veteran Services',
          path: '/veteran-services',
          icon: <Flag className="size-4" />,
          desc: 'Veteran resident support',
        },
        {
          label: 'FAQ',
          path: '/faq',
          icon: <HelpCircle className="size-4" />,
          desc: 'Leasing & policy questions',
        },
        {
          label: 'Accessibility',
          path: '/accessibility',
          icon: <Accessibility className="size-4" />,
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
    <nav
      className="sticky top-0 z-50 border-b border-p4c-gold/30 text-white shadow-lg backdrop-blur-md transition-all duration-300"
      style={{ backgroundColor: 'rgba(11, 17, 32, 0.8)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex shrink-0 items-center gap-3 transition-opacity hover:opacity-90"
            aria-label="Properties 4 Creation Home"
          >
            <img
              src={IMAGES.LOGO.WHITE_GOLD}
              alt="Properties 4 Creation Logo"
              className="h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-1 md:flex">
            {navStructure.map((group) => (
              <div
                key={group.label}
                className="group relative px-3 py-2"
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
                    className={`ml-1 size-3 transition-transform duration-200 ${
                      activeDropdown === group.label ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === group.label && (
                  <div
                    className="absolute left-0 top-full mt-1 w-80 animate-fade-in-up overflow-hidden rounded-xl border border-p4c-gold/30 p-2 shadow-2xl backdrop-blur-xl"
                    role="menu"
                    style={{ backgroundColor: 'rgba(11, 17, 32, 0.95)' }}
                  >
                    <div className="py-1">
                      {group.children?.map((child) => (
                        <button
                          key={child.label}
                          onClick={() => handleNavClick(child.path)}
                          onKeyDown={(e) => handleKeyDown(e, child.path)}
                          className="group/item flex w-full items-start gap-3 rounded-lg p-3 text-left transition-colors hover:bg-white/10"
                          role="menuitem"
                          aria-label={`${child.label} - ${child.desc}`}
                        >
                          <div className="mt-0.5 rounded-md bg-p4c-gold/20 p-1.5 text-p4c-gold transition-colors group-hover/item:bg-p4c-gold group-hover/item:text-p4c-navy">
                            {child.icon}
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white">
                              {child.label}
                            </div>
                            <div className="text-xs text-gray-300">
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
              className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white"
              aria-label="Contact Properties 4 Creation"
              aria-haspopup="false"
            >
              Contact
            </button>

            <div className="mx-2 h-6 w-px bg-gray-700" />

            {/* Internal / Admin Link (Hidden in plain sight) */}
            <button
              onClick={() => handleNavClick('/admin')}
              className="rounded-full p-2 text-gray-400 hover:text-p4c-gold"
              aria-label="Staff Dashboard"
              aria-haspopup="false"
            >
              <LayoutDashboard className="size-4" aria-hidden="true" />
            </button>

            {/* Sell Your House CTA */}
            <Link
              to="/homeowner-solutions"
              className="mr-3 flex items-center gap-2 rounded-xl bg-p4c-gold px-5 py-2.5 text-sm font-bold text-p4c-navy shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-xl"
              aria-label="Sell your house - Homeowner solutions"
            >
              <Building2 className="size-4" aria-hidden="true" />
              Sell Your House
            </Link>

            {/* CTA Button */}
            <button
              onClick={() => handleNavClick('/apply')}
              className="rounded-xl border border-p4c-gold bg-p4c-navy px-5 py-2.5 text-sm font-bold text-p4c-gold shadow-lg transition-all hover:-translate-y-0.5 hover:bg-p4c-gold hover:text-p4c-navy hover:shadow-xl"
              aria-label="Apply now for tenant application"
              aria-haspopup="false"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-p4c-gold"
              aria-label={
                isOpen ? 'Close navigation menu' : 'Open navigation menu'
              }
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="max-h-[calc(100vh-80px)] overflow-y-auto border-t border-white/10 backdrop-blur-xl md:hidden"
          style={{ backgroundColor: 'rgba(11, 17, 32, 0.95)' }}
        >
          <div className="space-y-6 px-4 pb-6 pt-4">
            {navStructure.map((group) => (
              <div key={group.label} className="space-y-3">
                <h3 className="border-b border-gray-700 pb-2 font-serif font-bold text-p4c-gold">
                  {group.label}
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {group.children?.map((child) => (
                    <button
                      key={child.label}
                      onClick={() => handleNavClick(child.path)}
                      className="flex items-center gap-3 rounded-lg p-2 text-left text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
                      aria-label={`${child.label} - ${child.desc}`}
                    >
                      <div className="text-p4c-gold">{child.icon}</div>
                      <div>
                        <div className="text-sm font-medium">{child.label}</div>
                        <div className="text-xs text-gray-500">
                          {child.desc}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <div className="space-y-3 border-t border-gray-700 pt-4">
              <button
                onClick={() => handleNavClick('/homeowner-solutions')}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-p4c-gold px-6 py-3 font-bold text-p4c-navy hover:bg-white"
                aria-label="Sell your house fast - Homeowner solutions"
              >
                <Building2 className="size-4" aria-hidden="true" /> Sell Your
                House Fast
              </button>

              <button
                onClick={() => handleNavClick('/apply')}
                className="w-full rounded-lg border border-p4c-gold bg-p4c-navy px-6 py-3 font-bold text-p4c-gold hover:bg-p4c-goldHover hover:text-p4c-navy"
                aria-label="Start tenant application process"
              >
                Start Tenant Application
              </button>

              <button
                onClick={() => handleNavClick('/contact')}
                className="flex w-full items-center justify-center gap-3 p-2 text-gray-400 hover:text-white"
                aria-label="Contact office for assistance"
              >
                <Phone className="size-4" aria-hidden="true" /> Contact Office
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

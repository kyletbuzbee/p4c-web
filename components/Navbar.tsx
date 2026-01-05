import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Menu, X, Home, ChevronDown, Users, Heart,
  ShieldCheck, Hammer, Flag, HeartHandshake,
  HelpCircle, Lock, Phone, FileText, CheckCircle2,
  LayoutDashboard, Scale, Accessibility
} from 'lucide-react';

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

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  // Define the Navigation Structure
  const navStructure: NavItem[] = [
    {
      label: 'Find a Home',
      children: [
        { label: 'Browse Listings', path: '/', icon: <Home className="w-4 h-4" />, desc: 'View available homes in East Texas' },
        { label: 'Start Application', path: '/apply', icon: <FileText className="w-4 h-4" />, desc: 'Pre-approval in minutes' },
        { label: 'Equal Housing', path: '/equal-housing', icon: <Scale className="w-4 h-4" />, desc: 'Our commitment to fair housing' },
      ]
    },
    {
      label: 'Mission',
      children: [
        { label: 'About Us', path: '/about', icon: <Users className="w-4 h-4" />, desc: 'Our story and values' },
        { label: 'Our Impact', path: '/impact', icon: <Heart className="w-4 h-4" />, desc: 'Data on community revitalization' },
        { label: 'Transparency', path: '/transparency', icon: <ShieldCheck className="w-4 h-4" />, desc: 'Renovation standards' },
        { label: 'Success Stories', path: '/stories', icon: <CheckCircle2 className="w-4 h-4" />, desc: 'Hear from our residents' },
        { label: 'Careers', path: '/employment', icon: <Hammer className="w-4 h-4" />, desc: 'Join the construction crew' },
      ]
    },
    {
      label: 'Residents',
      children: [
        { label: 'Veteran Programs', path: '/veterans', icon: <Flag className="w-4 h-4" />, desc: 'HUD-VASH & specialized housing' },
        { label: 'Support Services', path: '/veteran-services', icon: <HeartHandshake className="w-4 h-4" />, desc: 'Case management resources' },
        { label: 'Resident Portal', path: '/portal', icon: <Lock className="w-4 h-4" />, desc: 'Pay rent & request repairs' },
        { label: 'FAQ', path: '/faq', icon: <HelpCircle className="w-4 h-4" />, desc: 'Common questions' },
        { label: 'Accessibility', path: '/accessibility', icon: <Accessibility className="w-4 h-4" />, desc: 'ADA compliance info' },
      ]
    }
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

  return (
    <nav className="sticky top-0 z-50 bg-p4c-gold/95 border-b border-p4c-navy/30 text-p4c-navy backdrop-blur-xl shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div className="bg-p4c-gold p-2 rounded-full">
              <Home className="text-p4c-navy w-6 h-6" />
            </div>
            <div className="text-left">
              <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-p4c-beige block leading-none">
                Properties 4 Creation
              </span>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest hidden md:block mt-1">Veteran Owned & Operated</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navStructure.map((group) => (
              <div
                key={group.label}
                className="relative group px-3 py-2"
                onMouseEnter={() => handleMouseEnter(group.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`flex items-center text-sm font-medium transition-colors duration-200 ${activeDropdown === group.label ? 'text-p4c-gold' : 'text-gray-200 hover:text-white'}`}>
                  {group.label}
                  <ChevronDown className={`ml-1 w-3 h-3 transition-transform duration-200 ${activeDropdown === group.label ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === group.label && (
                  <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-fade-in-up">
                    <div className="py-2">
                      {group.children?.map((child) => (
                        <button
                          key={child.label}
                          onClick={() => handleNavClick(child.path)}
                          className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-start gap-3 group/item transition-colors"
                        >
                          <div className="mt-1 p-1.5 bg-p4c-beige rounded-md text-p4c-navy group-hover/item:bg-p4c-navy group-hover/item:text-p4c-gold transition-colors">
                            {child.icon}
                          </div>
                          <div>
                            <div className="text-p4c-navy font-bold text-sm">{child.label}</div>
                            <div className="text-gray-500 text-xs">{child.desc}</div>
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
              className="text-gray-200 hover:text-white px-3 py-2 text-sm font-medium"
            >
              Contact
            </button>
            
            <div className="h-6 w-px bg-gray-700 mx-2"></div>

            {/* Internal / Admin Link (Hidden in plain sight) */}
            <button
               onClick={() => handleNavClick('/admin')}
               className="text-gray-400 hover:text-p4c-gold p-2 rounded-full"
               title="Staff Dashboard"
            >
               <LayoutDashboard className="w-4 h-4" />
            </button>

            {/* CTA Button */}
            <button
              onClick={() => handleNavClick('/apply')}
              className="ml-4 bg-p4c-gold text-p4c-navy hover:bg-p4c-goldHover px-6 py-2.5 rounded-md font-bold text-sm transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-p4c-navy border-t border-gray-800 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 pt-4 pb-6 space-y-6">
            {navStructure.map((group) => (
              <div key={group.label} className="space-y-3">
                <h3 className="text-p4c-gold font-serif font-bold border-b border-gray-700 pb-2">{group.label}</h3>
                <div className="grid grid-cols-1 gap-2">
                  {group.children?.map((child) => (
                    <button
                      key={child.label}
                      onClick={() => handleNavClick(child.path)}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white transition-colors text-left"
                    >
                      <div className="text-p4c-gold">{child.icon}</div>
                      <span className="text-sm font-medium">{child.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <div className="pt-4 border-t border-gray-700">
               <button
                 onClick={() => handleNavClick('/contact')}
                 className="flex items-center gap-3 p-2 text-gray-300 hover:text-white mb-4"
               >
                 <Phone className="w-4 h-4 text-p4c-gold" /> Contact Support
               </button>
               <button
                  onClick={() => handleNavClick('/apply')}
                  className="w-full bg-p4c-gold text-p4c-navy hover:bg-p4c-goldHover px-6 py-3 rounded-md font-bold"
                >
                  Start Application
                </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

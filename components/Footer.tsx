
import React from 'react';
import { Accessibility, Home, Facebook, Instagram, Linkedin, Flag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* 1. Brand & Mission */}
            <div className="col-span-1">
                <div className="flex items-center gap-2 mb-4">
                     <div className="bg-p4c-gold p-1.5 rounded-full">
                        <Home className="text-p4c-navy w-5 h-5" />
                     </div>
                    <span className="font-serif text-xl font-bold text-p4c-beige">Properties 4 Creation</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Breaking the stigma of affordable housing in East Texas. We restore properties to restore dignity, focusing on veterans and families using housing vouchers.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="text-gray-400 hover:text-p4c-gold transition-colors"><Facebook className="w-5 h-5" /></a>
                    <a href="#" className="text-gray-400 hover:text-p4c-gold transition-colors"><Instagram className="w-5 h-5" /></a>
                    <a href="#" className="text-gray-400 hover:text-p4c-gold transition-colors"><Linkedin className="w-5 h-5" /></a>
                </div>
            </div>

            {/* 2. Discover (User Facing) */}
            <div>
                <h4 className="font-serif font-bold text-lg mb-4 text-p4c-gold">Discover</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                    <li><Link to="/" className="hover:text-white transition-colors">Available Homes</Link></li>
                    <li><Link to="/veteran-services" className="hover:text-white transition-colors">Veteran Services</Link></li>
                    <li><Link to="/success-stories" className="hover:text-white transition-colors">Success Stories</Link></li>
                    <li><Link to="/impact" className="hover:text-white transition-colors">Impact Dashboard</Link></li>
                    <li><Link to="/portal" className="hover:text-white transition-colors">Resident Portal</Link></li>
                </ul>
            </div>

            {/* 3. Company (Corporate Facing) */}
            <div>
                <h4 className="font-serif font-bold text-lg mb-4 text-p4c-gold">Company</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                    <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
                    <li><Link to="/transparency" className="hover:text-white transition-colors">Renovation Standards</Link></li>
                    <li><Link to="/employment" className="hover:text-white transition-colors flex items-center gap-2">Careers <span className="text-xs bg-p4c-gold text-p4c-navy px-1.5 rounded font-bold">Hiring</span></Link></li>
                    <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                    <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                </ul>
            </div>

            {/* 4. Contact & Legal */}
            <div>
                <h4 className="font-serif font-bold text-lg mb-4 text-p4c-gold">Get in Touch</h4>
                <ul className="space-y-2 text-sm text-gray-400 mb-6">
                    <li>123 Veteran Way, Tyler, TX 75701</li>
                    <li>(903) 555-0123</li>
                    <li>support@p4c-homes.com</li>
                </ul>
                <h5 className="font-bold text-sm text-white mb-2">Legal</h5>
                <ul className="space-y-2 text-sm text-gray-400">
                    <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                    <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                    <li><Link to="/equal-housing" className="hover:text-white transition-colors">Equal Housing</Link></li>
                    <li><Link to="/accessibility" className="hover:text-white transition-colors">Accessibility</Link></li>
                </ul>
            </div>
        </div>

        {/* Badges Bar */}
        <div className="border-t border-gray-800 pt-8 pb-8">
            <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Flag className="text-p4c-gold w-4 h-4" /> Veteran Owned Business
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Home className="text-p4c-gold w-4 h-4" /> Equal Housing Opportunity
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Accessibility className="text-p4c-gold w-4 h-4" /> ADA Compliant
                </div>
            </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-600 text-xs">
            <p>&copy; {new Date().getFullYear()} Properties 4 Creation, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

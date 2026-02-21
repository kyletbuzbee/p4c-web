import React from 'react';
import {
  Accessibility,
  Home,
  Flag,
  Facebook,
  Instagram,
  Linkedin,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants/images';

const Footer: React.FC = () => (
  <footer className="border-t border-gray-800 bg-gray-900 pb-8 pt-10 text-white sm:pt-16">
    <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
      <div className="mb-8 grid grid-cols-1 gap-8 sm:mb-12 md:grid-cols-2 lg:grid-cols-4">
        {/* 1. Brand & Mission - BUSINESS FOCUSED */}
        <div className="col-span-1">
          <div className="mb-4 flex items-center gap-2">
            <img
              src={IMAGES.LOGO.WHITE_GOLD}
              alt="Properties 4 Creation Real Estate Logo"
              className="h-16 w-auto object-contain sm:h-20 md:h-24 lg:h-32"
              width={200}
              height={80}
            />
          </div>
          <p className="mb-6 text-sm leading-relaxed text-gray-400">
            Properties 4 Creation is an investment and management firm dedicated
            to the revitalization of <strong>East Texas</strong>. We transform
            distressed assets into premium affordable housing for the East Texas
            community.
          </p>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-p4c-gold"
              aria-label="Visit our Facebook page"
            >
              <Facebook className="size-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-p4c-gold"
              aria-label="Visit our Instagram page"
            >
              <Instagram className="size-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-p4c-gold"
              aria-label="Visit our LinkedIn profile"
            >
              <Linkedin className="size-5" />
            </a>
          </div>
        </div>

        {/* 2. Find a Home (Prospective Residents) */}
        <div>
          <h2 className="mb-4 font-serif text-lg font-bold text-p4c-gold">
            Find a Home
          </h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link
                to="/properties"
                className="transition-colors hover:text-white"
              >
                Available Properties
              </Link>
            </li>
            <li>
              <Link
                to="/veterans"
                className="transition-colors hover:text-white"
              >
                Veteran Housing Program
              </Link>
            </li>
            <li>
              <Link
                to="/family-resources"
                className="transition-colors hover:text-white"
              >
                Family Resources
              </Link>
            </li>
            <li>
              <Link to="/apply" className="transition-colors hover:text-white">
                Apply for Housing
              </Link>
            </li>
          </ul>
        </div>

        {/* 3. Company (About Us) */}
        <div>
          <h2 className="mb-4 font-serif text-lg font-bold text-p4c-gold">
            Company
          </h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link to="/about" className="transition-colors hover:text-white">
                Our Story
              </Link>
            </li>
            <li>
              <Link
                to="/community"
                className="transition-colors hover:text-white"
              >
                Community Impact
              </Link>
            </li>
            <li>
              <Link
                to="/transparency"
                className="transition-colors hover:text-white"
              >
                Quality Standards
              </Link>
            </li>
            <li>
              <Link
                to="/reviews"
                className="transition-colors hover:text-white"
              >
                Resident Stories
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                Careers
                <span className="rounded bg-p4c-gold px-1.5 text-xs font-bold text-p4c-navy">
                  Hiring
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* 4. Residents & Legal */}
        <div>
          <h2 className="mb-4 font-serif text-lg font-bold text-p4c-gold">
            Residents
          </h2>
          <ul className="mb-6 space-y-2 text-sm text-gray-400">
            <li>
              <Link to="/portal" className="transition-colors hover:text-white">
                Resident Portal
              </Link>
            </li>
            <li>
              <Link
                to="/resident-services"
                className="transition-colors hover:text-white"
              >
                Resident Services
              </Link>
            </li>
            <li>
              <Link
                to="/veteran-services"
                className="transition-colors hover:text-white"
              >
                Veteran Services
              </Link>
            </li>
            <li>
              <Link to="/faq" className="transition-colors hover:text-white">
                FAQ
              </Link>
            </li>
          </ul>
          <h5 className="mb-2 text-sm font-bold text-white">Legal</h5>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link
                to="/privacy"
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="transition-colors hover:text-white">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                to="/equal-housing"
                className="transition-colors hover:text-white"
              >
                Equal Housing
              </Link>
            </li>
            <li>
              <Link
                to="/accessibility"
                className="transition-colors hover:text-white"
              >
                Accessibility
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Badges Bar */}
      <div className="border-t border-gray-800 py-6 sm:py-8">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
          <div className="flex items-center gap-1.5 text-xs text-gray-700 sm:gap-2 sm:text-sm">
            <Flag className="size-3.5 sm:size-4 text-p4c-gold" /> <span className="hidden sm:inline">Veteran Owned & Operated</span><span className="sm:hidden">Veteran Owned</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-700 sm:gap-2 sm:text-sm">
            <Home className="size-3.5 sm:size-4 text-p4c-gold" /> <span className="hidden sm:inline">Equal Housing Opportunity</span><span className="sm:hidden">Equal Housing</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-700 sm:gap-2 sm:text-sm">
            <Accessibility className="size-3.5 sm:size-4 text-p4c-gold" /> <span className="hidden sm:inline">ADA Compliant</span><span className="sm:hidden">ADA</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-600">
        <p>
          &copy; {new Date().getFullYear()} Properties 4 Creation, LLC. All
          rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

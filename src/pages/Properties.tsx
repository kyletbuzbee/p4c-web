import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Search,
  Filter,
  Home,
  CheckCircle,
  MapPin,
  SlidersHorizontal,
} from 'lucide-react';

// Components & Data
import PropertyCard from '../components/PropertyCard';
import { properties as initialProperties } from '../data/properties';
import type { ExtendedProperty } from '../types/types';

// FIX: Extended Interface to avoid 'any' casting errors
interface MissionProperty extends ExtendedProperty {
  isSection8Eligible?: boolean;
  isVeteranPreferred?: boolean;
}

const Properties: React.FC = () => {
  // --- STATE MANAGEMENT ---
  const [loading, setLoading] = useState(true);
  const [filteredProperties, setFilteredProperties] = useState<
    MissionProperty[]
  >([]);

  // Search & Text Filters
  const [searchTerm, setSearchTerm] = useState('');

  // Standard Filters
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedBedrooms, setSelectedBedrooms] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');

  // Mission Filters
  const [filterSection8, setFilterSection8] = useState(false);
  const [filterVeteran, setFilterVeteran] = useState(false);

  // Extract unique locations for the dropdown
  const locations = [...new Set(initialProperties.map((p) => p.city))];

  // Simulate "Network Request"
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setFilteredProperties(initialProperties);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  // --- FILTERING ENGINE ---
  useEffect(() => {
    const filtered = initialProperties.filter((p) => {
      // Cast to MissionProperty for safer access
      const property = p as MissionProperty;

      // 1. Search Logic
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch =
        property.title.toLowerCase().includes(searchLower) ||
        property.city.toLowerCase().includes(searchLower) ||
        property.address.toLowerCase().includes(searchLower) ||
        (property.neighborhood?.toLowerCase() || '').includes(searchLower) ||
        property.amenities.some((a) => a.toLowerCase().includes(searchLower));

      // 2. Dropdown Logic
      const matchesLocation =
        selectedLocation === 'all' || property.city === selectedLocation;

      // FIX: Handle undefined bedrooms safely with ( || 0)
      const bedCount = property.bedrooms || property.beds || 0;
      const matchesBedrooms =
        selectedBedrooms === 'all' ||
        (selectedBedrooms === '1+' && bedCount >= 1) ||
        (selectedBedrooms === '2+' && bedCount >= 2) ||
        (selectedBedrooms === '3+' && bedCount >= 3);

      // Parse price safely
      const numericPrice =
        typeof property.price === 'string'
          ? parseFloat(property.price.replace(/[^0-9.]/g, ''))
          : property.price;

      const matchesPrice =
        selectedPrice === 'all' ||
        (selectedPrice === '0-500' && numericPrice <= 500) ||
        (selectedPrice === '500-1000' &&
          numericPrice > 500 &&
          numericPrice <= 1000) ||
        (selectedPrice === '1000+' && numericPrice > 1000);

      // 3. Mission Logic (Smart Detection)
      // FIX: Use safer property access instead of 'any'
      const isEligible =
        property.isSection8Eligible ||
        property.description.toLowerCase().includes('section 8') ||
        numericPrice < 1100;

      const matchesSection8 = filterSection8 ? isEligible : true;
      const matchesVeteran = filterVeteran ? property.isVeteranPreferred : true;

      return (
        matchesSearch &&
        matchesLocation &&
        matchesBedrooms &&
        matchesPrice &&
        matchesSection8 &&
        matchesVeteran
      );
    });

    setFilteredProperties(filtered);
  }, [
    searchTerm,
    selectedLocation,
    selectedBedrooms,
    selectedPrice,
    filterSection8,
    filterVeteran,
  ]);

  return (
    <div className="min-h-screen bg-p4c-beige pb-20">
      <Helmet>
        <title>Find Your Home | Properties 4 Creation</title>
        <meta
          name="description"
          content="Search affordable, Section 8 eligible housing in East Texas. Veteran-owned and community-focused."
        />
      </Helmet>

      {/* --- HERO SECTION --- */}
      <div className="relative h-[500px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="/images/videos/hero-properties-banner.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-p4c-navy/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif">
            More Than a House. <br className="hidden sm:block" />
            {/* FIX: Escaped apostrophe */}
            <span className="text-p4c-beige">It&apos;s Your Sanctuary.</span>
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto mb-8 font-sans">
            Quality affordable housing for families, veterans, and the
            community. We prioritize people over profit.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        {/* --- CONTROL PANEL --- */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12 border border-slate-100 relative z-10">
          {/* Top Row: Search & Mission Toggles */}
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-6 border-b border-slate-100 pb-6">
            <div className="relative w-full lg:w-1/2">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              {/* FIX: Added id to input for accessibility */}
              <label htmlFor="search-input" className="sr-only">
                Search properties
              </label>
              <input
                id="search-input"
                type="text"
                placeholder="Search by city, address, or amenity..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-200 focus:border-p4c-gold focus:ring-2 focus:ring-p4c-gold/20 outline-none transition-all"
              />
            </div>

            <div className="flex flex-wrap gap-3 w-full lg:w-auto justify-end">
              <button
                onClick={() => setFilterSection8(!filterSection8)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all border ${
                  filterSection8
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {filterSection8 ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <Filter className="w-4 h-4" />
                )}
                Section 8 Eligible
              </button>

              <button
                onClick={() => setFilterVeteran(!filterVeteran)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all border ${
                  filterVeteran
                    ? 'bg-p4c-gold text-p4c-navy border-p4c-gold shadow-md'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {filterVeteran ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <Filter className="w-4 h-4" />
                )}
                Veteran Preferred
              </button>
            </div>
          </div>

          {/* Bottom Row: Detailed Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Location */}
            <div>
              {/* FIX: Removed conflicting 'flex'/'block' class, added htmlFor */}
              <label
                htmlFor="location-filter"
                className="text-xs font-bold text-slate-500 uppercase mb-1 flex items-center gap-1"
              >
                <MapPin className="w-3 h-3" /> Location
              </label>
              <select
                id="location-filter"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-p4c-navy focus:ring-2 focus:ring-p4c-gold outline-none cursor-pointer"
              >
                <option value="all">All Locations</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Bedrooms */}
            <div>
              {/* FIX: Added htmlFor */}
              <label
                htmlFor="bedrooms-filter"
                className="block text-xs font-bold text-slate-500 uppercase mb-1"
              >
                Bedrooms
              </label>
              <select
                id="bedrooms-filter"
                value={selectedBedrooms}
                onChange={(e) => setSelectedBedrooms(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-p4c-navy focus:ring-2 focus:ring-p4c-gold outline-none cursor-pointer"
              >
                <option value="all">Any Size</option>
                <option value="1+">1+ Bedrooms</option>
                <option value="2+">2+ Bedrooms</option>
                <option value="3+">3+ Bedrooms</option>
              </select>
            </div>

            {/* Price */}
            <div>
              {/* FIX: Added htmlFor */}
              <label
                htmlFor="price-filter"
                className="block text-xs font-bold text-slate-500 uppercase mb-1"
              >
                Price / Month
              </label>
              <select
                id="price-filter"
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-p4c-navy focus:ring-2 focus:ring-p4c-gold outline-none cursor-pointer"
              >
                <option value="all">Any Price</option>
                <option value="0-500">Under $500</option>
                <option value="500-1000">$500 - $1,000</option>
                <option value="1000+">$1,000+</option>
              </select>
            </div>

            {/* Reset */}
            <div className="flex items-end">
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedLocation('all');
                  setSelectedBedrooms('all');
                  setSelectedPrice('all');
                  setFilterSection8(false);
                  setFilterVeteran(false);
                }}
                className="w-full py-2.5 bg-slate-100 text-slate-600 font-bold rounded-lg text-sm hover:bg-slate-200 hover:text-p4c-navy transition-colors flex items-center justify-center gap-2"
              >
                <SlidersHorizontal className="w-4 h-4" /> Reset Filters
              </button>
            </div>
          </div>
        </div>

        {/* --- RESULTS HEADER --- */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 px-2">
          <h2 className="text-2xl font-serif font-bold text-p4c-navy">
            {filteredProperties.length}{' '}
            <span className="text-slate-500 font-sans text-lg font-normal">
              Homes Available
            </span>
          </h2>
        </div>

        {/* --- PROPERTIES GRID --- */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl h-[450px] overflow-hidden shadow-sm animate-pulse"
              >
                <div className="w-full h-64 bg-slate-200" />
                <div className="p-6 space-y-4">
                  <div className="w-2/3 h-6 bg-slate-200 rounded" />
                  <div className="w-1/2 h-4 bg-slate-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          // --- EMPTY STATE ---
          <div className="text-center py-24 bg-white rounded-2xl border-2 border-dashed border-slate-200">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-50 rounded-full mb-6">
              <Home className="w-10 h-10 text-slate-400" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-p4c-navy mb-3">
              No homes match your search.
            </h3>
            <p className="text-slate-500 max-w-md mx-auto mb-8 leading-relaxed">
              Our inventory updates weekly. We prioritize Section 8 families on
              our waitlist.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilterSection8(false);
                }}
                className="text-p4c-navy font-bold hover:underline"
              >
                Clear Filters
              </button>
              <span className="text-slate-300">|</span>
              <a
                href="/contact"
                className="text-p4c-gold font-bold hover:underline"
              >
                Join Priority Waitlist &rarr;
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;

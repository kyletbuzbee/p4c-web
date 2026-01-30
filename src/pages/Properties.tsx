import React, { useState, useEffect } from 'react';
import { IMAGES } from '../constants/images';
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
      <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
        <div className="absolute left-0 top-0 z-0 size-full">
          <img
            src={IMAGES.BANNERS.HERO_PROPERTIES}
            alt="Properties in East Texas"
            className="size-full object-cover"
          />
          <div className="bg-p4c-navy/60 absolute left-0 top-0 size-full" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-6 font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            More Than a House. <br className="hidden sm:block" />
            {/* FIX: Escaped apostrophe */}
            <span className="text-p4c-beige">It&apos;s Your Sanctuary.</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl font-sans text-xl text-white">
            Quality affordable housing for families, veterans, and the
            community. We prioritize people over profit.
          </p>
        </div>
      </div>

      <div className="mx-auto -mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* --- CONTROL PANEL --- */}
        <div className="relative z-10 mb-12 rounded-xl border border-slate-100 bg-white p-6 shadow-lg">
          {/* Top Row: Search & Mission Toggles */}
          <div className="mb-6 flex flex-col items-center justify-between gap-6 border-b border-slate-100 pb-6 lg:flex-row">
            <div className="relative w-full lg:w-1/2">
              <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
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
                className="focus:ring-p4c-gold/20 w-full rounded-lg border border-slate-200 py-3 pl-12 pr-4 outline-none transition-all focus:border-p4c-gold focus:ring-2"
              />
            </div>

            <div className="flex w-full flex-wrap justify-end gap-3 lg:w-auto">
              <button
                onClick={() => setFilterSection8(!filterSection8)}
                className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-bold transition-all ${
                  filterSection8
                    ? 'border-emerald-600 bg-emerald-600 text-white shadow-md'
                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                {filterSection8 ? (
                  <CheckCircle className="size-4" />
                ) : (
                  <Filter className="size-4" />
                )}
                Section 8 Eligible
              </button>

              <button
                onClick={() => setFilterVeteran(!filterVeteran)}
                className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-bold transition-all ${
                  filterVeteran
                    ? 'border-p4c-gold bg-p4c-gold text-p4c-navy shadow-md'
                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                {filterVeteran ? (
                  <CheckCircle className="size-4" />
                ) : (
                  <Filter className="size-4" />
                )}
                Veteran Preferred
              </button>
            </div>
          </div>

          {/* Bottom Row: Detailed Dropdowns */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Location */}
            <div>
              {/* FIX: Removed conflicting 'flex'/'block' class, added htmlFor */}
              <label
                htmlFor="location-filter"
                className="mb-1 flex items-center gap-1 text-xs font-bold uppercase text-slate-500"
              >
                <MapPin className="size-3" /> Location
              </label>
              <select
                id="location-filter"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full cursor-pointer rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-sm text-p4c-navy outline-none focus:ring-2 focus:ring-p4c-gold"
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
                className="mb-1 block text-xs font-bold uppercase text-slate-500"
              >
                Bedrooms
              </label>
              <select
                id="bedrooms-filter"
                value={selectedBedrooms}
                onChange={(e) => setSelectedBedrooms(e.target.value)}
                className="w-full cursor-pointer rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-sm text-p4c-navy outline-none focus:ring-2 focus:ring-p4c-gold"
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
                className="mb-1 block text-xs font-bold uppercase text-slate-500"
              >
                Price / Month
              </label>
              <select
                id="price-filter"
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="w-full cursor-pointer rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-sm text-p4c-navy outline-none focus:ring-2 focus:ring-p4c-gold"
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
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-100 py-2.5 text-sm font-bold text-slate-600 transition-colors hover:bg-slate-200 hover:text-p4c-navy"
              >
                <SlidersHorizontal className="size-4" /> Reset Filters
              </button>
            </div>
          </div>
        </div>

        {/* --- RESULTS HEADER --- */}
        <div className="mb-6 flex flex-col items-center justify-between px-2 sm:flex-row">
          <h2 className="font-serif text-2xl font-bold text-p4c-navy">
            {filteredProperties.length}{' '}
            <span className="font-sans text-lg font-normal text-slate-500">
              Homes Available
            </span>
          </h2>
        </div>

        {/* --- PROPERTIES GRID --- */}
        {loading ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-[450px] animate-pulse overflow-hidden rounded-xl bg-white shadow-sm"
              >
                <div className="h-64 w-full bg-slate-200" />
                <div className="space-y-4 p-6">
                  <div className="h-6 w-2/3 rounded bg-slate-200" />
                  <div className="h-4 w-1/2 rounded bg-slate-200" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          // --- EMPTY STATE ---
          <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-white py-24 text-center">
            <div className="mb-6 inline-flex size-20 items-center justify-center rounded-full bg-slate-50">
              <Home className="size-10 text-slate-400" />
            </div>
            <h3 className="mb-3 font-serif text-2xl font-bold text-p4c-navy">
              No homes match your search.
            </h3>
            <p className="mx-auto mb-8 max-w-md leading-relaxed text-slate-500">
              Our inventory updates weekly. We prioritize Section 8 families on
              our waitlist.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilterSection8(false);
                }}
                className="font-bold text-p4c-navy hover:underline"
              >
                Clear Filters
              </button>
              <span className="text-slate-300">|</span>
              <a
                href="/contact"
                className="font-bold text-p4c-gold hover:underline"
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

import React, { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ImpactDashboard from '../components/ImpactDashboard';
import PropertyCard from '../components/PropertyCard';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { api } from '../services/api';
import { logError } from '../services/errorBoundaryService';
import type { ExtendedProperty } from '../types';
import { IMAGES } from '../constants/images';
import {
  Search,
  SlidersHorizontal,
  X,
  ArrowRight,
  HeartHandshake,
  Briefcase,
  Building2,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  // States
  const [properties, setProperties] = useState<ExtendedProperty[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState<number>(2000);
  const [minBeds, setMinBeds] = useState<number>(0);
  const [selectedBadges, setSelectedBadges] = useState<string[]>([]);

  // Fetch properties on component mount
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const propertiesData = await api.properties.getAll();
        setProperties(propertiesData);
      } catch (error) {
        logError('Failed to fetch properties', {
          error: error instanceof Error ? error : new Error(String(error)),
          component: 'Home',
          severity: 'high',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Extract unique badges from all properties for the filter list
  const allBadges = useMemo(() => {
    const badges = new Set<string>();
    properties.forEach((p) => p.badges.forEach((b) => badges.add(b)));
    return Array.from(badges);
  }, [properties]);

  // Filtering Logic
  const filteredProperties = useMemo(
    () =>
      properties.filter((property) => {
        // Text Search (Title, Address, Description)
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          property.title.toLowerCase().includes(query) ||
          property.address.toLowerCase().includes(query) ||
          property.description.toLowerCase().includes(query);

        // Price Filter
        const matchesPrice =
          typeof property.price === 'number'
            ? property.price <= maxPrice
            : parseFloat(property.price.replace(/[^0-9.]/g, '')) <= maxPrice;

        // Bed Filter
        const matchesBeds = property.beds >= minBeds;

        // Badge Filter (Must have ALL selected badges)
        const matchesBadges = selectedBadges.every((badge) =>
          property.badges.includes(badge)
        );

        return matchesSearch && matchesPrice && matchesBeds && matchesBadges;
      }),
    [properties, searchQuery, maxPrice, minBeds, selectedBadges]
  );

  const toggleBadge = (badge: string) => {
    setSelectedBadges((prev) =>
      prev.includes(badge) ? prev.filter((b) => b !== badge) : [...prev, badge]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setMaxPrice(2000);
    setMinBeds(0);
    setSelectedBadges([]);
  };

  return (
    <>
      <Helmet>
        <title>
          Properties 4 Creation | Premium Affordable Housing & Investments
        </title>
        <meta
          name="description"
          content="Properties 4 Creation acquires and revitalizes real estate in East Texas, offering premium affordable housing to families and veterans in Tyler, Longview, and Marshall."
        />
      </Helmet>

      {/* Hero Video - Visual Hook */}
      <Hero variant="video" />

      {/* Impact Metrics - Business Proof */}
      <ImpactDashboard />

      {/* Featured Listings - The Product */}
      <section
        id="homes"
        className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-p4c-navy mb-2">
              Available East Texas Residences
            </h2>
            <p className="text-gray-600 max-w-xl">
              Browse our portfolio of fully renovated, professionally managed
              homes in
              <strong> Tyler, Longview, and Marshall</strong>. We accept Section
              8 and private applicants.
            </p>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by city (e.g. Tyler), zip, or feature..."
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-p4c-gold focus:border-p4c-gold transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search properties"
              />
            </div>

            {/* Price Dropdown */}
            <div className="md:col-span-3">
              <label
                htmlFor="maxPrice"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Max Price
              </label>
              <select
                id="maxPrice"
                className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-p4c-gold focus:border-p4c-gold bg-white cursor-pointer"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              >
                <option value={2000}>Max Price: Any</option>
                <option value={800}>$800 / mo</option>
                <option value={1000}>$1,000 / mo</option>
                <option value={1200}>$1,200 / mo</option>
                <option value={1500}>$1,500 / mo</option>
              </select>
            </div>

            {/* Beds Dropdown */}
            <div className="md:col-span-3">
              <label
                htmlFor="minBeds"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Min Bedrooms
              </label>
              <select
                id="minBeds"
                className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-p4c-gold focus:border-p4c-gold bg-white cursor-pointer"
                value={minBeds}
                onChange={(e) => setMinBeds(Number(e.target.value))}
              >
                <option value={0}>Bedrooms: Any</option>
                <option value={1}>1+ Bed</option>
                <option value={2}>2+ Beds</option>
                <option value={3}>3+ Beds</option>
                <option value={4}>4+ Beds</option>
              </select>
            </div>

            {/* Clear Button */}
            <div className="md:col-span-1 flex justify-center">
              <button
                onClick={clearFilters}
                className="text-gray-400 hover:text-red-500 transition-colors p-2.5 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-200"
                title="Clear Filters"
                aria-label="Clear all filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Badges / Amenities Filter */}
          <div className="mt-6 pt-5 border-t border-gray-100">
            <div className="flex items-center gap-2.5 mb-4 text-sm font-bold text-gray-500 uppercase tracking-wide">
              <SlidersHorizontal className="w-4 h-4" /> Filter by Features:
            </div>
            <div className="flex flex-wrap gap-2.5 mb-4">
              {allBadges.map((badge) => (
                <button
                  key={badge}
                  onClick={() => toggleBadge(badge)}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 border-2 ${
                    selectedBadges.includes(badge)
                      ? 'bg-p4c-navy text-white border-p4c-navy shadow-md'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-p4c-gold hover:text-p4c-navy'
                  }`}
                  aria-pressed={selectedBadges.includes(badge)}
                >
                  {badge}
                </button>
              ))}
            </div>

            {/* Family-Friendly Filters */}
            <div className="border-t border-gray-100 pt-4">
              <div className="flex items-center gap-2.5 mb-3 text-sm font-bold text-gray-500 uppercase tracking-wide">
                <HeartHandshake className="w-4 h-4" /> Lifestyle Amenities:
              </div>
              <div className="flex flex-wrap gap-2.5">
                {[
                  'Near Tyler ISD',
                  'Fenced Yard',
                  'Newly Renovated',
                  'Quiet Neighborhood',
                  'Near Parks',
                ].map((feature) => (
                  <button
                    key={feature}
                    onClick={() => toggleBadge(feature)}
                    className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 border-2 ${
                      selectedBadges.includes(feature)
                        ? 'bg-p4c-gold text-p4c-navy border-p4c-gold shadow-md'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-p4c-gold hover:text-p4c-navy'
                    }`}
                    aria-pressed={selectedBadges.includes(feature)}
                  >
                    {feature}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
              >
                <div className="h-64 bg-gray-200 animate-pulse" />
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded animate-pulse mb-2" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-4" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-6" />
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-12 bg-gray-200 rounded animate-pulse" />
                    <div className="h-12 bg-gray-200 rounded animate-pulse" />
                    <div className="h-12 bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((prop) => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300">
            <div className="inline-flex justify-center items-center bg-white p-4 rounded-full mb-4 shadow-sm">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-p4c-navy mb-2">
              No properties found matching your criteria
            </h3>
            <p className="text-gray-500 mb-6">
              Our inventory in Tyler and Longview changes weekly.
            </p>
            <button
              onClick={clearFilters}
              className="text-p4c-gold font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>

      {/* The Business Pillars (3-Column Section) */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-20"
        aria-label="Our Core Services"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Card 1: Family/Community (50%) */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-p4c-navy hover:shadow-2xl transition-shadow">
            <div className="bg-p4c-beige w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-p4c-navy">
              <Building2 className="w-8 h-8" aria-hidden="true" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-p4c-navy mb-4">
              Premium Family Living
            </h3>
            <p className="font-sans text-slate-600 leading-relaxed mb-4">
              We deliver the "Gold Standard" in affordable housing. Located in
              top-rated school districts in <strong>Tyler and Longview</strong>,
              our homes feature modern renovations that provide families with
              dignity and stability.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-p4c-navy text-white px-3 py-1 rounded-full text-sm font-bold">
                Tyler ISD
              </span>
              <span className="bg-p4c-navy text-white px-3 py-1 rounded-full text-sm font-bold">
                Section 8 Accepted
              </span>
              <span className="bg-p4c-navy text-white px-3 py-1 rounded-full text-sm font-bold">
                Pet Friendly
              </span>
            </div>
            <a
              href="/family-resources"
              className="inline-flex items-center gap-2 text-p4c-navy font-bold hover:text-p4c-gold"
            >
              View Family Standards <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2: Veteran (30% - Reduced from Main Focus) */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-p4c-gold hover:shadow-2xl transition-shadow">
            <div className="bg-p4c-navy w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-p4c-gold">
              <HeartHandshake className="w-8 h-8" aria-hidden="true" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-p4c-navy mb-4">
              Veteran Housing Partners
            </h3>
            <p className="font-sans text-slate-600 leading-relaxed">
              As a veteran-owned business, we understand the logistics of
              relocation. We work directly with HUD-VASH case managers to
              provide rapid, bureaucracy-free housing solutions for service
              members.
            </p>
          </div>

          {/* Card 3: Investor/Seller (20%) */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-slate-500 hover:shadow-2xl transition-shadow">
            <div className="bg-slate-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-slate-700">
              <Briefcase className="w-8 h-8" aria-hidden="true" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-p4c-navy mb-4">
              Direct Asset Acquisition
            </h3>
            <p className="font-sans text-slate-600 leading-relaxed">
              Selling a distressed property? We offer competitive cash buyouts
              for homes in East Texas. We handle the repairs and closing costs,
              providing liquid capital to sellers on their timeline.
            </p>
            <div className="mt-6">
              <button
                onClick={() => navigate('/homeowner-solutions')}
                className="text-p4c-gold font-bold hover:text-p4c-navy inline-flex items-center gap-1"
              >
                Get a Cash Offer <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Prominent Sellers Section - Business focused */}
      <section className="py-20 bg-gradient-to-br from-p4c-navy to-p4c-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-p4c-gold text-p4c-navy px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                East Texas Acquisitions
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Sell Your House for Market Value
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                We are actively acquiring properties in{' '}
                <strong>Smith, Gregg, and Harrison counties</strong>. Skip the
                realtor fees and open houses. We provide fair market assessments
                and immediate liquidity.
              </p>

              {/* Quick Calculator */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">
                  Instant Valuation Estimate
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <label
                      className="block text-gray-300 mb-1"
                      htmlFor="bedrooms-select"
                    >
                      Bedrooms
                    </label>
                    <select
                      id="bedrooms-select"
                      className="w-full bg-white/20 border border-white/30 rounded px-3 py-2 text-white focus:ring-2 focus:ring-p4c-gold focus:border-p4c-gold"
                    >
                      <option value="2" className="text-p4c-navy bg-white">
                        2
                      </option>
                      <option value="3" className="text-p4c-navy bg-white">
                        3
                      </option>
                      <option value="4" className="text-p4c-navy bg-white">
                        4
                      </option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-gray-300 mb-1"
                      htmlFor="bathrooms-select"
                    >
                      Bathrooms
                    </label>
                    <select
                      id="bathrooms-select"
                      className="w-full bg-white/20 border border-white/30 rounded px-3 py-2 text-white focus:ring-2 focus:ring-p4c-gold focus:border-p4c-gold"
                    >
                      <option value="1" className="text-p4c-navy bg-white">
                        1
                      </option>
                      <option value="2" className="text-p4c-navy bg-white">
                        2
                      </option>
                      <option value="3" className="text-p4c-navy bg-white">
                        3
                      </option>
                    </select>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-p4c-gold text-p4c-navy rounded-lg text-center">
                  <div className="text-2xl font-bold">
                    Estimated Offer: $185,000
                  </div>
                  <div className="text-sm opacity-80">
                    Based on Tyler Market Data
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/homeowner-solutions')}
                  className="bg-p4c-gold text-p4c-navy hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Start My Sale <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href="tel:(903) 555-0123"
                  className="border-2 border-white text-white hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Call Acquisitions
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <h3 className="text-xl font-bold text-p4c-navy mb-4">
                  Why Sell to Us?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">
                      <strong>As-Is Condition:</strong> No repairs needed
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">
                      <strong>Speed:</strong> Closing in as little as 14 days
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">
                      <strong>Savings:</strong> No 6% realtor commission
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tenant Testimonials - Focus on Product Quality */}
      <section className="py-20 bg-p4c-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-p4c-navy mb-4">
              Tenant Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our residents enjoy high-quality management and premium amenities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-p4c-gold">
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="text-gray-700 italic mb-4 leading-relaxed">
                "The renovation quality is incredible. New floors, granite
                countertops—it feels like a brand new home. The management team
                is extremely professional."
              </blockquote>
              <div className="border-t border-gray-100 pt-4">
                <div className="font-bold text-p4c-navy">Maria Rodriguez</div>
                <div className="text-sm text-gray-500">
                  Resident &mdash; Longview, TX
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-p4c-gold">
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="text-gray-700 italic mb-4 leading-relaxed">
                "I was surprised by how easy the application process was.
                Everything was digital, and we got approved in 48 hours. Great
                neighborhood for my kids."
              </blockquote>
              <div className="border-t border-gray-100 pt-4">
                <div className="font-bold text-p4c-navy">
                  David & Sarah Chen
                </div>
                <div className="text-sm text-gray-500">
                  Residents &mdash; Tyler, TX
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-p4c-gold">
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="text-gray-700 italic mb-4 leading-relaxed">
                "Finally, a landlord that fixes things immediately. The 24/7
                maintenance portal is a game changer. Worth every penny."
              </blockquote>
              <div className="border-t border-gray-100 pt-4">
                <div className="font-bold text-p4c-navy">James Williams</div>
                <div className="text-sm text-gray-500">
                  Resident &mdash; Lindale, TX
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/family-resources"
              className="inline-flex items-center gap-2 bg-p4c-gold text-p4c-navy hover:bg-p4c-navy hover:text-p4c-gold px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Browse Available Homes
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Impact Section - Renovation Standard */}
      <section className="py-20 bg-p4c-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={IMAGES.PROPERTIES.KEMP_TOWNHOME}
                alt="Renovated Townhome in Tyler"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-p4c-navy/30 mix-blend-multiply" />
            </div>
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-p4c-gold/20 px-4 py-2 rounded-full text-p4c-gold text-sm font-bold uppercase tracking-wider mb-4 border border-p4c-gold/30">
                Community Revitalization
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Transforming Neighborhoods One Block at a Time
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                We don't just flip houses; we stabilize communities. By
                investing heavy capital into distressed properties, we raise
                property values and attract long-term residents to East Texas.
              </p>
              <button
                onClick={() => navigate('/our-impact')}
                className="bg-p4c-gold text-p4c-navy hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                See Our Projects
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-p4c-navy mb-6">
                The Renovation Standard
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From distressed asset to premium residence. Watch our
                professional construction teams execute high-end finishes that
                ensure longevity and tenant satisfaction.
              </p>
              <a
                href="/transparency"
                className="inline-flex items-center gap-2 text-p4c-gold font-bold hover:underline"
              >
                View Construction Specs
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="w-full">
              <div className="mb-4 text-center text-sm text-gray-500 italic">
                Drag the slider to see the value add
              </div>
              <BeforeAfterSlider
                beforeImage={IMAGES.RENOVATION.LIVING_ROOM.BEFORE}
                afterImage={IMAGES.RENOVATION.LIVING_ROOM.AFTER}
                label="Living Room Capital Improvement"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Professional */}
      <section
        id="apply"
        className="py-24 bg-p4c-navy text-center px-4 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to upgrade your living standard?
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Our application process is streamlined, digital, and fast. Move into
            your new home in as little as 3 days.
          </p>
          <button
            onClick={() => navigate('/apply')}
            className="bg-p4c-gold text-p4c-navy hover:bg-white hover:text-p4c-navy px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Start Tenant Application
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;

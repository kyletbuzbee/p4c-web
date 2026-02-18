import React, { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import PropertyCard from '../components/PropertyCard';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { api } from '../services/api';
import { logError } from '../services/errorBoundaryService';
import type { ExtendedProperty } from '../types/types';
import { IMAGES } from '../constants/images';
import {
  Search,
  SlidersHorizontal,
  X,
  ArrowRight,
  Heart,
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
  const [arv, setArv] = useState<number>(0);
  const [repairs, setRepairs] = useState<number>(0);
  const offerPrice = arv * 0.7 - repairs;

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
          Properties 4 Creation | Community Revitalization & Quality Housing in
          East Texas
        </title>
        <meta
          name="description"
          content="Transforming East Texas neighborhoods through strategic revitalization. Quality family housing, investment opportunities, and community impact in Tyler and Longview."
        />
      </Helmet>

      {/* Hero Video - Visual Hook */}
      <Hero variant="video" />

      {/* Featured Listings - The Product */}
      <section
        id="homes"
        className="mx-auto max-w-7xl bg-white px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mb-8 flex flex-col items-end justify-between md:flex-row">
          <div>
            <h2 className="mb-2 font-serif text-3xl font-bold text-p4c-navy md:text-4xl">
              Available East Texas Residences
            </h2>
            <p className="max-w-xl text-gray-600">
              Browse our portfolio of fully renovated, professionally managed
              homes in
              <strong> East Texas</strong>. We accept Section 8 and private
              applicants.
            </p>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="mb-10 rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
          <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-12">
            {/* Search Input */}
            <div className="relative md:col-span-5">
              <Search className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by city (e.g. Tyler), zip, or feature..."
                className="w-full rounded-xl border border-gray-300 py-3.5 pl-11 pr-4 transition-all focus:border-p4c-gold focus:ring-2 focus:ring-p4c-gold"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search properties"
              />
            </div>

            {/* Price Dropdown */}
            <div className="md:col-span-3">
              <label
                htmlFor="maxPrice"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Max Price
              </label>
              <select
                id="maxPrice"
                className="w-full cursor-pointer rounded-xl border border-gray-300 bg-white px-4 py-3.5 focus:border-p4c-gold focus:ring-2 focus:ring-p4c-gold"
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
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Min Bedrooms
              </label>
              <select
                id="minBeds"
                className="w-full cursor-pointer rounded-xl border border-gray-300 bg-white px-4 py-3.5 focus:border-p4c-gold focus:ring-2 focus:ring-p4c-gold"
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
            <div className="flex justify-center md:col-span-1">
              <button
                onClick={clearFilters}
                className="rounded-full p-2.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-200"
                title="Clear Filters"
                aria-label="Clear all filters"
              >
                <X className="size-5" />
              </button>
            </div>
          </div>

          {/* Badges / Amenities Filter */}
          <div className="mt-6 border-t border-gray-100 pt-5">
            <div className="mb-4 flex items-center gap-2.5 text-sm font-bold uppercase tracking-wide text-gray-700">
              <SlidersHorizontal className="size-4" /> Filter by Features:
            </div>
            <div className="mb-4 flex flex-wrap gap-2.5">
              {allBadges.map((badge) => (
                <button
                  key={badge}
                  onClick={() => toggleBadge(badge)}
                  className={`rounded-full border-2 px-3.5 py-1.5 text-sm font-semibold transition-all duration-200 ${
                    selectedBadges.includes(badge)
                      ? 'border-p4c-navy bg-p4c-navy text-white shadow-md'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-p4c-gold hover:text-p4c-navy'
                  }`}
                  aria-pressed={selectedBadges.includes(badge)}
                >
                  {badge}
                </button>
              ))}
            </div>

            {/* Family-Friendly Filters */}
            <div className="border-t border-gray-100 pt-4">
              <div className="mb-3 flex items-center gap-2.5 text-sm font-bold uppercase tracking-wide text-gray-700">
                <HeartHandshake className="size-4" /> Lifestyle Amenities:
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
                    className={`rounded-full border-2 px-3.5 py-1.5 text-sm font-semibold transition-all duration-200 ${
                      selectedBadges.includes(feature)
                        ? 'border-p4c-gold bg-p4c-gold text-p4c-navy shadow-md'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-p4c-gold hover:text-p4c-navy'
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
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg"
              >
                <div className="h-64 animate-pulse bg-gray-200" />
                <div className="p-6">
                  <div className="mb-2 h-6 animate-pulse rounded bg-gray-200" />
                  <div className="mb-4 h-4 animate-pulse rounded bg-gray-200" />
                  <div className="mb-6 h-4 animate-pulse rounded bg-gray-200" />
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-12 animate-pulse rounded bg-gray-200" />
                    <div className="h-12 animate-pulse rounded bg-gray-200" />
                    <div className="h-12 animate-pulse rounded bg-gray-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((prop) => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 py-20 text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white p-4 shadow-sm">
              <Search className="size-8 text-gray-400" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-p4c-navy">
              No properties found matching your criteria
            </h3>
            <p className="mb-6 text-gray-700">
              Our inventory in Tyler and Longview changes weekly.
            </p>
            <button
              onClick={clearFilters}
              className="font-bold text-p4c-gold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>

      {/* Core Services Section */}
      <section
        className="relative z-20 mx-auto max-w-7xl bg-p4c-beige px-4 py-20 sm:px-6 lg:px-8"
        aria-label="Our Core Services"
      >
        <div className="mb-16 text-center">
          <div className="mb-6 inline-block rounded-full bg-p4c-navy px-6 py-3 text-sm font-bold uppercase tracking-wider text-white">
            Our Mission
          </div>
          <h2 className="mb-4 font-serif text-3xl font-bold text-p4c-navy md:text-4xl">
            Community-First Real Estate Solutions
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            From neighborhood revitalization to quality family housing and
            strategic investment opportunities, we transform East Texas
            communities through thoughtful real estate development.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-12">
          {/* Card 1: Community Revitalization (50% - PRIMARY) */}
          <div className="rounded-2xl border-t-4 border-p4c-gold bg-white p-8 shadow-xl transition-shadow hover:shadow-2xl md:col-span-2">
            <div className="mb-6 flex size-16 items-center justify-center rounded-xl bg-p4c-navy text-p4c-gold">
              <Heart className="size-9" aria-hidden="true" />
            </div>
            <h3 className="mb-4 font-serif text-2xl font-bold text-p4c-navy">
              Community Revitalization
            </h3>
            <p className="mb-6 font-sans text-base leading-relaxed text-slate-600">
              Our primary mission is transforming distressed neighborhoods into
              thriving communities. Through strategic acquisition, professional
              renovation, and long-term property management, we create economic
              impact at the block level across <strong>East Texas</strong>.
            </p>
            <div className="mb-6 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg bg-p4c-beige p-3">
                <div className="text-2xl font-bold text-p4c-navy">250+</div>
                <div className="text-gray-600">Homes Renovated</div>
              </div>
              <div className="rounded-lg bg-p4c-beige p-3">
                <div className="text-2xl font-bold text-p4c-navy">12</div>
                <div className="text-gray-600">Neighborhoods</div>
              </div>
            </div>
            <a
              href="/community"
              className="inline-flex items-center gap-2 font-bold text-p4c-navy hover:text-p4c-gold"
            >
              Our Community Impact <ArrowRight className="size-4" />
            </a>
          </div>

          {/* Card 2: Family Housing (30%) */}
          <div className="rounded-2xl border-t-4 border-p4c-navy bg-white p-8 shadow-xl transition-shadow hover:shadow-2xl">
            <div className="mb-6 flex size-14 items-center justify-center rounded-xl bg-p4c-beige text-p4c-navy">
              <Building2 className="size-8" aria-hidden="true" />
            </div>
            <h3 className="mb-4 font-serif text-2xl font-bold text-p4c-navy">
              Family Housing
            </h3>
            <p className="mb-4 font-sans leading-relaxed text-slate-600">
              Quality homes in revitalized neighborhoods. Located in top-rated
              school districts in <strong>Tyler and Longview</strong>, providing
              families with dignity, safety, and stability.
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-p4c-navy px-3 py-1 text-xs font-bold text-white">
                Tyler ISD
              </span>
              <span className="rounded-full bg-p4c-navy px-3 py-1 text-xs font-bold text-white">
                Section 8
              </span>
            </div>
            <a
              href="/properties"
              className="inline-flex items-center gap-2 font-bold text-p4c-navy hover:text-p4c-gold"
            >
              Browse Homes <ArrowRight className="size-4" />
            </a>
          </div>

          {/* Card 3: Investor Opportunities (15%) */}
          <div className="rounded-2xl border-t-4 border-slate-500 bg-white p-8 shadow-xl transition-shadow hover:shadow-2xl">
            <div className="mb-6 flex size-14 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
              <Briefcase className="size-8" aria-hidden="true" />
            </div>
            <h3 className="mb-4 font-serif text-2xl font-bold text-p4c-navy">
              Investment Opportunities
            </h3>
            <p className="mb-4 font-sans leading-relaxed text-slate-600">
              Strategic real estate investment with community impact. Portfolio
              growth, fair property acquisitions, and transparent ROI in growing
              East Texas markets.
            </p>
            <div className="mb-4 text-sm text-slate-600">
              <div className="mb-2">✓ As-Is Cash Offers</div>
              <div className="mb-2">✓ Fast Closing (14 days)</div>
              <div>✓ Portfolio Analytics</div>
            </div>
            <button
              onClick={() => navigate('/homeowner-solutions')}
              className="inline-flex items-center gap-1 font-bold text-p4c-gold hover:text-p4c-navy"
              aria-label="Explore investment opportunities"
            >
              Learn More <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        {/* Veterans Support Bar (5% - Reduced, Respectful) */}
        <div className="mt-12 rounded-xl border border-p4c-gold/30 bg-white p-6 shadow-md">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-lg bg-p4c-navy text-p4c-gold">
                <HeartHandshake className="size-6" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-bold text-p4c-navy">
                  Veteran Housing Support
                </h4>
                <p className="text-sm text-gray-600">
                  HUD-VASH partnership program for military families
                </p>
              </div>
            </div>
            <a
              href="/veterans"
              className="whitespace-nowrap rounded-lg bg-p4c-navy px-6 py-3 font-bold text-white transition-colors hover:bg-p4c-gold hover:text-p4c-navy"
            >
              Veteran Resources
            </a>
          </div>
        </div>
      </section>

      {/* Prominent Sellers Section - Business focused */}
      <section className="bg-gradient-to-br from-p4c-navy to-p4c-slate py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="text-white">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-p4c-gold px-4 py-2 text-sm font-bold uppercase tracking-wider text-p4c-navy">
                East Texas Acquisitions
              </div>
              <h2 className="mb-6 font-serif text-4xl font-bold md:text-5xl">
                Sell Your House for Market Value
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-300">
                We are actively acquiring properties in{' '}
                <strong>
                  Smith, Gregg, Harrison and all East Texas counties
                </strong>
                . Skip the realtor fees and open houses. We provide fair market
                assessments and immediate liquidity.
              </p>

              {/* Quick Calculator */}
              <div className="mb-8 rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                <h3 className="mb-4 text-xl font-bold text-white">
                  Instant Valuation Estimate
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <label
                      className="mb-1 block text-gray-300"
                      htmlFor="arv-input"
                    >
                      After Repair Value (ARV)
                    </label>
                    <input
                      id="arv-input"
                      type="number"
                      className="w-full rounded border border-white/30 bg-white/20 px-3 py-2 text-white focus:border-p4c-gold focus:ring-2 focus:ring-p4c-gold"
                      value={arv}
                      onChange={(e) => setArv(Number(e.target.value))}
                    />
                  </div>
                  <div>
                    <label
                      className="mb-1 block text-gray-300"
                      htmlFor="repairs-input"
                    >
                      Repair Costs
                    </label>
                    <input
                      id="repairs-input"
                      type="number"
                      className="w-full rounded border border-white/30 bg-white/20 px-3 py-2 text-white focus:border-p4c-gold focus:ring-2 focus:ring-p4c-gold"
                      value={repairs}
                      onChange={(e) => setRepairs(Number(e.target.value))}
                    />
                  </div>
                </div>
                <div className="mt-4 rounded-lg bg-p4c-gold p-4 text-center text-p4c-navy">
                  <div className="text-2xl font-bold">
                    Your Cash Offer: ${offerPrice.toLocaleString()}
                  </div>
                  <div className="text-sm opacity-80">
                    Based on Tyler Market Data
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={() => navigate('/homeowner-solutions')}
                  className="flex items-center justify-center gap-2 rounded-xl bg-p4c-gold px-8 py-4 text-lg font-bold text-p4c-navy shadow-lg transition-all duration-300 hover:bg-white hover:text-p4c-navy hover:shadow-xl"
                  aria-label="Start my property sale process"
                >
                  Start My Sale <ArrowRight className="size-5" />
                </button>
                <a
                  href="tel:(903) 555-0123"
                  className="flex items-center justify-center gap-2 rounded-xl border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-white hover:text-p4c-navy"
                >
                  Call Acquisitions
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl bg-white p-6 shadow-2xl">
                <h3 className="mb-4 text-xl font-bold text-p4c-navy">
                  Why Sell to Us?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex size-8 items-center justify-center rounded-full bg-green-100">
                      <span className="text-sm text-green-600">✓</span>
                    </div>
                    <span className="text-gray-700">
                      <strong>As-Is Condition:</strong> No repairs needed
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex size-8 items-center justify-center rounded-full bg-green-100">
                      <span className="text-sm text-green-600">✓</span>
                    </div>
                    <span className="text-gray-700">
                      <strong>Speed:</strong> Closing in as little as 14 days
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex size-8 items-center justify-center rounded-full bg-green-100">
                      <span className="text-sm text-green-600">✓</span>
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

      {/* Impact Section - Community Focus (PRIMARY) */}
      <section className="bg-p4c-slate py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 size-full object-cover opacity-60"
                src={IMAGES.VIDEOS.HERO_COMMUNITY_IMPACT}
                aria-label="Community impact transformation video"
              />
              <div className="absolute inset-0 bg-p4c-navy/10 mix-blend-multiply" />
            </div>
            <div className="text-white">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-p4c-gold/30 bg-p4c-gold/40 px-4 py-2 text-sm font-bold uppercase tracking-wider text-p4c-gold">
                Our Impact Story
              </div>
              <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl">
                Transforming Neighborhoods, Creating Economic Growth
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-300">
                Every property we renovate represents a strategic investment in
                East Texas communities. Our commitment to quality renovation and
                long-term management creates stable neighborhoods, increases
                property values, and strengthens local economies block by block.
              </p>
              <div className="mb-8 grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-p4c-gold">$15M+</div>
                  <div className="text-sm text-gray-300">
                    Neighborhood Investment
                  </div>
                </div>
                <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-p4c-gold">450+</div>
                  <div className="text-sm text-gray-300">Families Housed</div>
                </div>
              </div>
              <button
                onClick={() => navigate('/community')}
                className="flex items-center gap-2 rounded-xl bg-p4c-gold px-8 py-4 text-lg font-bold text-p4c-navy shadow-lg transition-all duration-300 hover:bg-white hover:text-p4c-navy hover:shadow-xl"
                aria-label="View our community impact data and transformation metrics"
              >
                See Our Community Impact
                <ArrowRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Showcase */}
      <section className="bg-p4c-beige py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-serif text-3xl font-bold text-p4c-navy md:text-4xl">
                The Renovation Standard
              </h2>
              <p className="mb-8 leading-relaxed text-gray-600">
                From distressed asset to premium residence. Watch our
                professional construction teams execute high-end finishes that
                ensure longevity and tenant satisfaction.
              </p>
              <a
                href="/construction-standards"
                className="inline-flex items-center gap-2 font-bold text-p4c-gold hover:underline"
              >
                View Construction Specs
                <ArrowRight className="size-4" />
              </a>
            </div>

            <div className="w-full">
              <div className="mb-4 text-center text-sm italic text-gray-700">
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
        className="relative overflow-hidden bg-p4c-navy px-4 py-24 text-center"
      >
        <div className="absolute left-0 top-0 size-full bg-[radial-gradient(#C5A059_1px,transparent_1px)] opacity-10 [background-size:16px_16px]" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="mb-6 font-serif text-3xl font-bold text-white md:text-5xl">
            Ready to upgrade your living standard?
          </h2>
          <p className="mb-10 text-lg text-gray-300">
            Our application process is streamlined, digital, and fast. Move into
            your new home in as little as 3 days.
          </p>
          <button
            onClick={() => navigate('/apply')}
            className="rounded-xl bg-p4c-gold px-10 py-5 text-xl font-bold text-p4c-navy shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-p4c-navy hover:shadow-2xl"
            aria-label="Start tenant application process"
          >
            Start Tenant Application
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;

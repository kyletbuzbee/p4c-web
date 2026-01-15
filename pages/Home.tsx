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
        const matchesPrice = property.price <= maxPrice;

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
        <title>Properties 4 Creation | Veteran Owned Affordable Housing</title>
        <meta
          name="description"
          content="Properties 4 Creation buys distressed properties, renovates them to premium standards, and rents them affordably to veterans and families in East Texas."
        />
      </Helmet>

      <Hero variant="video" />

      <ImpactDashboard />

      {/* Featured Listings */}
      <section
        id="homes"
        className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-p4c-navy mb-2">
              Find Your Home
            </h2>
            <p className="text-gray-600 max-w-xl">
              High-quality, affordable homes ready for move-in. We accept all
              housing vouchers.
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
                placeholder="Search by city, address, or keyword..."
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
                <HeartHandshake className="w-4 h-4" /> Family Features:
              </div>
              <div className="flex flex-wrap gap-2.5">
                {[
                  'Near Schools',
                  'Playground Access',
                  'Community Events',
                  'Family Amenities',
                  'Safe Neighborhood',
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
              No homes found matching your criteria
            </h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your filters or price range.
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

      {/* The Trinity Grid (3-Column Section) */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-20"
        aria-label="Our Core Services"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Card 1: For Families (50%) */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-p4c-navy hover:shadow-2xl transition-shadow">
            <div className="bg-p4c-beige w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-p4c-navy">
              <Search className="w-8 h-8" aria-hidden="true" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-p4c-navy mb-4">
              Family Homes in Top Schools
            </h3>
            <p className="font-sans text-slate-600 leading-relaxed mb-4">
              Every P4C home meets our Gold Standard for safety. Located in
              top-rated school districts with renovated interiors, we build
              environments where families thrive, not just survive.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-p4c-navy text-white px-3 py-1 rounded-full text-sm font-bold">
                Top Schools
              </span>
              <span className="bg-p4c-navy text-white px-3 py-1 rounded-full text-sm font-bold">
                Safe Neighborhoods
              </span>
              <span className="bg-p4c-navy text-white px-3 py-1 rounded-full text-sm font-bold">
                Family Amenities
              </span>
            </div>
            <a
              href="/family-resources"
              className="inline-flex items-center gap-2 text-p4c-navy font-bold hover:text-p4c-gold"
              aria-label="Explore family housing resources"
            >
              Family Resources <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2: For Veterans (30%) */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-p4c-gold hover:shadow-2xl transition-shadow">
            <div className="bg-p4c-navy w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-p4c-gold">
              <HeartHandshake className="w-8 h-8" aria-hidden="true" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-p4c-navy mb-4">
              Honoring Your Service
            </h3>
            <p className="font-sans text-slate-600 leading-relaxed">
              Have a property in disrepair? We buy homes &ldquo;As-Is&rdquo; to
              transform them into housing for local heroes. No fees, no repairs,
              and a closing date that works for you.
            </p>
          </div>

          {/* Card 3: For Sellers (20%) */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-slate-500 hover:shadow-2xl transition-shadow">
            <div className="bg-slate-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-slate-700">
              <ArrowRight className="w-8 h-8" aria-hidden="true" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-p4c-navy mb-4">
              Fair Offers, Zero Hassle
            </h3>
            <p className="font-sans text-slate-600 leading-relaxed">
              Have a property in disrepair? We buy homes &quot;As-Is&quot; to
              transform them into housing for local heroes. No fees, no repairs,
              and a closing date that works for you.
            </p>
            <div className="mt-6">
              <button
                onClick={() => navigate('/homeowner-solutions')}
                className="text-p4c-gold font-bold hover:text-p4c-navy inline-flex items-center gap-1"
                aria-label="Get a cash offer for your home"
              >
                Get a Cash Offer <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Prominent Sellers Section */}
      <section className="py-20 bg-gradient-to-br from-p4c-navy to-p4c-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-p4c-gold text-p4c-navy px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                We Buy Houses Fast
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Get a Fair Cash Offer Today
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                We buy homes in any condition with cash offers. No fees, no
                repairs needed, and a closing date that works for you. Get your
                offer in under 24 hours.
              </p>

              {/* Quick Calculator */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">
                  Quick Value Estimate
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
                      aria-label="Select number of bedrooms"
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
                      aria-label="Select number of bathrooms"
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
                  <div className="text-2xl font-bold">Estimated: $185,000</div>
                  <div className="text-sm opacity-80">
                    Based on Tyler market
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/homeowner-solutions')}
                  className="bg-p4c-gold text-p4c-navy hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Get My Cash Offer <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href="tel:(903) 555-0123"
                  className="border-2 border-white text-white hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Call (903) 555-0123
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <h3 className="text-xl font-bold text-p4c-navy mb-4">
                  Why Choose Us?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm"></span>
                    </div>
                    <span className="text-gray-700">
                      Any condition accepted
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm"></span>
                    </div>
                    <span className="text-gray-700">
                      Cash offers within 24 hours
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm"></span>
                    </div>
                    <span className="text-gray-700">
                      No realtor commissions
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm"></span>
                    </div>
                    <span className="text-gray-700">
                      Close on your timeline
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Testimonials Section */}
      <section className="py-20 bg-p4c-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-p4c-navy mb-4">
              Families Finding Their Forever Homes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real stories from families who've found safety, stability, and
              community through Properties 4 Creation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-p4c-gold">
                    
                  </span>
                ))}
              </div>
              <blockquote className="text-gray-700 italic mb-4 leading-relaxed">
                "After years of moving from place to place, we finally have a
                home where our kids can grow up safely. The schools are amazing
                and the community is so welcoming."
              </blockquote>
              <div className="border-t border-gray-100 pt-4">
                <div className="font-bold text-p4c-navy">Maria Rodriguez</div>
                <div className="text-sm text-gray-500">
                  Mother of 3 &mdash; Longview, TX
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-p4c-gold">
                    
                  </span>
                ))}
              </div>
              <blockquote className="text-gray-700 italic mb-4 leading-relaxed">
                "P4C understood our needs as a growing family. They found us the
                perfect 4-bedroom home with a yard for our kids to play. We
                finally have stability."
              </blockquote>
              <div className="border-t border-gray-100 pt-4">
                <div className="font-bold text-p4c-navy">
                  David & Sarah Chen
                </div>
                <div className="text-sm text-gray-500">
                  Parents of twins &mdash; Tyler, TX
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-p4c-gold">
                    
                  </span>
                ))}
              </div>
              <blockquote className="text-gray-700 italic mb-4 leading-relaxed">
                "As a single mom, I was worried about affording quality housing.
                P4C made it possible for my daughter to attend one of the best
                schools in the district."
              </blockquote>
              <div className="border-t border-gray-100 pt-4">
                <div className="font-bold text-p4c-navy">Jennifer Williams</div>
                <div className="text-sm text-gray-500">
                  Single mother &mdash; Lindale, TX
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/family-resources"
              className="inline-flex items-center gap-2 bg-p4c-gold text-p4c-navy hover:bg-p4c-navy hover:text-p4c-gold px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Learn more about family housing resources"
            >
              Explore Family Resources
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Impact Section - We Buy Houses */}
      <section className="py-20 bg-p4c-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={IMAGES.PROPERTIES.KEMP_TOWNHOME}
                alt="Kemp Townhome with American flag"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-p4c-navy/30 mix-blend-multiply" />
            </div>
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-p4c-gold/20 px-4 py-2 rounded-full text-p4c-gold text-sm font-bold uppercase tracking-wider mb-4 border border-p4c-gold/30">
                We Buy Houses
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                We Buy Houses: Any Price, Any Condition.
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                We specialize in transforming neglected properties into safe,
                stable housing for our community and those who served.
              </p>
              <button
                onClick={() => navigate('/homeowner-solutions')}
                className="bg-p4c-gold text-p4c-navy hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Explore Homeowner Solutions
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
                See the Transformation
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From distressed to dream home. Watch our renovation process turn
                neglected properties into high-quality, affordable housing.
              </p>
              <a
                href="/transparency"
                className="inline-flex items-center gap-2 text-p4c-gold font-bold hover:underline"
              >
                View Our Renovation Standards
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="w-full">
              <div className="mb-4 text-center text-sm text-gray-500 italic">
                Drag the slider to see the transformation
              </div>
              <BeforeAfterSlider
                beforeImage={IMAGES.RENOVATION.LIVING_ROOM.BEFORE}
                afterImage={IMAGES.RENOVATION.LIVING_ROOM.AFTER}
                label="Living Room"
              />
              <div className="mt-8">
                <div className="mb-4 text-center text-sm text-gray-500 italic">
                  Watch our team in action
                </div>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full rounded-xl shadow-lg"
                  aria-label="Timelapse video of our team assembling a kitchen"
                >
                  <source src={IMAGES.VIDEOS.HERO_WORK} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        id="apply"
        className="py-24 bg-p4c-navy text-center px-4 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to find your sanctuary?
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Our application process is designed to be dignified, simple, and
            fast. No hidden fees, no bureaucratic hurdles.
          </p>
          <button
            onClick={() => navigate('/apply')}
            className="bg-p4c-gold text-p4c-navy hover:bg-white hover:text-p4c-navy px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Start Your Concierge Application
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;

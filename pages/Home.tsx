
import React, { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ImpactDashboard from '../components/ImpactDashboard';
import PropertyCard from '../components/PropertyCard';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import GeminiImageEditor from '../components/GeminiImageEditor';
import { api } from '../services/api';
import type { ExtendedProperty } from '../data/properties';
import { IMAGES } from '../constants/images';
import { CheckCircle2, Shield, Search, SlidersHorizontal, X } from 'lucide-react';
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
        console.error('Failed to fetch properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Extract unique badges from all properties for the filter list
  const allBadges = useMemo(() => {
    const badges = new Set<string>();
    properties.forEach(p => p.badges.forEach(b => badges.add(b)));
    return Array.from(badges);
  }, [properties]);

  // Filtering Logic
  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
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
      const matchesBadges = selectedBadges.every(badge => property.badges.includes(badge));

      return matchesSearch && matchesPrice && matchesBeds && matchesBadges;
    });
  }, [properties, searchQuery, maxPrice, minBeds, selectedBadges]);

  const toggleBadge = (badge: string) => {
    setSelectedBadges(prev => 
      prev.includes(badge) 
        ? prev.filter(b => b !== badge) 
        : [...prev, badge]
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
        <title>Properties 4 Creations | Veteran Owned Affordable Housing</title>
        <meta name="description" content="Properties 4 Creation buys distressed properties, renovates them to premium standards, and rents them affordably to veterans and families in East Texas." />
      </Helmet>
      
      <Hero />
      
      <ImpactDashboard />

      {/* Featured Listings */}
      <section id="homes" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8">
              <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-p4c-navy mb-2">Find Your Home</h2>
                  <p className="text-gray-600 max-w-xl">High-quality, affordable homes ready for move-in. We accept all housing vouchers.</p>
              </div>
          </div>

          {/* Search & Filter Bar */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              
              {/* Search Input */}
              <div className="md:col-span-5 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search by city, address, or keyword..." 
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-p4c-gold focus:border-p4c-gold transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search properties"
                />
              </div>

              {/* Price Dropdown */}
              <div className="md:col-span-3">
                <select 
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-p4c-gold focus:border-p4c-gold bg-white"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  aria-label="Filter by Maximum Price"
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
                <select 
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-p4c-gold focus:border-p4c-gold bg-white"
                  value={minBeds}
                  onChange={(e) => setMinBeds(Number(e.target.value))}
                  aria-label="Filter by Minimum Bedrooms"
                >
                  <option value={0}>Bedrooms: Any</option>
                  <option value={1}>1+ Bed</option>
                  <option value={2}>2+ Beds</option>
                  <option value={3}>3+ Beds</option>
                  <option value={4}>4+ Beds</option>
                </select>
              </div>

              {/* Clear Button (Mobile only or Icon) */}
              <div className="md:col-span-1 flex justify-center">
                <button 
                  onClick={clearFilters}
                  className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-gray-100"
                  title="Clear Filters"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Badges / Amenities Filter */}
            <div className="mt-6 pt-4 border-t border-gray-100">
               <div className="flex items-center gap-2 mb-3 text-sm font-bold text-gray-500 uppercase tracking-wide">
                  <SlidersHorizontal className="w-4 h-4" /> Filter by Features:
               </div>
               <div className="flex flex-wrap gap-2">
                  {allBadges.map((badge) => (
                    <button
                      key={badge}
                      onClick={() => toggleBadge(badge)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                        selectedBadges.includes(badge)
                          ? 'bg-p4c-navy text-white border-p4c-navy shadow-md'
                          : 'bg-white text-gray-600 border-gray-200 hover:border-p4c-gold hover:text-p4c-navy'
                      }`}
                    >
                      {badge}
                    </button>
                  ))}
               </div>
            </div>
          </div>
          
          {/* Results Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                  <div className="h-64 bg-gray-200 animate-pulse"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse mb-6"></div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProperties.map(prop => (
                    <PropertyCard key={prop.id} property={prop} />
                ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300">
              <div className="inline-flex justify-center items-center bg-white p-4 rounded-full mb-4 shadow-sm">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-p4c-navy mb-2">No homes found matching your criteria</h3>
              <p className="text-gray-500 mb-6">Try adjusting your filters or price range.</p>
              <button 
                onClick={clearFilters}
                className="text-p4c-gold font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
      </section>

      {/* Transformation Showcase */}
      <section id="transparency" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                       <div className="inline-flex items-center gap-2 bg-p4c-beige px-3 py-1 rounded-full text-p4c-navy text-xs font-bold uppercase tracking-wider mb-4 border border-gray-200">
                          <Shield className="w-4 h-4" /> Transparency Hub
                       </div>
                      <h2 className="text-3xl md:text-4xl font-serif font-bold text-p4c-navy mb-6">
                          We Install Quality, <br />
                          <span className="text-p4c-gold">Not Cheap Fixes.</span>
                      </h2>
                      <p className="text-gray-600 mb-8 leading-relaxed">
                          Many landlords cut corners. We don't. At Properties 4 Creation, we use homeowner-grade materials like Quartz countertops, luxury vinyl plank flooring, and high-efficiency HVAC systems. Why? because you deserve a home that lasts and feels proud to live in.
                      </p>
                      
                      <ul className="space-y-4 mb-8">
                          <li className="flex items-start">
                              <CheckCircle2 className="w-6 h-6 text-p4c-gold mr-3 flex-shrink-0" />
                              <span className="text-gray-700"><strong>Quartz Countertops:</strong> Durable, hygienic, and beautiful.</span>
                          </li>
                           <li className="flex items-start">
                              <CheckCircle2 className="w-6 h-6 text-p4c-gold mr-3 flex-shrink-0" />
                              <span className="text-gray-700"><strong>LVP Flooring:</strong> Waterproof and scratch-resistant.</span>
                          </li>
                           <li className="flex items-start">
                              <CheckCircle2 className="w-6 h-6 text-p4c-gold mr-3 flex-shrink-0" />
                              <span className="text-gray-700"><strong>Energy Efficient:</strong> Lower utility bills for our tenants.</span>
                          </li>
                      </ul>
                  </div>
                  
                  <div className="w-full">
                       <div className="mb-4 text-center text-sm text-gray-500 italic">Drag the slider to see the transformation</div>
                       <BeforeAfterSlider 
                          beforeImage={IMAGES.RENOVATION.LIVING_ROOM.BEFORE}
                          afterImage={IMAGES.RENOVATION.LIVING_ROOM.AFTER}
                          label="Living Room"
                       />
                  </div>
              </div>
          </div>
      </section>

      {/* AI Visualization Section */}
      <section className="py-20 bg-p4c-beige border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
             <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-4">Design Your Future</h2>
             <p className="text-gray-600 max-w-2xl mx-auto">
               Curious what a renovation could look like? Use our AI tool to apply styles to your own photos or visualize changes.
             </p>
          </div>
          <GeminiImageEditor />
        </div>
      </section>

      {/* Call to Action */}
      <section id="apply" className="py-24 bg-p4c-navy text-center px-4 relative overflow-hidden">
          {/* Background Pattern */}
           <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Ready to find your sanctuary?</h2>
              <p className="text-gray-300 text-lg mb-10">
                  Our application process is designed to be dignified, simple, and fast. No hidden fees, no bureaucratic hurdles.
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

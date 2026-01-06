import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../services/api';
import type { ExtendedProperty } from '../data/properties';
import {
  Bed,
  Bath,
  Move,
  MapPin,
  Check,
  ArrowLeft,
  Calendar,
  School,
  Accessibility,
  ShieldCheck,
  Map,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import PropertyDetailsSkeleton from '../components/PropertyDetailsSkeleton';

const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<ExtendedProperty | undefined>(
    undefined,
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) {
        setError('Property ID is required');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const propertyData = await api.properties.getById(id);
        setProperty(propertyData || undefined);
      } catch (err) {
        setError('Failed to load property details. Please try again.');
        console.error('Error fetching property:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return <PropertyDetailsSkeleton />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-p4c-beige px-4">
        <Helmet>
          <title>Error Loading Property | Properties 4 Creation</title>
        </Helmet>
        <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-4">
          Unable to Load Property
        </h2>
        <p className="text-gray-600 mb-4">{error}</p>
        <div className="space-x-4">
          <button
            onClick={() => window.location.reload()}
            className="bg-p4c-navy text-white px-6 py-3 rounded-md font-bold hover:bg-opacity-90"
          >
            Try Again
          </button>
          <Link
            to="/"
            className="bg-gray-500 text-white px-6 py-3 rounded-md font-bold hover:bg-opacity-90"
          >
            Back to Listings
          </Link>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-p4c-beige px-4">
        <Helmet>
          <title>Property Not Found | Properties 4 Creation</title>
        </Helmet>
        <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-4">
          Property Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The listing you are looking for may have been removed or is
          unavailable.
        </p>
        <Link
          to="/"
          className="bg-p4c-navy text-white px-6 py-3 rounded-md font-bold hover:bg-opacity-90"
        >
          Back to Listings
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-p4c-beige min-h-screen pb-20 animate-fade-in">
      <Helmet>
        <title>{property.title} | Properties 4 Creation Listings</title>
        <meta
          name="description"
          content={`Check out ${property.title} in ${property.address}. ${property.beds} Bed, ${property.baths} Bath, ${property.badges.join(', ')}.`}
        />
      </Helmet>

      {/* Hero Image */}
      <div className="relative h-[50vh] w-full">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute top-4 left-4 md:top-8 md:left-8 z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-p4c-navy px-4 py-2 rounded-full font-bold shadow-lg transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Back to listings
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {property.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="bg-p4c-gold text-p4c-navy text-sm font-bold px-3 py-1 rounded-sm uppercase tracking-wide"
                >
                  {badge}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2 shadow-sm">
              {property.title}
            </h1>
            <p className="text-xl opacity-90 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-p4c-gold" /> {property.address}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats Bar */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex justify-between items-center text-center">
              <div>
                <div className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-1">
                  Monthly Rent
                </div>
                <div className="text-3xl font-serif font-bold text-p4c-navy">
                  ${property.price}
                </div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <div className="flex items-center justify-center gap-2 text-gray-500 text-xs uppercase tracking-widest font-bold mb-1">
                  <Bed className="w-4 h-4" /> Bedrooms
                </div>
                <div className="text-2xl font-bold text-p4c-navy">
                  {property.beds}
                </div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <div className="flex items-center justify-center gap-2 text-gray-500 text-xs uppercase tracking-widest font-bold mb-1">
                  <Bath className="w-4 h-4" /> Bathrooms
                </div>
                <div className="text-2xl font-bold text-p4c-navy">
                  {property.baths}
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-200" />
              <div className="hidden sm:block">
                <div className="flex items-center justify-center gap-2 text-gray-500 text-xs uppercase tracking-widest font-bold mb-1">
                  <Move className="w-4 h-4" /> Square Ft
                </div>
                <div className="text-2xl font-bold text-p4c-navy">
                  {property.sqft}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-serif font-bold text-p4c-navy mb-6">
                About this Home
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                {property.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-bold text-lg text-p4c-navy mb-4 border-b border-gray-100 pb-2 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-p4c-gold" /> Amenities
                  </h3>
                  <ul className="space-y-3">
                    {property.amenities.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <div className="bg-green-100 p-1 rounded-full">
                          <Check className="w-3 h-3 text-green-700" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-p4c-navy mb-4 border-b border-gray-100 pb-2 flex items-center gap-2">
                    <Accessibility className="w-5 h-5 text-p4c-gold" />{' '}
                    Accessibility
                  </h3>
                  <ul className="space-y-3">
                    {property.accessibilityFeatures.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <div className="bg-blue-100 p-1 rounded-full">
                          <Check className="w-3 h-3 text-blue-700" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-lg text-p4c-navy mb-4 flex items-center gap-2">
                  <Map className="w-5 h-5 text-p4c-gold" /> Location & Schools
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">
                      Neighborhood
                    </p>
                    <p className="font-medium text-p4c-navy">
                      {property.neighborhood}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1 flex items-center gap-1">
                      <School className="w-3 h-3" /> School District
                    </p>
                    <p className="font-medium text-p4c-navy">
                      {property.schoolDistrict}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24 border border-gray-100">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-p4c-navy">Interested?</h3>
                <p className="text-gray-500 text-sm">
                  Availability:{' '}
                  <span className="font-bold text-green-600">
                    {property.availabilityDate}
                  </span>
                </p>
              </div>

              <div className="space-y-4">
                <Link
                  to="/apply"
                  className="block w-full bg-p4c-navy text-white text-center py-4 rounded-md font-bold text-lg hover:bg-p4c-slate transition-colors shadow-md"
                >
                  Start Application
                </Link>
                <button className="block w-full bg-white border-2 border-p4c-navy text-p4c-navy text-center py-3 rounded-md font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" /> Schedule Viewing
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="font-bold text-sm text-gray-900 mb-2">
                  We Accept:
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded">
                    Section 8 / HCV
                  </span>
                  <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded">
                    HUD-VASH
                  </span>
                  <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded">
                    Rapid Rehousing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;

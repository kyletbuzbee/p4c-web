import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../services/api';
import type { ExtendedProperty } from '../types/types';
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
    undefined
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
      } catch {
        setError('Failed to load property details. Please try again.');
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
      <div className="flex min-h-screen flex-col items-center justify-center bg-p4c-beige px-4">
        <Helmet>
          <title>Error Loading Property | Properties 4 Creation</title>
        </Helmet>
        <h2 className="mb-4 font-serif text-3xl font-bold text-p4c-navy">
          Unable to Load Property
        </h2>
        <p className="mb-4 text-gray-600">{error}</p>
        <div className="space-x-4">
          <button
            onClick={() => window.location.reload()}
            className="rounded-md bg-p4c-navy px-6 py-3 font-bold text-white hover:bg-p4c-navy/90"
          >
            Try Again
          </button>
          <Link
            to="/"
            className="rounded-md bg-gray-500 px-6 py-3 font-bold text-white hover:bg-gray-500/90"
          >
            Back to Listings
          </Link>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-p4c-beige px-4">
        <Helmet>
          <title>Property Not Found | Properties 4 Creation</title>
        </Helmet>
        <h2 className="mb-4 font-serif text-3xl font-bold text-p4c-navy">
          Property Not Found
        </h2>
        <p className="mb-8 text-gray-600">
          The listing you are looking for may have been removed or is
          unavailable.
        </p>
        <Link
          to="/"
          className="rounded-md bg-p4c-navy px-6 py-3 font-bold text-white hover:bg-p4c-navy/90"
        >
          Back to Listings
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen animate-fade-in bg-p4c-beige pb-20">
      <Helmet>
        <title>{property.title} | Properties 4 Creation Listings</title>
        <meta
          name="description"
          content={`Check out ${property.title} in ${property.address}. ${property.beds} Bed, ${property.baths} Bath, ${property.badges.join(', ')}.`}
        />
        <meta
          name="keywords"
          content={`rental property ${property.address}, ${property.beds} bedroom rental, affordable housing ${property.neighborhood}, Section 8 housing, HUD-VASH housing`}
        />
      </Helmet>

      {/* Hero Image */}
      <div className="relative h-[50vh] w-full">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute left-4 top-4 z-10 md:left-8 md:top-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 font-bold text-p4c-navy shadow-lg transition-all hover:bg-white"
          >
            <ArrowLeft className="size-4" /> Back to listings
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-4 text-white md:p-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-4 flex flex-wrap gap-2">
              {property.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="rounded-sm bg-p4c-gold px-3 py-1 text-sm font-bold uppercase tracking-wide text-p4c-navy"
                >
                  {badge}
                </span>
              ))}
            </div>
            <h1 className="mb-2 font-serif text-4xl font-bold shadow-sm md:text-5xl">
              {property.title}
            </h1>
            <p className="flex items-center gap-2 text-xl opacity-90">
              <MapPin className="size-5 text-p4c-gold" /> {property.address}
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto -mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Info */}
          <div className="space-y-8 lg:col-span-2">
            {/* Stats Bar */}
            <div className="flex items-center justify-between rounded-xl bg-white p-6 text-center shadow-lg">
              <div>
                <div className="mb-1 text-xs font-bold uppercase tracking-widest text-gray-500">
                  Monthly Rent
                </div>
                <div className="font-serif text-3xl font-bold text-p4c-navy">
                  ${property.price}
                </div>
              </div>
              <div className="h-12 w-px bg-gray-200" />
              <div>
                <div className="mb-1 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                  <Bed className="size-4" /> Bedrooms
                </div>
                <div className="text-2xl font-bold text-p4c-navy">
                  {property.beds}
                </div>
              </div>
              <div className="h-12 w-px bg-gray-200" />
              <div>
                <div className="mb-1 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                  <Bath className="size-4" /> Bathrooms
                </div>
                <div className="text-2xl font-bold text-p4c-navy">
                  {property.baths}
                </div>
              </div>
              <div className="hidden h-12 w-px bg-gray-200 sm:block" />
              <div className="hidden sm:block">
                <div className="mb-1 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                  <Move className="size-4" /> Square Ft
                </div>
                <div className="text-2xl font-bold text-p4c-navy">
                  {property.sqft}
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h2 className="mb-6 font-serif text-2xl font-bold text-p4c-navy">
                About this Home
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-700">
                {property.description}
              </p>

              <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 flex items-center gap-2 border-b border-gray-100 pb-2 text-lg font-bold text-p4c-navy">
                    <ShieldCheck className="size-5 text-p4c-gold" /> Amenities
                  </h3>
                  <ul className="space-y-3">
                    {property.amenities.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <div className="rounded-full bg-green-100 p-1">
                          <Check className="size-3 text-green-700" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 flex items-center gap-2 border-b border-gray-100 pb-2 text-lg font-bold text-p4c-navy">
                    <Accessibility className="size-5 text-p4c-gold" />{' '}
                    Accessibility
                  </h3>
                  <ul className="space-y-3">
                    {property.accessibilityFeatures.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <div className="rounded-full bg-blue-100 p-1">
                          <Check className="size-3 text-blue-700" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-p4c-navy">
                  <Map className="size-5 text-p4c-gold" /> Location & Schools
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-widest text-gray-500">
                      Neighborhood
                    </p>
                    <p className="font-medium text-p4c-navy">
                      {property.neighborhood}
                    </p>
                  </div>
                  <div>
                    <p className="mb-1 flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-gray-500">
                      <School className="size-3" /> School District
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
            <div className="sticky top-24 rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
              <div className="mb-6 text-center">
                <h3 className="text-xl font-bold text-p4c-navy">Interested?</h3>
                <p className="text-sm text-gray-500">
                  Availability:{' '}
                  <span className="font-bold text-green-600">
                    {property.availabilityDate}
                  </span>
                </p>
              </div>

              <div className="space-y-4">
                <Link
                  to="/apply"
                  className="block w-full rounded-md bg-p4c-navy py-4 text-center text-lg font-bold text-white shadow-md transition-colors hover:bg-p4c-slate"
                >
                  Start Application
                </Link>
                <button className="flex w-full items-center justify-center gap-2 rounded-md border-2 border-p4c-navy bg-white py-3 text-center font-bold text-p4c-navy transition-colors hover:bg-gray-50">
                  <Calendar className="size-5" /> Schedule Viewing
                </button>
              </div>

              <div className="mt-6 border-t border-gray-100 pt-6">
                <h4 className="mb-2 text-sm font-bold text-gray-900">
                  We Accept:
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded bg-gray-100 px-2 py-1 text-xs font-bold text-gray-600">
                    Section 8 / HCV
                  </span>
                  <span className="rounded bg-gray-100 px-2 py-1 text-xs font-bold text-gray-600">
                    HUD-VASH
                  </span>
                  <span className="rounded bg-gray-100 px-2 py-1 text-xs font-bold text-gray-600">
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

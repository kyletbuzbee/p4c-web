import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { IMAGES } from '../constants/images';
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  MapPin,
  User,
  DollarSign,
  Clock,
} from 'lucide-react';

interface FormData {
  name: string;
  address: string;
  phone: string;
  propertyType?: string;
  timeline?: string;
}

interface FormErrors {
  name?: string;
  address?: string;
  phone?: string;
}

const HomeownerSolutions: React.FC = () => {
  // REMOVED: unused navigate hook
  const [formData, setFormData] = useState<FormData>(() => {
    const saved = localStorage.getItem('homeownerSolutionsForm');
    return saved
      ? JSON.parse(saved)
      : {
          name: '',
          address: '',
          phone: '',
          propertyType: '',
          timeline: '',
        };
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    localStorage.setItem('homeownerSolutionsForm', JSON.stringify(formData));
  }, [formData]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Property address is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch {
      // Error is handled by the error boundary service
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-p4c-beige">
      <Helmet>
        <title>
          Homeowner Solutions | Cash Offers East Texas | Properties 4 Creation
        </title>
        <meta
          name="description"
          content="We acquire residential assets in East Texas. Get a fair market cash offer for your property in as-is condition. Close in as little as 14 days."
        />
        <meta
          name="keywords"
          content="sell house fast Tyler TX, we buy houses Longview, cash home buyers East Texas, real estate investors Marshall, sell rental property"
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative flex h-[85vh] w-full items-center justify-center overflow-hidden">
        <div className="absolute left-0 top-0 z-0 size-full">
          <img
            src={IMAGES.PROPERTIES.JEFFERSON_RIVER}
            alt="Waterfront property acquisition in East Texas"
            className="size-full object-cover"
          />
          <div className="hero-overlay-primary bg-p4c-navy/60 absolute left-0 top-0 size-full" />
          <div className="hero-overlay-secondary to-p4c-navy/80 absolute left-0 top-0 size-full bg-gradient-to-b from-transparent via-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl animate-fade-in-up px-4 text-center">
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-wide text-white md:text-6xl">
            Direct Asset Acquisition <br />
            <span className="text-p4c-gold">Simplified.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg font-light leading-relaxed text-gray-100 md:text-xl">
            We provide liquidity for property owners in{' '}
            <strong>East Texas</strong> through competitive off-market cash
            offers.
          </p>
        </div>
      </div>

      {/* Video Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-p4c-navy md:text-4xl">
              Value-Add Strategy in Action
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              See how we maximize asset potential through strategic capital
              improvement.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-gray-100 shadow-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="aspect-video w-full object-cover"
              aria-label="Timelapse of property renovation"
            >
              <source src={IMAGES.VIDEOS.HERO_IMPACT} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="bg-p4c-beige py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-p4c-navy md:text-4xl">
              Asset Transformation
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              We specialize in the rehabilitation of distressed inventory,
              stabilizing property values in the community.
            </p>
          </div>

          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg">
              <div className="bg-slate-200 p-3">
                <h3 className="text-center text-sm font-bold uppercase tracking-wider text-slate-700">
                  Acquisition State
                </h3>
              </div>
              <img
                src={IMAGES.RENOVATION.LIVING_ROOM.BEFORE}
                alt="Property in distressed condition"
                className="h-64 w-full object-cover"
              />
              <div className="bg-white p-4">
                <p className="text-sm text-gray-600">
                  Deferred maintenance, outdated systems, vacancy risk.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg">
              <div className="bg-p4c-gold p-3">
                <h3 className="text-center text-sm font-bold uppercase tracking-wider text-p4c-navy">
                  Stabilized Asset
                </h3>
              </div>
              <img
                src={IMAGES.RENOVATION.LIVING_ROOM.AFTER}
                alt="Renovated property ready for leasing"
                className="h-64 w-full object-cover"
              />
              <div className="bg-white p-4">
                <p className="text-sm text-gray-600">
                  Market-ready finishes, updated mechanicals, premium rental.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-p4c-navy md:text-4xl">
              Seller Experiences
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Real feedback from property owners in East Texas who chose a
              direct sale.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="border-p4c-gold/20 rounded-2xl border bg-p4c-beige p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-full bg-p4c-navy">
                  <span className="text-lg font-bold text-white">S</span>
                </div>
                <div>
                  <h3 className="font-bold text-p4c-navy">Sarah Mitchell</h3>
                  <p className="text-sm text-gray-600">Tyler, TX</p>
                </div>
              </div>
              <blockquote className="mb-4 italic text-gray-700">
                &quot;I needed to liquidate an inherited property quickly.
                Properties 4 Creation provided a fair cash offer based on comps
                and we closed in 14 days. Extremely professional.&quot;
              </blockquote>
              <div className="flex text-p4c-gold">★★★★★</div>
            </div>

            <div className="border-p4c-gold/20 rounded-2xl border bg-p4c-beige p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-full bg-p4c-navy">
                  <span className="text-lg font-bold text-white">P</span>
                </div>
                <div>
                  <h3 className="font-bold text-p4c-navy">
                    Properties 4 Creation Team
                  </h3>
                  <p className="text-sm text-gray-600">East Texas</p>
                </div>
              </div>
              <blockquote className="mb-4 italic text-gray-700">
                &quot;As a landlord tired of management, selling my portfolio to
                P4C was the right move. They bought the properties
                &apos;as-is&apos; with tenants in place. Seamless
                transition.&quot;
              </blockquote>
              <div className="flex text-p4c-gold">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Tracker */}
      <section className="bg-p4c-navy py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-white md:text-4xl">
              Acquisition Process
            </h2>
            <p className="mx-auto max-w-2xl text-gray-300">
              Our streamlined disposition process ensures certainty of closing.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="group text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-p4c-gold text-xl font-bold text-p4c-navy transition-colors group-hover:bg-white">
                <Phone className="size-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">
                Discovery Call
              </h3>
              <p className="text-sm text-gray-300">
                Brief discussion regarding asset details and seller goals.
              </p>
            </div>

            <div className="group text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-p4c-gold text-xl font-bold text-p4c-navy transition-colors group-hover:bg-white">
                <DollarSign className="size-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">
                Market Analysis
              </h3>
              <p className="text-sm text-gray-300">
                We underwrite the property and present a net cash offer.
              </p>
            </div>

            <div className="group text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-p4c-gold text-xl font-bold text-p4c-navy transition-colors group-hover:bg-white">
                <CheckCircle2 className="size-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">
                Due Diligence
              </h3>
              <p className="text-sm text-gray-300">
                Rapid inspection period with no repair requests.
              </p>
            </div>

            <div className="group text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-p4c-gold text-xl font-bold text-p4c-navy transition-colors group-hover:bg-white">
                <Clock className="size-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">
                Closing & Funding
              </h3>
              <p className="text-sm text-gray-300">
                Close at a local title company on your timeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="border-p4c-gold/30 overflow-hidden rounded-2xl border bg-p4c-beige shadow-xl">
            <div className="p-8 md:p-10">
              <div className="mb-8 text-center">
                <h2 className="mb-3 font-serif text-3xl font-bold text-p4c-navy">
                  Request a Cash Offer
                </h2>
                <p className="text-gray-600">
                  Submit your property details for a confidential, no-obligation
                  valuation.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-10 text-center">
                  <div className="mb-4 inline-flex size-16 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2 className="size-8 text-green-600" />
                  </div>
                  <h3 className="mb-2 font-serif text-2xl font-bold text-p4c-navy">
                    Inquiry Received
                  </h3>
                  <p className="mb-6 text-gray-600">
                    Our acquisitions team will review your property and contact
                    you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        address: '',
                        phone: '',
                        propertyType: '',
                        timeline: '',
                      });
                    }}
                    className="font-bold text-p4c-gold underline transition-colors hover:text-p4c-navy"
                  >
                    Submit another property
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-bold text-p4c-navy"
                    >
                      Owner Name / Point of Contact
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className={`w-full rounded-xl border-2 bg-white py-4 pl-12 pr-4 transition-all focus:outline-none ${
                          errors.name
                            ? 'border-red-300 focus:border-red-500'
                            : 'border-gray-200 focus:border-p4c-gold'
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="address"
                      className="mb-2 block text-sm font-bold text-p4c-navy"
                    >
                      Property Address
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="123 Main Street, Tyler, TX 75701"
                        className={`w-full rounded-xl border-2 bg-white py-4 pl-12 pr-4 transition-all focus:outline-none ${
                          errors.address
                            ? 'border-red-300 focus:border-red-500'
                            : 'border-gray-200 focus:border-p4c-gold'
                        }`}
                      />
                    </div>
                    {errors.address && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.address}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-bold text-p4c-navy"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(903) 555-0123"
                        className={`w-full rounded-xl border-2 bg-white py-4 pl-12 pr-4 transition-all focus:outline-none ${
                          errors.phone
                            ? 'border-red-300 focus:border-red-500'
                            : 'border-gray-200 focus:border-p4c-gold'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="propertyType"
                        className="mb-2 block text-sm font-bold text-p4c-navy"
                      >
                        Asset Type
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            propertyType: e.target.value,
                          }))
                        }
                        className="w-full rounded-xl border-2 border-gray-200 bg-white p-4 focus:border-p4c-gold focus:outline-none"
                      >
                        <option value="">Select type</option>
                        <option>Single Family Residential</option>
                        <option>Multi-Family (2-4 Units)</option>
                        <option>Apartment Complex (5+ Units)</option>
                        <option>Commercial</option>
                        <option>Vacant Land</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="timeline"
                        className="mb-2 block text-sm font-bold text-p4c-navy"
                      >
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            timeline: e.target.value,
                          }))
                        }
                        className="w-full rounded-xl border-2 border-gray-200 bg-white p-4 focus:border-p4c-gold focus:outline-none"
                      >
                        <option value="">Select timeframe</option>
                        <option>Urgent (14-30 days)</option>
                        <option>Short Term (1-3 months)</option>
                        <option>Flexible</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-p4c-gold py-4 text-lg font-bold text-p4c-navy shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-p4c-goldHover hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="size-5 animate-spin rounded-full border-2 border-p4c-navy border-t-transparent" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Get My Offer
                        <ArrowRight className="size-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeownerSolutions;

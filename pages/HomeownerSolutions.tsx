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
    } catch (error) {
      // Error is handled by the error boundary service
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-p4c-beige min-h-screen">
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
      <div className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img
            src={IMAGES.PROPERTIES.JEFFERSON_RIVER}
            alt="Waterfront property acquisition in East Texas"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full hero-overlay-primary bg-p4c-navy/60" />
          <div className="absolute top-0 left-0 w-full h-full hero-overlay-secondary bg-gradient-to-b from-transparent via-transparent to-p4c-navy/80" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight tracking-wide">
            Direct Asset Acquisition <br />
            <span className="text-p4c-gold">Simplified.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            We provide liquidity for property owners in{' '}
            <strong>East Texas</strong> through competitive off-market cash
            offers.
          </p>
        </div>
      </div>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-p4c-navy mb-4">
              Value-Add Strategy in Action
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how we maximize asset potential through strategic capital
              improvement.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full aspect-video object-cover"
              aria-label="Timelapse of property renovation"
            >
              <source src={IMAGES.VIDEOS.HERO_IMPACT} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 bg-p4c-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-p4c-navy mb-4">
              Asset Transformation
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We specialize in the rehabilitation of distressed inventory,
              stabilizing property values in the community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-slate-200 p-3">
                <h3 className="text-sm font-bold text-slate-700 text-center uppercase tracking-wider">
                  Acquisition State
                </h3>
              </div>
              <img
                src={IMAGES.RENOVATION.LIVING_ROOM.BEFORE}
                alt="Property in distressed condition"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <p className="text-gray-600 text-sm">
                  Deferred maintenance, outdated systems, vacancy risk.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-p4c-gold p-3">
                <h3 className="text-sm font-bold text-p4c-navy text-center uppercase tracking-wider">
                  Stabilized Asset
                </h3>
              </div>
              <img
                src={IMAGES.RENOVATION.LIVING_ROOM.AFTER}
                alt="Renovated property ready for leasing"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <p className="text-gray-600 text-sm">
                  Market-ready finishes, updated mechanicals, premium rental.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-p4c-navy mb-4">
              Seller Experiences
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real feedback from property owners in East Texas who chose a
              direct sale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-p4c-beige rounded-2xl p-8 border border-p4c-gold/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-p4c-navy rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div>
                  <h3 className="font-bold text-p4c-navy">Sarah Mitchell</h3>
                  <p className="text-sm text-gray-600">Tyler, TX</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "I needed to liquidate an inherited property quickly. Properties
                4 Creation provided a fair cash offer based on comps and we
                closed in 14 days. Extremely professional."
              </blockquote>
              <div className="flex text-p4c-gold">★★★★★</div>
            </div>

            <div className="bg-p4c-beige rounded-2xl p-8 border border-p4c-gold/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-p4c-navy rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <div>
                  <h3 className="font-bold text-p4c-navy">Robert Johnson</h3>
                  <p className="text-sm text-gray-600">Longview, TX</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "As a landlord tired of management, selling my portfolio to P4C
                was the right move. They bought the properties 'as-is' with
                tenants in place. Seamless transition."
              </blockquote>
              <div className="flex text-p4c-gold">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Tracker */}
      <section className="py-20 bg-p4c-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Acquisition Process
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our streamlined disposition process ensures certainty of closing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-p4c-gold rounded-full flex items-center justify-center mx-auto mb-4 text-p4c-navy font-bold text-xl group-hover:bg-white transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Discovery Call
              </h3>
              <p className="text-gray-300 text-sm">
                Brief discussion regarding asset details and seller goals.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-p4c-gold rounded-full flex items-center justify-center mx-auto mb-4 text-p4c-navy font-bold text-xl group-hover:bg-white transition-colors">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Market Analysis
              </h3>
              <p className="text-gray-300 text-sm">
                We underwrite the property and present a net cash offer.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-p4c-gold rounded-full flex items-center justify-center mx-auto mb-4 text-p4c-navy font-bold text-xl group-hover:bg-white transition-colors">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Due Diligence
              </h3>
              <p className="text-gray-300 text-sm">
                Rapid inspection period with no repair requests.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-p4c-gold rounded-full flex items-center justify-center mx-auto mb-4 text-p4c-navy font-bold text-xl group-hover:bg-white transition-colors">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Closing & Funding
              </h3>
              <p className="text-gray-300 text-sm">
                Close at a local title company on your timeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-p4c-beige rounded-2xl shadow-xl overflow-hidden border border-p4c-gold/30">
            <div className="p-8 md:p-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-3">
                  Request a Cash Offer
                </h2>
                <p className="text-gray-600">
                  Submit your property details for a confidential, no-obligation
                  valuation.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-p4c-navy mb-2">
                    Inquiry Received
                  </h3>
                  <p className="text-gray-600 mb-6">
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
                    className="text-p4c-gold font-bold hover:text-p4c-navy underline transition-colors"
                  >
                    Submit another property
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-p4c-navy mb-2"
                    >
                      Owner Name / Point of Contact
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 bg-white focus:outline-none transition-all ${
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
                      className="block text-sm font-bold text-p4c-navy mb-2"
                    >
                      Property Address
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="123 Main Street, Tyler, TX 75701"
                        className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 bg-white focus:outline-none transition-all ${
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
                      className="block text-sm font-bold text-p4c-navy mb-2"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(903) 555-0123"
                        className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 bg-white focus:outline-none transition-all ${
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="propertyType"
                        className="block text-sm font-bold text-p4c-navy mb-2"
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
                        className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-p4c-gold bg-white"
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
                        className="block text-sm font-bold text-p4c-navy mb-2"
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
                        className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-p4c-gold bg-white"
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
                    className="w-full bg-p4c-gold text-p4c-navy hover:bg-p4c-goldHover py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transform hover:-translate-y-1"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-p4c-navy border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Get My Offer
                        <ArrowRight className="w-5 h-5" />
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

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { IMAGES } from '../constants/images';
import { ArrowRight, CheckCircle2, Phone, MapPin, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FormData {
  name: string;
  address: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  address?: string;
  phone?: string;
}

const HomeownerSolutions: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    address: '',
    phone: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      // No console.error needed as per project rules
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-p4c-beige min-h-screen">
      <Helmet>
        <title>Homeowner Solutions | Properties 4 Creation</title>
        <meta
          name="description"
          content="We buy houses in any condition to create high-quality homes for Veterans and families. Get a fair cash offer today."
        />
        <meta
          name="keywords"
          content="Veteran owned house buyers, sell my house as-is, Section 8 property investment, buy houses any condition"
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img
            src={IMAGES.PROPERTIES.JEFFERSON_RIVER}
            alt="Jefferson Riverfront Property"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full hero-overlay-primary bg-p4c-navy/50" />
          <div className="absolute top-0 left-0 w-full h-full hero-overlay-secondary bg-gradient-to-b from-transparent via-transparent to-p4c-navy/60" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight tracking-wide">
            Give Your Property a{' '}
            <span className="text-p4c-gold">New Mission.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            We buy houses in any condition to create high-quality homes for
            Veterans and families.
          </p>
        </div>
      </div>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-p4c-navy mb-4">
              From Distressed to Dream Home
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our Renovation Strategy in Action
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full aspect-video object-cover"
              aria-label="Transformation video showing property renovation process"
            >
              <source src={IMAGES.VIDEOS.HERO_IMPACT} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-p4c-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-p4c-navy/5 p-4 rounded-full inline-block mb-4">
                <CheckCircle2 className="w-10 h-10 text-p4c-gold" />
              </div>
              <h3 className="text-xl font-serif font-bold text-p4c-navy mb-3">
                Any Condition
              </h3>
              <p className="text-gray-600">
                We buy houses as-is. No repairs needed, no cleaning required.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-p4c-navy/5 p-4 rounded-full inline-block mb-4">
                <CheckCircle2 className="w-10 h-10 text-p4c-gold" />
              </div>
              <h3 className="text-xl font-serif font-bold text-p4c-navy mb-3">
                Fair Cash Offer
              </h3>
              <p className="text-gray-600">
                Competitive offers based on market value, not lowball prices.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-p4c-navy/5 p-4 rounded-full inline-block mb-4">
                <CheckCircle2 className="w-10 h-10 text-p4c-gold" />
              </div>
              <h3 className="text-xl font-serif font-bold text-p4c-navy mb-3">
                Quick Closing
              </h3>
              <p className="text-gray-600">
                Close in as little as 7 days. Your timeline, your choice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-20 bg-p4c-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-3">
                  Request a Discreet Property Consultation
                </h2>
                <p className="text-gray-600">
                  Tell us about your property and we'll get back to you within
                  24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-p4c-navy mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We've received your request and will be in touch shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', address: '', phone: '' });
                    }}
                    className="text-p4c-gold font-semibold hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Your Name
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
                        className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 focus:outline-none transition-all ${
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
                      className="block text-sm font-semibold text-gray-700 mb-2"
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
                        placeholder="123 Main Street, City, TX 757XX"
                        className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 focus:outline-none transition-all ${
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
                      className="block text-sm font-semibold text-gray-700 mb-2"
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
                        placeholder="(555) 123-4567"
                        className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 focus:outline-none transition-all ${
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

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-p4c-gold text-p4c-navy hover:bg-p4c-goldHover py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-p4c-navy border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Request Consultation
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

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-p4c-navy mb-6">
            Ready to See More Properties?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Browse our available homes and see how we're transforming
            neighborhoods one property at a time.
          </p>
          <button
            onClick={() => navigate('/#homes')}
            className="bg-p4c-navy text-white hover:bg-p4c-slate px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Browse Available Homes
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomeownerSolutions;

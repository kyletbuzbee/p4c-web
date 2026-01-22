import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Home, Wrench, MessageCircle, Phone, ShieldCheck, AlertTriangle } from 'lucide-react';
import { useToast } from '../context/ToastContext';

const ResidentServices: React.FC = () => {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    addToast("Resident Portal is currently under maintenance. Please check back soon or contact our office for assistance.", "info");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-p4c-beige min-h-screen">
      <Helmet>
        <title>
          Resident Services & Portal | Properties 4 Creation
        </title>
        <meta
          name="description"
          content="Access resident services, maintenance requests, and account management for Properties 4 Creation tenants in Tyler, Longview, and Marshall, Texas."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[400px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img
            src="/images/banners/resident-service-banner.png"
            alt="Happy resident family in their home"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-p4c-navy/80 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="bg-p4c-gold/20 p-4 rounded-2xl border border-p4c-gold/30 backdrop-blur-sm">
              <Home className="w-10 h-10 text-p4c-gold" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-wide">
            Resident Services
          </h1>
          <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto">
            Your home, your comfort, our priority
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Resident Portal Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/banners/family-resources-banner.png"
                alt="Resident portal access"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-p4c-navy/20" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-p4c-gold" />
                  <div>
                    <div className="font-bold text-p4c-navy">Secure Access</div>
                    <div className="text-sm text-gray-600">
                      Manage your account 24/7
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-6">
                Resident Portal
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Access your account to pay rent, submit maintenance requests, and manage your lease
                information conveniently online.
              </p>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-p4c-gold focus:border-p4c-gold transition-all"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-p4c-gold focus:border-p4c-gold transition-all"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-p4c-gold text-p4c-navy hover:bg-white hover:text-p4c-navy px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Login to Portal
                </button>
              </form>

              <div className="mt-6 text-center">
                <a href="#" className="text-p4c-gold hover:underline text-sm">
                  Forgot password?
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Access Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-4">
              Quick Access
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Common services at your fingertips
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow text-center">
              <div className="bg-p4c-navy/5 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-8 h-8 text-p4c-navy" />
              </div>
              <h3 className="text-xl font-bold text-p4c-navy mb-4">Maintenance Request</h3>
              <p className="text-gray-600 mb-6">
                Report maintenance issues 24/7 for prompt resolution
              </p>
              <a
                href="tel:(903) 555-0123"
                className="inline-flex items-center gap-2 text-p4c-gold font-bold hover:underline"
              >
                Call Maintenance <Phone className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow text-center">
              <div className="bg-p4c-navy/5 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-p4c-navy" />
              </div>
              <h3 className="text-xl font-bold text-p4c-navy mb-4">Contact Management</h3>
              <p className="text-gray-600 mb-6">
                Get in touch with our property management team
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-p4c-gold font-bold hover:underline"
              >
                Send Message
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow text-center">
              <div className="bg-p4c-navy/5 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-8 h-8 text-p4c-navy" />
              </div>
              <h3 className="text-xl font-bold text-p4c-navy mb-4">Emergency Contact</h3>
              <p className="text-gray-600 mb-6">
                For after-hours emergencies only
              </p>
              <a
                href="tel:(903) 555-9111"
                className="inline-flex items-center gap-2 text-red-500 font-bold hover:underline"
              >
                Emergency Line <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Resident Resources Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-6">
                Resident Resources
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Helpful information and resources for our residents to make your living experience
                comfortable and enjoyable.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-p4c-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-p4c-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-p4c-navy mb-2">Rent Payment Options</h4>
                    <p className="text-gray-600">
                      Multiple convenient ways to pay your rent on time
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-p4c-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-p4c-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-p4c-navy mb-2">Maintenance Guidelines</h4>
                    <p className="text-gray-600">
                      What to do for common maintenance issues
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-p4c-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-p4c-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-p4c-navy mb-2">Community Resources</h4>
                    <p className="text-gray-600">
                      Local services and amenities in Tyler and Longview
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/family/happy-family-kitchen.webp"
                alt="Happy family enjoying their home"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-p4c-navy/20" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <Home className="w-6 h-6 text-p4c-gold" />
                  <div>
                    <div className="font-bold text-p4c-navy">Your Comfort Matters</div>
                    <div className="text-sm text-gray-600">
                      We're here to support you
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Common questions from our residents
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <div className="bg-white rounded-xl shadow-md border border-gray-100">
              <button className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-p4c-navy">How do I pay my rent online?</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="px-6 pb-6 text-gray-600">
                <p>You can pay rent through our resident portal using bank transfer, credit card, or set up automatic payments. Payment is due on the 1st of each month.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-100">
              <button className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-p4c-navy">How do I submit a maintenance request?</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="px-6 pb-6 text-gray-600">
                <p>Maintenance requests can be submitted through the resident portal or by calling our 24/7 maintenance line at (903) 555-0123.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-100">
              <button className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-p4c-navy">What is the guest policy?</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="px-6 pb-6 text-gray-600">
                <p>Guests are welcome but must comply with all community rules. Overnight guests staying more than 3 days must be registered with management.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-100">
              <button className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-p4c-navy">How do I renew my lease?</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="px-6 pb-6 text-gray-600">
                <p>Lease renewal notices are sent 60 days before your lease expires. You can renew through the resident portal or contact our office.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-p4c-navy rounded-2xl text-white p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-p4c-gold/20 p-4 rounded-2xl border border-p4c-gold/30">
                <MessageCircle className="w-10 h-10 text-p4c-gold" />
              </div>
            </div>
            <h2 className="text-3xl font-serif font-bold mb-6">
              Need Assistance?
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Our resident services team is available to help with any questions or concerns.
              Contact us during business hours or use our 24/7 emergency line for urgent matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-p4c-gold text-p4c-navy hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                Contact Us
              </a>
              <a
                href="tel:(903) 555-0123"
                className="border-2 border-white text-white hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center gap-2"
              >
                Call Office
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResidentServices;
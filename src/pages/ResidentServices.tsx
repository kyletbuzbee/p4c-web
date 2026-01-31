import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Home,
  Wrench,
  MessageCircle,
  Phone,
  ShieldCheck,
  AlertTriangle,
} from 'lucide-react';
import { useToast } from '../context/ToastContext';
import { IMAGES } from '../constants/images';

const ResidentServices: React.FC = () => {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    addToast(
      'Resident Portal is currently under maintenance. Please check back soon or contact our office for assistance.',
      'info'
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-p4c-beige">
      <Helmet>
        <title>Resident Services & Portal | Properties 4 Creation</title>
        <meta
          name="description"
          content="Access resident services, maintenance requests, and account management for Properties 4 Creation tenants in East Texas, Texas."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
        <div className="absolute left-0 top-0 z-0 size-full">
          <img
            src={IMAGES.BANNERS.RESIDENT_SERVICE_BANNER}
            alt="Happy resident family in their home"
            className="size-full object-cover"
          />
          <div className="bg-p4c-navy/90 absolute left-0 top-0 size-full mix-blend-multiply" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl animate-fade-in-up px-4 text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold tracking-wide text-white md:text-5xl">
            Resident Services
          </h1>
          <p className="mx-auto max-w-2xl text-xl font-light text-gray-200">
            Your home, your comfort, our priority
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Resident Portal Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="relative h-96 overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={IMAGES.BANNERS.HERO_RESOURCES}
                alt="Resident portal access"
                className="size-full object-cover"
              />
              <div className="bg-p4c-navy/20 absolute inset-0" />
              <div className="absolute inset-x-6 bottom-6 rounded-xl bg-white/90 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="size-6 text-p4c-gold" />
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
              <h2 className="mb-6 font-serif text-3xl font-bold text-p4c-navy">
                Resident Portal
              </h2>
              <p className="mb-8 leading-relaxed text-gray-600">
                Access your account to pay rent, submit maintenance requests,
                and manage your lease information conveniently online.
              </p>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 transition-all focus:border-p4c-gold focus:ring-2 focus:ring-p4c-gold"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 transition-all focus:border-p4c-gold focus:ring-2 focus:ring-p4c-gold"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-p4c-gold px-6 py-4 text-lg font-bold text-p4c-navy shadow-lg transition-all duration-300 hover:bg-white hover:text-p4c-navy hover:shadow-xl"
                >
                  Login to Portal
                </button>
              </form>

              <div className="mt-6 text-center">
                <button
                  type="button"
                  className="cursor-pointer border-none bg-transparent text-sm text-p4c-gold hover:underline"
                  onClick={() =>
                    addToast(
                      'Password reset functionality coming soon. Please contact our office for assistance.',
                      'info'
                    )
                  }
                >
                  Forgot password?
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Access Section */}
        <section className="mb-20">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-p4c-navy">
              Quick Access
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Common services at your fingertips
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 text-center shadow-xl transition-shadow hover:shadow-2xl">
              <div className="bg-p4c-navy/5 mx-auto mb-6 flex size-16 items-center justify-center rounded-xl">
                <Wrench className="size-8 text-p4c-navy" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-p4c-navy">
                Maintenance Request
              </h3>
              <p className="mb-6 text-gray-600">
                Report maintenance issues 24/7 for prompt resolution
              </p>
              <a
                href="tel:(903) 555-0123"
                className="inline-flex items-center gap-2 font-bold text-p4c-gold hover:underline"
              >
                Call Maintenance <Phone className="size-4" />
              </a>
            </div>

            <div className="rounded-2xl bg-white p-8 text-center shadow-xl transition-shadow hover:shadow-2xl">
              <div className="bg-p4c-navy/5 mx-auto mb-6 flex size-16 items-center justify-center rounded-xl">
                <MessageCircle className="size-8 text-p4c-navy" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-p4c-navy">
                Contact Management
              </h3>
              <p className="mb-6 text-gray-600">
                Get in touch with our property management team
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 font-bold text-p4c-gold hover:underline"
              >
                Send Message
              </a>
            </div>

            <div className="rounded-2xl bg-white p-8 text-center shadow-xl transition-shadow hover:shadow-2xl">
              <div className="bg-p4c-navy/5 mx-auto mb-6 flex size-16 items-center justify-center rounded-xl">
                <AlertTriangle className="size-8 text-p4c-navy" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-p4c-navy">
                Emergency Contact
              </h3>
              <p className="mb-6 text-gray-600">
                For after-hours emergencies only
              </p>
              <a
                href="tel:(903) 555-9111"
                className="inline-flex items-center gap-2 font-bold text-red-500 hover:underline"
              >
                Emergency Line <Phone className="size-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Resident Resources Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-serif text-3xl font-bold text-p4c-navy">
                Resident Resources
              </h2>
              <p className="mb-8 leading-relaxed text-gray-600">
                Helpful information and resources for our residents to make your
                living experience comfortable and enjoyable.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-p4c-gold/20 mt-1 flex size-8 shrink-0 items-center justify-center rounded-full">
                    <svg
                      className="size-5 text-p4c-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-2 font-bold text-p4c-navy">
                      Rent Payment Options
                    </h4>
                    <p className="text-gray-600">
                      Multiple convenient ways to pay your rent on time
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-p4c-gold/20 mt-1 flex size-8 shrink-0 items-center justify-center rounded-full">
                    <svg
                      className="size-5 text-p4c-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-2 font-bold text-p4c-navy">
                      Maintenance Guidelines
                    </h4>
                    <p className="text-gray-600">
                      What to do for common maintenance issues
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-p4c-gold/20 mt-1 flex size-8 shrink-0 items-center justify-center rounded-full">
                    <svg
                      className="size-5 text-p4c-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-2 font-bold text-p4c-navy">
                      Community Resources
                    </h4>
                    <p className="text-gray-600">
                      Local services and amenities in Tyler and Longview
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-96 overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={IMAGES.FAMILY.HAPPY_KITCHEN}
                alt="Happy family enjoying their home"
                className="size-full object-cover"
              />
              <div className="bg-p4c-navy/20 absolute inset-0" />
              <div className="absolute inset-x-6 bottom-6 rounded-xl bg-white/90 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <Home className="size-6 text-p4c-gold" />
                  <div>
                    <div className="font-bold text-p4c-navy">
                      Your Comfort Matters
                    </div>
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
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-p4c-navy">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Common questions from our residents
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-4">
            <div className="rounded-xl border border-gray-100 bg-white shadow-md">
              <button className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50">
                <span className="font-semibold text-p4c-navy">
                  How do I pay my rent online?
                </span>
                <svg
                  className="size-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="px-6 pb-6 text-gray-600">
                <p>
                  You can pay rent through our resident portal using bank
                  transfer, credit card, or set up automatic payments. Payment
                  is due on the 1st of each month.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white shadow-md">
              <button className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50">
                <span className="font-semibold text-p4c-navy">
                  How do I submit a maintenance request?
                </span>
                <svg
                  className="size-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="px-6 pb-6 text-gray-600">
                <p>
                  Maintenance requests can be submitted through the resident
                  portal or by calling our 24/7 maintenance line at (903)
                  555-0123.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white shadow-md">
              <button className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50">
                <span className="font-semibold text-p4c-navy">
                  What is the guest policy?
                </span>
                <svg
                  className="size-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="px-6 pb-6 text-gray-600">
                <p>
                  Guests are welcome but must comply with all community rules.
                  Overnight guests staying more than 3 days must be registered
                  with management.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white shadow-md">
              <button className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50">
                <span className="font-semibold text-p4c-navy">
                  How do I renew my lease?
                </span>
                <svg
                  className="size-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="px-6 pb-6 text-gray-600">
                <p>
                  Lease renewal notices are sent 60 days before your lease
                  expires. You can renew through the resident portal or contact
                  our office.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="rounded-2xl bg-p4c-navy p-12 text-center text-white">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 flex justify-center">
              <div className="bg-p4c-gold/20 border-p4c-gold/30 rounded-2xl border p-4">
                <MessageCircle className="size-10 text-p4c-gold" />
              </div>
            </div>
            <h2 className="mb-6 font-serif text-3xl font-bold">
              Need Assistance?
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-300">
              Our resident services team is available to help with any questions
              or concerns. Contact us during business hours or use our 24/7
              emergency line for urgent matters.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-p4c-gold px-8 py-4 text-lg font-bold text-p4c-navy shadow-lg transition-all duration-300 hover:bg-white hover:text-p4c-navy hover:shadow-xl"
              >
                Contact Us
              </a>
              <a
                href="tel:(903) 555-0123"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-white hover:text-p4c-navy"
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

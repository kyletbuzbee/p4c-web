import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  FileText,
  UserCheck,
  Key,
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Lock,
} from 'lucide-react';

// Form Steps Configuration
const STEPS = [
  { id: 1, title: 'Personal Info', icon: UserCheck },
  { id: 2, title: 'Housing History', icon: FileText },
  { id: 3, title: 'Review & Submit', icon: Key },
];

const Application: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Mock Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    window.scrollTo(0, 0);
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo(0, 0);
  };

  if (isSuccess) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-p4c-beige p-4">
        <div className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-xl">
          <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="size-10 text-green-600" />
          </div>
          <h2 className="mb-4 font-serif text-3xl font-bold text-p4c-navy">
            Application Received
          </h2>
          <p className="mb-8 text-gray-600">
            Thank you for applying with Properties 4 Creation. Our leasing team
            is reviewing your information and will contact you within 2 business
            days.
          </p>
          <a
            href="/"
            className="inline-block rounded-lg bg-p4c-navy px-8 py-3 font-bold text-white transition-colors hover:bg-p4c-slate"
          >
            Return Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-p4c-beige py-12">
      <Helmet>
        <title>Tenant Application | Properties 4 Creation</title>
        <meta
          name="description"
          content="Start your journey home. Secure, digital rental application for Properties 4 Creation homes in East Texas."
        />
      </Helmet>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="mx-auto mb-4 max-w-lg font-serif text-3xl font-bold leading-tight text-p4c-navy md:text-4xl">
            Properties 4 Creation
            <br />
            Rental Application
          </h1>
          <p className="flex items-center justify-center gap-2 text-gray-600">
            <Lock className="size-4" /> Secure 256-bit Encrypted Submission
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="relative z-10 flex items-center justify-between">
            {STEPS.map((step) => (
              <div
                key={step.id}
                className={`flex flex-col items-center gap-2 ${
                  currentStep >= step.id ? 'text-p4c-navy' : 'text-gray-400'
                }`}
              >
                <div
                  className={`flex size-10 items-center justify-center rounded-full font-bold transition-all duration-300 ${
                    currentStep >= step.id
                      ? 'scale-110 bg-p4c-gold text-p4c-navy shadow-lg'
                      : 'border-2 border-gray-200 bg-white'
                  }`}
                >
                  <step.icon className="size-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider">
                  {step.title}
                </span>
              </div>
            ))}
          </div>
          {/* Progress Line */}
          <div className="absolute left-0 top-[160px] -z-0 hidden h-1 w-full bg-gray-200 md:block">
            {/* This requires precise positioning relative to container, simplified here */}
          </div>
        </div>

        {/* Form Container */}
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">
          <form onSubmit={handleSubmit} className="p-8">
            {/* Step 1: Personal Info */}
            {currentStep === 1 && (
              <div className="animate-fade-in space-y-6">
                <h3 className="mb-6 border-b pb-4 text-xl font-bold text-p4c-navy">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-2 block text-sm font-bold text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      className="focus:ring-p4c-gold/20 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-p4c-gold focus:ring-2"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-2 block text-sm font-bold text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      className="focus:ring-p4c-gold/20 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-p4c-gold focus:ring-2"
                      placeholder="Doe"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-bold text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="focus:ring-p4c-gold/20 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-p4c-gold focus:ring-2"
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-bold text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="focus:ring-p4c-gold/20 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-p4c-gold focus:ring-2"
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Housing History */}
            {currentStep === 2 && (
              <div className="animate-fade-in space-y-6">
                <h3 className="mb-6 border-b pb-4 text-xl font-bold text-p4c-navy">
                  Housing History
                </h3>
                <div>
                  <label
                    htmlFor="address"
                    className="mb-2 block text-sm font-bold text-gray-700"
                  >
                    Current Address
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    className="focus:ring-p4c-gold/20 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-p4c-gold focus:ring-2"
                    placeholder="123 Main St, City, State, ZIP"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="timeAtAddress"
                    className="mb-2 block text-sm font-bold text-gray-700"
                  >
                    Time at Address
                  </label>
                  <select
                    id="timeAtAddress"
                    name="timeAtAddress"
                    className="focus:ring-p4c-gold/20 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-p4c-gold focus:ring-2"
                  >
                    <option>Less than 1 year</option>
                    <option>1-3 years</option>
                    <option>3+ years</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="reasonForMoving"
                    className="mb-2 block text-sm font-bold text-gray-700"
                  >
                    Reason for Moving
                  </label>
                  <textarea
                    id="reasonForMoving"
                    name="reasonForMoving"
                    rows={3}
                    className="focus:ring-p4c-gold/20 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all focus:border-p4c-gold focus:ring-2"
                    placeholder="Briefly explain why you are looking for a new home..."
                  />
                </div>
              </div>
            )}

            {/* Step 3: Review */}
            {currentStep === 3 && (
              <div className="animate-fade-in space-y-6">
                <h3 className="mb-6 border-b pb-4 text-xl font-bold text-p4c-navy">
                  Review & Submit
                </h3>

                <div className="flex items-start gap-3 rounded-lg border border-blue-100 bg-blue-50 p-4">
                  <AlertCircle className="mt-0.5 size-5 shrink-0 text-blue-600" />
                  <div className="text-sm text-blue-800">
                    <p className="mb-1 font-bold">Fair Housing Notice</p>
                    <p>
                      Properties 4 Creation allows for equal housing
                      opportunity. We do not discriminate based on race, color,
                      religion, sex, handicap, familial status, or national
                      origin.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    className="mt-1 size-4 rounded border-gray-300 text-p4c-gold focus:ring-p4c-gold"
                    required
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I certify that the information provided is true and correct.
                    I authorize Properties 4 Creation to verify the information
                    provided.
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-10 flex justify-between border-t border-gray-100 pt-6">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center gap-2 px-4 py-2 font-bold text-gray-500 transition-colors hover:text-p4c-navy"
                >
                  <ArrowLeft className="size-4" /> Back
                </button>
              ) : (
                <div /> /* Spacer */
              )}

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center gap-2 rounded-lg bg-p4c-navy px-6 py-3 font-bold text-white transition-colors hover:bg-p4c-slate"
                >
                  Next Step <ArrowRight className="size-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 rounded-lg bg-p4c-gold px-8 py-3 font-bold text-p4c-navy shadow-lg transition-colors hover:bg-p4c-goldHover hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? 'Processing...' : 'Submit Application'}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Application;

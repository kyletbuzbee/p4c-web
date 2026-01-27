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
      <div className="min-h-screen bg-p4c-beige flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-4">
            Application Received
          </h2>
          <p className="text-gray-600 mb-8">
            Thank you for applying with Properties 4 Creation. Our leasing team
            is reviewing your information and will contact you within 2 business
            days.
          </p>
          <a
            href="/"
            className="inline-block bg-p4c-navy text-white px-8 py-3 rounded-lg font-bold hover:bg-p4c-slate transition-colors"
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

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-p4c-navy mb-4">
            Rental Application
          </h1>
          <p className="text-gray-600 flex items-center justify-center gap-2">
            <Lock className="w-4 h-4" /> Secure 256-bit Encrypted Submission
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center relative z-10">
            {STEPS.map((step) => (
              <div
                key={step.id}
                className={`flex flex-col items-center gap-2 ${
                  currentStep >= step.id ? 'text-p4c-navy' : 'text-gray-400'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                    currentStep >= step.id
                      ? 'bg-p4c-gold text-p4c-navy shadow-lg scale-110'
                      : 'bg-white border-2 border-gray-200'
                  }`}
                >
                  <step.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider">
                  {step.title}
                </span>
              </div>
            ))}
          </div>
          {/* Progress Line */}
          <div className="absolute top-[160px] left-0 w-full h-1 bg-gray-200 -z-0 hidden md:block">
            {/* This requires precise positioning relative to container, simplified here */}
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <form onSubmit={handleSubmit} className="p-8">
            {/* Step 1: Personal Info */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-bold text-p4c-navy border-b pb-4 mb-6">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-p4c-gold focus:ring-2 focus:ring-p4c-gold/20 outline-none transition-all"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-p4c-gold focus:ring-2 focus:ring-p4c-gold/20 outline-none transition-all"
                      placeholder="Doe"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-p4c-gold focus:ring-2 focus:ring-p4c-gold/20 outline-none transition-all"
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-p4c-gold focus:ring-2 focus:ring-p4c-gold/20 outline-none transition-all"
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Housing History */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-bold text-p4c-navy border-b pb-4 mb-6">
                  Housing History
                </h3>
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Current Address
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-p4c-gold focus:ring-2 focus:ring-p4c-gold/20 outline-none transition-all"
                    placeholder="123 Main St, City, State, ZIP"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="timeAtAddress"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Time at Address
                  </label>
                  <select
                    id="timeAtAddress"
                    name="timeAtAddress"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-p4c-gold focus:ring-2 focus:ring-p4c-gold/20 outline-none transition-all"
                  >
                    <option>Less than 1 year</option>
                    <option>1-3 years</option>
                    <option>3+ years</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="reasonForMoving"
                    className="block text-sm font-bold text-gray-700 mb-2"
                  >
                    Reason for Moving
                  </label>
                  <textarea
                    id="reasonForMoving"
                    name="reasonForMoving"
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-p4c-gold focus:ring-2 focus:ring-p4c-gold/20 outline-none transition-all"
                    placeholder="Briefly explain why you are looking for a new home..."
                  />
                </div>
              </div>
            )}

            {/* Step 3: Review */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-bold text-p4c-navy border-b pb-4 mb-6">
                  Review & Submit
                </h3>

                <div className="bg-blue-50 p-4 rounded-lg flex gap-3 items-start border border-blue-100">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-800">
                    <p className="font-bold mb-1">Fair Housing Notice</p>
                    <p>
                      Properties 4 Creation allows for equal housing
                      opportunity. We do not discriminate based on race, color,
                      religion, sex, handicap, familial status, or national
                      origin.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 mt-6">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    className="mt-1 w-4 h-4 text-p4c-gold border-gray-300 rounded focus:ring-p4c-gold"
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
            <div className="flex justify-between mt-10 pt-6 border-t border-gray-100">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center gap-2 text-gray-500 hover:text-p4c-navy font-bold px-4 py-2 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              ) : (
                <div /> /* Spacer */
              )}

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-p4c-navy text-white px-6 py-3 rounded-lg font-bold hover:bg-p4c-slate transition-colors flex items-center gap-2"
                >
                  Next Step <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-p4c-gold text-p4c-navy px-8 py-3 rounded-lg font-bold hover:bg-p4c-goldHover transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
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

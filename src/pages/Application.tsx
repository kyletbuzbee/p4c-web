import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Helmet } from 'react-helmet-async';
import {
  User,
  Home,
  ShieldCheck,
  Lock,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { TIMING } from '../constants/config';
import { ApplicationSchema, type ApplicationInput } from '../types/schemas';
import { cn } from '../utils/cn';
import { useToast } from '../context/ToastContext';

const STEPS = [
  { id: 1, title: 'Personal Info', icon: User },
  { id: 2, title: 'Housing History', icon: Home },
  { id: 3, title: 'Review & Submit', icon: ShieldCheck },
];

const Application: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { addToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    getValues,
  } = useForm<ApplicationInput>({
    resolver: zodResolver(ApplicationSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: ApplicationInput) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) =>
        setTimeout(resolve, TIMING.APPLICATION_SUBMISSION_DELAY)
      );
      // Optionally call API here: await api.applications.submit(data);
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo(0, 0);
    } catch (error) {
      setIsSubmitting(false);
      addToast('Failed to submit application. Please try again.', 'error');
    }
  };

  const handleNext = async () => {
    let fieldsToValidate: (keyof ApplicationInput)[] = [];
    
    if (currentStep === 1) {
      fieldsToValidate = ['firstName', 'lastName', 'email'];
    } else if (currentStep === 2) {
      fieldsToValidate = ['currentAddress', 'moveInDate'];
    }
    
    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setCurrentStep((prev) => Math.min(3, prev + 1));
    }
  };

  if (isSuccess) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center p-4">
        <div className="w-full max-w-lg animate-slide-up rounded-2xl bg-white p-12 text-center shadow-2xl ring-1 ring-black/5">
          <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-green-50">
            <CheckCircle className="size-12 text-green-600" />
          </div>
          <h2 className="mb-4 font-serif text-3xl font-bold text-p4c-navy">
            Application Received
          </h2>
          <p className="mb-8 text-gray-600">
            Thank you for applying with Properties 4 Creation. We will contact
            you within 2 business days.
          </p>
          <button
            onClick={() => (window.location.href = '/')}
            className="rounded-lg bg-p4c-navy px-8 py-3 font-bold text-white shadow-lg transition-all hover:bg-p4c-slate"
            aria-label="Return to Properties 4 Creation home page"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-16 sm:px-6">
      <Helmet>
        <title>Rental Application | Properties 4 Creation</title>
      </Helmet>

      <div className="mx-auto max-w-2xl">
        <header className="mb-12 animate-fade-in text-center">
          <h1 className="mb-3 font-serif text-4xl font-bold tracking-tight text-p4c-navy">
            Properties 4 Creation <br /> Rental Application
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-700">
            <Lock size={14} className="text-p4c-gold" />
            <span>Secure 256-bit Encrypted Submission</span>
          </div>
        </header>

        {/* Stepper Navigation */}
        <nav
          className="relative mb-16 flex justify-between px-2"
          aria-label="Progress"
        >
          <div className="absolute inset-x-2 top-6 h-0.5 bg-gray-200" />
          {STEPS.map((step) => (
            <div key={step.id} className="group flex flex-col items-center">
              <div
                className={cn(
                  'z-10 flex size-12 items-center justify-center rounded-full border-2 transition-all duration-500',
                  currentStep >= step.id
                    ? 'border-p4c-gold bg-p4c-gold text-white shadow-lg'
                    : 'border-gray-200 bg-white text-gray-400'
                )}
              >
                <step.icon size={22} />
              </div>
              <span
                className={cn(
                  'mt-3 text-[10px] font-bold uppercase tracking-[0.2em]',
                  currentStep >= step.id ? 'text-p4c-navy' : 'text-gray-400'
                )}
              >
                {step.title}
              </span>
            </div>
          ))}
        </nav>

        {/* Multi-step Form Container */}
        <div className="rounded-2xl bg-white/80 p-8 shadow-2xl shadow-p4c-navy/5 ring-1 ring-white/20 backdrop-blur-sm sm:p-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {currentStep === 1 && (
              <section className="animate-fade-in-up space-y-6">
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="font-serif text-xl font-bold text-p4c-navy">
                    Personal Information
                  </h3>
                  <p className="mt-1 text-sm text-gray-700">
                    Please provide your legal contact details.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="text-xs font-bold uppercase tracking-wider text-gray-400"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      {...register('firstName')}
                      className={cn(
                        'w-full rounded-lg border border-gray-200 p-3.5 outline-none transition-all focus:border-p4c-gold focus:ring-2 focus:ring-p4c-gold/10',
                        errors.firstName && 'border-red-500 focus:border-red-500'
                      )}
                    />
                    {errors.firstName && (
                      <p className="text-sm text-red-500">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="text-xs font-bold uppercase tracking-wider text-gray-400"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      {...register('lastName')}
                      className={cn(
                        'w-full rounded-lg border border-gray-200 p-3.5 outline-none focus:border-p4c-gold',
                        errors.lastName && 'border-red-500 focus:border-red-500'
                      )}
                    />
                    {errors.lastName && (
                      <p className="text-sm text-red-500">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-bold uppercase tracking-wider text-gray-400"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className={cn(
                      'w-full rounded-lg border border-gray-200 p-3.5 outline-none',
                      errors.email && 'border-red-500 focus:border-red-500'
                    )}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-xs font-bold uppercase tracking-wider text-gray-400"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    placeholder="(903) 555-0123"
                    className={cn(
                      'w-full rounded-lg border border-gray-200 p-3.5 outline-none',
                      errors.phone && 'border-red-500 focus:border-red-500'
                    )}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500">{errors.phone.message}</p>
                  )}
                </div>
              </section>
            )}

            {currentStep === 2 && (
              <section className="animate-fade-in-up space-y-6">
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="font-serif text-xl font-bold text-p4c-navy">
                    Housing History
                  </h3>
                  <p className="mt-1 text-sm text-gray-700">
                    Information regarding your current residence.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="currentAddress"
                      className="text-xs font-bold uppercase tracking-wider text-gray-400"
                    >
                      Current Address
                    </label>
                    <input
                      id="currentAddress"
                      type="text"
                      {...register('currentAddress')}
                      className={cn(
                        'w-full rounded-lg border border-gray-200 p-3.5 outline-none transition-all focus:border-p4c-gold',
                        errors.currentAddress && 'border-red-500 focus:border-red-500'
                      )}
                    />
                    {errors.currentAddress && (
                      <p className="text-sm text-red-500">{errors.currentAddress.message}</p>
                    )}
                  </div>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="currentCity"
                        className="text-xs font-bold uppercase tracking-wider text-gray-400"
                      >
                        City
                      </label>
                      <input
                        id="currentCity"
                        type="text"
                        {...register('currentCity')}
                        className={cn(
                          'w-full rounded-lg border border-gray-200 p-3.5 outline-none',
                          errors.currentCity && 'border-red-500 focus:border-red-500'
                        )}
                      />
                      {errors.currentCity && (
                        <p className="text-sm text-red-500">{errors.currentCity.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="currentState"
                        className="text-xs font-bold uppercase tracking-wider text-gray-400"
                      >
                        State
                      </label>
                      <input
                        id="currentState"
                        type="text"
                        {...register('currentState')}
                        maxLength={2}
                        placeholder="TX"
                        className={cn(
                          'w-full rounded-lg border border-gray-200 p-3.5 outline-none',
                          errors.currentState && 'border-red-500 focus:border-red-500'
                        )}
                      />
                      {errors.currentState && (
                        <p className="text-sm text-red-500">{errors.currentState.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="currentZip"
                      className="text-xs font-bold uppercase tracking-wider text-gray-400"
                    >
                      ZIP Code
                    </label>
                    <input
                      id="currentZip"
                      type="text"
                      {...register('currentZip')}
                      placeholder="75701"
                      className={cn(
                        'w-full rounded-lg border border-gray-200 p-3.5 outline-none',
                        errors.currentZip && 'border-red-500 focus:border-red-500'
                      )}
                    />
                    {errors.currentZip && (
                      <p className="text-sm text-red-500">{errors.currentZip.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="moveInDate"
                      className="text-xs font-bold uppercase tracking-wider text-gray-400"
                    >
                      Desired Move-in Date
                    </label>
                    <input
                      id="moveInDate"
                      type="date"
                      {...register('moveInDate')}
                      className={cn(
                        'w-full rounded-lg border border-gray-200 p-3.5 outline-none',
                        errors.moveInDate && 'border-red-500 focus:border-red-500'
                      )}
                    />
                    {errors.moveInDate && (
                      <p className="text-sm text-red-500">{errors.moveInDate.message}</p>
                    )}
                  </div>
                </div>
              </section>
            )}

            {currentStep === 3 && (
              <section className="animate-fade-in-up space-y-6">
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="font-serif text-xl font-bold text-p4c-navy">
                    Review & Submit
                  </h3>
                </div>
                <div className="flex gap-4 rounded-xl border border-p4c-gold/20 bg-p4c-gold/5 p-5">
                  <AlertCircle className="shrink-0 text-p4c-gold" size={24} />
                  <div className="text-sm leading-relaxed text-p4c-navy/80">
                    <p className="mb-1 font-bold">Fair Housing Notice</p>
                    Properties 4 Creation allows for equal housing opportunity.
                    We do not discriminate based on protected classes.
                  </div>
                </div>
                <label className="group flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    {...register('termsAgreed')}
                    className="mt-1 size-5 rounded border-gray-300 text-p4c-gold transition-all focus:ring-p4c-gold"
                  />
                  <span className="text-sm text-gray-600 transition-colors group-hover:text-p4c-navy">
                    I certify that the information provided is true and correct.
                    I authorize Properties 4 Creation to verify these details.
                  </span>
                </label>
                {errors.termsAgreed && (
                  <p className="text-sm text-red-500">{errors.termsAgreed.message}</p>
                )}
              </section>
            )}

            {/* Navigation Controls */}
            <footer className="flex justify-between border-t border-gray-50 pt-8">
              <button
                type="button"
                onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
                className={`flex items-center gap-2 px-4 py-2 font-bold text-gray-400 transition-all hover:text-p4c-navy ${currentStep === 1 ? 'invisible' : ''}`}
                aria-label="Go back to previous step"
              >
                <ArrowLeft size={18} /> Back
              </button>

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-2 rounded-lg bg-p4c-navy px-10 py-3.5 font-bold text-white shadow-xl shadow-p4c-navy/20 transition-all hover:bg-p4c-slate"
                  aria-label="Proceed to next step of application"
                >
                  Next Step <ArrowRight size={18} />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-lg bg-p4c-gold px-12 py-3.5 font-bold text-white shadow-xl shadow-p4c-gold/30 transition-all hover:bg-p4c-goldHover disabled:opacity-50"
                  aria-label={
                    isSubmitting
                      ? 'Processing your application'
                      : 'Submit your rental application'
                  }
                >
                  {isSubmitting ? 'Processing...' : 'Submit Application'}
                </button>
              )}
            </footer>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Application;

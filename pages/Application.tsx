import React, { useState } from 'react';
import {
  FileText,
  UserCheck,
  Key,
  ShieldCheck,
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { IMAGES } from '../constants/images';
import { useToast } from '../context/ToastContext';
import { Helmet } from 'react-helmet-async';

interface ApplicationForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  voucherType: string;
  // Step 2 - History
  hasCriminalHistory: string;
  hasEvictionHistory: string;
  rentalHistory: string;
  employmentStatus: string;
  incomeSource: string;
  monthlyIncome: string;
  // Step 3 - Preferences
  preferredBedrooms: string;
  preferredBathrooms: string;
  maxRent: string;
  petPolicy: string;
  moveInTimeline: string;
  additionalNotes: string;
}

type Step = 'about' | 'history' | 'preferences';

const Application: React.FC = () => {
  const { addToast } = useToast();
  const [currentStep, setCurrentStep] = useState<Step>('about');
  const [formData, setFormData] = useState<ApplicationForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    voucherType: 'No, I am looking for market rate',
    // Step 2 - History
    hasCriminalHistory: 'No',
    hasEvictionHistory: 'No',
    rentalHistory: '',
    employmentStatus: 'Employed',
    incomeSource: 'Employment',
    monthlyIncome: '',
    // Step 3 - Preferences
    preferredBedrooms: '2',
    preferredBathrooms: '1',
    maxRent: '',
    petPolicy: 'Yes',
    moveInTimeline: '1-2 months',
    additionalNotes: '',
  });

  const [touched, setTouched] = useState<
    Record<keyof ApplicationForm, boolean>
  >({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    voucherType: false,
    hasCriminalHistory: false,
    hasEvictionHistory: false,
    rentalHistory: false,
    employmentStatus: false,
    incomeSource: false,
    monthlyIncome: false,
    preferredBedrooms: false,
    preferredBathrooms: false,
    maxRent: false,
    petPolicy: false,
    moveInTimeline: false,
    additionalNotes: false,
  });

  const [errors, setErrors] = useState<Partial<ApplicationForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateStep = (step: Step): boolean => {
    const newErrors: Partial<ApplicationForm> = {};
    let isValid = true;

    if (step === 'about') {
      const fieldsToCheck: (keyof ApplicationForm)[] = [
        'firstName',
        'lastName',
        'email',
        'phone',
      ];

      fieldsToCheck.forEach((key) => {
        const value = formData[key as keyof ApplicationForm];
        if (!value.trim()) {
          newErrors[key as keyof ApplicationForm] =
            `${getFieldLabel(key)} is required`;
          isValid = false;
        } else if (
          key === 'email' &&
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ) {
          newErrors[key as keyof ApplicationForm] =
            'Please enter a valid email address';
          isValid = false;
        } else if (key === 'phone' && !/^[\d\-\s]{10,}$/.test(value)) {
          newErrors[key as keyof ApplicationForm] =
            'Please enter a valid phone number';
          isValid = false;
        }
      });
    }

    if (step === 'history') {
      const fieldsToCheck: (keyof ApplicationForm)[] = [
        'hasCriminalHistory',
        'hasEvictionHistory',
        'rentalHistory',
        'employmentStatus',
        'incomeSource',
        'monthlyIncome',
      ];

      fieldsToCheck.forEach((key) => {
        const value = formData[key as keyof ApplicationForm];
        if (!value.trim()) {
          newErrors[key as keyof ApplicationForm] =
            `${getFieldLabel(key)} is required`;
          isValid = false;
        }
      });

      // Validate monthly income if provided
      if (
        formData.monthlyIncome &&
        !/^\d+$/.test(formData.monthlyIncome.replace(/[^0-9]/g, ''))
      ) {
        newErrors.monthlyIncome = 'Please enter a valid monthly income';
        isValid = false;
      }
    }

    if (step === 'preferences') {
      const fieldsToCheck: (keyof ApplicationForm)[] = [
        'preferredBedrooms',
        'preferredBathrooms',
        'maxRent',
        'petPolicy',
        'moveInTimeline',
      ];

      fieldsToCheck.forEach((key) => {
        const value = formData[key as keyof ApplicationForm];
        if (!value.trim()) {
          newErrors[key as keyof ApplicationForm] =
            `${getFieldLabel(key)} is required`;
          isValid = false;
        }
      });

      // Validate max rent if provided
      if (
        formData.maxRent &&
        !/^\d+$/.test(formData.maxRent.replace(/[^0-9]/g, ''))
      ) {
        newErrors.maxRent = 'Please enter a valid maximum rent';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const getFieldLabel = (fieldName: keyof ApplicationForm): string => {
    const labels: Record<keyof ApplicationForm, string> = {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      phone: 'Phone',
      voucherType: 'Voucher Type',
      hasCriminalHistory: 'Criminal History',
      hasEvictionHistory: 'Eviction History',
      rentalHistory: 'Rental History',
      employmentStatus: 'Employment Status',
      incomeSource: 'Income Source',
      monthlyIncome: 'Monthly Income',
      preferredBedrooms: 'Preferred Bedrooms',
      preferredBathrooms: 'Preferred Bathrooms',
      maxRent: 'Maximum Rent',
      petPolicy: 'Pet Policy',
      moveInTimeline: 'Move-in Timeline',
      additionalNotes: 'Additional Notes',
    };
    return labels[fieldName as keyof ApplicationForm] || fieldName;
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    const fieldName = name as keyof ApplicationForm;
    setTouched((prev) => ({ ...prev, [fieldName]: true }));

    // Validate individual field on blur
    const error = validateField(fieldName, value);
    setErrors((prev) => ({ ...prev, [fieldName]: error }));
  };

  const validateField = (
    name: keyof ApplicationForm,
    value: string
  ): string | undefined => {
    if (!value.trim()) {
      switch (name) {
        case 'firstName':
          return 'First name is required';
        case 'lastName':
          return 'Last name is required';
        case 'email':
          return 'Email is required';
        case 'phone':
          return 'Phone number is required';
        case 'rentalHistory':
          return 'Rental history is required';
        case 'monthlyIncome':
          return 'Monthly income is required';
        case 'maxRent':
          return 'Maximum rent is required';
        default:
          return undefined;
      }
    }

    if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Please enter a valid email address';
    }

    if (name === 'phone' && !/^[\d\-\s]{10,}$/.test(value)) {
      return 'Please enter a valid phone number';
    }

    if (
      name === 'monthlyIncome' &&
      !/^\d+$/.test(value.replace(/[^0-9]/g, ''))
    ) {
      return 'Please enter a valid monthly income';
    }

    if (name === 'maxRent' && !/^\d+$/.test(value.replace(/[^0-9]/g, ''))) {
      return 'Please enter a valid maximum rent';
    }

    return undefined;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    const fieldName = name as keyof ApplicationForm;

    setFormData((prev) => ({ ...prev, [fieldName]: value }));

    if (touched[fieldName as keyof ApplicationForm]) {
      const error = validateField(fieldName, value);
      setErrors((prev) => ({ ...prev, [fieldName]: error }));
    }
  };

  const handleNextStep = () => {
    const isValid = validateStep(currentStep);

    if (!isValid) {
      addToast('Please fix the errors before proceeding', 'error');
      return;
    }

    if (currentStep === 'about') {
      setCurrentStep('history');
      addToast('Step 1 complete! Proceeding to background history.', 'success');
    } else if (currentStep === 'history') {
      setCurrentStep('preferences');
      addToast(
        'Step 2 complete! Proceeding to housing preferences.',
        'success'
      );
    } else if (currentStep === 'preferences') {
      handleSubmit();
    }
  };

  const handlePrevStep = () => {
    if (currentStep === 'history') {
      setCurrentStep('about');
    } else if (currentStep === 'preferences') {
      setCurrentStep('history');
    }
  };

  const handleSubmit = async () => {
    const isValid = validateStep('preferences');

    if (!isValid) {
      addToast('Please fix the errors before submitting', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      addToast(
        'Application submitted successfully! We will contact you within 24 hours.',
        'success'
      );

      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        voucherType: 'No, I am looking for market rate',
        hasCriminalHistory: 'No',
        hasEvictionHistory: 'No',
        rentalHistory: '',
        employmentStatus: 'Employed',
        incomeSource: 'Employment',
        monthlyIncome: '',
        preferredBedrooms: '2',
        preferredBathrooms: '1',
        maxRent: '',
        petPolicy: 'Yes',
        moveInTimeline: '1-2 months',
        additionalNotes: '',
      });

      setCurrentStep('about');
    } catch (error) {
      addToast('Something went wrong. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputClassName = (fieldName: keyof ApplicationForm) => {
    const hasError = touched[fieldName] && errors[fieldName];
    const baseClasses =
      'w-full rounded-lg shadow-sm p-3.5 border transition-all duration-200 outline-none';

    if (hasError) {
      return `${baseClasses} border-red-500 bg-red-50 text-red-900 focus:border-red-500 focus:ring-2 focus:ring-red-200`;
    }
    return `${baseClasses} border-gray-300 focus:border-p4c-gold focus:ring-2 focus:ring-p4c-gold/20 hover:border-gray-400`;
  };

  const getStepProgress = () => {
    if (currentStep === 'about') return 0;
    if (currentStep === 'history') return 1;
    if (currentStep === 'preferences') return 2;
    return 0;
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-bold text-p4c-navy mb-1.5"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClassName('firstName')}
            placeholder="Jane"
            aria-invalid={!!errors.firstName}
          />
          {touched.firstName && errors.firstName && (
            <div className="flex items-center mt-1.5 text-red-600 text-xs font-medium animate-fade-in">
              <AlertCircle className="w-3 h-3 mr-1" />
              {errors.firstName}
            </div>
          )}
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-bold text-p4c-navy mb-1.5"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClassName('lastName')}
            placeholder="Doe"
            aria-invalid={!!errors.lastName}
          />
          {touched.lastName && errors.lastName && (
            <div className="flex items-center mt-1.5 text-red-600 text-xs font-medium animate-fade-in">
              <AlertCircle className="w-3 h-3 mr-1" />
              {errors.lastName}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-bold text-p4c-navy mb-1.5"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClassName('email')}
            placeholder="jane@example.com"
            aria-invalid={!!errors.email}
          />
          {touched.email && errors.email && (
            <div className="flex items-center mt-1.5 text-red-600 text-xs font-medium animate-fade-in">
              <AlertCircle className="w-3 h-3 mr-1" />
              {errors.email}
            </div>
          )}
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-bold text-p4c-navy mb-1.5"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClassName('phone')}
            placeholder="(903) 555-0123"
            aria-invalid={!!errors.phone}
          />
          {touched.phone && errors.phone && (
            <div className="flex items-center mt-1.5 text-red-600 text-xs font-medium animate-fade-in">
              <AlertCircle className="w-3 h-3 mr-1" />
              {errors.phone}
            </div>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="voucherType"
          className="block text-sm font-bold text-p4c-navy mb-1.5"
        >
          Do you currently have a housing voucher?
        </label>
        <select
          id="voucherType"
          name="voucherType"
          value={formData.voucherType}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${getInputClassName('voucherType')} bg-white`}
        >
          <option>No, I am looking for market rate</option>
          <option>Yes, Section 8 (HCV)</option>
          <option>Yes, HUD-VASH</option>
          <option>Yes, Rapid Rehousing</option>
          <option>Other</option>
        </select>
      </div>

      <div className="bg-blue-50 p-5 rounded-xl flex gap-4 items-start border border-blue-100">
        <ShieldCheck className="text-p4c-navy w-6 h-6 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-p4c-navy leading-relaxed">
          <strong>Privacy Guarantee:</strong> We value your privacy. Your
          information is encrypted using 256-bit SSL and is never sold. We only
          use this data to match you with available homes and pre-qualify your
          application.
        </p>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="hasCriminalHistory"
            className="block text-sm font-bold text-p4c-navy mb-1.5"
          >
            Do you have any criminal history?
          </label>
          <select
            id="hasCriminalHistory"
            name="hasCriminalHistory"
            value={formData.hasCriminalHistory}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${getInputClassName('hasCriminalHistory')} bg-white`}
          >
            <option>No</option>
            <option>Yes</option>
          </select>
          {touched.hasCriminalHistory && errors.hasCriminalHistory && (
            <div className="flex items-center mt-1.5 text-red-600 text-xs font-medium animate-fade-in">
              <AlertCircle className="w-3 h-3 mr-1" />
              {errors.hasCriminalHistory}
            </div>
          )}
        </div>
        <div>
          <label
            htmlFor="hasEvictionHistory"
            className="block text-sm font-bold text-p4c-navy mb-1.5"
          >
            Do you have any eviction history?
          </label>
          <select
            id="hasEvictionHistory"
            name="hasEvictionHistory"
            value={formData.hasEvictionHistory}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${getInputClassName('hasEvictionHistory')} bg-white`}
          >
            <option>No</option>
            <option>Yes</option>
          </select>
          {touched.hasEvictionHistory && errors.hasEvictionHistory && (
            <div className="flex items-center mt-1.5 text-red-600 text-xs font-medium animate-fade-in">
              <AlertCircle className="w-3 h-3 mr-1" />
              {errors.hasEvictionHistory}
            </div>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="rentalHistory"
          className="block text-sm font-bold text-p4c-navy mb-1.5"
        >
          Brief rental history (last 3 years)
        </label>
        <textarea
          id="rentalHistory"
          name="rentalHistory"
          value={formData.rentalHistory}
          onChange={handleChange}
          onBlur={handleBlur}
          rows={4}
          className={getInputClassName('rentalHistory')}
          placeholder="Please describe your rental history over the past 3 years..."
        />
        {touched.rentalHistory && errors.rentalHistory && (
          <div className="flex items-center mt-1.5 text-red-600 text-xs font-medium animate-fade-in">
            <AlertCircle className="w-3 h-3 mr-1" />
            {errors.rentalHistory}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="employmentStatus"
            className="block text-sm font-bold text-p4c-navy mb-1.5"
          >
            Current employment status
          </label>
          <select
            id="employmentStatus"
            name="employmentStatus"
            value={formData.employmentStatus}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${getInputClassName('employmentStatus')} bg-white`}
          >
            <option>Employed</option>
            <option>Self-employed</option>
            <option>Unemployed</option>
            <option>Retired</option>
            <option>Student</option>
            <option>Disabled</option>
          </select>
          {touched.employmentStatus && errors.employmentStatus && (
            <div className="flex items-center mt-1.5 text-red-600 text-xs font-medium animate-fade-in">
              <AlertCircle className="w-3 h-3 mr-1" />
              {errors.employmentStatus}
            </div>
          )}
        </div>
        <div>
          <label
            htmlFor="incomeSource"
            className="block text-sm font-bold text-p4c-navy mb-1.5"
          >
            Primary income source
          </label>
          <select
            id="incomeSource"
            name="incomeSource"
            value={formData.incomeSource}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${getInputClassName('incomeSource')} bg-white`}
          >
            <option>Employment</option>
            <option>Self-employment</option>
            <option>Disability</option>
            <option>Social Security</option>
            <option>Unemployment</option>
            <option>Retirement</option>
            <option>Other</option>
          </select>
          {touched.incomeSource && errors.incomeSource && (
            <div className="flex items-center mt-1.5 text-red-600 text-xs font-medium animate-fade-in">
              <AlertCircle className="w-3 h-3 mr-1" />
              {errors.incomeSource}
            </div>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="monthlyIncome"
          className="block text-sm font-bold text-p4c-navy mb-1.5"
        >
          Approximate monthly income
        </label>
        <input
          type="text"
          id="monthlyIncome"
          name="monthlyIncome"
          value={formData.monthlyIncome}
          onChange={handleChange}
          onBlur={handleBlur}
          className={getInputClassName('monthlyIncome')}
          placeholder="$3,500"
        />
        {touched.monthlyIncome && errors.monthlyIncome && (
          <div className="flex items-center mt-1.5 text-red-600 text-xs font-medium animate-fade-in">
            <AlertCircle className="w-3 h-3 mr-1" />
            {errors.monthlyIncome}
          </div>
        )}
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="preferredBedrooms"
            className="block text-sm font-bold text-p4c-navy mb-1.5"
          >
            Preferred number of bedrooms
          </label>
          <select
            id="preferredBedrooms"
            name="preferredBedrooms"
            value={formData.preferredBedrooms}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${getInputClassName('preferredBedrooms')} bg-white`}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4+</option>
          </select>
          {touched.preferredBedrooms && errors.preferredBedrooms && (
            <div className="flex items-center mt-1.5 text-red-600 text-xs font-medium animate-fade-in">
              <AlertCircle className="w-3 h-3 mr-1" />
              {errors.preferredBedrooms}
            </div>
          )}
        </div>
        <div>
          <label
            htmlFor="preferredBathrooms"
            className="block text-sm font-bold text-p4c-navy mb-1.5"
          >
            Preferred number of bathrooms
          </label>
          <select
            id="preferredBathrooms"
            name="preferredBathrooms"
            value={formData.preferredBathrooms}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${getInputClassName('preferredBathrooms')} bg-white`}
          >
            <option>1</option>
            <option>1.5</option>
            <option>2</option>
            <option>2.5</option>
            <option>3+</option>
          </select>
          {touched.preferredBathrooms && errors.preferredBathrooms && (
            <div className="flex items-center mt-1.5 text-red-600 text-xs font-medium animate-fade-in">
              <AlertCircle className="w-3 h-3 mr-1" />
              {errors.preferredBathrooms}
            </div>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="maxRent"
          className="block text-sm font-bold text-p4c-navy mb-1.5"
        >
          Maximum rent you can afford per month
        </label>
        <input
          type="text"
          id="maxRent"
          name="maxRent"
          value={formData.maxRent}
          onChange={handleChange}
          onBlur={handleBlur}
          className={getInputClassName('maxRent')}
          placeholder="$1,200"
        />
        {touched.maxRent && errors.maxRent && (
          <div className="flex items-center mt-1.5 text-red-600 text-xs font-medium animate-fade-in">
            <AlertCircle className="w-3 h-3 mr-1" />
            {errors.maxRent}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="petPolicy"
            className="block text-sm font-bold text-p4c-navy mb-1.5"
          >
            Do you have pets?
          </label>
          <select
            id="petPolicy"
            name="petPolicy"
            value={formData.petPolicy}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${getInputClassName('petPolicy')} bg-white`}
          >
            <option>Yes</option>
            <option>No</option>
            <option>Maybe</option>
          </select>
          {touched.petPolicy && errors.petPolicy && (
            <div className="flex items-center mt-1.5 text-red-600 text-xs font-medium animate-fade-in">
              <AlertCircle className="w-3 h-3 mr-1" />
              {errors.petPolicy}
            </div>
          )}
        </div>
        <div>
          <label
            htmlFor="moveInTimeline"
            className="block text-sm font-bold text-p4c-navy mb-1.5"
          >
            When would you like to move in?
          </label>
          <select
            id="moveInTimeline"
            name="moveInTimeline"
            value={formData.moveInTimeline}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${getInputClassName('moveInTimeline')} bg-white`}
          >
            <option>Immediately</option>
            <option>1-2 months</option>
            <option>3-6 months</option>
            <option>6+ months</option>
          </select>
          {touched.moveInTimeline && errors.moveInTimeline && (
            <div className="flex items-center mt-1.5 text-red-600 text-xs font-medium animate-fade-in">
              <AlertCircle className="w-3 h-3 mr-1" />
              {errors.moveInTimeline}
            </div>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="additionalNotes"
          className="block text-sm font-bold text-p4c-navy mb-1.5"
        >
          Additional notes or requirements
        </label>
        <textarea
          id="additionalNotes"
          name="additionalNotes"
          value={formData.additionalNotes}
          onChange={handleChange}
          onBlur={handleBlur}
          rows={4}
          className={getInputClassName('additionalNotes')}
          placeholder="Any additional information about your housing needs..."
        />
      </div>
    </div>
  );

  return (
    <div className="bg-p4c-beige min-h-screen">
      <Helmet>
        <title>The Dignity Application | Properties 4 Creation</title>
        <meta
          name="description"
          content="Complete our 3-step application process to find your new home with Properties 4 Creation."
        />
      </Helmet>

      {/* Hero Banner */}
      <div className="relative h-[300px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img
            src={IMAGES.BANNERS.HERO_APPLICATION}
            alt="Handing over house keys"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full hero-overlay-primary" />
          <div className="absolute top-0 left-0 w-full h-full hero-overlay-secondary" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2 hero-text-contrast">
            The Dignity Application
          </h1>
          <p className="text-gray-200 font-medium hero-text-enhanced">
            No application fees. No judgement. Just a path home.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-serif font-bold text-p4c-navy">
              Complete Your Application
            </h2>
            <p className="text-gray-500 mt-2">
              Progress through{' '}
              {currentStep === 'about'
                ? 'Step 1'
                : currentStep === 'history'
                  ? 'Step 2'
                  : 'Step 3'}{' '}
              of 3 steps
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-between items-center mb-12 relative px-4">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -z-10 -translate-y-1/2 rounded-full" />

            {[
              { icon: UserCheck, label: 'About You', step: 'about' },
              { icon: FileText, label: 'History', step: 'history' },
              { icon: Key, label: 'Preferences', step: 'preferences' },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center bg-white px-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 border-2 transition-all ${
                    getStepProgress() >= i
                      ? 'bg-p4c-gold border-p4c-gold text-p4c-navy shadow-lg scale-110'
                      : 'bg-white border-gray-200 text-gray-400'
                  }`}
                >
                  {getStepProgress() >= i ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <step.icon className="w-5 h-5" />
                  )}
                </div>
                <span
                  className={`text-xs font-bold uppercase tracking-wide ${
                    getStepProgress() >= i ? 'text-p4c-navy' : 'text-gray-400'
                  }`}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>

          {/* Step Content */}
          <form className="space-y-6" noValidate>
            {currentStep === 'about' && renderStep1()}
            {currentStep === 'history' && renderStep2()}
            {currentStep === 'preferences' && renderStep3()}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-8 border-t border-gray-100">
              <button
                type="button"
                onClick={handlePrevStep}
                disabled={currentStep === 'about'}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                  currentStep === 'about'
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-p4c-navy text-white hover:bg-p4c-slate'
                }`}
                aria-label={currentStep === 'about' ? 'Previous step not available' : 'Go to previous step'}
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </button>

              <button
                type="button"
                onClick={handleNextStep}
                disabled={isSubmitting}
                className="flex items-center gap-2 bg-p4c-navy text-white hover:bg-p4c-slate py-3 px-6 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
                aria-label={currentStep === 'preferences' ? 'Submit application' : 'Continue to next step'}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Processing...
                  </>
                ) : currentStep === 'preferences' ? (
                  <>
                    Submit Application
                    <CheckCircle className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Application;
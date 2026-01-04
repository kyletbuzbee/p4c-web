
import React, { useState } from 'react';
import { FileText, UserCheck, Key, ShieldCheck, AlertCircle } from 'lucide-react';
import { IMAGES } from '../constants/images';

interface ApplicationForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  voucherType: string;
}

const Application: React.FC = () => {
  const [formData, setFormData] = useState<ApplicationForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    voucherType: 'No, I am looking for market rate'
  });

  const [touched, setTouched] = useState<Record<keyof ApplicationForm, boolean>>({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    voucherType: false
  });

  const [errors, setErrors] = useState<Partial<ApplicationForm>>({});

  const validateField = (name: keyof ApplicationForm, value: string): string | undefined => {
    if (!value.trim()) {
      switch(name) {
          case 'firstName': return 'First name is required';
          case 'lastName': return 'Last name is required';
          case 'email': return 'Email is required';
          case 'phone': return 'Phone number is required';
          default: return undefined;
      }
    }
    
    if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Please enter a valid email address';
    }

    if (name === 'phone' && !/^[\d\-\(\)\s]{10,}$/.test(value)) {
        return 'Please enter a valid phone number';
    }

    return undefined;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const fieldName = name as keyof ApplicationForm;
    
    setTouched(prev => ({ ...prev, [fieldName]: true }));
    const error = validateField(fieldName, value);
    setErrors(prev => ({ ...prev, [fieldName]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const fieldName = name as keyof ApplicationForm;

    setFormData(prev => ({ ...prev, [fieldName]: value }));

    if (touched[fieldName]) {
        const error = validateField(fieldName, value);
        setErrors(prev => ({ ...prev, [fieldName]: error }));
    }
  };

  const handleNextStep = () => {
    const newErrors: Partial<ApplicationForm> = {};
    let isValid = true;
    
    const fieldsToCheck: (keyof ApplicationForm)[] = ['firstName', 'lastName', 'email', 'phone'];
    
    fieldsToCheck.forEach(key => {
        const error = validateField(key, formData[key]);
        if (error) {
            newErrors[key] = error;
            isValid = false;
        }
    });

    setErrors(newErrors);
    setTouched(prev => ({
        ...prev,
        firstName: true,
        lastName: true,
        email: true,
        phone: true
    }));

    if (isValid) {
        alert("Success! Application pre-check complete. Proceeding to background check integration...");
    }
  };

  const getInputClassName = (fieldName: keyof ApplicationForm) => {
    const hasError = touched[fieldName] && errors[fieldName];
    const baseClasses = "w-full rounded-lg shadow-sm p-3.5 border transition-all duration-200 outline-none";
    
    if (hasError) {
      return `${baseClasses} border-red-500 bg-red-50 text-red-900 focus:border-red-500 focus:ring-2 focus:ring-red-200`;
    }
    return `${baseClasses} border-gray-300 focus:border-p4c-gold focus:ring-2 focus:ring-p4c-gold/20 hover:border-gray-400`;
  };

  return (
    <div className="bg-p4c-beige min-h-screen">
       {/* Hero Banner */}
       <div className="relative h-[300px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img 
            src={IMAGES.BANNERS.APPLICATION}
            alt="Handing over house keys" 
            className="w-full h-full object-cover"
          />
           <div className="absolute top-0 left-0 w-full h-full bg-p4c-navy/80 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
            The Dignity Application
          </h1>
          <p className="text-gray-200 font-medium">No application fees. No judgement. Just a path home.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            
            <div className="text-center mb-10">
                <h2 className="text-2xl font-serif font-bold text-p4c-navy">Start Your Journey</h2>
                <p className="text-gray-500 mt-2">Complete these 3 simple steps to get pre-approved.</p>
            </div>

            {/* Progress Steps */}
            <div className="flex justify-between items-center mb-12 relative px-4">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -z-10 -translate-y-1/2 rounded-full"></div>
                
                {[
                    { icon: UserCheck, label: "About You", active: true },
                    { icon: FileText, label: "History", active: false },
                    { icon: Key, label: "Preferences", active: false }
                ].map((step, i) => (
                    <div key={i} className="flex flex-col items-center bg-white px-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 border-2 transition-all ${step.active ? 'bg-p4c-gold border-p4c-gold text-p4c-navy shadow-lg scale-110' : 'bg-white border-gray-200 text-gray-400'}`}>
                            <step.icon className="w-5 h-5" />
                        </div>
                        <span className={`text-xs font-bold uppercase tracking-wide ${step.active ? 'text-p4c-navy' : 'text-gray-400'}`}>{step.label}</span>
                    </div>
                ))}
            </div>

            {/* Form Area */}
            <form className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-p4c-navy mb-1.5">First Name</label>
                        <input 
                            type="text" 
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
                        <label className="block text-sm font-bold text-p4c-navy mb-1.5">Last Name</label>
                        <input 
                            type="text" 
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
                        <label className="block text-sm font-bold text-p4c-navy mb-1.5">Email Address</label>
                        <input 
                            type="email" 
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
                        <label className="block text-sm font-bold text-p4c-navy mb-1.5">Phone Number</label>
                        <input 
                            type="tel" 
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
                    <label className="block text-sm font-bold text-p4c-navy mb-1.5">Do you currently have a housing voucher?</label>
                    <select 
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
                        <strong>Privacy Guarantee:</strong> We value your privacy. Your information is encrypted using 256-bit SSL and is never sold. We only use this data to match you with available homes and pre-qualify your application.
                    </p>
                </div>

                <div className="pt-4">
                    <button 
                        type="button" 
                        onClick={handleNextStep}
                        className="w-full bg-p4c-navy text-white hover:bg-p4c-slate py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        Continue to Step 2
                    </button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Application;

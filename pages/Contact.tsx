import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle, Check } from 'lucide-react';
import { useToast } from '../context/ToastContext';
import { Helmet } from 'react-helmet-async';
import { IMAGES } from '../constants/images';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const { addToast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [touched, setTouched] = useState<Record<keyof ContactForm, boolean>>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = (
    name: keyof ContactForm,
    value: string
  ): string | undefined => {
    if (!value.trim()) {
      switch (name) {
        case 'name':
          return 'Please enter your full name.';
        case 'email':
          return 'Email address is required.';
        case 'subject':
          return 'Please select a subject.';
        case 'message':
          return 'Please enter a message.';
        default:
          return 'This field is required.';
      }
    }
    if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Please enter a valid email address (e.g., name@example.com).';
    }
    return undefined;
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    const fieldName = name as keyof ContactForm;
    setTouched((prev) => ({ ...prev, [fieldName]: true }));

    const error = validateField(fieldName, value);
    setErrors((prev) => ({ ...prev, [fieldName]: error }));
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    const fieldName = name as keyof ContactForm;

    setFormData((prev) => ({ ...prev, [fieldName]: value }));

    if (touched[fieldName]) {
      const error = validateField(fieldName, value);
      setErrors((prev) => ({ ...prev, [fieldName]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Partial<ContactForm> = {};
    let isValid = true;

    (Object.keys(formData) as Array<keyof ContactForm>).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    if (isValid) {
      // Optimistic UI: Show success immediately
      setIsSubmitting(true);
      setIsSuccess(true);
      addToast('Message sent! We will contact you shortly.', 'success');

      // Simulate API call in background
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        // Reset form after "server" responds
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTouched({
          name: false,
          email: false,
          subject: false,
          message: false,
        });
      } catch (e) {
        setIsSuccess(false);
        addToast('Something went wrong. Please try again.', 'error');
      } finally {
        setIsSubmitting(false);
        setTimeout(() => setIsSuccess(false), 3000); // Reset success state after delay
      }
    } else {
      addToast('Please fix the errors in the form before submitting.', 'error');
    }
  };

  const getInputClassName = (fieldName: keyof ContactForm) => {
    const hasError = touched[fieldName] && errors[fieldName];
    const baseClasses =
      'w-full rounded-md shadow-sm p-3 border focus:ring transition-colors duration-200';

    if (hasError) {
      return `${baseClasses} border-red-500 focus:border-red-500 focus:ring-red-200 bg-red-50`;
    }
    return `${baseClasses} border-gray-300 focus:border-p4c-gold focus:ring-p4c-gold/50`;
  };

  return (
    <div className="bg-p4c-beige min-h-screen">
      <Helmet>
        <title>Contact Us | Properties 4 Creation</title>
        <meta
          name="description"
          content="Contact Properties 4 Creation for housing inquiries, investor relations, or employment opportunities in East Texas."
        />
        <meta
          name="keywords"
          content="contact Properties 4 Creation, housing inquiry East Texas, veteran housing contact, rental application, investor relations, employment opportunities"
        />
      </Helmet>

      {/* Hero Banner */}
      <div className="relative h-[300px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img
            src={IMAGES.BANNERS.HERO_CONTACT}
            alt="Mailbox with letters representing contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-p4c-navy/80 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
            Get in Touch
          </h1>
          <p className="text-gray-200 text-lg">
            We are here to help you find your way home.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-4">
                Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Whether you are a veteran looking for housing, a family needing
                a place to call home, an investor interested in our mission, or
                have a trade and are wanting to join our team, we want to hear
                from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-p4c-gold p-3 rounded-full text-p4c-navy">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-p4c-navy text-lg">
                    Our Office
                  </h3>
                  <p className="text-gray-600">
                    123 Veteran Way
                    <br />
                    Longview, TX 75776
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-p4c-gold p-3 rounded-full text-p4c-navy">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-p4c-navy text-lg">Phone</h3>
                  <p className="text-gray-600">(936) 707-8460</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Mon-Fri, 9am - 5pm CST
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-p4c-gold p-3 rounded-full text-p4c-navy">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-p4c-navy text-lg">Email</h3>
                  <p className="text-gray-600">
                    Richard@properties4creation.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 relative overflow-hidden">
            {isSuccess && (
              <div className="absolute inset-0 bg-white/90 z-20 flex flex-col items-center justify-center animate-fade-in text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-p4c-navy mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            )}

            <h2 className="text-2xl font-serif font-bold text-p4c-navy mb-6">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClassName('name')}
                  placeholder="John Doe"
                  aria-invalid={!!errors.name}
                  disabled={isSubmitting}
                />
                {touched.name && errors.name && (
                  <div className="flex items-center mt-1 text-red-600 text-xs animate-fade-in">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {errors.name}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
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
                  placeholder="john@example.com"
                  aria-invalid={!!errors.email}
                  disabled={isSubmitting}
                />
                {touched.email && errors.email && (
                  <div className="flex items-center mt-1 text-red-600 text-xs animate-fade-in">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {errors.email}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${getInputClassName('subject')} bg-white`}
                  aria-invalid={!!errors.subject}
                  disabled={isSubmitting}
                >
                  <option value="">Select a topic...</option>
                  <option value="Rental Inquiry">Rental Inquiry</option>
                  <option value="Maintenance Request">
                    Maintenance Request
                  </option>
                  <option value="Investor Relations">Investor Relations</option>
                  <option value="Employment">Employment</option>
                  <option value="Other">Other</option>
                </select>
                {touched.subject && errors.subject && (
                  <div className="flex items-center mt-1 text-red-600 text-xs animate-fade-in">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {errors.subject}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={4}
                  className={getInputClassName('message')}
                  placeholder="How can we help you?"
                  aria-invalid={!!errors.message}
                  disabled={isSubmitting}
                />
                {touched.message && errors.message && (
                  <div className="flex items-center mt-1 text-red-600 text-xs animate-fade-in">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {errors.message}
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-p4c-navy text-white hover:bg-p4c-slate py-3 rounded-md font-bold transition-all duration-200 shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

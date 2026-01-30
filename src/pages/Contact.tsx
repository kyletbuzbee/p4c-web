import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { IMAGES } from '../constants/images';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 'General Inquiry',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // FIX: Explicitly check the name to satisfy security rules
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    // Whitelist allowed fields to prevent object injection
    if (['name', 'email', 'phone', 'message', 'subject'].includes(name)) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <div className="min-h-screen bg-p4c-beige">
      <Helmet>
        <title>Contact Us | Properties 4 Creation</title>
        <meta
          name="description"
          content="Get in touch with our leasing and management team in Tyler, TX."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
        <div className="absolute left-0 top-0 z-0 size-full">
          <img
            src={IMAGES.BANNERS.HERO_CONTACT}
            alt="Professional contact and support"
            className="size-full object-cover"
          />
          <div className="bg-p4c-navy/80 absolute left-0 top-0 size-full mix-blend-multiply" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl animate-fade-in-up px-4 text-center">
          <div className="mb-6 flex justify-center">
            <div className="bg-p4c-gold/20 border-p4c-gold/30 rounded-2xl border p-4 backdrop-blur-sm">
              <Mail className="size-10 text-p4c-gold" />
            </div>
          </div>
          <h1 className="mb-4 font-serif text-4xl font-bold tracking-wide text-white md:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto max-w-2xl text-xl font-light text-gray-200">
            We're here to help with leasing, maintenance, and investment
            inquiries
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Info Side */}
          <div>
            <h2 className="mb-6 font-serif text-2xl font-bold text-p4c-navy">
              Get in Touch
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-white p-3 shadow-sm">
                  <Phone className="size-6 text-p4c-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-p4c-navy">Phone</h3>
                  <p className="text-gray-600">Leasing: (903) 555-0123</p>
                  <p className="text-gray-600">Maintenance: (903) 555-0124</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-white p-3 shadow-sm">
                  <Mail className="size-6 text-p4c-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-p4c-navy">Email</h3>
                  <p className="text-gray-600">
                    leasing@properties4creation.com
                  </p>
                  <p className="text-gray-600">
                    support@properties4creation.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-white p-3 shadow-sm">
                  <MapPin className="size-6 text-p4c-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-p4c-navy">Office</h3>
                  <p className="text-gray-600">123 Veterans Way</p>
                  <p className="text-gray-600">Tyler, TX 75701</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-xl">
            {isSuccess ? (
              <div className="py-12 text-center">
                <CheckCircle className="mx-auto mb-4 size-16 text-green-500" />
                <h3 className="text-2xl font-bold text-p4c-navy">
                  Message Sent!
                </h3>
                <p className="mt-2 text-gray-600">
                  We will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 font-bold text-p4c-gold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-bold text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#C5A059] focus:ring-[#C5A059]"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#C5A059] focus:ring-[#C5A059]"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-bold text-gray-700"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#C5A059] focus:ring-[#C5A059]"
                  >
                    <option>General Inquiry</option>
                    <option>Leasing Question</option>
                    <option>Maintenance Request</option>
                    <option>Investment Opportunity</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#C5A059] focus:ring-[#C5A059]"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-[#0B1120] px-6 py-4 text-lg font-bold text-white transition-colors hover:bg-[#C5A059]"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <Send className="size-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

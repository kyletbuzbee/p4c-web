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
    <div className="bg-p4c-beige min-h-screen">
      <Helmet>
        <title>Contact Us | Properties 4 Creation</title>
        <meta
          name="description"
          content="Get in touch with our leasing and management team in Tyler, TX."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[400px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img
            src={IMAGES.BANNERS.HERO_CONTACT}
            alt="Professional contact and support"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-p4c-navy/80 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="bg-p4c-gold/20 p-4 rounded-2xl border border-p4c-gold/30 backdrop-blur-sm">
              <Mail className="w-10 h-10 text-p4c-gold" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-wide">
            Contact Us
          </h1>
          <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto">
            We're here to help with leasing, maintenance, and investment
            inquiries
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Side */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-p4c-navy mb-6">
              Get in Touch
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <Phone className="w-6 h-6 text-p4c-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-p4c-navy">Phone</h3>
                  <p className="text-gray-600">Leasing: (903) 555-0123</p>
                  <p className="text-gray-600">Maintenance: (903) 555-0124</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <Mail className="w-6 h-6 text-p4c-gold" />
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
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <MapPin className="w-6 h-6 text-p4c-gold" />
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
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            {isSuccess ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-p4c-navy">
                  Message Sent!
                </h3>
                <p className="text-gray-600 mt-2">
                  We will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 text-p4c-gold font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-gray-700 mb-2"
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
                    className="block text-sm font-bold text-gray-700 mb-2"
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
                    className="block text-sm font-bold text-gray-700 mb-2"
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
                    className="block text-sm font-bold text-gray-700 mb-2"
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
                  className="w-full bg-[#0B1120] text-white hover:bg-[#C5A059] transition-colors px-6 py-4 rounded-xl font-bold text-lg"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
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

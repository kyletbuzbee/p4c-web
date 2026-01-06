import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQs = [
  {
    q: 'Do you accept Section 8 vouchers?',
    a: 'Yes, absolutely. We accept Housing Choice Vouchers (Section 8), HUD-VASH, and Rapid Rehousing assistance for all of our properties.',
  },
  {
    q: 'What is your pet policy?',
    a: 'We are pet-friendly! We allow up to 2 pets per household with a refundable pet deposit. Breed restrictions may apply due to insurance regulations.',
  },
  {
    q: 'Is there an application fee?',
    a: 'No. Properties 4 Creation believes in dignity-first housing. We do not charge application fees.',
  },
  {
    q: 'Do you perform background checks?',
    a: 'Yes, we conduct background and credit checks to ensure community safety. However, we take a holistic view of every applicant and consider explaining circumstances.',
  },
  {
    q: 'How long does the application process take?',
    a: "Typically 2-3 business days. If you are using a voucher, it may take longer depending on the housing authority's inspection schedule.",
  },
  {
    q: 'Do you offer month-to-month leases?',
    a: 'Our standard lease is 12 months, but we do offer flexible terms for veterans in transitional housing programs.',
  },
];

const FAQ: React.FC = () => (
  <div className="bg-p4c-beige min-h-screen py-16">
    <Helmet>
      <title>FAQ | Properties 4 Creation</title>
      <meta
        name="description"
        content="Frequently asked questions about applying for housing, Section 8, and veteran services at Properties 4 Creation."
      />
    </Helmet>

    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="bg-white p-4 rounded-full inline-flex mb-4 shadow-sm">
          <HelpCircle className="w-8 h-8 text-p4c-gold" />
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-p4c-navy mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600">
          Everything you need to know about finding your home with us.
        </p>
      </div>

      <div className="space-y-4">
        {FAQs.map((faq, index) => (
          <details
            key={index}
            className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden open:ring-2 open:ring-p4c-gold/50 transition-all"
          >
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-p4c-navy hover:bg-gray-50">
              {faq.q}
              <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </div>
  </div>
);

export default FAQ;

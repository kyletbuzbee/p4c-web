import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm ${
        isOpen ? 'ring-p4c-gold/50 ring-2' : ''
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-content-${question.replace(/\s+/g, '-').toLowerCase()}`}
        className="flex w-full cursor-pointer list-none items-center justify-between p-6 text-left font-bold text-p4c-navy transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-p4c-gold"
      >
        <span>{question}</span>
        <ChevronDown
          className={`size-5 shrink-0 text-gray-400 transition-transform duration-300 ease-out ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>
      <div
        id={`faq-content-${question.replace(/\s+/g, '-').toLowerCase()}`}
        className={`accordion-content overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        role="region"
        aria-label={question}
      >
        <div className="border-t border-gray-100 px-6 pb-6 pt-4 leading-relaxed text-gray-600">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQs = [
  {
    q: 'Do you accept Section 8 or HUD-VASH vouchers?',
    a: 'Yes. We view Housing Choice Vouchers (Section 8) and HUD-VASH as reliable income sources. Our properties in East Texas are renovated to meet or exceed Housing Quality Standards (HQS), ensuring a smooth inspection and move-in process.',
  },
  {
    q: 'What is your pet policy?',
    a: 'We operate pet-friendly communities across East Texas. We allow up to 2 pets per household with a refundable pet deposit. We believe accommodating pets leads to happier, long-term residents.',
  },
  {
    q: 'Is there an application fee?',
    a: 'We have waived application fees to streamline the leasing process and remove upfront financial barriers for qualified applicants. Our goal is efficient placement in our premium rentals.',
  },
  {
    q: 'Do you perform background checks?',
    a: 'Yes, we conduct standard credit and criminal background checks to ensure community safety. However, we utilize a "Fair Chance" assessment model, reviewing each applicant\'s history in context rather than applying automatic disqualifiers.',
  },
  {
    q: 'How long does the leasing process take?',
    a: "Our digital application process typically takes 2-3 business days. For voucher holders, timelines may vary based on the local housing authority's inspection availability, though our pre-inspected units often pass on the first attempt.",
  },
  {
    q: 'Do you offer flexible lease terms?',
    a: 'Our standard agreement is a 12-month lease to ensure community stability. However, we do coordinate with specific veteran rehousing programs (like SSVF) to offer flexible terms when required by the supportive services provider.',
  },
];

const FAQ: React.FC = () => (
  <div className="min-h-screen bg-p4c-beige py-16">
    <Helmet>
      <title>Leasing FAQ | Properties 4 Creation</title>
      <meta
        name="description"
        content="Common questions about leasing with Properties 4 Creation. Information on Section 8 acceptance, pet policies, and application requirements in East Texas."
      />
      <meta
        name="keywords"
        content="Section 8 landlord Tyler TX, HUD-VASH acceptance, pet friendly rentals Longview, no application fee apartments, housing requirements East Texas"
      />
    </Helmet>

    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <div className="mb-4 inline-flex rounded-full border border-gray-100 bg-white p-4 shadow-sm">
          <HelpCircle className="size-8 text-p4c-gold" />
        </div>
        <h1 className="mb-4 font-serif text-3xl font-bold text-p4c-navy md:text-4xl">
          Leasing & Management FAQ
        </h1>
        <p className="text-gray-600">
          Information for prospective residents in the East Texas area.
        </p>
      </div>

      <div className="space-y-4">
        {FAQs.map((faq, index) => (
          <FAQItem key={index} question={faq.q} answer={faq.a} />
        ))}
      </div>
    </div>
  </div>
);

export default FAQ;

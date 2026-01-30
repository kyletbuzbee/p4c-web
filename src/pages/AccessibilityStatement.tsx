import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Accessibility } from 'lucide-react';

const AccessibilityStatement: React.FC = () => (
  <div className="min-h-screen bg-p4c-beige py-16">
    <Helmet>
      <title>Accessibility Statement | Properties 4 Creation</title>
      <meta
        name="description"
        content="Properties 4 Creation accessibility statement and commitment to WCAG 2.1 compliance for digital accessibility and inclusive housing services."
      />
      <meta
        name="keywords"
        content="accessibility statement, web accessibility, WCAG compliance, disability access, inclusive housing, ADA compliance"
      />
    </Helmet>

    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-xl md:p-12">
        <div className="mb-8 flex items-center gap-4 border-b border-gray-100 pb-8">
          <div className="rounded-full bg-p4c-gold p-3">
            <Accessibility className="size-8 text-p4c-navy" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-p4c-navy">
            Accessibility Statement
          </h1>
        </div>

        <div className="prose prose-slate max-w-none text-gray-700">
          <p className="lead">
            Properties 4 Creation is committed to ensuring digital accessibility
            for people with disabilities. We are continually improving the user
            experience for everyone, and applying the relevant accessibility
            standards.
          </p>

          <h3 className="mb-2 mt-6 text-xl font-bold text-p4c-navy">
            Measures to support accessibility
          </h3>
          <p>
            Properties 4 Creation takes the following measures to ensure
            accessibility of our website:
          </p>
          <ul className="mb-6 list-disc pl-5">
            <li>
              Include accessibility as part of our internal mission statement.
            </li>
            <li>Integrate accessibility into our procurement practices.</li>
            <li>Appoint an accessibility officer and/or ombudsperson.</li>
            <li>Provide continual accessibility training for our staff.</li>
          </ul>

          <h3 className="mb-2 mt-6 text-xl font-bold text-p4c-navy">
            Conformance status
          </h3>
          <p>
            The Web Content Accessibility Guidelines (WCAG) defines requirements
            for designers and developers to improve accessibility for people
            with disabilities. It defines three levels of conformance: Level A,
            Level AA, and Level AAA. The Properties 4 Creation website is
            partially conformant with WCAG 2.1 level AA. Partially conformant
            means that some parts of the content do not fully conform to the
            accessibility standard.
          </p>

          <h3 className="mb-2 mt-6 text-xl font-bold text-p4c-navy">
            Feedback
          </h3>
          <p>
            We welcome your feedback on the accessibility of the Properties 4
            Creation website. Please let us know if you encounter accessibility
            barriers on our site:
          </p>
          <p className="mt-4">
            <strong>Email:</strong> accessibility@p4c-homes.com
            <br />
            <strong>Phone:</strong> (903) 555-0123
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default AccessibilityStatement;

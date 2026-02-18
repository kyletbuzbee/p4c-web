import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Scale, FileText } from 'lucide-react';

const Terms: React.FC = () => (
  <div className="min-h-screen bg-p4c-beige py-16">
    <Helmet>
      <title>Terms of Service | Properties 4 Creation</title>
      <meta
        name="description"
        content="Terms of service for using the Properties 4 Creation website and portal."
      />
      <meta
        name="keywords"
        content="terms of service, rental agreement terms, tenant rights, fair housing terms, lease terms, rental policies"
      />
    </Helmet>

    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-xl md:p-12">
        <div className="mb-8 border-b border-gray-200 pb-8">
          <h1 className="mb-4 font-serif text-3xl font-bold text-p4c-navy md:text-4xl">
            Terms of Service
          </h1>
          <p className="text-gray-700">Last Updated: October 24, 2023</p>
        </div>

        <div className="prose prose-slate max-w-none text-gray-700">
          <p className="lead text-lg">
            Welcome to the Properties 4 Creation website. By accessing or using
            our website, Resident Portal, or application services, you agree to
            be bound by these terms.
          </p>

          <h2 className="mb-4 mt-8 flex items-center gap-2 text-xl font-bold text-p4c-navy">
            <FileText className="size-5 text-p4c-gold" /> 1. Fair Housing Policy
          </h2>
          <p>
            Properties 4 Creation is committed to the letter and spirit of U.S.
            policy for the achievement of equal housing opportunity. We
            encourage and support an affirmative advertising and marketing
            program in which there are no barriers to obtaining housing because
            of race, color, religion, sex, handicap, familial status, or
            national origin.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-bold text-p4c-navy">
            2. Use of Site
          </h2>
          <p>
            You agree to use this site only for lawful purposes. You are
            prohibited from posting on or transmitting through this site any
            unlawful, harmful, threatening, abusive, harassing, defamatory,
            vulgar, obscene, sexually explicit, profane, hateful, racially,
            ethnically, or otherwise objectionable material of any kind.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-bold text-p4c-navy">
            3. Application Accuracy
          </h2>
          <p>
            By submitting an application for housing via our site, you certify
            that all information provided is true, accurate, and complete.
            Providing false information may result in the rejection of your
            application or termination of your lease.
          </p>

          <h2 className="mb-4 mt-8 flex items-center gap-2 text-xl font-bold text-p4c-navy">
            <Scale className="size-5 text-p4c-gold" /> 4. Limitation of
            Liability
          </h2>
          <p>
            Properties 4 Creation shall not be liable for any direct, indirect,
            special, incidental, consequential, or punitive damages arising out
            of your access to, or use of, this website or the content available
            on this website.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-bold text-p4c-navy">
            5. Third-Party Links
          </h2>
          <p>
            Our website may contain links to websites owned or operated by
            parties other than Properties 4 Creation (e.g., Veteran Affairs,
            HUD). These links are provided for your reference only. Properties 4
            Creation does not control outside sites and is not responsible for
            their content.
          </p>

          <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h4 className="mb-2 font-bold text-p4c-navy">Questions?</h4>
            <p className="text-sm">
              Please contact our legal team at: <br />
              <a
                href="mailto:legal@p4c-homes.com"
                className="font-bold text-p4c-gold hover:underline"
              >
                legal@p4c-homes.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Terms;

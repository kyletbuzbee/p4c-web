import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye } from 'lucide-react';

const Privacy: React.FC = () => (
  <div className="min-h-screen bg-p4c-beige py-16">
    <Helmet>
      <title>Privacy Policy | Properties 4 Creation</title>
      <meta
        name="description"
        content="Privacy policy and data protection standards for Properties 4 Creation applicants and residents."
      />
      <meta
        name="keywords"
        content="privacy policy, data protection, tenant privacy, housing privacy, rental application privacy, GDPR compliance"
      />
    </Helmet>

    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-xl md:p-12">
        <div className="mb-8 border-b border-gray-200 pb-8">
          <h1 className="mb-4 font-serif text-3xl font-bold text-p4c-navy md:text-4xl">
            Privacy Policy
          </h1>
          <p className="text-gray-500">Last Updated: October 24, 2023</p>
        </div>

        <div className="prose prose-slate max-w-none text-gray-700">
          <p className="text-lg font-semibold leading-relaxed text-gray-700">
            At Properties 4 Creation, we value your dignity and your privacy. We
            understand that applying for housing requires sharing sensitive
            personal information, and we are committed to protecting that data
            with the highest standards of security.
          </p>

          <h2 className="mb-4 mt-8 flex items-center gap-2 text-xl font-bold text-p4c-navy">
            <Eye className="size-5 text-p4c-gold" /> Information We Collect
          </h2>
          <p>
            We collect information necessary to process rental applications,
            manage lease agreements, and communicate with residents. This
            includes:
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              <strong>Identity Data:</strong> Name, date of birth, social
              security number (encrypted), and government ID.
            </li>
            <li>
              <strong>Contact Data:</strong> Email address, phone number, and
              current address.
            </li>
            <li>
              <strong>Financial Data:</strong> Income verification, voucher
              documentation (Section 8/HUD-VASH), and employment history.
            </li>
          </ul>

          <h2 className="mb-4 mt-8 flex items-center gap-2 text-xl font-bold text-p4c-navy">
            <Shield className="size-5 text-p4c-gold" /> How We Use Your
            Information
          </h2>
          <p>
            We use your data solely for business operations related to housing.
            We do <strong>not</strong> sell your personal data to third-party
            advertisers.
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              To evaluate rental applications and conduct background/credit
              checks.
            </li>
            <li>To process rent payments and maintenance requests.</li>
            <li>To comply with Fair Housing laws and HUD/VA requirements.</li>
          </ul>

          <h2 className="mb-4 mt-8 flex items-center gap-2 text-xl font-bold text-p4c-navy">
            <Lock className="size-5 text-p4c-gold" /> Data Security
          </h2>
          <p>
            We implement enterprise-grade security measures to prevent your
            personal data from being accidentally lost, used, or accessed in an
            unauthorized way. Access to your personal data is limited to
            Properties 4 Creation employees, agents, and contractors who have a
            business need to know and are subject to a duty of confidentiality.
          </p>

          <h2 className="mb-4 mt-8 text-xl font-bold text-p4c-navy">
            Your Rights
          </h2>
          <p>
            Under applicable laws, you have the right to request access to your
            personal data, request correction of your data, or request erasure
            of your data under certain conditions.
          </p>

          <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h4 className="mb-2 font-bold text-p4c-navy">
              Contact Us About Privacy
            </h4>
            <p className="text-sm">
              If you have questions about this privacy policy or our privacy
              practices, please contact us at: <br />
              <a
                href="mailto:privacy@p4c-homes.com"
                className="font-bold text-p4c-gold hover:underline"
              >
                privacy@p4c-homes.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Privacy;

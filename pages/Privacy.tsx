import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye } from 'lucide-react';

const Privacy: React.FC = () => (
  <div className="bg-p4c-beige min-h-screen py-16">
    <Helmet>
      <title>Privacy Policy | Properties 4 Creation</title>
      <meta
        name="description"
        content="Privacy policy and data protection standards for Properties 4 Creation applicants and residents."
      />
    </Helmet>

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
        <div className="border-b border-gray-200 pb-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-p4c-navy mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-500">Last Updated: October 24, 2023</p>
        </div>

        <div className="prose prose-slate max-w-none text-gray-700">
          <p className="lead text-lg">
            At Properties 4 Creation, we value your dignity and your privacy. We
            understand that applying for housing requires sharing sensitive
            personal information, and we are committed to protecting that data
            with the highest standards of security.
          </p>

          <h3 className="text-xl font-bold text-p4c-navy mt-8 mb-4 flex items-center gap-2">
            <Eye className="text-p4c-gold w-5 h-5" /> Information We Collect
          </h3>
          <p>
            We collect information necessary to process rental applications,
            manage lease agreements, and communicate with residents. This
            includes:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
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

          <h3 className="text-xl font-bold text-p4c-navy mt-8 mb-4 flex items-center gap-2">
            <Shield className="text-p4c-gold w-5 h-5" /> How We Use Your
            Information
          </h3>
          <p>
            We use your data solely for business operations related to housing.
            We do <strong>not</strong> sell your personal data to third-party
            advertisers.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              To evaluate rental applications and conduct background/credit
              checks.
            </li>
            <li>To process rent payments and maintenance requests.</li>
            <li>To comply with Fair Housing laws and HUD/VA requirements.</li>
          </ul>

          <h3 className="text-xl font-bold text-p4c-navy mt-8 mb-4 flex items-center gap-2">
            <Lock className="text-p4c-gold w-5 h-5" /> Data Security
          </h3>
          <p>
            We implement enterprise-grade security measures to prevent your
            personal data from being accidentally lost, used, or accessed in an
            unauthorized way. Access to your personal data is limited to
            Properties 4 Creation employees, agents, and contractors who have a
            business need to know and are subject to a duty of confidentiality.
          </p>

          <h3 className="text-xl font-bold text-p4c-navy mt-8 mb-4">
            Your Rights
          </h3>
          <p>
            Under applicable laws, you have the right to request access to your
            personal data, request correction of your data, or request erasure
            of your data under certain conditions.
          </p>

          <div className="bg-gray-50 p-6 rounded-xl mt-8 border border-gray-200">
            <h4 className="font-bold text-p4c-navy mb-2">
              Contact Us About Privacy
            </h4>
            <p className="text-sm">
              If you have questions about this privacy policy or our privacy
              practices, please contact us at: <br />
              <a
                href="mailto:privacy@p4c-homes.com"
                className="text-p4c-gold font-bold hover:underline"
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

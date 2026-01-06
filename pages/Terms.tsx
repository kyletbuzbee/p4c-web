
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Scale, FileText } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="bg-p4c-beige min-h-screen py-16">
      <Helmet>
        <title>Terms of Service | Properties 4 Creation</title>
        <meta name="description" content="Terms of service for using the Properties 4 Creation website and portal." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
          
          <div className="border-b border-gray-200 pb-8 mb-8">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-p4c-navy mb-4">Terms of Service</h1>
            <p className="text-gray-500">Last Updated: October 24, 2023</p>
          </div>

          <div className="prose prose-slate max-w-none text-gray-700">
            <p className="lead text-lg">
              Welcome to the Properties 4 Creation website. By accessing or using our website, Resident Portal, or application services, you agree to be bound by these terms.
            </p>

            <h3 className="text-xl font-bold text-p4c-navy mt-8 mb-4 flex items-center gap-2">
                <FileText className="text-p4c-gold w-5 h-5" /> 1. Fair Housing Policy
            </h3>
            <p>
              Properties 4 Creation is committed to the letter and spirit of U.S. policy for the achievement of equal housing opportunity. We encourage and support an affirmative advertising and marketing program in which there are no barriers to obtaining housing because of race, color, religion, sex, handicap, familial status, or national origin.
            </p>

            <h3 className="text-xl font-bold text-p4c-navy mt-8 mb-4">2. Use of Site</h3>
            <p>
              You agree to use this site only for lawful purposes. You are prohibited from posting on or transmitting through this site any unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, sexually explicit, profane, hateful, racially, ethnically, or otherwise objectionable material of any kind.
            </p>

            <h3 className="text-xl font-bold text-p4c-navy mt-8 mb-4">3. Application Accuracy</h3>
            <p>
              By submitting an application for housing via our site, you certify that all information provided is true, accurate, and complete. Providing false information may result in the rejection of your application or termination of your lease.
            </p>

            <h3 className="text-xl font-bold text-p4c-navy mt-8 mb-4 flex items-center gap-2">
                <Scale className="text-p4c-gold w-5 h-5" /> 4. Limitation of Liability
            </h3>
            <p>
              Properties 4 Creation shall not be liable for any direct, indirect, special, incidental, consequential, or punitive damages arising out of your access to, or use of, this website or the content available on this website.
            </p>

            <h3 className="text-xl font-bold text-p4c-navy mt-8 mb-4">5. Third-Party Links</h3>
            <p>
              Our website may contain links to websites owned or operated by parties other than Properties 4 Creation (e.g., Veteran Affairs, HUD). These links are provided for your reference only. Properties 4 Creation does not control outside sites and is not responsible for their content.
            </p>

             <div className="bg-gray-50 p-6 rounded-xl mt-8 border border-gray-200">
                <h4 className="font-bold text-p4c-navy mb-2">Questions?</h4>
                <p className="text-sm">
                    Please contact our legal team at: <br/>
                    <a href="mailto:legal@p4c-homes.com" className="text-p4c-gold font-bold hover:underline">legal@p4c-homes.com</a>
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;

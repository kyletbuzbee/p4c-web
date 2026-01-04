
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Home } from 'lucide-react';

const EqualHousing: React.FC = () => {
  return (
    <div className="bg-p4c-beige min-h-screen py-16">
      <Helmet>
        <title>Equal Housing Opportunity | Properties 4 Creations</title>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 text-center">
            <div className="bg-p4c-navy p-4 rounded-full inline-flex mb-6">
                <Home className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-serif font-bold text-p4c-navy mb-6">Equal Housing Opportunity</h1>
            
            <div className="prose prose-lg mx-auto text-gray-600 text-left">
                <p>
                    Properties 4 Creations is pledged to the letter and spirit of U.S. policy for the achievement of equal housing opportunity throughout the Nation. We encourage and support an affirmative advertising and marketing program in which there are no barriers to obtaining housing because of race, color, religion, sex, handicap, familial status, or national origin.
                </p>
                <p>
                    <strong>We agree to:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Provide equal professional service to all, without regard to race, color, religion, sex, handicap, familial status, or national origin.</li>
                    <li>Keep informed about fair housing laws and practices.</li>
                    <li>Develop advertising that indicates that everyone is welcome and no one is excluded.</li>
                    <li>Inform our clients and customers about our rights and responsibilities under the fair housing laws.</li>
                    <li>Document our compliance with the fair housing laws.</li>
                    <li>Refuse to tolerate non-compliance.</li>
                    <li>Take a positive approach to fair housing practices.</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default EqualHousing;

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Home } from 'lucide-react';

const EqualHousing: React.FC = () => (
  <div className="min-h-screen bg-p4c-beige py-16">
    <Helmet>
      <title>Equal Housing Opportunity | Properties 4 Creation</title>
      <meta
        name="description"
        content="Properties 4 Creation equal housing opportunity statement and commitment to fair housing practices without discrimination based on race, color, religion, or national origin."
      />
      <meta
        name="keywords"
        content="equal housing opportunity, fair housing, housing discrimination, HUD fair housing, equal opportunity housing, non-discriminatory housing"
      />
    </Helmet>

    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-xl md:p-12">
        <div className="mb-6 inline-flex rounded-full bg-p4c-navy p-4">
          <Home className="size-10 text-white" />
        </div>
        <h1 className="mb-6 font-serif text-3xl font-bold text-p4c-navy">
          Equal Housing Opportunity
        </h1>

        <div className="prose prose-lg mx-auto text-left text-gray-600">
          <p>
            Properties 4 Creation is pledged to the letter and spirit of U.S.
            policy for the achievement of equal housing opportunity throughout
            the Nation. We encourage and support an affirmative advertising and
            marketing program in which there are no barriers to obtaining
            housing because of race, color, religion, sex, handicap, familial
            status, or national origin.
          </p>
          <p>
            <strong>We agree to:</strong>
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Provide equal professional service to all, without regard to race,
              color, religion, sex, handicap, familial status, or national
              origin.
            </li>
            <li>Keep informed about fair housing laws and practices.</li>
            <li>
              Develop advertising that indicates that everyone is welcome and no
              one is excluded.
            </li>
            <li>
              Inform our clients and customers about our rights and
              responsibilities under the fair housing laws.
            </li>
            <li>Document our compliance with the fair housing laws.</li>
            <li>Refuse to tolerate non-compliance.</li>
            <li>Take a positive approach to fair housing practices.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default EqualHousing;

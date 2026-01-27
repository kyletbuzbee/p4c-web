import React from 'react';
import { PropertyForm } from '../components/admin/PropertyForm';
import ErrorBoundary from '../components/ErrorBoundary';

const TestPropertyForm: React.FC = () => {
  return (
    <div className="min-h-screen bg-p4c-beige p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-serif text-p4c-navy mb-8">
          Property Form Test
        </h1>

        <ErrorBoundary>
          <PropertyForm />
        </ErrorBoundary>

        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold text-p4c-navy mb-2">
            Test Instructions:
          </h2>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li>Fill out the form with property details</li>
            <li>Click "Register Property" to submit</li>
            <li>You should see a success toast notification if it works</li>
            <li>
              If there's an error (e.g., not logged in as admin), you'll see an
              error toast
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TestPropertyForm;

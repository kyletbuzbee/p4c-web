import React from 'react';
import { PropertyForm } from '../components/admin/PropertyForm';
import ErrorBoundary from '../components/ErrorBoundary';

const TestPropertyForm: React.FC = () => (
  <div className="min-h-screen bg-p4c-beige p-8">
    <div className="mx-auto max-w-4xl">
      <h1 className="mb-8 font-serif text-3xl text-p4c-navy">
        Property Form Test
      </h1>

      <ErrorBoundary>
        <PropertyForm />
      </ErrorBoundary>

      <div className="mt-8 rounded-lg bg-gray-100 p-4">
        <h2 className="mb-2 text-xl font-semibold text-p4c-navy">
          Test Instructions:
        </h2>
        <ul className="list-inside list-disc space-y-1 text-slate-700">
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

export default TestPropertyForm;

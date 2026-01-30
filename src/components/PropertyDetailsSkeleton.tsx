import React from 'react';
import Skeleton from './Skeleton';

const PropertyDetailsSkeleton: React.FC = () => (
  <div className="min-h-screen animate-fade-in bg-p4c-beige pb-20">
    {/* Hero Skeleton */}
    <div className="relative h-[50vh] w-full bg-gray-200">
      <Skeleton className="size-full" />
      <div className="absolute bottom-0 left-0 w-full p-8">
        <Skeleton className="mb-4 h-10 w-2/3 bg-gray-300" />
        <Skeleton className="h-6 w-1/3 bg-gray-300" />
      </div>
    </div>

    <div className="relative z-10 mx-auto -mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Main Info */}
        <div className="space-y-8 lg:col-span-2">
          {/* Stats Bar */}
          <div className="flex h-24 items-center justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
            <Skeleton className="h-12 w-20" />
            <div className="h-12 w-px bg-gray-100" />
            <Skeleton className="h-12 w-20" />
            <div className="h-12 w-px bg-gray-100" />
            <Skeleton className="h-12 w-20" />
          </div>

          <div className="space-y-4 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm ring-1 ring-gray-900/5">
            <Skeleton className="mb-6 h-8 w-1/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />

            <div className="grid grid-cols-2 gap-4 pt-8">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
            </div>
          </div>
        </div>

        {/* Sidebar CTA */}
        <div className="lg:col-span-1">
          <div className="space-y-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
            <Skeleton className="mx-auto h-8 w-1/2" />
            <Skeleton className="mx-auto mb-6 h-4 w-3/4" />
            <Skeleton className="h-14 w-full rounded-md" />
            <Skeleton className="h-14 w-full rounded-md" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PropertyDetailsSkeleton;

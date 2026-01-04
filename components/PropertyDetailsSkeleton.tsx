
import React from 'react';
import Skeleton from './Skeleton';

const PropertyDetailsSkeleton: React.FC = () => {
  return (
    <div className="bg-p4c-beige min-h-screen pb-20 animate-fade-in">
      {/* Hero Skeleton */}
      <div className="relative h-[50vh] w-full bg-gray-200">
        <Skeleton className="w-full h-full" />
        <div className="absolute bottom-0 left-0 w-full p-8">
             <Skeleton className="h-10 w-2/3 mb-4 bg-gray-300" />
             <Skeleton className="h-6 w-1/3 bg-gray-300" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Info */}
            <div className="lg:col-span-2 space-y-8">
                {/* Stats Bar */}
                <div className="bg-white rounded-2xl shadow-lg p-6 flex justify-between items-center h-24 border border-gray-100 ring-1 ring-gray-900/5">
                   <Skeleton className="h-12 w-20" />
                   <div className="w-px h-12 bg-gray-100"></div>
                   <Skeleton className="h-12 w-20" />
                   <div className="w-px h-12 bg-gray-100"></div>
                   <Skeleton className="h-12 w-20" />
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-8 space-y-4 border border-gray-100 ring-1 ring-gray-900/5">
                    <Skeleton className="h-8 w-1/3 mb-6" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    
                    <div className="pt-8 grid grid-cols-2 gap-4">
                        <Skeleton className="h-6 w-full" />
                        <Skeleton className="h-6 w-full" />
                        <Skeleton className="h-6 w-full" />
                        <Skeleton className="h-6 w-full" />
                    </div>
                </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4 border border-gray-100 ring-1 ring-gray-900/5">
                    <Skeleton className="h-8 w-1/2 mx-auto" />
                    <Skeleton className="h-4 w-3/4 mx-auto mb-6" />
                    <Skeleton className="h-14 w-full rounded-md" />
                    <Skeleton className="h-14 w-full rounded-md" />
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsSkeleton;

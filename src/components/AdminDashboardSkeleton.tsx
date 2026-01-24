import React from 'react';

interface AdminDashboardSkeletonProps {
  variant?: 'sidebar' | 'full';
}

const SidebarSkeleton: React.FC = () => (
  <aside className="w-64 bg-p4c-navy text-white hidden md:flex flex-col animate-pulse">
    <div className="p-6 border-b border-gray-700">
      <div className="h-6 bg-gray-600 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-700 rounded w-1/2" />
    </div>
    <nav className="flex-1 p-4 space-y-2">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="flex items-center w-full px-4 py-3 bg-gray-700/30 rounded-lg"
        >
          <div className="w-5 h-5 bg-gray-600 rounded mr-3" />
          <div className="h-4 bg-gray-600 rounded w-20" />
        </div>
      ))}
    </nav>
    <div className="p-4 border-t border-gray-700">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-gray-600 rounded-full" />
        <div className="space-y-1">
          <div className="h-4 bg-gray-600 rounded w-16" />
          <div className="h-3 bg-gray-700 rounded w-20" />
        </div>
      </div>
      <div className="h-10 bg-gray-600 rounded w-full" />
    </div>
  </aside>
);

const StatsSkeleton: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
    {[1, 2, 3, 4].map((i) => (
      <div
        key={i}
        className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
      >
        <div className="h-4 bg-gray-200 rounded w-24 mb-2" />
        <div className="h-8 bg-gray-200 rounded w-16 mb-2" />
        <div className="h-3 bg-gray-100 rounded w-28" />
      </div>
    ))}
  </div>
);

const TableSkeleton: React.FC = () => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
    <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
      <div className="h-5 bg-gray-200 rounded w-32" />
      <div className="h-4 bg-gray-100 rounded w-16" />
    </div>
    <div className="p-8">
      <div className="space-y-4">
        <div className="h-4 bg-gray-100 rounded w-1/4 mx-auto mb-6" />
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-16 bg-gray-50 rounded flex items-center px-6"
          >
            <div className="flex items-center w-full">
              <div className="w-10 h-10 bg-gray-200 rounded mr-4" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-1/3" />
                <div className="h-3 bg-gray-100 rounded w-1/4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const AdminDashboardSkeleton: React.FC<AdminDashboardSkeletonProps> = ({
  variant = 'full',
}) => {
  if (variant === 'sidebar') {
    return <SidebarSkeleton />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <SidebarSkeleton />
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <div className="h-8 bg-gray-200 rounded w-48" />
            <div className="h-10 bg-gray-200 rounded w-32" />
          </div>
          <StatsSkeleton />
          <TableSkeleton />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboardSkeleton;

import React from 'react';

interface AdminDashboardSkeletonProps {
  variant?: 'sidebar' | 'full';
}

const SidebarSkeleton: React.FC = () => (
  <aside className="hidden w-64 animate-pulse flex-col bg-p4c-navy text-white md:flex">
    <div className="border-b border-gray-700 p-6">
      <div className="mb-2 h-6 w-3/4 rounded bg-gray-600" />
      <div className="h-4 w-1/2 rounded bg-gray-700" />
    </div>
    <nav className="flex-1 space-y-2 p-4">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="flex w-full items-center rounded-lg bg-gray-700/30 px-4 py-3"
        >
          <div className="mr-3 size-5 rounded bg-gray-600" />
          <div className="h-4 w-20 rounded bg-gray-600" />
        </div>
      ))}
    </nav>
    <div className="border-t border-gray-700 p-4">
      <div className="mb-4 flex items-center gap-3">
        <div className="size-8 rounded-full bg-gray-600" />
        <div className="space-y-1">
          <div className="h-4 w-16 rounded bg-gray-600" />
          <div className="h-3 w-20 rounded bg-gray-700" />
        </div>
      </div>
      <div className="h-10 w-full rounded bg-gray-600" />
    </div>
  </aside>
);

const StatsSkeleton: React.FC = () => (
  <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-4">
    {[1, 2, 3, 4].map((i) => (
      <div
        key={i}
        className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
      >
        <div className="mb-2 h-4 w-24 rounded bg-gray-200" />
        <div className="mb-2 h-8 w-16 rounded bg-gray-200" />
        <div className="h-3 w-28 rounded bg-gray-100" />
      </div>
    ))}
  </div>
);

const TableSkeleton: React.FC = () => (
  <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
    <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
      <div className="h-5 w-32 rounded bg-gray-200" />
      <div className="h-4 w-16 rounded bg-gray-100" />
    </div>
    <div className="p-8">
      <div className="space-y-4">
        <div className="mx-auto mb-6 h-4 w-1/4 rounded bg-gray-100" />
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex h-16 items-center rounded bg-gray-50 px-6"
          >
            <div className="flex w-full items-center">
              <div className="mr-4 size-10 rounded bg-gray-200" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-1/3 rounded bg-gray-200" />
                <div className="h-3 w-1/4 rounded bg-gray-100" />
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
    <div className="flex min-h-screen bg-gray-100">
      <SidebarSkeleton />
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="mb-8 flex items-center justify-between">
            <div className="h-8 w-48 rounded bg-gray-200" />
            <div className="h-10 w-32 rounded bg-gray-200" />
          </div>
          <StatsSkeleton />
          <TableSkeleton />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboardSkeleton;

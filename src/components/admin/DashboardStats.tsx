import React, { useMemo } from 'react';
import type { ExtendedProperty } from '../../types/types';

interface StatCard {
  label: string;
  value: string;
  sub: string;
  color: string;
  icon: string;
}

interface DashboardStatsProps {
  properties: ExtendedProperty[];
}

/**
 * DashboardStats Component
 * Displays key metrics for the admin dashboard
 */
export function DashboardStats({ properties }: DashboardStatsProps) {
  const stats: StatCard[] = useMemo(() => {
    const totalProperties = properties.length;
    const occupiedCount = properties.filter((p) => p.status !== 'available').length;
    const occupancyRate =
      totalProperties > 0
        ? Math.round((occupiedCount / totalProperties) * 100)
        : 0;

    const estimatedRevenue = properties.reduce(
      (acc, curr) =>
        acc +
        (parseInt(
          typeof curr.price === 'string'
            ? curr.price.replace(/,/g, '')
            : curr.price.toString(),
          10
        ) || 0),
      0
    );

    return [
      {
        label: 'Total Revenue',
        value: `$${estimatedRevenue.toLocaleString()}`,
        sub: 'Monthly projected',
        color: 'text-green-600',
        icon: '💰',
      },
      {
        label: 'Occupancy Rate',
        value: `${occupancyRate}%`,
        sub: `${totalProperties - occupiedCount} units available`,
        color: 'text-blue-600',
        icon: '🏠',
      },
      {
        label: 'Total Properties',
        value: totalProperties.toString(),
        sub: 'Active Listings',
        color: 'text-p4c-navy',
        icon: '📑',
      },
      {
        label: 'Pending Actions',
        value: '5',
        sub: 'Requires attention',
        color: 'text-orange-600',
        icon: '⚠️',
      },
    ];
  }, [properties]);

  return (
    <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-4">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="text-sm font-medium text-gray-700">{stat.label}</div>
            <span className="text-2xl">{stat.icon}</span>
          </div>
          <div className="mb-2 text-3xl font-bold text-gray-900">{stat.value}</div>
          <div className={`text-sm ${stat.color} font-medium`}>{stat.sub}</div>
        </div>
      ))}
    </div>
  );
}

export default DashboardStats;

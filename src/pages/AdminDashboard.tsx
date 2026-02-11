import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext'; // Import Toast for feedback
import AdminDashboardSkeleton from '../components/AdminDashboardSkeleton';
import {
  BarChart3,
  Users,
  Home,
  Settings,
  LogOut,
  Plus,
  Edit2,
  Trash2,
  Search,
} from 'lucide-react';
import { api } from '../services/api';
import type { ExtendedProperty } from '../types/types';

// Define the available views
type DashboardView = 'dashboard' | 'properties' | 'tenants' | 'settings';

const AdminDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const { addToast } = useToast(); // Use toast for feedback
  const [properties, setProperties] = useState<ExtendedProperty[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeView, setActiveView] = useState<DashboardView>('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch Data
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const propertiesData = await api.properties.getAll();
        setProperties(propertiesData);
      } catch {
        addToast('Failed to load properties data', 'error');
        // Fallback to empty array if API fails so UI doesn't crash
        setProperties([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [addToast]);

  // 1. Dynamic Stats Calculation
  const stats = useMemo(() => {
    const totalProperties = properties.length;
    // Assuming 'available' logic based on your data, simplified here:
    const occupiedCount = properties.filter(
      (p) => p.status !== 'available'
    ).length; // Adjust logic as needed
    const occupancyRate =
      totalProperties > 0
        ? Math.round((occupiedCount / totalProperties) * 100)
        : 0;

    // Calculate generic revenue (placeholder logic - replace with real data field)
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
        value: '5', // Placeholder until you have an Applications API
        sub: 'Requires attention',
        color: 'text-orange-600',
        icon: '⚠️',
      },
    ];
  }, [properties]);

  // 2. Filter Properties Logic
  const filteredProperties = properties.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 3. Action Handlers
  const handleDelete = (id: string) => {
    try {
      // await api.properties.delete(id); // Uncomment when API is ready
      setProperties((prev) => prev.filter((p) => p.id !== id)); // Optimistic update
      addToast('Property deleted successfully', 'success');
    } catch {
      addToast('Failed to delete property', 'error');
    }
  };

  const handleEdit = (id: string) => {
    addToast(`Edit functionality for ID ${id} coming in next sprint`, 'info');
    // Logic: Navigate to /admin/properties/edit/:id or open modal
  };

  const handleAddNew = () => {
    addToast('Add Property Modal opening...', 'info');
    // Logic: Open "Add Property" Modal
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Helmet>
        <title>Admin Dashboard | Properties 4 Creation</title>
      </Helmet>

      {/* Sidebar Navigation */}
      <aside className="fixed z-10 hidden h-full w-64 flex-col bg-p4c-navy text-white md:flex">
        <div className="border-b border-gray-700 p-6">
          <h2 className="font-serif text-xl font-bold text-p4c-gold">
            Properties 4 Creation
          </h2>
          <p className="mt-1 text-xs text-gray-400">Administrator Portal</p>
        </div>

        <nav className="flex-1 space-y-2 p-4">
          <button
            onClick={() => setActiveView('dashboard')}
            className={`flex w-full items-center rounded-lg px-4 py-3 font-medium transition-colors ${
              activeView === 'dashboard'
                ? 'bg-white/10 text-p4c-gold'
                : 'text-gray-300 hover:bg-white/5'
            }`}
            aria-label="Dashboard"
          >
            <BarChart3 className="mr-3 size-5" /> Dashboard
          </button>
          <button
            onClick={() => setActiveView('properties')}
            className={`flex w-full items-center rounded-lg px-4 py-3 font-medium transition-colors ${
              activeView === 'properties'
                ? 'bg-white/10 text-p4c-gold'
                : 'text-gray-300 hover:bg-white/5'
            }`}
            aria-label="Properties"
          >
            <Home className="mr-3 size-5" /> Properties
          </button>
          <button
            onClick={() => setActiveView('tenants')}
            className={`flex w-full items-center rounded-lg px-4 py-3 font-medium transition-colors ${
              activeView === 'tenants'
                ? 'bg-white/10 text-p4c-gold'
                : 'text-gray-300 hover:bg-white/5'
            }`}
            aria-label="Tenants"
          >
            <Users className="mr-3 size-5" /> Tenants
          </button>
          <button
            onClick={() => setActiveView('settings')}
            className={`flex w-full items-center rounded-lg px-4 py-3 font-medium transition-colors ${
              activeView === 'settings'
                ? 'bg-white/10 text-p4c-gold'
                : 'text-gray-300 hover:bg-white/5'
            }`}
            aria-label="Settings"
          >
            <Settings className="mr-3 size-5" /> Settings
          </button>
        </nav>

        <div className="border-t border-gray-700 p-4">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-full bg-p4c-gold font-bold text-p4c-navy">
              {user?.name?.charAt(0).toUpperCase() || 'A'}
            </div>
            <div className="text-sm">
              <div className="font-medium text-white">
                {user?.name || 'Admin'}
              </div>
              <div className="text-xs text-gray-400">
                {user?.role || 'Administrator'}
              </div>
            </div>
          </div>
          <button
            onClick={logout}
            className="flex w-full items-center justify-center rounded-lg border border-gray-600 px-4 py-2 text-sm transition-colors hover:bg-gray-800"
            aria-label="Sign out"
          >
            <LogOut className="mr-2 size-4" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto transition-all md:ml-64">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-2xl font-bold capitalize text-gray-800">
              {activeView} Overview
            </h1>
            {activeView === 'properties' && (
              <button
                onClick={handleAddNew}
                className="flex items-center gap-2 rounded-lg bg-p4c-navy px-4 py-2 text-white shadow-md transition-colors hover:bg-p4c-slate"
                aria-label="Add new property"
              >
                <Plus className="size-4" /> Add Property
              </button>
            )}
          </div>

          {/* VIEW: DASHBOARD */}
          {activeView === 'dashboard' && (
            <>
              {/* Stats Grid */}
              <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-4">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <div className="text-sm font-medium text-gray-500">
                        {stat.label}
                      </div>
                      <span className="text-2xl">{stat.icon}</span>
                    </div>
                    <div className="mb-2 text-3xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className={`text-sm ${stat.color} font-medium`}>
                      {stat.sub}
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Activity / Short List */}
              <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="mb-4 font-bold text-gray-800">
                  Recent System Activity
                </h3>
                <p className="text-sm text-gray-500">
                  No recent alerts or system notifications.
                </p>
              </div>
            </>
          )}

          {/* VIEW: PROPERTIES (or Dashboard Preview) */}
          {(activeView === 'dashboard' || activeView === 'properties') && (
            <div
              className={`overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm ${activeView === 'dashboard' ? 'mt-8' : ''}`}
            >
              <div className="flex flex-col items-center justify-between gap-4 border-b border-gray-100 px-6 py-4 md:flex-row">
                <h3 className="font-bold text-gray-800">
                  {activeView === 'dashboard'
                    ? 'Recent Listings'
                    : 'All Properties'}
                </h3>

                {/* Search Bar for Properties View */}
                {activeView === 'properties' && (
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search address..."
                      className="rounded-lg border border-gray-200 py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-p4c-gold"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                )}

                {activeView === 'dashboard' && (
                  <button
                    onClick={() => setActiveView('properties')}
                    className="text-sm font-medium text-p4c-gold hover:underline"
                  >
                    View All
                  </button>
                )}
              </div>

              {loading ? (
                <AdminDashboardSkeleton variant="full" />
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-500">
                      <tr>
                        <th className="px-6 py-4">Property</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Price</th>
                        <th className="px-6 py-4">Stats</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {(activeView === 'dashboard'
                        ? filteredProperties.slice(0, 5)
                        : filteredProperties
                      ).map((property) => (
                        <tr
                          key={property.id}
                          className="transition-colors hover:bg-gray-50/50"
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <img
                                src={property.imageUrl}
                                alt={property.title}
                                className="mr-3 size-10 rounded-md bg-gray-200 object-cover"
                              />
                              <div>
                                <div className="font-medium text-gray-900">
                                  {property.title}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {property.address}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-600">
                            ${property.price}/mo
                          </td>
                          <td className="px-6 py-4 text-xs text-gray-600">
                            {property.bedrooms}bd • {property.bathrooms}ba •{' '}
                            {property.sqft}sqft
                          </td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex justify-end gap-2">
                              <button
                                onClick={() => handleEdit(property.id)}
                                className="rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-p4c-navy"
                                title="Edit Property"
                                aria-label={`Edit ${property.title}`}
                              >
                                <Edit2 className="size-4" />
                              </button>
                              <button
                                onClick={() => handleDelete(property.id)}
                                className="rounded p-1.5 text-gray-500 hover:bg-red-50 hover:text-red-600"
                                title="Delete Property"
                                aria-label={`Delete ${property.title}`}
                              >
                                <Trash2 className="size-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {filteredProperties.length === 0 && (
                        <tr>
                          <td
                            colSpan={5}
                            className="px-6 py-8 text-center text-gray-500"
                          >
                            No properties found matching your search.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* VIEW: TENANTS (Placeholder) */}
          {activeView === 'tenants' && (
            <div className="rounded-xl border border-gray-100 bg-white p-12 text-center shadow-sm">
              <Users className="mx-auto mb-4 size-12 text-gray-300" />
              <h3 className="text-lg font-bold text-gray-900">
                Tenant Management
              </h3>
              <p className="text-gray-500">
                Tenant list and application processing features coming soon.
              </p>
            </div>
          )}

          {/* VIEW: SETTINGS (Placeholder) */}
          {activeView === 'settings' && (
            <div className="rounded-xl border border-gray-100 bg-white p-12 text-center shadow-sm">
              <Settings className="mx-auto mb-4 size-12 text-gray-300" />
              <h3 className="text-lg font-bold text-gray-900">
                System Settings
              </h3>
              <p className="text-gray-500">
                Global configurations will be available here.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;

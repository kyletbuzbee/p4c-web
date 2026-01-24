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
      } catch (error) {
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
            : curr.price.toString()
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
  const handleDelete = async (id: string) => {
    if (
      window.confirm(
        'Are you sure you want to delete this property? This cannot be undone.'
      )
    ) {
      try {
        // await api.properties.delete(id); // Uncomment when API is ready
        setProperties((prev) => prev.filter((p) => p.id !== id)); // Optimistic update
        addToast('Property deleted successfully', 'success');
      } catch (error) {
        addToast('Failed to delete property', 'error');
      }
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
    <div className="min-h-screen bg-gray-100 flex">
      <Helmet>
        <title>Admin Dashboard | Properties 4 Creation</title>
      </Helmet>

      {/* Sidebar Navigation */}
      <aside className="w-64 bg-p4c-navy text-white hidden md:flex flex-col fixed h-full z-10">
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-xl font-serif font-bold text-p4c-gold">
            Properties 4 Creation
          </h2>
          <p className="text-xs text-gray-400 mt-1">Administrator Portal</p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => setActiveView('dashboard')}
            className={`flex items-center w-full px-4 py-3 rounded-lg font-medium transition-colors ${
              activeView === 'dashboard'
                ? 'bg-white/10 text-p4c-gold'
                : 'text-gray-300 hover:bg-white/5'
            }`}
          >
            <BarChart3 className="w-5 h-5 mr-3" /> Dashboard
          </button>
          <button
            onClick={() => setActiveView('properties')}
            className={`flex items-center w-full px-4 py-3 rounded-lg font-medium transition-colors ${
              activeView === 'properties'
                ? 'bg-white/10 text-p4c-gold'
                : 'text-gray-300 hover:bg-white/5'
            }`}
          >
            <Home className="w-5 h-5 mr-3" /> Properties
          </button>
          <button
            onClick={() => setActiveView('tenants')}
            className={`flex items-center w-full px-4 py-3 rounded-lg font-medium transition-colors ${
              activeView === 'tenants'
                ? 'bg-white/10 text-p4c-gold'
                : 'text-gray-300 hover:bg-white/5'
            }`}
          >
            <Users className="w-5 h-5 mr-3" /> Tenants
          </button>
          <button
            onClick={() => setActiveView('settings')}
            className={`flex items-center w-full px-4 py-3 rounded-lg font-medium transition-colors ${
              activeView === 'settings'
                ? 'bg-white/10 text-p4c-gold'
                : 'text-gray-300 hover:bg-white/5'
            }`}
          >
            <Settings className="w-5 h-5 mr-3" /> Settings
          </button>
        </nav>

        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center mb-4 gap-3">
            <div className="w-8 h-8 rounded-full bg-p4c-gold flex items-center justify-center text-p4c-navy font-bold">
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
            className="flex items-center justify-center w-full px-4 py-2 border border-gray-600 rounded-lg text-sm hover:bg-gray-800 transition-colors"
          >
            <LogOut className="w-4 h-4 mr-2" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto md:ml-64 transition-all">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800 capitalize">
              {activeView} Overview
            </h1>
            {activeView === 'properties' && (
              <button
                onClick={handleAddNew}
                className="bg-p4c-navy text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-p4c-slate transition-colors shadow-md"
              >
                <Plus className="w-4 h-4" /> Add Property
              </button>
            )}
          </div>

          {/* VIEW: DASHBOARD */}
          {activeView === 'dashboard' && (
            <>
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-gray-500 font-medium">
                        {stat.label}
                      </div>
                      <span className="text-2xl">{stat.icon}</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <div className={`text-sm ${stat.color} font-medium`}>
                      {stat.sub}
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Activity / Short List */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-bold text-gray-800 mb-4">
                  Recent System Activity
                </h3>
                <p className="text-gray-500 text-sm">
                  No recent alerts or system notifications.
                </p>
              </div>
            </>
          )}

          {/* VIEW: PROPERTIES (or Dashboard Preview) */}
          {(activeView === 'dashboard' || activeView === 'properties') && (
            <div
              className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden ${activeView === 'dashboard' ? 'mt-8' : ''}`}
            >
              <div className="px-6 py-4 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                <h3 className="font-bold text-gray-800">
                  {activeView === 'dashboard'
                    ? 'Recent Listings'
                    : 'All Properties'}
                </h3>

                {/* Search Bar for Properties View */}
                {activeView === 'properties' && (
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search address..."
                      className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-p4c-gold"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                )}

                {activeView === 'dashboard' && (
                  <button
                    onClick={() => setActiveView('properties')}
                    className="text-sm text-p4c-gold font-medium hover:underline"
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
                    <thead className="bg-gray-50 text-xs uppercase text-gray-500 font-semibold">
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
                          className="hover:bg-gray-50/50 transition-colors"
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <img
                                src={property.imageUrl}
                                alt=""
                                className="w-10 h-10 rounded-md object-cover mr-3 bg-gray-200"
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
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-600">
                            ${property.price}/mo
                          </td>
                          <td className="px-6 py-4 text-gray-600 text-xs">
                            {property.bedrooms}bd • {property.bathrooms}ba •{' '}
                            {property.sqft}sqft
                          </td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex justify-end gap-2">
                              <button
                                onClick={() => handleEdit(property.id)}
                                className="p-1.5 hover:bg-gray-100 rounded text-gray-500 hover:text-p4c-navy"
                                title="Edit Property"
                              >
                                <Edit2 className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDelete(property.id)}
                                className="p-1.5 hover:bg-red-50 rounded text-gray-500 hover:text-red-600"
                                title="Delete Property"
                              >
                                <Trash2 className="w-4 h-4" />
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
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
              <Users className="w-12 h-12 text-gray-300 mx-auto mb-4" />
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
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
              <Settings className="w-12 h-12 text-gray-300 mx-auto mb-4" />
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

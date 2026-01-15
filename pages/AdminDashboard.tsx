import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '../context/AuthContext';
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
} from 'lucide-react';
import { api } from '../services/api';
import type { ExtendedProperty } from '../types';

const AdminDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const [properties, setProperties] = useState<ExtendedProperty[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const propertiesData = await api.properties.getAll();
        setProperties(propertiesData);
      } catch (error) {
        // Log error to error boundary service instead of console
        import('../services/errorBoundaryService').then(({ logError }) => {
          logError('Failed to fetch properties', {
            error:
              error instanceof Error
                ? error
                : new Error('Unknown error occurred'),
            component: 'AdminDashboard',
            severity: 'high',
          });
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Helmet>
        <title>Admin Dashboard | Properties 4 Creation</title>
        <meta
          name="description"
          content="Properties 4 Creation administrative dashboard for property management, tenant oversight, and operational analytics."
        />
        <meta
          name="keywords"
          content="admin dashboard, property management, tenant portal, P4C administration, housing management system"
        />
      </Helmet>

      {/* Sidebar */}
      <aside className="w-64 bg-p4c-navy text-white hidden md:flex flex-col">
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-xl font-serif font-bold text-p4c-gold">
            Properties 4 Creation Admin
          </h2>
          <p className="text-xs text-gray-400 mt-1">Enterprise Portal</p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button className="flex items-center w-full px-4 py-3 bg-white/10 text-p4c-gold rounded-lg font-medium">
            <BarChart3 className="w-5 h-5 mr-3" /> Dashboard
          </button>
          <button className="flex items-center w-full px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-white rounded-lg transition-colors">
            <Home className="w-5 h-5 mr-3" /> Properties
          </button>
          <button className="flex items-center w-full px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-white rounded-lg transition-colors">
            <Users className="w-5 h-5 mr-3" /> Tenants
          </button>
          <button className="flex items-center w-full px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-white rounded-lg transition-colors">
            <Settings className="w-5 h-5 mr-3" /> Settings
          </button>
        </nav>

        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center mb-4 gap-3">
            <div className="w-8 h-8 rounded-full bg-p4c-gold flex items-center justify-center text-p4c-navy font-bold">
              {user?.name.charAt(0).toUpperCase()}
            </div>
            <div className="text-sm">
              <div className="font-medium text-white">{user?.name}</div>
              <div className="text-xs text-gray-400">Administrator</div>
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

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">
              Dashboard Overview
            </h1>
            <button className="bg-p4c-navy text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-p4c-slate transition-colors shadow-md">
              <Plus className="w-4 h-4" /> Add Property
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              {
                label: 'Total Revenue',
                value: '$42,500',
                sub: '+12% from last month',
                color: 'text-green-600',
                icon: '💰',
              },
              {
                label: 'Occupancy Rate',
                value: '94%',
                sub: '2 units available',
                color: 'text-blue-600',
                icon: '🏠',
              },
              {
                label: 'Maintenance Req',
                value: '3',
                sub: '1 urgent',
                color: 'text-orange-600',
                icon: '🔧',
              },
              {
                label: 'Applications',
                value: '18',
                sub: '5 pending review',
                color: 'text-p4c-navy',
                icon: '📝',
              },
            ].map((stat, i) => (
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

          {/* Recent Properties Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-bold text-gray-800">Active Listings</h3>
              <button className="text-sm text-p4c-gold font-medium hover:underline">
                View All
              </button>
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
                      <th className="px-6 py-4">Applications</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {properties.map((property) => (
                      <tr
                        key={property.id}
                        className="hover:bg-gray-50/50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <img
                              src={property.imageUrl}
                              alt=""
                              className="w-10 h-10 rounded-md object-cover mr-3"
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
                        <td className="px-6 py-4 text-gray-600">4 New</td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-2">
                            <button className="p-1.5 hover:bg-gray-100 rounded text-gray-500 hover:text-p4c-navy">
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button className="p-1.5 hover:bg-red-50 rounded text-gray-500 hover:text-red-600">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
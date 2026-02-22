import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import AdminDashboardSkeleton from '../components/AdminDashboardSkeleton';
import DashboardStats from '../components/admin/DashboardStats';
import PropertiesTable from '../components/admin/PropertiesTable';
import {
  BarChart3,
  Users,
  Home,
  Settings,
  LogOut,
  Plus,
} from 'lucide-react';
import { api } from '../services/api';
import type { ExtendedProperty } from '../types/types';

type DashboardView = 'dashboard' | 'properties' | 'tenants' | 'settings';

const AdminDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const { addToast } = useToast();
  const [properties, setProperties] = useState<ExtendedProperty[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeView, setActiveView] = useState<DashboardView>('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const propertiesData = await api.properties.getAll();
        setProperties(propertiesData);
      } catch {
        addToast('Failed to load properties data', 'error');
        setProperties([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [addToast]);

  const handleDelete = async (id: string) => {
    try {
      await api.properties.delete(id);
      setProperties((prev) => prev.filter((p) => p.id !== id));
      addToast('Property deleted successfully', 'success');
    } catch {
      addToast('Failed to delete property', 'error');
    }
  };

  const handleEdit = (id: string) => {
    addToast(`Edit functionality for ID ${id} coming in next sprint`, 'info');
  };

  const handleAddNew = () => {
    addToast('Add Property Modal opening...', 'info');
  };

  const navigateToProperties = () => setActiveView('properties');

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Helmet>
        <title>Admin Dashboard | Properties 4 Creation</title>
      </Helmet>

      {/* Sidebar */}
      <aside className="fixed z-10 hidden h-full w-64 flex-col bg-p4c-navy text-white md:flex">
        <div className="border-b border-gray-700 p-6">
          <h2 className="font-serif text-xl font-bold text-p4c-gold">
            Properties 4 Creation
          </h2>
          <p className="mt-1 text-xs text-gray-400">Administrator Portal</p>
        </div>

        <nav className="flex-1 space-y-2 p-4">
          <NavButton
            active={activeView === 'dashboard'}
            onClick={() => setActiveView('dashboard')}
            icon={<BarChart3 className="mr-3 size-5" />}
            label="Dashboard"
          />
          <NavButton
            active={activeView === 'properties'}
            onClick={() => setActiveView('properties')}
            icon={<Home className="mr-3 size-5" />}
            label="Properties"
          />
          <NavButton
            active={activeView === 'tenants'}
            onClick={() => setActiveView('tenants')}
            icon={<Users className="mr-3 size-5" />}
            label="Tenants"
          />
          <NavButton
            active={activeView === 'settings'}
            onClick={() => setActiveView('settings')}
            icon={<Settings className="mr-3 size-5" />}
            label="Settings"
          />
        </nav>

        <div className="border-t border-gray-700 p-4">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-full bg-p4c-gold font-bold text-p4c-navy">
              {user?.name?.charAt(0).toUpperCase() || 'A'}
            </div>
            <div className="text-sm">
              <div className="font-medium text-white">{user?.name || 'Admin'}</div>
              <div className="text-xs text-gray-400">{user?.role || 'Administrator'}</div>
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

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto md:ml-64">
        <div className="p-8">
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

          {/* Dashboard View */}
          {activeView === 'dashboard' && (
            <>
              {loading ? (
                <div className="mb-8">
                  <AdminDashboardSkeleton variant="stats" />
                </div>
              ) : (
                <DashboardStats properties={properties} />
              )}
              
              <PropertiesTable
                properties={properties}
                loading={loading}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onAddNew={navigateToProperties}
                variant="preview"
              />
            </>
          )}

          {/* Properties View */}
          {activeView === 'properties' && (
            <PropertiesTable
              properties={properties}
              loading={loading}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onAddNew={handleAddNew}
              variant="full"
            />
          )}

          {/* Tenants View */}
          {activeView === 'tenants' && (
            <div className="rounded-xl border border-gray-100 bg-white p-12 text-center shadow-sm">
              <Users className="mx-auto mb-4 size-12 text-gray-300" />
              <h3 className="text-lg font-bold text-gray-900">Tenant Management</h3>
              <p className="text-gray-700">Tenant list and application processing features coming soon.</p>
            </div>
          )}

          {/* Settings View */}
          {activeView === 'settings' && (
            <div className="rounded-xl border border-gray-100 bg-white p-12 text-center shadow-sm">
              <Settings className="mx-auto mb-4 size-12 text-gray-300" />
              <h3 className="text-lg font-bold text-gray-900">System Settings</h3>
              <p className="text-gray-700">Global configurations will be available here.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

function NavButton({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center rounded-lg px-4 py-3 font-medium transition-colors ${
        active ? 'bg-white/10 text-p4c-gold' : 'text-gray-300 hover:bg-white/5'
      }`}
      aria-label={label}
    >
      {icon}
      {label}
    </button>
  );
}

export default AdminDashboard;

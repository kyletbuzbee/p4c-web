import { Search, Edit2, Trash2 } from 'lucide-react';
import type { ExtendedProperty } from '../../types/types';

interface PropertiesTableProps {
  properties: ExtendedProperty[];
  loading?: boolean;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onAddNew: () => void;
  variant?: 'full' | 'preview';
}

/**
 * PropertiesTable Component
 * Displays properties in a sortable, searchable table
 */
export function PropertiesTable({
  properties,
  loading = false,
  searchQuery,
  onSearchChange,
  onEdit,
  onDelete,
  onAddNew,
  variant = 'full',
}: PropertiesTableProps) {
  const filteredProperties = properties.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayProperties =
    variant === 'preview' ? filteredProperties.slice(0, 5) : filteredProperties;

  return (
    <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
      {/* Header */}
      <div className="flex flex-col items-center justify-between gap-4 border-b border-gray-100 px-6 py-4 md:flex-row">
        <h3 className="font-bold text-gray-800">
          {variant === 'preview' ? 'Recent Listings' : 'All Properties'}
        </h3>

        {variant === 'full' && (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search address..."
              className="rounded-lg border border-gray-200 py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-p4c-gold"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        )}

        {variant === 'preview' && (
          <button
            onClick={onAddNew}
            className="text-sm font-medium text-p4c-gold hover:underline"
          >
            View All
          </button>
        )}
      </div>

      {/* Table */}
      {loading ? (
        <div className="p-8 text-center">
          <div className="animate-pulse text-gray-500">Loading properties...</div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-700">
              <tr>
                <th className="px-6 py-4">Property</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Stats</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {displayProperties.map((property) => (
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
                        <div className="text-xs text-gray-700">
                          {property.address}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      property.status === 'available' ? 'bg-green-100 text-green-800' :
                      property.status === 'occupied' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {property.status === 'available' ? 'Available' : 
                       property.status === 'occupied' ? 'Occupied' : 'Maintenance'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    ${property.price}/mo
                  </td>
                  <td className="px-6 py-4 text-xs text-gray-600">
                    {property.bedrooms}bd • {property.bathrooms}ba • {property.sqft}sqft
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => onEdit(property.id)}
                        className="rounded p-1.5 text-gray-700 hover:bg-gray-100 hover:text-p4c-navy"
                        title="Edit Property"
                        aria-label={`Edit ${property.title}`}
                      >
                        <Edit2 className="size-4" />
                      </button>
                      <button
                        onClick={() => onDelete(property.id)}
                        className="rounded p-1.5 text-gray-700 hover:bg-red-50 hover:text-red-600"
                        title="Delete Property"
                        aria-label={`Delete ${property.title}`}
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {displayProperties.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-700">
                    No properties found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default PropertiesTable;

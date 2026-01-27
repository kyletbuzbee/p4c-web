import React, { useState } from 'react';
import { X, Loader2, Save } from 'lucide-react';
import { useToast } from '../context/ToastContext';
import { api } from '../services/api';

interface AddPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const AddPropertyModal: React.FC<AddPropertyModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const { addToast } = useToast();
  const [loading, setLoading] = useState(false);

  // Updated state to match your SQL Schema
  const [formData, setFormData] = useState({
    title: '',
    address: '',
    city: '', // [NEW]
    price: '',
    status: 'available',
    bedrooms: 0,
    bathrooms: 0,
    sqft: 0,
    description: '',
    imageUrl:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80',
    neighborhood: '', // [NEW]
    schoolDistrict: '', // [NEW]
    availabilityDate: 'Available Now', // [NEW]
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send data to API (which maps it to Supabase)
      await api.properties.create({
        // Convert string numbers to actual numbers for type safety
        bedrooms: Number(formData.bedrooms),
        bathrooms: Number(formData.bathrooms),
        sqft: Number(formData.sqft),
        // Include only the fields we need from formData
        title: formData.title,
        address: formData.address,
        city: formData.city,
        price: formData.price,
        description: formData.description,
        imageUrl: formData.imageUrl,
        neighborhood: formData.neighborhood,
        schoolDistrict: formData.schoolDistrict,
        availabilityDate: formData.availabilityDate,
        // Default arrays for now (you can add UI selectors for these later)
        badges: ['Veteran Friendly', 'Recently Renovated'],
        amenities: ['Central Air', 'Fenced Yard', 'Pet Friendly'],
        accessibilityFeatures: ['Wide Doorways', 'Grab Bars'],
      });

      addToast('Property listed successfully!', 'success');
      onSuccess();
      onClose();
    } catch (error) {
      addToast('Failed to create property. Please check your inputs.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-xl font-serif font-bold text-p4c-navy">
            Add New Listing
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Section 1: Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 col-span-2">
              <label
                htmlFor="property-title"
                className="text-sm font-medium text-gray-700"
              >
                Property Title
              </label>
              <input
                id="property-title"
                required
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-p4c-gold outline-none"
                placeholder="e.g. Modern Family Home"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="monthly-rent"
                className="text-sm font-medium text-gray-700"
              >
                Monthly Rent ($)
              </label>
              <input
                id="monthly-rent"
                required
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-p4c-gold outline-none"
                placeholder="e.g. 1200"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="availability"
                className="text-sm font-medium text-gray-700"
              >
                Availability
              </label>
              <input
                id="availability"
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-p4c-gold outline-none"
                value={formData.availabilityDate}
                onChange={(e) =>
                  setFormData({ ...formData, availabilityDate: e.target.value })
                }
              />
            </div>
          </div>

          {/* Section 2: Location */}
          <div className="p-4 bg-gray-50 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2 col-span-2">
              <label
                htmlFor="street-address"
                className="text-sm font-medium text-gray-700"
              >
                Street Address
              </label>
              <input
                id="street-address"
                required
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-p4c-gold outline-none"
                placeholder="e.g. 123 Veteran Way"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="city"
                className="text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                id="city"
                required
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-p4c-gold outline-none"
                placeholder="e.g. Tyler"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="neighborhood"
                className="text-sm font-medium text-gray-700"
              >
                Neighborhood
              </label>
              <input
                id="neighborhood"
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-p4c-gold outline-none"
                placeholder="e.g. Azalea District"
                value={formData.neighborhood}
                onChange={(e) =>
                  setFormData({ ...formData, neighborhood: e.target.value })
                }
              />
            </div>
          </div>

          {/* Section 3: Specs */}
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="bedrooms"
                className="text-sm font-medium text-gray-700"
              >
                Bedrooms
              </label>
              <input
                id="bedrooms"
                required
                type="number"
                min="0"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                value={formData.bedrooms}
                onChange={(e) =>
                  setFormData({ ...formData, bedrooms: Number(e.target.value) })
                }
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="bathrooms"
                className="text-sm font-medium text-gray-700"
              >
                Bathrooms
              </label>
              <input
                id="bathrooms"
                required
                type="number"
                min="0"
                step="0.5"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                value={formData.bathrooms}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    bathrooms: Number(e.target.value),
                  })
                }
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="sqft"
                className="text-sm font-medium text-gray-700"
              >
                Sqft
              </label>
              <input
                id="sqft"
                required
                type="number"
                min="0"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg"
                value={formData.sqft}
                onChange={(e) =>
                  setFormData({ ...formData, sqft: Number(e.target.value) })
                }
              />
            </div>
          </div>

          {/* Section 4: Details */}
          <div className="space-y-2">
            <label
              htmlFor="image-url"
              className="text-sm font-medium text-gray-700"
            >
              Image URL
            </label>
            <input
              id="image-url"
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600"
              placeholder="https://..."
              value={formData.imageUrl}
              onChange={(e) =>
                setFormData({ ...formData, imageUrl: e.target.value })
              }
            />
            <p className="text-xs text-gray-400">
              Paste a direct link to an image (Unsplash, etc.)
            </p>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-p4c-navy text-white rounded-lg font-bold hover:bg-p4c-slate transition-colors flex items-center gap-2"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Save className="w-4 h-4" />
              )}
              Save Property
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPropertyModal;

import React, { useState } from 'react';
import { X, Loader2, Save } from 'lucide-react';
import { useToast } from '../context/ToastContext';
import { api } from '../services/api';
import { IMAGES } from '../constants/images';

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
    imageUrl: IMAGES.PROPERTIES.TYLER_RANCH as string,
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
    } catch {
      addToast('Failed to create property. Please check your inputs.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-gray-100 p-6">
          <h2 className="font-serif text-xl font-bold text-p4c-navy">
            Add New Listing
          </h2>
          <button
            onClick={onClose}
            className="rounded-full p-2 transition-colors hover:bg-gray-100"
          >
            <X className="size-5 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 p-6">
          {/* Section 1: Basic Info */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="col-span-2 space-y-2">
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
                className="w-full rounded-lg border border-gray-200 px-4 py-2 outline-none focus:ring-2 focus:ring-p4c-gold"
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
                className="w-full rounded-lg border border-gray-200 px-4 py-2 outline-none focus:ring-2 focus:ring-p4c-gold"
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
                className="w-full rounded-lg border border-gray-200 px-4 py-2 outline-none focus:ring-2 focus:ring-p4c-gold"
                value={formData.availabilityDate}
                onChange={(e) =>
                  setFormData({ ...formData, availabilityDate: e.target.value })
                }
              />
            </div>
          </div>

          {/* Section 2: Location */}
          <div className="grid grid-cols-1 gap-4 rounded-lg bg-gray-50 p-4 md:grid-cols-2">
            <div className="col-span-2 space-y-2">
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
                className="w-full rounded-lg border border-gray-200 px-4 py-2 outline-none focus:ring-2 focus:ring-p4c-gold"
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
                className="w-full rounded-lg border border-gray-200 px-4 py-2 outline-none focus:ring-2 focus:ring-p4c-gold"
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
                className="w-full rounded-lg border border-gray-200 px-4 py-2 outline-none focus:ring-2 focus:ring-p4c-gold"
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
                className="w-full rounded-lg border border-gray-200 px-4 py-2"
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
                className="w-full rounded-lg border border-gray-200 px-4 py-2"
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
                className="w-full rounded-lg border border-gray-200 px-4 py-2"
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
              className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-600"
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

          <div className="flex justify-end gap-3 border-t border-gray-100 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg px-6 py-2 font-medium text-gray-600 transition-colors hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 rounded-lg bg-p4c-navy px-6 py-2 font-bold text-white transition-colors hover:bg-p4c-slate"
            >
              {loading ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <Save className="size-4" />
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

import React, { useState } from 'react';
import { api } from '../../services/api';
import { useToast } from '../../context/ToastContext';

export const PropertyForm = () => {
  const { addToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    address: '',
    price: '',
    bedrooms: '3',
    bathrooms: '2',
    sqft: '',
    description: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.properties.create({
        ...formData,
        // Convert string numbers to actual numbers for type safety
        bedrooms: Number(formData.bedrooms),
        bathrooms: Number(formData.bathrooms),
        sqft: Number(formData.sqft),
        // Add required fields with defaults
        badges: ['Recently Renovated'],
        amenities: ['Central Air'],
        accessibilityFeatures: [],
      });
      addToast('Property created successfully!', 'success');
      setFormData({
        title: '',
        address: '',
        price: '',
        bedrooms: '3',
        bathrooms: '2',
        sqft: '',
        description: '',
      });
    } catch {
      addToast('Failed to create property. Check permissions.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-lg border-t-4 border-p4c-gold bg-white p-6 shadow-md"
    >
      <h2 className="text-2xl font-bold text-p4c-navy">Add New Listing</h2>

      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Property Title
        </label>
        <input
          id="title"
          type="text"
          required
          aria-required="true"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-p4c-gold focus:ring-p4c-gold"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Monthly Rent ($)
          </label>
          <input
            id="price"
            type="text"
            placeholder="e.g., 1,200"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-p4c-gold focus:ring-p4c-gold"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
          />
        </div>
        <div>
          <label
            htmlFor="sqft"
            className="block text-sm font-medium text-gray-700"
          >
            Square Feet
          </label>
          <input
            id="sqft"
            type="number"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-p4c-gold focus:ring-p4c-gold"
            value={formData.sqft}
            onChange={(e) => setFormData({ ...formData, sqft: e.target.value })}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-p4c-navy px-4 py-2 font-bold text-p4c-gold transition-all hover:bg-p4c-navy/90 disabled:opacity-50"
      >
        {loading ? 'Processing...' : 'Register Property'}
      </button>
    </form>
  );
};

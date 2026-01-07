import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Shield,
  Check,
  X,
  FileSearch,
  HardHat,
  TrendingUp,
  Loader2,
} from 'lucide-react';
import { api } from '../services/api';
import type { RenovationStandard } from '../types';
import { useToast } from '../context/ToastContext';
import { IMAGES } from '../constants/images';

const Transparency: React.FC = () => {
  const [standards, setStandards] = useState<RenovationStandard[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToast } = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.transparency.getStandards();
        setStandards(data);
      } catch (error) {
        addToast(
          'Failed to load transparency data. Please try again.',
          'error'
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [addToast]);

  return (
    <div className="bg-p4c-beige min-h-screen">
      <Helmet>
        <title>Transparency & Standards | Properties 4 Creation</title>
        <meta
          name="description"
          content="View our open book policy on renovation standards. We compare typical landlord shortcuts with the Properties 4 Creation premium standard."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.BANNERS.HERO_TRANSPARENCY}
            alt="Transparency Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay-primary" />
          <div className="absolute inset-0 hero-overlay-secondary" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6 backdrop-blur-sm border border-white/10">
            <FileSearch className="w-8 h-8 text-p4c-gold" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 hero-text-contrast">
            The Open Book Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed hero-text-enhanced">
            Trust is earned through action, not words. We believe tenants and
            investors deserve to know exactly where every dollar goes and the
            quality of materials we install.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-20">
        {/* The Comparison Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-20 border border-gray-100">
          <div className="p-8 border-b border-gray-100 bg-gray-50">
            <h2 className="text-2xl font-serif font-bold text-p4c-navy">
              The Renovation Standard
            </h2>
            <p className="text-gray-600 mt-2">
              How we stack up against the industry average.
            </p>
          </div>

          {loading ? (
            <div className="p-12 flex justify-center">
              <Loader2 className="w-8 h-8 text-p4c-gold animate-spin" />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500 font-bold">
                    <th className="p-6">Feature</th>
                    <th className="p-6 text-red-800 bg-red-50/50">
                      Typical "Slumlord"
                    </th>
                    <th className="p-6 text-p4c-navy bg-p4c-gold/10">
                      The P4C Standard
                    </th>
                    <th className="p-6">Why It Matters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {standards.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="p-6 font-bold text-p4c-navy">
                        {item.category}
                      </td>
                      <td className="p-6 text-gray-600 bg-red-50/20">
                        <div className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                          {item.standardLandlord}
                        </div>
                      </td>
                      <td className="p-6 font-semibold text-p4c-navy bg-p4c-gold/5">
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          {item.p4cStandard}
                        </div>
                      </td>
                      <td className="p-6 text-sm text-gray-600 italic">
                        "{item.benefit}"
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Workflow Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-6">
              Contractor Integrity
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We don't just hire the cheapest bid. We hire partners who share
              our values. Every contractor vetting process includes:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <Shield className="w-6 h-6 text-p4c-gold mr-4" />
                <span className="font-semibold text-p4c-navy">
                  Background & License Verification
                </span>
              </li>
              <li className="flex items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <TrendingUp className="w-6 h-6 text-p4c-gold mr-4" />
                <span className="font-semibold text-p4c-navy">
                  Quality of Work Inspections
                </span>
              </li>
              <li className="flex items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <HardHat className="w-6 h-6 text-p4c-gold mr-4" />
                <span className="font-semibold text-p4c-navy">
                  Veteran Hiring Preference
                </span>
              </li>
            </ul>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={IMAGES.GALLERY.MEASURING}
              alt="Contractor reviewing plans"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-p4c-navy/30 mix-blend-multiply" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-p4c-navy font-bold text-sm">
                "We pay our contractors fairly and on time, ensuring they do
                their best work for our families."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transparency;

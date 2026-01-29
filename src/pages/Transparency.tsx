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
  CheckCircle2,
} from 'lucide-react';
import { api } from '../services/api';
import type { RenovationStandard } from '../types/types';
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
        {/* The Renovation Standard */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-20 border border-gray-100">
          <div className="p-8 border-b border-gray-100 bg-gradient-to-r from-p4c-navy to-p4c-slate">
            <h2 className="text-2xl font-serif font-bold text-white">
              The Renovation Standard
            </h2>
            <p className="text-gray-300 mt-2">
              Revitalizing East Texas through sustainable, high-quality renovations that stand the test of time.
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
                    <th className="p-6 text-gray-600 bg-gray-50">
                      Industry Standard
                    </th>
                    <th className="p-6 text-p4c-navy bg-p4c-gold/10">
                      The P4C Revitalization Standard
                    </th>
                    <th className="p-6">Community Impact</th>
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
                      <td className="p-6 text-gray-500 bg-gray-50/30">
                        <div className="flex items-start gap-2">
                          <span className="text-gray-400 mt-1">•</span>
                          {item.standardLandlord}
                        </div>
                      </td>
                      <td className="p-6 font-semibold text-p4c-navy bg-p4c-gold/5">
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-p4c-gold mt-1 flex-shrink-0" />
                          {item.p4cStandard}
                        </div>
                      </td>
                      <td className="p-6 text-sm text-gray-600">
                        {item.benefit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="p-6 bg-p4c-beige/30 border-t border-gray-100">
            <p className="text-sm text-gray-600 text-center">
              <strong>Our Commitment:</strong> Every renovation is an investment in East Texas communities. 
              We don't just repair homes—we revitalize neighborhoods, create local jobs, and provide 
              dignified housing for families and veterans.
            </p>
          </div>
        </div>

        {/* Quality Standards Section - Mission-Driven */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-20 border border-gray-100">
          <div className="p-8 border-b border-gray-100 bg-gradient-to-r from-p4c-gold/10 to-p4c-beige">
            <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full text-p4c-navy text-xs font-bold uppercase tracking-wider mb-4 border border-p4c-gold/30 shadow-sm">
              <Shield className="w-4 h-4 text-p4c-gold" /> Quality Standards
            </div>
            <h2 className="text-2xl font-serif font-bold text-p4c-navy">
              Sustainable Solutions for Property Owners & Residents
            </h2>
            <p className="text-gray-600 mt-2">
              We believe quality housing is the foundation of thriving communities. 
              Our commitment to excellence drives every decision we make.
            </p>
          </div>
          <div className="p-8">
            <p className="text-gray-700 leading-relaxed mb-8">
              At Properties 4 Creation, we install materials that honor both the 
              homeowner&apos;s investment and the resident&apos;s dignity. By choosing 
              premium, sustainable materials, we reduce long-term maintenance costs 
              while creating homes that families are proud to call their own. This 
              approach supports our mission: <strong>revitalizing East Texas one property at a time</strong>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-p4c-beige/30 p-6 rounded-xl">
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-p4c-gold mr-3 flex-shrink-0" />
                  <div>
                    <span className="text-p4c-navy font-bold">Quartz Countertops</span>
                    <p className="text-gray-600 text-sm mt-1">
                      Durable, hygienic surfaces that withstand daily use while maintaining 
                      their beauty for decades.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-p4c-beige/30 p-6 rounded-xl">
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-p4c-gold mr-3 flex-shrink-0" />
                  <div>
                    <span className="text-p4c-navy font-bold">Luxury Vinyl Plank Flooring</span>
                    <p className="text-gray-600 text-sm mt-1">
                      Waterproof, scratch-resistant flooring that looks beautiful 
                      and handles active families and pets.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-p4c-beige/30 p-6 rounded-xl">
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-p4c-gold mr-3 flex-shrink-0" />
                  <div>
                    <span className="text-p4c-navy font-bold">Energy-Efficient Systems</span>
                    <p className="text-gray-600 text-sm mt-1">
                      High-efficiency HVAC and appliances reduce utility costs for 
                      residents and environmental impact for the community.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-p4c-beige/30 p-6 rounded-xl">
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-p4c-gold mr-3 flex-shrink-0" />
                  <div>
                    <span className="text-p4c-navy font-bold">Local Contractor Partnerships</span>
                    <p className="text-gray-600 text-sm mt-1">
                      We prioritize East Texas tradespeople, keeping investment dollars 
                      circulating in our local economy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 p-6 bg-p4c-navy rounded-xl text-white">
              <p className="text-center italic">
                &quot;Quality isn&apos;t just about materials—it&apos;s about creating 
                homes where families can thrive and communities can grow.&quot;
              </p>
            </div>
          </div>
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

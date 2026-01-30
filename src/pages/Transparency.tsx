import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Shield,
  Check,
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
      } catch {
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
    <div className="min-h-screen bg-p4c-beige">
      <Helmet>
        <title>Transparency & Standards | Properties 4 Creation</title>
        <meta
          name="description"
          content="View our open book policy on renovation standards. We compare typical landlord shortcuts with the Properties 4 Creation premium standard."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden py-20 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.BANNERS.HERO_TRANSPARENCY}
            alt="Transparency Banner"
            className="size-full object-cover"
          />
          <div className="hero-overlay-primary absolute inset-0" />
          <div className="hero-overlay-secondary absolute inset-0" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 p-3 backdrop-blur-sm">
            <FileSearch className="size-8 text-p4c-gold" />
          </div>
          <h1 className="hero-text-contrast mb-6 font-serif text-4xl font-bold md:text-5xl">
            The Open Book Policy
          </h1>
          <p className="hero-text-enhanced mx-auto max-w-2xl text-xl leading-relaxed text-gray-300">
            Trust is earned through action, not words. We believe tenants and
            investors deserve to know exactly where every dollar goes and the
            quality of materials we install.
          </p>
        </div>
      </div>

      <div className="relative z-20 mx-auto -mt-10 max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* The Renovation Standard */}
        <div className="mb-20 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">
          <div className="border-b border-gray-100 bg-gradient-to-r from-p4c-navy to-p4c-slate p-8">
            <h2 className="font-serif text-2xl font-bold text-white">
              The Renovation Standard
            </h2>
            <p className="mt-2 text-gray-300">
              Revitalizing East Texas through sustainable, high-quality
              renovations that stand the test of time.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center p-12">
              <Loader2 className="size-8 animate-spin text-p4c-gold" />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50 text-xs font-bold uppercase tracking-wider text-gray-500">
                    <th className="p-6">Feature</th>
                    <th className="bg-gray-50 p-6 text-gray-600">
                      Industry Standard
                    </th>
                    <th className="bg-p4c-gold/10 p-6 text-p4c-navy">
                      The P4C Revitalization Standard
                    </th>
                    <th className="p-6">Community Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {standards.map((item) => (
                    <tr
                      key={item.id}
                      className="transition-colors hover:bg-gray-50/50"
                    >
                      <td className="p-6 font-bold text-p4c-navy">
                        {item.category}
                      </td>
                      <td className="bg-gray-50/30 p-6 text-gray-500">
                        <div className="flex items-start gap-2">
                          <span className="mt-1 text-gray-400">•</span>
                          {item.standardLandlord}
                        </div>
                      </td>
                      <td className="bg-p4c-gold/5 p-6 font-semibold text-p4c-navy">
                        <div className="flex items-start gap-2">
                          <Check className="mt-1 size-4 shrink-0 text-p4c-gold" />
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

          <div className="bg-p4c-beige/30 border-t border-gray-100 p-6">
            <p className="text-center text-sm text-gray-600">
              <strong>Our Commitment:</strong> Every renovation is an investment
              in East Texas communities. We don't just repair homes—we
              revitalize neighborhoods, create local jobs, and provide dignified
              housing for families and veterans.
            </p>
          </div>
        </div>

        {/* Quality Standards Section - Mission-Driven */}
        <div className="mb-20 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">
          <div className="from-p4c-gold/10 border-b border-gray-100 bg-gradient-to-r to-p4c-beige p-8">
            <div className="border-p4c-gold/30 mb-4 inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-p4c-navy shadow-sm">
              <Shield className="size-4 text-p4c-gold" /> Quality Standards
            </div>
            <h2 className="font-serif text-2xl font-bold text-p4c-navy">
              Sustainable Solutions for Property Owners & Residents
            </h2>
            <p className="mt-2 text-gray-600">
              We believe quality housing is the foundation of thriving
              communities. Our commitment to excellence drives every decision we
              make.
            </p>
          </div>
          <div className="p-8">
            <p className="mb-8 leading-relaxed text-gray-700">
              At Properties 4 Creation, we install materials that honor both the
              homeowner&apos;s investment and the resident&apos;s dignity. By
              choosing premium, sustainable materials, we reduce long-term
              maintenance costs while creating homes that families are proud to
              call their own. This approach supports our mission:{' '}
              <strong>revitalizing East Texas one property at a time</strong>.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="bg-p4c-beige/30 rounded-xl p-6">
                <div className="flex items-start">
                  <CheckCircle2 className="mr-3 size-6 shrink-0 text-p4c-gold" />
                  <div>
                    <span className="font-bold text-p4c-navy">
                      Quartz Countertops
                    </span>
                    <p className="mt-1 text-sm text-gray-600">
                      Durable, hygienic surfaces that withstand daily use while
                      maintaining their beauty for decades.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-p4c-beige/30 rounded-xl p-6">
                <div className="flex items-start">
                  <CheckCircle2 className="mr-3 size-6 shrink-0 text-p4c-gold" />
                  <div>
                    <span className="font-bold text-p4c-navy">
                      Luxury Vinyl Plank Flooring
                    </span>
                    <p className="mt-1 text-sm text-gray-600">
                      Waterproof, scratch-resistant flooring that looks
                      beautiful and handles active families and pets.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-p4c-beige/30 rounded-xl p-6">
                <div className="flex items-start">
                  <CheckCircle2 className="mr-3 size-6 shrink-0 text-p4c-gold" />
                  <div>
                    <span className="font-bold text-p4c-navy">
                      Energy-Efficient Systems
                    </span>
                    <p className="mt-1 text-sm text-gray-600">
                      High-efficiency HVAC and appliances reduce utility costs
                      for residents and environmental impact for the community.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-p4c-beige/30 rounded-xl p-6">
                <div className="flex items-start">
                  <CheckCircle2 className="mr-3 size-6 shrink-0 text-p4c-gold" />
                  <div>
                    <span className="font-bold text-p4c-navy">
                      Local Contractor Partnerships
                    </span>
                    <p className="mt-1 text-sm text-gray-600">
                      We prioritize East Texas tradespeople, keeping investment
                      dollars circulating in our local economy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 rounded-xl bg-p4c-navy p-6 text-white">
              <p className="text-center italic">
                &quot;Quality isn&apos;t just about materials—it&apos;s about
                creating homes where families can thrive and communities can
                grow.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Workflow Section */}
        <div className="mb-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 font-serif text-3xl font-bold text-p4c-navy">
              Contractor Integrity
            </h2>
            <p className="mb-6 leading-relaxed text-gray-700">
              We don't just hire the cheapest bid. We hire partners who share
              our values. Every contractor vetting process includes:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                <Shield className="mr-4 size-6 text-p4c-gold" />
                <span className="font-semibold text-p4c-navy">
                  Background & License Verification
                </span>
              </li>
              <li className="flex items-center rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                <TrendingUp className="mr-4 size-6 text-p4c-gold" />
                <span className="font-semibold text-p4c-navy">
                  Quality of Work Inspections
                </span>
              </li>
              <li className="flex items-center rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                <HardHat className="mr-4 size-6 text-p4c-gold" />
                <span className="font-semibold text-p4c-navy">
                  Veteran Hiring Preference
                </span>
              </li>
            </ul>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={IMAGES.GALLERY.MEASURING}
              alt="Contractor reviewing plans"
              className="size-full object-cover"
            />
            <div className="bg-p4c-navy/30 absolute inset-0 mix-blend-multiply" />
            <div className="absolute inset-x-6 bottom-6 rounded-lg bg-white/90 p-4 backdrop-blur-sm">
              <p className="text-sm font-bold text-p4c-navy">
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

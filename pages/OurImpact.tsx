import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { api } from '../services/api';
import type { StatMetric, FinancialBreakdown } from '../types';
import {
  Home,
  Users,
  Hammer,
  DollarSign,
  Heart,
  Loader2,
  ArrowUpRight,
} from 'lucide-react';
import { useToast } from '../context/ToastContext';
import { IMAGES } from '../constants/images';

const OurImpact: React.FC = () => {
  const [metrics, setMetrics] = useState<StatMetric[]>([]);
  const [financials, setFinancials] = useState<FinancialBreakdown[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToast } = useToast();

  useEffect(() => {
    const fetchImpactData = async () => {
      try {
        const [metricsData, financialData] = await Promise.all([
          api.impact.getMetrics(),
          api.impact.getFinancialBreakdown(),
        ]);
        setMetrics(metricsData);
        setFinancials(financialData);
      } catch (error) {
        addToast('Unable to load impact data.', 'error');
      } finally {
        setLoading(false);
      }
    };
    fetchImpactData();
  }, [addToast]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'home':
        return <Home className="w-6 h-6" />;
      case 'users':
        return <Users className="w-6 h-6" />;
      case 'hammer':
        return <Hammer className="w-6 h-6" />;
      case 'dollar':
        return <DollarSign className="w-6 h-6" />;
      case 'heart':
        return <Heart className="w-6 h-6" />;
      default:
        return <Home className="w-6 h-6" />;
    }
  };

  return (
    <div className="bg-p4c-beige min-h-screen">
      <Helmet>
        <title>Our Impact | Properties 4 Creation</title>
        <meta
          name="description"
          content="See the data behind our mission. Families housed, veterans served, and communities revitalized in East Texas."
        />
      </Helmet>

      {/* Hero */}
      <div className="bg-p4c-navy text-white pt-20 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.BANNERS.HERO_IMPACT}
            alt="Impact Banner"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            More Than Just Rentals.
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We measure our bottom line differently. It&apos;s not just about
            about the tangible difference we make in the lives of veterans and
            the fabric of our neighborhoods.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-20 relative z-20">
        {/* Metrics Grid */}
        {loading ? (
          <div className="bg-white rounded-2xl shadow-xl p-12 flex justify-center items-center">
            <Loader2 className="w-10 h-10 text-p4c-gold animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {metrics.map((stat) => (
              <div
                key={stat.id}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-p4c-gold ring-1 ring-gray-900/5"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-p4c-navy/5 p-3 rounded-lg text-p4c-navy">
                    {getIcon(stat.icon)}
                  </div>
                  {stat.trend === 'up' && (
                    <div className="flex items-center text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      <ArrowUpRight className="w-3 h-3 mr-1" />
                      {stat.trendValue}
                    </div>
                  )}
                </div>
                <div className="text-4xl font-serif font-bold text-p4c-navy mb-2">
                  {stat.value}
                </div>
                <div className="font-bold text-gray-900 mb-2">{stat.label}</div>
                <p className="text-sm text-gray-500 leading-snug">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Narrative Section & Financial Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 ring-1 ring-gray-900/5">
              <h2 className="text-2xl font-serif font-bold text-p4c-navy mb-4">
                The Multiplier Effect
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                When we purchase a distressed property, the impact ripples
                outward. We remove blight, which stabilizes neighbor property
                values. We hire local tradespeople, injecting capital into the
                local economy. And we provide a stable home, allowing a family
                to put down roots.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Study after study shows that stable housing is the primary
                determinant of health outcomes, educational attainment for
                children, and employment stability for adults. We aren't just
                landlords; we are stability partners.
              </p>
            </div>

            {/* Testimonials Placeholder (mock) */}
            <div className="bg-p4c-navy text-white p-8 rounded-2xl shadow-lg relative overflow-hidden ring-1 ring-white/10">
              <div className="relative z-10">
                <Heart className="w-10 h-10 text-p4c-gold mb-4" />
                <p className="text-xl font-serif italic mb-6">
                  "I was living in my car for three months before finding
                  Properties 4 Creation. They didn't just give me keys; they
                  treated me with respect from the first phone call. This isn't
                  just a house, it's my sanctuary."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-400" />{' '}
                  {/* Avatar Placeholder */}
                  <div>
                    <div className="font-bold">Michael T.</div>
                    <div className="text-sm text-p4c-gold">US Army Veteran</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Breakdown */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 ring-1 ring-gray-900/5 h-fit">
            <h3 className="text-xl font-serif font-bold text-p4c-navy mb-6">
              Where the Money Goes
            </h3>
            <div className="space-y-4">
              {financials.map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm mb-1 font-medium">
                    <span className="text-gray-700">{item.category}</span>
                    <span className="text-gray-900 font-bold">
                      {item.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="h-2.5 rounded-full"
                      style={{
                        width: `${item.percentage}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-500 mb-4">
                Interested in becoming an impact investor?
              </p>
              <button className="w-full border-2 border-p4c-navy text-p4c-navy font-bold py-2 rounded hover:bg-p4c-navy hover:text-white transition-colors">
                Request Financial Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurImpact;

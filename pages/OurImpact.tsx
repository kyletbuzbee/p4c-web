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
  TrendingUp,
  Building,
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
        <title>
          Community Impact & Investment Data | Properties 4 Creation
        </title>
        <meta
          name="description"
          content="Review our community revitalization metrics. We track economic impact, property value increases, and housing stability in Tyler, Longview, and Marshall."
        />
      </Helmet>

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={IMAGES.BANNERS.HERO_PROJECTS}
          className="absolute top-0 left-0 w-full h-full object-cover"
          aria-label="Impact hero background video showcasing our projects"
        >
          <source src={IMAGES.VIDEOS.HERO_PROJECTS} type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full hero-overlay-primary" />
        <div className="absolute top-0 left-0 w-full h-full hero-overlay-secondary" />
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center max-w-4xl animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Strategic Community <br />
              <span className="text-p4c-gold">Revitalization.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
              We measure success by asset performance and the economic uplift of
              <strong> Tyler, Longview, and Marshall</strong> neighborhoods.
            </p>
          </div>
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

        {/* Project Spotlight - BRRR Cycle Breakdown */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 ring-1 ring-gray-900/5">
            <div className="p-8 border-b border-gray-100 bg-gray-50">
              <h2 className="text-2xl font-serif font-bold text-p4c-navy flex items-center gap-3">
                <Building className="w-6 h-6 text-p4c-gold" />
                The Revitalization Cycle (BRRR Strategy)
              </h2>
              <p className="text-gray-600 mt-2">
                Our systematic approach to acquiring and stabilizing distressed
                assets.
              </p>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Buy (As-Is) */}
                <div className="text-center group">
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                    <img
                      src={IMAGES.GALLERY.LINDALE_COTTAGE}
                      alt="Acquisition of distressed property"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="bg-p4c-navy text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        1. Acquisition
                      </span>
                    </div>
                  </div>
                  <h3 className="font-bold text-p4c-navy mb-2">
                    Identify & Acquire
                  </h3>
                  <p className="text-sm text-gray-600">
                    We purchase undervalued assets in high-potential East Texas
                    neighborhoods.
                  </p>
                </div>

                {/* Rehab */}
                <div className="text-center group">
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                    <img
                      src={IMAGES.GALLERY.WORK_FRAMING_DOOR}
                      alt="Capital improvement construction"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="bg-p4c-navy text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        2. Rehabilitation
                      </span>
                    </div>
                  </div>
                  <h3 className="font-bold text-p4c-navy mb-2">
                    Capital Improvement
                  </h3>
                  <p className="text-sm text-gray-600">
                    Strategic renovations inject equity and extend the asset's
                    lifespan by 20+ years.
                  </p>
                </div>

                {/* Rent */}
                <div className="text-center group">
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                    <img
                      src={IMAGES.GALLERY.PROJECTS_AFTER_LIVING_ROOM}
                      alt="Stabilized asset with tenants"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="bg-p4c-navy text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        3. Stabilization
                      </span>
                    </div>
                  </div>
                  <h3 className="font-bold text-p4c-navy mb-2">
                    Lease & Manage
                  </h3>
                  <p className="text-sm text-gray-600">
                    Placement of reliable tenants (Private & Section 8) ensures
                    consistent cash flow.
                  </p>
                </div>

                {/* Repeat */}
                <div className="text-center group">
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4 shadow-lg bg-gradient-to-br from-p4c-gold to-p4c-navy flex items-center justify-center group-hover:scale-[1.02] transition-transform">
                    <div className="text-center text-white">
                      <TrendingUp className="w-12 h-12 mx-auto mb-2" />
                      <span className="text-2xl font-bold">Growth</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-p4c-navy mb-2">
                    Refinance & Repeat
                  </h3>
                  <p className="text-sm text-gray-600">
                    We leverage equity to acquire new assets, scaling our
                    portfolio and community impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Section & Financial Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 ring-1 ring-gray-900/5">
              <h2 className="text-2xl font-serif font-bold text-p4c-navy mb-4">
                The Economic Multiplier Effect
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our investment strategy does more than generate returns; it acts
                as a catalyst for local economic growth. By removing blight, we
                stabilize surrounding property values and attract further
                investment into the community.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Local Labor First:</strong> We prioritize contracts with
                East Texas tradespeople. Every dollar spent on renovation
                circulates within the Tyler, Longview, and Marshall economies,
                supporting local small businesses and families.
              </p>
            </div>

            {/* Quote Card */}
            <div className="bg-p4c-navy text-white p-8 rounded-2xl shadow-lg relative overflow-hidden ring-1 ring-white/10">
              <div className="relative z-10">
                <p className="text-xl font-serif italic mb-6">
                  "Properties 4 Creation isn't just a landlord; they are a
                  cornerstone investor in our neighborhood. When they fix up a
                  house, the whole street looks better."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-p4c-gold flex items-center justify-center text-p4c-navy font-bold">
                    M
                  </div>
                  <div>
                    <div className="font-bold">Local City Official</div>
                    <div className="text-sm text-p4c-gold">
                      Community Development Dept.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Breakdown */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 ring-1 ring-gray-900/5 h-fit">
            <h3 className="text-xl font-serif font-bold text-p4c-navy mb-6">
              Capital Allocation
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
                Interested in partnership opportunities?
              </p>
              <button className="w-full border-2 border-p4c-navy text-p4c-navy font-bold py-2 rounded hover:bg-p4c-navy hover:text-white transition-colors">
                Request Investor Prospectus
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurImpact;

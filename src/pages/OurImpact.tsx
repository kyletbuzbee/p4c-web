import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { api } from '../services/api';
import type { StatMetric, FinancialBreakdown } from '../types/types';
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
      } catch {
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
        return <Home className="size-6" />;
      case 'users':
        return <Users className="size-6" />;
      case 'hammer':
        return <Hammer className="size-6" />;
      case 'dollar':
        return <DollarSign className="size-6" />;
      case 'heart':
        return <Heart className="size-6" />;
      default:
        return <Home className="size-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-p4c-beige">
      <Helmet>
        <title>
          Community Impact & Investment Data | Properties 4 Creation
        </title>
        <meta
          name="description"
          content="Review our community revitalization metrics. We track economic impact, property value increases, and housing stability in East Texas."
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
          className="absolute left-0 top-0 size-full object-cover"
          aria-label="Kitchen renovation timelapse showcasing our transformation process"
        >
          <source src={IMAGES.VIDEOS.KITCHEN_TIMELAPSE} type="video/mp4" />
        </video>
        <div className="hero-overlay-primary absolute left-0 top-0 size-full bg-p4c-navy/15" />
        <div className="hero-overlay-secondary absolute left-0 top-0 size-full bg-gradient-to-t from-p4c-navy/80 to-transparent" />
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="hero-text-container max-w-4xl animate-fade-in-up rounded-2xl border border-white/20 bg-p4c-navy/70 p-4 text-center backdrop-blur-2xl md:p-6">
            <h1 className="hero-text-enhanced mb-6 font-serif text-4xl font-bold leading-tight text-white md:text-6xl">
              Strategic Community <br />
              <span className="text-p4c-gold">Revitalization.</span>
            </h1>
            <p className="hero-text-enhanced mx-auto max-w-2xl text-lg font-light leading-relaxed text-gray-200 md:text-xl">
              We measure success by asset performance and the economic uplift of
              <strong> East Texas</strong> neighborhoods.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-20 mx-auto -mt-20 max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        {/* Metrics Grid */}
        {loading ? (
          <div className="flex items-center justify-center rounded-2xl bg-white p-12 shadow-xl">
            <Loader2 className="size-10 animate-spin text-p4c-gold" />
          </div>
        ) : (
          <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {metrics.map((stat) => (
              <div
                key={stat.id}
                className="rounded-2xl border-t-4 border-p4c-gold bg-white p-6 shadow-lg ring-1 ring-gray-900/5 transition-shadow hover:shadow-xl"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="rounded-lg bg-p4c-navy/5 p-3 text-p4c-navy">
                    {getIcon(stat.icon)}
                  </div>
                  {stat.trend === 'up' && (
                    <div className="flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-bold text-green-600">
                      <ArrowUpRight className="mr-1 size-3" />
                      {stat.trendValue}
                    </div>
                  )}
                </div>
                <div className="mb-2 font-serif text-4xl font-bold text-p4c-navy">
                  {stat.value}
                </div>
                <div className="mb-2 font-bold text-gray-900">{stat.label}</div>
                <p className="text-sm leading-snug text-gray-500">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Project Spotlight - BRRR Cycle Breakdown */}
        <div className="mb-16">
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl ring-1 ring-gray-900/5">
            <div className="border-b border-gray-100 bg-gray-50 p-8">
              <h2 className="flex items-center gap-3 font-serif text-2xl font-bold text-p4c-navy">
                <Building className="size-6 text-p4c-gold" />
                The Revitalization Cycle (BRRR Strategy)
              </h2>
              <p className="mt-2 text-gray-600">
                Our systematic approach to acquiring and stabilizing distressed
                assets.
              </p>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {/* Buy (As-Is) */}
                <div className="group text-center">
                  <div className="relative mb-4 h-48 overflow-hidden rounded-lg shadow-lg transition-shadow group-hover:shadow-xl">
                    <img
                      src={IMAGES.TEAM.ACQUISITION}
                      alt="Acquisition of distressed property"
                      className="size-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                      loading="lazy"
                      width={800}
                      height={400}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <span className="rounded-full bg-p4c-navy px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                        1. Acquisition
                      </span>
                    </div>
                  </div>
                  <h3 className="mb-2 font-bold text-p4c-navy">
                    Identify & Acquire
                  </h3>
                  <p className="text-sm text-gray-600">
                    We purchase undervalued assets in high-potential East Texas
                    neighborhoods.
                  </p>
                </div>

                {/* Rehab */}
                <div className="group text-center">
                  <div className="relative mb-4 h-48 overflow-hidden rounded-lg shadow-lg transition-shadow group-hover:shadow-xl">
                    <img
                      src={IMAGES.TEAM.REHABILITATION}
                      alt="Capital improvement construction"
                      className="size-full object-cover"
                      loading="lazy"
                      width={800}
                      height={400}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <span className="rounded-full bg-p4c-navy px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                        2. Rehabilitation
                      </span>
                    </div>
                  </div>
                  <h3 className="mb-2 font-bold text-p4c-navy">
                    Capital Improvement
                  </h3>
                  <p className="text-sm text-gray-600">
                    Strategic renovations inject equity and extend the
                    asset&apos;s lifespan by 20+ years.
                  </p>
                </div>

                {/* Rent */}
                <div className="group text-center">
                  <div className="relative mb-4 h-48 overflow-hidden rounded-lg shadow-lg transition-shadow group-hover:shadow-xl">
                    <img
                      src={IMAGES.PROPERTIES.TYLER_RANCH}
                      alt="Stabilized asset with tenants"
                      className="size-full object-cover"
                      loading="lazy"
                      width={800}
                      height={400}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <span className="rounded-full bg-p4c-navy px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                        3. Stabilization
                      </span>
                    </div>
                  </div>
                  <h3 className="mb-2 font-bold text-p4c-navy">
                    Lease & Manage
                  </h3>
                  <p className="text-sm text-gray-600">
                    Placement of reliable tenants (Private & Section 8) ensures
                    consistent cash flow.
                  </p>
                </div>

                {/* Repeat */}
                <div className="group text-center">
                  <div className="relative mb-4 flex h-48 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-p4c-gold to-p4c-navy shadow-lg transition-transform group-hover:scale-[1.02]">
                    <div className="text-center text-white">
                      <TrendingUp className="mx-auto mb-2 size-12" />
                      <span className="text-2xl font-bold">Growth</span>
                    </div>
                  </div>
                  <h3 className="mb-2 font-bold text-p4c-navy">
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
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm ring-1 ring-gray-900/5">
              <h2 className="mb-4 font-serif text-2xl font-bold text-p4c-navy">
                The Economic Multiplier Effect
              </h2>
              <p className="mb-4 leading-relaxed text-gray-700">
                Our investment strategy does more than generate returns; it acts
                as a catalyst for local economic growth. By removing blight, we
                stabilize surrounding property values and attract further
                investment into the community.
              </p>
              <p className="leading-relaxed text-gray-700">
                <strong>Local Labor First:</strong> We prioritize contracts with
                East Texas tradespeople. Every dollar spent on renovation
                circulates within the East Texas economies, supporting local
                small businesses and families.
              </p>
            </div>

            {/* Quote Card */}
            <div className="relative overflow-hidden rounded-2xl bg-p4c-navy p-8 text-white shadow-lg ring-1 ring-white/10">
              <div className="relative z-10">
                <p className="mb-6 font-serif text-xl italic">
                  &quot;Properties 4 Creation isn&apos;t just a landlord; they
                  are a cornerstone investor in our neighborhood. When they fix
                  up a house, the whole street looks better.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-p4c-gold font-bold text-p4c-navy">
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
          <div className="h-fit rounded-2xl border border-gray-100 bg-white p-8 shadow-lg ring-1 ring-gray-900/5">
            <h3 className="mb-6 font-serif text-xl font-bold text-p4c-navy">
              Capital Allocation
            </h3>
            <div className="space-y-4">
              {financials.map((item, idx) => (
                <div key={idx}>
                  <div className="mb-1 flex justify-between text-sm font-medium">
                    <span className="text-gray-700">{item.category}</span>
                    <span className="font-bold text-gray-900">
                      {item.percentage}%
                    </span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
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
            <div className="mt-8 border-t border-gray-100 pt-6 text-center">
              <p className="mb-4 text-sm text-gray-500">
                Interested in partnership opportunities?
              </p>
              <a
                href="/contact"
                className="inline-block w-full rounded border-2 border-p4c-navy py-2 font-bold text-p4c-navy transition-colors hover:bg-p4c-navy hover:text-white"
              >
                Request Investor Prospectus
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurImpact;

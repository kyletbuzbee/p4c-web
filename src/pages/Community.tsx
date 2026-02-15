import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Home, Wrench, Users, DollarSign, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { IMAGES } from '../constants/images';

/**
 * P4C ENTERPRISE INTERFACE: StreamStep
 * Type-safe data model for revitalization process phases
 */
interface StreamStep {
  id: string;
  code: string;
  label: string;
  icon: React.ElementType;
  description: string;
  kpis: string[];
  image: string;
}

/**
 * P4C ENTERPRISE DATA MODEL: VALUE_STREAM
 * Implements connected pipeline architecture for process transparency
 */
const VALUE_STREAM: StreamStep[] = [
  {
    id: '01',
    code: 'AQ-TRANS',
    label: 'Strategic Acquisition',
    icon: Home,
    description:
      'Proprietary selection of distressed assets based on local economic indicators and community needs.',
    kpis: ['Market Viability', 'Structural Integrity'],
    image: IMAGES.TEAM.ACQUISITION,
  },
  {
    id: '02',
    code: 'RH-CORE',
    label: 'Precision Rehabilitation',
    icon: Wrench,
    description:
      'Execution of high-spec renovation protocols to meet P4C Excellence Standards and modern efficiency.',
    kpis: ['Material Lifecycle', 'Energy Rating'],
    image: IMAGES.TEAM.REHABILITATION,
  },
  {
    id: '03',
    code: 'ST-COMM',
    label: 'Neighborhood Stabilization',
    icon: Users,
    description:
      'Transitioning properties into forever-homes, ensuring long-term resident retention and local safety.',
    kpis: ['Resident Stability', 'Economic Impact'],
    image: IMAGES.TEAM.GROWTH,
  },
];

/**
 * P4C ENTERPRISE COMPONENT: RevitalizationValueStream
 * Implements a connected pipeline architecture for process transparency
 */
const RevitalizationValueStream: React.FC = () => (
  <section className="bg-white py-24">
    <div className="mx-auto max-w-7xl px-4">
      {/* Section Header with Enterprise Branding */}
      <div className="mb-20 border-l-8 border-p4c-gold pl-8">
        <h2 className="font-serif text-5xl font-extrabold tracking-tight text-p4c-navy">
          Revitalization Value Stream
        </h2>
        <p className="mt-4 font-mono text-sm uppercase tracking-widest text-p4c-slate/60">
          Continuous Integration / Community Delivery (CI/CD) Framework
        </p>
      </div>

      {/* The Connected Pipeline */}
      <div className="relative">
        {/* Horizontal Connector Line (Desktop Only) */}
        <div
          className="absolute left-0 top-[4.5rem] z-0 hidden h-1 w-full bg-p4c-beige/50 lg:block"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          {VALUE_STREAM.map((step) => (
            <div key={step.code} className="group relative z-10 flex flex-col">
              {/* Step Marker Node */}
              <div className="mb-8 flex items-center gap-4">
                <div className="flex size-20 items-center justify-center rounded-2xl bg-p4c-navy text-p4c-gold shadow-2xl ring-4 ring-white transition-all duration-500 group-hover:bg-p4c-gold group-hover:text-p4c-navy">
                  <step.icon className="size-10" aria-hidden="true" />
                </div>
                <div className="font-mono text-xs font-bold text-p4c-gold">
                  PHASE_{step.id} <br />
                  <span className="text-p4c-navy/40">[{step.code}]</span>
                </div>
              </div>

              {/* Technical Card Content */}
              <div className="flex-1 rounded-3xl border border-gray-100 bg-p4c-beige/5 p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-p4c-navy/5">
                <div className="mb-6 h-48 overflow-hidden rounded-2xl border border-p4c-gold/20 grayscale transition-all duration-700 group-hover:grayscale-0">
                  <img
                    src={step.image}
                    alt={step.label}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                <h3 className="mb-3 text-2xl font-bold text-p4c-navy">
                  {step.label}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-p4c-slate/80">
                  {step.description}
                </p>

                {/* KPI Metadata Badges */}
                <div className="flex flex-wrap gap-2">
                  {step.kpis.map((kpi) => (
                    <span
                      key={kpi}
                      className="inline-flex items-center rounded-full border border-gray-100 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-tighter text-p4c-navy shadow-sm"
                    >
                      <div
                        className="mr-1.5 size-1.5 rounded-full bg-p4c-gold"
                        aria-hidden="true"
                      />
                      {kpi}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Community: React.FC = () => {
  const navigate = useNavigate();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-p4c-beige">
      <Helmet>
        <title>
          Community Impact | Revitalizing East Texas | Properties 4 Creation
        </title>
        <meta
          name="description"
          content="Learn how Properties 4 Creation is transforming East Texas communities through property revitalization, veteran housing, and sustainable development."
        />
      </Helmet>

      {/* Hero Section with Banner Image */}
      <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.BANNERS.HERO_COMMUNITY_IMPACT}
            alt="Community impact banner"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-p4c-navy/15" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          {/* Glassmorphism text container for enhanced contrast */}
          <div className="rounded-2xl bg-p4c-navy/70 p-4 backdrop-blur-2xl">
            <h1 className="hero-text-enhanced mb-4 font-serif text-4xl font-bold tracking-wide text-white md:text-5xl">
              Building Stronger Communities
            </h1>
            <p className="hero-text-enhanced mx-auto max-w-2xl text-xl font-light text-gray-200">
              Through strategic property revitalization and community
              partnerships
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Revitalization Value Stream - Enterprise Pipeline */}
        <RevitalizationValueStream />

        {/* Investor Prospectus Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-serif text-3xl font-bold text-p4c-navy">
                Investor Opportunities
              </h2>
              <p className="mb-6 leading-relaxed text-gray-600">
                Properties 4 Creation offers accredited investors the
                opportunity to participate in our proven real estate investment
                strategy. With a focus on East Texas markets, we deliver
                consistent returns through value-add acquisitions and
                professional management.
              </p>
              <p className="mb-8 leading-relaxed text-gray-600">
                Our portfolio includes single-family residences, multi-family
                properties, and mixed-use developments in Tyler, Longview, and
                surrounding areas.
              </p>

              <div className="mb-8 grid grid-cols-2 gap-6">
                <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-md">
                  <div className="mb-2 text-3xl font-bold text-p4c-gold">
                    12-15%
                  </div>
                  <div className="text-sm uppercase tracking-wide text-gray-500">
                    Target Annual Returns
                  </div>
                </div>
                <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-md">
                  <div className="mb-2 text-3xl font-bold text-p4c-gold">
                    3-5 yrs
                  </div>
                  <div className="text-sm uppercase tracking-wide text-gray-500">
                    Investment Horizon
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsContactModalOpen(true)}
                className="flex items-center gap-2 rounded-xl bg-p4c-gold px-8 py-4 text-lg font-bold text-p4c-navy shadow-lg transition-all duration-300 hover:bg-white hover:text-p4c-navy hover:shadow-xl"
              >
                Request Prospectus
                <ArrowRight className="size-5" />
              </button>
            </div>

            <div className="relative h-96 overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={IMAGES.BANNERS.HERO_COMMUNITY_IMPACT}
                alt="Community impact visualization"
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-p4c-navy/8" />
              <div className="absolute inset-x-6 bottom-6 rounded-xl bg-white/90 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <DollarSign className="size-6 text-p4c-gold" />
                  <div>
                    <div className="font-bold text-p4c-navy">
                      Accredited Investors
                    </div>
                    <div className="text-sm text-gray-600">
                      Minimum $50,000 investment
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-10 shadow-xl">
          <h2 className="mb-8 text-center font-serif text-2xl font-bold text-p4c-navy">
            Our Community Impact
          </h2>
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            <div className="p-4">
              <div className="mb-2 text-4xl font-bold text-p4c-gold">50+</div>
              <div className="font-bold text-p4c-navy">
                Properties Revitalized
              </div>
              <div className="mt-1 text-sm text-gray-500">
                In Tyler and Longview
              </div>
            </div>
            <div className="p-4">
              <div className="mb-2 text-4xl font-bold text-p4c-gold">200+</div>
              <div className="font-bold text-p4c-navy">Residents Housed</div>
              <div className="mt-1 text-sm text-gray-500">
                Families and Veterans
              </div>
            </div>
            <div className="p-4">
              <div className="mb-2 text-4xl font-bold text-p4c-gold">$15M+</div>
              <div className="font-bold text-p4c-navy">
                Community Investment
              </div>
              <div className="mt-1 text-sm text-gray-500">
                In East Texas Economy
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-p4c-navy">
                Request Investor Prospectus
              </h3>
              <button
                onClick={() => setIsContactModalOpen(false)}
                className="text-gray-400 transition-colors hover:text-red-500"
                aria-label="Close modal"
              >
                <X className="size-6" />
              </button>
            </div>
            <p className="mb-6 text-gray-600">
              Please contact us to learn more about our investment
              opportunities.
            </p>
            <button
              onClick={() => {
                setIsContactModalOpen(false);
                navigate('/contact');
              }}
              className="w-full rounded-xl bg-p4c-gold px-6 py-3 font-bold text-p4c-navy transition-all duration-300 hover:bg-white hover:text-p4c-navy"
            >
              Go to Contact Page
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;

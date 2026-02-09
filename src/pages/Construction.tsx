import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hammer, ShieldCheck, CheckCircle, Home } from 'lucide-react';
import { IMAGES } from '../constants/images';

const Construction: React.FC = () => (
  <div className="min-h-screen bg-p4c-beige">
    <Helmet>
      <title>
        Construction Standards | Quality Renovation | Properties 4 Creation
      </title>
      <meta
        name="description"
        content="Learn about Properties 4 Creation's professional construction standards and renovation processes for properties in East Texas, Texas."
      />
    </Helmet>

    {/* Hero Section */}
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <div className="absolute left-0 top-0 z-0 size-full">
        <img
          src={IMAGES.BANNERS.HERO_RENOVATION}
          alt="Professional construction and renovation work"
          className="size-full object-cover"
        />
        <div className="bg-p4c-navy/90 absolute left-0 top-0 size-full mix-blend-multiply" />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl animate-fade-in-up px-4 text-center">
        {/* Glassmorphism text container for enhanced contrast */}
        <div className="bg-p4c-navy/40 rounded-2xl p-4 backdrop-blur-sm">
          <div className="mb-6 flex justify-center">
            <div className="bg-p4c-gold/20 border-p4c-gold/30 rounded-2xl border p-4 backdrop-blur-sm">
              <Hammer className="size-10 text-p4c-gold" />
            </div>
          </div>
          <h1 className="hero-text-enhanced mb-4 font-serif text-4xl font-bold tracking-wide text-white md:text-5xl">
            Professional Construction Standards
          </h1>
          <p className="hero-text-enhanced mx-auto max-w-2xl text-xl font-light text-gray-200">
            Transforming distressed properties into premium residences
          </p>
        </div>
      </div>
    </div>

    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Our Process Section */}
      <section className="mb-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-p4c-navy">
            Our Renovation Process
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            From acquisition to move-in ready
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border-l-4 border-p4c-gold bg-white p-8 shadow-xl transition-shadow hover:shadow-2xl">
            <div className="bg-p4c-navy/5 mb-6 flex size-14 items-center justify-center rounded-xl">
              <span className="text-xl font-bold text-p4c-navy">01</span>
            </div>
            <h3 className="mb-4 text-xl font-bold text-p4c-navy">Assessment</h3>
            <p className="text-gray-600">
              Comprehensive property evaluation and scope of work development
            </p>
          </div>

          <div className="rounded-2xl border-l-4 border-p4c-gold bg-white p-8 shadow-xl transition-shadow hover:shadow-2xl">
            <div className="bg-p4c-navy/5 mb-6 flex size-14 items-center justify-center rounded-xl">
              <span className="text-xl font-bold text-p4c-navy">02</span>
            </div>
            <h3 className="mb-4 text-xl font-bold text-p4c-navy">Planning</h3>
            <p className="text-gray-600">
              Architectural plans, permits, and material sourcing
            </p>
          </div>

          <div className="rounded-2xl border-l-4 border-p4c-gold bg-white p-8 shadow-xl transition-shadow hover:shadow-2xl">
            <div className="bg-p4c-navy/5 mb-6 flex size-14 items-center justify-center rounded-xl">
              <span className="text-xl font-bold text-p4c-navy">03</span>
            </div>
            <h3 className="mb-4 text-xl font-bold text-p4c-navy">Execution</h3>
            <p className="text-gray-600">
              Professional construction with quality control at every stage
            </p>
          </div>

          <div className="rounded-2xl border-l-4 border-p4c-gold bg-white p-8 shadow-xl transition-shadow hover:shadow-2xl">
            <div className="bg-p4c-navy/5 mb-6 flex size-14 items-center justify-center rounded-xl">
              <span className="text-xl font-bold text-p4c-navy">04</span>
            </div>
            <h3 className="mb-4 text-xl font-bold text-p4c-navy">
              Final Inspection
            </h3>
            <p className="text-gray-600">
              Rigorous quality assurance and certification
            </p>
          </div>
        </div>
      </section>

      {/* Construction Standards Section */}
      <section className="mb-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 font-serif text-3xl font-bold text-p4c-navy">
              Our Construction Standards
            </h2>
            <p className="mb-8 leading-relaxed text-gray-600">
              We adhere to the highest construction standards to ensure our
              properties are safe, durable, and comfortable for long-term
              residency.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="size-5 text-green-600" />
                </div>
                <div>
                  <h4 className="mb-2 font-bold text-p4c-navy">
                    Structural Integrity
                  </h4>
                  <p className="text-gray-600">
                    Foundation repair, roof replacement, and structural
                    reinforcement
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="size-5 text-green-600" />
                </div>
                <div>
                  <h4 className="mb-2 font-bold text-p4c-navy">
                    Mechanical Systems
                  </h4>
                  <p className="text-gray-600">
                    New HVAC, electrical, and plumbing systems with
                    energy-efficient components
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="size-5 text-green-600" />
                </div>
                <div>
                  <h4 className="mb-2 font-bold text-p4c-navy">
                    Interior Finishes
                  </h4>
                  <p className="text-gray-600">
                    Modern kitchens, bathrooms, flooring, and paint with premium
                    materials
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="size-5 text-green-600" />
                </div>
                <div>
                  <h4 className="mb-2 font-bold text-p4c-navy">
                    Safety & Compliance
                  </h4>
                  <p className="text-gray-600">
                    Full compliance with building codes, ADA standards, and
                    safety regulations
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-96 overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={IMAGES.BANNERS.HERO_PROJECTS}
              alt="Construction team working on property renovation"
              className="size-full object-cover"
            />
            <div className="bg-p4c-navy/20 absolute inset-0" />
            <div className="absolute inset-x-6 bottom-6 rounded-xl bg-white/90 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <ShieldCheck className="size-6 text-p4c-gold" />
                <div>
                  <div className="font-bold text-p4c-navy">
                    Quality Guarantee
                  </div>
                  <div className="text-sm text-gray-600">
                    1-year warranty on all construction work
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="mb-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-p4c-navy">
            Transformation Gallery
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            See the dramatic before and after results of our renovations
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="relative">
              <img
                src={IMAGES.RENOVATION.LIVING_ROOM.BEFORE}
                alt="Living room before renovation"
                className="h-64 w-full object-cover"
              />
              <div className="absolute left-4 top-4 rounded-full bg-p4c-navy px-3 py-1 text-sm font-bold text-white">
                BEFORE
              </div>
            </div>
            <div className="relative">
              <img
                src={IMAGES.RENOVATION.LIVING_ROOM.AFTER}
                alt="Living room after renovation"
                className="h-64 w-full object-cover"
              />
              <div className="absolute left-4 top-4 rounded-full bg-p4c-gold px-3 py-1 text-sm font-bold text-p4c-navy">
                AFTER
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold text-p4c-navy">
                Living Room
              </h3>
              <p className="text-gray-600">
                Complete renovation with new flooring, paint, lighting, and
                modern furnishings
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="relative">
              <img
                src={IMAGES.RENOVATION.KITCHEN.BEFORE}
                alt="Kitchen before renovation"
                className="h-64 w-full object-cover"
              />
              <div className="absolute left-4 top-4 rounded-full bg-p4c-navy px-3 py-1 text-sm font-bold text-white">
                BEFORE
              </div>
            </div>
            <div className="relative">
              <img
                src={IMAGES.RENOVATION.KITCHEN.AFTER}
                alt="Kitchen after renovation"
                className="h-64 w-full object-cover"
              />
              <div className="absolute left-4 top-4 rounded-full bg-p4c-gold px-3 py-1 text-sm font-bold text-p4c-navy">
                AFTER
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold text-p4c-navy">Kitchen</h3>
              <p className="text-gray-600">
                New cabinets, countertops, appliances, and modern fixtures
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment Section */}
      <section className="rounded-2xl bg-p4c-navy p-12 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex justify-center">
            <div className="bg-p4c-gold/20 border-p4c-gold/30 rounded-2xl border p-4">
              <Home className="size-10 text-p4c-gold" />
            </div>
          </div>
          <h2 className="mb-6 font-serif text-3xl font-bold">
            Our Commitment to Quality
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-gray-300">
            We don&apos;t just renovate houses - we create homes. Every property
            we acquire undergoes a comprehensive transformation to meet our
            rigorous quality standards. From structural integrity to aesthetic
            appeal, we ensure our residences provide safe, comfortable, and
            beautiful living spaces for families.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/our-impact"
              className="inline-flex items-center gap-2 rounded-xl bg-p4c-gold px-8 py-4 text-lg font-bold text-p4c-navy shadow-lg transition-all duration-300 hover:bg-white hover:text-p4c-navy hover:shadow-xl"
            >
              See Our Projects
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-white hover:text-p4c-navy"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Construction;

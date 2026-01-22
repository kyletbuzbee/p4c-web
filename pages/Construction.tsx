import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hammer, ShieldCheck, CheckCircle, Home } from 'lucide-react';

const Construction: React.FC = () => {
  return (
    <div className="bg-p4c-beige min-h-screen">
      <Helmet>
        <title>
          Construction Standards | Quality Renovation | Properties 4 Creation
        </title>
        <meta
          name="description"
          content="Learn about Properties 4 Creation's professional construction standards and renovation processes for properties in Tyler, Longview, and Marshall, Texas."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[400px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img
            src="/images/banners/home-renovation-banner.webp"
            alt="Professional construction and renovation work"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-p4c-navy/80 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="bg-p4c-gold/20 p-4 rounded-2xl border border-p4c-gold/30 backdrop-blur-sm">
              <Hammer className="w-10 h-10 text-p4c-gold" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-wide">
            Professional Construction Standards
          </h1>
          <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto">
            Transforming distressed properties into premium residences
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Process Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-4">
              Our Renovation Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From acquisition to move-in ready
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-p4c-gold hover:shadow-2xl transition-shadow">
              <div className="bg-p4c-navy/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-p4c-navy">01</span>
              </div>
              <h3 className="text-xl font-bold text-p4c-navy mb-4">Assessment</h3>
              <p className="text-gray-600">
                Comprehensive property evaluation and scope of work development
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-p4c-gold hover:shadow-2xl transition-shadow">
              <div className="bg-p4c-navy/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-p4c-navy">02</span>
              </div>
              <h3 className="text-xl font-bold text-p4c-navy mb-4">Planning</h3>
              <p className="text-gray-600">
                Architectural plans, permits, and material sourcing
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-p4c-gold hover:shadow-2xl transition-shadow">
              <div className="bg-p4c-navy/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-p4c-navy">03</span>
              </div>
              <h3 className="text-xl font-bold text-p4c-navy mb-4">Execution</h3>
              <p className="text-gray-600">
                Professional construction with quality control at every stage
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-p4c-gold hover:shadow-2xl transition-shadow">
              <div className="bg-p4c-navy/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-p4c-navy">04</span>
              </div>
              <h3 className="text-xl font-bold text-p4c-navy mb-4">Final Inspection</h3>
              <p className="text-gray-600">
                Rigorous quality assurance and certification
              </p>
            </div>
          </div>
        </section>

        {/* Construction Standards Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-6">
                Our Construction Standards
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We adhere to the highest construction standards to ensure our properties
                are safe, durable, and comfortable for long-term residency.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-p4c-navy mb-2">Structural Integrity</h4>
                    <p className="text-gray-600">
                      Foundation repair, roof replacement, and structural reinforcement
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-p4c-navy mb-2">Mechanical Systems</h4>
                    <p className="text-gray-600">
                      New HVAC, electrical, and plumbing systems with energy-efficient components
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-p4c-navy mb-2">Interior Finishes</h4>
                    <p className="text-gray-600">
                      Modern kitchens, bathrooms, flooring, and paint with premium materials
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-p4c-navy mb-2">Safety & Compliance</h4>
                    <p className="text-gray-600">
                      Full compliance with building codes, ADA standards, and safety regulations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/banners/hero-projects-banner.webp"
                alt="Construction team working on property renovation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-p4c-navy/20" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-p4c-gold" />
                  <div>
                    <div className="font-bold text-p4c-navy">Quality Guarantee</div>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-4">
              Transformation Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See the dramatic before and after results of our renovations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative">
                <img
                  src="/images/before-after-comparison/living-room-before.webp"
                  alt="Living room before renovation"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-p4c-navy text-white px-3 py-1 rounded-full text-sm font-bold">
                  BEFORE
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/before-after-comparison/living-room-after.webp"
                  alt="Living room after renovation"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-p4c-gold text-p4c-navy px-3 py-1 rounded-full text-sm font-bold">
                  AFTER
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-p4c-navy mb-2">Living Room</h3>
                <p className="text-gray-600">
                  Complete renovation with new flooring, paint, lighting, and modern furnishings
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative">
                <img
                  src="/images/before-after-comparison/kitchen-before.webp"
                  alt="Kitchen before renovation"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-p4c-navy text-white px-3 py-1 rounded-full text-sm font-bold">
                  BEFORE
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/before-after-comparison/kitchen-after.webp"
                  alt="Kitchen after renovation"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-p4c-gold text-p4c-navy px-3 py-1 rounded-full text-sm font-bold">
                  AFTER
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-p4c-navy mb-2">Kitchen</h3>
                <p className="text-gray-600">
                  New cabinets, countertops, appliances, and modern fixtures
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Commitment Section */}
        <section className="bg-p4c-navy rounded-2xl text-white p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-p4c-gold/20 p-4 rounded-2xl border border-p4c-gold/30">
                <Home className="w-10 h-10 text-p4c-gold" />
              </div>
            </div>
            <h2 className="text-3xl font-serif font-bold mb-6">
              Our Commitment to Quality
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We don't just renovate houses - we create homes. Every property we acquire
              undergoes a comprehensive transformation to meet our rigorous quality standards.
              From structural integrity to aesthetic appeal, we ensure our residences provide
              safe, comfortable, and beautiful living spaces for families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/our-impact"
                className="bg-p4c-gold text-p4c-navy hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                See Our Projects
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center gap-2"
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Construction;
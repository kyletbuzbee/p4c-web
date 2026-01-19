import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  HeartHandshake,
  Phone,
  Home,
  Flag,
  ShieldCheck,
  Clock,
  FileCheck,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants/images';

const Veterans: React.FC = () => (
  <>
    <Helmet>
      <title>
        Veterans Housing Initiative | HUD-VASH Partners | Properties 4 Creation
      </title>
      <meta
        name="description"
        content="Properties 4 Creation provides priority housing placement for veterans in Tyler, Longview, and Marshall. We specialize in HUD-VASH leasing and accessible home modifications."
      />
      <meta
        name="keywords"
        content="veteran housing Tyler TX, HUD-VASH Longview, military housing assistance, accessible rentals East Texas, veteran property management"
      />
    </Helmet>
    <div className="bg-p4c-beige min-h-screen">
      {/* Hero Banner - Professional & Patriotic */}
      <div className="relative h-[400px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img
            src={IMAGES.BANNERS.HERO_HOME}
            alt="Flag flying on a porch of a renovated home"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-p4c-navy/90 mix-blend-multiply" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-p4c-navy via-transparent to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="bg-p4c-gold/20 backdrop-blur-sm border border-p4c-gold/30 p-4 rounded-2xl">
              <Flag className="w-10 h-10 text-p4c-gold" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 tracking-wide">
            Veterans Housing Initiative
          </h1>
          <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
            Delivering dignified, high-quality housing solutions for veterans in
            <strong> Tyler, Longview, and Marshall</strong>.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Mission Statement */}
            <section>
              <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-6">
                The Mission: No Veteran Left Behind
              </h2>
              <div className="w-20 h-1 bg-p4c-gold mb-8" />
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                At Properties 4 Creation, we view veteran housing as a
                logistical mission, not a charity project. We partner directly
                with <strong>HUD-VASH case managers</strong> and the{' '}
                <strong>VA</strong> to remove bureaucratic barriers to entry.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Our goal is simple:{' '}
                <strong>Rapid Deployment to Housing.</strong> We prioritize
                veteran applications to ensure zero days spent waiting for a
                safe place to call home.
              </p>
            </section>

            {/* Program Features Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-p4c-navy w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-p4c-gold" />
                </div>
                <h3 className="text-xl font-bold text-p4c-navy mb-3">
                  Expedited Leasing
                </h3>
                <p className="text-gray-600">
                  Priority application processing allows for move-in timelines
                  as short as 48 hours for pre-qualified veterans.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-p4c-navy w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <FileCheck className="w-6 h-6 text-p4c-gold" />
                </div>
                <h3 className="text-xl font-bold text-p4c-navy mb-3">
                  Voucher Integration
                </h3>
                <p className="text-gray-600">
                  Seamless acceptance of HUD-VASH and Section 8 vouchers. We
                  handle the paperwork and inspection scheduling.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-p4c-navy w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6 text-p4c-gold" />
                </div>
                <h3 className="text-xl font-bold text-p4c-navy mb-3">
                  Secure Communities
                </h3>
                <p className="text-gray-600">
                  Properties located in safe, quiet neighborhoods selected for
                  their proximity to VA clinics and essential services.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-p4c-navy w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <HeartHandshake className="w-6 h-6 text-p4c-gold" />
                </div>
                <h3 className="text-xl font-bold text-p4c-navy mb-3">
                  Accessibility Ready
                </h3>
                <p className="text-gray-600">
                  We perform reasonable modifications (ramps, grab bars) to
                  ensure homes meet the specific physical needs of our
                  residents.
                </p>
              </div>
            </section>

            {/* CTA Section */}
            <div className="bg-p4c-navy rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold mb-4">
                  Ready to Find Your Base?
                </h3>
                <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                  Browse our current inventory in East Texas or speak with our
                  veteran housing liaison.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/"
                    className="bg-p4c-gold text-p4c-navy px-6 py-3 rounded-xl font-bold hover:bg-white transition-colors flex items-center justify-center gap-2"
                  >
                    Available Homes <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-p4c-navy transition-colors"
                  >
                    Contact Liaison
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar / Operational Resources */}
          <div className="space-y-8">
            {/* Command Center Card */}
            <div className="bg-white rounded-2xl shadow-lg border-t-4 border-p4c-gold overflow-hidden">
              <div className="bg-gray-50 p-6 border-b border-gray-100">
                <h3 className="text-lg font-bold text-p4c-navy flex items-center gap-2">
                  <Phone className="w-5 h-5 text-p4c-gold" />
                  Resident Command Center
                </h3>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Emergency Crisis Line
                  </p>
                  <p className="text-2xl font-bold text-p4c-navy">
                    988{' '}
                    <span className="text-lg font-normal text-gray-500">
                      (Press 1)
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    24/7 Confidential Support
                  </p>
                </div>

                <div className="h-px bg-gray-100" />

                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    P4C Veteran Liaison
                  </p>
                  <p className="text-xl font-bold text-p4c-navy">
                    (903) 707-8460
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Mon-Fri: 0800 - 1700
                  </p>
                </div>
              </div>
            </div>

            {/* Strategic Partners */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-p4c-navy mb-6 flex items-center gap-2">
                <Home className="w-5 h-5 text-p4c-gold" />
                Strategic Partners
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://www.campv.org/tyler"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-p4c-gold mt-2 group-hover:scale-125 transition-transform" />
                    <div>
                      <span className="block font-bold text-gray-700 group-hover:text-p4c-navy transition-colors">
                        CampV Tyler
                      </span>
                      <span className="text-xs text-gray-500">
                        Veteran Resource Center
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tvc.texas.gov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-p4c-gold mt-2 group-hover:scale-125 transition-transform" />
                    <div>
                      <span className="block font-bold text-gray-700 group-hover:text-p4c-navy transition-colors">
                        Texas Veterans Commission
                      </span>
                      <span className="text-xs text-gray-500">
                        Claims & Education
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.va.gov/homeless/hud-vash.asp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-p4c-gold mt-2 group-hover:scale-125 transition-transform" />
                    <div>
                      <span className="block font-bold text-gray-700 group-hover:text-p4c-navy transition-colors">
                        HUD-VASH Program
                      </span>
                      <span className="text-xs text-gray-500">
                        Official Guidelines
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Doc Download */}
            <div className="bg-p4c-beige/50 p-6 rounded-2xl border border-p4c-gold/20">
              <h4 className="font-bold text-p4c-navy mb-2">
                Required Documents
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Pre-qualify faster by having your DD-214 and VA Award Letter
                ready.
              </p>
              <Link
                to="/apply"
                className="text-sm font-bold text-p4c-gold hover:text-p4c-navy transition-colors flex items-center gap-1"
              >
                Start Pre-Qualification <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Veterans;

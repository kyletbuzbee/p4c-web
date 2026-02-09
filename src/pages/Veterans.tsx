import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  HeartHandshake,
  Phone,
  Home,
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
        content="Properties 4 Creation provides priority housing placement for veterans in East Texas. We specialize in HUD-VASH leasing and accessible home modifications."
      />
      <meta
        name="keywords"
        content="veteran housing Tyler TX, HUD-VASH Longview, military housing assistance, accessible rentals East Texas, veteran property management"
      />
    </Helmet>
    <div className="min-h-screen bg-p4c-beige">
      {/* Hero Banner - Professional & Patriotic */}
      <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
        <div className="absolute left-0 top-0 z-0 size-full">
          <img
            src={IMAGES.BANNERS.HERO_HOME}
            alt="Flag flying on a porch of a renovated home"
            className="size-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="bg-p4c-navy/90 absolute left-0 top-0 size-full mix-blend-multiply" />
          <div className="absolute left-0 top-0 size-full bg-gradient-to-t from-p4c-navy via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl animate-fade-in-up px-4 text-center">
          <div className="hero-text-container bg-p4c-navy/95 rounded-2xl border border-white/10 p-4 backdrop-blur-xl md:p-6">
            <h1 className="hero-text-enhanced mb-6 font-serif text-4xl font-bold tracking-wide text-white md:text-5xl">
              Veterans Housing Initiative
            </h1>
            <p className="hero-text-enhanced mx-auto max-w-2xl text-xl font-light leading-relaxed text-gray-200">
              Delivering dignified, high-quality housing solutions for veterans
              in
              <strong> East Texas</strong>.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Main Content Column */}
          <div className="space-y-12 lg:col-span-2">
            {/* Mission Statement */}
            <section>
              <h2 className="mb-6 font-serif text-3xl font-bold text-p4c-navy">
                The Mission: No Veteran Left Behind
              </h2>
              <div className="mb-8 h-1 w-20 bg-p4c-gold" />
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                At Properties 4 Creation, we view veteran housing as a
                logistical mission, not a charity project. We partner directly
                with <strong>HUD-VASH case managers</strong> and the{' '}
                <strong>VA</strong> to remove bureaucratic barriers to entry.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Our goal is simple:{' '}
                <strong>Rapid Deployment to Housing.</strong> We prioritize
                veteran applications to ensure zero days spent waiting for a
                safe place to call home.
              </p>
            </section>

            {/* Program Features Grid */}
            <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-p4c-navy">
                  <Clock className="size-6 text-p4c-gold" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-p4c-navy">
                  Expedited Leasing
                </h3>
                <p className="text-gray-600">
                  Priority application processing allows for move-in timelines
                  as short as 48 hours for pre-qualified veterans.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-p4c-navy">
                  <FileCheck className="size-6 text-p4c-gold" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-p4c-navy">
                  Voucher Integration
                </h3>
                <p className="text-gray-600">
                  Seamless acceptance of HUD-VASH and Section 8 vouchers. We
                  handle the paperwork and inspection scheduling.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-p4c-navy">
                  <ShieldCheck className="size-6 text-p4c-gold" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-p4c-navy">
                  Secure Communities
                </h3>
                <p className="text-gray-600">
                  Properties located in safe, quiet neighborhoods selected for
                  their proximity to VA clinics and essential services.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-p4c-navy">
                  <HeartHandshake className="size-6 text-p4c-gold" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-p4c-navy">
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
            <div className="relative overflow-hidden rounded-2xl bg-p4c-navy p-8 text-center text-white md:p-12">
              <div className="absolute left-0 top-0 size-full bg-[radial-gradient(#C5A059_1px,transparent_1px)] opacity-10 [background-size:16px_16px]" />
              <div className="relative z-10">
                <h3 className="mb-4 font-serif text-2xl font-bold">
                  Ready to Find Your Base?
                </h3>
                <p className="mx-auto mb-8 max-w-xl text-gray-300">
                  Browse our current inventory in East Texas or speak with our
                  veteran housing liaison.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Link
                    to="/"
                    className="flex items-center justify-center gap-2 rounded-xl bg-p4c-gold px-6 py-3 font-bold text-p4c-navy transition-colors hover:bg-white"
                  >
                    Available Homes <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="rounded-xl border-2 border-white px-6 py-3 font-bold text-white transition-colors hover:bg-white hover:text-p4c-navy"
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
            <div className="overflow-hidden rounded-2xl border-t-4 border-p4c-gold bg-white shadow-lg">
              <div className="border-b border-gray-100 bg-gray-50 p-6">
                <h3 className="flex items-center gap-2 text-lg font-bold text-p4c-navy">
                  <Phone className="size-5 text-p4c-gold" />
                  Resident Command Center
                </h3>
              </div>
              <div className="space-y-6 p-6">
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-gray-400">
                    Emergency Crisis Line
                  </p>
                  <p className="text-2xl font-bold text-p4c-navy">
                    988{' '}
                    <span className="text-lg font-normal text-gray-500">
                      (Press 1)
                    </span>
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    24/7 Confidential Support
                  </p>
                </div>

                <div className="h-px bg-gray-100" />

                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-gray-400">
                    P4C Veteran Liaison
                  </p>
                  <p className="text-xl font-bold text-p4c-navy">
                    (903) 707-8460
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Mon-Fri: 0800 - 1700
                  </p>
                </div>
              </div>
            </div>

            {/* Strategic Partners */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-p4c-navy">
                <Home className="size-5 text-p4c-gold" />
                Strategic Partners
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://www.campv.org/tyler"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3"
                  >
                    <div className="mt-2 size-1.5 rounded-full bg-p4c-gold transition-transform group-hover:scale-125" />
                    <div>
                      <span className="block font-bold text-gray-700 transition-colors group-hover:text-p4c-navy">
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
                    className="group flex items-start gap-3"
                  >
                    <div className="mt-2 size-1.5 rounded-full bg-p4c-gold transition-transform group-hover:scale-125" />
                    <div>
                      <span className="block font-bold text-gray-700 transition-colors group-hover:text-p4c-navy">
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
                    className="group flex items-start gap-3"
                  >
                    <div className="mt-2 size-1.5 rounded-full bg-p4c-gold transition-transform group-hover:scale-125" />
                    <div>
                      <span className="block font-bold text-gray-700 transition-colors group-hover:text-p4c-navy">
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
            <div className="bg-p4c-beige/50 border-p4c-gold/20 rounded-2xl border p-6">
              <h4 className="mb-2 font-bold text-p4c-navy">
                Required Documents
              </h4>
              <p className="mb-4 text-sm text-gray-600">
                Pre-qualify faster by having your DD-214 and VA Award Letter
                ready.
              </p>
              <Link
                to="/apply"
                className="flex items-center gap-1 text-sm font-bold text-p4c-gold transition-colors hover:text-p4c-navy"
              >
                Start Pre-Qualification <ArrowRight className="size-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Veterans;

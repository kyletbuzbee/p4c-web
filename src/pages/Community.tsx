import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Home, Wrench, Users, DollarSign, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { IMAGES } from '../constants/images';

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
          <div className="bg-p4c-navy/60 absolute inset-0" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold tracking-wide text-white md:text-5xl">
            Building Stronger Communities
          </h1>
          <p className="mx-auto max-w-2xl text-xl font-light text-gray-200">
            Through strategic property revitalization and community partnerships
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Revitalization Cycle */}
        <section className="mb-20">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-p4c-navy">
              The Revitalization Cycle
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              How we create value for communities, investors, and residents
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Step 1: Acquisition */}
            <div className="rounded-2xl border-t-4 border-p4c-gold bg-white p-8 shadow-xl transition-shadow hover:shadow-2xl">
              <div className="bg-p4c-navy/5 mb-6 flex size-14 items-center justify-center rounded-xl">
                <Home className="size-8 text-p4c-navy" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-p4c-navy">
                Acquisition
              </h3>
              <p className="mb-6 text-gray-600">
                Identifying distressed properties in Tyler, Longview, and
                Marshall that have potential for transformation.
              </p>
              <div className="relative h-48 overflow-hidden rounded-xl shadow-md">
                <img
                  src={IMAGES.TEAM.ACQUISITION}
                  alt="Property acquisition process"
                  className="size-full object-cover"
                />
              </div>
            </div>

            {/* Step 2: Rehabilitation */}
            <div className="rounded-2xl border-t-4 border-p4c-gold bg-white p-8 shadow-xl transition-shadow hover:shadow-2xl">
              <div className="bg-p4c-navy/5 mb-6 flex size-14 items-center justify-center rounded-xl">
                <Wrench className="size-8 text-p4c-navy" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-p4c-navy">
                Rehabilitation
              </h3>
              <p className="mb-6 text-gray-600">
                Professional renovation to modern standards with high-end
                finishes that ensure longevity and tenant satisfaction.
              </p>
              <div className="relative h-48 overflow-hidden rounded-xl shadow-md">
                <img
                  src={IMAGES.TEAM.REHABILITATION}
                  alt="Property rehabilitation process"
                  className="size-full object-cover"
                />
              </div>
            </div>

            {/* Step 3: Stabilization */}
            <div className="rounded-2xl border-t-4 border-p4c-gold bg-white p-8 shadow-xl transition-shadow hover:shadow-2xl">
              <div className="bg-p4c-navy/5 mb-6 flex size-14 items-center justify-center rounded-xl">
                <Users className="size-8 text-p4c-navy" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-p4c-navy">
                Stabilization
              </h3>
              <p className="mb-6 text-gray-600">
                Placing families in safe, forever homes and creating stable,
                thriving neighborhoods.
              </p>
              <div className="relative h-48 overflow-hidden rounded-xl shadow-md">
                <img
                  src={IMAGES.PROPERTIES.TYLER_RANCH}
                  alt="Stabilized property with happy family"
                  className="size-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

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
              <div className="bg-p4c-navy/20 absolute inset-0" />
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

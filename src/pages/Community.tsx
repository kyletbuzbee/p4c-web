import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Home, Wrench, Users, DollarSign, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { IMAGES } from '../constants/images';

const Community: React.FC = () => {
  const navigate = useNavigate();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="bg-p4c-beige min-h-screen">
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
      <div className="relative h-[500px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.BANNERS.HERO_COMMUNITY_IMPACT}
            alt="Community impact banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-p4c-navy/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-wide">
            Building Stronger Communities
          </h1>
          <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto">
            Through strategic property revitalization and community partnerships
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Revitalization Cycle */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-4">
              The Revitalization Cycle
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              How we create value for communities, investors, and residents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1: Acquisition */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-p4c-gold hover:shadow-2xl transition-shadow">
              <div className="bg-p4c-navy/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Home className="w-8 h-8 text-p4c-navy" />
              </div>
              <h3 className="text-xl font-bold text-p4c-navy mb-4">
                Acquisition
              </h3>
              <p className="text-gray-600 mb-6">
                Identifying distressed properties in Tyler, Longview, and
                Marshall that have potential for transformation.
              </p>
              <div className="relative h-48 rounded-xl overflow-hidden shadow-md">
                <img
                  src={IMAGES.TEAM.ACQUISITION}
                  alt="Property acquisition process"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Step 2: Rehabilitation */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-p4c-gold hover:shadow-2xl transition-shadow">
              <div className="bg-p4c-navy/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Wrench className="w-8 h-8 text-p4c-navy" />
              </div>
              <h3 className="text-xl font-bold text-p4c-navy mb-4">
                Rehabilitation
              </h3>
              <p className="text-gray-600 mb-6">
                Professional renovation to modern standards with high-end
                finishes that ensure longevity and tenant satisfaction.
              </p>
              <div className="relative h-48 rounded-xl overflow-hidden shadow-md">
                <img
                  src={IMAGES.TEAM.REHABILITATION}
                  alt="Property rehabilitation process"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Step 3: Stabilization */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-p4c-gold hover:shadow-2xl transition-shadow">
              <div className="bg-p4c-navy/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-p4c-navy" />
              </div>
              <h3 className="text-xl font-bold text-p4c-navy mb-4">
                Stabilization
              </h3>
              <p className="text-gray-600 mb-6">
                Placing families in safe, forever homes and creating stable,
                thriving neighborhoods.
              </p>
              <div className="relative h-48 rounded-xl overflow-hidden shadow-md">
                <img
                  src={IMAGES.PROPERTIES.TYLER_RANCH}
                  alt="Stabilized property with happy family"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Investor Prospectus Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-6">
                Investor Opportunities
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Properties 4 Creation offers accredited investors the
                opportunity to participate in our proven real estate investment
                strategy. With a focus on East Texas markets, we deliver
                consistent returns through value-add acquisitions and
                professional management.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our portfolio includes single-family residences, multi-family
                properties, and mixed-use developments in Tyler, Longview, and
                surrounding areas.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="text-3xl font-bold text-p4c-gold mb-2">
                    12-15%
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">
                    Target Annual Returns
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="text-3xl font-bold text-p4c-gold mb-2">
                    3-5 yrs
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">
                    Investment Horizon
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsContactModalOpen(true)}
                className="bg-p4c-gold text-p4c-navy hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Request Prospectus
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={IMAGES.BANNERS.HERO_COMMUNITY_IMPACT}
                alt="Community impact visualization"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-p4c-navy/20" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <DollarSign className="w-6 h-6 text-p4c-gold" />
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
        <section className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-10">
          <h2 className="text-2xl font-serif font-bold text-p4c-navy mb-8 text-center">
            Our Community Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="px-4 py-4">
              <div className="text-4xl font-bold text-p4c-gold mb-2">50+</div>
              <div className="font-bold text-p4c-navy">
                Properties Revitalized
              </div>
              <div className="text-sm text-gray-500 mt-1">
                In Tyler and Longview
              </div>
            </div>
            <div className="px-4 py-4">
              <div className="text-4xl font-bold text-p4c-gold mb-2">200+</div>
              <div className="font-bold text-p4c-navy">Residents Housed</div>
              <div className="text-sm text-gray-500 mt-1">
                Families and Veterans
              </div>
            </div>
            <div className="px-4 py-4">
              <div className="text-4xl font-bold text-p4c-gold mb-2">$15M+</div>
              <div className="font-bold text-p4c-navy">
                Community Investment
              </div>
              <div className="text-sm text-gray-500 mt-1">
                In East Texas Economy
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-p4c-navy">
                Request Investor Prospectus
              </h3>
              <button
                onClick={() => setIsContactModalOpen(false)}
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-600 mb-6">
              Please contact us to learn more about our investment
              opportunities.
            </p>
            <button
              onClick={() => {
                setIsContactModalOpen(false);
                navigate('/contact');
              }}
              className="w-full bg-p4c-gold text-p4c-navy hover:bg-white hover:text-p4c-navy px-6 py-3 rounded-xl font-bold transition-all duration-300"
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

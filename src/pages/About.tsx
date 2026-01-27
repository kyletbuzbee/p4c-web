import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Building2 } from 'lucide-react';
import { IMAGES } from '../constants/images';

const About: React.FC = () => (
  <div className="bg-p4c-beige min-h-screen">
    <Helmet>
      <title>
        About Us | Professional Property Management | Properties 4 Creation
      </title>
      <meta
        name="description"
        content="Properties 4 Creation is a premier property management and development firm in East Texas, dedicated to high-quality housing and community revitalization."
      />
    </Helmet>

    {/* Hero Section */}
    <div className="relative h-[400px] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src={IMAGES.BANNERS.HERO_ABOUT}
          alt="Properties 4 Creation team on site"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-p4c-navy/80 mix-blend-multiply" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <div className="flex justify-center mb-6">
          <div className="bg-p4c-gold/20 p-4 rounded-2xl border border-p4c-gold/30 backdrop-blur-sm">
            <Building2 className="w-10 h-10 text-p4c-gold" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-wide">
          Revitalizing East Texas, One Home at a Time.
        </h1>
        <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto">
          Setting the standard for residential property management and
          development in
          <strong> East Texas</strong>.
        </p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Company Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-6">
            Professional Excellence in Housing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Properties 4 Creation is not just a landlord; we are a comprehensive
            real estate solution provider. Founded on the principles of
            integrity and operational excellence, we acquire, renovate, and
            manage residential assets to provide superior housing outcomes.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Our unique approach combines rigorous asset management with a
            commitment to community stability. By partnering with HUD-VASH and
            local municipalities, we ensure our investments deliver both
            financial returns and tangible social impact.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <img
              src={IMAGES.TEAM.OWNER}
              alt="Richard Lonkert, Owner & Veteran"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-p4c-navy/80 text-white p-4">
              <h3 className="font-bold text-lg">Richard Lonkert</h3>
              <p className="text-sm">Owner & Veteran</p>
            </div>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <img
              src={IMAGES.TEAM.HEADSHOT}
              alt="Kyle Buzbee, Managing Partner"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-p4c-navy/80 text-white p-4">
              <h3 className="font-bold text-lg">Kyle Buzbee</h3>
              <p className="text-sm">Managing Partner</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Grid */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-4">
            Our Journey
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The milestones that define our growth and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              year: '2018',
              title: 'Founded',
              desc: 'Properties 4 Creation was established with a mission to revitalize East Texas communities.',
            },
            {
              year: '2020',
              title: 'First Multi-family Acquired',
              desc: 'Expanded our portfolio with the acquisition of our first multi-family property.',
            },
            {
              year: '2023',
              title: 'Veteran Housing Initiative',
              desc: 'Launched our Veteran Housing Initiative to provide priority housing solutions for veterans.',
            },
            {
              year: 'Future',
              title: '500+ Families Housed',
              desc: 'Our goal is to house over 500 families in safe, affordable homes.',
            },
          ].map((value, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all border-t-4 border-p4c-gold"
            >
              <div className="bg-p4c-navy/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-p4c-navy">
                  {value.year}
                </span>
              </div>
              <h3 className="text-xl font-bold text-p4c-navy mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Credentials / Trust Indicators */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <div className="px-4 py-4">
            <div className="text-4xl font-bold text-p4c-gold mb-2">10+</div>
            <div className="font-bold text-p4c-navy">Years of Experience</div>
            <div className="text-sm text-gray-500 mt-1">
              In Real Estate & Development
            </div>
          </div>
          <div className="px-4 py-4">
            <div className="text-4xl font-bold text-p4c-gold mb-2">100%</div>
            <div className="font-bold text-p4c-navy">Voucher Acceptance</div>
            <div className="text-sm text-gray-500 mt-1">
              Section 8 & HUD-VASH
            </div>
          </div>
          <div className="px-4 py-4">
            <div className="text-4xl font-bold text-p4c-gold mb-2">A+</div>
            <div className="font-bold text-p4c-navy">Tenant Satisfaction</div>
            <div className="text-sm text-gray-500 mt-1">
              Based on retention rates
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;

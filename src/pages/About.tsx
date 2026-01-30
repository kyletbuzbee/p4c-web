import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Building2 } from 'lucide-react';
import { IMAGES } from '../constants/images';

const About: React.FC = () => (
  <div className="min-h-screen bg-p4c-beige">
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
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <div className="absolute left-0 top-0 z-0 size-full">
        <img
          src={IMAGES.BANNERS.HERO_ABOUT}
          alt="Properties 4 Creation team on site"
          className="size-full object-cover"
        />
        <div className="bg-p4c-navy/80 absolute left-0 top-0 size-full mix-blend-multiply" />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl animate-fade-in-up px-4 text-center">
        <div className="mb-6 flex justify-center">
          <div className="bg-p4c-gold/20 border-p4c-gold/30 rounded-2xl border p-4 backdrop-blur-sm">
            <Building2 className="size-10 text-p4c-gold" />
          </div>
        </div>
        <h1 className="mb-4 font-serif text-4xl font-bold tracking-wide text-white md:text-5xl">
          Revitalizing East Texas, One Home at a Time.
        </h1>
        <p className="mx-auto max-w-2xl text-xl font-light text-gray-200">
          Setting the standard for residential property management and
          development in
          <strong> East Texas</strong>.
        </p>
      </div>
    </div>

    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Company Overview */}
      <div className="mb-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 font-serif text-3xl font-bold text-p4c-navy">
            Professional Excellence in Housing
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            Properties 4 Creation is not just a landlord; we are a comprehensive
            real estate solution provider. Founded on the principles of
            integrity and operational excellence, we acquire, renovate, and
            manage residential assets to provide superior housing outcomes.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Our unique approach combines rigorous asset management with a
            commitment to community stability. By partnering with HUD-VASH and
            local municipalities, we ensure our investments deliver both
            financial returns and tangible social impact.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative h-96 overflow-hidden rounded-2xl border border-gray-200 shadow-2xl">
            <img
              src={IMAGES.TEAM.OWNER}
              alt="Richard Lonkert, Owner & Veteran"
              className="size-full object-cover"
            />
            <div className="bg-p4c-navy/80 absolute inset-x-0 bottom-0 p-4 text-white">
              <h3 className="text-lg font-bold">Richard Lonkert</h3>
              <p className="text-sm">Owner & Veteran</p>
            </div>
          </div>
          <div className="relative h-96 overflow-hidden rounded-2xl border border-gray-200 shadow-2xl">
            <img
              src={IMAGES.TEAM.HEADSHOT}
              alt="Kyle Buzbee, Managing Partner"
              className="size-full object-cover"
            />
            <div className="bg-p4c-navy/80 absolute inset-x-0 bottom-0 p-4 text-white">
              <h3 className="text-lg font-bold">Kyle Buzbee</h3>
              <p className="text-sm">Managing Partner</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Grid */}
      <div className="mb-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-p4c-navy">
            Our Journey
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            The milestones that define our growth and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
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
              className="rounded-xl border-t-4 border-p4c-gold bg-white p-8 shadow-sm transition-all hover:shadow-lg"
            >
              <div className="bg-p4c-navy/5 mb-6 flex size-14 items-center justify-center rounded-xl">
                <span className="text-xl font-bold text-p4c-navy">
                  {value.year}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-p4c-navy">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Credentials / Trust Indicators */}
      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-10 shadow-xl">
        <div className="grid grid-cols-1 gap-8 divide-y divide-gray-100 text-center md:grid-cols-3 md:divide-x md:divide-y-0">
          <div className="p-4">
            <div className="mb-2 text-4xl font-bold text-p4c-gold">10+</div>
            <div className="font-bold text-p4c-navy">Years of Experience</div>
            <div className="mt-1 text-sm text-gray-500">
              In Real Estate & Development
            </div>
          </div>
          <div className="p-4">
            <div className="mb-2 text-4xl font-bold text-p4c-gold">100%</div>
            <div className="font-bold text-p4c-navy">Voucher Acceptance</div>
            <div className="mt-1 text-sm text-gray-500">
              Section 8 & HUD-VASH
            </div>
          </div>
          <div className="p-4">
            <div className="mb-2 text-4xl font-bold text-p4c-gold">A+</div>
            <div className="font-bold text-p4c-navy">Tenant Satisfaction</div>
            <div className="mt-1 text-sm text-gray-500">
              Based on retention rates
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { IMAGES } from '../constants/images';
import {
  Flag,
  Briefcase,
  Users,
  Home,
  Shield,
  Phone,
  FileCheck,
  MapPin,
} from 'lucide-react';

const VeteranServices: React.FC = () => (
  <div className="bg-p4c-beige min-h-screen">
    <Helmet>
      <title>Veteran Housing Logistics | Properties 4 Creation</title>
      <meta
        name="description"
        content="Operational support for veterans in East Texas. We coordinate HUD-VASH leasing, employment referrals, and housing stability."
      />
    </Helmet>

    {/* Hero Banner */}
    <div className="relative h-[400px] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src={IMAGES.BANNERS.HERO_RESOURCES}
          alt="American flag on a renovated porch in East Texas"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full hero-overlay-primary bg-p4c-navy/60" />
        <div className="absolute top-0 left-0 w-full h-full hero-overlay-secondary bg-gradient-to-t from-p4c-navy to-transparent" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <div className="flex justify-center mb-6">
          <div className="bg-p4c-gold/20 p-4 rounded-2xl border border-p4c-gold/30 backdrop-blur-sm">
            <Flag className="w-10 h-10 text-p4c-gold" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-wide">
          Housing Logistics & Support
        </h1>
        <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto">
          Structured housing solutions and resource coordination for veterans in
          the
          <strong> East Texas</strong> area.
        </p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Core Services Grid */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-4">
            Operational Support Pillars
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide more than just a lease; we offer a framework for
            stability and reintegration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Home,
              title: 'Priority Housing Placement',
              text: 'Veterans receive Tier-1 priority for all vacancies. We reserve units for up to 7 days to allow for VASH voucher administrative processing.',
            },
            {
              icon: Shield,
              title: 'Security Deposit Assistance',
              text: 'We coordinate with local partners like CampV and the Texas Veterans Commission to secure deposit funding, minimizing out-of-pocket costs.',
            },
            {
              icon: Users,
              title: 'Peer Support Network',
              text: 'Access to our internal network of veteran residents for camaraderie, mentorship, and community integration.',
            },
            {
              icon: Briefcase,
              title: 'Employment Pipelines',
              text: 'Direct referral system to Properties 4 Creation renovation crews and our network of veteran-friendly employers in East Texas.',
            },
            {
              icon: FileCheck,
              title: 'Benefits Coordination',
              text: 'Our leasing staff is trained to assist with VA paperwork, ensuring your housing benefits are processed without delay.',
            },
            {
              icon: Phone,
              title: 'Dedicated Liaison',
              text: 'A direct line to our Veteran Housing Liaison for maintenance requests, lease questions, or resource referrals.',
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
            >
              <div className="bg-p4c-navy/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-p4c-navy transition-colors">
                <service.icon className="w-7 h-7 text-p4c-navy group-hover:text-p4c-gold transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-p4c-navy mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Specialized Housing Programs */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-20 border border-gray-100">
        <div className="bg-p4c-navy p-8 md:p-10 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-2">
              Accepted Voucher Programs
            </h2>
            <p className="text-gray-300">
              We are experts in processing federal and state housing assistance.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
            <span className="text-p4c-gold font-bold">100% Approval Rate</span>{' '}
            on Inspections
          </div>
        </div>

        <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold text-p4c-navy mb-3 flex items-center gap-3">
              <span className="bg-p4c-gold w-1.5 h-6 rounded-full" />
              HUD-VASH Program
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We work directly with VA case managers to expedite HQS inspections
              and lease-ups. Our team understands the specific requirements of
              the HUD-VASH program to prevent administrative delays.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-p4c-navy mb-3 flex items-center gap-3">
              <span className="bg-p4c-gold w-1.5 h-6 rounded-full" />
              Section 8 (HCV)
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Standard Housing Choice Vouchers are welcomed. Our properties are
              pre-screened to meet or exceed Housing Quality Standards (HQS),
              ensuring a pass on the first inspection attempt.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-p4c-navy mb-3 flex items-center gap-3">
              <span className="bg-p4c-gold w-1.5 h-6 rounded-full" />
              Rapid Rehousing (SSVF)
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We accept short-term rental assistance from SSVF providers. We
              offer flexible lease terms to align with the duration of your
              assistance program to ensure housing stability.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-p4c-navy mb-3 flex items-center gap-3">
              <span className="bg-p4c-gold w-1.5 h-6 rounded-full" />
              ADA / Accessibility
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We provide reasonable accommodations including wheelchair ramps,
              grab bars, and visual alarms at no cost to disabled veteran
              tenants upon request.
            </p>
          </div>
        </div>
      </div>

      {/* Resources Directory */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-serif font-bold text-p4c-navy mb-6 flex items-center gap-2">
            <MapPin className="text-p4c-gold w-6 h-6" />
            East Texas Resource Network
          </h2>
          <div className="space-y-4">
            {[
              {
                name: 'CampV Tyler',
                desc: 'Holistic veteran support campus offering legal, financial, and mental health services.',
                phone: '(903) 566-1010',
              },
              {
                name: 'Texas Veterans Commission',
                desc: 'Expert representation for disability claims and employment services.',
                phone: '(512) 463-6564',
              },
              {
                name: 'Smith County Veteran Services',
                desc: 'Local assistance filing VA claims and accessing county benefits.',
                phone: '(903) 590-2930',
              },
              {
                name: 'VA Outpatient Clinic - Tyler',
                desc: 'Primary care, mental health, and specialty medical services.',
                phone: '(903) 590-3050',
              },
            ].map((res, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center justify-between bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-p4c-gold transition-colors"
              >
                <div>
                  <h4 className="font-bold text-p4c-navy text-lg">
                    {res.name}
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">{res.desc}</p>
                </div>
                <div className="mt-4 sm:mt-0 flex-shrink-0">
                  <a
                    href={`tel:${res.phone.replace(/\D/g, '')}`}
                    className="text-p4c-navy font-bold hover:text-p4c-gold transition-colors flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100"
                  >
                    <Phone className="w-4 h-4" /> {res.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-p4c-navy text-white p-8 rounded-2xl h-fit shadow-xl border-t-4 border-p4c-gold">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-p4c-gold" />
            Tactical Support
          </h3>
          <p className="text-gray-300 mb-6 text-sm leading-relaxed">
            If you are a veteran in crisis or at immediate risk of homelessness,
            activate the Veterans Crisis Line immediately.
          </p>
          <a
            href="tel:988"
            className="block w-full bg-p4c-gold text-p4c-navy text-center py-4 rounded-lg font-bold hover:bg-white transition-colors mb-4 shadow-lg"
          >
            Dial 988 (Press 1)
          </a>
          <div className="text-center text-xs text-gray-400 border-t border-white/10 pt-4 mt-4">
            <p>Confidential • 24/7 • Free</p>
            <p className="mt-1">P4C Liaison: (903) 707-8460</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default VeteranServices;

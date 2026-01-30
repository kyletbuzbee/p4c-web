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
  <div className="min-h-screen bg-p4c-beige">
    <Helmet>
      <title>Veteran Housing Logistics | Properties 4 Creation</title>
      <meta
        name="description"
        content="Operational support for veterans in East Texas. We coordinate HUD-VASH leasing, employment referrals, and housing stability."
      />
    </Helmet>

    {/* Hero Banner */}
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <div className="absolute left-0 top-0 z-0 size-full">
        <img
          src={IMAGES.BANNERS.HERO_RESOURCES}
          alt="American flag on a renovated porch in East Texas"
          className="size-full object-cover"
        />
        <div className="hero-overlay-primary bg-p4c-navy/60 absolute left-0 top-0 size-full" />
        <div className="hero-overlay-secondary absolute left-0 top-0 size-full bg-gradient-to-t from-p4c-navy to-transparent" />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl animate-fade-in-up px-4 text-center">
        <div className="mb-6 flex justify-center">
          <div className="bg-p4c-gold/20 border-p4c-gold/30 rounded-2xl border p-4 backdrop-blur-sm">
            <Flag className="size-10 text-p4c-gold" />
          </div>
        </div>
        <h1 className="mb-4 font-serif text-4xl font-bold tracking-wide text-white md:text-5xl">
          Housing Logistics & Support
        </h1>
        <p className="mx-auto max-w-2xl text-xl font-light text-gray-200">
          Structured housing solutions and resource coordination for veterans in
          the
          <strong> East Texas</strong> area.
        </p>
      </div>
    </div>

    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Core Services Grid */}
      <div className="mb-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-p4c-navy">
            Operational Support Pillars
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            We provide more than just a lease; we offer a framework for
            stability and reintegration.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
              className="group rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <div className="bg-p4c-navy/5 mb-6 flex size-14 items-center justify-center rounded-xl transition-colors group-hover:bg-p4c-navy">
                <service.icon className="size-7 text-p4c-navy transition-colors group-hover:text-p4c-gold" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-p4c-navy">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Specialized Housing Programs */}
      <div className="mb-20 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">
        <div className="flex flex-col items-start justify-between gap-6 bg-p4c-navy p-8 text-white md:flex-row md:items-center md:p-10">
          <div>
            <h2 className="mb-2 font-serif text-3xl font-bold">
              Accepted Voucher Programs
            </h2>
            <p className="text-gray-300">
              We are experts in processing federal and state housing assistance.
            </p>
          </div>
          <div className="rounded-lg border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="font-bold text-p4c-gold">100% Approval Rate</span>{' '}
            on Inspections
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 p-8 md:grid-cols-2 md:p-10">
          <div>
            <h3 className="mb-3 flex items-center gap-3 text-xl font-bold text-p4c-navy">
              <span className="h-6 w-1.5 rounded-full bg-p4c-gold" />
              HUD-VASH Program
            </h3>
            <p className="mb-4 leading-relaxed text-gray-600">
              We work directly with VA case managers to expedite HQS inspections
              and lease-ups. Our team understands the specific requirements of
              the HUD-VASH program to prevent administrative delays.
            </p>
          </div>
          <div>
            <h3 className="mb-3 flex items-center gap-3 text-xl font-bold text-p4c-navy">
              <span className="h-6 w-1.5 rounded-full bg-p4c-gold" />
              Section 8 (HCV)
            </h3>
            <p className="mb-4 leading-relaxed text-gray-600">
              Standard Housing Choice Vouchers are welcomed. Our properties are
              pre-screened to meet or exceed Housing Quality Standards (HQS),
              ensuring a pass on the first inspection attempt.
            </p>
          </div>
          <div>
            <h3 className="mb-3 flex items-center gap-3 text-xl font-bold text-p4c-navy">
              <span className="h-6 w-1.5 rounded-full bg-p4c-gold" />
              Rapid Rehousing (SSVF)
            </h3>
            <p className="mb-4 leading-relaxed text-gray-600">
              We accept short-term rental assistance from SSVF providers. We
              offer flexible lease terms to align with the duration of your
              assistance program to ensure housing stability.
            </p>
          </div>
          <div>
            <h3 className="mb-3 flex items-center gap-3 text-xl font-bold text-p4c-navy">
              <span className="h-6 w-1.5 rounded-full bg-p4c-gold" />
              ADA / Accessibility
            </h3>
            <p className="mb-4 leading-relaxed text-gray-600">
              We provide reasonable accommodations including wheelchair ramps,
              grab bars, and visual alarms at no cost to disabled veteran
              tenants upon request.
            </p>
          </div>
        </div>
      </div>

      {/* Resources Directory */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="mb-6 flex items-center gap-2 font-serif text-2xl font-bold text-p4c-navy">
            <MapPin className="size-6 text-p4c-gold" />
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
                className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors hover:border-p4c-gold sm:flex-row sm:items-center"
              >
                <div>
                  <h4 className="text-lg font-bold text-p4c-navy">
                    {res.name}
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">{res.desc}</p>
                </div>
                <div className="mt-4 shrink-0 sm:mt-0">
                  <a
                    href={`tel:${res.phone.replace(/\D/g, '')}`}
                    className="flex items-center gap-2 rounded-lg border border-gray-100 bg-gray-50 px-4 py-2 font-bold text-p4c-navy transition-colors hover:text-p4c-gold"
                  >
                    <Phone className="size-4" /> {res.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-fit rounded-2xl border-t-4 border-p4c-gold bg-p4c-navy p-8 text-white shadow-xl">
          <h3 className="mb-4 flex items-center gap-2 text-xl font-bold">
            <Shield className="size-5 text-p4c-gold" />
            Tactical Support
          </h3>
          <p className="mb-6 text-sm leading-relaxed text-gray-300">
            If you are a veteran in crisis or at immediate risk of homelessness,
            activate the Veterans Crisis Line immediately.
          </p>
          <a
            href="tel:988"
            className="mb-4 block w-full rounded-lg bg-p4c-gold py-4 text-center font-bold text-p4c-navy shadow-lg transition-colors hover:bg-white"
          >
            Dial 988 (Press 1)
          </a>
          <div className="mt-4 border-t border-white/10 pt-4 text-center text-xs text-gray-400">
            <p>Confidential • 24/7 • Free</p>
            <p className="mt-1">P4C Liaison: (903) 707-8460</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default VeteranServices;

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HardHat, Briefcase, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants/images';

const Employment: React.FC = () => (
  <>
    <Helmet>
      <title>
        Careers | Join Our Veteran-Led Construction Team | Properties 4 Creation
      </title>
      <meta
        name="description"
        content="Join Properties 4 Creation's veteran-led construction team. We hire veterans first with competitive pay, flexible schedules, and career advancement opportunities in East Texas."
      />
      <meta
        name="keywords"
        content="veteran jobs East Texas, construction careers, veteran hiring, skilled trades jobs, veteran employment, construction company hiring"
      />
    </Helmet>
    <div className="min-h-screen bg-p4c-beige">
      {/* Hero Banner */}
      <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
        <div className="absolute left-0 top-0 z-0 size-full">
          <img
            src={IMAGES.GALLERY.FRAMING}
            alt="Construction blueprints and tools"
            className="size-full object-cover"
          />
          <div className="hero-overlay-primary absolute left-0 top-0 size-full" />
          <div className="hero-overlay-secondary absolute left-0 top-0 size-full" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="hero-text-contrast mb-4 font-serif text-4xl font-bold text-white md:text-5xl">
            Build With Purpose
          </h1>
          <p className="hero-text-enhanced text-xl font-medium text-p4c-gold">
            Join the Properties 4 Creation Crew. We Hire Veterans First.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* Mission & Culture */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-p4c-navy p-2">
                <HardHat className="size-6 text-p4c-gold" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-p4c-navy">
                Why Work With Us?
              </h2>
            </div>
            <p className="mb-6 leading-relaxed text-gray-700">
              At Properties 4 Creation, we believe that the hands that built our
              nation are best suited to build our communities. We aren&apos;t
              just renovating houses; we are restoring dignity.
            </p>
            <p className="mb-8 leading-relaxed text-gray-700">
              We offer competitive pay, flexible schedules for reservists, and a
              culture that understands the value of discipline, integrity, and
              hard work.
            </p>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 border-b pb-2 text-lg font-bold text-p4c-navy">
                Our Commitments to You
              </h3>
              <ul className="space-y-3">
                {[
                  'Priority hiring for Veterans and spouses',
                  'Weekly pay schedules',
                  'Tools and safety gear allowance',
                  'Skills training and certification support',
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle2 className="mr-3 size-5 text-p4c-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Open Positions */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-p4c-navy p-2">
                <Briefcase className="size-6 text-p4c-gold" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-p4c-navy">
                Open Positions
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: 'Lead Carpenter',
                  type: 'Full-Time',
                  location: 'Tyler, TX',
                  salary: '$25 - $35/hr',
                },
                {
                  title: 'HVAC Technician',
                  type: 'Contract',
                  location: 'Longview, TX',
                  salary: 'Project Based',
                },
                {
                  title: 'Property Manager',
                  type: 'Full-Time',
                  location: 'East Texas Area',
                  salary: '$45k - $55k/yr',
                },
                {
                  title: 'General Laborer',
                  type: 'Part-Time',
                  location: 'Various Sites',
                  salary: '$18/hr',
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="rounded-xl border-l-4 border-p4c-gold bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
                >
                  <div className="mb-2 flex items-start justify-between">
                    <h3 className="text-xl font-bold text-p4c-navy">
                      {job.title}
                    </h3>
                    <span className="rounded bg-gray-100 px-2 py-1 text-xs font-bold uppercase text-gray-600">
                      {job.type}
                    </span>
                  </div>
                  <div className="mb-4 flex justify-between text-sm text-gray-500">
                    <span>{job.location}</span>
                    <span className="font-semibold text-p4c-navy">
                      {job.salary}
                    </span>
                  </div>
                  <button className="w-full rounded border border-p4c-navy py-2 font-medium text-p4c-navy transition-colors hover:bg-p4c-navy hover:text-white">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl bg-p4c-navy p-6 text-center text-white">
              <h4 className="mb-2 text-lg font-bold">
                Don&apos;t see your trade?
              </h4>
              <p className="mb-4 text-sm text-gray-300">
                We are always looking for skilled plumbers, electricians, and
                roofers.
              </p>
              <Link
                to="/contact"
                className="font-bold text-p4c-gold underline hover:text-white"
              >
                Send us your resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Employment;

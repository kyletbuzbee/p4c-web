import React from 'react';
import { HardHat, Briefcase, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants/images';

const Employment: React.FC = () => (
  <div className="bg-p4c-beige min-h-screen">
    {/* Hero Banner */}
    <div className="relative h-[400px] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src={IMAGES.GALLERY.FRAMING}
          alt="Construction blueprints and tools"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full hero-overlay-primary" />
        <div className="absolute top-0 left-0 w-full h-full hero-overlay-secondary" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 hero-text-contrast">
          Build With Purpose
        </h1>
        <p className="text-xl text-p4c-gold font-medium hero-text-enhanced">
          Join the Properties 4 Creation Crew. We Hire Veterans First.
        </p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Mission & Culture */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-p4c-navy p-2 rounded-lg">
              <HardHat className="text-p4c-gold w-6 h-6" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-p4c-navy">
              Why Work With Us?
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Properties 4 Creation, we believe that the hands that built our
            nation are best suited to build our communities. We aren't just
            renovating houses; we are restoring dignity.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            We offer competitive pay, flexible schedules for reservists, and a
            culture that understands the value of discipline, integrity, and
            hard work.
          </p>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-lg mb-4 text-p4c-navy border-b pb-2">
              Our Commitments to You
            </h3>
            <ul className="space-y-3">
              {[
                'Priority hiring for Veterans and spouses',
                "Weekly pay schedules",
                'Tools and safety gear allowance',
                "Skills training and certification support",
              ].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-p4c-gold mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Open Positions */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-p4c-navy p-2 rounded-lg">
              <Briefcase className="text-p4c-gold w-6 h-6" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-p4c-navy">
              Open Positions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Lead Carpenter",
                type: "Full-Time",
                location: "Tyler, TX",
                salary: "$25 - $35/hr",
              },
              {
                title: "HVAC Technician",
                type: "Contract",
                location: "Longview, TX",
                salary: "Project Based",
              },
              {
                title: "Property Manager",
                type: "Full-Time",
                location: "East Texas Area",
                salary: "$45k - $55k/yr",
              },
              {
                title: "General Laborer",
                type: "Part-Time",
                location: "Various Sites",
                salary: "$18/hr",
              },
            ].map((job, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-p4c-gold"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl text-p4c-navy">
                    {job.title}
                  </h3>
                  <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded uppercase">
                    {job.type}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>{job.location}</span>
                  <span className="font-semibold text-p4c-navy">
                    {job.salary}
                  </span>
                </div>
                <button className="w-full border border-p4c-navy text-p4c-navy hover:bg-p4c-navy hover:text-white py-2 rounded font-medium transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-p4c-navy text-white p-6 rounded-xl text-center">
            <h4 className="font-bold text-lg mb-2">Don't see your trade?</h4>
            <p className="text-gray-300 text-sm mb-4">
              We are always looking for skilled plumbers, electricians, and
              roofers.
            </p>
            <Link
              to="/contact"
              className="text-p4c-gold font-bold underline hover:text-white"
            >
              Send us your resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Employment;

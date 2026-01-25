import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Briefcase,
  Users,
  ShieldCheck,
  HeartHandshake,
  Star,
} from 'lucide-react';

const Careers: React.FC = () => (
  <div className="bg-p4c-beige min-h-screen">
    <Helmet>
      <title>Careers | Join Our Team | Properties 4 Creation</title>
      <meta
        name="description"
        content="Explore career opportunities with Properties 4 Creation. Join our team in East Texas and help us revitalize communities through quality housing."
      />
    </Helmet>

    {/* Hero Section */}
    <div className="relative h-[400px] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src="/images/banners/career-banner.png"
          alt="Professional team working together"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-p4c-navy/80 mix-blend-multiply" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <div className="flex justify-center mb-6">
          <div className="bg-p4c-gold/20 p-4 rounded-2xl border border-p4c-gold/30 backdrop-blur-sm">
            <Briefcase className="w-10 h-10 text-p4c-gold" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-wide">
          Join Our Team
        </h1>
        <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto">
          Build a rewarding career while making a difference in East Texas
          communities
        </p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Company Culture Section */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-6">
              Our Culture
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              At Properties 4 Creation, we believe in creating opportunities -
              for our residents, our communities, and our team members. We
              foster a culture of professionalism, integrity, and continuous
              growth.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <HeartHandshake className="w-6 h-6 text-p4c-gold" />
                  <h4 className="font-bold text-p4c-navy">Mission-Driven</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  We're committed to revitalizing East Texas communities through
                  quality housing
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-6 h-6 text-p4c-gold" />
                  <h4 className="font-bold text-p4c-navy">Team Focused</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  We invest in our team&apos;s growth and create a supportive work
                  environment
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="w-6 h-6 text-p4c-gold" />
                  <h4 className="font-bold text-p4c-navy">
                    Professional Growth
                  </h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Continuous learning and career development opportunities
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <Star className="w-6 h-6 text-p4c-gold" />
                  <h4 className="font-bold text-p4c-navy">Excellence</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  We strive for excellence in everything we do
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/about/about-us-team-onsite.webp"
              alt="Team members working on site"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-p4c-navy/20" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl">
              <div className="flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-p4c-gold" />
                <div>
                  <div className="font-bold text-p4c-navy">Career Growth</div>
                  <div className="text-sm text-gray-600">
                    Join a team that values your professional development
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-4">
            Current Opportunities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our growing
            team
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-p4c-gold hover:shadow-2xl transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold text-p4c-navy mb-2">
                  Property Manager
                </h3>
                <p className="text-gray-600 mb-4">
                  Manage our portfolio of residential properties, ensuring
                  tenant satisfaction and property maintenance.
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-p4c-navy/10 text-p4c-navy px-3 py-1 rounded-full text-sm font-medium">
                    Full-time
                  </span>
                  <span className="bg-p4c-navy/10 text-p4c-navy px-3 py-1 rounded-full text-sm font-medium">
                    Tyler, TX
                  </span>
                  <span className="bg-p4c-navy/10 text-p4c-navy px-3 py-1 rounded-full text-sm font-medium">
                    $50,000 - $65,000/year
                  </span>
                </div>
              </div>
              <div className="flex items-end justify-end">
                <a
                  href="/employment"
                  className="bg-p4c-gold text-p4c-navy hover:bg-white hover:text-p4c-navy px-6 py-3 rounded-xl font-bold transition-all duration-300 inline-flex items-center gap-2"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-p4c-gold hover:shadow-2xl transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold text-p4c-navy mb-2">
                  Maintenance Technician
                </h3>
                <p className="text-gray-600 mb-4">
                  Perform maintenance and repairs on our residential properties
                  to ensure they meet our quality standards.
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-p4c-navy/10 text-p4c-navy px-3 py-1 rounded-full text-sm font-medium">
                    Full-time
                  </span>
                  <span className="bg-p4c-navy/10 text-p4c-navy px-3 py-1 rounded-full text-sm font-medium">
                    Longview, TX
                  </span>
                  <span className="bg-p4c-navy/10 text-p4c-navy px-3 py-1 rounded-full text-sm font-medium">
                    $18 - $22/hour
                  </span>
                </div>
              </div>
              <div className="flex items-end justify-end">
                <a
                  href="/employment"
                  className="bg-p4c-gold text-p4c-navy hover:bg-white hover:text-p4c-navy px-6 py-3 rounded-xl font-bold transition-all duration-300 inline-flex items-center gap-2"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-p4c-gold hover:shadow-2xl transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold text-p4c-navy mb-2">
                  Acquisitions Specialist
                </h3>
                <p className="text-gray-600 mb-4">
                  Identify and evaluate potential property acquisitions in East
                  Texas markets.
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-p4c-navy/10 text-p4c-navy px-3 py-1 rounded-full text-sm font-medium">
                    Full-time
                  </span>
                  <span className="bg-p4c-navy/10 text-p4c-navy px-3 py-1 rounded-full text-sm font-medium">
                    Tyler, TX
                  </span>
                  <span className="bg-p4c-navy/10 text-p4c-navy px-3 py-1 rounded-full text-sm font-medium">
                    $60,000 - $80,000/year + commission
                  </span>
                </div>
              </div>
              <div className="flex items-end justify-end">
                <a
                  href="/employment"
                  className="bg-p4c-gold text-p4c-navy hover:bg-white hover:text-p4c-navy px-6 py-3 rounded-xl font-bold transition-all duration-300 inline-flex items-center gap-2"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-4">
            Why Work With Us?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer competitive compensation and comprehensive benefits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-xl text-center hover:shadow-2xl transition-shadow">
            <div className="bg-p4c-navy/5 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-p4c-navy"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-p4c-navy mb-4">
              Competitive Pay
            </h3>
            <p className="text-gray-600">
              Market-leading salaries and performance bonuses
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl text-center hover:shadow-2xl transition-shadow">
            <div className="bg-p4c-navy/5 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-p4c-navy"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-p4c-navy mb-4">
              Health Benefits
            </h3>
            <p className="text-gray-600">
              Comprehensive medical, dental, and vision insurance
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl text-center hover:shadow-2xl transition-shadow">
            <div className="bg-p4c-navy/5 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-p4c-navy"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-p4c-navy mb-4">
              Career Growth
            </h3>
            <p className="text-gray-600">
              Professional development and advancement opportunities
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-p4c-navy rounded-2xl text-white p-12 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-p4c-gold/20 p-4 rounded-2xl border border-p4c-gold/30">
              <Briefcase className="w-10 h-10 text-p4c-gold" />
            </div>
          </div>
          <h2 className="text-3xl font-serif font-bold mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            We're always looking for passionate, skilled individuals who want to
            make a difference in East Texas communities. Whether you're in
            property management, construction, or acquisitions, we have
            opportunities for you to grow your career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/employment"
              className="bg-p4c-gold text-p4c-navy hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              View All Positions
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center gap-2"
            >
              Contact HR
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Careers;

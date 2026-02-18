import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Briefcase,
  Users,
  ShieldCheck,
  HeartHandshake,
  Star,
  Clock,
  Shield,
  TrendingUp,
} from 'lucide-react';
import { IMAGES } from '../constants/images';

const Careers: React.FC = () => (
  <div className="min-h-screen bg-p4c-beige">
    <Helmet>
      <title>Careers | Join Our Team | Properties 4 Creation</title>
      <meta
        name="description"
        content="Explore career opportunities with Properties 4 Creation. Join our team in East Texas and help us revitalize communities through quality housing."
      />
    </Helmet>

    {/* Hero Section */}
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <div className="absolute left-0 top-0 z-0 size-full">
        <img
          src={IMAGES.BANNERS.CAREER}
          alt="Professional team working together"
          className="size-full object-cover"
        />
        <div className="absolute left-0 top-0 size-full bg-p4c-navy/15 mix-blend-multiply" />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl animate-fade-in-up px-4 text-center">
        <div className="hero-text-container rounded-2xl border border-white/20 bg-p4c-navy/70 p-4 backdrop-blur-2xl md:p-6">
          <h1 className="hero-text-enhanced mb-4 font-serif text-4xl font-bold tracking-wide text-white md:text-5xl">
            Join Our Team
          </h1>
          <p className="hero-text-enhanced mx-auto max-w-2xl text-xl font-light text-gray-200">
            Build a rewarding career while making a difference in East Texas
            communities
          </p>
        </div>
      </div>
    </div>

    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Company Culture Section */}
      <section className="mb-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 font-serif text-3xl font-bold text-p4c-navy">
              Our Culture
            </h2>
            <p className="mb-8 leading-relaxed text-gray-600">
              At Properties 4 Creation, we believe in creating opportunities -
              for our residents, our communities, and our team members. We
              foster a culture of professionalism, integrity, and continuous
              growth.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-md">
                <div className="mb-3 flex items-center gap-3">
                  <HeartHandshake className="size-6 text-p4c-gold" />
                  <h4 className="font-bold text-p4c-navy">Mission-Driven</h4>
                </div>
                <p className="text-sm text-gray-600">
                  We&apos;re committed to revitalizing East Texas communities
                  through quality housing
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-md">
                <div className="mb-3 flex items-center gap-3">
                  <Users className="size-6 text-p4c-gold" />
                  <h4 className="font-bold text-p4c-navy">Team Focused</h4>
                </div>
                <p className="text-sm text-gray-600">
                  We invest in our team&apos;s growth and create a supportive
                  work environment
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-md">
                <div className="mb-3 flex items-center gap-3">
                  <ShieldCheck className="size-6 text-p4c-gold" />
                  <h4 className="font-bold text-p4c-navy">
                    Professional Growth
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  Continuous learning and career development opportunities
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-md">
                <div className="mb-3 flex items-center gap-3">
                  <Star className="size-6 text-p4c-gold" />
                  <h4 className="font-bold text-p4c-navy">Excellence</h4>
                </div>
                <p className="text-sm text-gray-600">
                  We strive for excellence in everything we do
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-96 overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={IMAGES.TEAM.ONSITE}
              alt="Team members working on site"
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-p4c-navy/10" />
            <div className="absolute inset-x-6 bottom-6 rounded-xl bg-white/90 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <Briefcase className="size-6 text-p4c-gold" />
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
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-p4c-navy">
            Current Opportunities
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            We&apos;re always looking for talented individuals to join our team
          </p>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border-l-4 border-p4c-gold bg-white p-8 shadow-xl transition-shadow hover:shadow-2xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="md:col-span-2">
                <h3 className="mb-2 text-xl font-bold text-p4c-navy">
                  Property Manager
                </h3>
                <p className="mb-4 text-gray-600">
                  Manage our portfolio of residential properties, ensuring
                  tenant satisfaction and property maintenance.
                </p>
                <div className="mb-4 flex flex-wrap gap-3">
                  <span className="rounded-full bg-p4c-navy/10 px-3 py-1 text-sm font-medium text-p4c-navy">
                    Full-time
                  </span>
                  <span className="rounded-full bg-p4c-navy/10 px-3 py-1 text-sm font-medium text-p4c-navy">
                    Tyler, TX
                  </span>
                  <span className="rounded-full bg-p4c-navy/10 px-3 py-1 text-sm font-medium text-p4c-navy">
                    $50,000 - $65,000/year
                  </span>
                </div>
              </div>
              <div className="flex items-end justify-end">
                <a
                  href="/employment"
                  className="inline-flex items-center gap-2 rounded-xl bg-p4c-gold px-6 py-3 font-bold text-p4c-navy transition-all duration-300 hover:bg-white hover:text-p4c-navy"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border-l-4 border-p4c-gold bg-white p-8 shadow-xl transition-shadow hover:shadow-2xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="md:col-span-2">
                <h3 className="mb-2 text-xl font-bold text-p4c-navy">
                  Maintenance Technician
                </h3>
                <p className="mb-4 text-gray-600">
                  Perform maintenance and repairs on our residential properties
                  to ensure they meet our quality standards.
                </p>
                <div className="mb-4 flex flex-wrap gap-3">
                  <span className="rounded-full bg-p4c-navy/10 px-3 py-1 text-sm font-medium text-p4c-navy">
                    Full-time
                  </span>
                  <span className="rounded-full bg-p4c-navy/10 px-3 py-1 text-sm font-medium text-p4c-navy">
                    Longview, TX
                  </span>
                  <span className="rounded-full bg-p4c-navy/10 px-3 py-1 text-sm font-medium text-p4c-navy">
                    $18 - $22/hour
                  </span>
                </div>
              </div>
              <div className="flex items-end justify-end">
                <a
                  href="/employment"
                  className="inline-flex items-center gap-2 rounded-xl bg-p4c-gold px-6 py-3 font-bold text-p4c-navy transition-all duration-300 hover:bg-white hover:text-p4c-navy"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border-l-4 border-p4c-gold bg-white p-8 shadow-xl transition-shadow hover:shadow-2xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="md:col-span-2">
                <h3 className="mb-2 text-xl font-bold text-p4c-navy">
                  Acquisitions Specialist
                </h3>
                <p className="mb-4 text-gray-600">
                  Identify and evaluate potential property acquisitions in East
                  Texas markets.
                </p>
                <div className="mb-4 flex flex-wrap gap-3">
                  <span className="rounded-full bg-p4c-navy/10 px-3 py-1 text-sm font-medium text-p4c-navy">
                    Full-time
                  </span>
                  <span className="rounded-full bg-p4c-navy/10 px-3 py-1 text-sm font-medium text-p4c-navy">
                    Tyler, TX
                  </span>
                  <span className="rounded-full bg-p4c-navy/10 px-3 py-1 text-sm font-medium text-p4c-navy">
                    $60,000 - $80,000/year + commission
                  </span>
                </div>
              </div>
              <div className="flex items-end justify-end">
                <a
                  href="/employment"
                  className="inline-flex items-center gap-2 rounded-xl bg-p4c-gold px-6 py-3 font-bold text-p4c-navy transition-all duration-300 hover:bg-white hover:text-p4c-navy"
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
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-p4c-navy">
            Why Work With Us?
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            We offer competitive compensation and comprehensive benefits
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-8 text-center shadow-xl transition-shadow hover:shadow-2xl">
            <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-xl bg-p4c-navy/5">
              <Clock className="size-8 text-p4c-navy" />
            </div>
            <h3 className="mb-4 text-xl font-bold text-p4c-navy">
              Competitive Pay
            </h3>
            <p className="text-gray-600">
              Market-leading salaries and performance bonuses
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 text-center shadow-xl transition-shadow hover:shadow-2xl">
            <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-xl bg-p4c-navy/5">
              <Shield className="size-8 text-p4c-navy" />
            </div>
            <h3 className="mb-4 text-xl font-bold text-p4c-navy">
              Health Benefits
            </h3>
            <p className="text-gray-600">
              Comprehensive medical, dental, and vision insurance
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 text-center shadow-xl transition-shadow hover:shadow-2xl">
            <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-xl bg-p4c-navy/5">
              <TrendingUp className="size-8 text-p4c-navy" />
            </div>
            <h3 className="mb-4 text-xl font-bold text-p4c-navy">
              Career Growth
            </h3>
            <p className="text-gray-600">
              Professional development and advancement opportunities
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-2xl bg-p4c-navy p-12 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex justify-center">
            <div className="rounded-2xl border border-p4c-gold/30 bg-p4c-gold/40 p-4">
              <Briefcase className="size-10 text-p4c-gold" />
            </div>
          </div>
          <h2 className="mb-6 font-serif text-3xl font-bold">
            Ready to Join Our Team?
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-gray-300">
            We&apos;re always looking for passionate, skilled individuals who
            make a difference in East Texas communities. Whether you&apos;re in
            property management, construction, or acquisitions, we have
            opportunities for you to grow your career.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/employment"
              className="inline-flex items-center gap-2 rounded-xl bg-p4c-gold px-8 py-4 text-lg font-bold text-p4c-navy shadow-lg transition-all duration-300 hover:bg-white hover:text-p4c-navy hover:shadow-xl"
            >
              View All Positions
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-white hover:text-p4c-navy"
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

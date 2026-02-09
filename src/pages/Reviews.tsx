import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Star,
  ShieldCheck,
  Hammer,
  Clock,
  Users,
  ArrowRight,
} from 'lucide-react';
import { IMAGES } from '../constants/images';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { useNavigate } from 'react-router-dom';

const Reviews: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-p4c-beige">
      <Helmet>
        <title>Our Standard of Quality | Properties 4 Creation</title>
        <meta
          name="description"
          content="Explore the Properties 4 Creation quality standard. See our commitment to $30k+ renovations per unit and our pledge to East Texas families."
        />
      </Helmet>

      {/* Hero Section - Mission Focused */}
      <div className="relative flex h-[450px] w-full items-center justify-center overflow-hidden">
        <div className="absolute left-0 top-0 z-0 size-full">
          <img
            src={IMAGES.BANNERS.HERO_COMMUNITY_IMPACT}
            alt="P4C Quality Renovation in East Texas"
            className="size-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute left-0 top-0 size-full bg-p4c-navy/90 mix-blend-multiply" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl animate-fade-in-up px-4 text-center">
          <h1 className="mb-6 font-serif text-4xl font-bold text-white md:text-6xl">
            Our Standard <span className="text-p4c-gold">of Excellence</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl font-light leading-relaxed text-gray-200">
            While our residents prepare their stories, explore the $30k+
            renovation standard we bring to every East Texas home.
          </p>
        </div>
      </div>

      {/* Quality Standards Grid */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              icon: <Hammer className="size-8 text-p4c-gold" />,
              title: '$30k+ Reinvestment',
              desc: 'Every acquisition undergoes a minimum $30,000 capital improvement to ensure modern living standards.',
            },
            {
              icon: <ShieldCheck className="size-8 text-p4c-gold" />,
              title: 'Veteran Inspected',
              desc: "As a veteran-owned company, our quality control is rigorous. We don't lease what we wouldn't live in.",
            },
            {
              icon: <Clock className="size-8 text-p4c-gold" />,
              title: 'Rapid Response',
              desc: "Our localized maintenance team ensures that 'Quality' extends beyond move-in day with 24-hour service.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border-b-4 border-p4c-gold bg-white p-8 shadow-sm"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="mb-2 font-serif text-xl font-bold text-p4c-navy">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Visual Proof Section */}
        <div className="mb-20 grid grid-cols-1 items-center gap-16 rounded-3xl bg-white p-8 shadow-xl md:p-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 font-serif text-3xl font-bold text-p4c-navy md:text-4xl">
              Transformation in Progress
            </h2>
            <p className="mb-8 leading-relaxed text-gray-600">
              We are currently revitalizing multiple properties across Tyler and
              Longview. Our focus is on durable materials like Quartz
              countertops and Luxury Vinyl Plank flooring that provide families
              with a dignified place to call home.
            </p>
            <button
              onClick={() => navigate('/properties')}
              className="inline-flex items-center gap-2 font-bold text-p4c-gold hover:underline"
              aria-label="View current available properties"
            >
              See Available Homes <ArrowRight className="size-4" />
            </button>
          </div>
          <div className="w-full">
            <BeforeAfterSlider
              beforeImage={IMAGES.RENOVATION.LIVING_ROOM.BEFORE}
              afterImage={IMAGES.RENOVATION.LIVING_ROOM.AFTER}
              label="East Texas Interior Revitalization"
            />
          </div>
        </div>

        {/* "Coming Soon" Placeholder Section */}
        <div className="py-20 text-center">
          <div className="mb-6 inline-flex size-20 items-center justify-center rounded-full bg-p4c-gold/10">
            <Users className="size-10 text-p4c-gold" />
          </div>
          <h2 className="mb-4 font-serif text-3xl font-bold text-p4c-navy">
            Resident Stories Coming Soon
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-gray-600">
            We are currently moving families into our newly renovated
            properties. Check back shortly to hear about their experiences with
            the Properties 4 Creation community.
          </p>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 opacity-50 grayscale md:grid-cols-2">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="rounded-2xl border-2 border-dashed border-gray-300 bg-white p-8"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="size-4 text-gray-300" />
                  ))}
                </div>
                <div className="mb-2 h-4 w-3/4 rounded bg-gray-200" />
                <div className="h-4 w-1/2 rounded bg-gray-200" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;

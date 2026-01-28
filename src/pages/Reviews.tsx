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
    <div className="bg-p4c-beige min-h-screen">
      <Helmet>
        <title>Our Standard of Quality | Properties 4 Creation</title>
        <meta
          name="description"
          content="Explore the Properties 4 Creation quality standard. See our commitment to $30k+ renovations per unit and our pledge to East Texas families."
        />
      </Helmet>

      {/* Hero Section - Mission Focused */}
      <div className="relative h-[450px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img
            src={IMAGES.BANNERS.HERO_COMMUNITY_IMPACT}
            alt="P4C Quality Renovation in East Texas"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-p4c-navy/80 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-p4c-gold/20 border border-p4c-gold/30 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <ShieldCheck className="w-5 h-5 text-p4c-gold" />
            <span className="text-p4c-gold text-xs font-bold tracking-widest uppercase">
              The Reliability Pledge
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Our Standard <span className="text-p4c-gold">of Excellence</span>
          </h1>
          <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
            While our residents prepare their stories, explore the $30k+
            renovation standard we bring to every East Texas home.
          </p>
        </div>
      </div>

      {/* Quality Standards Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <Hammer className="w-8 h-8 text-p4c-gold" />,
              title: '$30k+ Reinvestment',
              desc: 'Every acquisition undergoes a minimum $30,000 capital improvement to ensure modern living standards.',
            },
            {
              icon: <ShieldCheck className="w-8 h-8 text-p4c-gold" />,
              title: 'Veteran Inspected',
              desc: "As a veteran-owned company, our quality control is rigorous. We don't lease what we wouldn't live in.",
            },
            {
              icon: <Clock className="w-8 h-8 text-p4c-gold" />,
              title: 'Rapid Response',
              desc: "Our localized maintenance team ensures that 'Quality' extends beyond move-in day with 24-hour service.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-sm border-b-4 border-p4c-gold"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-serif font-bold text-p4c-navy mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Visual Proof Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-p4c-navy mb-6">
              Transformation in Progress
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We are currently revitalizing multiple properties across Tyler and
              Longview. Our focus is on durable materials like Quartz
              countertops and Luxury Vinyl Plank flooring that provide families
              with a dignified place to call home.
            </p>
            <button
              onClick={() => navigate('/properties')}
              className="inline-flex items-center gap-2 text-p4c-gold font-bold hover:underline"
              aria-label="View current available properties"
            >
              See Available Homes <ArrowRight className="w-4 h-4" />
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
        <div className="text-center py-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-p4c-gold/10 rounded-full mb-6">
            <Users className="w-10 h-10 text-p4c-gold" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-4">
            Resident Stories Coming Soon
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            We are currently moving families into our newly renovated
            properties. Check back shortly to hear about their experiences with
            the Properties 4 Creation community.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto opacity-50 grayscale">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border-2 border-dashed border-gray-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-gray-300" />
                  ))}
                </div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;

import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { IMAGES } from '../constants/images';

interface HeroProps {
  variant?: 'image' | 'video';
}

/**
 * P4C Hero Component
 * Refactored for: Revitalization Mission (East Texas Focus)
 * Content Makeup: 53% Community / 35% Family
 */
const Hero: React.FC<HeroProps> = ({ variant = 'image' }) => {
  const navigate = useNavigate();

  return (
    <section className="relative flex h-[90vh] w-full items-center overflow-hidden bg-p4c-navy">
      {/* Background Media Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {variant === 'video' ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={IMAGES.BANNERS.HERO_PROJECTS}
            className="size-full object-cover opacity-50" // Dimmed for readability
          >
            <source src={IMAGES.VIDEOS.HERO_HOME} type="video/mp4" />
          </video>
        ) : (
          <img
            src={IMAGES.BANNERS.HERO_HOME}
            alt="Professional renovation in East Texas"
            className="size-full object-cover opacity-40"
          />
        )}
        {/* Unified Gradient Overlay: More 'Enterprise', less 'Budget' */}
        <div className="via-p4c-navy/70 absolute inset-0 bg-gradient-to-r from-p4c-navy to-transparent" />
      </div>

      {/* Main Content: Left-aligned for high-end editorial feel */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl animate-fade-in-up">
          {/* Mission Badge: Community & Trust (The Reliability Pledge) */}
          <div className="bg-p4c-gold/10 border-p4c-gold/30 mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <ShieldCheck className="size-5 text-p4c-gold" />
            <span className="text-sm font-bold uppercase tracking-widest text-p4c-gold">
              The Properties 4 Creation Reliability Pledge
            </span>
          </div>

          <h1 className="mb-6 text-left font-serif text-5xl font-bold leading-[1.1] text-white md:text-7xl">
            Revitalizing <span className="text-p4c-gold">East Texas</span>
            <br />
            One Home at a Time.
          </h1>

          <p className="mb-10 text-xl font-light leading-relaxed text-gray-200 md:text-2xl">
            Delivering quality affordable housing for families and veterans.
            Sustainable community solutions in <strong>East Texas</strong>.
          </p>

          <div className="flex flex-col gap-5 sm:flex-row">
            <button
              onClick={() => navigate('/#homes')}
              className="flex items-center justify-center gap-2 rounded-xl bg-p4c-gold px-10 py-4 text-lg font-bold text-p4c-navy shadow-xl transition-all hover:-translate-y-1 hover:bg-white"
              aria-label="Browse available family homes in East Texas"
            >
              Find Your Home <ArrowRight className="size-5" />
            </button>

            <button
              onClick={() => navigate('/transparency')}
              className="rounded-xl border-2 border-white/30 bg-transparent px-10 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
              aria-label="View our renovation and community impact standards"
            >
              Our Impact Metrics
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

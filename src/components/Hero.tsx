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
    <section className="relative h-[90vh] w-full overflow-hidden flex items-center bg-p4c-navy">
      {/* Background Media Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {variant === 'video' ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={IMAGES.BANNERS.HERO_PROJECTS}
            className="object-cover w-full h-full opacity-50" // Dimmed for readability
          >
            <source src={IMAGES.VIDEOS.HERO_HOME} type="video/mp4" />
          </video>
        ) : (
          <img
            src={IMAGES.BANNERS.HERO_HOME}
            alt="Professional renovation in East Texas"
            className="object-cover w-full h-full opacity-40"
          />
        )}
        {/* Unified Gradient Overlay: More 'Enterprise', less 'Budget' */}
        <div className="absolute inset-0 bg-gradient-to-r from-p4c-navy via-p4c-navy/70 to-transparent" />
      </div>

      {/* Main Content: Left-aligned for high-end editorial feel */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl animate-fade-in-up">
          {/* Mission Badge: Community & Trust (The Reliability Pledge) */}
          <div className="inline-flex items-center gap-2 bg-p4c-gold/10 border border-p4c-gold/30 px-4 py-2 rounded-full mb-8">
            <ShieldCheck className="w-5 h-5 text-p4c-gold" />
            <span className="text-p4c-gold text-sm font-bold tracking-widest uppercase">
              The Properties 4 Creation Reliability Pledge
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-[1.1] text-left">
            Revitalizing <span className="text-p4c-gold">East Texas</span>
            <br />
            One Home at a Time.
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light leading-relaxed">
            Delivering quality affordable housing for families and veterans.
            Sustainable community solutions in <strong>East Texas</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <button
              onClick={() => navigate('/#homes')}
              className="bg-p4c-gold text-p4c-navy hover:bg-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl flex items-center justify-center gap-2 transform hover:-translate-y-1"
              aria-label="Browse available family homes in East Texas"
            >
              Find Your Home <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => navigate('/transparency')}
              className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-10 py-4 rounded-xl font-bold text-lg transition-all backdrop-blur-sm"
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

import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { IMAGES } from '../constants/images';
import OptimizedImage from './OptimizedImage';

interface HeroProps {
  variant?: 'image' | 'video';
}

/**
 * P4C Hero Component
 * Refactored for: Revitalization Mission (East Texas Focus)
 * Content Makeup: 53% Community / 35% Family
 * Optimized for LCP: fetchpriority="high", preloading, aspect-ratio
 */
const Hero: React.FC<HeroProps> = ({ variant = 'image' }) => {
  const navigate = useNavigate();

  // Resource hinting: Preload hero image for LCP optimization
  useEffect(() => {
    if (variant === 'image') {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = IMAGES.BANNERS.HERO_HOME_1920;
      link.setAttribute('fetchpriority', 'high');
      document.head.appendChild(link);
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [variant]);

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
            className="size-full object-cover"
            loading="lazy"
          >
            <source src={IMAGES.VIDEOS.HERO_HOME} type="video/mp4" />
          </video>
        ) : (
          <div className="aspect-video w-full" style={{ aspectRatio: '16/9' }}>
            <OptimizedImage
              src={IMAGES.BANNERS.HERO_HOME}
              alt="Professional renovation in East Texas"
              className="size-full object-cover"
              width={1920}
              height={1080}
              priority
              sizes={['100vw']}
              placeholder="blur"
            />
          </div>
        )}
        {/* Dual-Layer Gradient Overlay for enhanced text contrast */}
        {/* Layer 1: Global dimming to reduce overall image "noise" */}
        <div className="bg-p4c-navy/40 absolute inset-0" />
        {/* Layer 2: Directional gradient to anchor the text */}
        <div className="from-p4c-navy/90 via-p4c-navy/60 mobile-hero-intensify absolute inset-0 bg-gradient-to-r to-transparent" />
      </div>

      {/* Main Content: Left-aligned for high-end editorial feel */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="hero-text-container bg-p4c-navy/95 max-w-3xl animate-fade-in-up rounded-2xl border border-white/10 p-4 backdrop-blur-xl md:p-6">
          <h1 className="hero-text-enhanced mb-6 text-left font-serif text-5xl font-bold leading-[1.1] text-white md:text-7xl">
            Revitalizing <span className="text-p4c-gold">East Texas</span>
            <br />
            One Home at a Time.
          </h1>

          <p className="hero-text-enhanced mb-10 text-xl font-light leading-relaxed text-gray-200 md:text-2xl">
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

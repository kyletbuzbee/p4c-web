import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { IMAGES } from '../constants/images';
import OptimizedImage from './OptimizedImage';

interface HeroProps {
  variant?: 'image' | 'video';
}

/**
 * P4C Hero Component
 * Refactored for: Community Revitalization Mission (East Texas Focus)
 * Content Makeup: 50% Community / 30% Family / 15% Investors / 5% Veterans
 * Optimized for LCP: fetchpriority="high", preloading, aspect-ratio
 */
const Hero: React.FC<HeroProps> = ({ variant = 'image' }) => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);

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

  // Ensure video plays (some browsers block autoplay without user interaction)
  useEffect(() => {
    if (variant === 'video' && videoRef.current) {
      const video = videoRef.current;
      video.play().catch(() => {
        // Autoplay was prevented, video will show poster instead
      });
    }
  }, [variant]);

  return (
    <section className="relative flex h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] w-full items-center overflow-hidden bg-p4c-navy">
      {/* Background Media Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {variant === 'video' ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            poster={IMAGES.BANNERS.HERO_PROJECTS}
            className="size-full object-cover"
          >
            <source src={IMAGES.VIDEOS.HERO_HOME} type="video/mp4" />
          </video>
        ) : (
          <div className="aspect-video w-full" style={{ aspectRatio: '16/9' }}>
            <OptimizedImage
              src={IMAGES.BANNERS.HERO_HOME}
              alt="Professional renovation in East Texas"
              className="size-full object-cover"
              priority
            />
          </div>
        )}
        {/* Dual-Layer Gradient Overlay for enhanced text contrast */}
        {/* Layer 1: Minimal global dimming for subtle depth */}
        <div className="absolute inset-0 bg-p4c-navy/5" />
        {/* Layer 2: Light directional gradient to anchor the text */}
        <div className="mobile-hero-intensify absolute inset-0 bg-gradient-to-r from-p4c-navy/15 via-black/20 to-transparent" />
      </div>

      {/* Main Content: Left-aligned for high-end editorial feel */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="hero-text-container w-full max-w-2xl animate-fade-in-up rounded-2xl border border-white/10 bg-p4c-navy/25 p-6 sm:p-8 md:p-10 backdrop-blur-lg">
          <h1 className="hero-text-enhanced mb-4 text-left font-serif text-2xl font-bold leading-[1.1] text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            <span>
              Transforming{' '}
              <span className="inline-block text-p4c-gold">Communities</span>
            </span>
            <br />
            One Neighborhood at a Time.
          </h1>

          <p className="hero-text-enhanced mb-6 text-base font-light leading-relaxed text-gray-200 sm:text-lg md:text-xl lg:text-2xl">
            Strategic revitalization. Quality housing. Economic growth. Building
            thriving neighborhoods in <strong>East Texas</strong>.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-5">
            <button
              onClick={() => navigate('/community')}
              className="flex items-center justify-center gap-2 rounded-xl bg-p4c-gold px-6 py-3 text-base font-bold text-p4c-navy shadow-xl transition-all hover:-translate-y-1 hover:bg-white sm:px-10 sm:py-4 sm:text-lg"
              aria-label="Explore our community revitalization initiatives in East Texas"
            >
              Our Community Impact <ArrowRight className="size-4 sm:size-5" />
            </button>

            <button
              onClick={() => navigate('/properties')}
              className="rounded-xl border-2 border-white/30 bg-transparent px-6 py-3 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 sm:px-10 sm:py-4 sm:text-lg"
              aria-label="Browse available properties in revitalized neighborhoods"
            >
              Find Your Home
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

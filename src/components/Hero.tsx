import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { IMAGES } from '../constants/images';

interface HeroProps {
  variant?: 'image' | 'video';
}

const Hero: React.FC<HeroProps> = ({ variant = 'image' }) => {
  const navigate = useNavigate();

  return (
    <div className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Media */}
      <div
        className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden"
        aria-hidden="true"
      >
        {variant === 'video' ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={IMAGES.BANNERS.HERO_PROJECTS}
            className="object-cover w-full h-full"
          >
            <source src={IMAGES.VIDEOS.HERO_SPOTLIGHT} type="video/mp4" />
          </video>
        ) : (
          <img
            src={IMAGES.BANNERS.HERO_HOME}
            alt="Renovated family home in East Texas"
            className="object-cover w-full h-full"
          />
        )}
        {/* Overlays for text readability */}
        <div className="absolute top-0 left-0 w-full h-full hero-overlay-primary bg-p4c-navy/50" />
        <div className="absolute top-0 left-0 w-full h-full hero-overlay-secondary bg-gradient-to-b from-transparent to-p4c-navy/80" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight tracking-wide drop-shadow-2xl">
          The Gold Standard of <br />
          <span className="text-p4c-gold">Affordable Living.</span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-100 mb-10 font-light max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          Delivering enterprise-grade renovations and professional property
          management to families in{' '}
          <strong>Tyler, Longview, and Marshall</strong>.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <button
            onClick={() => navigate('/#homes')}
            className="bg-p4c-gold text-p4c-navy hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 transform hover:-translate-y-1 focus:ring-4 focus:ring-p4c-gold/50"
            aria-label="Browse available property listings"
          >
            Browse Available Homes <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => navigate('/transparency')}
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center hover:shadow-lg focus:ring-4 focus:ring-white/50"
            aria-label="View our renovation quality guarantees"
          >
            Our Quality Standard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

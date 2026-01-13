import React from 'react';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../constants/images';

interface HeroProps {
  variant?: 'image' | 'video';
}

const Hero: React.FC<HeroProps> = ({ variant = 'image' }) => (
  <div className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
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
          alt="Clean, restored P4C property in Tyler, Texas"
          className="object-cover w-full h-full"
        />
      )}
      <div className="absolute top-0 left-0 w-full h-full hero-overlay-primary bg-p4c-navy/40" />
      <div className="absolute top-0 left-0 w-full h-full hero-overlay-secondary bg-gradient-to-b from-transparent to-p4c-navy/60" />
    </div>

    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
      <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight tracking-wide">
        Dignity in Every Detail. <br />
        <span className="text-p4c-gold">Welcome Home.</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-100 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
        We transform distressed properties into premium, affordable homes for
        East Texas families and veterans.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          className="bg-p4c-gold text-p4c-navy hover:bg-p4c-goldHover px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl flex items-center justify-center gap-2 transform hover:-translate-y-1 focus:ring-4 focus:ring-p4c-gold/50"
          aria-label="Find Your Home: Browse available property listings"
        >
          Find Your Home <ArrowRight className="w-5 h-5" />
        </button>
        <button
          className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center focus:ring-4 focus:ring-white/50"
          aria-label="Our Standards: View our renovation quality guarantees"
        >
          Our Standards
        </button>
      </div>
    </div>


  </div>
);

export default Hero;
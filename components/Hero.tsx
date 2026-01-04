
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../constants/images';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="object-cover w-full h-full"
          poster={IMAGES.BANNERS.HOME}
        >
          <source src={IMAGES.VIDEOS.HERO_PROPERTIES} type="video/mp4" />
        </video>
        {/* Overlay for readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-p4c-navy/60 mix-blend-multiply"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Dignity in Every Detail. <br/>
          <span className="text-p4c-gold">Welcome Home.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
          We transform distressed properties into premium, affordable homes for East Texas families and veterans. Experience the P4C difference.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-p4c-gold text-p4c-navy hover:bg-p4c-goldHover px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-xl flex items-center justify-center gap-2 transform hover:-translate-y-1">
                Find Your Home <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center">
                Our Standards
            </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/70">
        <span className="text-sm uppercase tracking-widest">Scroll to Discover</span>
      </div>
    </div>
  );
};

export default Hero;

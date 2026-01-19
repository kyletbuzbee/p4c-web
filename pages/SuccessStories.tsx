import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Quote,
  Home,
  Hammer,
  DollarSign,
  TrendingUp,
  ArrowRight,
  Star,
} from 'lucide-react';
import { IMAGES } from '../constants/images';
import { useNavigate } from 'react-router-dom';

/**
 * CustomVideoPlayer Component
 * Enterprise-grade video player for testimonials
 */
interface CustomVideoPlayerProps {
  src: string;
  poster?: string;
  ariaLabel: string;
}

const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({
  src,
  poster,
  ariaLabel,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      setProgress((current / duration) * 100);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const value = parseFloat(e.target.value);
      videoRef.current.currentTime = (value / 100) * videoRef.current.duration;
      setProgress(value);
    }
  };

  return (
    <div className="relative rounded-xl overflow-hidden bg-p4c-navy shadow-2xl group border border-gray-800">
      <video
        ref={videoRef}
        className="w-full aspect-video object-cover"
        poster={poster}
        aria-label={ariaLabel}
        onTimeUpdate={handleTimeUpdate}
        playsInline
      >
        <track kind="captions" />
        <source src={src} type="video/mp4" />
        <p className="text-white p-4">
          Your browser does not support the video tag.
        </p>
      </video>

      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all duration-300">
          <button
            onClick={togglePlay}
            className="w-20 h-20 rounded-full bg-p4c-gold/90 hover:bg-p4c-gold flex items-center justify-center shadow-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
            aria-label="Play video"
          >
            <Play className="w-8 h-8 text-p4c-navy ml-1" fill="currentColor" />
          </button>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="text-white hover:text-p4c-gold transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </button>

          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeek}
            className="flex-grow h-1 bg-white/30 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-p4c-gold"
          />

          <button
            onClick={toggleMute}
            className="text-white hover:text-p4c-gold transition-colors"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const SuccessStories: React.FC = () => {
  const navigate = useNavigate();

  const testimonials = [
    {
      id: 1,
      name: 'Marcus Thompson',
      role: 'Resident since 2023',
      location: 'Tyler, TX',
      quote:
        'The maintenance team is incredible. I put in a request for my AC at 9 AM and it was fixed by noon. You do not get that kind of service in most rentals.',
      videoLabel: 'Marcus Thompson testimonial - Tyler property management',
      tags: ['Maintenance', 'Service'],
    },
    {
      id: 2,
      name: 'Sarah Martinez',
      role: 'Resident since 2022',
      location: 'Longview, TX',
      quote:
        'I was worried a "Section 8" house would be rundown. This house has granite countertops and new floors. It feels brand new. My kids love their rooms.',
      videoLabel: 'Sarah Martinez testimonial - Longview quality housing',
      tags: ['Renovation Quality', 'Family'],
    },
    {
      id: 3,
      name: 'Jennifer Williams',
      role: 'Resident since 2024',
      location: 'Lindale, TX',
      quote:
        'The application process was completely digital and fast. I was approved in 2 days. The team treated me with total professionalism throughout.',
      videoLabel: 'Jennifer Williams testimonial - Lindale application process',
      tags: ['Leasing Process', 'Professionalism'],
    },
    {
      id: 4,
      name: 'Roberto & Maria Gonzalez',
      role: 'Residents since 2023',
      location: 'Whitehouse, TX',
      quote:
        'We have rented for 10 years and this is the best management company we have dealt with. They actually care about the property condition.',
      videoLabel:
        'Gonzalez family testimonial - Whitehouse property management',
      tags: ['Management', 'Long-term'],
    },
  ];

  return (
    <div className="min-h-screen bg-p4c-beige">
      <Helmet>
        <title>
          Resident Reviews & Success Stories | Properties 4 Creation
        </title>
        <meta
          name="description"
          content="Read reviews from residents in Tyler, Longview, and Marshall. See why families and veterans choose Properties 4 Creation for their housing needs."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={IMAGES.BANNERS.HERO_IMPACT}
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={IMAGES.VIDEOS.HERO_IMPACT} type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full hero-overlay-primary bg-p4c-navy/60" />
        <div className="absolute top-0 left-0 w-full h-full hero-overlay-secondary bg-gradient-to-t from-p4c-beige to-transparent" />

        <div className="relative z-10 text-center px-4 max-w-4xl animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Resident <span className="text-p4c-gold">Satisfaction</span>
          </h1>
          <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto">
            We don't just lease properties; we build long-term relationships
            through professional management and respect.
          </p>
        </div>
      </div>

      {/* Testimonials Grid */}
      <section className="py-16 px-4 max-w-6xl mx-auto -mt-20 relative z-20">
        <div className="grid grid-cols-1 gap-16">
          {testimonials.map((story, index) => (
            <article
              key={story.id}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Video Section */}
              <div className="w-full lg:w-1/2 bg-gray-900">
                <CustomVideoPlayer
                  src={IMAGES.VIDEOS.HERO_IMPACT}
                  poster={IMAGES.BANNERS.HERO_IMPACT}
                  ariaLabel={story.videoLabel}
                />
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex gap-2 mb-6">
                  {story.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-p4c-beige text-p4c-navy text-xs font-bold uppercase tracking-wider rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Quote className="w-10 h-10 text-p4c-gold mb-6 opacity-50" />

                <blockquote className="text-xl md:text-2xl text-p4c-navy font-serif leading-relaxed mb-8">
                  "{story.quote}"
                </blockquote>

                <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="w-12 h-12 bg-p4c-navy rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-p4c-navy text-lg">
                      {story.name}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center gap-2">
                      <span>{story.location}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full" />
                      <span>{story.role}</span>
                    </div>
                  </div>
                  <div className="ml-auto flex text-p4c-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Value Creation Section (BRRR Breakdown) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-p4c-navy mb-4">
              How We Create Value
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our systematic renovation process ensures consistency, quality,
              and long-term reliability for every home in our portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Acquisition',
                desc: 'We identify high-potential properties in established neighborhoods.',
                icon: <Home className="w-6 h-6" />,
                img: IMAGES.PROPERTIES.LINDALE_COTTAGE,
              },
              {
                step: '2',
                title: 'Renovation',
                desc: 'Full mechanical and cosmetic overhaul using commercial-grade materials.',
                icon: <Hammer className="w-6 h-6" />,
                img: IMAGES.GALLERY.FRAMING,
              },
              {
                step: '3',
                title: 'Leasing',
                desc: 'Rigorous tenant screening and placement of families and veterans.',
                icon: <DollarSign className="w-6 h-6" />,
                img: IMAGES.TEAM.ONSITE,
              },
              {
                step: '4',
                title: 'Management',
                desc: 'Ongoing professional maintenance and asset preservation.',
                icon: <TrendingUp className="w-6 h-6" />,
                img: IMAGES.RENOVATION.LIVING_ROOM.AFTER,
              },
            ].map((item) => (
              <div
                key={item.step}
                className="group bg-p4c-beige rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-p4c-navy/50 mix-blend-multiply" />
                  <div className="absolute top-4 left-4 bg-p4c-gold text-p4c-navy w-8 h-8 flex items-center justify-center rounded-full font-bold shadow-lg">
                    {item.step}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-p4c-navy">
                    {item.icon}
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-p4c-navy">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Join Our Community
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Experience the Properties 4 Creation difference. Browse our
            available listings in Tyler, Longview, and Marshall today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/#homes')}
              className="bg-p4c-gold text-p4c-navy hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
            >
              See Available Homes <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
            >
              Contact Leasing Office
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;

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
} from 'lucide-react';
import { IMAGES } from '../constants/images';

/**
 * CustomVideoPlayer Component
 * Provides a clean, accessible video player with custom controls
 * avoiding the cluttered default browser controls
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
    <div className="relative rounded-xl overflow-hidden bg-p4c-navy shadow-2xl group">
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
          Your browser does not support the video tag. Please upgrade your
          browser.
        </p>
      </video>

      {/* Custom Play Button Overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-all duration-300">
          <button
            onClick={togglePlay}
            className="w-20 h-20 rounded-full bg-p4c-gold hover:bg-p4c-goldHover flex items-center justify-center shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-p4c-gold/50"
            aria-label="Play video"
          >
            <Play
              className="w-10 h-10 text-p4c-navy ml-1"
              fill="currentColor"
            />
          </button>
        </div>
      )}

      {/* Custom Controls Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="text-white hover:text-p4c-gold transition-colors focus:outline-none focus:ring-2 focus:ring-p4c-gold rounded-full p-1"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6" />
            )}
          </button>

          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeek}
            className="flex-grow h-1 bg-white/30 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-p4c-gold"
            aria-label="Video progress"
          />

          <button
            onClick={toggleMute}
            className="text-white hover:text-p4c-gold transition-colors focus:outline-none focus:ring-2 focus:ring-p4c-gold rounded-full p-1"
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          >
            {isMuted ? (
              <VolumeX className="w-6 h-6" />
            ) : (
              <Volume2 className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * SuccessStories Page
 * Showcases veteran and family success stories with video content
 * to build trust and demonstrate P4C's impact in East Texas
 */
const SuccessStories: React.FC = () => {
  const stories = [
    {
      id: 1,
      name: 'Marcus Thompson',
      location: 'Tyler, TX',
      quote:
        'Properties 4 Creation gave me and my family a fresh start. After serving overseas, coming home to a place we could truly call our own was everything.',
      videoLabel: 'Marcus Thompson success story - Tyler veteran housing',
    },
    {
      id: 2,
      name: 'Sarah Martinez',
      location: 'Longview, TX',
      quote:
        'The attention to detail in every renovation shows how much they care about the community. Our home is more than just a house—it is a home for our children.',
      videoLabel: 'Sarah Martinez family success story - Longview',
    },
  ];

  return (
    <div className="min-h-screen bg-p4c-beige">
      <Helmet>
        <title>
          Success Stories | Properties 4 Creation - East Texas Veteran Housing
        </title>
        <meta
          name="description"
          content="Hear from veterans and families whose lives have been transformed by Properties 4 Creation in Tyler, Longview, and across East Texas."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={IMAGES.BANNERS.HERO_IMPACT}
          className="absolute top-0 left-0 w-full h-full object-cover"
          aria-label="Success stories hero background video"
        >
          <source src={IMAGES.VIDEOS.HERO_IMPACT} type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full hero-overlay-primary" />

        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center max-w-4xl animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Stories of <span className="text-p4c-gold">Hope & Home</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
              Real stories from veterans and families who found dignity,
              comfort, and community in East Texas through Properties 4
              Creation.
            </p>
          </div>
        </div>
      </div>

      {/* Success Stories Grid */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-p4c-navy mb-12 text-center">
          Real Stories from East Texas
        </h2>

        <div className="space-y-20">
          {stories.map((story, index) => (
            <article
              key={story.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center`}
            >
              {/* Video Section */}
              <div className="w-full lg:w-1/2">
                <CustomVideoPlayer
                  src={IMAGES.VIDEOS.HERO_IMPACT}
                  poster={IMAGES.BANNERS.HERO_IMPACT}
                  ariaLabel={story.videoLabel}
                />
              </div>

              {/* Story Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <Quote className="w-12 h-12 text-p4c-gold" />
                <blockquote className="text-xl md:text-2xl text-p4c-navy font-serif italic leading-relaxed">
                  &quot;{story.quote}&quot;
                </blockquote>
                <footer className="border-t border-p4c-gold/30 pt-6">
                  <cite className="not-italic">
                    <p className="font-bold text-p4c-navy text-lg">
                      {story.name}
                    </p>
                    <p className="text-gray-600">{story.location}</p>
                  </cite>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Project Spotlight: BRRR Cycle Breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-p4c-navy mb-4">
              Project Spotlight: The BRRRR Cycle in Action
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              See how we transform distressed properties into quality Section 8
              housing through our proven 4-step process.
            </p>
          </div>

          {/* 4-Step Process Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1: Buy (As-Is) */}
            <div className="group bg-p4c-beige rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={IMAGES.PROPERTIES.LINDALE_COTTAGE}
                  alt="Distressed Lindale cottage before renovation - any condition purchase"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-p4c-navy/40 mix-blend-multiply" />
                <div className="absolute top-4 left-4 bg-p4c-gold text-p4c-navy px-3 py-1 rounded-full text-sm font-bold">
                  Step 1
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Home className="w-6 h-6 text-p4c-gold" />
                  <h3 className="text-xl font-serif font-bold text-p4c-navy">
                    Buy (As-Is)
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  We purchase properties in any condition. No repairs needed, no
                  cleaning required.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-p4c-gold rounded-full" />
                    Cash offers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-p4c-gold rounded-full" />
                    Quick closing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-p4c-gold rounded-full" />
                    Any condition
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2: Rehab */}
            <div className="group bg-p4c-beige rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={IMAGES.GALLERY.FRAMING}
                  alt="Active rehabilitation work on property framing and construction"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-p4c-navy/40 mix-blend-multiply" />
                <div className="absolute top-4 left-4 bg-p4c-gold text-p4c-navy px-3 py-1 rounded-full text-sm font-bold">
                  Step 2
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Hammer className="w-6 h-6 text-p4c-gold" />
                  <h3 className="text-xl font-serif font-bold text-p4c-navy">
                    Rehab
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Full renovation using premium materials. Every detail matters.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-p4c-gold rounded-full" />
                    Quartz countertops
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-p4c-gold rounded-full" />
                    LVP flooring
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-p4c-gold rounded-full" />
                    Energy efficient HVAC
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3: Rent */}
            <div className="group bg-p4c-beige rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={IMAGES.TEAM.ONSITE}
                  alt="Team onsite managing property rental operations"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-p4c-navy/40 mix-blend-multiply" />
                <div className="absolute top-4 left-4 bg-p4c-gold text-p4c-navy px-3 py-1 rounded-full text-sm font-bold">
                  Step 3
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <DollarSign className="w-6 h-6 text-p4c-gold" />
                  <h3 className="text-xl font-serif font-bold text-p4c-navy">
                    Rent
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Quality tenants through careful screening. Veterans and
                  families first.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-p4c-gold rounded-full" />
                    Veteran preference
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-p4c-gold rounded-full" />
                    Housing vouchers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-p4c-gold rounded-full" />
                    Responsive maintenance
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 4: Refinance */}
            <div className="group bg-p4c-beige rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={IMAGES.RENOVATION.LIVING_ROOM.AFTER}
                  alt="Completed modern living room after renovation - high-quality Section 8 housing"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-p4c-navy/40 mix-blend-multiply" />
                <div className="absolute top-4 left-4 bg-p4c-gold text-p4c-navy px-3 py-1 rounded-full text-sm font-bold">
                  Step 4
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-6 h-6 text-p4c-gold" />
                  <h3 className="text-xl font-serif font-bold text-p4c-navy">
                    Refinance
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Long-term sustainability through smart financing and equity
                  building.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-p4c-gold rounded-full" />
                    Lower mortgage
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-p4c-gold rounded-full" />
                    Community investment
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-p4c-gold rounded-full" />
                    Sustainable returns
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-p4c-navy">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Whether you are a veteran seeking a place to call home or a family
            looking for quality housing in Tyler, Longview, or across East
            Texas—we are here to help you find your perfect home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/apply"
              className="bg-p4c-gold text-p4c-navy hover:bg-p4c-goldHover px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-xl inline-flex items-center justify-center"
            >
              Start Your Application
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;

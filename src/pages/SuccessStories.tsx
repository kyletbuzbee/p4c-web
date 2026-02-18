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
    <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-p4c-navy shadow-2xl">
      <video
        ref={videoRef}
        className="aspect-video w-full object-cover"
        poster={poster}
        aria-label={ariaLabel}
        onTimeUpdate={handleTimeUpdate}
        playsInline
      >
        <track kind="captions" />
        <source src={src} type="video/mp4" />
        <p className="p-4 text-white">
          Your browser does not support the video tag.
        </p>
      </video>

      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-all duration-300 group-hover:bg-black/40">
          <button
            onClick={togglePlay}
            className="flex size-20 items-center justify-center rounded-full bg-p4c-gold/90 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-p4c-gold"
            aria-label="Play video"
          >
            <Play className="ml-1 size-8 text-p4c-navy" fill="currentColor" />
          </button>
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="text-white transition-colors hover:text-p4c-gold"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? (
              <Pause className="size-5" aria-hidden="true" />
            ) : (
              <Play className="size-5" aria-hidden="true" />
            )}
          </button>

          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeek}
            className="h-1 grow cursor-pointer appearance-none rounded-full bg-white/30 [&::-webkit-slider-thumb]:size-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-p4c-gold"
            aria-label="Video progress"
          />

          <button
            onClick={toggleMute}
            className="text-white transition-colors hover:text-p4c-gold"
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          >
            {isMuted ? (
              <VolumeX className="size-5" aria-hidden="true" />
            ) : (
              <Volume2 className="size-5" aria-hidden="true" />
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
          content="Read reviews from residents in East Texas. See why families and veterans choose Properties 4 Creation for their housing needs."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative flex h-[50vh] min-h-[400px] w-full items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={IMAGES.BANNERS.HERO_IMPACT}
          className="absolute left-0 top-0 size-full object-cover"
        >
          <source src={IMAGES.VIDEOS.HERO_IMPACT} type="video/mp4" />
        </video>
        <div className="hero-overlay-primary absolute left-0 top-0 size-full bg-p4c-navy/15" />
        <div className="hero-overlay-secondary absolute left-0 top-0 size-full bg-gradient-to-t from-p4c-navy/80 to-transparent" />

        <div className="relative z-10 max-w-4xl animate-fade-in-up px-4 text-center">
          <div className="hero-text-container rounded-2xl border border-white/20 bg-p4c-navy/70 p-4 backdrop-blur-2xl md:p-6">
            <h1 className="hero-text-enhanced mb-6 font-serif text-4xl font-bold text-white md:text-5xl">
              Resident <span className="text-p4c-gold">Satisfaction</span>
            </h1>
            <p className="hero-text-enhanced mx-auto max-w-2xl text-xl font-light text-gray-200">
              We don&apos;t just lease properties; we build long-term
              relationships through professional management and respect.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <section className="relative z-20 mx-auto -mt-20 max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 gap-16">
          {testimonials.map((story, index) => (
            <article
              key={story.id}
              className={`flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Video Section */}
              <div className="w-full bg-gray-900 lg:w-1/2">
                <CustomVideoPlayer
                  src={
                    story.id === 1
                      ? IMAGES.VIDEOS.REVIEW_1
                      : story.id === 2
                        ? IMAGES.VIDEOS.REVIEW_2
                        : IMAGES.VIDEOS.REVIEW_3
                  }
                  poster={
                    story.id === 1
                      ? IMAGES.RESIDENT_REVIEW.MARK
                      : story.id === 2
                        ? IMAGES.RESIDENT_REVIEW.ALEX
                        : IMAGES.RESIDENT_REVIEW.SARAH
                  }
                  ariaLabel={story.videoLabel}
                />
              </div>

              {/* Content Section */}
              <div className="flex w-full flex-col justify-center p-8 lg:w-1/2 lg:p-12">
                <div className="mb-6 flex gap-2">
                  {story.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-p4c-beige px-3 py-1 text-xs font-bold uppercase tracking-wider text-p4c-navy"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Quote className="mb-6 size-10 text-p4c-gold opacity-50" />

                <blockquote className="mb-8 font-serif text-xl leading-relaxed text-p4c-navy md:text-2xl">
                  &quot;{story.quote}&quot;
                </blockquote>

                <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="flex size-12 items-center justify-center rounded-full bg-p4c-navy text-lg font-bold text-white">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-lg font-bold text-p4c-navy">
                      {story.name}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span>{story.location}</span>
                      <span className="size-1 rounded-full bg-gray-300" />
                      <span>{story.role}</span>
                    </div>
                  </div>
                  <div className="ml-auto flex text-p4c-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Value Creation Section (BRRR Breakdown) */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-p4c-navy md:text-4xl">
              How We Create Value
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Our systematic renovation process ensures consistency, quality,
              and long-term reliability for every home in our portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: '1',
                title: 'Acquisition',
                desc: 'We identify high-potential properties in established neighborhoods.',
                icon: <Home className="size-6" />,
                img: IMAGES.PROPERTIES.LINDALE_COTTAGE,
              },
              {
                step: '2',
                title: 'Renovation',
                desc: 'Full mechanical and cosmetic overhaul using commercial-grade materials.',
                icon: <Hammer className="size-6" />,
                img: IMAGES.GALLERY.FRAMING,
              },
              {
                step: '3',
                title: 'Leasing',
                desc: 'Rigorous tenant screening and placement of families and veterans.',
                icon: <DollarSign className="size-6" />,
                img: IMAGES.TEAM.ONSITE,
              },
              {
                step: '4',
                title: 'Management',
                desc: 'Ongoing professional maintenance and asset preservation.',
                icon: <TrendingUp className="size-6" />,
                img: IMAGES.RENOVATION.LIVING_ROOM.AFTER,
              },
            ].map((item) => (
              <div
                key={item.step}
                className="group overflow-hidden rounded-2xl bg-p4c-beige shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-p4c-navy/15 mix-blend-multiply" />
                  <div className="absolute left-4 top-4 flex size-8 items-center justify-center rounded-full bg-p4c-gold font-bold text-p4c-navy shadow-lg">
                    {item.step}
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2 text-p4c-navy">
                    {item.icon}
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-p4c-navy px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-serif text-3xl font-bold text-white md:text-4xl">
            Join Our Community
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            Experience the Properties 4 Creation difference. Browse our
            available listings in East Texas today.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button
              onClick={() => navigate('/#homes')}
              className="flex items-center justify-center gap-2 rounded-xl bg-p4c-gold px-8 py-4 text-lg font-bold text-p4c-navy shadow-xl transition-all duration-300 hover:bg-white hover:text-p4c-navy"
              aria-label="See available homes for rent"
            >
              See Available Homes <ArrowRight className="size-5" />
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="rounded-xl border-2 border-white bg-transparent px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-white hover:text-p4c-navy"
              aria-label="Contact leasing office for inquiries"
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

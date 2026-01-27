import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Star, MessageCircle, Users } from 'lucide-react';

const Reviews: React.FC = () => {
  // Video data with unique posters
  const videos = [
    {
      id: 1,
      poster: '/images/resident-review/resident-review-mark.png',
      src: '/images/videos/hero-our-work-banner.mp4',
      title: "Mark's Experience",
      description: 'Mark shares his experience living in our Tyler property',
    },
    {
      id: 2,
      poster: '/images/resident-review/resident-review-alex.png',
      src: '/images/videos/hero-our-work-banner.mp4',
      title: "Alex's Story",
      description:
        'Alex talks about the application process and move-in experience',
    },
    {
      id: 3,
      poster: '/images/resident-review/resident-review-sarah.png',
      src: '/images/videos/hero-our-work-banner.mp4',
      title: "Sarah's Review",
      description: 'Sarah discusses the maintenance response and community',
    },
  ];

  return (
    <div className="bg-p4c-beige min-h-screen">
      <Helmet>
        <title>Resident Reviews & Testimonials | Properties 4 Creation</title>
        <meta
          name="description"
          content="Read and watch real reviews from residents living in Properties 4 Creation homes in East Texas, Texas."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[400px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img
            src="/images/banners/hero-community-impact-banner.png"
            alt="Happy residents in East Texas community"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-p4c-navy/70 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="bg-p4c-gold/20 p-4 rounded-2xl border border-p4c-gold/30 backdrop-blur-sm">
              <Users className="w-10 h-10 text-p4c-gold" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-wide">
            Resident Voices
          </h1>
          <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto">
            Real stories from families and individuals who call our properties
            home
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Video Reviews Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-4">
              Video Testimonials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear directly from our residents about their experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-64">
                  <img
                    src={video.poster}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <button className="bg-p4c-gold/80 hover:bg-p4c-gold text-p4c-navy w-16 h-16 rounded-full flex items-center justify-center transition-all">
                      <svg
                        className="w-6 h-6 ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-p4c-navy mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{video.description}</p>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                    <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                    <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                    <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                    <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Written Reviews Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-4">
              Written Testimonials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Feedback from our residents about their living experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-p4c-gold">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-p4c-navy rounded-full flex items-center justify-center text-white font-bold">
                  JM
                </div>
                <div>
                  <h4 className="font-bold text-p4c-navy">John & Maria T.</h4>
                  <p className="text-sm text-gray-500">Tyler, TX - 2 Years</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "We've been living in our Properties 4 Creation home for 2 years
                now and couldn't be happier. The application process was smooth,
                maintenance requests are handled promptly, and the neighborhood
                is safe and family-friendly. Our kids love the nearby parks!"
              </p>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-p4c-gold">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-p4c-navy rounded-full flex items-center justify-center text-white font-bold">
                  RT
                </div>
                <div>
                  <h4 className="font-bold text-p4c-navy">Robert Thompson</h4>
                  <p className="text-sm text-gray-500">Longview, TX - 1 Year</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "As a veteran, I was struggling to find stable housing until I
                found Properties 4 Creation. The team worked with my VA benefits
                and had me moved in within a week. The property is
                well-maintained and the management is responsive. Highly
                recommend!"
              </p>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-p4c-gold">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-p4c-navy rounded-full flex items-center justify-center text-white font-bold">
                  SW
                </div>
                <div>
                  <h4 className="font-bold text-p4c-navy">Sarah Williams</h4>
                  <p className="text-sm text-gray-500">
                    Marshall, TX - 6 Months
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "The renovation quality is impressive! Everything was brand new
                when we moved in - appliances, flooring, paint. The property
                management team is professional and actually cares about tenant
                satisfaction. Best rental experience I've had."
              </p>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-p4c-gold">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-p4c-navy rounded-full flex items-center justify-center text-white font-bold">
                  DG
                </div>
                <div>
                  <h4 className="font-bold text-p4c-navy">David & Grace M.</h4>
                  <p className="text-sm text-gray-500">Tyler, TX - 1.5 Years</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "We were hesitant about renting after some bad experiences, but
                Properties 4 Creation changed our minds. The online portal makes
                rent payment easy, maintenance is quick, and the community
                events help us feel connected to our neighbors."
              </p>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
                <Star className="w-4 h-4 text-p4c-gold fill-p4c-gold" />
              </div>
            </div>
          </div>
        </section>

        {/* Tenant Success Stories Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-4">
              Tenant Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              How we've helped families find their forever homes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/banners/family-resources-banner.png"
                alt="Happy family in their new home"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-serif font-bold text-p4c-navy mb-4">
                  The Johnson Family
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  After struggling with unstable housing for years, the Johnson
                  family found stability through our Section 8 program. With
                  three children in Tyler ISD schools, they needed a safe,
                  long-term home near good schools.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Properties 4 Creation didn't just give us a house - they gave
                  us hope. Our kids have thrived in their new school, and we
                  finally feel like we have a real home."
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src="/images/logo/p4c-logo-gold.png"
                    alt="Properties 4 Creation logo"
                    className="w-12 h-12"
                  />
                  <div>
                    <div className="font-bold text-p4c-navy">
                      Properties 4 Creation Team
                    </div>
                    <div className="text-sm text-gray-500">
                      Helping families since 2018
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="w-6 h-6 text-p4c-gold" />
                  <h4 className="font-bold text-p4c-navy">Our Commitment</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  We believe everyone deserves a safe, dignified place to call
                  home. Through our community partnerships and housing programs,
                  we've helped over 200 families achieve housing stability in
                  East Texas.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Reviews;

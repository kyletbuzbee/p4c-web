import React from 'react';
import { Helmet } from 'react-helmet-async';
import { IMAGES } from '../constants/images';
import {
  MapPin,
  School,
  Users,
  Home,
  Shield,
  DollarSign,
  CheckCircle2,
  Star,
  Award,
  BookOpen,
  Baby,
  Car,
  Wifi,
} from 'lucide-react';

const FamilyResources: React.FC = () => {
  const schoolDistricts = [
    {
      name: 'Tyler ISD',
      rating: 4.2,
      schools: 25,
      students: '12,000+',
      highlights: ['STEM Programs', 'Arts Excellence', 'Sports Programs'],
    },
    {
      name: 'Whitehouse ISD',
      rating: 4.5,
      schools: 8,
      students: '4,200+',
      highlights: ['Small Class Sizes', 'Technology Focus', 'Music Programs'],
    },
    {
      name: 'Lindale ISD',
      rating: 4.3,
      schools: 6,
      students: '3,100+',
      highlights: [
        'Agricultural Programs',
        'Community Involvement',
        'Academic Excellence',
      ],
    },
  ];

  const familyFeatures = [
    {
      icon: <Home className="size-8 text-p4c-gold" />,
      title: 'Spacious Family Homes',
      description:
        '3-5 bedroom homes with dedicated family spaces, play areas, and modern amenities perfect for growing families.',
    },
    {
      icon: <Shield className="size-8 text-p4c-gold" />,
      title: 'Safe Neighborhoods',
      description:
        'Gated communities with 24/7 security, well-lit streets, and proximity to emergency services.',
    },
    {
      icon: <School className="size-8 text-p4c-gold" />,
      title: 'Top-Rated Schools',
      description:
        'Access to award-winning school districts with excellent test scores and extracurricular programs.',
    },
    {
      icon: <Users className="size-8 text-p4c-gold" />,
      title: 'Community Support',
      description:
        'Local family support networks, childcare resources, and community events for families.',
    },
    {
      icon: <MapPin className="size-8 text-p4c-gold" />,
      title: 'Convenient Locations',
      description:
        'Short commutes to work, shopping, healthcare, and recreational facilities.',
    },
    {
      icon: <DollarSign className="size-8 text-p4c-gold" />,
      title: 'Affordable Housing',
      description:
        'HUD-VASH and Section 8 approved properties with rent assistance programs available.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      family: 'Mother of 3',
      location: 'Tyler, TX',
      quote:
        'Properties 4 Creation gave us a beautiful home where my kids could thrive. The school district is amazing, and the community support has been incredible.',
      rating: 5,
    },
    {
      name: 'Marcus & Lisa Rodriguez',
      family: 'Parents of twins',
      location: 'Whitehouse, TX',
      quote:
        'We were struggling to find affordable housing for our growing family. Properties 4 Creation not only provided us with a home but connected us with amazing family resources.',
      rating: 5,
    },
    {
      name: 'Jennifer Williams',
      family: 'Single mother',
      location: 'Lindale, TX',
      quote:
        'The family-friendly features and school proximity made this the perfect choice. My daughter loves her new school and friends.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-p4c-beige">
      <Helmet>
        <title>Family Resources | Properties 4 Creation</title>
        <meta
          name="description"
          content="Discover family-friendly housing in East Texas with top-rated schools, safe neighborhoods, and community support. Find your perfect home for your family today."
        />
        <meta
          name="keywords"
          content="family housing East Texas, schools Tyler, family homes affordable, HUD-VASH families, Section 8 family housing"
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative flex h-[60vh] w-full items-center justify-center overflow-hidden">
        <div className="absolute left-0 top-0 z-0 size-full">
          <img
            src={IMAGES.BANNERS.HERO_FAMILY_RESOURCES}
            alt="Beautiful family home in East Texas neighborhood"
            className="size-full object-cover"
          />
          <div className="hero-overlay-primary absolute left-0 top-0 size-full" />
          <div className="hero-overlay-secondary absolute left-0 top-0 size-full" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl animate-fade-in-up px-4 text-center">
          <h1 className="hero-text-contrast mb-6 font-serif text-4xl font-bold text-white md:text-6xl">
            Family Homes That Feel Like Home
          </h1>
          <p className="mb-8 text-xl leading-relaxed text-gray-200 md:text-2xl">
            Safe, affordable housing in East Texas with top-rated schools and
            community support for your family&apos;s future.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#schools"
              className="rounded-xl bg-p4c-gold px-8 py-4 text-lg font-bold text-p4c-navy shadow-lg transition-all hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              aria-label="Learn about school districts"
            >
              Explore Schools
            </a>
            <a
              href="#features"
              className="rounded-xl border-2 border-white bg-white/20 px-8 py-4 text-lg font-bold text-white shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:text-p4c-navy hover:shadow-xl"
              aria-label="See family housing features"
            >
              View Features
            </a>
          </div>
        </div>
      </div>

      {/* School Districts Section */}
      <section id="schools" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-serif text-4xl font-bold text-p4c-navy md:text-5xl">
              Top-Rated School Districts
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Your children&apos;s education is our priority. All our properties
              located within highly-rated school districts.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {schoolDistricts.map((district) => (
              <div
                key={district.name}
                className="rounded-2xl border border-gray-100 bg-p4c-beige p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold text-p4c-navy">
                    {district.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="size-5 fill-current text-p4c-gold" />
                    <span className="font-bold text-p4c-navy">
                      {district.rating}
                    </span>
                  </div>
                </div>

                <div className="mb-6 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Schools:</span>
                    <span className="font-semibold text-p4c-navy">
                      {district.schools}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Students:</span>
                    <span className="font-semibold text-p4c-navy">
                      {district.students}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold text-p4c-navy">
                    Highlights:
                  </h4>
                  <ul className="space-y-1">
                    {district.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle2 className="size-4 shrink-0 text-green-500" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family Features Section */}
      <section id="features" className="bg-p4c-navy py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-serif text-4xl font-bold text-p4c-beige md:text-5xl">
              Designed for Families
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              Every aspect of our properties is chosen with families in mind,
              from spacious layouts to community amenities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {familyFeatures.map((feature, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="mb-3 font-serif text-xl font-bold text-p4c-beige">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family Amenities Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-serif text-4xl font-bold text-p4c-navy md:text-5xl">
              Family Amenities & Services
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Beyond housing, we provide comprehensive support services to help
              families thrive in East Texas.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="shrink-0 rounded-xl bg-p4c-gold p-3">
                  <BookOpen className="size-6 text-p4c-navy" />
                </div>
                <div>
                  <h3 className="mb-2 font-serif text-xl font-bold text-p4c-navy">
                    Educational Support
                  </h3>
                  <p className="text-gray-600">
                    Tutoring programs, homework help centers, and partnerships
                    with local schools to ensure academic success.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 rounded-xl bg-p4c-gold p-3">
                  <Baby className="size-6 text-p4c-navy" />
                </div>
                <div>
                  <h3 className="mb-2 font-serif text-xl font-bold text-p4c-navy">
                    Childcare Resources
                  </h3>
                  <p className="text-gray-600">
                    Access to licensed childcare facilities, after-school
                    programs, and emergency childcare services.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 rounded-xl bg-p4c-gold p-3">
                  <Users className="size-6 text-p4c-navy" />
                </div>
                <div>
                  <h3 className="mb-2 font-serif text-xl font-bold text-p4c-navy">
                    Family Counseling
                  </h3>
                  <p className="text-gray-600">
                    Professional counseling services, parenting classes, and
                    family support groups available through our partners.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="shrink-0 rounded-xl bg-p4c-gold p-3">
                  <Car className="size-6 text-p4c-navy" />
                </div>
                <div>
                  <h3 className="mb-2 font-serif text-xl font-bold text-p4c-navy">
                    Transportation Support
                  </h3>
                  <p className="text-gray-600">
                    School bus routes, carpool programs, and assistance with
                    transportation costs for families in need.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 rounded-xl bg-p4c-gold p-3">
                  <Wifi className="size-6 text-p4c-navy" />
                </div>
                <div>
                  <h3 className="mb-2 font-serif text-xl font-bold text-p4c-navy">
                    Technology Access
                  </h3>
                  <p className="text-gray-600">
                    Internet assistance programs and computer access to ensure
                    students can complete online homework and assignments.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 rounded-xl bg-p4c-gold p-3">
                  <Award className="size-6 text-p4c-navy" />
                </div>
                <div>
                  <h3 className="mb-2 font-serif text-xl font-bold text-p4c-navy">
                    Community Programs
                  </h3>
                  <p className="text-gray-600">
                    Youth sports leagues, community gardens, and cultural events
                    that bring families together and build community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Testimonials */}
      <section className="bg-p4c-beige py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-serif text-4xl font-bold text-p4c-navy md:text-5xl">
              Families Love Their Properties 4 Creation Homes
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Hear from families who&apos;ve found their perfect home with
              Properties 4 Creation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg"
              >
                <div className="mb-4 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="size-5 fill-current text-p4c-gold"
                    />
                  ))}
                </div>

                <blockquote className="mb-6 italic leading-relaxed text-gray-700">
                  &quot;{testimonial.quote}&quot;
                </blockquote>

                <div>
                  <div className="font-serif font-bold text-p4c-navy">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-700">
                    {testimonial.family} • {testimonial.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-p4c-navy py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 font-serif text-4xl font-bold text-p4c-beige md:text-5xl">
            Ready to Find Your Family&apos;s Home?
          </h2>
          <p className="mb-8 text-xl leading-relaxed text-gray-300">
            Take the first step towards creating lasting memories in a home that
            supports your family&apos;s growth and happiness.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/apply"
              className="rounded-xl bg-p4c-gold px-8 py-4 text-lg font-bold text-p4c-navy shadow-lg transition-all hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              aria-label="Start your family housing application"
            >
              Start Application
            </a>
            <a
              href="/contact"
              className="rounded-xl border-2 border-white bg-white/20 px-8 py-4 text-lg font-bold text-white shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:text-p4c-navy hover:shadow-xl"
              aria-label="Contact us about family housing"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FamilyResources;

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { IMAGES } from '../constants/images';
import {
  Heart,
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
      icon: <Home className="w-8 h-8 text-p4c-gold" />,
      title: 'Spacious Family Homes',
      description:
        '3-5 bedroom homes with dedicated family spaces, play areas, and modern amenities perfect for growing families.',
    },
    {
      icon: <Shield className="w-8 h-8 text-p4c-gold" />,
      title: 'Safe Neighborhoods',
      description:
        'Gated communities with 24/7 security, well-lit streets, and proximity to emergency services.',
    },
    {
      icon: <School className="w-8 h-8 text-p4c-gold" />,
      title: 'Top-Rated Schools',
      description:
        'Access to award-winning school districts with excellent test scores and extracurricular programs.',
    },
    {
      icon: <Users className="w-8 h-8 text-p4c-gold" />,
      title: 'Community Support',
      description:
        'Local family support networks, childcare resources, and community events for families.',
    },
    {
      icon: <MapPin className="w-8 h-8 text-p4c-gold" />,
      title: 'Convenient Locations',
      description:
        'Short commutes to work, shopping, healthcare, and recreational facilities.',
    },
    {
      icon: <DollarSign className="w-8 h-8 text-p4c-gold" />,
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
    <div className="bg-p4c-beige min-h-screen">
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
      <div className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img
            src={IMAGES.BANNERS.HERO_HOME}
            alt="Beautiful family home in East Texas neighborhood"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full hero-overlay-primary" />
          <div className="absolute top-0 left-0 w-full h-full hero-overlay-secondary" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="bg-p4c-gold p-4 rounded-full shadow-xl">
              <Heart className="w-12 h-12 text-p4c-navy" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 hero-text-contrast">
            Family Homes That Feel Like Home
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Safe, affordable housing in East Texas with top-rated schools and
            community support for your family's future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#schools"
              className="bg-p4c-gold text-p4c-navy hover:bg-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              aria-label="Learn about school districts"
            >
              Explore Schools
            </a>
            <a
              href="#features"
              className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl"
              aria-label="See family housing features"
            >
              View Features
            </a>
          </div>
        </div>
      </div>

      {/* School Districts Section */}
      <section id="schools" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-p4c-navy mb-6">
              Top-Rated School Districts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your children's education is our priority. All our properties are
              located within highly-rated school districts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {schoolDistricts.map((district) => (
              <div
                key={district.name}
                className="bg-p4c-beige rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-serif font-bold text-p4c-navy">
                    {district.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-p4c-gold fill-current" />
                    <span className="font-bold text-p4c-navy">
                      {district.rating}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
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
                  <h4 className="font-semibold text-p4c-navy mb-2">
                    Highlights:
                  </h4>
                  <ul className="space-y-1">
                    {district.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
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
      <section id="features" className="py-20 bg-p4c-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-p4c-beige mb-6">
              Designed for Families
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every aspect of our properties is chosen with families in mind,
              from spacious layouts to community amenities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {familyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-serif font-bold text-p4c-beige mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family Amenities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-p4c-navy mb-6">
              Family Amenities & Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond housing, we provide comprehensive support services to help
              families thrive in East Texas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-p4c-gold p-3 rounded-xl flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-p4c-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-p4c-navy mb-2">
                    Educational Support
                  </h3>
                  <p className="text-gray-600">
                    Tutoring programs, homework help centers, and partnerships
                    with local schools to ensure academic success.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-p4c-gold p-3 rounded-xl flex-shrink-0">
                  <Baby className="w-6 h-6 text-p4c-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-p4c-navy mb-2">
                    Childcare Resources
                  </h3>
                  <p className="text-gray-600">
                    Access to licensed childcare facilities, after-school
                    programs, and emergency childcare services.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-p4c-gold p-3 rounded-xl flex-shrink-0">
                  <Users className="w-6 h-6 text-p4c-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-p4c-navy mb-2">
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
                <div className="bg-p4c-gold p-3 rounded-xl flex-shrink-0">
                  <Car className="w-6 h-6 text-p4c-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-p4c-navy mb-2">
                    Transportation Support
                  </h3>
                  <p className="text-gray-600">
                    School bus routes, carpool programs, and assistance with
                    transportation costs for families in need.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-p4c-gold p-3 rounded-xl flex-shrink-0">
                  <Wifi className="w-6 h-6 text-p4c-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-p4c-navy mb-2">
                    Technology Access
                  </h3>
                  <p className="text-gray-600">
                    Internet assistance programs and computer access to ensure
                    students can complete online homework and assignments.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-p4c-gold p-3 rounded-xl flex-shrink-0">
                  <Award className="w-6 h-6 text-p4c-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-p4c-navy mb-2">
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
      <section className="py-20 bg-p4c-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-p4c-navy mb-6">
              Families Love Their Properties 4 Creation Homes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from families who've found their perfect home with Properties
              4 Creation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-p4c-gold fill-current"
                    />
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div>
                  <div className="font-serif font-bold text-p4c-navy">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.family} • {testimonial.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-p4c-navy text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-p4c-beige mb-6">
            Ready to Find Your Family's Home?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Take the first step towards creating lasting memories in a home that
            supports your family's growth and happiness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/apply"
              className="bg-p4c-gold text-p4c-navy hover:bg-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              aria-label="Start your family housing application"
            >
              Start Application
            </a>
            <a
              href="/contact"
              className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-p4c-navy px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl"
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

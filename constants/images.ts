
/**
 * Centralized Asset Registry
 * Maps application logic to physical file paths.
 * * Usage:
 * import { IMAGES } from '../constants/images';
 * <img src={IMAGES.BANNERS.HOME} alt="Home" />
 */

export const IMAGES = {
  // Brand Assets
  LOGO: {
    SVG: '/images/logo/brand-logo.svg',
    PNG: '/images/logo/brand-logo2.png',
  },

  // Page Hero Banners
  BANNERS: {
    HOME: '/images/banners/hero-home-banner-800w.webp',
    ABOUT: '/images/banners/hero-about-us-banner-400w.webp', // Using highest resolution available
    CONTACT: '/images/banners/hero-contact-banner.webp',
    IMPACT: '/images/banners/hero-impact-banner-400w.webp',
    PRIVACY: '/images/banners/hero-privacy-banner.webp',
    PROJECTS: '/images/banners/hero-projects-banner-400w.webp',
    RESOURCES: '/images/banners/hero-resources-banner.webp',
    TERMS: '/images/banners/hero-terms-banner-800w.webp',
    TRANSPARENCY: '/images/banners/hero-transparency-banner-400w.webp',
    APPLICATION: '/images/banners/hero-application-banner.jpg',
    FAQ: '/images/banners/hero-faq-banner.png',
  },

  // Property Listings
  PROPERTIES: {
    TYLER_RANCH: '/images/properties/tyler-ranch-home.webp',
    JEFFERSON_RIVER: '/images/properties/jefferson-river.webp',
    KEMP_TOWNHOME: '/images/properties/kemp-townhome.webp',
    LONGVIEW_VICTORIAN: '/images/properties/longview-victorian.webp',
    MARSHALL_FARMHOUSE: '/images/properties/marshall-farmhouse-400w.webp',
    MINEOLA_STUDIO: '/images/properties/mineola-studio.webp',
    RODRIGUEZ_FAMILY: '/images/properties/rodriguez-family-400w.webp',
  },

  // Team & About
  TEAM: {
    OWNER: '/images/about/about-us-team-owner.png',
    HEADSHOT: '/images/about/about-us-team-headshot.png',
  },

  // Renovation Showcase (Before/After)
  RENOVATION: {
    BATHROOM: {
      BEFORE: '/images/before-after-comparison/projects-before-bathroom-800w.webp',
      AFTER: '/images/before-after-comparison/projects-after-bathroom-800w.webp',
    },
    KITCHEN: {
      BEFORE: '/images/before-after-comparison/projects-before-kitchen-800w.webp',
      AFTER: '/images/before-after-comparison/projects-after-kitchen-800w.webp',
    },
    LIVING_ROOM: {
      BEFORE: '/images/before-after-comparison/projects-before-living-room-800w.webp',
      AFTER: '/images/before-after-comparison/projects-after-living-room-800w.webp',
    },
    PORCH: {
      BEFORE: '/images/before-after-comparison/projects-before-front-porch-400w.webp',
      AFTER: '/images/before-after-comparison/projects-after-front-porch-800w.webp',
    },
  },

  // Gallery / Work
  GALLERY: {
    FRAMING: '/images/our-work-gallery/our-work-framing-door.webp',
    PAINTING: '/images/our-work-gallery/our-work-painting-dog-800w.webp',
    MEASURING: '/images/our-work-gallery/our-work-detailed-measuring-800w.webp',
    REMODELING: '/images/our-work-gallery/our-work-remodeling-400w.webp',
  },

  // Videos
  VIDEOS: {
    HERO_PROPERTIES: '/images/videos/hero-properties-banner.mp4',
    HERO_OurWork: '/images/videos/hero-our-work-banner.mp4',
  }
} as const;

/**
 * Centralized Asset Registry
 * Maps application logic to physical file paths.
 *
 * Usage:
 * import { IMAGES } from '../constants/images';
 * <img src={IMAGES.BANNERS.HERO_HOME} alt="Home" />
 */

// Brand Assets
export const IMAGES = {
  LOGO: {
    PNG: '/images/logo/brand-logo.webp',
    SVG: '/images/logo/brand-logo.svg',
    WHITE_GOLD: '/images/logo/brand-logo-white-gold.svg',
  },

  // Page Hero Banners
  BANNERS: {
    // Home Page
    HERO_HOME: '/images/banners/hero-home-banner.webp',
    HERO_HOME_640: '/images/banners/hero-home-banner-640.webp',
    HERO_HOME_960: '/images/banners/hero-home-banner-960.webp',
    HERO_HOME_1280: '/images/banners/hero-home-banner-1280.webp',
    HERO_HOME_1920: '/images/banners/hero-home-banner-1920.webp',

    // About Page
    HERO_ABOUT: '/images/banners/hero-about-banner-1280.webp',
    HERO_ABOUT_640: '/images/banners/hero-about-banner-640.webp',
    HERO_ABOUT_960: '/images/banners/hero-about-banner-960.webp',
    HERO_ABOUT_1920: '/images/banners/hero-about-banner-1920.webp',
    HERO_ABOUT_US: '/images/banners/hero-about-us-banner.webp',
    HERO_ABOUT_1: '/images/banners/hero-about1-banner.webp',

    // Contact Page
    HERO_CONTACT: '/images/banners/hero-contact-banner.webp',
    HERO_CONTACT_640: '/images/banners/hero-contact-banner-640.webp',
    HERO_CONTACT_960: '/images/banners/hero-contact-banner-960.webp',
    HERO_CONTACT_1280: '/images/banners/hero-contact-banner-1280.webp',
    HERO_CONTACT_1920: '/images/banners/hero-contact-banner-1920.webp',

    // Impact Page
    HERO_IMPACT: '/images/banners/hero-impact_banner-640.avif',
    HERO_IMPACT_640: '/images/banners/hero-impact_banner-640.avif',
    HERO_IMPACT_960: '/images/banners/hero-impact_banner-960.avif',
    HERO_IMPACT_1280: '/images/banners/hero-impact_banner-1280.avif',
    HERO_IMPACT_1920: '/images/banners/hero-impact_banner-1920.avif',

    // Privacy Page
    HERO_PRIVACY: '/images/banners/hero-privacy-banner.webp',
    HERO_PRIVACY_640: '/images/banners/hero-privacy-banner-640.webp',
    HERO_PRIVACY_800: '/images/banners/hero-privacy-banner-800w.webp',
    HERO_PRIVACY_960: '/images/banners/hero-privacy-banner-960.webp',
    HERO_PRIVACY_1200: '/images/banners/hero-privacy-banner-1200w.webp',
    HERO_PRIVACY_1280: '/images/banners/hero-privacy-banner-1280.webp',
    HERO_PRIVACY_1600: '/images/banners/hero-privacy-banner-1600w.webp',
    HERO_PRIVACY_1920: '/images/banners/hero-privacy-banner-1920.webp',

    // Projects Page
    HERO_PROJECTS: '/images/banners/hero-projects-banner.webp',
    HERO_PROJECTS_640: '/images/banners/hero-projects-banner-640.webp',
    HERO_PROJECTS_960: '/images/banners/hero-projects-banner-960.webp',
    HERO_PROJECTS_1280: '/images/banners/hero-projects-banner-1280.webp',
    HERO_PROJECTS_1920: '/images/banners/hero-projects-banner-1920.webp',

    // Resources Page
    HERO_RESOURCES: '/images/banners/hero-resources-banner.webp',
    HERO_RESOURCES_640: '/images/banners/hero-resources-banner-640.webp',
    HERO_RESOURCES_960: '/images/banners/hero-resources-banner-960.webp',
    HERO_RESOURCES_1280: '/images/banners/hero-resources-banner-1280.webp',
    HERO_RESOURCES_1920: '/images/banners/hero-resources-banner-1920.webp',

    // Terms Page
    HERO_TERMS: '/images/banners/hero-terms-banner-1200w.webp',
    HERO_TERMS_800: '/images/banners/hero-terms-banner-800w.webp',

    // Transparency Page
    HERO_TRANSPARENCY: '/images/banners/hero-transparency-banner.webp',
    HERO_TRANSPARENCY_640: '/images/banners/hero-transparency-banner-640.webp',
    HERO_TRANSPARENCY_960: '/images/banners/hero-transparency-banner-960.webp',
    HERO_TRANSPARENCY_1280:
      '/images/banners/hero-transparency-banner-1280.webp',
    HERO_TRANSPARENCY_1920:
      '/images/banners/hero-transparency-banner-1920.webp',

    // Application Page
    HERO_APPLICATION: '/images/banners/hero-application-banner.webp',

    // FAQ Page
    HERO_FAQ: '/images/banners/hero-faq-banner.webp',

    // Get Started / Success Story Page
    HERO_SUCCESS_STORY: '/images/banners/hero-get-started-banner.webp',
    HERO_SUCCESS_STORY_640: '/images/banners/hero-get-started-banner-640.webp',
    HERO_SUCCESS_STORY_960: '/images/banners/hero-get-started-banner-960.webp',
    HERO_SUCCESS_STORY_1280:
      '/images/banners/hero-get-started-banner-1280.webp',
    HERO_SUCCESS_STORY_1920:
      '/images/banners/hero-get-started-banner-1920.webp',

    // Deprecated: Get Started renamed to Success Story
    HERO_GET_STARTED: '/images/banners/hero-get-started-banner.webp',

    // Legal Page
    HERO_LEGAL: '/images/banners/hero-legal-banner.webp',
    HERO_LEGAL_640: '/images/banners/hero-legal-banner-640.webp',
    HERO_LEGAL_960: '/images/banners/hero-legal-banner-960.webp',
    HERO_LEGAL_1280: '/images/banners/hero-legal-banner-1280.webp',
    HERO_LEGAL_1920: '/images/banners/hero-legal-banner-1920.webp',

    // Property Details Page
    HERO_PROPERTY: '/images/banners/hero-property-banner.webp',

    // Thank You Page
    HERO_THANK_YOU: '/images/banners/hero-thank-you-banner.webp',
  },

  // Property Listings
  PROPERTIES: {
    JEFFERSON_RIVER: '/images/properties/jefferson-riverfront.webp',
    KEMP_TOWNHOME: '/images/properties/kemp-townhome.webp',
    LINDALE_COTTAGE: '/images/properties/lindale-cottage.webp',
    LONGVIEW_VICTORIAN: '/images/properties/longview-victorian.webp',
    MARSHALL_FARMHOUSE: '/images/properties/marshall-farmhouse-400w.webp',
    MINEOLA_STUDIO: '/images/properties/mineola-studio.webp',
    MINEOLA_STUDIO_OUTSIDE: '/images/properties/mineola-studio-outside.webp',
    RODRIGUEZ_FAMILY: '/images/properties/rodriguez-family-400w.webp',
    TYLER_RANCH: '/images/properties/tyler-ranch-home.webp',
    TYLER_RANCH_400: '/images/properties/tyler-ranch-home-400w.webp',
  },

  // Team & About
  TEAM: {
    OWNER: '/images/about/about-us-team-owner.webp',
    HEADSHOT: '/images/about/about-us-team-headshot.webp',
    ONSITE: '/images/about/about-us-team-onsite.webp',
  },

  // Renovation Showcase (Before/After)
  RENOVATION: {
    BATHROOM: {
      BEFORE:
        '/images/before-after-comparison/projects-before-bathroom-800w.webp',
      AFTER:
        '/images/before-after-comparison/projects-after-bathroom-800w.webp',
    },
    KITCHEN: {
      BEFORE:
        '/images/before-after-comparison/projects-before-kitchen-800w.webp',
      AFTER: '/images/before-after-comparison/projects-after-kitchen-800w.webp',
    },
    LIVING_ROOM: {
      BEFORE:
        '/images/before-after-comparison/projects-before-living-room-800w.webp',
      AFTER:
        '/images/before-after-comparison/projects-after-living-room-800w.webp',
    },
    FRONT_PORCH: {
      BEFORE:
        '/images/before-after-comparison/projects-before-front-porch-400w.webp',
      AFTER:
        '/images/before-after-comparison/projects-after-front-porch-800w.webp',
    },
    BRICK_PATIO: {
      BEFORE:
        '/images/before-after-comparison/projects-before-brick-patio-400w.webp',
      AFTER:
        '/images/before-after-comparison/projects-after-brick-patio-400w.webp',
    },
  },

  // Gallery / Our Work
  GALLERY: {
    FRAMING: '/images/our-work-gallery/our-work-framing-door.webp',
    PAINTING: '/images/our-work-gallery/our-work-painting-dog-800w.webp',
    MEASURING: '/images/our-work-gallery/our-work-detailed-measuring-800w.webp',
    REMODELING: '/images/our-work-gallery/our-work-remodeling-400w.webp',
    BUY_AS_IS: '/images/our-work-gallery/our-impact-buy-as-is.webp',
    LINDALE_COTTAGE: '/images/our-work-gallery/lindale-cottage-before.webp',
    WORK_FRAMING_DOOR: '/images/our-work-gallery/work-framing-door.webp',
    PROJECTS_AFTER_LIVING_ROOM:
      '/images/our-work-gallery/projects-after-living-room.webp',
  },

  // Videos
  VIDEOS: {
    HOME: '/images/videos/home.mp4',
    HERO_PROJECTS: '/images/videos/hero-projects-banner.mp4',
    HERO_WORK: '/images/videos/hero-our-work-banner.mp4',
    HERO_IMPACT: '/images/videos/hero-our-impact.mp4',
    HERO_SPOTLIGHT: '/images/videos/hero-spotlight-banner.mp4',
    SUCCESS_STORY: '/images/videos/success-story.mp4',
  },
} as const;

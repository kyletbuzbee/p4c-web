/**
 * Centralized Asset Registry
 * Maps application logic to physical file paths.
 *
 * Usage:
 * import { IMAGES } from '../constants/images';
 * <img src={IMAGES.BANNERS.HERO_HOME} alt="Home" />
 *
 * Icons Usage:
 * import { IMAGES } from '../constants/images';
 * <img src={IMAGES.ICONS.SOLDIER} alt="Veteran Support" className="w-6 h-6" />
 */

export const IMAGES = {
  // Brand Assets
  LOGO: {
    PNG: '/images/logo/brand-logo.png',
    SVG: '/images/logo/brand-logo.svg',
  },

  // Page Hero Banners
  BANNERS: {
    HERO_HOME: '/images/banners/hero-home-banner-800w.webp',
    HERO_ABOUT: '/images/banners/hero-about-us-banner-400w.webp',
    HERO_CONTACT: '/images/banners/hero-about-banner-1280.webp',
    HERO_IMPACT: '/images/banners/hero-impact-banner-400w.webp',
    HERO_PRIVACY: '/images/banners/hero-privacy-banner.webp',
    HERO_PROJECTS: '/images/banners/hero-projects-banner-1920.webp',
    HERO_RESOURCES: '/images/banners/hero-resources-banner-1920.webp',
    HERO_TERMS: '/images/banners/hero-terms-banner-1200w.webp',
    HERO_TRANSPARENCY: '/images/banners/hero-transparency-banner-400w.webp',
    HERO_APPLICATION: '/images/banners/hero-application-banner.webp',
    HERO_FAQ: '/images/banners/hero-faq-banner.png',
  },

  // Property Listings
  PROPERTIES: {
    TYLER_RANCH: '/images/properties/tyler-ranch-home.webp',
    JEFFERSON_RIVER: '/images/properties/jefferson-river.webp',
    KEMP_TOWNHOME: '/images/properties/kemp-townhome.webp',
    LONGVIEW_VICTORIAN: '/images/properties/longview-victorian.webp',
    MARSHALL_FARMHOUSE: '/images/properties/marshall-farmhouse-400w.webp',
    MINEOLA_STUDIO: '/images/properties/mineola-studio.webp',
    LINDALE_COTTAGE: '/images/properties/lindale-cottage.webp',
  },

  // Team & About
  TEAM: {
    OWNER: '/images/about/about-us-team-owner.png',
    HEADSHOT: '/images/about/about-us-team-headshot.png',
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
    PORCH: {
      BEFORE:
        '/images/before-after-comparison/projects-before-front-porch-400w.webp',
      AFTER:
        '/images/before-after-comparison/projects-after-front-porch-800w.webp',
    },
  },

  // Gallery / Work
  GALLERY: {
    FRAMING: '/images/our-work-gallery/our-work-framing-door.webp',
    PAINTING: '/images/our-work-gallery/our-work-painting-dog-800w.webp',
    MEASURING: '/images/our-work-gallery/our-work-detailed-measuring-800w.webp',
    REMODELING: '/images/our-work-gallery/our-work-remodeling-400w.webp',
  },

  // Icon System - Key icons for the veteran/family housing platform
  ICONS: {
    // Core Brand Icons
    SOLDIER: '/images/icons/soldier.svg',
    FLAG: '/images/icons/flag.svg',
    HEART: '/images/icons/heart.svg',
    HOME: '/images/icons/home.svg',
    FAMILY: '/images/icons/family.svg',

    // Property & Construction Icons
    PATIO: '/images/icons/american-flag-icon.svg',
    QUALITY: '/images/icons/quality-checklist.svg',
    COMMUNITY: '/images/icons/online-community.svg',
    PATRIOTISM: '/images/icons/patriotism.svg',

    // Additional Support Icons
    VA_LOAN: '/images/icons/032-va-loan.png',
    SUPPORT: '/images/icons/019-heart.png',
    QUALITY_CONTROL: '/images/icons/009-quality-control.png',
    STANDARD: '/images/icons/012-quality-control-1.png',
  },

  // Videos
  VIDEOS: {
    HOME: '/images/videos/home.mp4',
    HERO_PROPERTIES: '/images/videos/hero-properties-banner.mp4',
    HERO_WORK: '/images/videos/hero-our-work-banner.mp4',
    SUCCESS_STORY: '/images/videos/success-story.mp4',
  },
} as const;

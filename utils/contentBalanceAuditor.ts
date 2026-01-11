/**
 * P4C Content Balance Auditor
 *  * Version: 1.0.0
 * Purpose: Analyzes the semantic weight of content to ensure a 50/50 balance
 * between Veteran and Family outreach.
 */

import type {
  AuditResult,
  RouteConfig,
  ContentAuditorConfig,
  ContentType,
  StoryContent,
} from '../types/contentBalance';
import type { ExtendedProperty } from '../types';

/**
 * Default configuration for the content auditor
 */
export const DEFAULT_CONFIG: ContentAuditorConfig = {
  veteranKeywords: [
    'vash',
    'veteran',
    'military',
    'va clinic',
    'rehousing',
    'rapid rehousing',
    'service',
    'armed forces',
  ],
  familyKeywords: [
    'school',
    'elementary',
    'park',
    'voucher',
    'family',
    'children',
    'district',
    'child',
    'kids',
  ],
  routeWeights: [
    { path: '/veterans', veteranWeight: 10 },
    { path: '/veteran-services', veteranWeight: 10 },
    { path: '/stories', veteranWeight: 8 },
    { path: '/homeowner-solutions', familyWeight: 10 },
    { path: '/apply', familyWeight: 8 },
    { path: '/equal-housing', familyWeight: 7 },
    { path: '/family-resources', familyWeight: 10 },
  ],
};

/**
 * Analyzes property content for veteran/family keywords
 * @param property - Property data to analyze
 * @param config - Auditor configuration
 * @returns Content type classification
 */
export const analyzePropertyContent = (
  property: ExtendedProperty,
  config: ContentAuditorConfig = DEFAULT_CONFIG
): ContentType => {
  const text = (
    property.description +
    property.badges.join(' ') +
    (property.amenities?.join(' ') || '')
  ).toLowerCase();

  // Check for veteran markers
  const veteranMatches = config.veteranKeywords.filter((keyword) =>
    text.includes(keyword.toLowerCase())
  ).length;

  // Check for family markers
  const familyMatches = config.familyKeywords.filter((keyword) =>
    text.includes(keyword.toLowerCase())
  ).length;

  if (veteranMatches > familyMatches) return 'veteran';
  if (familyMatches > veteranMatches) return 'family';
  return 'neutral';
};

/**
 * Analyzes story content for veteran/family focus
 * @param story - Story content to analyze
 * @returns Content type classification
 */
export const analyzeStoryContent = (story: StoryContent): ContentType => {
  const text = `${story.quote} ${story.contentTypeDescription}`.toLowerCase();

  const veteranKeywords = [
    'veteran',
    'military',
    'service',
    'armed forces',
    'va',
    'vash',
  ];
  const familyKeywords = [
    'family',
    'children',
    'child',
    'kids',
    'school',
    'district',
  ];

  const veteranMatches = veteranKeywords.filter((keyword) =>
    text.includes(keyword.toLowerCase())
  ).length;

  const familyMatches = familyKeywords.filter((keyword) =>
    text.includes(keyword.toLowerCase())
  ).length;

  if (veteranMatches > familyMatches) return 'veteran';
  if (familyMatches > veteranMatches) return 'family';
  return 'neutral';
};

/**
 * Main audit function that analyzes routes and properties
 * @param routes - Array of route configurations
 * @param properties - Array of property data
 * @param config - Auditor configuration
 * @returns Comprehensive audit result
 */
export const auditContentBalance = (
  routes: RouteConfig[],
  properties: ExtendedProperty[],
  config: ContentAuditorConfig = DEFAULT_CONFIG
): AuditResult => {
  let vScore = 0;
  let fScore = 0;
  const tips: string[] = [];

  try {
    // 1. Analyze Page Routing (Nav Structure)
    routes.forEach((route) => {
      if (route.veteranWeight) vScore += route.veteranWeight;
      if (route.familyWeight) fScore += route.familyWeight;
    });

    // 2. Analyze Property Data (Semantic Keywords)
    properties.forEach((property) => {
      const contentType = analyzePropertyContent(property, config);

      if (contentType === 'veteran') {
        vScore += 5;
      } else if (contentType === 'family') {
        fScore += 5;
      }
    });

    const total = vScore + fScore;
    const vPerc = total > 0 ? Math.round((vScore / total) * 100) : 0;
    const fPerc = total > 0 ? Math.round((fScore / total) * 100) : 0;

    // 3. Generate Architect Recommendations
    const gap = Math.abs(vPerc - fPerc);

    if (vPerc > 60) {
      tips.push(
        "High Veteran Tilt detected. Add 'Family Success Stories' to /stories to balance military testimonials."
      );
      tips.push(
        'Update PropertyCard badges to highlight proximity to Tyler/Longview schools more prominently.'
      );
    }

    if (fPerc > 60) {
      tips.push(
        'High Family Tilt detected. Consider adding veteran-specific content to balance the representation.'
      );
      tips.push(
        'Highlight VA benefits and veteran programs in property descriptions.'
      );
    }

    if (gap > 20) {
      tips.push(
        `Significant imbalance detected (${gap}% gap). Consider creating dedicated content sections for the underrepresented group.`
      );
    }

    if (gap < 10) {
      tips.push(
        'Excellent balance achieved! Maintain this ratio for optimal audience representation.'
      );
    }

    return {
      veteranWeight: vScore,
      familyWeight: fScore,
      ratio: `${vPerc}% Veteran / ${fPerc}% Family`,
      veteranPerc: vPerc,
      familyPerc: fPerc,
      recommendations: tips,
    };
  } catch (error) {
    // Log error to error boundary service
    import('../services/errorBoundaryService').then(({ logError }) => {
      logError('Content Balance Auditor failed', {
        error:
          error instanceof Error
            ? error
            : new Error('Unknown error in Content Balance Auditor'),
        component: 'contentBalanceAuditor',
        severity: 'high',
      });
    });

    return {
      veteranWeight: 0,
      familyWeight: 0,
      ratio: '0% Veteran / 0% Family',
      veteranPerc: 0,
      familyPerc: 0,
      recommendations: [
        'Auditor encountered an error. Please check configuration.',
      ],
    };
  }
};

/**
 * Analyzes story content balance
 * @param stories - Array of story content
 * @returns Audit result for stories
 */
export const auditStoryBalance = (stories: StoryContent[]): AuditResult => {
  let vScore = 0;
  let fScore = 0;
  const tips: string[] = [];

  stories.forEach((story) => {
    const contentType = analyzeStoryContent(story);

    if (contentType === 'veteran') {
      vScore += 10;
    } else if (contentType === 'family') {
      fScore += 10;
    }
  });

  const total = vScore + fScore;
  const vPerc = total > 0 ? Math.round((vScore / total) * 100) : 0;
  const fPerc = total > 0 ? Math.round((fScore / total) * 100) : 0;

  // Generate recommendations for stories
  const gap = Math.abs(vPerc - fPerc);

  if (gap > 15) {
    tips.push(
      `Story imbalance detected (${gap}% gap). Add more ${vPerc > fPerc ? 'family' : 'veteran'} stories to balance representation.`
    );
  }

  return {
    veteranWeight: vScore,
    familyWeight: fScore,
    ratio: `${vPerc}% Veteran / ${fPerc}% Family`,
    veteranPerc: vPerc,
    familyPerc: fPerc,
    recommendations: tips,
  };
};

/**
 * Creates balanced story content array
 * @param stories - Original stories
 * @returns Balanced stories with type classification
 */
export const createBalancedStories = (
  stories: StoryContent[]
): StoryContent[] =>
  stories.map((story) => {
    const contentType = analyzeStoryContent(story);

    return {
      ...story,
      type: contentType,
      contentTypeDescription:
        contentType === 'veteran'
          ? 'Veteran Success Story'
          : contentType === 'family'
            ? 'Family Success Story'
            : 'General Story',
    };
  });

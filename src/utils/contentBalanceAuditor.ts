import type {
  AuditResult,
  ContentAuditorConfig,
  StoryContent,
} from '../types/contentBalance';
import type { ExtendedProperty } from '../types/types';

export const DEFAULT_CONFIG: ContentAuditorConfig = {
  veteranKeywords: [
    'vash',
    'hud-vash',
    'veteran',
    'military',
    'deployed',
    'service member',
    'hero',
    'base',
    'voucher',
    'sacrifice',
  ],
  familyKeywords: [
    'school',
    'family',
    'children',
    'kids',
    'backyard',
    'playground',
    'district',
    'safe',
    'bedroom',
    'stability',
    'dignity',
    'future',
    'spacious',
  ],
  communityKeywords: [
    'east texas',
    'tyler',
    'longview',
    'marshall',
    'smith county',
    'revitalization',
    'neighborhood',
    'community',
    'local',
    'impact',
    'affordable',
    'standard',
    'housing',
    'economy',
    'development',
    'historic',
  ],
  investorKeywords: [
    'cash offer',
    'as-is',
    'investor',
    'asset',
    'roi',
    'yield',
    'capital',
    'acquisition',
    'liquidity',
    'market value',
    'brrr',
    'equity',
    'turnkey',
    'portfolio',
  ],
  // Route weights remain the same
  routeWeights: [
    { path: '/veterans', veteranWeight: 10 },
    { path: '/family-resources', familyWeight: 10 },
    { path: '/homeowner-solutions', investorWeight: 10 },
    { path: '/impact', communityWeight: 10 },
    { path: '/', communityWeight: 5, familyWeight: 5 },
  ],
};

const TARGETS = {
  family: 35,
  community: 53,
  investor: 6,
  veteran: 6,
};

export const auditContentBalance = (
  properties: ExtendedProperty[],
  stories: StoryContent[]
): AuditResult => {
  const scores = { family: 0, community: 0, investor: 0, veteran: 0 };
  const tips: string[] = [];

  const allItems = [...properties, ...stories];

  allItems.forEach((item) => {
    // Safe access to title/description
    const title = 'title' in item ? item.title : '';
    const desc = 'description' in item ? item.description : '';
    const text = `${title} ${desc}`.toLowerCase();

    // ARCHITECTURAL CHANGE: Use independent IF statements.
    // A single property can be relevant to Families AND the Community.

    if (DEFAULT_CONFIG.investorKeywords.some((k) => text.includes(k))) {
      scores.investor++;
    }

    if (DEFAULT_CONFIG.veteranKeywords.some((k) => text.includes(k))) {
      scores.veteran++;
    }

    if (DEFAULT_CONFIG.familyKeywords.some((k) => text.includes(k))) {
      scores.family++;
    }

    if (DEFAULT_CONFIG.communityKeywords.some((k) => text.includes(k))) {
      scores.community++;
    }

    // REMOVED: The 'else' block that defaulted to community.
    // If it doesn't match keywords, it shouldn't score points.
  });

  // Calculate total score based on hits, not just item count
  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);

  const percs = {
    family: totalScore ? Math.round((scores.family / totalScore) * 100) : 0,
    community: totalScore
      ? Math.round((scores.community / totalScore) * 100)
      : 0,
    investor: totalScore ? Math.round((scores.investor / totalScore) * 100) : 0,
    veteran: totalScore ? Math.round((scores.veteran / totalScore) * 100) : 0,
  };

  const dominantCategory = Object.keys(percs).reduce((a, b) =>
    percs[a as keyof typeof percs] > percs[b as keyof typeof percs] ? a : b
  );

  // Recommendations Logic
  // Helper to generate directional advice
  const checkBalance = (
    current: number,
    target: number,
    label: string,
    lowTip: string,
    highTip: string
  ) => {
    if (Math.abs(current - target) > 10) {
      tips.push(
        `${label} content is at ${current}% (Target: ${target}%). ${current < target ? lowTip : highTip}`
      );
    }
  };

  checkBalance(
    percs.family,
    TARGETS.family,
    'Family',
    'Highlight school districts, safety, and amenities.',
    'Ensure you are not alienating investors or single residents.'
  );

  checkBalance(
    percs.community,
    TARGETS.community,
    'Community',
    'Mention "East Texas", "Tyler", or specific neighborhoods.',
    'Good local focus, but ensure specific property features are clear.'
  );

  checkBalance(
    percs.investor,
    TARGETS.investor,
    'Investor',
    'Include terms like "Asset", "ROI", and "Cash Flow".',
    'Tone down the financial jargon; emphasize the mission.'
  );

  // Veteran logic is unique (strict cap)
  if (percs.veteran > 15) {
    tips.push(
      `Veteran content is high (${percs.veteran}%). Ensure this doesn't overshadow the primary Family mission.`
    );
  } else if (percs.veteran < 5) {
    tips.push(
      `Veteran content is low (${percs.veteran}%). Mention HUD-VASH or "Service" to reach 10%.`
    );
  }

  return {
    scores,
    percentages: percs,
    dominantCategory,
    recommendations: tips,
    formattedRatio: `Fam:${percs.family}% | Com:${percs.community}% | Inv:${percs.investor}% | Vet:${percs.veteran}%`,
  };
};

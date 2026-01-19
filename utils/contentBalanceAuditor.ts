import type {
  AuditResult,
  ContentAuditorConfig,
  StoryContent,
} from '../types/contentBalance';
import type { ExtendedProperty } from '../types';

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
  ],
  routeWeights: [
    { path: '/veterans', veteranWeight: 10 },
    { path: '/family-resources', familyWeight: 10 },
    { path: '/homeowner-solutions', investorWeight: 10 },
    { path: '/impact', communityWeight: 10 },
    { path: '/', communityWeight: 5, familyWeight: 5 },
  ],
};

const TARGETS = {
  family: 40,
  community: 30,
  investor: 20,
  veteran: 10,
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

    // Explicitly typed parameter 'k' to fix TS7006
    if (DEFAULT_CONFIG.investorKeywords.some((k: string) => text.includes(k))) {
      scores.investor++;
    } else if (
      DEFAULT_CONFIG.veteranKeywords.some((k: string) => text.includes(k))
    ) {
      scores.veteran++;
    } else if (
      DEFAULT_CONFIG.familyKeywords.some((k: string) => text.includes(k))
    ) {
      scores.family++;
    } else if (
      DEFAULT_CONFIG.communityKeywords.some((k: string) => text.includes(k))
    ) {
      scores.community++;
    } else {
      scores.community++;
    }
  });

  const total = Object.values(scores).reduce((a, b) => a + b, 0);
  const percs = {
    family: total ? Math.round((scores.family / total) * 100) : 0,
    community: total ? Math.round((scores.community / total) * 100) : 0,
    investor: total ? Math.round((scores.investor / total) * 100) : 0,
    veteran: total ? Math.round((scores.veteran / total) * 100) : 0,
  };

  const dominantCategory = Object.keys(percs).reduce((a, b) =>
    percs[a as keyof typeof percs] > percs[b as keyof typeof percs] ? a : b
  );

  if (Math.abs(percs.family - TARGETS.family) > 10) {
    tips.push(
      `Family content is at ${percs.family}% (Target: 40%). ${percs.family < 40 ? 'Highlight school districts and amenities.' : 'Reduce family focus.'}`
    );
  }
  if (Math.abs(percs.community - TARGETS.community) > 10) {
    tips.push(
      `Community content is at ${percs.community}% (Target: 30%). ${percs.community < 30 ? 'Mention "East Texas", "Tyler", or "Revitalization" more often.' : 'Good local focus.'}`
    );
  }
  if (Math.abs(percs.investor - TARGETS.investor) > 10) {
    tips.push(
      `Investor content is at ${percs.investor}% (Target: 20%). ${percs.investor < 20 ? 'Use terms like "Asset", "ROI", and "Cash Offer".' : 'Too much investor focus.'}`
    );
  }
  if (percs.veteran > 15) {
    tips.push(
      `Veteran content is too high (${percs.veteran}%). Keep it niche (~10%) to maintain broad market appeal.`
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

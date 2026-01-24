export interface RouteConfig {
  path: string;
  veteranWeight?: number;
  familyWeight?: number;
  investorWeight?: number;
  communityWeight?: number;
}

export interface ContentAuditorConfig {
  veteranKeywords: string[];
  familyKeywords: string[];
  communityKeywords: string[];
  investorKeywords: string[];
  routeWeights: RouteConfig[];
}

export interface AuditResult {
  scores: {
    family: number;
    community: number;
    investor: number;
    veteran: number;
  };
  percentages: {
    family: number;
    community: number;
    investor: number;
    veteran: number;
  };
  dominantCategory: string;
  recommendations: string[];
  formattedRatio: string;
}

export interface StoryContent {
  title: string;
  description: string;
  [key: string]: any;
}

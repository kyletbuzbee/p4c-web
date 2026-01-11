/**
 * P4C Content Balance Auditor Types
 * Type definitions for the Content Balance Auditor system
 */

export interface AuditResult {
  veteranWeight: number;
  familyWeight: number;
  ratio: string;
  veteranPerc: number;
  familyPerc: number;
  recommendations: string[];
}

export interface RouteConfig {
  path: string;
  veteranWeight?: number;
  familyWeight?: number;
}

export interface ContentAuditorConfig {
  veteranKeywords: string[];
  familyKeywords: string[];
  routeWeights: RouteConfig[];
}

export interface ContentBalanceWidgetProps {
  auditResult: AuditResult;
  onRefresh: () => void;
}

export interface ContentBalanceChartProps {
  veteranPerc: number;
  familyPerc: number;
}

export type ContentType = 'veteran' | 'family' | 'neutral';

export interface StoryContent {
  id: number;
  name: string;
  location: string;
  quote: string;
  videoLabel: string;
  type: ContentType;
  contentTypeDescription: string;
}

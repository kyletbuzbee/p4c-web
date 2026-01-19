import { describe, expect, test } from 'vitest';
import { auditContentBalance } from './contentBalanceAuditor';

describe('Content Balance Auditor (Targets: 40% Family | 30% Community | 20% Investor | 10% Veteran)', () => {
  test('should identify Investor content via Business/ROI keywords', () => {
    const mockProperties: any[] = [
      {
        title: 'High Yield Asset',
        description:
          'Perfect for BRRRR strategy. Cash flow positive. ROI potential is high in this market.',
      },
    ];

    const result = auditContentBalance(mockProperties, []);

    // Should classify as Investor due to 'BRRRR', 'Cash flow', 'ROI'
    expect(result.percentages.investor).toBeGreaterThan(0);
    expect(result.dominantCategory).toBe('investor');
  });

  test('should identify Community content via "East Texas" region keywords', () => {
    // UPDATED: Changed "Tyler" to "East Texas" per your regex request
    const mockProperties: any[] = [
      {
        title: 'Affordable Apartment',
        description:
          'Clean, safe unit in East Texas. Revitalizing the neighborhood block by block.',
      },
    ];

    const result = auditContentBalance(mockProperties, []);

    expect(result.percentages.community).toBeGreaterThan(0);
    expect(result.dominantCategory).toBe('community');
  });

  test('should identify Family content via "Stability/Schools" keywords', () => {
    const mockProperties: any[] = [
      {
        title: 'Forever Home',
        description:
          'Top-rated school district. Fenced yard for children. Safe, stable living environment.',
      },
    ];

    const result = auditContentBalance(mockProperties, []);

    expect(result.percentages.family).toBeGreaterThan(0);
    expect(result.dominantCategory).toBe('family');
  });

  test('should flag warning when Veteran content exceeds 10% threshold', () => {
    // Simulating a scenario where Veteran content is overpowering (3 out of 3 items)
    const mockProperties: any[] = [
      { title: 'Veteran Haven', description: 'Exclusive for HUD-VASH heroes.' },
      { title: 'Military Base', description: 'Serving those who served.' },
      { title: 'Veteran Housing', description: 'Priority for veterans.' },
    ];

    const result = auditContentBalance(mockProperties, []);

    // Expect Veteran percentage to be very high
    expect(result.percentages.veteran).toBeGreaterThan(80);

    // The recommendation engine should trigger a warning because 80% > 10% target
    const hasVeteranWarning = result.recommendations.some(
      (rec) =>
        rec.toLowerCase().includes('veteran') &&
        (rec.toLowerCase().includes('high') ||
          rec.toLowerCase().includes('reduce'))
    );

    expect(hasVeteranWarning).toBe(true);
  });

  test('should handle mixed content correctly', () => {
    const mockProperties: any[] = [
      { title: 'Family Home', description: 'Great schools, safe for kids.' }, // Family
      { title: 'Family Home', description: 'Great schools, safe for kids.' }, // Family
      {
        title: 'Local Revitalization',
        description: 'Improving East Texas streets.',
      }, // Community
      { title: 'Investment', description: 'Cash flow asset.' }, // Investor
    ];

    const result = auditContentBalance(mockProperties, []);

    // Expect Family to be highest (50%)
    expect(result.dominantCategory).toBe('family');
    // Expect Veteran to be low/zero
    expect(result.percentages.veteran).toBeLessThan(10);
  });
});

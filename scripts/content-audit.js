#!/usr/bin/env node

import { auditContentBalance } from '../utils/contentBalanceAuditor.ts';
import { properties } from '../data/properties.ts';

// Mock stories data for content audit
const stories = [
  {
    title: 'Veteran Housing Success Story',
    description: 'How we helped a military family find stable housing in Tyler',
  },
  {
    title: 'Community Revitalization in Longview',
    description: 'Our impact on neighborhood improvement in East Texas',
  },
  {
    title: 'Family-Friendly Rentals',
    description: 'Affordable housing solutions for families with children',
  },
  {
    title: 'Investor Partnership Program',
    description: 'How we work with investors to acquire distressed properties',
  },
];

console.log('🔍 Running Content Balance Audit...');
console.log('=================================');

try {
  // Run the content audit
  const auditResult = auditContentBalance(properties, stories);

  console.log('📊 Content Distribution Results:');
  console.log(`Family: ${auditResult.percentages.family}% (Target: 40%)`);
  console.log(`Community: ${auditResult.percentages.community}% (Target: 30%)`);
  console.log(`Investor: ${auditResult.percentages.investor}% (Target: 20%)`);
  console.log(`Veteran: ${auditResult.percentages.veteran}% (Target: 10%)`);
  console.log('');
  console.log(`📈 Dominant Category: ${auditResult.dominantCategory}`);
  console.log(`💡 Ratio: ${auditResult.formattedRatio}`);
  console.log('');

  if (auditResult.recommendations.length > 0) {
    console.log('📋 Recommendations:');
    auditResult.recommendations.forEach((tip, index) => {
      console.log(`  ${index + 1}. ${tip}`);
    });
  } else {
    console.log('✅ Content balance is optimal!');
  }

  // Check if content meets targets (within 10% tolerance)
  const familyOk = Math.abs(auditResult.percentages.family - 40) <= 10;
  const communityOk = Math.abs(auditResult.percentages.community - 30) <= 10;
  const investorOk = Math.abs(auditResult.percentages.investor - 20) <= 10;
  const veteranOk = auditResult.percentages.veteran <= 15; // Veteran should be <= 15%

  const allOk = familyOk && communityOk && investorOk && veteranOk;

  console.log('');
  console.log('🎯 Compliance Status:');
  console.log(`  Family Content: ${familyOk ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`  Community Content: ${communityOk ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`  Investor Content: ${investorOk ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`  Veteran Content: ${veteranOk ? '✅ PASS' : '❌ FAIL'}`);
  console.log('');

  if (allOk) {
    console.log('🎉 Content Audit PASSED - All targets met!');
    process.exit(0);
  } else {
    console.log('⚠️  Content Audit FAILED - Adjust content balance');
    process.exit(1);
  }
} catch (error) {
  console.error('❌ Content Audit Error:', error.message);
  process.exit(1);
}

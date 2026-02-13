import fs from 'fs';

const review = JSON.parse(fs.readFileSync('full_picture_review.json', 'utf8'));

console.log('=== Image Missing Alt Text (High Severity) ===');
const imageViolations = review.analysis.files.filter((file) =>
  file.violations.some(
    (violation) =>
      violation.type === 'ACCESSIBILITY' &&
      violation.message.includes('Image missing alt text')
  )
);
imageViolations.forEach((file) => {
  console.log(`- ${file.path}`);
  file.violations
    .filter(
      (violation) =>
        violation.type === 'ACCESSIBILITY' &&
        violation.message.includes('Image missing alt text')
    )
    .forEach((violation) => {
      console.log(`  - ${violation.message}`);
    });
});

console.log('\n=== Icon Button Missing Aria-Label (High Severity) ===');
const buttonViolations = review.analysis.files.filter((file) =>
  file.violations.some(
    (violation) =>
      violation.type === 'ACCESSIBILITY' &&
      violation.message.includes('Icon button missing aria-label')
  )
);
buttonViolations.forEach((file) => {
  console.log(`- ${file.path}`);
  file.violations
    .filter(
      (violation) =>
        violation.type === 'ACCESSIBILITY' &&
        violation.message.includes('Icon button missing aria-label')
    )
    .forEach((violation) => {
      console.log(`  - ${violation.message}`);
    });
});

import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'src');
const searchPattern = /BeforeAfterSlider/;

function searchInDirectory(dir) {
  const results = [];
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      results.push(...searchInDirectory(filePath));
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      const content = fs.readFileSync(filePath, 'utf8');
      if (searchPattern.test(content)) {
        results.push(filePath);
      }
    }
  });

  return results;
}

const matches = searchInDirectory(srcDir);
console.log('BeforeAfterSlider usage found in:');
matches.forEach((file) => {
  console.log(`- ${file}`);
});

import fs from 'fs';
import path from 'path';

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const matches = [];
  const r1 = /\{["']\s*["']\}/g;
  let m;
  while ((m = r1.exec(content)) !== null) {
    matches.push({ type: 'JSX Space', match: m[0], index: m.index });
  }
  const r2 = /\{stat\.[^}]+\}/g;
  while ((m = r2.exec(content)) !== null) {
    matches.push({ type: 'stat.', match: m[0], index: m.index });
  }
  const r3 = /\{item\.[^}]+\}/g;
  while ((m = r3.exec(content)) !== null) {
    matches.push({ type: 'item.', match: m[0], index: m.index });
  }
  return matches;
}

const files = [
  'lib/services/registry-data.json',
  'lib/services/flow-measurement-solutions.ts',
  'lib/services/inspection-testing.ts',
  'lib/services/industrial-automation.ts',
  'lib/serviceFaqData.ts',
  'lib/serviceCrossLinks.ts',
  'lib/products.ts',
  'lib/blogArticles.ts',
  'lib/blogMetadata.ts'
];

for (const f of files) {
  if (fs.existsSync(f)) {
    const m = checkFile(f);
    console.log(`${f}: ${m.length} matches`);
    if (m.length > 0) {
      console.log('Sample matches:', m.slice(0, 5));
    }
  }
}

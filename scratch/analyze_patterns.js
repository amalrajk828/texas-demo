const fs = require('fs');
const path = require('path');

const legacyDir = path.join(process.cwd(), 'app', '(legacy)', 'service');
const dirs = fs.readdirSync(legacyDir).filter(f => fs.statSync(path.join(legacyDir, f)).isDirectory() && f !== 'page');

const patterns = {};
for (const slug of dirs) {
  const pagePath = path.join(legacyDir, slug, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;
  const pageSrc = fs.readFileSync(pagePath, 'utf8');
  const imports = [...pageSrc.matchAll(/import\s+(\w+)\s+from\s+["']([^"']+)["']/g)]
    .map(m => ({ name: m[1], path: m[2] }))
    .filter(m => !m.path.includes('components/schema') && !m.path.includes('lucide-react') && !m.path.includes('lib/service') && m.path !== 'next' && !m.path.startsWith('next/'));
  
  patterns[slug] = imports;
}

fs.writeFileSync(path.join(process.cwd(), 'scratch', 'patterns_output.json'), JSON.stringify(patterns, null, 2));
console.log('Saved patterns_output.json for', Object.keys(patterns).length, 'pages.');

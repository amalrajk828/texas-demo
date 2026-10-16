const fs = require('fs');
const path = require('path');

const legacyDir = path.join(process.cwd(), 'app', '(legacy)', 'service');
const slugs = fs.readdirSync(legacyDir).filter(f => fs.statSync(path.join(legacyDir, f)).isDirectory() && f !== 'page');

const processSlugs = [];
const specSlugs = [];
const otherSections = {};

for (const slug of slugs) {
  const pagePath = path.join(legacyDir, slug, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;
  const pageSrc = fs.readFileSync(pagePath, 'utf8');

  const compImports = [...pageSrc.matchAll(/import\s+(\w+)\s+from\s+["']([^"']+)["']/g)];
  for (const [, name, relPath] of compImports) {
    if (name.includes('Process')) {
      processSlugs.push(slug);
    }
    if (name.includes('Spec') || name.includes('Table')) {
      specSlugs.push(slug);
    }
  }

  // Also check inside the content file
  for (const [, name, relPath] of compImports) {
    const fullPath = path.join(process.cwd(), relPath.replace(/^@\//, '') + '.tsx');
    if (fs.existsSync(fullPath)) {
      const src = fs.readFileSync(fullPath, 'utf8');
      if (src.includes('ServiceProcessSteps') || src.includes('processSteps') || src.includes('STEPS')) {
        if (!processSlugs.includes(slug)) processSlugs.push(slug);
      }
      if (src.includes('SpecTable') || src.includes('specifications')) {
        if (!specSlugs.includes(slug)) specSlugs.push(slug);
      }
    }
  }
}

console.log('Pages with Process Steps:', processSlugs);
console.log('Pages with Spec Table:', specSlugs);

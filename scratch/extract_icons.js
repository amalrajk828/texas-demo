const fs = require('fs');
const path = require('path');

const legacyDir = path.join(process.cwd(), 'app', '(legacy)', 'service');
const slugs = fs.readdirSync(legacyDir).filter(f => fs.statSync(path.join(legacyDir, f)).isDirectory() && f !== 'page');

const iconNames = new Set();

for (const slug of slugs) {
  const pagePath = path.join(legacyDir, slug, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;
  const pageSrc = fs.readFileSync(pagePath, 'utf8');

  const compImports = [...pageSrc.matchAll(/import\s+(\w+)\s+from\s+["']([^"']+)["']/g)];
  const files = [pageSrc];
  for (const [, name, relPath] of compImports) {
    const fullPath = path.join(process.cwd(), relPath.replace(/^@\//, '') + '.tsx');
    if (fs.existsSync(fullPath)) {
      files.push(fs.readFileSync(fullPath, 'utf8'));
    }
  }

  for (const src of files) {
    const iconMatches = [...src.matchAll(/(?:Icon|icon):\s*([A-Za-z0-9_]+)/g)];
    for (const [, icon] of iconMatches) {
      if (icon !== 'item' && icon !== 's' && icon !== 'card') {
        iconNames.add(icon);
      }
    }
  }
}

console.log('Unique icons found across all 59 pages:', Array.from(iconNames));

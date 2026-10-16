const fs = require('fs');
const path = require('path');

const legacyDir = path.join(process.cwd(), 'app', '(legacy)', 'service');
const slugs = fs.readdirSync(legacyDir).filter(f => fs.statSync(path.join(legacyDir, f)).isDirectory() && f !== 'page');

// Check each slug
for (const slug of slugs) {
  const pagePath = path.join(legacyDir, slug, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;
  const pageSrc = fs.readFileSync(pagePath, 'utf8');

  const compImports = [...pageSrc.matchAll(/import\s+(\w+)\s+from\s+["']([^"']+)["']/g)];
  const files = [];
  for (const [, name, relPath] of compImports) {
    const fullPath = path.join(process.cwd(), relPath.replace(/^@\//, '') + '.tsx');
    if (fs.existsSync(fullPath) && !relPath.includes('schema') && !relPath.includes('lucide') && !relPath.includes('serviceCross') && !relPath.includes('serviceFaq')) {
      files.push({ name, fullPath });
    }
  }

  let foundCards = [];
  // Also check pageSrc itself
  const allSources = [pageSrc, ...files.map(f => fs.readFileSync(f.fullPath, 'utf8'))];

  for (const src of allSources) {
    // Find any array assignment of items with title and body/desc/description
    const arrayMatches = [...src.matchAll(/const\s+([A-Za-z0-9_]+)\s*(?::\s*[^=]+)?\s*=\s*(\[[\s\S]*?\n\];)/g)];
    for (const [m, name, arrText] of arrayMatches) {
      if (['STATS', 'PARTS', 'BREADCRUMBS'].includes(name)) continue;
      // Extract items from arrText by matching { ... } blocks
      const objBlocks = [...arrText.matchAll(/\{([^{}]+)\}/g)];
      const items = [];
      for (const [b, inner] of objBlocks) {
        const titleM = inner.match(/title:\s*["'`]([^"'`]+)["'`]/);
        const descM = inner.match(/(?:body|desc|description):\s*["'`]([^"'`]+)["'`]/);
        const hrefM = inner.match(/href:\s*["'`]([^"'`]+)["'`]/);
        if (titleM && (descM || hrefM)) {
          items.push({
            title: titleM[1],
            description: descM ? descM[1] : '',
            href: hrefM ? hrefM[1] : undefined
          });
        }
      }
      if (items.length > 0 && foundCards.length === 0) {
        foundCards = items;
      }
    }
  }

  if (foundCards.length === 0) {
    console.log(`NO CARDS FOUND FOR: ${slug}`);
  }
}

console.log('Done scanning for cards.');

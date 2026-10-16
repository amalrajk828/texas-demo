const fs = require('fs');
const path = require('path');

const legacyDir = path.join(process.cwd(), 'app', '(legacy)', 'service');
const dirs = fs.readdirSync(legacyDir).filter(f => fs.statSync(path.join(legacyDir, f)).isDirectory() && f !== 'page');

// Read serviceFaqData and serviceCrossLinks
const faqContent = fs.readFileSync(path.join(process.cwd(), 'lib', 'serviceFaqData.ts'), 'utf8');
const crossContent = fs.readFileSync(path.join(process.cwd(), 'lib', 'serviceCrossLinks.ts'), 'utf8');

console.log('Testing extraction on 59 legacy service pages...');
let successCount = 0;
const results = [];

for (const slug of dirs) {
  const pagePath = path.join(legacyDir, slug, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;
  const pageSrc = fs.readFileSync(pagePath, 'utf8');

  // Extract metadata
  const titleMatch = pageSrc.match(/title:\s*["']([^"']+)["']/);
  const descMatch = pageSrc.match(/description:\s*["']([^"']+)["']/);
  const canonicalMatch = pageSrc.match(/canonical:\s*["']([^"']+)["']/);
  const kwMatch = pageSrc.match(/keywords:\s*\[([^\]]+)\]/);
  const keywords = kwMatch ? kwMatch[1].split(',').map(s => s.trim().replace(/^["']|["']$/g, '')) : [];

  // Extract component imports
  const compMatches = [...pageSrc.matchAll(/import\s+(\w+)\s+from\s+["']([^"']+)["']/g)];
  let heroFile = null;
  let contentFile = null;

  for (const [, name, relPath] of compMatches) {
    const fullPath = path.join(process.cwd(), relPath.replace(/^@\//, '') + '.tsx');
    if (fs.existsSync(fullPath)) {
      if (/Hero/i.test(name)) heroFile = fullPath;
      if (/Content|SubServices|Services|Benefits/i.test(name)) contentFile = fullPath;
    }
  }

  results.push({
    slug,
    title: titleMatch ? titleMatch[1] : '',
    desc: descMatch ? descMatch[1] : '',
    canonical: canonicalMatch ? canonicalMatch[1] : `/service/${slug}/`,
    hasHero: Boolean(heroFile),
    hasContent: Boolean(contentFile),
    heroPath: heroFile ? path.relative(process.cwd(), heroFile) : null,
    contentPath: contentFile ? path.relative(process.cwd(), contentFile) : null
  });
  successCount++;
}

console.log(`Parsed ${successCount} pages.`);
const missingHero = results.filter(r => !r.hasHero);
const missingContent = results.filter(r => !r.hasContent);
console.log('Missing hero:', missingHero.map(r => r.slug));
console.log('Missing content:', missingContent.map(r => r.slug));

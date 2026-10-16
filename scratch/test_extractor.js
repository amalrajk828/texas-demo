const fs = require('fs');
const path = require('path');

const legacyDir = path.join(process.cwd(), 'app', '(legacy)', 'service');
const dirs = fs.readdirSync(legacyDir).filter(f => fs.statSync(path.join(legacyDir, f)).isDirectory() && f !== 'page');

// Read serviceFaqData and serviceCrossLinks
const faqContent = fs.readFileSync(path.join(process.cwd(), 'lib', 'serviceFaqData.ts'), 'utf8');
const crossContent = fs.readFileSync(path.join(process.cwd(), 'lib', 'serviceCrossLinks.ts'), 'utf8');

// Parse serviceFaqData
const faqMap = {};
const faqMatches = [...faqContent.matchAll(/["']([^"']+)["']:\s*\[([\s\S]*?)\]\s*(?:,|\n\s*};)/g)];
for (const match of faqMatches) {
  const key = match[1];
  const itemsBlock = match[2];
  const items = [];
  const qMatches = [...itemsBlock.matchAll(/{\s*q:\s*["']([^"']+)["'],\s*a:\s*["']([^"']+)["']\s*}/g)];
  for (const qm of qMatches) {
    items.push({ q: qm[1], a: qm[2] });
  }
  faqMap[key] = items;
}

// Parse serviceCrossLinks
const crossMap = {};
const crossMatches = [...crossContent.matchAll(/["']([^"']+)["']:\s*\[([\s\S]*?)\]\s*(?:,|\n\s*};)/g)];
for (const match of crossMatches) {
  const key = match[1];
  const itemsBlock = match[2];
  const items = [];
  const itemMatches = [...itemsBlock.matchAll(/{\s*slug:\s*["']([^"']+)["'],\s*label:\s*["']([^"']+)["'](?:,\s*description:\s*["']([^"']+)["'])?\s*}/g)];
  for (const im of itemMatches) {
    items.push({ slug: im[1], label: im[2], description: im[3] || '' });
  }
  crossMap[key] = items;
}

console.log(`Loaded FAQs for ${Object.keys(faqMap).length} slugs, CrossLinks for ${Object.keys(crossMap).length} slugs.`);

const report = [];

for (const slug of dirs) {
  const pagePath = path.join(legacyDir, slug, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;
  const pageSrc = fs.readFileSync(pagePath, 'utf8');

  // Breadcrumbs from BreadcrumbJsonLd
  const bcMatch = pageSrc.match(/<BreadcrumbJsonLd\s+items={\[([\s\S]*?)\]}\s*\/>/);
  const breadcrumbs = [];
  if (bcMatch) {
    const bItems = [...bcMatch[1].matchAll(/{\s*name:\s*["']([^"']+)["'],\s*href:\s*["']([^"']+)["']\s*}/g)];
    for (const b of bItems) {
      breadcrumbs.push({ label: b[1], href: b[2] });
    }
  }

  // ServiceJsonLd
  const sjMatch = pageSrc.match(/<ServiceJsonLd([\s\S]*?)\/>/);
  let sjName = '', sjDesc = '', sjType = '', sjArea = [];
  if (sjMatch) {
    const sjBody = sjMatch[1];
    const n = sjBody.match(/name=["']([^"']+)["']/);
    const d = sjBody.match(/description=["']([^"']+)["']/);
    const t = sjBody.match(/serviceType=["']([^"']+)["']/);
    const a = sjBody.match(/areaServed={(\[[^\]]+\])}/);
    if (n) sjName = n[1];
    if (d) sjDesc = d[1];
    if (t) sjType = t[1];
    if (a) {
      try { sjArea = eval(a[1]); } catch(e){}
    }
  }

  // Find imported Hero and Content
  const compMatches = [...pageSrc.matchAll(/import\s+(\w+)\s+from\s+["']([^"']+)["']/g)];
  let heroFile = null;
  let contentFiles = [];

  for (const [, name, relPath] of compMatches) {
    const fullPath = path.join(process.cwd(), relPath.replace(/^@\//, '') + '.tsx');
    if (fs.existsSync(fullPath)) {
      if (/Hero/i.test(name)) heroFile = fullPath;
      else if (!relPath.includes('schema') && !relPath.includes('lucide') && !relPath.includes('serviceCross') && !relPath.includes('serviceFaq')) {
        contentFiles.push({ name, path: fullPath });
      }
    }
  }

  report.push({
    slug,
    hasHero: Boolean(heroFile),
    heroPath: heroFile,
    contentFiles: contentFiles.map(c => c.name),
    hasFaq: Boolean(faqMap[slug] && faqMap[slug].length),
    hasCross: Boolean(crossMap[slug] && crossMap[slug].length)
  });
}

console.log('Processed', report.length, 'pages.');
console.log('Sample report entry:', JSON.stringify(report[0], null, 2));

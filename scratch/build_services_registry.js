const fs = require('fs');
const path = require('path');

const legacyDir = path.join(process.cwd(), 'app', '(legacy)', 'service');
const slugs = fs.readdirSync(legacyDir).filter(f => fs.statSync(path.join(legacyDir, f)).isDirectory() && f !== 'page');

// Read serviceFaqData and serviceCrossLinks
const faqContent = fs.readFileSync(path.join(process.cwd(), 'lib', 'serviceFaqData.ts'), 'utf8');
const crossContent = fs.readFileSync(path.join(process.cwd(), 'lib', 'serviceCrossLinks.ts'), 'utf8');

// Parse serviceFaqData
const faqMap = {};
const faqBlocks = [...faqContent.matchAll(/["']([^"']+)["']:\s*\[([\s\S]*?)\](?:\s*,|\s*\n\s*};)/g)];
for (const match of faqBlocks) {
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
const crossBlocks = [...crossContent.matchAll(/["']([^"']+)["']:\s*\[([\s\S]*?)\](?:\s*,|\s*\n\s*};)/g)];
for (const match of crossBlocks) {
  const key = match[1];
  const itemsBlock = match[2];
  const items = [];
  const itemMatches = [...itemsBlock.matchAll(/{\s*slug:\s*["']([^"']+)["'],\s*label:\s*["']([^"']+)["'](?:,\s*description:\s*["']([^"']+)["'])?\s*}/g)];
  for (const im of itemMatches) {
    items.push({ slug: im[1], label: im[2], description: im[3] || '' });
  }
  crossMap[key] = items;
}

const serviceResults = {};

for (const slug of slugs) {
  const pagePath = path.join(legacyDir, slug, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;
  const pageSrc = fs.readFileSync(pagePath, 'utf8');

  // Metadata
  const titleMatch = pageSrc.match(/title:\s*["']([^"']+)["']/);
  const descMatch = pageSrc.match(/description:\s*["']([^"']+)["']/);
  const canonicalMatch = pageSrc.match(/canonical:\s*["']([^"']+)["']/);
  const kwMatch = pageSrc.match(/keywords:\s*\[([^\]]+)\]/);
  const keywords = kwMatch ? kwMatch[1].split(',').map(s => s.trim().replace(/^["']|["']$/g, '')) : [];

  // Breadcrumbs
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
  let sjName = '', sjDesc = '', sjType = 'Specialized Technical Services', sjArea = ["Kuwait", "United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Oman"];
  if (sjMatch) {
    const sjBody = sjMatch[1];
    const n = sjBody.match(/name=["']([^"']+)["']/);
    const d = sjBody.match(/description=["']([^"']+)["']/);
    const t = sjBody.match(/serviceType=["']([^"']+)["']/);
    if (n) sjName = n[1];
    if (d) sjDesc = d[1];
    if (t) sjType = t[1];
  }

  // Find components
  const compImports = [...pageSrc.matchAll(/import\s+(\w+)\s+from\s+["']([^"']+)["']/g)];
  let heroFile = null;
  let contentFiles = [];

  for (const [, name, relPath] of compImports) {
    const fullPath = path.join(process.cwd(), relPath.replace(/^@\//, '') + '.tsx');
    if (fs.existsSync(fullPath)) {
      if (/Hero/i.test(name)) heroFile = fullPath;
      else if (!relPath.includes('schema') && !relPath.includes('lucide') && !relPath.includes('serviceCross') && !relPath.includes('serviceFaq')) {
        contentFiles.push({ name, path: fullPath });
      }
    }
  }

  // Extract from Hero
  let heroStats = [];
  let heroEyebrow = sjType;
  let heroTitle = titleMatch ? titleMatch[1] : '';
  let heroSubtitle = descMatch ? descMatch[1] : '';
  let heroImage = null;

  if (heroFile && fs.existsSync(heroFile)) {
    const heroSrc = fs.readFileSync(heroFile, 'utf8');

    // STATS
    const statsMatch = heroSrc.match(/const\s+STATS\s*=\s*\[([\s\S]*?)\];/);
    if (statsMatch) {
      const statItems = [...statsMatch[1].matchAll(/{\s*value:\s*["']([^"']+)["'],\s*label:\s*["']([^"']+)["']\s*}/g)];
      heroStats = statItems.map(s => ({ value: s[1], label: s[2] }));
    }

    // Eyebrow
    const ebMatch = heroSrc.match(/<span className="[^"]*(?:text-\[#0891B2\]|text-\[#e7212b\])[^"]*">([^<]+)<\/span>/);
    if (ebMatch) {
      heroEyebrow = ebMatch[1].trim();
    }

    // Title from H1
    const h1Match = heroSrc.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    if (h1Match) {
      const rawH1 = h1Match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      if (rawH1) heroTitle = rawH1;
    }

    // Subtitle from p after h1
    const subMatch = heroSrc.match(/<p className="[^"]*text-white\/[0-9]+[^"]*"[^>]*>([\s\S]*?)<\/p>/);
    if (subMatch) {
      heroSubtitle = subMatch[1].replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
    }

    // Image
    const imgMatch = heroSrc.match(/<Image\s+src=["']([^"']+)["']\s+alt=["']([^"']+)["']/);
    if (imgMatch) {
      heroImage = { src: imgMatch[1], alt: imgMatch[2] };
    }
  } else if (slug === 'exterior-windows-doors-curtain-wall-testing') {
    // Inlined in page
    heroEyebrow = 'Inspection & Testing';
    heroTitle = 'Exterior Windows, Doors & Curtain Wall Testing';
    heroSubtitle = 'Comprehensive performance testing of building envelope systems — water penetration, air permeability, and structural testing compliant with ASTM and AAMA standards across Kuwait and the GCC.';
    heroStats = [
      { value: 'ASTM E1105', label: 'Water Penetration' },
      { value: 'ASTM E783', label: 'Air Permeability' },
      { value: 'AAMA 501', label: 'Curtain Wall Testing' },
      { value: 'Kuwait & GCC', label: 'Service Coverage' }
    ];
  }

  // Extract from Content
  let overview = null;
  let capabilities = null;
  let processSteps = null;

  for (const cf of contentFiles) {
    const cSrc = fs.readFileSync(cf.path, 'utf8');

    // Overview paragraphs
    const overviewHeadingMatch = cSrc.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
    const pMatches = [...cSrc.matchAll(/<p className="[^"]*text-gray-500[^"]*"[^>]*>([\s\S]*?)<\/p>/g)];
    const paragraphs = pMatches.map(m => m[1].replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim()).filter(p => p.length > 30);

    if (paragraphs.length > 0 && !overview) {
      const heading = overviewHeadingMatch ? overviewHeadingMatch[1].replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim() : `Overview of ${heroTitle}`;
      overview = {
        eyebrow: 'About This Service',
        heading,
        paragraphs
      };
    }

    // CARDS / SERVICES
    const cardsMatch = cSrc.match(/const\s+(?:CARDS|SERVICES|SUB_SERVICES|PROGRAMS)\s*=\s*\[([\s\S]*?)\];/);
    if (cardsMatch && !capabilities) {
      const cardStr = cardsMatch[1];
      const items = [];
      const itemBlocks = [...cardStr.matchAll(/{\s*(?:Icon:\s*(\w+),\s*)?title:\s*["']([^"']+)["'],\s*(?:body|desc|description):\s*["']([^"']+)["'](?:,\s*href:\s*["']([^"']+)["'])?\s*}/g)];
      for (const ib of itemBlocks) {
        items.push({
          title: ib[2],
          description: ib[3].replace(/&amp;/g, '&'),
          href: ib[4] || undefined
        });
      }

      if (items.length > 0) {
        capabilities = {
          eyebrow: 'Capabilities',
          title: `${heroTitle} Scope & Capabilities`,
          items
        };
      }
    }
  }

  // If no capabilities found from CARDS, check for services defined in page.tsx (like exterior-windows-doors-curtain-wall-testing)
  if (!capabilities) {
    const pageServicesMatch = pageSrc.match(/const\s+services\s*=\s*\[([\s\S]*?)\];/);
    if (pageServicesMatch) {
      const itemBlocks = [...pageServicesMatch[1].matchAll(/{\s*(?:icon:\s*\w+,\s*)?title:\s*["']([^"']+)["'],\s*desc:\s*["']([^"']+)["'](?:,\s*href:\s*["']([^"']+)["'])?\s*}/g)];
      const items = itemBlocks.map(ib => ({
        title: ib[1],
        description: ib[2].replace(/&amp;/g, '&'),
        href: ib[3] || undefined
      }));
      if (items.length > 0) {
        capabilities = {
          eyebrow: 'Capabilities',
          title: `${heroTitle} Scope & Capabilities`,
          items
        };
      }
    }
  }

  serviceResults[slug] = {
    slug,
    category: heroEyebrow,
    title: heroTitle,
    subtitle: heroSubtitle,
    breadcrumbs: breadcrumbs.length > 0 ? breadcrumbs : [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services/' },
      { label: heroTitle }
    ],
    heroImage,
    stats: heroStats.length > 0 ? heroStats : undefined,
    overview: overview || undefined,
    capabilities: capabilities || undefined,
    process: processSteps || undefined,
    faq: faqMap[slug] || undefined,
    relatedServices: crossMap[slug] && crossMap[slug].length > 0 ? {
      eyebrow: 'Connected Disciplines',
      title: 'Related Services',
      items: crossMap[slug]
    } : undefined,
    meta: {
      title: titleMatch ? titleMatch[1] : heroTitle,
      description: descMatch ? descMatch[1] : heroSubtitle,
      alternates: { canonical: canonicalMatch ? canonicalMatch[1] : `/service/${slug}/` },
      openGraph: {
        title: titleMatch ? titleMatch[1] : heroTitle,
        description: descMatch ? descMatch[1] : heroSubtitle,
        url: `/service/${slug}/`,
        images: [{ url: '/og-default.png', width: 1200, height: 630, alt: heroTitle }]
      },
      twitter: {
        card: 'summary_large_image',
        title: titleMatch ? titleMatch[1] : heroTitle,
        description: descMatch ? descMatch[1] : heroSubtitle,
        images: [{ url: '/og-default.png', width: 1200, height: 630, alt: heroTitle }]
      },
      keywords
    },
    jsonLd: {
      serviceType: sjType,
      description: sjDesc || heroSubtitle,
      areaServed: sjArea
    }
  };
}

console.log(`Successfully parsed ${Object.keys(serviceResults).length} services.`);
const missingOverview = Object.entries(serviceResults).filter(([k, v]) => !v.overview);
const missingCaps = Object.entries(serviceResults).filter(([k, v]) => !v.capabilities);
console.log('Missing overview:', missingOverview.map(e => e[0]));
console.log('Missing capabilities:', missingCaps.map(e => e[0]));

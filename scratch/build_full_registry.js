const fs = require('fs');
const path = require('path');

const legacyDir = path.join(process.cwd(), 'app', '(legacy)', 'service');
const slugs = fs.readdirSync(legacyDir).filter(f => fs.statSync(path.join(legacyDir, f)).isDirectory() && f !== 'page');

let faqRaw = fs.readFileSync('lib/serviceFaqData.ts', 'utf8');
faqRaw = faqRaw.replace(/^export\s+type[^\n]+;/m, '');
faqRaw = faqRaw.replace(/export\s+const\s+serviceFaqData[^{]+/, 'module.exports = ');
fs.writeFileSync('scratch/faq_temp.cjs', faqRaw);
const faqMap = require('./faq_temp.cjs');

let crossRaw = fs.readFileSync('lib/serviceCrossLinks.ts', 'utf8');
crossRaw = crossRaw.replace(/^export\s+type[^\n]+;/m, '');
crossRaw = crossRaw.replace(/export\s+const\s+serviceCrossLinks[^{]+/, 'module.exports = ');
fs.writeFileSync('scratch/cross_temp.cjs', crossRaw);
const crossMap = require('./cross_temp.cjs');

const registry = {};

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

  // Find imported components
  const compImports = [...pageSrc.matchAll(/import\s+(\w+)\s+from\s+["']([^"']+)["']/g)];
  let heroFile = null;
  let contentFiles = [];

  for (const [, name, relPath] of compImports) {
    const fullPath = path.join(process.cwd(), relPath.replace(/^@\//, '') + '.tsx');
    if (fs.existsSync(fullPath)) {
      if (/Hero/i.test(name)) heroFile = fullPath;
      else if (!relPath.includes('schema') && !relPath.includes('lucide') && !relPath.includes('serviceCross') && !relPath.includes('serviceFaq') && !relPath.includes('ServiceProcessSteps')) {
        contentFiles.push({ name, path: fullPath, src: fs.readFileSync(fullPath, 'utf8') });
      }
    }
  }

  // Hero Data
  let heroStats = [];
  let heroEyebrow = sjType;
  let heroTitle = titleMatch ? titleMatch[1] : '';
  let heroSubtitle = descMatch ? descMatch[1] : '';
  let heroImage = null;

  if (heroFile && fs.existsSync(heroFile)) {
    const heroSrc = fs.readFileSync(heroFile, 'utf8');

    // Stats
    const statsMatch = heroSrc.match(/const\s+STATS\s*(?::\s*[^=]+)?\s*=\s*\[([\s\S]*?)\];/);
    if (statsMatch) {
      const statItems = [...statsMatch[1].matchAll(/{\s*value:\s*["']([^"']+)["'],\s*label:\s*["']([^"']+)["']\s*}/g)];
      heroStats = statItems.map(s => ({ value: s[1], label: s[2] }));
    }

    // Eyebrow
    const ebMatch = heroSrc.match(/<span className="[^"]*(?:text-\[#0891B2\]|text-\[#e7212b\])[^"]*">([^<]+)<\/span>/);
    if (ebMatch) {
      heroEyebrow = ebMatch[1].replace(/&amp;/g, '&').trim();
    }

    // Title from H1
    const h1Match = heroSrc.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    if (h1Match) {
      let rawH1 = h1Match[1].replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/\{["']\s*["']\}/g, ' ').replace(/\s+/g, ' ').trim();
      if (rawH1) heroTitle = rawH1;
    }

    // Subtitle
    const subMatch = heroSrc.match(/<p className="[^"]*text-white\/[0-9]+[^"]*"[^>]*>([\s\S]*?)<\/p>/);
    if (subMatch && !subMatch[1].includes('{stat.label}')) {
      heroSubtitle = subMatch[1].replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/\{["']\s*["']\}/g, ' ').replace(/\s+/g, ' ').trim();
    }

    // Image
    const imgMatch = heroSrc.match(/<Image\s+src=["']([^"']+)["']\s+alt=["']([^"']+)["']/);
    if (imgMatch) {
      heroImage = { src: imgMatch[1], alt: imgMatch[2] };
    }
  } else if (slug === 'exterior-windows-doors-curtain-wall-testing') {
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

  // Overview Extraction
  let overview = null;
  for (const cf of contentFiles) {
    const cSrc = cf.src;

    // WhatWeDoSection check
    if (cSrc.includes('WhatWeDoSection')) {
      const headingM = cSrc.match(/heading=["']([^"']+)["']/);
      const paragraphsM = cSrc.match(/paragraphs={\[([\s\S]*?)\]}/);
      const imgM = cSrc.match(/imageSrc=["']([^"']+)["']/);
      const altM = cSrc.match(/imageAlt=["']([^"']+)["']/);
      const badgeTM = cSrc.match(/badgeTitle=["']([^"']+)["']/);
      const badgeSM = cSrc.match(/badgeSubtitle=["']([^"']+)["']/);
      const checklistM = cSrc.match(/checklist={(\w+)}/);

      let paras = [];
      if (paragraphsM) {
        paras = [...paragraphsM[1].matchAll(/["'`]([^"'`]+)["'`]/g)].map(m => m[1].replace(/&amp;/g, '&').trim()).filter(p => p.length > 20);
      }
      let checkItems = [];
      if (checklistM) {
        const arrName = checklistM[1];
        const arrMatch = cSrc.match(new RegExp(`const\\s+${arrName}\\s*(?::\\s*[^=]+)?\\s*=\\s*\\[([\\s\\S]*?)\\];`));
        if (arrMatch) {
          checkItems = [...arrMatch[1].matchAll(/["'`]([^"'`]+)["'`]/g)].map(m => m[1].replace(/&amp;/g, '&').trim());
        }
      }

      overview = {
        eyebrow: 'About This Service',
        heading: headingM ? headingM[1] : `Overview of ${heroTitle}`,
        paragraphs: paras.length > 0 ? paras : [heroSubtitle],
        checklist: checkItems.length > 0 ? checkItems : undefined,
        image: imgM ? { src: imgM[1], alt: altM ? altM[1] : heroTitle } : undefined,
        badge: badgeTM ? { title: badgeTM[1], subtitle: badgeSM ? badgeSM[1] : undefined } : undefined
      };
      break;
    }

    // Generic Overview Check
    const pMatches = [...cSrc.matchAll(/<p className="[^"]*text-gray-500[^"]*"[^>]*>([\s\S]*?)<\/p>/g)];
    const paras = pMatches.map(m => m[1].replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim()).filter(p => p.length > 30);
    if (paras.length > 0 && !overview) {
      const h2Match = cSrc.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
      overview = {
        eyebrow: 'About This Service',
        heading: h2Match ? h2Match[1].replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim() : `About ${heroTitle}`,
        paragraphs: paras
      };
    }
  }

  // Fallback overview for parent hubs if none found in content
  if (!overview && heroSubtitle) {
    overview = {
      eyebrow: 'Overview & Scope',
      heading: `Professional ${heroTitle} Services`,
      paragraphs: [
        heroSubtitle,
        `Texas Technical Services delivers certified engineering excellence across Kuwait and the GCC region, adhering to rigorous international standards and quality assurance protocols.`
      ]
    };
  }

  // Capabilities Extraction
  let capabilities = null;
  const allCardSources = [...contentFiles.map(c => ({ name: c.name, src: c.src })), { name: 'page', src: pageSrc }];

  for (const srcObj of allCardSources) {
    const src = srcObj.src;
    const arrayMatches = [...src.matchAll(/const\s+([A-Za-z0-9_]+)\s*(?::\s*[^=]+)?\s*=\s*(\[[\s\S]*?\n\];)/g)];
    for (const [m, name, arrText] of arrayMatches) {
      if (['STATS', 'PARTS', 'BREADCRUMBS'].includes(name)) continue;
      const objBlocks = [...arrText.matchAll(/\{([^{}]+)\}/g)];
      const items = [];
      for (const [b, inner] of objBlocks) {
        const titleM = inner.match(/title:\s*["'`]([^"'`]+)["'`]/);
        const descM = inner.match(/(?:body|desc|description):\s*["'`]([^"'`]+)["'`]/);
        const hrefM = inner.match(/href:\s*["'`]([^"'`]+)["'`]/);
        const iconM = inner.match(/(?:Icon|icon):\s*([A-Za-z0-9_]+)/);

        if (titleM && (descM || hrefM)) {
          items.push({
            title: titleM[1].replace(/&amp;/g, '&'),
            description: descM ? descM[1].replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ') : '',
            href: hrefM ? hrefM[1] : undefined,
            iconName: iconM && iconM[1] !== 'item' && iconM[1] !== 's' && iconM[1] !== 'card' ? iconM[1] : undefined
          });
        }
      }

      if (items.length > 0 && !capabilities) {
        // Try finding H2 near this array
        const h2Match = src.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
        capabilities = {
          eyebrow: 'Capabilities',
          title: h2Match ? h2Match[1].replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim() : `${heroTitle} Scope & Capabilities`,
          items
        };
        break;
      }
    }
    if (capabilities) break;
  }

  // Process Steps Extraction
  let processSteps = null;
  const procMatch = pageSrc.match(/<ServiceProcessSteps([\s\S]*?)\/>/);
  if (procMatch) {
    const procBody = procMatch[1];
    const pTitleMatch = procBody.match(/title=["']([^"']+)["']/);
    const stepBlocks = [...procBody.matchAll(/{\s*name:\s*["']([^"']+)["'],\s*description:\s*["']([^"']+)["']\s*}/g)];
    if (stepBlocks.length > 0) {
      processSteps = {
        title: pTitleMatch ? pTitleMatch[1] : 'Our Methodology',
        steps: stepBlocks.map((s, idx) => ({
          stepNumber: idx + 1,
          title: s[1].replace(/&amp;/g, '&'),
          description: s[2].replace(/&amp;/g, '&')
        }))
      };
    }
  }

  // Related Services
  const relItems = crossMap[slug];
  const relatedServices = relItems && relItems.length > 0 ? {
    eyebrow: 'Connected Disciplines',
    title: 'Related Services',
    items: relItems
  } : undefined;

  // FAQ
  const faqItems = faqMap[slug];

  registry[slug] = {
    slug,
    category: heroEyebrow,
    title: heroTitle,
    subtitle: heroSubtitle,
    breadcrumbs: breadcrumbs.length > 0 ? breadcrumbs : [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services/' },
      { label: heroTitle }
    ],
    primaryCta: {
      label: 'Consult Engineering Team',
      href: '/contacts/'
    },
    secondaryCta: {
      label: 'Explore All Services',
      href: '/services/'
    },
    heroImage: heroImage || undefined,
    stats: heroStats.length > 0 ? heroStats : undefined,
    overview: overview || undefined,
    capabilities: capabilities || undefined,
    process: processSteps || undefined,
    faq: faqItems && faqItems.length > 0 ? faqItems : undefined,
    relatedServices,
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

fs.writeFileSync(path.join(process.cwd(), 'lib', 'services', 'registry-data.json'), JSON.stringify(registry, null, 2));
console.log(`Successfully generated registry for ${Object.keys(registry).length} services in lib/services/registry-data.json!`);

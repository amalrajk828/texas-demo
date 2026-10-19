import fs from 'fs';

const raw = fs.readFileSync('./lib/services/registry-data.json', 'utf8');
const lines = raw.split('\n');

const data = JSON.parse(raw);
const tableRows = [];

// Helper to find line number in registry-data.json
function findLineNumber(slug, keyPath, val) {
  let insideSlug = false;
  let slugLine = -1;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes(`"${slug}": {`)) {
      insideSlug = true;
      slugLine = i + 1;
      continue;
    }
    if (insideSlug) {
      if (line.startsWith('  },') || (line.startsWith('  "') && !line.includes(`"${slug}"`))) {
        insideSlug = false;
        continue;
      }
      if (line.includes(val) || (typeof val === 'string' && val.includes('{" "}') && line.includes('{\\" \\"}'))) {
        return i + 1;
      }
    }
  }
  return slugLine > 0 ? slugLine : 1;
}

for (const [slug, item] of Object.entries(data)) {
  const route = `/service/${slug}/`;

  // 1. Title
  if (item.title && (item.title.includes('{" "}') || item.title.includes("{' '}"))) {
    const line = findLineNumber(slug, 'title', item.title);
    tableRows.push({
      route,
      element: '<title>, <h1>, <h2> (FAQ), JSON-LD (name)',
      brokenText: item.title,
      sourceFile: `lib/services/registry-data.json:${line}`,
      cause: 'Legacy TSX hero H1 (<h1...>{title}{" "}<em...>) had HTML tags stripped by regex in scratch/build_full_registry.js without evaluating or removing {" "}'
    });
  }

  // 2. Subtitle / {stat.label}
  if (item.subtitle && (item.subtitle.includes('{stat.label}') || item.subtitle.includes('{" "}'))) {
    const line = findLineNumber(slug, 'subtitle', item.subtitle);
    tableRows.push({
      route,
      element: 'PageHero subtitle / <p>',
      brokenText: item.subtitle,
      sourceFile: `lib/services/registry-data.json:${line}`,
      cause: 'scratch/build_full_registry.js regex for subtitle (<p className="[^"]*text-white/[0-9]+[^"]*"[^>]*>) matched stats item <p>{stat.label}</p> instead of the hero description paragraph'
    });
  }

  // 3. OpenGraph / Twitter Image Alt
  const ogAlt = item.meta?.openGraph?.images?.[0]?.alt;
  if (ogAlt && ogAlt.includes('{" "}')) {
    const line = findLineNumber(slug, 'alt', ogAlt);
    tableRows.push({
      route,
      element: '<meta property="og:image:alt">, <meta name="twitter:image:alt">',
      brokenText: ogAlt,
      sourceFile: `lib/services/registry-data.json:${line}`,
      cause: 'OpenGraph/Twitter image alt tag was populated from the malformed title string containing {" "}'
    });
  }

  // 4. Overview paragraphs or headings
  if (item.overview) {
    if (item.overview.heading && item.overview.heading.includes('{" "}')) {
      const line = findLineNumber(slug, 'heading', item.overview.heading);
      tableRows.push({
        route,
        element: 'Overview <h2> SectionHeading',
        brokenText: item.overview.heading,
        sourceFile: `lib/services/registry-data.json:${line}`,
        cause: 'Overview heading extracted from legacy component with raw {" "}'
      });
    }
    if (Array.isArray(item.overview.paragraphs)) {
      item.overview.paragraphs.forEach((p, pIdx) => {
        if (p.includes('{" "}')) {
          const line = findLineNumber(slug, 'paragraphs', p);
          tableRows.push({
            route,
            element: `Overview paragraph [${pIdx}]`,
            brokenText: p,
            sourceFile: `lib/services/registry-data.json:${line}`,
            cause: 'Paragraph string contains raw {" "} instead of space'
          });
        }
      });
    }
  }
}

fs.writeFileSync('scratch/diagnosis_table.json', JSON.stringify(tableRows, null, 2));
console.log(`Generated diagnosis table with ${tableRows.length} broken cases across ${new Set(tableRows.map(r => r.route)).size} routes.`);

// Print markdown table
console.log('\n| Route | Element | Broken Text | Source File & Line | Cause |');
console.log('|---|---|---|---|---|');
for (const r of tableRows) {
  console.log(`| \`${r.route}\` | \`${r.element}\` | \`${r.brokenText}\` | [${r.sourceFile.split(':')[0]}#L${r.sourceFile.split(':')[1]}](file:///${r.sourceFile.replace(':', '#L')}) | ${r.cause} |`);
}

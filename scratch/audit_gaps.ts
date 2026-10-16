import fs from 'fs';
import sitemap from '../app/sitemap';

interface RouteItem {
  url: string;
  filePath: string;
  group: 'v3' | 'legacy' | 'root';
  designStatus: 'NEW design' | 'old';
  type: 'page' | 'dynamic' | 'redirect';
  title: string;
  inSitemap: boolean;
  existsOnLive: boolean;
  liveStatus: 'MATCH' | 'ONLY-NEW';
  section: 'Main' | 'Services' | 'Industries' | 'Products' | 'Blog' | 'Other';
}

const routes: RouteItem[] = JSON.parse(fs.readFileSync('scratch/resolved_routes.json', 'utf8'));
const routeUrlMap = new Map<string, RouteItem>(routes.map(r => [r.url, r]));

const sitemapEntries = sitemap();
const sitemapUrls = sitemapEntries.map(e => e.url);
const sitemapPathSet = new Set(sitemapUrls.map(u => {
  try {
    let p = new URL(u).pathname;
    if (!p.endsWith('/')) p += '/';
    return p;
  } catch {
    return u;
  }
}));

// 1. Routes missing from sitemap
const routesMissingFromSitemap = routes.filter(r => !sitemapPathSet.has(r.url));
console.log(`Routes missing from sitemap: ${routesMissingFromSitemap.length}`);
routesMissingFromSitemap.forEach(r => console.log(' - Missing from sitemap:', r.url, `(${r.filePath})`));

// 2. Sitemap URLs with NO route
const sitemapUrlsWithoutRoute = Array.from(sitemapPathSet).filter(p => !routeUrlMap.has(p));
console.log(`Sitemap URLs with NO route: ${sitemapUrlsWithoutRoute.length}`);
sitemapUrlsWithoutRoute.forEach(p => console.log(' - Sitemap URL without route:', p));

// 3. Duplicate or near-duplicate routes (slugs ending in -2, duplicate names, etc.)
const dash2Routes = routes.filter(r => r.url.includes('-2/'));
console.log(`Routes ending in -2: ${dash2Routes.length}`);
dash2Routes.forEach(r => console.log(' - Dash 2 route:', r.url));

// Legacy duplicate pages (about vs about-us, contact vs contacts)
const aliasPairs = [
  { legacy: '/about/', v3: '/about-us/' },
  { legacy: '/contact/', v3: '/contacts/' },
  { legacy: '/services_group/services/flow-measurement-solutions/', v3: '/service/flow-measurement-solutions/' },
  { legacy: '/services_group/services/industrial-automation/', v3: '/service/industrial-automation/' },
  { legacy: '/services_group/services/inspection-testing/', v3: '/service/inspection-testing/' },
];

fs.writeFileSync('scratch/gaps_summary.json', JSON.stringify({
  routesMissingFromSitemap: routesMissingFromSitemap.map(r => ({ url: r.url, file: r.filePath, group: r.group })),
  sitemapUrlsWithoutRoute,
  dash2Routes: dash2Routes.map(r => ({ url: r.url, file: r.filePath })),
  aliasPairs,
}, null, 2));

console.log('Saved scratch/gaps_summary.json');

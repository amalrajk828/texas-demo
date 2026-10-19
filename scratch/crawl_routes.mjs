import fs from 'fs';

// Patterns to detect raw JSX or template code leaking into rendered output
const CODE_PATTERNS = [
  { name: '{" "}', regex: /\{["']\s*["']\}|\{&quot;\s*&quot;\}|&#123;&quot;\s*&quot;&#125;/ },
  { name: '{` or ${', regex: /\{`|\$\{[a-zA-Z0-9_.]+\}/ },
  { name: '{stat.', regex: /\{stat\.[^}]+\}/ },
  { name: '{item.', regex: /\{item\.[^}]+\}/ },
  { name: '{props.', regex: /\{props\.[^}]+\}/ },
  { name: '{children}', regex: /\{children\}/ },
  { name: '{title}', regex: /\{title\}/ },
  { name: '{identifier.property}', regex: /\{[A-Za-z_][a-zA-Z0-9_]*\.[a-zA-Z0-9_.[\]'"]+\}/ },
  { name: 'ow Computer', regex: /\bow Computer\b/i },
  { name: 'raw \\n or \\u', regex: /(?:[^\\]|^)\\(?:n|u[0-9a-fA-F]{4})/ },
];

// Helper to remove <script> and <style> tags before scanning visible text
function cleanHtml(html) {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
}

const routes = JSON.parse(fs.readFileSync('./scratch/all_v3_routes.json', 'utf8'));

// Also include key base routes if not present
const baseRoutes = ['/', '/about-us/', '/services/', '/industries/', '/products/', '/clients/', '/certifications/', '/contacts/', '/portfolio/'];
for (const b of baseRoutes) {
  if (!routes.includes(b)) routes.unshift(b);
}

const results = [];

console.log(`Starting crawl of ${routes.length} routes on http://localhost:3000...`);

for (let i = 0; i < routes.length; i++) {
  const r = routes[i];
  const url = `http://localhost:3000${r}`;
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 CrawlChecker' } });
    if (!res.ok) {
      console.warn(`[${res.status}] ${r}`);
      continue;
    }
    const html = await res.text();

    // 1. Check <title>
    const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    if (titleMatch) {
      const text = titleMatch[1];
      for (const pat of CODE_PATTERNS) {
        if (pat.regex.test(text)) {
          results.push({ route: r, element: '<title>', brokenText: text.trim(), pattern: pat.name });
        }
      }
    }

    // 2. Check meta tags
    const metaMatches = [...html.matchAll(/<meta\s+[^>]*content=["']([^"']+)["'][^>]*>/gi)];
    for (const m of metaMatches) {
      const text = m[1];
      for (const pat of CODE_PATTERNS) {
        if (pat.regex.test(text)) {
          results.push({ route: r, element: '<meta content>', brokenText: text.trim(), pattern: pat.name });
        }
      }
    }

    // 3. Check headings (h1, h2, h3, h4, h5, h6)
    const headingMatches = [...html.matchAll(/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi)];
    for (const h of headingMatches) {
      const tag = h[1];
      const text = h[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      for (const pat of CODE_PATTERNS) {
        if (pat.regex.test(text)) {
          results.push({ route: r, element: `<${tag}>`, brokenText: text, pattern: pat.name });
        }
      }
    }

    // 4. Check attributes (alt, aria-label, placeholder, title)
    const attrMatches = [...html.matchAll(/\s(alt|aria-label|placeholder|title)=["']([^"']+)["']/gi)];
    for (const a of attrMatches) {
      const attrName = a[1];
      const val = a[2];
      for (const pat of CODE_PATTERNS) {
        if (pat.regex.test(val)) {
          results.push({ route: r, element: `attribute [${attrName}]`, brokenText: val, pattern: pat.name });
        }
      }
    }

    // 5. Check visible text in paragraphs and divs (outside scripts)
    const cleaned = cleanHtml(html);
    const pMatches = [...cleaned.matchAll(/<(p|div|span|li|td)[^>]*>([\s\S]*?)<\/\1>/gi)];
    for (const pm of pMatches) {
      const text = pm[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      for (const pat of CODE_PATTERNS) {
        if (pat.regex.test(text)) {
          // Avoid duplicate reporting if already covered in headings
          results.push({ route: r, element: `<${pm[1]}>`, brokenText: text.slice(0, 200), pattern: pat.name });
        }
      }
    }

    // 6. Check JSON-LD values
    const jsonLdMatches = [...html.matchAll(/<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
    for (const jm of jsonLdMatches) {
      try {
        const parsed = JSON.parse(jm[1]);
        const checkJson = (obj, p = '') => {
          if (!obj) return;
          if (typeof obj === 'string') {
            for (const pat of CODE_PATTERNS) {
              if (pat.regex.test(obj)) {
                results.push({ route: r, element: `JSON-LD (${p})`, brokenText: obj, pattern: pat.name });
              }
            }
          } else if (Array.isArray(obj)) {
            obj.forEach((it, idx) => checkJson(it, `${p}[${idx}]`));
          } else if (typeof obj === 'object') {
            for (const [k, v] of Object.entries(obj)) checkJson(v, `${p}.${k}`);
          }
        };
        checkJson(parsed, 'jsonLd');
      } catch (e) {}
    }

    if ((i + 1) % 20 === 0 || i === routes.length - 1) {
      console.log(`Crawled ${i + 1}/${routes.length} routes... (found ${results.length} issues so far)`);
    }
  } catch (err) {
    console.error(`Error crawling ${r}:`, err.message);
  }
}

// Deduplicate findings by (route + element + brokenText)
const seen = new Set();
const unique = [];
for (const item of results) {
  const key = `${item.route}|${item.element}|${item.brokenText}`;
  if (!seen.has(key)) {
    seen.add(key);
    unique.push(item);
  }
}

console.log(`\nCrawl complete. Found ${unique.length} unique occurrences of raw code across routes.`);
fs.writeFileSync('scratch/crawled_issues.json', JSON.stringify(unique, null, 2));


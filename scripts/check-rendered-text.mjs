import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';

// Code patterns that should never leak into rendered HTML, visible text, or DOM attributes
const CODE_PATTERNS = [
  { name: '{" "} or {\' \'}', regex: /\{["']\s*["']\}|\{&quot;\s*&quot;\}|&#123;&quot;\s*&quot;&#125;/ },
  { name: '{` or ${', regex: /\{`|\$\{[a-zA-Z0-9_.]+\}/ },
  { name: '{stat.', regex: /\{stat\.[^}]+\}/ },
  { name: '{item.', regex: /\{item\.[^}]+\}/ },
  { name: '{props.', regex: /\{props\.[^}]+\}/ },
  { name: '{children}', regex: /\{children\}/ },
  { name: '{title}', regex: /\{title\}/ },
  { name: '{identifier.property}', regex: /\{[A-Za-z_][a-zA-Z0-9_]*\.[a-zA-Z0-9_.[\]'"]+\}/ },
  { name: 'ow Computer', regex: /\bow Computer\b/i },
];

function cleanHtml(html) {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
}

// 1. Gather all routes
const routes = new Set([
  '/',
  '/about-us/',
  '/services/',
  '/industries/',
  '/products/',
  '/clients/',
  '/certifications/',
  '/contacts/',
  '/portfolio/',
  '/service/flow-measurement-solutions/',
  '/service/inspection-testing/',
  '/service/industrial-automation/',
]);

// Read registry-data.json
const registryPath = path.join(process.cwd(), 'lib', 'services', 'registry-data.json');
if (fs.existsSync(registryPath)) {
  const reg = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
  for (const slug of Object.keys(reg)) {
    routes.add(`/service/${slug}/`);
  }
}

// Add industries
const industries = ['oil-gas', 'refinery', 'petrochemicals', 'power-plant', 'lng', 'water-treatment', 'cement', 'metal-steel'];
for (const ind of industries) routes.add(`/industries/${ind}/`);

// Add solutions
const solutions = ['texaflow', 'space-ai', 'mitsubishi-electric', 'pws-floor-solutions'];
for (const sol of solutions) routes.add(`/solutions/${sol}/`);

const routeList = Array.from(routes);

// Server check / auto-start
const baseUrl = 'http://localhost:3000';

async function isServerUp() {
  try {
    const res = await fetch(baseUrl, { signal: AbortSignal.timeout(2000) });
    return res.status < 500;
  } catch {
    return false;
  }
}

let spawnedChild = null;

if (!(await isServerUp())) {
  console.log('Server not currently running on http://localhost:3000. Launching Next.js dev server...');
  spawnedChild = spawn(process.platform === 'win32' ? 'npx.cmd' : 'npx', ['next', 'dev', '-p', '3000', '--webpack'], {
    stdio: 'ignore',
    shell: true,
  });

  const startTime = Date.now();
  let ready = false;
  while (Date.now() - startTime < 60000) {
    await new Promise((r) => setTimeout(r, 2000));
    if (await isServerUp()) {
      ready = true;
      console.log('Server is now ready on http://localhost:3000!');
      break;
    }
  }

  if (!ready) {
    console.error('Failed to start server within 60s timeout.');
    if (spawnedChild && process.platform === 'win32') {
      spawn('taskkill', ['/pid', String(spawnedChild.pid), '/f', '/t']);
    }
    process.exit(1);
  }
} else {
  console.log('Connected to running server on http://localhost:3000.');
}

console.log(`Checking rendered text across ${routeList.length} routes...`);

const violations = [];
const CONCURRENCY = 4;
let currentIndex = 0;
let completedCount = 0;

async function checkRoute(r) {
  try {
    const res = await fetch(`${baseUrl}${r}`, {
      headers: { 'User-Agent': 'TexasCheckRenderedText/1.0' },
      signal: AbortSignal.timeout(12000),
    });
    if (!res.ok) return;

    const html = await res.text();

    // 1. Check title
    const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    if (titleMatch) {
      for (const pat of CODE_PATTERNS) {
        if (pat.regex.test(titleMatch[1])) {
          violations.push({ route: r, element: '<title>', brokenText: titleMatch[1].trim(), pattern: pat.name });
        }
      }
    }

    // 2. Check meta tags
    const metaMatches = [...html.matchAll(/<meta\s+[^>]*content=["']([^"']+)["'][^>]*>/gi)];
    for (const m of metaMatches) {
      for (const pat of CODE_PATTERNS) {
        if (pat.regex.test(m[1])) {
          violations.push({ route: r, element: '<meta content>', brokenText: m[1].trim(), pattern: pat.name });
        }
      }
    }

    // 3. Check headings
    const headingMatches = [...html.matchAll(/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi)];
    for (const h of headingMatches) {
      const text = h[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      for (const pat of CODE_PATTERNS) {
        if (pat.regex.test(text)) {
          violations.push({ route: r, element: `<${h[1]}>`, brokenText: text, pattern: pat.name });
        }
      }
    }

    // 4. Check attributes
    const attrMatches = [...html.matchAll(/\s(alt|aria-label|placeholder|title)=["']([^"']+)["']/gi)];
    for (const a of attrMatches) {
      for (const pat of CODE_PATTERNS) {
        if (pat.regex.test(a[2])) {
          violations.push({ route: r, element: `attribute [${a[1]}]`, brokenText: a[2], pattern: pat.name });
        }
      }
    }

    // 5. Check visible body text
    const cleaned = cleanHtml(html);
    const textMatches = [...cleaned.matchAll(/<(p|div|span|li|td)[^>]*>([\s\S]*?)<\/\1>/gi)];
    for (const tm of textMatches) {
      const text = tm[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      for (const pat of CODE_PATTERNS) {
        if (pat.regex.test(text)) {
          violations.push({ route: r, element: `<${tm[1]}>`, brokenText: text.slice(0, 150), pattern: pat.name });
        }
      }
    }

    // 6. Check JSON-LD
    const jsonLdMatches = [...html.matchAll(/<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
    for (const jm of jsonLdMatches) {
      try {
        const parsed = JSON.parse(jm[1]);
        const checkJson = (obj, p = '') => {
          if (!obj) return;
          if (typeof obj === 'string') {
            for (const pat of CODE_PATTERNS) {
              if (pat.regex.test(obj)) {
                violations.push({ route: r, element: `JSON-LD (${p})`, brokenText: obj, pattern: pat.name });
              }
            }
          } else if (Array.isArray(obj)) {
            obj.forEach((it, idx) => checkJson(it, `${p}[${idx}]`));
          } else if (typeof obj === 'object') {
            for (const [k, v] of Object.entries(obj)) checkJson(v, `${p}.${k}`);
          }
        };
        checkJson(parsed, 'jsonLd');
      } catch {}
    }
  } catch {
    // ignore transient timeout
  } finally {
    completedCount++;
    if (completedCount % 20 === 0 || completedCount === routeList.length) {
      console.log(`Progress: ${completedCount}/${routeList.length} routes scanned...`);
    }
  }
}

async function worker() {
  while (currentIndex < routeList.length) {
    const idx = currentIndex++;
    await checkRoute(routeList[idx]);
  }
}

const workers = Array.from({ length: CONCURRENCY }, () => worker());
await Promise.all(workers);

if (spawnedChild) {
  console.log('Shutting down temporary test server...');
  if (process.platform === 'win32') {
    try { spawn('taskkill', ['/pid', String(spawnedChild.pid), '/f', '/t']); } catch {}
  } else {
    spawnedChild.kill('SIGTERM');
  }
}

// Deduplicate
const seen = new Set();
const uniqueViolations = [];
for (const v of violations) {
  const key = `${v.route}|${v.element}|${v.brokenText}`;
  if (!seen.has(key)) {
    seen.add(key);
    uniqueViolations.push(v);
  }
}

if (uniqueViolations.length > 0) {
  console.error(`\n❌ FAIL: Found ${uniqueViolations.length} raw code patterns in rendered HTML/attributes:\n`);
  console.table(uniqueViolations);
  process.exit(1);
} else {
  console.log(`\n✅ PASS: No raw code or broken patterns found across all ${routeList.length} routes!`);
  process.exit(0);
}

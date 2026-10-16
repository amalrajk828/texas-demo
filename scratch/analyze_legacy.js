const fs = require('fs');
const path = require('path');

const legacyDir = path.join(process.cwd(), 'app', '(legacy)', 'service');
const dirs = fs.readdirSync(legacyDir).filter(f => fs.statSync(path.join(legacyDir, f)).isDirectory() && f !== 'page');

const summary = dirs.map(d => {
  const p = path.join(legacyDir, d, 'page.tsx');
  if (!fs.existsSync(p)) return { dir: d, hasPage: false };
  const content = fs.readFileSync(p, 'utf8');
  const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
  const descMatch = content.match(/description:\s*["']([^"']+)["']/);
  const components = [...content.matchAll(/import\s+([A-Za-z0-9_{},\s*]+)\s+from\s+["']([^"']+)["']/g)]
    .map(m => m[2])
    .filter(s => s.startsWith('@/components/service/') || s.startsWith('@/components/services_group/'));
  return { dir: d, title: titleMatch ? titleMatch[1] : '', components };
});

console.log(JSON.stringify(summary, null, 2));

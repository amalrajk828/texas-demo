import fs from 'fs';
import path from 'path';

function walk(d) {
  if (!fs.existsSync(d)) return;
  for (const f of fs.readdirSync(d)) {
    const full = path.join(d, f);
    if (fs.statSync(full).isDirectory()) walk(full);
    else if (full.endsWith('.tsx') || full.endsWith('.ts')) {
      const src = fs.readFileSync(full, 'utf8');
      const lines = src.split('\n');
      lines.forEach((l, idx) => {
        if (l.includes('"{" "}"') || l.includes("'{\" \"}'") || (l.includes('{" "}') && (l.includes(': "') || l.includes(": '")))) {
          console.log(`${full}:${idx+1}`, l.trim());
        }
      });
    }
  }
}
walk('components/v3');
walk('app/(v3)');
console.log('Check finished.');

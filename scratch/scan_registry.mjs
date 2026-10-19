import fs from 'fs';

const raw = fs.readFileSync('./lib/services/registry-data.json', 'utf8');
const data = JSON.parse(raw);

const results = [];

function checkObject(obj, path = '') {
  if (!obj) return;
  if (typeof obj === 'string') {
    if (obj.includes('{" "}') || obj.includes("{' '}") || /\{[a-zA-Z_0-9.[\]'"]+\}/.test(obj) || obj.includes('&quot;') || obj.includes('&lt;') || obj.includes('&gt;') || obj.includes('${')) {
      results.push({ path, value: obj });
    }
  } else if (Array.isArray(obj)) {
    obj.forEach((item, idx) => checkObject(item, `${path}[${idx}]`));
  } else if (typeof obj === 'object') {
    for (const [key, val] of Object.entries(obj)) {
      checkObject(val, `${path}.${key}`);
    }
  }
}

checkObject(data, 'registry');
console.log('Total count:', results.length);
const grouped = {};
for (const r of results) {
  const slug = r.path.split('.')[1] || 'general';
  grouped[slug] = grouped[slug] || [];
  grouped[slug].push(r);
}
console.log('Services affected:', Object.keys(grouped).length);
for (const [slug, items] of Object.entries(grouped)) {
  console.log(`\n=== ${slug} (${items.length} items) ===`);
  for (const item of items) {
    console.log(`  ${item.path}: "${item.value}"`);
  }
}

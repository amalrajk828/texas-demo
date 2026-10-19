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

fs.writeFileSync('scratch/registry_broken_entries.json', JSON.stringify(results, null, 2));
console.log(`Saved ${results.length} broken entries to scratch/registry_broken_entries.json`);

// Check which services have {stat.label}
const statLabelServices = results.filter(r => r.value.includes('{stat.label}'));
console.log('\nServices with {stat.label}:');
for (const s of statLabelServices) {
  console.log(' -', s.path);
}

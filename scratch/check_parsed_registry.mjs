import fs from 'fs';

const jsonContent = fs.readFileSync('lib/services/registry-data.json', 'utf8');
const data = JSON.parse(jsonContent);

let countTitle = 0;
let countAlt = 0;
let countSubtitle = 0;
let countOverview = 0;
let countOther = 0;

for (const [slug, item] of Object.entries(data)) {
  if (item.title && item.title.includes('{" "}')) countTitle++;
  if (item.subtitle && item.subtitle.includes('{" "}')) countSubtitle++;
  if (item.subtitle && item.subtitle.includes('{stat.label}')) countOther++;
  if (item.overview && JSON.stringify(item.overview).includes('{" "}')) countOverview++;
  if (item.meta && JSON.stringify(item.meta).includes('{" "}')) countAlt++;
}

console.log('Services with {" "} in title:', countTitle);
console.log('Services with {" "} in meta (OG/Twitter/alt):', countAlt);
console.log('Services with {stat.label} in subtitle:', countOther);
console.log('Services with {" "} in overview:', countOverview);

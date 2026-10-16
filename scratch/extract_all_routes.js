const fs = require('fs');
const path = require('path');

// 1. Read registry-data.json
let serviceSlugs = [];
try {
  const reg = JSON.parse(fs.readFileSync('./lib/services/registry-data.json', 'utf8'));
  serviceSlugs = Object.keys(reg.services || reg);
} catch (e) {
  console.error('Error reading services:', e.message);
}

// 2. Read partners.ts
let partnerSlugs = [];
try {
  const partnersContent = fs.readFileSync('./lib/partners.ts', 'utf8');
  const matches = partnersContent.matchAll(/slug:\s*["']([^"']+)["']/g);
  partnerSlugs = [...new Set([...matches].map(m => m[1]))];
} catch (e) {
  console.error('Error reading partners:', e.message);
}

// 3. Read products.ts
let productSlugs = [];
try {
  const productsContent = fs.readFileSync('./lib/products.ts', 'utf8');
  const matches = productsContent.matchAll(/slug:\s*["']([^"']+)["']/g);
  productSlugs = [...new Set([...matches].map(m => m[1]))];
} catch (e) {
  console.error('Error reading products:', e.message);
}

// 4. Read blogArticles.ts
let blogSlugs = [];
try {
  const blogContent = fs.readFileSync('./lib/blogArticles.ts', 'utf8');
  const matches = blogContent.matchAll(/["']([a-zA-Z0-9_-]+)["']:\s*\{\s*title:/g);
  blogSlugs = [...new Set([...matches].map(m => m[1]))];
} catch (e) {
  console.error('Error reading blogs:', e.message);
}

console.log(JSON.stringify({
  serviceSlugs,
  partnerSlugs,
  productSlugs,
  blogSlugs
}, null, 2));

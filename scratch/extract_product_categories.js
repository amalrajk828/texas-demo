const fs = require('fs');
const path = require('path');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(file));
    } else if (file.endsWith('page.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = getFiles('app/(legacy)/products');
const categories = {};

files.forEach(f => {
  const rel = f.replace(/\\/g, '/').replace('app/(legacy)/products/', '').replace('/page.tsx', '');
  const content = fs.readFileSync(f, 'utf8');
  
  const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
  const descMatch = content.match(/description:\s*["']([^"']+)["']/);
  const eyebrowMatch = content.match(/eyebrow=["']([^"']+)["']/);
  const heroTitleMatch = content.match(/title=["']([^"']+)["']/);
  const subtitleMatch = content.match(/subtitle=["']([^"']+)["']/);
  const keywordsMatch = content.match(/keywords:\s*(\[[^\]]+\])/);

  categories[rel] = {
    path: `/products/${rel}/`,
    slugs: rel.split('/'),
    metaTitle: titleMatch ? titleMatch[1] : '',
    metaDesc: descMatch ? descMatch[1] : '',
    eyebrow: eyebrowMatch ? eyebrowMatch[1] : 'Products',
    heroTitle: heroTitleMatch ? heroTitleMatch[1] : '',
    subtitle: subtitleMatch ? subtitleMatch[1] : '',
    keywords: keywordsMatch ? eval(keywordsMatch[1]) : []
  };
});

fs.writeFileSync('scratch/product_categories.json', JSON.stringify(categories, null, 2));
console.log('Extracted', Object.keys(categories).length, 'product categories.');
Object.keys(categories).forEach(k => console.log(k));

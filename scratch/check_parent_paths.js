const fs = require('fs');
const content = fs.readFileSync('lib/products.ts', 'utf8');
const paths = [...new Set([...content.matchAll(/parentPath:\s*["']([^"']+)["']/g)].map(m => m[1]))];
console.log('Unique parentPaths in lib/products.ts:');
paths.forEach(p => console.log(p));

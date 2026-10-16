const fs = require('fs');
const path = require('path');

const dir = 'app/(legacy)/industries';
const slugs = fs.readdirSync(dir);
const result = {};

slugs.forEach(s => {
  const filePath = path.join(dir, s, 'page.tsx');
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract title, description, keywords
    const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
    const descMatch = content.match(/description:\s*["']([^"']+)["']/);
    
    // Extract IndustryHero props
    const nameMatch = content.match(/name=["']([^"']+)["']/);
    const imageMatch = content.match(/image=["']([^"']+)["']/);
    const heroDescMatch = content.match(/description=["']([^"']+)["']/);
    
    // Extract products array
    const productsMatch = content.match(/const products: IndustryProduct\[\] = (\[[\s\S]*?\]);/);
    let products = [];
    if (productsMatch) {
      try {
        products = eval(productsMatch[1]);
      } catch (e) {
        console.error('Error parsing products for', s, e.message);
      }
    }
    
    result[s] = {
      slug: s,
      metaTitle: titleMatch ? titleMatch[1] : '',
      metaDesc: descMatch ? descMatch[1] : '',
      name: nameMatch ? nameMatch[1] : s,
      image: imageMatch ? imageMatch[1] : '',
      heroDesc: heroDescMatch ? heroDescMatch[1] : '',
      productCount: products.length,
      products: products
    };
  }
});

fs.writeFileSync('scratch/industries_data.json', JSON.stringify(result, null, 2));
console.log('Successfully extracted', Object.keys(result).length, 'industries.');
Object.keys(result).forEach(k => {
  console.log(k, ':', result[k].name, '| Products:', result[k].productCount, '| Image:', result[k].image);
});

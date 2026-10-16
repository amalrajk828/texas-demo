const fs = require('fs');

let faqRaw = fs.readFileSync('lib/serviceFaqData.ts', 'utf8');
faqRaw = faqRaw.replace(/^export\s+type[^\n]+;/m, '');
faqRaw = faqRaw.replace(/export\s+const\s+serviceFaqData[^{]+/, 'module.exports = ');
fs.writeFileSync('scratch/faq_temp.cjs', faqRaw);
const faqData = require('./faq_temp.cjs');
console.log('Successfully loaded FAQs for slugs:', Object.keys(faqData).length);

let crossRaw = fs.readFileSync('lib/serviceCrossLinks.ts', 'utf8');
crossRaw = crossRaw.replace(/^export\s+type[^\n]+;/m, '');
crossRaw = crossRaw.replace(/export\s+const\s+serviceCrossLinks[^{]+/, 'module.exports = ');
fs.writeFileSync('scratch/cross_temp.cjs', crossRaw);
const crossData = require('./cross_temp.cjs');
console.log('Successfully loaded CrossLinks for slugs:', Object.keys(crossData).length);

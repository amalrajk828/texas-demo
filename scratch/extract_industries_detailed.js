const fs = require('fs');
const path = require('path');

const dir = 'app/(legacy)/industries';
const slugs = fs.readdirSync(dir);
const detailed = {};

slugs.forEach(s => {
  const filePath = path.join(dir, s, 'page.tsx');
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // tags
    const tagsMatch = content.match(/tags=\{(\[[^\]]+\])\}/);
    // stats
    const statsMatch = content.match(/stats=\{(\[[\s\S]*?\])\}/);
    // highlights
    const highlightsMatch = content.match(/highlights=\{(\[[\s\S]*?\])\}/);
    // keywords
    const keywordsMatch = content.match(/keywords:\s*(\[[^\]]+\])/);

    detailed[s] = {
      tags: tagsMatch ? tagsMatch[1] : '[]',
      stats: statsMatch ? statsMatch[1] : '[]',
      highlightsText: highlightsMatch ? highlightsMatch[1].replace(/icon:\s*\w+,?\s*/g, '') : '[]',
      keywords: keywordsMatch ? keywordsMatch[1] : '[]'
    };
  }
});

fs.writeFileSync('scratch/industries_detailed.json', JSON.stringify(detailed, null, 2));
console.log('Detailed extracted.');

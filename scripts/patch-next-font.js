const fs = require('fs');
const path = require('path');

const loaderPath = path.join(__dirname, '..', 'node_modules', 'next', 'dist', 'compiled', '@next', 'font', 'dist', 'google', 'loader.js');

if (fs.existsSync(loaderPath)) {
  let content = fs.readFileSync(loaderPath, 'utf8');
  // Match the hardcoded regex that fails on Google Fonts API /l/font?kit=... URLs without file extensions
  if (content.includes('const ext = /\\.(woff|woff2|eot|ttf|otf)$/.exec(googleFontFileUrl)[1];')) {
    content = content.replace(
      'const ext = /\\.(woff|woff2|eot|ttf|otf)$/.exec(googleFontFileUrl)[1];',
      "const ext = (/\\.(woff|woff2|eot|ttf|otf)($|\\?)/.exec(googleFontFileUrl) || [])[1] || 'woff2';"
    );
    fs.writeFileSync(loaderPath, content, 'utf8');
    console.log('[patch-next-font] Successfully patched next/font Google loader for /l/font?kit= URLs');
  }
}

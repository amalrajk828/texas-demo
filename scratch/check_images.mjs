import fs from 'fs';

// Read image header to find dimensions of JPEG
function getJpgDimensions(buffer) {
  let offset = 2;
  while (offset < buffer.length) {
    if (buffer[offset] !== 0xFF) break;
    const marker = buffer[offset + 1];
    if (marker === 0xC0 || marker === 0xC2) {
      const height = buffer.readUInt16BE(offset + 5);
      const width = buffer.readUInt16BE(offset + 7);
      return { width, height };
    }
    const length = buffer.readUInt16BE(offset + 2);
    offset += 2 + length;
  }
  return null;
}

const files = [
  "public/homevideos/homebannerimage.jpg",
  "public/homevideos/Automated-1-2-poster.jpg",
  "public/homevideos/newproduct-poster.jpg",
  "public/homevideos/INSPECTION-AND-TESTING1.jpg"
];

for (const f of files) {
  if (fs.existsSync(f)) {
    const buf = fs.readFileSync(f);
    console.log(f, getJpgDimensions(buf));
  }
}

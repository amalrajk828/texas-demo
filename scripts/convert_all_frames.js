const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function convertAll() {
  const projectRoot = process.cwd();
  const srcDir = path.join(projectRoot, 'public', 'ezgif-318774b2dc621a61-png-split (1)');
  const desktopDir = path.join(projectRoot, 'public', 'hero-frames');
  const mobileDir = path.join(desktopDir, 'mobile');

  if (!fs.existsSync(srcDir)) {
    throw new Error(`Source folder not found: ${srcDir}`);
  }
  if (!fs.existsSync(desktopDir)) fs.mkdirSync(desktopDir, { recursive: true });
  if (!fs.existsSync(mobileDir)) fs.mkdirSync(mobileDir, { recursive: true });

  const files = fs.readdirSync(srcDir)
    .filter(f => f.toLowerCase().endsWith('.png'))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

  console.log(`Found ${files.length} PNG source frames in: ${srcDir}`);
  if (files.length === 0) {
    throw new Error('No PNG frames found!');
  }

  const startTime = Date.now();
  let desktopTotalBytes = 0;
  let mobileTotalBytes = 0;
  let sourceTotalBytes = 0;

  // Mobile portrait dimensions
  const targetW = 1080;
  const targetH = 1920;
  const resizedH = 608;
  const yStart = Math.floor((targetH - resizedH) / 2); // 656
  const yEnd = yStart + resizedH; // 1264
  const rowBytes = targetW * 3;

  const batchSize = 10;
  for (let i = 0; i < files.length; i += batchSize) {
    const batch = files.slice(i, i + batchSize);
    await Promise.all(
      batch.map(async (file, idx) => {
        const frameIndex = i + idx + 1;
        const pad = String(frameIndex).padStart(3, '0');
        const srcPath = path.join(srcDir, file);
        const outDesktop = path.join(desktopDir, `frame_${pad}.webp`);
        const outMobile = path.join(mobileDir, `frame_${pad}.webp`);

        const stat = fs.statSync(srcPath);
        sourceTotalBytes += stat.size;

        // 1. Desktop: Full 1920x1080 WebP quality 95, effort 4
        await sharp(srcPath)
          .webp({ quality: 95, effort: 4 })
          .toFile(outDesktop);
        desktopTotalBytes += fs.statSync(outDesktop).size;

        // 2. Mobile: 1080x1920 edge-extended portrait WebP quality 92, effort 4
        const resized = await sharp(srcPath)
          .resize(targetW, resizedH, { fit: 'fill', kernel: 'lanczos3' })
          .raw()
          .toBuffer({ resolveWithObject: true });

        const outBuf = Buffer.alloc(targetW * targetH * 3);
        const topRow = resized.data.subarray(0, rowBytes);
        for (let y = 0; y < yStart; y++) {
          topRow.copy(outBuf, y * rowBytes);
        }
        resized.data.copy(outBuf, yStart * rowBytes);
        const botRow = resized.data.subarray((resizedH - 1) * rowBytes);
        for (let y = yEnd; y < targetH; y++) {
          botRow.copy(outBuf, y * rowBytes);
        }

        await sharp(outBuf, { raw: { width: targetW, height: targetH, channels: 3 } })
          .webp({ quality: 92, effort: 4 })
          .toFile(outMobile);
        mobileTotalBytes += fs.statSync(outMobile).size;
      })
    );

    const doneCount = Math.min(i + batchSize, files.length);
    if (doneCount % 30 === 0 || doneCount === files.length) {
      console.log(`Converted ${doneCount} / ${files.length} frames...`);
    }
  }

  // 3. Ensure 300th frame is deleted if previously lingering
  const desktop300 = path.join(desktopDir, 'frame_300.webp');
  const mobile300 = path.join(mobileDir, 'frame_300.webp');
  if (fs.existsSync(desktop300)) fs.unlinkSync(desktop300);
  if (fs.existsSync(mobile300)) fs.unlinkSync(mobile300);

  // 4. Update poster.webp for mobile
  const posterPath = path.join(mobileDir, 'poster.webp');
  fs.copyFileSync(path.join(mobileDir, 'frame_001.webp'), posterPath);

  // 5. Update manifests
  const desktopManifest = {
    count: files.length,
    width: 1920,
    height: 1080,
    mobileWidth: 1080,
    mobileHeight: 1920,
    prefix: "frame_",
    ext: ".webp",
    bgColor: "#b8b7ad",
    source: "ezgif-318774b2dc621a61-png-split (1)",
    sourcePayloadMB: (sourceTotalBytes / (1024 * 1024)).toFixed(2),
    webpPayloadMB: (desktopTotalBytes / (1024 * 1024)).toFixed(2),
    mobilePayloadMB: (mobileTotalBytes / (1024 * 1024)).toFixed(2)
  };
  fs.writeFileSync(path.join(desktopDir, 'manifest.json'), JSON.stringify(desktopManifest, null, 2) + '\n');

  const mobileManifest = {
    count: files.length,
    width: 1080,
    height: 1920,
    prefix: "frame_",
    ext: ".webp",
    pattern: "frame_{index}.webp",
    bgColor: "#b8b7ad",
    source: "ezgif-318774b2dc621a61-png-split (1)",
    sourcePayloadMB: (sourceTotalBytes / (1024 * 1024)).toFixed(2),
    webpPayloadMB: (mobileTotalBytes / (1024 * 1024)).toFixed(2)
  };
  fs.writeFileSync(path.join(mobileDir, 'manifest.json'), JSON.stringify(mobileManifest, null, 2) + '\n');

  const elapsedSec = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`\n=== ALL 299 FRAMES CONVERTED SUCCESSFULLY in ${elapsedSec}s ===`);
  console.log(`Source PNG total: ${desktopManifest.sourcePayloadMB} MB`);
  console.log(`Desktop WebP (1920x1080) total: ${desktopManifest.webpPayloadMB} MB`);
  console.log(`Mobile WebP (1080x1920) total: ${desktopManifest.mobilePayloadMB} MB`);
}

convertAll().catch(err => {
  console.error('Conversion failed:', err);
  process.exit(1);
});


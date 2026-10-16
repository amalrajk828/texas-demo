const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function run() {
  const srcDir = path.join(process.cwd(), 'public', 'ezgif-72247e4a35ef8727-png-split');
  const outDir = path.join(process.cwd(), 'public', 'hero-frames');
  const mobileDir = path.join(outDir, 'mobile');

  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  if (!fs.existsSync(mobileDir)) fs.mkdirSync(mobileDir, { recursive: true });

  const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.png'));
  files.sort();

  console.log(`Starting conversion of ${files.length} PNG frames...`);
  const startTime = Date.now();

  let originalTotal = 0;
  let webpTotal = 0;
  let mobileTotal = 0;

  // Process in batches of 15 for fast parallel encoding
  const batchSize = 15;
  for (let i = 0; i < files.length; i += batchSize) {
    const batch = files.slice(i, i + batchSize);
    await Promise.all(
      batch.map(async (file, batchIdx) => {
        const frameIndex = i + batchIdx + 1;
        const pad = String(frameIndex).padStart(3, '0');
        const srcFile = path.join(srcDir, file);
        const stat = fs.statSync(srcFile);
        originalTotal += stat.size;

        const outFull = path.join(outDir, `frame_${pad}.webp`);
        const outMobile = path.join(mobileDir, `frame_${pad}.webp`);

        // Full 1920x1080 WebP (quality 95)
        await sharp(srcFile)
          .webp({ quality: 95, effort: 4 })
          .toFile(outFull);

        const fullStat = fs.statSync(outFull);
        webpTotal += fullStat.size;

        // Mobile 1280x720 WebP (quality 90)
        await sharp(srcFile)
          .resize(1280, 720, { fit: 'cover' })
          .webp({ quality: 90, effort: 4 })
          .toFile(outMobile);

        const mobStat = fs.statSync(outMobile);
        mobileTotal += mobStat.size;
      })
    );

    if ((i + batchSize) % 60 === 0 || i + batchSize >= files.length) {
      console.log(`Converted ${Math.min(i + batchSize, files.length)} / ${files.length} frames...`);
    }
  }

  const manifest = {
    count: files.length,
    width: 1920,
    height: 1080,
    mobileWidth: 1280,
    mobileHeight: 720,
    prefix: "frame_",
    ext: ".webp",
    bgColor: "#e8e8e6",
    originalPayloadMB: (originalTotal / (1024 * 1024)).toFixed(2),
    webpPayloadMB: (webpTotal / (1024 * 1024)).toFixed(2),
    mobilePayloadMB: (mobileTotal / (1024 * 1024)).toFixed(2),
    reductionPct: (((originalTotal - webpTotal) / originalTotal) * 100).toFixed(1) + '%'
  };

  fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2));

  const duration = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`\n=== CONVERSION COMPLETE in ${duration}s ===`);
  console.log(`Original PNG payload: ${manifest.originalPayloadMB} MB`);
  console.log(`WebP (1920x1080) payload: ${manifest.webpPayloadMB} MB (${manifest.reductionPct} reduction)`);
  console.log(`Mobile WebP (1280x720) payload: ${manifest.mobilePayloadMB} MB`);
}

run().catch(console.error);

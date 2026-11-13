import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const PROJECT_ROOT = process.cwd();
const SRC_DIR = path.join(PROJECT_ROOT, 'public', 'ezgif-23a15c63da42a1a4-png-split');
const TARGET_DIR = path.join(PROJECT_ROOT, 'public', 'hero-frames', 'mobile');
const BACKUP_DIR = path.join(PROJECT_ROOT, 'public', 'hero-frames', '_old-mobile-backup');

function naturalSort(a, b) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
}

async function buildMobileFrames() {
  console.log('=== STEP 2: BUILD MOBILE PORTRAIT FRAMES ===');
  const startTime = Date.now();

  if (!fs.existsSync(SRC_DIR)) {
    throw new Error(`Source PNG directory not found: ${SRC_DIR}`);
  }

  // 1. Backup existing mobile directory if present
  if (fs.existsSync(TARGET_DIR)) {
    if (!fs.existsSync(BACKUP_DIR)) {
      fs.mkdirSync(BACKUP_DIR, { recursive: true });
    }
    const existingMobileFiles = fs.readdirSync(TARGET_DIR);
    console.log(`Backing up ${existingMobileFiles.length} files from ${TARGET_DIR} to ${BACKUP_DIR}...`);
    for (const f of existingMobileFiles) {
      fs.copyFileSync(path.join(TARGET_DIR, f), path.join(BACKUP_DIR, f));
    }
    console.log(`Backup complete.`);
  } else {
    fs.mkdirSync(TARGET_DIR, { recursive: true });
  }

  // 2. Read source PNG files in natural sort order
  const pngFiles = fs.readdirSync(SRC_DIR)
    .filter(f => f.toLowerCase().endsWith('.png'))
    .sort(naturalSort);

  console.log(`Found ${pngFiles.length} source frames in ${SRC_DIR}`);
  if (pngFiles.length === 0) {
    throw new Error('No PNG files found to convert.');
  }

  // Read metadata of first frame to determine resolution
  const firstMeta = await sharp(path.join(SRC_DIR, pngFiles[0])).metadata();
  const sourceWidth = firstMeta.width;
  const sourceHeight = firstMeta.height;
  console.log(`Source frame dimensions: ${sourceWidth}x${sourceHeight}`);

  const targetWidth = Math.min(1080, sourceWidth);
  const targetHeight = targetWidth === sourceWidth ? sourceHeight : Math.round((targetWidth / sourceWidth) * sourceHeight);
  const needsResize = targetWidth !== sourceWidth;
  if (needsResize) {
    console.log(`Downscaling with lanczos3 to: ${targetWidth}x${targetHeight}`);
  } else {
    console.log(`Keeping native resolution: ${targetWidth}x${targetHeight}`);
  }

  // 3. Conversion configuration
  // Near-lossless WebP: quality 94, effort 6, smartSubsample off
  let quality = 94;
  const batchSize = 15;

  async function convertAll(q) {
    let totalOutputBytes = 0;
    let totalInputBytes = 0;

    for (let i = 0; i < pngFiles.length; i += batchSize) {
      const batch = pngFiles.slice(i, i + batchSize);
      await Promise.all(
        batch.map(async (file, idx) => {
          const frameIndex = i + idx + 1;
          const pad = String(frameIndex).padStart(3, '0');
          const srcPath = path.join(SRC_DIR, file);
          const outName = `frame_${pad}.webp`;
          const outPath = path.join(TARGET_DIR, outName);

          const inStat = fs.statSync(srcPath);
          totalInputBytes += inStat.size;

          let pipeline = sharp(srcPath);
          if (needsResize) {
            pipeline = pipeline.resize(targetWidth, targetHeight, {
              kernel: sharp.kernel.lanczos3,
              fit: 'fill'
            });
          }

          // Exact color preservation: no blur, no sharpen, no tint, no gamma alteration
          pipeline = pipeline.webp({
            quality: q,
            effort: 6,
            smartSubsample: false
          });

          await pipeline.toFile(outPath);
          const outStat = fs.statSync(outPath);
          totalOutputBytes += outStat.size;
        })
      );

      const progress = Math.min(i + batchSize, pngFiles.length);
      if (progress % 60 === 0 || progress === pngFiles.length) {
        console.log(`Converted ${progress} / ${pngFiles.length} frames...`);
      }
    }

    return { totalInputBytes, totalOutputBytes };
  }

  console.log(`Converting frames with WebP quality ${quality}, effort 6, smartSubsample false...`);
  let { totalInputBytes, totalOutputBytes } = await convertAll(quality);
  let totalPayloadMB = totalOutputBytes / (1024 * 1024);
  console.log(`Total payload at quality ${quality}: ${totalPayloadMB.toFixed(2)} MB`);

  // Target: under about 25 MB. If it exceeds 25 MB, step down quality
  if (totalPayloadMB > 25) {
    console.warn(`Payload ${totalPayloadMB.toFixed(2)} MB exceeds 25 MB budget. Stepping down quality to 88...`);
    quality = 88;
    const res = await convertAll(quality);
    totalInputBytes = res.totalInputBytes;
    totalOutputBytes = res.totalOutputBytes;
    totalPayloadMB = totalOutputBytes / (1024 * 1024);
    console.log(`Total payload at quality ${quality}: ${totalPayloadMB.toFixed(2)} MB`);
  }

  // 4. Generate first-frame poster (poster.webp)
  const posterPath = path.join(TARGET_DIR, 'poster.webp');
  fs.copyFileSync(path.join(TARGET_DIR, 'frame_001.webp'), posterPath);

  // 5. Write manifest.json
  const originalPayloadMB = (totalInputBytes / (1024 * 1024)).toFixed(2);
  const webpPayloadMB = totalPayloadMB.toFixed(2);
  const reductionPct = ((1 - totalOutputBytes / totalInputBytes) * 100).toFixed(1) + '%';

  const manifest = {
    count: pngFiles.length,
    width: targetWidth,
    height: targetHeight,
    prefix: 'frame_',
    ext: '.webp',
    pattern: 'frame_{index}.webp',
    bgColor: '#ececec',
    originalPayloadMB,
    webpPayloadMB,
    reductionPct
  };

  const manifestPath = path.join(TARGET_DIR, 'manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n', 'utf-8');
  console.log(`Written manifest to ${manifestPath}:`);
  console.log(JSON.stringify(manifest, null, 2));

  const durationSec = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`=== BUILD MOBILE FRAMES FINISHED IN ${durationSec}s ===`);
  console.log(`Total frames: ${pngFiles.length}`);
  console.log(`Output: ${TARGET_DIR}`);
  console.log(`Total WebP payload: ${webpPayloadMB} MB (Original PNG: ${originalPayloadMB} MB, Reduction: ${reductionPct})`);
}

buildMobileFrames().catch(err => {
  console.error('Build mobile frames failed:', err);
  process.exit(1);
});

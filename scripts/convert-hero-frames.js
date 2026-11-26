const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SOURCE_DIR = path.join(__dirname, '..', 'public', 'VID-20261125-WA00091_gwr_video_mvp-ezgif-split');
const DESKTOP_DIR = path.join(__dirname, '..', 'public', 'hero-frames');
const MOBILE_DIR = path.join(DESKTOP_DIR, 'mobile');

// Ensure output directories exist
fs.mkdirSync(DESKTOP_DIR, { recursive: true });
fs.mkdirSync(MOBILE_DIR, { recursive: true });

// Clean old files
for (const file of fs.readdirSync(DESKTOP_DIR)) {
  if (file.endsWith('.webp')) fs.unlinkSync(path.join(DESKTOP_DIR, file));
}
for (const file of fs.readdirSync(MOBILE_DIR)) {
  if (file.endsWith('.webp')) fs.unlinkSync(path.join(MOBILE_DIR, file));
}

const TOTAL_FRAMES = 300;
const CONCURRENCY = 8;

async function convertAll() {
  console.log(`Starting conversion of ${TOTAL_FRAMES} frames...`);
  const startTime = Date.now();

  const tasks = [];
  for (let i = 1; i <= TOTAL_FRAMES; i++) {
    tasks.push(i);
  }

  let desktopTotalBytes = 0;
  let mobileTotalBytes = 0;
  let completed = 0;

  async function worker() {
    while (tasks.length > 0) {
      const i = tasks.shift();
      const numStr = String(i).padStart(3, '0');
      const srcFile = path.join(SOURCE_DIR, `ezgif-frame-${numStr}.png`);
      const desktopDest = path.join(DESKTOP_DIR, `frame_${numStr}.webp`);
      const mobileDest = path.join(MOBILE_DIR, `frame_${numStr}.webp`);

      // Desktop: 1600x900 (16:9), quality 68, effort 4
      const dInfo = await sharp(srcFile)
        .resize(1600, 900)
        .webp({ quality: 68, effort: 4 })
        .toFile(desktopDest);
      desktopTotalBytes += dInfo.size;

      // Mobile: 720x900 (4:5 center crop), quality 64, effort 4
      const mInfo = await sharp(srcFile)
        .resize(720, 900, { fit: 'cover', position: 'center' })
        .webp({ quality: 64, effort: 4 })
        .toFile(mobileDest);
      mobileTotalBytes += mInfo.size;

      completed++;
      if (completed % 50 === 0 || completed === TOTAL_FRAMES) {
        console.log(`Converted ${completed}/${TOTAL_FRAMES} frames...`);
      }
    }
  }

  const workers = Array.from({ length: CONCURRENCY }, () => worker());
  await Promise.all(workers);

  const durationSec = ((Date.now() - startTime) / 1000).toFixed(1);
  const desktopMB = (desktopTotalBytes / (1024 * 1024)).toFixed(2);
  const mobileMB = (mobileTotalBytes / (1024 * 1024)).toFixed(2);

  console.log(`\nConversion complete in ${durationSec}s!`);
  console.log(`Desktop total size: ${desktopMB} MB (Target: under ~15 MB)`);
  console.log(`Mobile total size: ${mobileMB} MB (Target: under ~7 MB)`);
}

convertAll().catch(err => {
  console.error('Error during conversion:', err);
  process.exit(1);
});

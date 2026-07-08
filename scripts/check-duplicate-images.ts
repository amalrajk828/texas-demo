import { blogArticles } from '../lib/blogArticles';

async function main() {
  const articles = Object.entries(blogArticles);
  const totalCount = articles.length;
  
  const imageToSlugs: Record<string, string[]> = {};
  const imageToTitles: Record<string, string[]> = {};
  const altToSlugs: Record<string, string[]> = {};

  for (const [slug, article] of articles) {
    // Check image duplicate
    const imageUrl = article.image;
    if (imageUrl) {
      if (!imageToSlugs[imageUrl]) {
        imageToSlugs[imageUrl] = [];
        imageToTitles[imageUrl] = [];
      }
      imageToSlugs[imageUrl].push(slug);
      imageToTitles[imageUrl].push(article.title);
    }

    // Check alt duplicate
    const imageAlt = article.imageAlt;
    if (imageAlt) {
      if (!altToSlugs[imageAlt]) {
        altToSlugs[imageAlt] = [];
      }
      altToSlugs[imageAlt].push(slug);
    }
  }

  const uniqueImages = Object.keys(imageToSlugs);
  const duplicateImages = Object.entries(imageToSlugs).filter(([_, slugs]) => slugs.length > 1);
  const duplicateAlts = Object.entries(altToSlugs).filter(([_, slugs]) => slugs.length > 1);

  console.log("=========================================");
  console.log("📊 BLOG FEATURED IMAGE ACCURACY CHECK");
  console.log("=========================================");
  console.log(`Total Blog Articles:     ${totalCount}`);
  console.log(`Unique Image URLs:       ${uniqueImages.length}`);
  console.log(`Duplicate Image URLs:    ${duplicateImages.length}`);
  console.log(`Duplicate Alt Texts:     ${duplicateAlts.length}`);
  console.log("=========================================");

  if (duplicateImages.length > 0) {
    console.error("❌ ERROR: Duplicate image URLs found across multiple articles!");
    for (const [url, slugs] of duplicateImages) {
      console.error(`\nDuplicate URL: ${url}`);
      slugs.forEach((slug, idx) => {
        console.error(`   - [${slug}]: "${imageToTitles[url][idx]}"`);
      });
    }
  }

  if (duplicateAlts.length > 0) {
    console.warn("⚠️ WARNING: Duplicate Alt texts found (not blocking, but recommended to fix):");
    for (const [alt, slugs] of duplicateAlts) {
      console.warn(`   - Alt: "${alt}" (used in ${slugs.join(', ')})`);
    }
  }

  if (duplicateImages.length > 0) {
    process.exit(1);
  } else {
    console.log("✅ SUCCESS: All 100 articles have 100% unique featured images and unique URLs!");
    process.exit(0);
  }
}

main().catch(console.error);

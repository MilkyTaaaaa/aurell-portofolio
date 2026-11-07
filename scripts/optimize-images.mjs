import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
sharp.cache({ files: 50, memory: 512 }); // Nonaktifkan cache internal Sharp untuk menghemat memori

const ROOT_DIR = process.cwd();
const SOURCE_DIR = path.join(ROOT_DIR, "source-images");
const OUTPUT_DIR = path.join(ROOT_DIR, "public", "images", "optimized");
const MANIFEST_PATH = path.join(ROOT_DIR, "src", "generated", "image-manifest.json");

const TARGET_WIDTHS = [480, 768, 1200, 1600, 2048];
const SUPPORTED_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".tiff"]);

/**
 * Konfigurasi preset kompresi berdasarkan kategori folder.
 * - Photography: mengutamakan rentang dinamis, ketajaman tekstur alam/kegiatan, dan kompresi seimbang.
 * - Social Media & Projects: mengutamakan ketajaman tipografi/garis desain poster agar teks tidak blur.
 */
const COMPRESSION_PRESETS = {
  photography: {
    avif: { quality: 68, effort: 4 },
    webp: { quality: 82, effort: 4 },
  },
  "social-media": {
    avif: { quality: 80, effort: 4 },
    webp: { quality: 90, effort: 4, nearLossless: false },
  },
  default: {
    avif: { quality: 74, effort: 4 },
    webp: { quality: 85, effort: 4 },
  },
};

async function getFilesRecursively(dir) {
  let results = [];
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        results = results.concat(await getFilesRecursively(fullPath));
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (SUPPORTED_EXTENSIONS.has(ext)) {
          results.push(fullPath);
        }
      }
    }
  } catch (err) {
    if (err.code !== "ENOENT") {
      console.error(`Gagal membaca direktori ${dir}:`, err.message);
    }
  }
  return results;
}

function formatBytes(bytes) {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

async function runOptimization() {
  console.log("============================================================");
  console.log("  SHARP IMAGE OPTIMIZATION PIPELINE — AURELL PORTFOLIO");
  console.log("============================================================");

  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.mkdir(path.dirname(MANIFEST_PATH), { recursive: true });

  const files = await getFilesRecursively(SOURCE_DIR);

  if (files.length === 0) {
    console.log("ℹ Tidak ditemukan gambar di folder source-images/.");
    try {
      await fs.access(MANIFEST_PATH);
    } catch {
      await fs.writeFile(MANIFEST_PATH, JSON.stringify({}, null, 2), "utf-8");
    }
    console.log("✔ Manifest kosong siap digunakan.\n");
    return;
  }

  const manifest = {};
  let totalOriginalBytes = 0;
  let totalLargestOptimizedBytes = 0;

  for (const filePath of files) {
    const relFromSource = path.relative(SOURCE_DIR, filePath);
    const normalizedRel = relFromSource.split(path.sep).join("/");
    const parsed = path.parse(normalizedRel);

    // Key unik tanpa ekstensi, misal: "photography/merbabu-01"
    const imageKey = parsed.dir ? `${parsed.dir}/${parsed.name}` : parsed.name;
    const category = parsed.dir.split("/")[0] || "default";
    const preset = COMPRESSION_PRESETS[category] || COMPRESSION_PRESETS.default;

    const stat = await fs.stat(filePath);
    totalOriginalBytes += stat.size;

    // Baca gambar dan auto-orient berdasarkan EXIF
    const image = sharp(filePath, {limitInputPixels: false}).rotate();
    const metadata = await image.metadata();

    // Setelah .rotate(), jika orientasi EXIF >= 5 (90/270 deg), tukar dimensi efektif
    const isSwapped = metadata.orientation && metadata.orientation >= 5;
    const origWidth = isSwapped ? metadata.height : metadata.width;
    const origHeight = isSwapped ? metadata.width : metadata.height;

    if (!origWidth || !origHeight) {
      console.warn(`⚠ Melewati ${normalizedRel}: dimensi gambar tidak terbaca.`);
      continue;
    }

    const aspectRatio = Number((origWidth / origHeight).toFixed(4));

    // Tentukan daftar ukuran yang tidak melebihi ukuran asli (tanpa upscaling)
    const applicableWidths = TARGET_WIDTHS.filter((w) => w <= origWidth);
    if (applicableWidths.length === 0 || applicableWidths[applicableWidths.length - 1] !== origWidth) {
      if (origWidth < TARGET_WIDTHS[0]) {
        applicableWidths.push(origWidth);
      } else if (origWidth <= 2048 && !applicableWidths.includes(origWidth)) {
        applicableWidths.push(origWidth);
      }
    }

    const targetOutDir = path.join(OUTPUT_DIR, parsed.dir);
    await fs.mkdir(targetOutDir, { recursive: true });

    const avifVariants = [];
    const webpVariants = [];
    let largestAvifSize = 0;

    for (const width of applicableWidths) {
      const height = Math.round(width / aspectRatio);
      const avifFilename = `${parsed.name}-${width}w.avif`;
      const webpFilename = `${parsed.name}-${width}w.webp`;

      const avifFullOut = path.join(targetOutDir, avifFilename);
      const webpFullOut = path.join(targetOutDir, webpFilename);

      const publicBasePath = `/images/optimized/${parsed.dir ? parsed.dir + "/" : ""}`;

      // Pipeline menghapus metadata GPS/EXIF pribadi secara default pada Sharp
      const pipeline = sharp(filePath, {limitInputPixels: false})
        .rotate()
        .resize({
          width,
          withoutEnlargement: true,
          fit: "inside",
        });

      const avifInfo = await pipeline.clone().avif(preset.avif).toFile(avifFullOut);
      const webpInfo = await pipeline.clone().webp(preset.webp).toFile(webpFullOut);

      avifVariants.push({
        width: avifInfo.width,
        height: avifInfo.height,
        path: `${publicBasePath}${avifFilename}`,
        sizeBytes: avifInfo.size,
      });

      webpVariants.push({
        width: webpInfo.width,
        height: webpInfo.height,
        path: `${publicBasePath}${webpFilename}`,
        sizeBytes: webpInfo.size,
      });

      if (avifInfo.size > largestAvifSize) {
        largestAvifSize = avifInfo.size;
      }
    }

    totalLargestOptimizedBytes += largestAvifSize;

    const highestVariant = webpVariants[webpVariants.length - 1];

    manifest[imageKey] = {
      key: imageKey,
      originalFilename: parsed.base,
      category,
      originalWidth: origWidth,
      originalHeight: origHeight,
      outputWidth: highestVariant.width,
      outputHeight: highestVariant.height,
      aspectRatio,
      originalSizeBytes: stat.size,
      avif: avifVariants,
      webp: webpVariants,
      fallbackSrc: highestVariant.path,
    };

    console.log(
      `✔ [${imageKey}] ${formatBytes(stat.size)} -> AVIF max ${formatBytes(largestAvifSize)} (${applicableWidths.join("w, ")}w)`
    );
  }

  await fs.writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2), "utf-8");

  const savedPercent =
    totalOriginalBytes > 0
      ? (((totalOriginalBytes - totalLargestOptimizedBytes) / totalOriginalBytes) * 100).toFixed(1)
      : "0";

  console.log("------------------------------------------------------------");
  console.log(`Total Gambar Diproses : ${Object.keys(manifest).length}`);
  console.log(`Total Ukuran Original : ${formatBytes(totalOriginalBytes)}`);
  console.log(`Total Ukuran Optimal  : ${formatBytes(totalLargestOptimizedBytes)} (Hemat ~${savedPercent}%)`);
  console.log(`Manifest Tersimpan di : src/generated/image-manifest.json`);
  console.log("============================================================\n");
}

runOptimization().catch((err) => {
  console.error("❌ Gagal menjalankan optimasi gambar:", err);
  process.exit(1);
});
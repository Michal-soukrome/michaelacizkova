import fs from "fs";
import path from "path";
import sharp from "sharp";
import { PhotoCategory } from "@/../src/lib/photoTypes";

const PHOTOS_DIR = path.join(process.cwd(), "public", "photos");
const OUTPUT = path.join(process.cwd(), "src", "lib", "photos.generated.json");

const toTitle = (str: string) =>
  str
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_.]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());

async function generate() {
  const categories = fs.readdirSync(PHOTOS_DIR);
  const output: any[] = [];

  const CATEGORY_MAP: Record<string, PhotoCategory> = {
    atelierove: "atelier",
    boudoir: "boudoir",
    brandove: "brand",
    deti: "children",
    newborn: "newborn",
    parove: "couples",
    portretni: "portrait",
    reportazni: "reportage",
    rodinne: "family",
    romanticke: "romantic",
    svatebni: "wedding",
    tehotenske: "maternity",
  };

  for (const category of categories) {
    const mappedCategory = CATEGORY_MAP[category] as PhotoCategory;
    const categoryPath = path.join(PHOTOS_DIR, category);
    if (!fs.statSync(categoryPath).isDirectory()) continue;

    const files = fs.readdirSync(categoryPath);

    for (const file of files) {
      const fullPath = path.join(categoryPath, file);
      if (!/\.(jpg|jpeg|png|webp)$/i.test(file)) continue;

      const img = sharp(fullPath);
      const meta = await img.metadata();

      const width = meta.width ?? 0;
      const height = meta.height ?? 0;
      const ratio = width / height;

      const id = `${category}-${file.replace(/\.[^/.]+$/, "")}`;
      const title = toTitle(file);
      const alt = `${title} – ${toTitle(category)}`;

      output.push({
        id,
        src: `/photos/${category}/${file}`,
        alt,
        title,
        category: mappedCategory,
        size: ratio > 1.4 ? "large" : ratio > 1.1 ? "medium" : "small",
        width,
        height,
        ratio,
      });
    }
  }

  fs.writeFileSync(OUTPUT, JSON.stringify(output, null, 2));
  console.log("Generated:", OUTPUT);
}

generate();

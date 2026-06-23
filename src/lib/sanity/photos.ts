import { sanity } from "./client";
import { Photo } from "@/lib/photoTypes";

export async function getPhotos(): Promise<Photo[]> {
  const data = await sanity.fetch(`
    *[_type == "photo"] | order(_createdAt desc) {
      _id,
      title,
      alt,
      "src": image.asset->url,
      "width": image.asset->metadata.dimensions.width,
      "height": image.asset->metadata.dimensions.height,
      category,
      size
    }
  `);

  return data;
}

export async function getHomepagePhotos(): Promise<Photo[]> {
  const data = await sanity.fetch(`
    *[_type == "photo" && category == "homepage"] | order(_createdAt desc)[0...6] {
      _id,
      title,
      alt,
      "src": image.asset->url,
      "width": image.asset->metadata.dimensions.width,
      "height": image.asset->metadata.dimensions.height,
      category,
      size
    }
  `);

  return data;
}

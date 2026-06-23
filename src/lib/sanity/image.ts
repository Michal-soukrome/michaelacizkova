import { sanity } from "./client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanity);

export function urlFor(source: any) {
  return builder.image(source);
}
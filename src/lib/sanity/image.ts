import { sanity } from "./client";
import { createImageUrlBuilder } from "@sanity/image-url";

const builder = createImageUrlBuilder(sanity);

export function urlFor(source: any) {
  return builder.image(source);
}

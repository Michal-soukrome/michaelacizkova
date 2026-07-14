import Gallery from "@/components/Gallery";
import { portfolioPageMetadata } from "@/lib/pageMetadata";

export const metadata = portfolioPageMetadata;

export default function GalleryPage() {
  return (
    <div>
      <Gallery />
    </div>
  );
}

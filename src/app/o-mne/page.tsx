import About from "@/components/About";
import { aboutPageMetadata } from "@/lib/pageMetadata";

export const metadata = aboutPageMetadata;

export default function AboutPage() {
  return (
    <div>
      <About />
    </div>
  );
}

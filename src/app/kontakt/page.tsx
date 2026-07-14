import Contact from "@/components/Contact";
import { contactPageMetadata } from "@/lib/pageMetadata";

export const metadata = contactPageMetadata;

export default function ContactPage() {
  return (
    <div>
      <Contact />
    </div>
  );
}

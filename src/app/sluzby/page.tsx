import Contact from "@/components/Contact";
import Services from "@/components/Services";
import { servicesPageMetadata } from "@/lib/pageMetadata";

export const metadata = servicesPageMetadata;

export default function ServicesPage() {
  return (
    <div>
      <Services />
      <Contact />
    </div>
  );
}

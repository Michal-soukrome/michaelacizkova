import Script from "next/script";
import FAQ from "@/components/FAQ";
import { faqSchema } from "@/seo";
import { faqPageMetadata } from "@/lib/pageMetadata";

export const metadata = faqPageMetadata;

export default function FaqPage() {
  return (
    <div>
      <FAQ />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </div>
  );
}

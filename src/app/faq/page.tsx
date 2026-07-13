import Script from "next/script";
import FAQ from "@/components/FAQ";
import { faqSchema } from "@/seo";

export const metadata = {
  title: "Časté dotazy – focení v Českém ráji",
  description:
    "Odpovědi na dotazy o focení v Českém ráji. Zjistěte, jak se připravit, kdy rezervovat termín newborn a jak dlouho trvá dodání fotografií.",
};

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

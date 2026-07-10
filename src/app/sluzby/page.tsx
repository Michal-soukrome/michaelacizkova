import Contact from "@/components/Contact";
import Services from "@/components/Services";

export const metadata = {
  title: "Fotografické služby – rodinné, svatební a newborn focení",
  description:
    "Profesionální rodinné focení, newborn, těhotenské, reportážní a svatební fotografie. Podívejte se na nabídku balíčků a ceník služeb.",
};

export default function ServicesPage() {
  return (
    <div>
      <Services />
      <Contact />
    </div>
  );
}

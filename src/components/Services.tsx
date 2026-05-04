"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Heart,
  Users,
  Clapperboard,
  Home,
  MessageCircleMore,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// ─── Content ───────────────────────────────────────────────────────────────

const header = {
  eyebrow: "Co nabízím",
  heading: "Služby",
  subtitle:
    "Procházejte si moji nabídku fotografických služeb. Každá sesión je přizpůsobena vašim specifickým potřebám a představám.",
};

// Helper function to collect all images from services
function getAllServiceImages() {
  const images: string[] = [];
  services.forEach((service) => {
    images.push(service.image);
    const extraImages = service.images ?? [];
    images.push(...extraImages);
  });
  return images;
}

const services = [
  {
    title: "Svatební focení",
    description:
      "Zachycuji váš den přirozeně, s důrazem na emoce, detaily a autentické momenty, ke kterým se budete rádi vracet. Jsem tichý pozorovatel, který nenápadně zachytí skutečné chvíle. Nevěstě jsem po celý den k dispozici — pomůžu, poradím, podržím, když je potřeba. Chci, abyste si svůj den užili v klidu a bez stresu.",
    icon: Heart,
    image: "/assets/1.jpg",
    // Optional: 1–3 extra photos shown as a strip between description and pricing.
    // Remove or leave as [] to show nothing.
    images: ["/assets/2.jpg", "/assets/3.jpg"],
    price: "Na míru",
    duration: "Celodenní balíček",
    photos: "200+ výsledných fotografií",
    features: [
      "Reportážní styl zachycující autentické momenty",
      "Portréty podle vašeho přání během dne",
      "Přípravy, obřad, příjímací oslava",
      "Výběr z náhledové galerie",
      "Výsledné fotografie v soukromé galerii",
      "Osobní podpora a konzultace",
      "Kompletní ceník na požádání",
    ],
  },
  {
    title: "Rodinné / Párové / Těhotenské focení",
    description:
      "Láska, harmonie, radost a vzájemné pouto. Ať už na focení přijdete s partnerem nebo rovnou s celou rodinkou, tyto krásné emoce budou zářit na každém snímku.",
    icon: Users,
    image: "/assets/2.jpg",
    // Single shared image shown above all three packages
    images: ["/assets/1.jpg"],
    packages: [
      {
        name: "MINI balíček",
        price: "2 800 Kč",
        duration: "cca 60 minut focení",
        features: [
          "15 upravených fotografií + černobílá verze dle mého výběru",
          "Výběr z náhledové galerie",
          "Fotografie ve vysokém rozlišení v soukromé online galerii",
          "Focení u vás doma nebo venku dle domluvy",
        ],
        extraPrice: "Další upravená fotografie nad rámec balíčku: 140 Kč",
      },
      {
        name: "Střední balíček",
        price: "4 500 Kč",
        duration: "cca 60–75 minut focení",
        features: [
          "30 upravených fotografií + černobílá verze dle mého výběru",
          "Výběr z náhledové galerie",
          "Fotografie ve vysokém rozlišení v soukromé online galerii",
          "15 fotografií ve formě tisku",
          "Focení u vás doma nebo venku dle domluvy",
        ],
        extraPrice: "Další upravená fotografie nad rámec balíčku: 140 Kč",
      },
      {
        name: "Velký balíček",
        price: "7 500 Kč",
        duration: "cca 60–90 minut focení",
        features: [
          "Všechny povedené fotografie (min. 50+) + černobílé verze dle mého výběru",
          "Výběr z náhledové galerie",
          "Fotografie ve vysokém rozlišení v soukromé online galerii",
          "30 fotografií ve formě tisku",
          "Focení u vás doma nebo venku dle domluvy",
        ],
        extraPrice: "Další upravená fotografie nad rámec balíčku: 140 Kč",
      },
    ],
  },
  {
    title: "Rodinná reportáž",
    description:
      "Skutečné chvíle tak, jak se odehrávají. Ideální pro narozeninové oslavy, křtiny, společná setkání, výlety i obyčejné momenty doma, které tvoří váš každodenní život. Focení probíhá přirozenou reportážní formou — zachycuji dění nenápadně a bez výrazného zasahování. Součástí focení je krátká konzultace předem, kde probereme místo, čas, průběh i vše, co vám pomůže cítit se při focení přirozeně.",
    icon: Clapperboard,
    image: "/assets/3.jpg",
    images: ["/assets/1.jpg", "/assets/2.jpg", "/assets/3.jpg"],
    price: "8 000 Kč",
    duration: "2–3 hodiny dle potřeby",
    photos: "přibližně 50–70 pečlivě upravených fotografií",
    features: [
      "Fotografie ve vysokém rozlišení odevzdané v elektronické podobě v soukromé online galerii",
      "Finální výběr fotografií provádím já, aby výsledná galerie působila uceleně a vyprávěla váš příběh",
      "Krátká konzultace předem",
    ],
    extraPrice: "Další upravená fotografie nad rámec balíčku: 140 Kč",
  },
  {
    title: "Ateliérové focení",
    description:
      "Komorní a útulný ateliér se nachází u nás v Mladějově v Čechách a je ideální pro portrétní, těhotenské i tematické focení. Využít můžeme přirozené světlo, ateliérové doplňky nebo stylové křeslo pro jemnou a autentickou atmosféru. Focení probíhá jemně vedenou formou, aby výsledné fotografie působily přirozeně a nadčasově.",
    icon: Home,
    image: "/assets/4.jpg",
    // No extra images — omit the field or leave as [] to show nothing
    images: [],
    price: "3 200 Kč",
    duration: "Ateliérové focení",
    photos: "15 upravených fotografií + černobílá verze dle mého výběru",
    features: [
      "Výběr z náhledové galerie",
      "Fotografie elektronicky v soukromé galerii",
      "Přirozené světlo, ateliérové doplňky nebo studio dle přání",
      "Průvodce focením s tipy na outfity a přípravu",
    ],
    extraPrice: "Další upravená fotografie nad rámec balíčku: 140 Kč",
  },
];

const booking = {
  location: {
    title: "Lokalita focení",
    text: "Nejčastěji fotím v Českém ráji, v okolí Sobotky a Jičína. Ráda za vámi přijedu i do dalších oblastí.",
    transport: "Doprava: Zdarma do 20 km od Sobotky, poté 8,- Kč/km",
  },
  preparation: {
    title: "Před focením",
    text: "Před focením si domluvíme rychlou konzultaci, během které probereme vhodný outfit, místo focení a další praktické věci. Chceme, abyste se cítili komfortně a přirozeně.",
  },
  cta: {
    text: "Máte zájem o některou z mých služeb? Pojďme si promluvit o vašem projektu!",
    label: "Kontaktujte mě",
  },
};

// ─── Sub-components ─────────────────────────────────────────────────────────

function ImagePanel({
  src,
  alt,
  onClick,
}: {
  src: string;
  alt: string;
  onClick?: () => void;
}) {
  return (
    <div
      className="w-full md:w-5/12 min-h-[360px] bg-cream/60 overflow-hidden flex-shrink-0 group cursor-pointer"
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover grayscale hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
      />
    </div>
  );
}

/**
 * Renders 1–3 extra photos as an equal-width horizontal strip.
 * - 1 image → full width, taller (h-64)
 * - 2–3 images → side by side, shorter (h-48)
 */
function ImageStrip({
  images,
  alt,
  onImageClick,
}: {
  images: string[];
  alt: string;
  onImageClick?: (index: number) => void;
}) {
  if (!images.length) return null;

  const heightClass = images.length === 1 ? "h-64" : "h-48";

  return (
    <div
      className={`flex gap-2 mb-6 rounded-lg overflow-hidden ${heightClass}`}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="flex-1 overflow-hidden bg-cream/60 group cursor-pointer"
          onClick={() => onImageClick?.(i)}
        >
          <img
            src={src}
            alt={`${alt} - ${i + 1}`}
            className="w-full h-full object-cover grayscale hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
        </div>
      ))}
    </div>
  );
}

function FeatureList({ features }: { features: string[] }) {
  return (
    <ul className="space-y-2 mt-4">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start text-sm text-text-light">
          <span className="w-1.5 h-1.5 bg-brown rounded-full flex-shrink-0 mt-1.5 mr-3" />
          {feature}
        </li>
      ))}
    </ul>
  );
}

function PriceBox({
  price,
  duration,
  photos,
}: {
  price: string;
  duration: string;
  photos: string;
}) {
  return (
    <div className="bg-brown/10 rounded-lg p-4 border border-brown/20 mb-4">
      <div className="grid grid-cols-2 gap-4 mb-2">
        <div>
          <p className="text-xs uppercase tracking-wider text-brown font-semibold mb-1">
            Cena
          </p>
          <p className="text-lg font-bold text-foreground">{price}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-brown font-semibold mb-1">
            Trvání
          </p>
          <p className="text-sm font-semibold text-foreground">{duration}</p>
        </div>
      </div>
      <p className="text-sm text-text-light">{photos}</p>
    </div>
  );
}

function PackageCard({
  pkg,
}: {
  pkg: NonNullable<(typeof services)[1]["packages"]>[number];
}) {
  return (
    <div className="bg-brown/10 rounded-lg p-4 border border-brown/20">
      <h4 className="font-bold text-foreground mb-2 text-sm tracking-wide">
        {pkg.name}
      </h4>
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <p className="text-xs uppercase tracking-wider text-brown font-semibold mb-1">
            Cena
          </p>
          <p className="text-base font-bold text-foreground">{pkg.price}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-brown font-semibold mb-1">
            Trvání
          </p>
          <p className="text-xs text-text-light">{pkg.duration}</p>
        </div>
      </div>
      <ul className="space-y-1">
        {pkg.features.map((feature, i) => (
          <li key={i} className="flex items-start text-xs text-text-light">
            <span className="w-1 h-1 bg-brown rounded-full flex-shrink-0 mt-1.5 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      {pkg.extraPrice && (
        <p className="text-xs text-brown font-semibold mt-2 pt-2 border-t border-brown/10">
          {pkg.extraPrice}
        </p>
      )}
    </div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────

export default function Services() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const allImages = getAllServiceImages();

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    setIsLightboxOpen(false);
    document.body.style.overflow = "unset";
    document.documentElement.style.overflow = "unset";
  };

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % allImages.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === 0 ? allImages.length - 1 : selectedIndex - 1,
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowRight":
          nextImage();
          break;
        case "ArrowLeft":
          prevImage();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex, allImages]);
  return (
    <section className="py-16 md:py-40 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="relative mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:ml-8"
          >
            <p className="text-sm tracking-[0.3em] text-brown uppercase mb-4">
              {header.eyebrow}
            </p>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              {header.heading}
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="w-24 h-px bg-brown mt-6 origin-left"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-light mt-8 max-w-lg md:ml-8"
          >
            {header.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute -top-20 -right-20 w-80 h-80 border border-brown/40 rounded-full"
          />
        </div>

        {/* Service rows */}
        <div className="divide-y divide-brown/10 md:space-y-20">
          {services.map((service, index) => {
            const imageLeft = index % 2 === 0;
            const extraImages = service.images ?? [];

            // Calculate the index of the main image in the allImages array
            let mainImageIndex = 0;
            for (let i = 0; i < index; i++) {
              mainImageIndex += 1 + (services[i].images?.length ?? 0);
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${imageLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-0 items-stretch`}
              >
                {/* Main side image */}
                <ImagePanel
                  src={service.image}
                  alt={service.title}
                  onClick={() => openLightbox(mainImageIndex)}
                />

                {/* Content panel */}
                <div className="flex-1 py-10 md:py-14 px-6 md:px-12 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-text-light leading-relaxed mb-6 max-w-xl">
                    {service.description}
                  </p>

                  {/* Extra photo strip — sits between description and pricing/packages */}
                  <ImageStrip
                    images={extraImages}
                    alt={service.title}
                    onImageClick={(stripIndex) => {
                      // mainImageIndex + 1 because the first image in the strip starts after the main image
                      openLightbox(mainImageIndex + 1 + stripIndex);
                    }}
                  />

                  {/* Packages variant */}
                  {"packages" in service && service.packages ? (
                    <div className="space-y-3">
                      {service.packages.map((pkg, pkgIndex) => (
                        <PackageCard key={pkgIndex} pkg={pkg} />
                      ))}
                    </div>
                  ) : (
                    <>
                      <PriceBox
                        price={service.price!}
                        duration={service.duration!}
                        photos={service.photos!}
                      />
                      <FeatureList features={service.features} />
                      {service.extraPrice && (
                        <p className="text-xs text-brown font-semibold mt-4 pt-4 border-t border-brown/20">
                          {service.extraPrice}
                        </p>
                      )}
                    </>
                  )}

                  {/* CTA Button */}
                  <motion.button
                    onClick={() => {
                      window.dispatchEvent(
                        new CustomEvent("serviceSelected", {
                          detail: { service: service.title },
                        }),
                      );
                      setTimeout(() => {
                        document
                          .getElementById("contact")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }, 300);
                    }}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-8 bg-brown text-white px-8 py-3 font-medium text-sm uppercase tracking-wider hover:bg-charcoal transition-all flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-brown focus:ring-offset-2 focus:ring-offset-background rounded-full shadow-lg hover:shadow-xl !w-fit"
                  >
                    objednat focení
                    <MessageCircleMore
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Booking block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-cream/30 border-2 border-brown/40 rounded-xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-brown" />
                <h4 className="font-semibold text-foreground">
                  {booking.location.title}
                </h4>
              </div>
              <p className="text-sm text-text-light leading-relaxed">
                {booking.location.text}
              </p>
              <p className="text-sm text-brown font-semibold mt-3">
                {booking.location.transport}
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Phone className="w-5 h-5 text-brown" />
                <h4 className="font-semibold text-foreground">
                  {booking.preparation.title}
                </h4>
              </div>
              <p className="text-sm text-text-light leading-relaxed">
                {booking.preparation.text}
              </p>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-brown/20">
            <p className="text-text-light mb-6">{booking.cta.text}</p>
            <motion.a
              href="#contact"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="w-fit mx-auto bg-brown text-white px-10 py-4 font-medium text-sm uppercase tracking-wider hover:bg-charcoal transition-all flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brown focus:ring-offset-2 focus:ring-offset-background rounded-full shadow-lg hover:shadow-xl"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new Event("navigationStart"));
                setTimeout(() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setTimeout(
                    () => window.dispatchEvent(new Event("navigationEnd")),
                    1000,
                  );
                }, 200);
              }}
            >
              {booking.cta.label}
              <MessageCircleMore
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Prohlížeč obrázků"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-dvh"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={allImages[selectedIndex]}
                alt="Zvětšená fotografie"
                className="w-full h-full object-contain"
              />

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-3 hover:bg-black/75 transition-all backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white z-10"
                aria-label="Zavřít prohlížeč"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>

              {/* Navigation Arrows */}
              {allImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-4 hover:bg-black/75 transition-all backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white z-10"
                    aria-label="Předchozí obrázek"
                  >
                    <ChevronLeft className="w-6 h-6" aria-hidden="true" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-4 hover:bg-black/75 transition-all backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white z-10"
                    aria-label="Další obrázek"
                  >
                    <ChevronRight className="w-6 h-6" aria-hidden="true" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 rounded-full px-4 py-2 backdrop-blur-sm text-sm">
                {selectedIndex + 1} / {allImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

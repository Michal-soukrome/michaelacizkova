"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Quote, Star, User } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import OptimizedImage from "./OptimizedImage";

const testimonials = [
  {
    name: "Zuzana J.",
    role: "",
    content:
      "Michaela je velmi milá a šikovná fotografka. Nafotila nám krásně rodinnou oslavu, díky ní budeme mít navždy krásnou památku na babičku a všechny ostatní přítomné. Doporučuji!",
    image: "/assets/4.jpg",
    rating: 5,
  },
  {
    name: "Natálie F.",
    role: "",
    content:
      "Děkujem za krásné fotky. Perfektní komunikace, samotné focení moc příjemné, i když člověk nemá moc zkušeností před objektivem tak Míša s klidem a úsměvem pomůže. Profesionální přístup",
    image: "/assets/5.jpg",
    rating: 5,
  },
  {
    name: "NextTalk",
    role: "Organizace eventů se speciálními hosty",
    content:
      "Na fotkách od paní Čížkové se nám nejvíce líbí emoce, které dokáže zachytit. Je to absolutní přidaná hodnota snímků. Ať už fotky ze zákulisí, či ze samotných akcí. Je vidět, že si s fotkami hodně “hraje” a to je na fotografovi extrémně důležité. Vždy bezproblémová domluva, takže můžeme jen doporučit a zároveň poděkovat za práci, kterou pro Next Talk odvádí!",
    image: "/assets/6.jpg",
    rating: 5,
  },
];

export default function Testimonials() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: "trimSnaps",
      dragFree: false,
    },
    [
      Autoplay({
        delay: 6000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const handleImageError = (index: number) => {
    setFailedImages((prev) => new Set(prev).add(index));
  };

  return (
    <section className="py-16 md:py-40 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Artistic header with offset */}
        <div className="relative mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:ml-8"
          >
            <p className="text-sm tracking-[0.3em] text-brown uppercase mb-4">
              Říkají o mně
            </p>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              Reference
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
            Slova těch, kteří zažili mou fotografii na vlastní kůži
          </motion.p>
        </div>

        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="embla__slide cursor-grab flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_calc(33.333%-1rem)]"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-8 h-full flex flex-col backdrop-blur-md border border-brown/40 hover:border-brown/60 transition-all duration-300 group bg-cream/30"
                >
                  {/* Quote Icon */}
                  <div className="mb-6 text-brown/60 group-hover:text-brown transition-colors">
                    <Quote className="w-10 h-10" />
                  </div>

                  {/* Stars Rating */}
                  <div className="flex mb-4 gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brown text-brown" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-text-light mb-6 grow leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center pt-4 border-t border-brown/20">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 ring-2 ring-brown/40 group-hover:ring-brown/60 transition-all bg-cream flex items-center justify-center">
                      {failedImages.has(index) ? (
                        <User className="w-7 h-7 text-brown" />
                      ) : (
                        <OptimizedImage
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          onError={() => handleImageError(index)}
                        />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-text-light">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots with Progress Indicator */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`relative h-2 rounded-full transition-all duration-300 overflow-hidden ${
                index === selectedIndex
                  ? "w-8"
                  : "w-2 bg-brown/40 hover:bg-brown/70"
              }`}
            >
              {/* Background bar */}
              <div
                className={`absolute inset-0 rounded-full ${index === selectedIndex ? "bg-brown/20" : ""}`}
              />

              {/* Progress fill - animates for active dot */}
              {index === selectedIndex && (
                <motion.div
                  key={selectedIndex}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                  className="absolute inset-y-0 left-0 bg-brown rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Trust Indicators - Artistic offset layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
        >
          {[
            { value: "500+", label: "Spokojených klientů" },
            { value: "1000+", label: "Dokončených projektů" },
            { value: "15+", label: "Let zkušeností" },
            { value: "25+", label: "Získaných ocenění" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center md:text-left"
              //  style={{
              //    transform: `translateY(${index % 2 === 1 ? "1rem" : "0"})`,
              //  }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-foreground">
                {stat.value}
              </div>
              <div className="text-text-light text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import OptimizedImage from "./OptimizedImage";

const heroImages = [
  { src: "/assets/hero/cover-1.jpg", alt: "Captivating portrait photography" },
  {
    src: "/assets/hero/cover-2.jpg",
    alt: "Stunning black and white photography",
  },
  { src: "/assets/hero/cover-3.jpg", alt: "Professional portrait session" },
  { src: "/assets/hero/cover-4.jpg", alt: "Professional portrait session" },
  { src: "/assets/hero/cover-5.jpg", alt: "Professional portrait session" },
];

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.97]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      emblaApi.plugins()?.autoplay?.reset();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      emblaApi.plugins()?.autoplay?.reset();
    }
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
        // Explicitly reset the autoplay timer
        const autoplay = emblaApi.plugins()?.autoplay;
        if (autoplay) {
          autoplay.stop();
          autoplay.play();
        }
      }
    },
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

  const handleScrollDown = () => {
    window.dispatchEvent(new Event("navigationStart"));
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => window.dispatchEvent(new Event("navigationEnd")), 1000);
  };

  return (
    <section
      ref={heroRef}
      id="hero-section"
      className="relative min-h-dvh flex items-center overflow-hidden -mt-20 pt-20 md:pt-40"
    >
      {/* Hero Content */}
      <motion.div
        style={{ scale }}
        // removed mix-blend-plus-lighter — was washing out text
        className="relative z-20 px-8 md:px-16 lg:px-24 max-w-7xl py-16 mx-auto w-full flex flex-col items-start justify-end sm:justify-center h-full"
      >
        {/* Decorative circle — softened opacity so it doesn't compete */}
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="absolute -top-20 -left-10 w-40 h-40 rounded-full border border-white/20 rotate-12"
        />

        <motion.div
          initial={false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-sm md:text-base tracking-[0.3em] text-white/50 mb-4 uppercase">
            FOTOGRAFKA Z ČESKÉHO RÁJE
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter ">
            <span className="text-white drop-shadow-lg">Michaela</span>
            <br />
            <span
              className="text-transparent ml-8 md:ml-16"
              style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.75)" }}
            >
              Čížková
            </span>
          </h1>
          <h2 className="!hidden mt-8 text-xl md:text-2xl font-semibold text-white/85 max-w-3xl leading-snug">
            Věřím, že ty nejkrásnější fotografie vznikají ve chvílích, kdy jste
            sami sebou. Jsem tu od toho, abych tyto chvíle zachytila.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 ml-0 md:ml-20 "
        >
          {/* Thin decorative line above paragraph */}
          <div className="w-10 h-px bg-white/30 mb-5" />
          {/* text-white/80 instead of text-tan — tan blended into warm photo tones */}
          <p className="text-lg md:text-xl text-white/50 leading-relaxed">
            Český ráj - Jičín · Mladějov · Turnov · Mladá Boleslav{" "}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex gap-4 mt-12 flex-wrap ml-0 md:ml-20"
        >
          {/* Primary CTA — white fill, dark text for max contrast */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-fit justify-center btn-base btn-primary"
            onClick={() => {
              window.dispatchEvent(new Event("navigationStart"));
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" });
              setTimeout(
                () => window.dispatchEvent(new Event("navigationEnd")),
                1000,
              );
            }}
          >
            Moje služby
          </motion.button>

          {/* Secondary CTA — white border/text instead of brown (brown was invisible) */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-fit justify-center btn-base btn-secondary"
            onClick={() => {
              window.dispatchEvent(new Event("navigationStart"));
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
              setTimeout(
                () => window.dispatchEvent(new Event("navigationEnd")),
                1000,
              );
            }}
          >
            Kontakt
          </motion.button>
        </motion.div>

        {/* Pagination Dots */}
        <div className="absolute top-0.5 md:top-8 right-3 md:right-8 z-50 flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`relative h-2 rounded-full transition-all duration-300 overflow-hidden ${
                index === selectedIndex
                  ? "w-8"
                  : "w-2 bg-white/30 hover:bg-white/60"
              }`}
            >
              <div
                className={`absolute inset-0 rounded-full ${index === selectedIndex ? "bg-white/30" : ""}`}
              />
              {index === selectedIndex && (
                <motion.div
                  key={selectedIndex}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="absolute inset-y-0 left-0 bg-white rounded-full"
                />
              )}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Hero Image Carousel with Overlay */}
      <div className="absolute inset-0">
        {/* Stronger dark overlay for readability — was 50%, now 55% */}
        <div className="absolute inset-0 bg-black/40 z-5" />

        {/* Gradient: left-side darkening so text on left always has contrast */}
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/15 to-transparent z-6" />

        <div className="embla h-full" ref={emblaRef}>
          <div className="embla__container h-full">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className="embla__slide flex-[0_0_100%] relative"
              >
                <OptimizedImage
                  photo={{ ...image, width: 2000, height: 1200 }}
                  fill
                  className="object-center"
                  objectFit="cover"
                  priority={true}
                  quality={90}
                  sizes="100vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows — shown on hover via group, or always on md+ */}
        <button
          className="hidden md:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 text-white p-3 md:p-4 rounded-full transition-all duration-300 opacity-60 hover:opacity-100 hover:bg-white/20"
          onClick={scrollPrev}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          className="hidden md:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 text-white p-3 md:p-4 rounded-full transition-all duration-300 opacity-60 hover:opacity-100 hover:bg-white/20"
          onClick={scrollNext}
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </section>
  );
}

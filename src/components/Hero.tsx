"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowDown } from "lucide-react";
import OptimizedImage from "./OptimizedImage";

const heroImages = [
  {
    src: "/assets/1.jpg",
    alt: "Captivating portrait photography",
  },
  {
    src: "/assets/2.jpg",
    alt: "Stunning black and white photography",
  },
  {
    src: "/assets/3.jpg",
    alt: "Professional portrait session",
  },
  {
    src: "/assets/4.jpg",
    alt: "Professional portrait session",
  },
  {
    src: "/assets/5.jpg",
    alt: "Professional portrait session",
  },
];

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })], // autoplay timer
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
        // Reset the autoplay timer when user manually changes slide
        emblaApi.plugins()?.autoplay?.reset();
      }
    },
    [emblaApi],
  );

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
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
    setTimeout(() => {
      window.dispatchEvent(new Event("navigationEnd"));
    }, 1000);
  };

  return (
    <section
      ref={heroRef}
      className="relative h-dvh flex items-center overflow-hidden"
    >
      {/* Hero Content with Parallax - Offset to the left */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-20 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto w-full mix-blend-plus-lighter"
      >
        {/* Decorative Shape */}
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="absolute -top-20 -left-10 w-40 h-40 rounded-full border border-brown/30 rotate-12"
        />

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-sm md:text-base tracking-[0.3em] text-brown mb-4 uppercase">
            Fotografka
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85]">
            Michaela
            <br />
            <span className="text-stroke text-transparent [-webkit-text-stroke:1px_var(--charcoal)] ml-8 md:ml-16">
              Čížková
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 ml-0 md:ml-20 max-w-md"
        >
          <div className="hidden w-12 h-px bg-brown mb-6" />
          <p className="text-lg md:text-xl text-tan leading-relaxed">
            Věřím, že ty nejkrásnější fotografie vznikají ve chvílích, kdy jste
            sami sebou. Jsem tu od toho, abych tyto chvíle zachytila.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex gap-6 mt-12 ml-0 md:ml-20"
        >
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="w-fit bg-charcoal text-white px-8 py-4 font-medium text-sm tracking-wider uppercase hover:bg-brown transition-all duration-300 rounded-full shadow-lg hover:shadow-xl"
            onClick={handleScrollDown}
          >
            Prohlédnout portfolio
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:flex border-2 border-brown text-brown px-8 py-4 font-medium text-sm tracking-wider uppercase hover:bg-brown hover:text-white transition-all duration-300 rounded-full"
            onClick={() => {
              window.dispatchEvent(new Event("navigationStart"));
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
              setTimeout(() => {
                window.dispatchEvent(new Event("navigationEnd"));
              }, 1000);
            }}
          >
            Kontakt
          </motion.button>
        </motion.div>
        {/* Pagination Dots with Progress Indicator */}
        <div className="absolute top-0.5 md:top-8 right-3 md:right-8 z-50 flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`relative h-2 md:p-2 cursor-pointer rounded-full transition-all duration-300 overflow-hidden ${
                index === selectedIndex
                  ? "w-8"
                  : "w-2 bg-charcoal hover:bg-brown"
              }`}
            >
              {/* Background bar */}
              <div
                className={`absolute inset-0 rounded-full ${index === selectedIndex ? "bg-charcoal" : ""}`}
              />

              {/* Progress fill - animates for active dot */}
              {index === selectedIndex && (
                <motion.div
                  key={selectedIndex}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="absolute inset-y-0 left-0 bg-sage rounded-full"
                />
              )}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Hero Image Carousel with Overlay */}
      <div className="absolute inset-0">
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/50 z-5" />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-linear-to-b from-cream/40 via-transparent to-cream/40 z-10" />
        <div className="absolute inset-0 bg-linear-to-r from-cream/20 via-transparent to-cream/20 z-10" />

        <div className="embla h-full" ref={emblaRef}>
          <div className="embla__container h-full">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className="embla__slide flex-[0_0_100%] relative"
              >
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-center"
                  objectFit="cover"
                  priority={index === 0}
                  quality={90}
                  sizes="100vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          className="hidden absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-brown/60 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all duration-300 opacity-75 hover:opacity-100 group-hover:opacity-100"
          onClick={scrollPrev}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          className="hidden absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-brown/60 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all duration-300 opacity-75 hover:opacity-100 group-hover:opacity-100"
          onClick={scrollNext}
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </section>
  );
}

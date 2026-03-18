"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowDown } from "lucide-react";
import OptimizedImage from "./OptimizedImage";

const heroImages = [
  {
    src: "https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1863882_1280.jpg",
    alt: "Captivating portrait photography",
  },
  {
    src: "https://cdn.pixabay.com/photo/2023/02/05/17/55/woman-7771713_1280.jpg",
    alt: "Stunning black and white photography",
  },
  {
    src: "https://cdn.pixabay.com/photo/2019/03/12/08/32/people-4051147_1280.jpg",
    alt: "Professional portrait session",
  },
];

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
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
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center overflow-hidden"
    >
      {/* Hero Content with Parallax - Offset to the left */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-20 px-8 md:px-16 lg:px-24 max-w-4xl"
      >
        {/* Decorative Shape */}
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="absolute -top-20 -left-10 w-40 h-40 border border-white/20 rotate-12"
        />

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-sm md:text-base tracking-[0.3em] text-gray-400 mb-4 uppercase">
            Fotografka
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85]">
            Michaela
            <br />
            <span className="text-stroke text-transparent [-webkit-text-stroke:1px_white] ml-8 md:ml-16">
              Čížková
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 ml-4 md:ml-20 max-w-md"
        >
          <div className="w-12 h-px bg-white mb-6" />
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Zachycuji příběhy skrze světlo a stín. Každý snímek je emocí, každý
            moment je uměním.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex gap-6 mt-12 ml-4 md:ml-20"
        >
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-8 py-4 font-medium text-sm tracking-wider uppercase hover:bg-gray-100 transition-all duration-300"
            onClick={handleScrollDown}
          >
            Prohlédnout portfolio
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="border border-white text-white px-8 py-4 font-medium text-sm tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-300"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Kontakt
          </motion.button>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={handleScrollDown}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-6 h-6 text-white/60" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Hero Image Carousel with Overlay */}
      <div className="absolute inset-0">
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/60 z-10" />
        <div className="absolute inset-0 bg-linear-to-r from-black/20 via-transparent to-black/20 z-10" />

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
                  className="object-cover object-center"
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
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all duration-300 opacity-0 hover:opacity-100 group-hover:opacity-100"
          onClick={scrollPrev}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all duration-300 opacity-0 hover:opacity-100 group-hover:opacity-100"
          onClick={scrollNext}
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-white w-8"
                  : "bg-white/40 hover:bg-white/70 w-2"
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

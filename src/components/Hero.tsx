"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroImages = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200",
  "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200",
  "https://images.unsplash.com/photo-1554048612-b6a482dbe3c2?w=1200",
];

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
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
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden group">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          Capturing Moments
        </h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          onClick={() =>
            setTimeout(() => {
              document
                .getElementById("gallery")
                ?.scrollIntoView({ behavior: "smooth" });
            }, 200)
          }
        >
          View Portfolio
        </motion.button>
      </motion.div>

      {/* Hero Image Carousel */}
      <div className="absolute inset-0">
        <div className="embla h-full" ref={emblaRef}>
          <div className="embla__container h-full">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className="embla__slide flex-[0_0_100%] relative"
              >
                <Image
                  src={image}
                  alt={`Hero image ${index + 1}`}
                  fill
                  className="object-cover object-center opacity-25"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
          onClick={scrollPrev}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
          onClick={scrollNext}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

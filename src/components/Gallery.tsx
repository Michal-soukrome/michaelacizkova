"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { photos } from "../lib/photos";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import OptimizedImage from "./OptimizedImage";

const getSizeClasses = (size: string) => {
  switch (size) {
    case "large":
      return "col-span-1 md:col-span-2 row-span-1 md:row-span-2";
    case "medium":
      return "col-span-1 row-span-1 md:row-span-2";
    case "small":
    default:
      return "col-span-1 row-span-1";
  }
};

const categories = ["Vše", "Portréty", "Krajiny", "Street", "Příroda"];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const filteredPhotos = useMemo(() => {
    if (selectedCategory === "All") return photos;
    return photos.filter((photo) => photo.category === selectedCategory);
  }, [selectedCategory]);

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
      setSelectedIndex((selectedIndex + 1) % filteredPhotos.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === 0 ? filteredPhotos.length - 1 : selectedIndex - 1,
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
  }, [selectedIndex, filteredPhotos]);

  return (
    <>
      <div className="container mx-auto px-4 py-24">
        {/* Offset header design */}
        <div className="relative mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:ml-12"
          >
            <p className="text-sm tracking-[0.3em] text-mauve-600 uppercase mb-4">
              Výběr z mé tvorby
            </p>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              Portfolio
            </h2>
          </motion.div>

          {/* Decorative element */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute -bottom-4 left-0 md:left-12 w-24 h-px bg-mauve-500 origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-mauve-600 mt-8 max-w-lg md:ml-12"
          >
            Pečlivě vybraná kolekce mých nejlepších snímků. Každá fotografie
            vypráví svůj vlastní příběh.
          </motion.p>
        </div>

        {/* Category Filter - Artistic offset design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 md:gap-4 mb-16 md:ml-12"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() =>
                setSelectedCategory(
                  category === "Vše"
                    ? "All"
                    : category === "Portréty"
                      ? "Portraits"
                      : category === "Krajiny"
                        ? "Landscapes"
                        : category === "Příroda"
                          ? "Nature"
                          : category,
                )
              }
              className={`px-6 py-3 text-sm tracking-wider uppercase transition-all duration-300 rounded-full ${
                (selectedCategory === "All" && category === "Vše") ||
                (selectedCategory === "Portraits" && category === "Portréty") ||
                (selectedCategory === "Landscapes" && category === "Krajiny") ||
                (selectedCategory === "Nature" && category === "Příroda") ||
                selectedCategory === category
                  ? "bg-mauve-500 text-white shadow-lg"
                  : "bg-transparent text-mauve-600 hover:text-mauve-500 border border-mauve-500/40 hover:border-mauve-500"
              }`}
              // style={{
              //  transform: `translateY(${index % 2 === 0 ? "0" : "8px"})`,
              // }}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[400px] md:auto-rows-[300px]">
          <AnimatePresence>
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
                className={`relative group cursor-pointer overflow-hidden rounded-lg ${getSizeClasses(
                  photo.size,
                )}`}
                onClick={() => openLightbox(index)}
              >
                <OptimizedImage
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-mauve-500/80 via-mauve-500/0 to-mauve-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {photo.title}
                    </h3>
                    <p className="text-white text-sm opacity-85">
                      {photo.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {/* TODO: implement load more button and show less images intially */}
          {/* TODO: also think about how many images we should display on mobile devices (keep load more function but show even less images than on desktop) */}
        </div>
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
            aria-label={`Prohlížeč obrázků: ${filteredPhotos[selectedIndex].title}`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-dvh"
              onClick={(e) => e.stopPropagation()}
            >
              <OptimizedImage
                src={filteredPhotos[selectedIndex].src}
                alt={filteredPhotos[selectedIndex].alt}
                fill
                objectFit="contain"
                priority
                quality={95}
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
              {filteredPhotos.length > 1 && (
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

              {/* Image Info */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center bg-black/50 backdrop-blur-sm rounded-full px-6 py-3 z-10">
                <h3 className="text-lg font-semibold mb-1">
                  {filteredPhotos[selectedIndex].title}
                </h3>
                <p className="text-sm text-gray-300">
                  {filteredPhotos[selectedIndex].category} • {selectedIndex + 1}{" "}
                  / {filteredPhotos.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import OptimizedImage from "./OptimizedImage";
import { getAvailableCategories } from "@/lib/photoUtils";
import { getPhotos } from "@/lib/sanity/photos";
import { categoryLabels } from "@/lib/photoUtils";
import { Photo, PhotoCategory } from "@/lib/photoTypes";
import Lightbox from "./Lightbox";
import SectionHero from "./SectionHero";
import Container from "./Container";

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

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<PhotoCategory>("");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [displayedCount, setDisplayedCount] = useState(12);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [categoryOptions, setCategoryOptions] = useState<
    { value: PhotoCategory; label: string }[]
  >([]);

  useEffect(() => {
    getPhotos().then((data) => {
      setPhotos(data);

      const categories = [
        { value: "" as PhotoCategory, label: "Vše" },
        ...getAvailableCategories(data).filter((c) => c.value !== ""),
      ];

      setCategoryOptions(categories);
    });
  }, []);

  useEffect(() => {
    // Set initial displayed count based on screen size
    const updateDisplayCount = () => {
      if (typeof window !== "undefined") {
        setDisplayedCount(window.innerWidth < 768 ? 6 : 12);
      }
    };
    updateDisplayCount();
    window.addEventListener("resize", updateDisplayCount);
    return () => window.removeEventListener("resize", updateDisplayCount);
  }, []);

  const filteredPhotos = useMemo(() => {
    if (selectedCategory === "") return photos;
    return photos.filter((photo) => photo.category === selectedCategory);
  }, [selectedCategory, photos]);

  const displayedPhotos = useMemo(() => {
    return filteredPhotos.slice(0, displayedCount);
  }, [filteredPhotos, displayedCount]);

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
      <div className="py-12 bg-background overflow-hidden">
        <Container>
          <SectionHero
            eyebrow="Výběr z mé tvorby"
            title="Portfolio – ukázky focení v Českém ráji"
            subtitle="Ukázky jednotlivých typů focení"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16 md:ml-12"
          >
            <div className="flex flex-wrap gap-2 md:gap-4">
              {categoryOptions.map((option, index) => {
                const isActive = selectedCategory === option.value;

                return (
                  <motion.button
                    key={`${option.value}-${index}`}
                    onClick={() => setSelectedCategory(option.value)}
                    aria-pressed={isActive}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`btn-base ${
                      isActive ? "btn-primary" : "btn-secondary"
                    }`}
                  >
                    {option.label}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[400px] md:auto-rows-[300px]">
            <AnimatePresence>
              {displayedPhotos.map((photo, index) => (
                <motion.div
                  key={photo._id}
                  layout
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className={`relative group overflow-hidden rounded-lg ${getSizeClasses(photo.size)}`}
                  onClick={() => openLightbox(index)}
                >
                  <OptimizedImage
                    photo={photo}
                    fill
                    priority={index < 3}
                    className="transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-brown/80 via-brown/0 to-brown/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {photo.title}
                      </h3>
                      {categoryLabels[photo.category] ? (
                        <p className="text-white text-sm opacity-85">
                          {categoryLabels[photo.category]}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Load More Button */}
          {displayedCount < filteredPhotos.length && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center mt-12 md:ml-12"
            >
              <button
                onClick={() =>
                  setDisplayedCount((prev) =>
                    Math.min(
                      prev +
                        (typeof window !== "undefined" &&
                        window.innerWidth < 768
                          ? 6
                          : 12),
                      filteredPhotos.length,
                    ),
                  )
                }
                className="px-8 py-4 bg-brown text-white font-semibold text-sm tracking-wider uppercase rounded-full hover:bg-charcoal transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Načíst více
              </button>
            </motion.div>
          )}
        </Container>
      </div>

      {/* Enhanced Lightbox */}
      <Lightbox
        photos={filteredPhotos}
        selectedIndex={selectedIndex}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
}

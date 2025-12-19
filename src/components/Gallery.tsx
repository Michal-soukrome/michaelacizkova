"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { photos } from "../lib/photos";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % photos.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === 0 ? photos.length - 1 : selectedIndex - 1
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
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 auto-rows-[400px] md:auto-rows-[300px]">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`relative group cursor-pointer overflow-hidden ${getSizeClasses(
                photo.size
              )}`}
              onClick={() => openLightbox(index)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                unoptimized={photo.src.startsWith("http")}
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500 z-0"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-full p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[selectedIndex].src}
                alt={photos[selectedIndex].alt}
                width={800}
                height={600}
                unoptimized={photos[selectedIndex].src.startsWith("http")}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="absolute top-2 right-2 flex space-x-2">
                <button
                  onClick={closeLightbox}
                  className="text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              {photos.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                <h3 className="text-xl font-semibold">
                  {photos[selectedIndex].title}
                </h3>
                <p className="text-sm opacity-75">
                  {photos[selectedIndex].alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

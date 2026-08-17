"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import OptimizedImage from "./OptimizedImage";
import { useEffect } from "react";
import { Photo } from "@/lib/photoTypes";
import { categoryLabels } from "@/lib/photoUtils";

interface LightboxProps {
  photos: Photo[];
  selectedIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  photos,
  selectedIndex,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const isOpen = selectedIndex !== null;

  // Keyboard controls
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowRight":
          onNext();
          break;
        case "ArrowLeft":
          onPrev();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || selectedIndex === null) return null;

  const photo =
    selectedIndex !== null && photos[selectedIndex]
      ? photos[selectedIndex]
      : null;

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox"
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 bg-black z-50 flex items-center justify-center"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={
          photo ? `Prohlížeč obrázků: ${photo.title}` : "Prohlížeč obrázků"
        }
      >
        <motion.div
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="relative w-full h-dvh"
          onClick={(e) => e.stopPropagation()}
        >
          {photo && (
            <OptimizedImage
              photo={photo}
              fill
              sizes="100vw"
              objectFit="contain"
              priority
              quality={95}
            />
          )}

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-3 hover:bg-black/75 transition-all backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white z-10"
            aria-label="Zavřít prohlížeč"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>

          {/* Navigation */}
          {photos.length > 1 && (
            <>
              <button
                onClick={onPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-4 hover:bg-black/75 transition-all backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white z-10"
                aria-label="Předchozí obrázek"
              >
                <ChevronLeft className="w-6 h-6" aria-hidden="true" />
              </button>

              <button
                onClick={onNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-4 hover:bg-black/75 transition-all backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white z-10"
                aria-label="Další obrázek"
              >
                <ChevronRight className="w-6 h-6" aria-hidden="true" />
              </button>
            </>
          )}

          {photo && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center bg-black/50 backdrop-blur-sm rounded-full px-6 py-3 z-10">
              <h3 className="text-lg font-semibold mb-1">{photo.title}</h3>
              <p className="text-sm text-gray-300">
                {categoryLabels[photo.category]
                  ? `${categoryLabels[photo.category]} • ${selectedIndex + 1} / ${photos.length}`
                  : `${selectedIndex + 1} / ${photos.length}`}
              </p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

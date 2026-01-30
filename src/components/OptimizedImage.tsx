"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  onClick?: () => void;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  priority = false,
  sizes,
  quality = 85,
  onClick,
  objectFit = "cover",
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div
        className={`bg-gray-800 flex items-center justify-center ${className}`}
        role="img"
        aria-label={`Obrázek se nepodařilo načíst: ${alt}`}
      >
        <span className="text-gray-500 text-sm">Obrázek nelze načíst</span>
      </div>
    );
  }

  return (
    <div
      className={`relative ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e: React.KeyboardEvent) => e.key === "Enter" && onClick()
          : undefined
      }
      aria-label={onClick ? `Zobrazit obrázek: ${alt}` : undefined}
    >
      {/* Blur placeholder */}
      {isLoading && (
        <div
          className="absolute inset-0 bg-gray-900 animate-pulse"
          aria-hidden="true"
        />
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        className="relative w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          fill={fill}
          className={`${
            objectFit === "cover"
              ? "object-cover"
              : objectFit === "contain"
                ? "object-contain"
                : ""
          } ${className}`}
          quality={quality}
          priority={priority}
          sizes={
            sizes || "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? "eager" : "lazy"}
          placeholder="empty"
        />
      </motion.div>
    </div>
  );
}

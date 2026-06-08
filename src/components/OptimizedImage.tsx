"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

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
  onError,
  objectFit = "cover",
  blurDataURL,
}: any) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      onClick={onClick}
    >
      {/* Blur overlay */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoading ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-gray-900/20 backdrop-blur-xl"
      />

      <Image
        src={src}
        alt={alt}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        fill={fill}
        className={`transition-all duration-700 ${
          objectFit === "cover"
            ? "object-cover"
            : objectFit === "contain"
              ? "object-contain"
              : ""
        } ${isLoading ? "scale-105 blur-xl" : "scale-100 blur-0"}`}
        quality={quality}
        priority={priority}
        sizes={
          sizes || "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        }
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          onError?.();
        }}
        placeholder={blurDataURL ? "blur" : "empty"}
        blurDataURL={blurDataURL}
      />
    </div>
  );
}

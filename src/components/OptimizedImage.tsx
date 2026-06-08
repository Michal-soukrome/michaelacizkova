"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function OptimizedImage({
  photo,
  fill = false,
  className = "",
  priority = false,
  sizes,
  quality = 85,
  onClick,
  onError,
  objectFit = "cover",
}: {
  photo: {
    src: string;
    alt: string;
    width: number;
    height: number;
    blurDataURL?: string;
  };
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  onClick?: () => void;
  onError?: () => void;
  objectFit?: "cover" | "contain";
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [photo.src]);

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      onClick={onClick}
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoading ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-gray-900/20 backdrop-blur-xl"
      />

      <Image
        src={photo.src}
        alt={photo.alt}
        width={!fill ? photo.width : undefined}
        height={!fill ? photo.height : undefined}
        fill={fill}
        className={`transition-all duration-700 ${
          objectFit === "cover" ? "object-cover" : "object-contain"
        } ${isLoading ? "scale-105 blur-xl" : "scale-100 blur-0"}`}
        quality={quality}
        priority={priority}
        sizes={sizes}
        onLoadingComplete={() => setIsLoading(false)}
        placeholder={photo.blurDataURL ? "blur" : "empty"}
        blurDataURL={photo.blurDataURL}
      />
    </div>
  );
}

/**
 * Performance monitoring utilities for Next.js
 */

// Report Web Vitals
export function reportWebVitals(metric: any) {
  if (process.env.NODE_ENV === "development") {
    console.log(metric);
  }

  // Send to analytics endpoint
  const body = JSON.stringify(metric);
  const url = "/api/analytics";

  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body);
  } else {
    fetch(url, { body, method: "POST", keepalive: true });
  }
}

// Image loading performance
export function trackImageLoad(imageUrl: string, loadTime: number) {
  if (process.env.NODE_ENV === "development") {
    console.log(`Image loaded: ${imageUrl} in ${loadTime}ms`);
  }
}

// Lazy load intersection observer
export function createIntersectionObserver(
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit,
) {
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: "50px",
    threshold: 0.1,
    ...options,
  };

  return new IntersectionObserver(callback, defaultOptions);
}

// Preload critical images
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
}

// Debounce utility for performance
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle utility for scroll events
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Check if device prefers reduced motion
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Get optimal image format support
export function getOptimalImageFormat(): "avif" | "webp" | "jpeg" {
  if (typeof window === "undefined") return "jpeg";

  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = 1;

  // Check AVIF support
  if (canvas.toDataURL("image/avif").indexOf("data:image/avif") === 0) {
    return "avif";
  }

  // Check WebP support
  if (canvas.toDataURL("image/webp").indexOf("data:image/webp") === 0) {
    return "webp";
  }

  return "jpeg";
}

// Memory optimization: Clear unused images from memory
export function clearImageCache() {
  if (typeof window === "undefined") return;

  // Force garbage collection by removing image references
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    if (!isInViewport(img)) {
      img.loading = "lazy";
    }
  });
}

// Check if element is in viewport
function isInViewport(element: Element): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

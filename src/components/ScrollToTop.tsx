"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Reset scroll při každé změně URL
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
  background?: "default" | "dark" | "gradient";
}

export default function Section({
  children,
  id,
  className = "",
  delay = 0,
  background = "default",
}: SectionProps) {
  const bgClasses = {
    default: "",
    dark: "bg-rose-light/20",
    gradient:
      "bg-gradient-to-b from-background via-rose-light/10 to-background",
  };

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={`relative py-20 md:py-32 ${bgClasses[background]} ${className}`}
    >
      {children}
    </motion.section>
  );
}

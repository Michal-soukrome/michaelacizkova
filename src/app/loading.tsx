"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="inline-block"
        >
          <Camera className="w-16 h-16 text-white" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-gray-400"
        >
          Načítám portfolio...
        </motion.p>
      </motion.div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Contact
      </motion.h2>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Name</label>
          <input
            type="text"
            className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Message</label>
          <textarea className="w-full p-2 bg-gray-800 border border-gray-600 rounded h-32"></textarea>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-white text-black py-2 rounded font-semibold hover:bg-gray-200 transition"
        >
          Send Message
        </motion.button>
      </form>
    </div>
  );
}

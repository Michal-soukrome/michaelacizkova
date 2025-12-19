"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Instagram,
  Twitter,
  Mail,
  MailCheck,
  Facebook,
} from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleScroll = (sectionId: string) => {
    setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 200);
    setIsOpen(false); // Close menu after navigation
  };

  return (
    <>
      <motion.header
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed left-0 top-0 h-full w-16 bg-black/80 backdrop-blur-sm z-50 flex flex-col items-center justify-between py-8"
      >
        {/* Social Icons Top */}
        <div className="flex flex-col space-y-4">
          <Facebook strokeWidth={0.5} />
          <Instagram strokeWidth={0.5} />
          <MailCheck strokeWidth={0.5} />
        </div>

        {/* Burger Right */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col space-y-1 p-2 cursor-pointer focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </motion.header>

      {/* Fullpage Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full fixed inset-0 bg-black/90 backdrop-blur-sm z-40 flex items-center justify-center"
            id="menu-open"
          >
            <motion.nav
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-center"
            >
              <ul className="space-y-8 text-4xl font-bold">
                <li>
                  <a
                    href="#home"
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll("home");
                    }}
                    className="hover:text-gray-300 transition"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll("gallery");
                    }}
                    className="hover:text-gray-300 transition"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll("about");
                    }}
                    className="hover:text-gray-300 transition"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll("services");
                    }}
                    className="hover:text-gray-300 transition"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll("testimonials");
                    }}
                    className="hover:text-gray-300 transition"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll("contact");
                    }}
                    className="hover:text-gray-300 transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

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

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
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
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-20 focus:z-100 focus:bg-rose-accent focus:text-white focus:px-4 focus:py-2 focus:text-sm"
      >
        Přeskočit na hlavní obsah
      </a>

      <motion.header
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed left-0 top-0 h-full w-16 bg-rose-light/80 backdrop-blur-sm z-50 flex flex-col items-center justify-between py-8"
        role="banner"
      >
        {/* Social Icons Top */}
        <nav aria-label="Sociální sítě" className="flex flex-col space-y-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-rose-accent transition-colors focus:outline-none focus:ring-2 focus:ring-rose-accent focus:ring-offset-2 focus:ring-offset-rose-light rounded"
          >
            <Facebook strokeWidth={0.5} aria-hidden="true" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-rose-accent transition-colors focus:outline-none focus:ring-2 focus:ring-rose-accent focus:ring-offset-2 focus:ring-offset-rose-light rounded"
          >
            <Instagram strokeWidth={0.5} aria-hidden="true" />
          </a>
          <a
            href="mailto:ahoj@michaelacizkova.cz"
            aria-label="Napsat email"
            className="hover:text-rose-accent transition-colors focus:outline-none focus:ring-2 focus:ring-rose-accent focus:ring-offset-2 focus:ring-offset-rose-light rounded"
          >
            <MailCheck strokeWidth={0.5} aria-hidden="true" />
          </a>
        </nav>

        {/* Burger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col space-y-1 p-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-rose-accent focus:ring-offset-2 focus:ring-offset-rose-light rounded"
          aria-label={isOpen ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={isOpen}
          aria-controls="main-navigation"
        >
          <span
            className={`block w-6 h-0.5 bg-rose-accent transition-transform ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-rose-accent transition-opacity ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-rose-accent transition-transform ${
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
            className="h-full fixed inset-0 bg-cream/95 backdrop-blur-sm z-40 flex items-center justify-center"
            id="menu-open"
            role="dialog"
            aria-modal="true"
            aria-label="Hlavní navigace"
          >
            <motion.nav
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="w-full text-center"
              id="main-navigation"
              aria-label="Hlavní menu"
            >
              <ul className="space-y-6 text-5xl font-light tracking-tight">
                <li className="overflow-hidden">
                  <motion.a
                    initial={{ y: 60 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.1 }}
                    href="#home"
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll("home");
                    }}
                    className="block hover:translate-x-4 transition-transform duration-300 hover:text-rose-accent"
                  >
                    <span className="text-rose-medium text-sm mr-4">01</span>
                    Domů
                  </motion.a>
                </li>
                <li className="overflow-hidden">
                  <motion.a
                    initial={{ y: 60 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.15 }}
                    href="#gallery"
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll("gallery");
                    }}
                    className="block hover:translate-x-4 transition-transform duration-300 hover:text-rose-accent"
                  >
                    <span className="text-rose-medium text-sm mr-4">02</span>
                    Portfolio
                  </motion.a>
                </li>
                <li className="overflow-hidden">
                  <motion.a
                    initial={{ y: 60 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2 }}
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll("about");
                    }}
                    className="block hover:translate-x-4 transition-transform duration-300 hover:text-rose-accent"
                  >
                    <span className="text-rose-medium text-sm mr-4">03</span>O
                    mně
                  </motion.a>
                </li>
                <li className="overflow-hidden">
                  <motion.a
                    initial={{ y: 60 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.25 }}
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll("services");
                    }}
                    className="block hover:translate-x-4 transition-transform duration-300 hover:text-rose-accent"
                  >
                    <span className="text-rose-medium text-sm mr-4">04</span>
                    Služby
                  </motion.a>
                </li>
                <li className="overflow-hidden">
                  <motion.a
                    initial={{ y: 60 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.3 }}
                    href="#testimonials"
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll("testimonials");
                    }}
                    className="block hover:translate-x-4 transition-transform duration-300 hover:text-rose-accent"
                  >
                    <span className="text-rose-medium text-sm mr-4">05</span>
                    Reference
                  </motion.a>
                </li>
                <li className="overflow-hidden">
                  <motion.a
                    initial={{ y: 60 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.35 }}
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll("contact");
                    }}
                    className="block hover:translate-x-4 transition-transform duration-300 hover:text-rose-accent"
                  >
                    <span className="text-rose-medium text-sm mr-4">06</span>
                    Kontakt
                  </motion.a>
                </li>
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

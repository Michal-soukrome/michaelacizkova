"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Mail, Facebook, Camera } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="bg-mauve-100/30 border-t border-mauve-500/30 py-20 relative overflow-hidden">
      {/* Decorative shapes */}
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        whileInView={{ opacity: 1, rotate: 12 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-12 right-12 w-32 h-32 border border-mauve-500/30 rounded-full"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute bottom-24 left-8 w-16 h-16 bg-mauve-500/20 rounded-full"
      />

      <motion.div
        className="container mx-auto px-4 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Main footer content with offset design */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          {/* Brand - Takes more space */}
          <motion.div className="md:col-span-5" variants={itemVariants}>
            <h1 className="font-medium text-foreground mb-2">
              Michaela
              <span className="font-semibold ml-1">Čížková</span>
            </h1>

            <p className="text-text-light text-sm leading-relaxed max-w-sm mb-8">
              Profesionální fotografka specializující se na nadčasovou
              černobílou fotografii, která zachycuje emoce a uměleckou krásu.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-mauve-500 flex items-center justify-center hover:border-mauve-600 hover:bg-mauve-500 hover:text-white transition-all duration-300 rounded-full text-mauve-500"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-mauve-500 flex items-center justify-center hover:border-mauve-600 hover:bg-mauve-500 hover:text-white transition-all duration-300 rounded-full text-mauve-500 "
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-mauve-500 flex items-center justify-center hover:border-mauve-600 hover:bg-mauve-500 hover:text-white transition-all duration-300 rounded-full text-mauve-500"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="mailto:foto.michaelacizkova@seznam.cz"
                className="w-10 h-10 border border-mauve-500 flex items-center justify-center hover:border-mauve-600 hover:bg-mauve-500 hover:text-white transition-all duration-300 rounded-full text-mauve-500"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="md:col-span-2" variants={itemVariants}>
            <h4 className="text-xs uppercase tracking-[0.2em] text-mauve-600 mb-6">
              Navigace
            </h4>
            <ul className="flex gap-3 items-center flex-wrap text-sm text-text-light">
              <li>
                <a
                  href="#home"
                  className="text-text-light hover:text-mauve-500 transition-colors hover:underline inline-block duration-300"
                >
                  Domů
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-text-light hover:text-mauve-500 transition-colors hover:underline inline-block duration-300"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-text-light hover:text-mauve-500 transition-colors hover:underline inline-block duration-300"
                >
                  O mně
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-text-light hover:text-mauve-500 transition-colors hover:underline inline-block duration-300"
                >
                  Služby
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-text-light hover:text-mauve-500 transition-colors hover:underline inline-block duration-300"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div className="md:col-span-2" variants={itemVariants}>
            <h4 className="text-xs uppercase tracking-[0.2em] text-mauve-600 mb-6">
              Služby
            </h4>
            <ul className="flex gap-3 items-center flex-wrap text-sm text-text-light">
              <li>Portréty</li>
              <li>Eventy</li>
              <li>Komerční práce</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="md:col-span-3" variants={itemVariants}>
            <h4 className="text-xs uppercase tracking-[0.2em] text-mauve-600 mb-6">
              Kontakt
            </h4>
            <div className="flex gap-3 items-center flex-wrap text-sm text-text-light">
              <p className="underline cursor-pointer">
                foto.michaelacizkova@seznam.cz
              </p>
              <p className="underline cursor-pointer">+420 604 410 116</p>
              <p>Praha, Česká republika</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-mauve-500/30 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col flex-wrap  md:flex-row justify-between items-center gap-4 text-xs text-text-light uppercase tracking-wider">
            <p>{currentYear} © Michaela Čížková. Všechna práva vyhrazena.</p>
            <div className="flex gap-4 md:gap-8">
              <a
                href="#"
                className="hover:text-mauve-500 transition-colors hover:underline"
              >
                Zásady ochrany soukromí
              </a>
              <a
                href="#"
                className="hover:text-mauve-500 transition-colors hover:underline"
              >
                Obchodní podmínky
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

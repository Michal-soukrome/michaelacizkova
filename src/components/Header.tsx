"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Instagram,
  Twitter,
  Mail,
  Facebook,
  Camera,
} from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHeaderNavigation, setIsHeaderNavigation] = useState(false);

  // Handle scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY;

      // If header navigation is in progress, keep header visible
      if (isHeaderNavigation) {
        setIsVisible(true);
      } else {
        // Only hide if scrolling down more than 25px, but keep visible if menu is open
        if (scrollDifference > 25 && currentScrollY > 100 && !isOpen) {
          setIsVisible(false);
        } else if (scrollDifference < -25 || isOpen) {
          setIsVisible(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isOpen, isHeaderNavigation]);

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

  // Listen for navigation events from other components
  useEffect(() => {
    const handleNavigationStart = () => {
      setIsHeaderNavigation(true);
    };

    const handleNavigationEnd = () => {
      setIsHeaderNavigation(false);
    };

    window.addEventListener("navigationStart", handleNavigationStart);
    window.addEventListener("navigationEnd", handleNavigationEnd);

    return () => {
      window.removeEventListener("navigationStart", handleNavigationStart);
      window.removeEventListener("navigationEnd", handleNavigationEnd);
    };
  }, []);

  const handleScroll = (sectionId: string) => {
    setIsHeaderNavigation(true);
    setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
      // Reset the flag after scroll completes
      setTimeout(() => {
        setIsHeaderNavigation(false);
      }, 1000);
    }, 200);
    setIsOpen(false); // Close menu after navigation
  };

  const navItems = [
    { label: "Domů", id: "home", number: "01" },
    { label: "Portfolio", id: "gallery", number: "02" },
    { label: "O mně", id: "about", number: "03" },
    { label: "Služby", id: "services", number: "04" },
    { label: "Reference", id: "testimonials", number: "05" },
    { label: "Kontakt", id: "contact", number: "06" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com",
      label: "Facebook",
      ariaLabel: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://instagram.com",
      label: "Instagram",
      ariaLabel: "Instagram",
    },
    {
      icon: Mail,
      href: "mailto:foto.michaelacizkova@seznam.cz",
      label: "Email",
      ariaLabel: "Napsat email",
    },
  ];

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-20 focus:z-100 focus:bg-mauve-500 focus:text-white focus:px-4 focus:py-2 focus:text-xs"
      >
        Přeskočit na hlavní obsah
      </a>

      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="sticky top-0 w-full bg-white/50 backdrop-blur-md z-40 border-b border-mauve-500/25"
        role="banner"
      >
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("home");
            }}
            className="flex items-center gap-2 font-light text-xl tracking-tight hover:text-mauve-500 transition-colors focus:outline-none focus:ring-2 focus:ring-mauve-500 focus:ring-offset-2 focus:ring-offset-cream rounded"
            whileHover={{ scale: 1.05 }}
          >
            <h1 className="text-foreground">
              Michaela
              <span className="font-semibold ml-1">Čížková</span>
            </h1>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="flex" id="desktop-navigation-wrap">
            <nav
              aria-label="Hlavní navigace"
              className="flex items-center gap-4"
              id="desktop-navigation"
            >
              <div className="hidden lg:flex items-center gap-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(item.id);
                    }}
                    className="text-sm font-medium text-foreground hover:text-mauve-500 transition-colors relative group focus:outline-none focus:ring-2 focus:ring-mauve-500 focus:ring-offset-2 focus:ring-offset-cream rounded px-2 py-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.label}
                    <span className="absolute inset-x-0 bottom-0 h-px bg-mauve-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </motion.a>
                ))}
              </div>

              <span className="hidden lg:block">|</span>

              {/* Right Section - Social Icons (Desktop) + Hamburger */}
              <div className="flex justify-center items-center gap-4">
                {/* Social Icons - Desktop */}
                <motion.nav
                  aria-label="Sociální sítě"
                  className="hidden lg:flex items-center gap-2"
                  id="desktop-social"
                >
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.ariaLabel}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                        className="text-foreground hover:text-mauve-500 transition-colors focus:outline-none focus:ring-2 focus:ring-mauve-500 focus:ring-offset-2 focus:ring-offset-cream rounded p-1"
                      >
                        <Icon className="w-4 h-4" />
                      </motion.a>
                    );
                  })}
                </motion.nav>

                {/* Hamburger Menu Button - Mobile */}

                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden flex flex-col space-y-1 p-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-mauve-500 focus:ring-offset-2 focus:ring-offset-cream rounded"
                  aria-label={isOpen ? "Zavřít menu" : "Otevřít menu"}
                  aria-expanded={isOpen}
                  aria-controls="mobile-navigation"
                >
                  <motion.span
                    className="block w-6 h-0.5 bg-foreground"
                    animate={{
                      rotate: isOpen ? 45 : 0,
                      y: isOpen ? 8 : 0,
                    }}
                  />
                  <motion.span
                    className="block w-6 h-0.5 bg-foreground"
                    animate={{ opacity: isOpen ? 0 : 1 }}
                  />
                  <motion.span
                    className="block w-6 h-0.5 bg-foreground"
                    animate={{
                      rotate: isOpen ? -45 : 0,
                      y: isOpen ? -8 : 0,
                    }}
                  />
                </button>
              </div>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 bg-white/75  backdrop-blur-sm z-30 lg:hidden"
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobilní navigace"
          >
            <nav className="h-full pt-16 container mx-auto">
              <div className="h-full flex flex-col justify-between items-start">
                <ul className="w-full p-4">
                  {navItems.map((item, index) => (
                    <li key={item.id} className="overflow-hidden">
                      <motion.a
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleScroll(item.id);
                        }}
                        className="flex items-center gap-4 px-4 py-3 sm:py-6 rounded-lg hover:bg-mauve-500/10 transition-colors group"
                      >
                        <span className="text-mauve-400 font-medium text-xs">
                          {item.number}
                        </span>
                        <span className="text-foreground group-hover:text-mauve-500 transition-colors">
                          {item.label}
                        </span>
                      </motion.a>
                    </li>
                  ))}
                </ul>

                {/* Social Icons - Mobile */}
                <nav
                  aria-label="Sociální sítě"
                  className="mt-auto flex items-center w-full p-4"
                >
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.ariaLabel}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          delay: navItems.length * 0.05 + index * 0.05,
                        }}
                        className="text-foreground hover:bg-mauve-500/10 hover:text-mauve-500 transition-colors focus:outline-none focus:ring-2 focus:ring-mauve-500 focus:ring-offset-2 focus:ring-offset-cream rounded p-4"
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </nav>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

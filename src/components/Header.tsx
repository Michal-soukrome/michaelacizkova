"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Instagram,
  Mail,
  Facebook,
  House,
  Sparkles,
  Images,
  User,
  Phone,
  Star,
} from "lucide-react";
import Image from "next/image";

const navItems = [
  {
    label: "Domů",
    id: "home",
    icon: House,
    number: "01",
  },
  {
    label: "Služby",
    id: "services",
    icon: Sparkles,
    number: "02",
  },
  {
    label: "Reference",
    id: "testimonials",
    icon: Star,
    number: "03",
  },
  {
    label: "Portfolio",
    id: "gallery",
    icon: Images,
    number: "04",
  },
  {
    label: "O mně",
    id: "about",
    icon: User,
    number: "05",
  },
  {
    label: "Kontakt",
    id: "contact",
    icon: Phone,
    number: "06",
  },
];

const socialLinks = [
  {
    icon: Facebook,
    href: "https://facebook.com",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: Mail,
    href: "mailto:foto.michaelacizkova@seznam.cz",
    label: "Email",
  },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const dragStartX = useRef(0);

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "-40% 0px -55% 0px",
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const handleDragStart = (e: React.PointerEvent<HTMLDivElement>) => {
    dragStartX.current = e.clientX;
  };

  const handleDragEnd = (e: React.PointerEvent<HTMLDivElement>) => {
    const dragDistance = e.clientX - dragStartX.current;
    if (dragDistance > 50) setIsOpen(false);
  };

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* ACCESSIBILITY */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-20 focus:z-50 focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:text-xs rounded-full"
      >
        Přeskočit na hlavní obsah
      </a>

      {/* DESKTOP HEADER */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed top-0 left-0 w-full z-50 px-4 pt-4 hidden md:block"
      >
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/60 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
            {/* gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-white/10 pointer-events-none" />

            <div className="relative flex items-center justify-between px-8 ">
              {/* LOGO */}
              <motion.a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("home");
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4"
              >
                <Image
                  src="/assets/logo/logo.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  priority
                  className="object-contain"
                />
              </motion.a>

              {/* HAMBURGER */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-10 h-10 rounded-full border border-black/8 bg-black/[0.02] backdrop-blur-md flex items-center justify-center transition-all hover:bg-black/5 my-5"
              >
                <div className="relative w-5 h-5">
                  <motion.span
                    className="absolute left-0 top-1.5 h-px w-5 bg-black"
                    animate={{
                      rotate: isOpen ? 45 : 0,
                      y: isOpen ? 7 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="absolute left-0 top-2.5 h-px w-5 bg-black"
                    animate={{ opacity: isOpen ? 0 : 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.span
                    className="absolute left-0 top-3.5 h-px w-5 bg-black"
                    animate={{
                      rotate: isOpen ? -45 : 0,
                      y: isOpen ? -7 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* SIDEBAR OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/40 z-30 hidden md:block"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* SIDEBAR MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            className="fixed inset-y-0 left-0 w-80 bg-[#faf8f6] backdrop-blur-2xl z-40 border-r border-black/4 shadow-2xl hidden md:flex flex-col"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 32 }}
            onPointerDown={handleDragStart}
            onPointerUp={handleDragEnd}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_60%)] pointer-events-none" />

            <nav className="relative h-full flex flex-col pt-32 pb-12 px-7">
              <div className="mb-16">
                <p className="text-[0.6rem] uppercase tracking-[0.4em] text-black/25 font-light">
                  Menu
                </p>
              </div>

              <ul className="flex-1 space-y-1">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ x: -40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <button
                      onClick={() => {
                        handleScroll(item.id);
                        setIsOpen(false);
                      }}
                      className={`w-full group flex items-center justify-between rounded-2xl px-5 py-3.5 transition-all duration-300 ${
                        activeSection === item.id
                          ? "bg-black/[0.08]"
                          : "hover:bg-black/[0.035]"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={`text-[0.6rem] tracking-[0.3em] font-light ${
                            activeSection === item.id
                              ? "text-black/40"
                              : "text-black/20"
                          }`}
                        >
                          {item.number}
                        </span>

                        <span
                          className={`text-base font-light tracking-wide transition-colors duration-300 ${
                            activeSection === item.id
                              ? "text-black"
                              : "text-black/75 group-hover:text-black"
                          }`}
                        >
                          {item.label}
                        </span>
                      </div>

                      {activeSection === item.id && (
                        <motion.span className="text-black/40 text-sm">
                          →
                        </motion.span>
                      )}
                    </button>
                  </motion.li>
                ))}
              </ul>

              <div className="pt-10 border-t border-black/6">
                <div className="flex items-center gap-2">
                  {socialLinks.map((s, i) => {
                    const Icon = s.icon;

                    return (
                      <motion.a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.4 + i * 0.06,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="w-10 h-10 rounded-full border border-black/6 bg-white/40 backdrop-blur-sm flex items-center justify-center hover:bg-white/80 transition-all duration-300"
                      >
                        <Icon className="w-4 h-4 text-black/50" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* MOBILE BOTTOM DOCK */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden"
      >
        <div className="relative overflow-hidden rounded-full border border-white/20 bg-white/70 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] px-3 py-3">
          {/* gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-white/40 pointer-events-none" />

          <nav className="relative flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className="relative"
                >
                  <div className="relative flex flex-col items-center justify-center w-14 h-14">
                    {isActive && (
                      <motion.div
                        layoutId="mobileActivePill"
                        className="absolute inset-0 rounded-2xl bg-black/[0.06]"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}

                    <Icon
                      className={`relative z-10 w-[18px] h-[18px] transition-all duration-300 ${
                        isActive ? "text-black" : "text-black/40"
                      }`}
                    />

                    <span
                      className={`relative z-10 mt-1 text-[0.62rem] tracking-wide transition-all duration-300 ${
                        isActive ? "text-black" : "text-black/40"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </nav>
        </div>
      </motion.div>
    </>
  );
}

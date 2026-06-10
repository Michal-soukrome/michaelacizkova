"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
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

const navItems = [
  { label: "Domů", id: "home", icon: House, number: "01" },
  { label: "Služby", id: "services", icon: Sparkles, number: "02" },
  { label: "Reference", id: "testimonials", icon: Star, number: "03" },
  { label: "Portfolio", id: "gallery", icon: Images, number: "04" },
  { label: "O mně", id: "about", icon: User, number: "05" },
  { label: "Časté dotazy", id: "faq", icon: Star, number: "06" },
  { label: "Kontakt", id: "contact", icon: Phone, number: "07" },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Mail, href: "mailto:foto.michaelacizkova@seznam.cz", label: "Email" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const suppressScrollHide = useRef(false);

  // Active section tracker
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 },
    );
    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Scroll hide/show — skips hide when menu is open
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen || suppressScrollHide.current) return;
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;

      if (diff > 25 && currentY > 100) setIsVisible(false);
      if (diff < -25) setIsVisible(true);

      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // Always show header when menu opens
  useEffect(() => {
    if (isOpen) setIsVisible(true);
  }, [isOpen]);

  // Swipe to close sidebar
  const dragStartXRef = useRef<number | null>(null);
  const handleDragStart = (e: React.PointerEvent) => {
    dragStartXRef.current = e.clientX;
  };
  const handleDragEnd = (e: React.PointerEvent) => {
    if (dragStartXRef.current === null) return;
    if (dragStartXRef.current - e.clientX > 60) setIsOpen(false);
    dragStartXRef.current = null;
  };

  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    const offsetPosition = el.getBoundingClientRect().top + window.scrollY - 55;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });

    setIsOpen(false);
    setIsVisible(true);

    // Suppress scroll-hide for the duration of the smooth scroll (~800ms)
    suppressScrollHide.current = true;
    setTimeout(() => {
      suppressScrollHide.current = false;
      lastScrollY.current = window.scrollY; // re-baseline after scroll settles
    }, 900);
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

      {/* HEADER — shared desktop + mobile */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -80, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <div className="relative overflow-hidden border-b border-white/20 bg-white transition-colors duration-300 ease-in-out  backdrop-blur-2xl shadow-sm">
          <div className="relative flex items-center justify-between px-5 md:px-8">
            {/* LOGO */}
            <motion.button
              onClick={() => handleScrollTo("home")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src="/assets/logo/logo.png"
                alt="Michaela Čížková — fotografka"
                width={100}
                height={100}
                priority
                className="object-contain"
              />
            </motion.button>

            {/* HAMBURGER */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isOpen ? "Zavřít menu" : "Otevřít menu"}
              aria-expanded={isOpen}
              className="relative w-10 h-10 rounded-full bg-black/[0.02] flex items-center justify-center hover:bg-black/5 transition-colors my-4"
            >
              <div className="relative w-5 h-5">
                <motion.span
                  className="absolute left-0 top-1.5 h-px w-5 bg-black"
                  animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute left-0 top-2.5 h-px w-5 bg-black"
                  animate={{ opacity: isOpen ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute left-0 top-3.5 h-px w-5 bg-black"
                  animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -7 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/40 z-30"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* SIDEBAR */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            className="fixed inset-y-0 left-0 w-full md:w-80 bg-[#faf8f6] z-40 border-r border-black/4 shadow-2xl flex flex-col"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 32 }}
            onPointerDown={handleDragStart}
            onPointerUp={handleDragEnd}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_60%)] pointer-events-none" />
            <nav className="relative h-full flex flex-col pt-32 max-h-dvh pb-12 px-7">
              <div className="hidden md:block mb-16">
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
                      onClick={() => handleScrollTo(item.id)}
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
                          className={`text-base font-light tracking-wide transition-colors duration-300 group-hover:underline ${
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
                        className="w-10 h-10 border border-brown flex items-center justify-center hover:border-charcoal hover:bg-brown hover:text-white transition-all duration-300 rounded-full text-brown"
                      >
                        <Icon className="w-4 h-4" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

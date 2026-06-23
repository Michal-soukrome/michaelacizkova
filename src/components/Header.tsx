"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
  { label: "Domů", href: "/", icon: House, number: "01" },
  { label: "Služby", href: "/sluzby", icon: Sparkles, number: "02" },
  { label: "Blog", href: "/blog", icon: Star, number: "03" },
  { label: "Portfolio", href: "/portfolio", icon: Images, number: "04" },
  { label: "O mně", href: "/o-mne", icon: User, number: "05" },
  { label: "Časté dotazy", href: "/faq", icon: Star, number: "06" },
  { label: "Kontakt", href: "/kontakt", icon: Phone, number: "07" },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Mail, href: "mailto:foto.michaelacizkova@seznam.cz", label: "Email" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Scroll hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;

      if (diff > 25 && currentY > 100) setIsVisible(false);
      if (diff < -25) setIsVisible(true);

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable background scroll when sidebar is open
  useEffect(() => {
    const body = document.body;
    const originalOverflow = body.style.overflow;

    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = originalOverflow;
    }

    return () => {
      body.style.overflow = originalOverflow;
    };
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

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -80, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <div className="h-20 relative overflow-hidden border-b border-white/20 bg-white/50 backdrop-blur-2xl shadow-sm">
          <div className="h-full flex items-center justify-between px-5 md:px-8">
            {/* LOGO */}
            <a href="/">
              <Image
                src="/assets/logo/logo.png"
                alt="Michaela Čížková — fotografka"
                width={100}
                height={100}
                priority
                className="h-10 w-auto object-contain"
              />
            </a>

            {/* HAMBURGER */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label={isOpen ? "Zavřít menu" : "Otevřít menu"}
              aria-expanded={isOpen}
              className="relative w-10 h-10 rounded-full bg-black/[0.02] flex items-center justify-center hover:bg-black/5 transition-colors cursor-pointer"
            >
              <div className="relative w-5 h-5">
                <motion.span
                  className="absolute left-0 top-1.5 h-px w-5 bg-black"
                  animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7 : 0 }}
                />
                <motion.span
                  className="absolute left-0 top-2.5 h-px w-5 bg-black"
                  animate={{ opacity: isOpen ? 0 : 1 }}
                />
                <motion.span
                  className="absolute left-0 top-3.5 h-px w-5 bg-black"
                  animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -7 : 0 }}
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
            className="fixed inset-y-0 right-0 w-full md:w-2/6 bg-[#faf8f6] z-40 border-l border-black/4 shadow-2xl flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 32 }}
            onPointerDown={handleDragStart}
            onPointerUp={handleDragEnd}
          >
            <nav className="relative h-full flex flex-col pt-30 pb-10 px-7">
              <ul className="flex-1 space-y-1">
                {navItems.map((item, i) => {
                  const isActive = pathname === item.href;

                  return (
                    <motion.li
                      key={item.href}
                      initial={{ x: -40, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <a
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`w-full group flex items-center justify-between rounded-2xl px-5 py-3.5 transition-all duration-300 ${
                          isActive
                            ? "bg-black/[0.08]"
                            : "hover:bg-black/[0.035]"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <span
                            className={`text-[0.6rem] tracking-[0.3em] font-light ${
                              isActive ? "text-black/40" : "text-black/20"
                            }`}
                          >
                            {item.number}
                          </span>

                          <span
                            className={`text-base font-light tracking-wide group-hover:underline ${
                              isActive
                                ? "text-black"
                                : "text-black/75 group-hover:text-black"
                            }`}
                          >
                            {item.label}
                          </span>
                        </div>

                        {/* ŠIPKA – vždy renderovaná */}
                        <motion.span
                          className={`
              text-sm transition-all duration-300
              ${isActive ? "text-black/40 opacity-100" : "text-black/20 opacity-0 group-hover:opacity-100 group-hover:text-black/30"}
            `}
                        >
                          →
                        </motion.span>
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
            <div className="pt-10 p-7 border-t border-black/6">
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
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

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

  // Handle scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY;

      // Only hide if scrolling down more than 25px, but keep visible if menu is open
      if (scrollDifference > 25 && currentScrollY > 100 && !isOpen) {
        setIsVisible(false);
      } else if (scrollDifference < -25 || isOpen) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isOpen]);

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

  const navItems = [
    { label: "Domů", id: "home", number: "01" },
    { label: "Portfolio", id: "gallery", number: "02" },
    { label: "O mně", id: "about", number: "03" },
    { label: "Služby", id: "services", number: "04" },
    { label: "Reference", id: "testimonials", number: "05" },
    { label: "Kontakt", id: "contact", number: "06" },
  ];

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-20 focus:z-100 focus:bg-mauve-500 focus:text-white focus:px-4 focus:py-2 focus:text-sm"
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
            className="flex items-center gap-2 font-light text-lg tracking-tight hover:text-mauve-500 transition-colors focus:outline-none focus:ring-2 focus:ring-mauve-500 focus:ring-offset-2 focus:ring-offset-cream rounded"
            whileHover={{ scale: 1.05 }}
          >
            <h1 className="text-foreground">
              Michaela
              <span className="font-medium ml-1">Čížková</span>
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
                <nav
                  aria-label="Sociální sítě"
                  className="hidden lg:flex items-center gap-2"
                >
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="text-foreground hover:text-mauve-500 transition-colors focus:outline-none focus:ring-2 focus:ring-mauve-500 focus:ring-offset-2 focus:ring-offset-cream rounded p-1"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-foreground hover:text-mauve-500 transition-colors focus:outline-none focus:ring-2 focus:ring-mauve-500 focus:ring-offset-2 focus:ring-offset-cream rounded p-1"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:ahoj@michaelacizkova.cz"
                    aria-label="Napsat email"
                    className="text-foreground hover:text-mauve-500 transition-colors focus:outline-none focus:ring-2 focus:ring-mauve-500 focus:ring-offset-2 focus:ring-offset-cream rounded p-1"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </nav>

                {/* Hamburger Menu Button - Mobile */}
                {/* TODO: ## Error Type
Console Error

## Error Message
A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch `if (typeof window !== 'undefined')`.
- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch

  ...
    <HotReload globalError={[...]} webSocket={WebSocket} staticIndicatorState={{pathname:null, ...}}>
      <AppDevOverlayErrorBoundary globalError={[...]}>
        <ReplaySsrOnlyErrors>
        <DevRootHTTPAccessFallbackBoundary>
          <HTTPAccessFallbackBoundary notFound={<NotAllowedRootHTTPFallbackError>}>
            <HTTPAccessFallbackErrorBoundary pathname="/" notFound={<NotAllowedRootHTTPFallbackError>} ...>
              <RedirectBoundary>
                <RedirectErrorBoundary router={{...}}>
                  <Head>
                  <__next_root_layout_boundary__>
                    <SegmentViewNode type="layout" pagePath="layout.tsx">
                      <SegmentTrieNode>
                      <link>
                      <script>
                      <script>
                      <script>
                      <RootLayout>
                        <html
                          lang="cs"
+                         className="scroll-smooth"
-                         className="scroll-smooth vreakcr idc0_350"
                        >
                  ...



    at createConsoleError (file:///Users/michaljirak/GitHub repos/michaelacizkova/.next/dev/static/chunks/node_modules_next_dist_f3530cac._.js:2199:71)
    at handleConsoleError (file:///Users/michaljirak/GitHub repos/michaelacizkova/.next/dev/static/chunks/node_modules_next_dist_f3530cac._.js:2980:54)
    at console.error (file:///Users/michaljirak/GitHub repos/michaelacizkova/.next/dev/static/chunks/node_modules_next_dist_f3530cac._.js:3124:57)
    at <unknown> (file:///Users/michaljirak/GitHub repos/michaelacizkova/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:3469:25)
    at runWithFiberInDEV (file:///Users/michaljirak/GitHub repos/michaelacizkova/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:965:74)
    at emitPendingHydrationWarnings (file:///Users/michaljirak/GitHub repos/michaelacizkova/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:3468:13)
    at completeWork (file:///Users/michaljirak/GitHub repos/michaelacizkova/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:6897:102)
    at runWithFiberInDEV (file:///Users/michaljirak/GitHub repos/michaelacizkova/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:965:131)
    at completeUnitOfWork (file:///Users/michaljirak/GitHub repos/michaelacizkova/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:9627:23)
    at performUnitOfWork (file:///Users/michaljirak/GitHub repos/michaelacizkova/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:9564:28)
    at workLoopConcurrentByScheduler (file:///Users/michaljirak/GitHub repos/michaelacizkova/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:9558:58)
    at renderRootConcurrent (file:///Users/michaljirak/GitHub repos/michaelacizkova/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:9541:71)
    at performWorkOnRoot (file:///Users/michaljirak/GitHub repos/michaelacizkova/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:9068:150)
    at performWorkOnRootViaSchedulerTask (file:///Users/michaljirak/GitHub repos/michaelacizkova/.next/dev/static/chunks/node_modules_next_dist_compiled_react-dom_1e674e59._.js:10230:9)
    at MessagePort.performWorkUntilDeadline (file:///Users/michaljirak/GitHub repos/michaelacizkova/.next/dev/static/chunks/node_modules_next_dist_compiled_a0e4c7b4._.js:2647:64)
    at html (<anonymous>:null:null)
    at RootLayout (about://React/Server/file:///Users/michaljirak/GitHub%20repos/michaelacizkova/.next/dev/server/chunks/ssr/%5Broot-of-the-server%5D__b3bbe506._.js?4:220:263)

Next.js version: 16.1.0 (Turbopack)
 */}

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
                <ul className="w-full p-4 space-y-3">
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
                        className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-mauve-500/10 transition-colors group"
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
                  className="mt-auto flex items-center p-4 gap-4 w-full border-t border-mauve-500/10"
                >
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="text-foreground hover:text-mauve-500 transition-colors focus:outline-none focus:ring-2 focus:ring-mauve-500 focus:ring-offset-2 focus:ring-offset-cream rounded p-2"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-foreground hover:text-mauve-500 transition-colors focus:outline-none focus:ring-2 focus:ring-mauve-500 focus:ring-offset-2 focus:ring-offset-cream rounded p-2"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:ahoj@michaelacizkova.cz"
                    aria-label="Napsat email"
                    className="text-foreground hover:text-mauve-500 transition-colors focus:outline-none focus:ring-2 focus:ring-mauve-500 focus:ring-offset-2 focus:ring-offset-cream rounded p-2"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </nav>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

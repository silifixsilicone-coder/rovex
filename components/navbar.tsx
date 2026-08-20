"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenContact?: () => void;
}

export function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Businesses", href: "#businesses" },
    { name: "Products", href: "#products" },
    { name: "Philosophy", href: "#philosophy" },
    { name: "About", href: "#about" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-[#F8F7E8]/85 backdrop-blur-md border-b border-[#111615]/10 shadow-sm"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          <a
            href="#"
            className="group flex items-center gap-2.5 text-2xl font-serif-heading font-bold tracking-tight text-[#111615]"
          >
            <span className="tracking-[0.25em] uppercase text-xl font-bold font-sans-body group-hover:text-[#00584F] transition-colors">
              R O V E X
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#111615]/80">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#00584F] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#00584F] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => {
                const el = document.getElementById("businesses");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00584F] text-[#F8F7E8] text-xs uppercase font-sans-body tracking-wider font-semibold hover:bg-[#00453E] transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              <span>Explore ROVEX</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-[#111615] hover:bg-[#111615]/5 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#F8F7E8] pt-24 px-8 pb-12 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col gap-6">
              <div className="text-xs font-semibold tracking-widest text-[#00584F] uppercase mb-2 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" /> Navigation
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-serif-heading font-medium text-[#111615] hover:text-[#00584F] transition-colors py-1 border-b border-[#111615]/10 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-5 h-5 opacity-40" />
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4 mt-8">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  const el = document.getElementById("businesses");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full py-4 rounded-2xl bg-[#00584F] text-[#F8F7E8] font-sans-body font-semibold tracking-wider text-sm uppercase flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Explore ROVEX</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <p className="text-xs text-center text-[#525C58] mt-4 font-sans-body">
                © 2026 ROVEX Studio. All rights reserved.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

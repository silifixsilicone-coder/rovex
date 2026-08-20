"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

export function Hero() {
  const scrollToBusinesses = () => {
    const el = document.getElementById("intro");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-[#F8F7E8] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-36 pb-16 overflow-hidden min-h-[85vh] sm:min-h-screen">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[300px] bg-[#00584F]/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Hero Content Container */}
      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center w-full">
        {/* 1. Small Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#00584F]/10 text-[#00584F] text-[11px] font-semibold uppercase tracking-wider mb-6 sm:mb-8"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>TECHNOLOGY &amp; VENTURE STUDIO</span>
        </motion.div>

        {/* 2. Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif-heading leading-[1.08] text-[#111615] tracking-tight font-medium max-w-4xl"
        >
          We build ideas into <br className="hidden sm:inline" />
          <span className="font-serif-heading italic text-[#00584F] font-normal px-1">
            businesses
          </span>{" "}
          people can use.
        </motion.h1>

        {/* 3. Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 sm:mt-8 text-base sm:text-xl md:text-2xl text-[#525C58] max-w-2xl font-sans-body font-light leading-relaxed px-2"
        >
          ROVEX is a technology and venture studio building products across manufacturing, software and artificial intelligence.
        </motion.p>

        {/* 4. CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-3"
        >
          <button
            onClick={scrollToBusinesses}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#00584F] text-[#F8F7E8] font-sans-body font-semibold text-xs sm:text-sm tracking-wide hover:bg-[#00453E] transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
          >
            <span>Explore ROVEX</span>
            <span className="w-5 h-5 rounded-full bg-[#F8F7E8]/20 flex items-center justify-center group-hover:translate-y-0.5 transition-transform">
              <ArrowDown className="w-3.5 h-3.5" />
            </span>
          </button>
        </motion.div>
      </div>

      {/* 5. Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-16 flex flex-col items-center gap-1.5 cursor-pointer"
        onClick={scrollToBusinesses}
      >
        <span className="text-[10px] font-sans-body uppercase tracking-widest text-[#525C58]/70 font-semibold">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-4 h-6 rounded-full border border-[#111615]/20 flex items-start justify-center p-0.5"
        >
          <div className="w-1 h-1.5 bg-[#00584F] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calculator, Smartphone } from "lucide-react";

export function WinSizerSection() {
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.winsizer.app&pcampaignid=web_share";

  return (
    <section id="winsizer" className="w-full bg-[#F8F7E8] text-[#111615] py-20 sm:py-28 px-6 sm:px-12 lg:px-16 border-t border-[#111615]/10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Category Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#00584F]/10 text-[#00584F] text-xs font-mono font-semibold uppercase tracking-wider mb-6"
        >
          <Calculator className="w-3.5 h-3.5" />
          <span>02 — SOFTWARE &amp; PRODUCTIVITY</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-serif-heading font-medium tracking-tight text-[#111615]"
        >
          WinSizer
        </motion.h2>

        {/* Italic Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-3xl font-serif-heading italic text-[#00584F] mt-2 font-normal"
        >
          Measure. Cut. Build.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-base sm:text-xl text-[#525C58] font-sans-body font-light leading-relaxed max-w-2xl"
        >
          WinSizer is a digital tool for the sliding-window industry. It helps users calculate cutting sizes quickly and connects window-related work with job opportunities.
        </motion.p>

        {/* Play Store CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href={playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#00584F] text-[#F8F7E8] font-sans-body text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-[#00453E] transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
          >
            <Smartphone className="w-4 h-4 text-[#D2E7DF]" />
            <span>Get WinSizer on Google Play</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

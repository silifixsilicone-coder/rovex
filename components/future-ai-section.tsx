"use client";

import { motion } from "framer-motion";
import { Sparkles, Compass } from "lucide-react";

export function FutureAISection() {
  return (
    <section id="future-ai" className="w-full bg-[#F8F7E8] text-[#111615] py-20 sm:py-28 px-6 sm:px-12 lg:px-16 border-t border-[#111615]/10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Category Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#00584F]/10 text-[#00584F] text-xs font-mono font-semibold uppercase tracking-wider mb-6"
        >
          <Compass className="w-3.5 h-3.5" />
          <span>04 — EXPERIMENTAL AI</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-serif-heading font-medium tracking-tight text-[#111615]"
        >
          Future AI
        </motion.h2>

        {/* Italic Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-3xl font-serif-heading italic text-[#00584F] mt-2 font-normal"
        >
          Building what comes next.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-base sm:text-xl text-[#525C58] font-sans-body font-light leading-relaxed max-w-2xl"
        >
          Future AI is an experimental AI product initiative focused on creating useful intelligent tools with the help of modern AI development platforms and technology.
        </motion.p>

        {/* Partner Note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#00584F]/10 border border-[#00584F]/20 text-[#00584F] text-xs sm:text-sm font-semibold font-sans-body"
        >
          <Sparkles className="w-4 h-4 text-[#00584F]" />
          <span>Developed with assistance from Manifest</span>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10"
        >
          <button
            disabled
            className="px-7 py-3.5 rounded-full bg-[#111615] text-[#F8F7E8] font-sans-body text-xs sm:text-sm font-semibold uppercase tracking-wider cursor-not-allowed opacity-90 inline-flex items-center gap-2.5 shadow-md"
          >
            <span>Coming Soon</span>
            <span className="w-2 h-2 rounded-full bg-[#00584F] animate-ping" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

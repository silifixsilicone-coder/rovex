"use client";

import { motion } from "framer-motion";
import { Sparkles, Bot } from "lucide-react";

export function SayusAISection() {
  return (
    <section id="sayus-ai" className="w-full bg-[#00584F] text-[#F8F7E8] py-20 sm:py-28 px-6 sm:px-12 lg:px-16 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#007367]/30 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto z-10 relative text-center flex flex-col items-center">
        {/* Category Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F8F7E8]/10 text-[#D2E7DF] text-xs font-mono font-semibold uppercase tracking-wider border border-[#F8F7E8]/15 mb-6"
        >
          <Bot className="w-3.5 h-3.5 text-[#D2E7DF]" />
          <span>05 — INTELLIGENT SYSTEMS</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-serif-heading font-medium tracking-tight text-[#F8F7E8]"
        >
          Sayus AI
        </motion.h2>

        {/* Italic Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-3xl font-serif-heading italic text-[#D2E7DF] mt-2 font-normal"
        >
          Next-generation AI automation.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-base sm:text-xl text-[#F8F7E8]/90 font-sans-body font-light leading-relaxed max-w-2xl"
        >
          Sayus AI is an upcoming artificial intelligence product initiative by ROVEX focusing on smart digital automation and intelligent tools.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10"
        >
          <button
            disabled
            className="px-7 py-3.5 rounded-full bg-[#F8F7E8] text-[#00584F] font-sans-body text-xs sm:text-sm font-semibold uppercase tracking-wider cursor-not-allowed opacity-90 inline-flex items-center gap-2.5 shadow-md"
          >
            <span>Coming Soon</span>
            <span className="w-2 h-2 rounded-full bg-[#00584F] animate-ping" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export function TransitionSection() {
  return (
    <section className="py-20 sm:py-32 bg-[#F8F7E8] px-6 sm:px-10 lg:px-16 text-center border-t border-b border-[#111615]/10">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-widest font-mono font-semibold text-[#00584F] mb-4 block"
        >
          Studio Scope
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-serif-heading text-[#111615] leading-[1.1] font-medium tracking-tight"
        >
          From physical products <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#00584F]">
            to intelligent software.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-[#525C58] font-sans-body font-light max-w-xl leading-relaxed"
        >
          ROVEX explores opportunities across industries — always looking for practical problems worth solving.
        </motion.p>
      </div>
    </section>
  );
}

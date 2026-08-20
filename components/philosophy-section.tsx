"use client";

import { motion } from "framer-motion";
import { PHILOSOPHY_ITEMS } from "@/data/businesses";

export function PhilosophySection() {
  return (
    <section id="philosophy" className="w-full bg-[#F8F7E8] text-[#111615] py-16 sm:py-24 px-6 sm:px-10 lg:px-16 border-t border-[#111615]/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase font-mono tracking-widest font-semibold text-[#00584F] block mb-2"
          >
            Core Principles
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-serif-heading text-[#111615] font-medium tracking-tight"
          >
            The ROVEX <span className="italic text-[#00584F] font-normal">Philosophy</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-[#525C58] font-sans-body font-light"
          >
            How we approach venture creation, product engineering, and business expansion.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 border-t border-b border-[#111615]/10 py-10">
          {PHILOSOPHY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#111615]/10">
                  <span className="text-2xl font-serif-heading font-bold text-[#00584F]">
                    0{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#00584F] font-semibold">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#111615] mt-5">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#525C58] font-sans-body font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export function IntroSection() {
  return (
    <section id="intro" className="py-16 sm:py-24 bg-[#F8F7E8] px-6 sm:px-10 lg:px-16 border-t border-[#111615]/10">
      <div className="max-w-5xl mx-auto text-center sm:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase font-sans-body tracking-widest font-semibold text-[#00584F] block mb-3"
            >
              ROVEX Venture Strategy
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-serif-heading text-[#111615] leading-[1.1] font-medium tracking-tight"
            >
              Different businesses. <br />
              <span className="italic font-normal text-[#00584F]">One vision.</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-[#525C58] font-sans-body font-light leading-relaxed border-l-0 lg:border-l border-[#111615]/15 lg:pl-6 py-1"
            >
              ROVEX brings together manufacturing, software, AI and digital products — turning practical ideas into products that solve real problems.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { TIMELINE_STEPS } from "@/data/businesses";
import { Lightbulb, Hammer, TestTube, Rocket, TrendingUp } from "lucide-react";

export function AboutSection() {
  const stepIcons = [Lightbulb, Hammer, TestTube, Rocket, TrendingUp];

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#F8F7E8] px-6 sm:px-10 lg:px-16 border-t border-[#111615]/10">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase font-mono tracking-widest font-semibold text-[#00584F] block mb-3"
          >
            About ROVEX Studio
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-serif-heading text-[#111615] leading-[1.1] font-medium tracking-tight"
          >
            We&apos;re building more than products. <br className="hidden sm:inline" />
            <span className="italic text-[#00584F] font-normal">We&apos;re building possibilities.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-[#525C58] font-sans-body font-light leading-relaxed max-w-xl mx-auto"
          >
            ROVEX is a technology studio creating products spanning manufacturing, software, AI and digital services.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#F2F0DF] rounded-3xl p-6 sm:p-10 border border-[#E5E1C9] shadow-lg relative overflow-hidden"
        >
          <div className="text-center mb-8">
            <h3 className="text-xs uppercase tracking-widest font-mono font-semibold text-[#00584F]">
              Venture Lifecycle Engine
            </h3>
            <p className="text-xl font-serif-heading font-semibold text-[#111615] mt-1">
              From initial thesis to scalable business
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-[#E5E1C9] -translate-y-1/2 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-[#00584F] via-[#007367] to-[#00584F]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
              {TIMELINE_STEPS.map((item, idx) => {
                const IconComponent = stepIcons[idx];
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.12 }}
                    className="bg-[#F8F7E8] p-5 rounded-2xl border border-[#E5E1C9] shadow-sm flex flex-col items-center text-center group hover:border-[#00584F] transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#00584F] text-[#F8F7E8] flex items-center justify-center mb-3 shadow-md group-hover:scale-105 transition-transform">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-mono font-bold text-[#00584F] uppercase tracking-widest bg-[#00584F]/10 px-2 py-0.5 rounded-full mb-1">
                      STEP {item.step}
                    </span>
                    <h4 className="text-base font-serif-heading font-bold text-[#111615]">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-[11px] text-[#525C58] font-sans-body font-light leading-relaxed">
                      {item.subtitle}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

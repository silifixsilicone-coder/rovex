"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Sparkles } from "lucide-react";

interface CTASectionProps {
  onOpenContact: () => void;
}

export function CTASection({ onOpenContact }: CTASectionProps) {
  return (
    <section className="py-16 sm:py-24 bg-[#F8F7E8] px-4 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#00584F] text-[#F8F7E8] rounded-3xl p-8 sm:p-14 text-center overflow-hidden shadow-xl"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#007367]/40 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F8F7E8]/10 text-[#D2E7DF] text-[11px] font-mono font-semibold uppercase tracking-wider mb-4 border border-[#F8F7E8]/15">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ROVEX Venture Studio</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif-heading leading-[1.1] font-medium tracking-tight text-[#F8F7E8]">
              Something new is always <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#D2E7DF]">
                being built at ROVEX.
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#D2E7DF] font-sans-body font-light leading-relaxed max-w-lg">
              Explore our businesses and follow what we&apos;re building next.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
              <button
                onClick={() => {
                  const el = document.getElementById("businesses");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#F8F7E8] text-[#00584F] font-sans-body font-semibold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
              >
                <span>Explore ROVEX</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#00453E] border border-[#F8F7E8]/20 text-[#F8F7E8] font-sans-body font-semibold text-xs uppercase tracking-wider hover:bg-[#003832] transition-all shadow-md active:scale-[0.98]"
              >
                <Mail className="w-3.5 h-3.5 text-[#D2E7DF]" />
                <span>Get in touch</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

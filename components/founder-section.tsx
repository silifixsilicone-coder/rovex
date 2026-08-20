"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  getStoredFounderProfile,
  FounderProfile,
  DEFAULT_FOUNDER_PROFILE,
} from "@/data/founder-profile";
import { User, ArrowUpRight } from "lucide-react";

const LinkedInIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

export function FounderSection() {
  const [profile, setProfile] = useState<FounderProfile>(DEFAULT_FOUNDER_PROFILE);
  const linkedinUrl = "https://www.linkedin.com/in/pramod-raut-42a857224?utm_source=share_via&utm_content=profile&utm_medium=member_ios";

  const loadProfile = () => {
    setProfile(getStoredFounderProfile());
  };

  useEffect(() => {
    loadProfile();
    const handleUpdate = () => loadProfile();
    window.addEventListener("rovex_founder_updated", handleUpdate);
    return () => window.removeEventListener("rovex_founder_updated", handleUpdate);
  }, []);

  return (
    <section id="founder" className="w-full bg-[#F8F7E8] text-[#111615] py-20 sm:py-28 px-6 sm:px-12 lg:px-16 border-t border-[#111615]/10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Category Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#00584F]/10 text-[#00584F] text-xs font-mono font-semibold uppercase tracking-wider mb-6"
        >
          <User className="w-3.5 h-3.5" />
          <span>ROVEX FOUNDER &amp; LEADERSHIP</span>
        </motion.div>

        {/* Founder Portrait Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col items-center bg-[#F2F0DF] p-8 sm:p-12 rounded-3xl border border-[#E5E1C9] shadow-xl max-w-md w-full relative group"
        >
          {/* Photo Frame */}
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-[#00584F] shadow-2xl bg-[#003832] mb-6 group-hover:scale-105 transition-transform duration-500">
            <img
              src={profile.photoUrl}
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name below photo */}
          <h3 className="text-3xl sm:text-4xl font-serif-heading font-bold text-[#111615] tracking-tight">
            {profile.name}
          </h3>

          {/* Designation */}
          <p className="text-xs font-mono font-semibold text-[#00584F] uppercase tracking-widest mt-1">
            {profile.title}
          </p>

          {/* Bio statement */}
          <p className="mt-4 text-xs sm:text-sm text-[#525C58] font-sans-body font-light leading-relaxed max-w-xs text-center">
            &ldquo;{profile.bio}&rdquo;
          </p>

          {/* LinkedIn Profile Button */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00584F] text-[#F8F7E8] text-xs font-semibold uppercase tracking-wider hover:bg-[#00453E] transition-all shadow-md active:scale-[0.98]"
          >
            <LinkedInIcon className="w-4 h-4" />
            <span>Connect on LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

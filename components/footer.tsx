"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";

interface FooterProps {
  onOpenContact: () => void;
}

const LinkedInIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

export function Footer({ onOpenContact }: FooterProps) {
  const linkedinUrl = "https://www.linkedin.com/in/pramod-raut-42a857224?utm_source=share_via&utm_content=profile&utm_medium=member_ios";

  const footerLinks = [
    { name: "Businesses", href: "#businesses" },
    { name: "Products", href: "#products" },
    { name: "Philosophy", href: "#philosophy" },
    { name: "About", href: "#about" },
  ];

  return (
    <footer className="bg-[#F8F7E8] text-[#111615] pt-14 pb-10 px-6 sm:px-10 lg:px-16 border-t border-[#111615]/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-[#111615]/10">
          <div className="md:col-span-6 flex flex-col items-start">
            <a href="#" className="flex items-center gap-2.5 group">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00584F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00584F]"></span>
              </span>
              <span className="text-xl font-bold font-sans-body tracking-widest uppercase text-[#111615] group-hover:text-[#00584F] transition-colors">
                ROVEX
              </span>
            </a>

            <p className="mt-3 text-lg font-serif-heading italic text-[#00584F]">
              “Building what comes next.”
            </p>

            <p className="mt-3 text-xs text-[#525C58] font-sans-body font-light max-w-sm leading-relaxed">
              ROVEX is a technology and venture studio working on multiple products across manufacturing, productivity, AI and digital services.
            </p>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00584F]/10 text-[#00584F] hover:bg-[#00584F] hover:text-[#F8F7E8] transition-all text-xs font-semibold font-sans-body border border-[#00584F]/20"
            >
              <LinkedInIcon className="w-3.5 h-3.5" />
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#00584F] mb-3">
              Navigation
            </h4>
            <ul className="space-y-2.5 font-sans-body text-xs text-[#525C58]">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#00584F] transition-colors inline-flex items-center gap-1"
                  >
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-[#00584F] transition-colors inline-flex items-center gap-1 focus:outline-none"
                >
                  <span>Contact Studio</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#00584F] mb-3">
              Core Businesses
            </h4>
            <ul className="space-y-2 font-sans-body text-xs text-[#525C58]">
              <li className="flex items-center justify-between border-b border-[#111615]/5 pb-1">
                <span className="font-medium text-[#111615]">Silifix Silicone</span>
                <span className="font-mono text-[9px] text-[#00584F]">Manufacturing</span>
              </li>
              <li className="flex items-center justify-between border-b border-[#111615]/5 pb-1">
                <span className="font-medium text-[#111615]">WinSizer</span>
                <span className="font-mono text-[9px] text-[#00584F]">Window Software</span>
              </li>
              <li className="flex items-center justify-between border-b border-[#111615]/5 pb-1">
                <span className="font-medium text-[#111615]">Falcon AI</span>
                <span className="font-mono text-[9px] text-[#00584F]">AI Keyboard</span>
              </li>
              <li className="flex items-center justify-between border-b border-[#111615]/5 pb-1">
                <span className="font-medium text-[#111615]">Future AI</span>
                <span className="font-mono text-[9px] text-[#00584F]">Manifest Partner</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#525C58] font-sans-body gap-3">
          <p>© 2026 ROVEX Studio. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00584F] cursor-pointer flex items-center gap-1 font-semibold text-[#00584F]"
            >
              <LinkedInIcon className="w-3.5 h-3.5" /> LinkedIn Profile
            </a>
            <span className="hover:text-[#00584F] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#00584F] cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { IntroSection } from "@/components/intro-section";
import { SilifixSection } from "@/components/silifix-section";
import { WinSizerSection } from "@/components/winsizer-section";
import { FalconAISection } from "@/components/falcon-ai-section";
import { FutureAISection } from "@/components/future-ai-section";
import { SayusAISection } from "@/components/sayus-ai-section";
import { TransitionSection } from "@/components/transition-section";
import { PhilosophySection } from "@/components/philosophy-section";
import { FounderSection } from "@/components/founder-section";
import { AboutSection } from "@/components/about-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { ContactModal } from "@/components/contact-modal";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F7E8] text-[#111615] relative overflow-x-hidden selection:bg-[#00584F] selection:text-[#F8F7E8]">
      <Navbar onOpenContact={() => setContactOpen(true)} />

      <main>
        <Hero />

        <IntroSection />

        <div id="businesses" className="scroll-mt-24">
          <div id="products" className="scroll-mt-24" />

          <SilifixSection />

          <WinSizerSection />

          <FalconAISection />

          <FutureAISection />

          <SayusAISection />
        </div>

        <TransitionSection />

        <PhilosophySection />

        <FounderSection />

        <AboutSection />

        <CTASection onOpenContact={() => setContactOpen(true)} />
      </main>

      <Footer onOpenContact={() => setContactOpen(true)} />

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      <WhatsAppButton />
    </div>
  );
}

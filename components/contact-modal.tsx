"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, CheckCircle } from "lucide-react";
import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", topic: "Venture Partnership", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#111615]/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-lg bg-[#F8F7E8] text-[#111615] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E5E1C9] z-10 overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-[#525C58] hover:text-[#111615] hover:bg-[#111615]/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-10 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#00584F] text-[#F8F7E8] flex items-center justify-center mb-3 shadow-lg">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif-heading font-bold text-[#111615]">
                  Message Received
                </h3>
                <p className="mt-2 text-xs text-[#525C58] font-sans-body">
                  Thank you for reaching out to ROVEX Studio. Our team will get back to you shortly.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-[#00584F] font-semibold mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Get In Touch</span>
                </div>
                <h3 className="text-2xl font-serif-heading font-medium text-[#111615]">
                  Connect with <span className="italic text-[#00584F]">ROVEX</span>
                </h3>
                <p className="mt-1 text-xs text-[#525C58] font-sans-body font-light">
                  Partner with us, explore investment opportunities, or inquire about our portfolio.
                </p>

                <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                  <div>
                    <label className="text-xs font-semibold text-[#111615] block mb-1">Your Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F2F0DF] border border-[#E5E1C9] focus:outline-none focus:border-[#00584F] text-xs text-[#111615]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#111615] block mb-1">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F2F0DF] border border-[#E5E1C9] focus:outline-none focus:border-[#00584F] text-xs text-[#111615]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#111615] block mb-1">Inquiry Type</label>
                    <select
                      value={form.topic}
                      onChange={(e) => setForm({ ...form, topic: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F2F0DF] border border-[#E5E1C9] focus:outline-none focus:border-[#00584F] text-xs text-[#111615]"
                    >
                      <option value="Venture Partnership">Venture Partnership</option>
                      <option value="Silifix Silicone Manufacturing">Silifix Silicone Manufacturing</option>
                      <option value="WinSizer Software & Hiring">WinSizer Software & Hiring</option>
                      <option value="Falcon AI Concept">Falcon AI Concept</option>
                      <option value="Future AI / Manifest Collaboration">Future AI / Manifest Collaboration</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#111615] block mb-1">Message</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Tell us about your project or inquiry..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F2F0DF] border border-[#E5E1C9] focus:outline-none focus:border-[#00584F] text-xs text-[#111615] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#00584F] text-[#F8F7E8] font-sans-body font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#00453E] transition-all shadow-md mt-3"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

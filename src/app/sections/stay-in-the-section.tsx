"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ProjectBadge from "../components/ProjectBadge";
import BorderBeam from "../components/ui/BorderBeam";

const PROJECT_TYPES = [
  "Flagship Website",
  "Luxury E-Commerce",
  "3D / Interactive WebGL",
  "Full Rebrand & Platform",
  "Web Application / SaaS",
  "Other / Custom Scope",
];

const BUDGET_TIERS = [
  "€600 – €1,500",
  "€1,500 – €3,500",
  "€3,500 – €7,500",
  "€7,500+",
];

const TIMELINE_OPTIONS = [
  "1 – 2 Months",
  "2 – 3 Months",
  "< 1 Month (Urgent)",
  "Flexible",
];

type SubmitState = "idle" | "sending" | "sent";

/** Project Inquiry and Client Commission Section with Comprehensive Quote Specifications. */
export default function StayInTheSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brand: "",
    website: "",
    projectType: "Flagship Website",
    budget: "€1,500 – €3,500",
    timeline: "1 – 2 Months",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || submitState !== "idle") return;

    setSubmitState("sending");

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        "Brand / Company": formData.brand || "N/A",
        "Current Website": formData.website || "N/A",
        "Project Type": formData.projectType,
        "Estimated Budget": formData.budget,
        "Target Timeline": formData.timeline,
        "Project Brief": formData.message || "Looking forward to discussing further.",
        _subject: `[QuarkMade Inquiry] ${formData.brand || formData.name} — ${formData.projectType}`,
        _captcha: "false",
        _template: "table",
      };

      const res = await fetch("https://formsubmit.co/ajax/liasides.elias@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Submission failed");

      setSubmitState("sent");
      // Brief success flash, then transition to confirmation card
      setTimeout(() => setSubmitted(true), 1200);
    } catch {
      // Fallback: open mailto if FormSubmit fails
      const subject = encodeURIComponent(`[Project Inquiry] ${formData.brand || formData.name} - ${formData.projectType}`);
      const body = encodeURIComponent(
        `Hi Elias,\n\nI would like to inquire about a new project with QuarkMade:\n\n` +
        `• Name: ${formData.name}\n` +
        `• Email: ${formData.email}\n` +
        `• Brand / Company: ${formData.brand || "N/A"}\n` +
        `• Current Website: ${formData.website || "N/A"}\n` +
        `• Project Type: ${formData.projectType}\n` +
        `• Estimated Budget: ${formData.budget}\n` +
        `• Target Timeline: ${formData.timeline}\n\n` +
        `• Project Details / Vision:\n${formData.message || "Looking forward to discussing further."}\n`
      );
      window.location.href = `mailto:liasides.elias@gmail.com?subject=${subject}&body=${body}`;
      setSubmitted(true);
    }
  };

  return (
    <section className="block bg-transparent text-white py-24 md:py-32 px-6 max-md:py-16 max-md:px-4 relative overflow-hidden" id="inquire">
      {/* Radial Obsidian Vignette Overlay for Crisp Readability */}
      <div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(11, 10, 18, 0.35) 0%, rgba(11, 10, 18, 0.75) 60%, rgba(11, 10, 18, 0.96) 100%)",
        }}
      />

      {/* Ambient Cosmic Purple & Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#4442DB]/15 rounded-full blur-[140px] pointer-events-none z-1" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none z-1" />

      <div className="flex flex-col items-center gap-12 mx-auto w-full max-w-4xl relative z-10">
        <div data-reveal className="flex flex-col items-center gap-4 text-center max-w-2xl">
          <ProjectBadge label="COMMISSIONS & QUOTES" />
          <h2 className="[font-family:'Satoshi',_sans-serif] text-4xl sm:text-5xl md:text-6xl font-normal leading-tight tracking-tight text-white mt-2" data-component="heading">
            Start a project with <span className="[font-family:'Chillax',_sans-serif] font-medium text-[#F3E5AB]">QuarkMade</span>
          </h2>
          <p className="[font-family:'Satoshi',_sans-serif] font-normal text-base md:text-lg text-white/80 leading-relaxed">
            Tell us about your brand vision, scope, and timeline. We will review your project requirements and prepare a bespoke quote within 24 hours.
          </p>
          <div className="flex items-center gap-2 text-xs [font-family:'Satoshi',_sans-serif] text-white/70 pt-1">
            <span>Prefer direct messaging?</span>
            <a
              href="https://wa.me/35799057690?text=Hi%20Elias,%20I'd%20like%20to%20discuss%20a%20new%20website%20project%20with%20QuarkMade."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#25D366] hover:text-[#4ade80] font-medium underline underline-offset-4 decoration-[#25D366]/40 hover:decoration-[#25D366] transition-colors"
            >
              <span>Chat on WhatsApp (+357 99 057690)</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {submitted ? (
          <div data-reveal className="p-8 md:p-10 rounded-2xl bg-white/10 border border-[#D4AF37]/50 text-center max-w-lg backdrop-blur-md relative overflow-hidden flex flex-col items-center gap-5">
            <BorderBeam size={240} duration={8} colorFrom="#D4AF37" colorTo="#F3E5AB" />
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] text-xl shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              ✦
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="[font-family:'Chillax',_sans-serif] text-2xl font-medium text-white tracking-wide">
                Inquiry Transmitted
              </h3>
              <p className="[font-family:'Satoshi',_sans-serif] text-white/80 text-sm font-normal leading-relaxed">
                Thank you, <span className="text-[#F3E5AB] font-medium">{formData.name}</span>. Your project brief has been formatted and routed to <span className="text-[#D4AF37]">liasides.elias@gmail.com</span>.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={`https://wa.me/35799057690?text=${encodeURIComponent(`Hi Elias, I just submitted an inquiry on QuarkMade for ${formData.brand || formData.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-2.5 px-5 bg-[#25D366]/20 border border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366]/30 text-xs font-semibold uppercase tracking-wider transition-colors rounded-none"
              >
                <span>WhatsApp Escalation</span>
                <span>→</span>
              </a>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="py-2.5 px-4 text-xs font-medium uppercase tracking-wider text-white/60 hover:text-white transition-colors"
              >
                Submit another inquiry
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            data-reveal
            className="w-full max-w-2xl flex flex-col gap-6 p-5 sm:p-8 md:p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            {/* Luminous Animated Border Beam Tracing along perimeter */}
            <BorderBeam size={340} duration={10} colorFrom="#4442DB" colorTo="#D4AF37" />

            {/* Block 1: Client & Brand Contact Info */}
            <div className="flex flex-col gap-4 relative z-1">
              <span className="[font-family:'Satoshi',_sans-serif] text-[11px] font-semibold tracking-[0.2em] text-[#D4AF37] uppercase">
                1. Client & Brand Profile
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="[font-family:'Satoshi',_sans-serif] text-xs uppercase tracking-wider text-white/70 font-normal" htmlFor="inquiry-name">
                    Your Name <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    id="inquiry-name"
                    type="text"
                    required
                    placeholder="Elena Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-11 px-4 rounded-none bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors [font-family:'Satoshi',_sans-serif] text-[16px] sm:text-sm font-normal"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="[font-family:'Satoshi',_sans-serif] text-xs uppercase tracking-wider text-white/70 font-normal" htmlFor="inquiry-email">
                    Work Email <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    id="inquiry-email"
                    type="email"
                    required
                    placeholder="elena@brand.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-11 px-4 rounded-none bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors [font-family:'Satoshi',_sans-serif] text-[16px] sm:text-sm font-normal"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="[font-family:'Satoshi',_sans-serif] text-xs uppercase tracking-wider text-white/70 font-normal" htmlFor="inquiry-brand">
                    Brand / Company Name
                  </label>
                  <input
                    id="inquiry-brand"
                    type="text"
                    placeholder="e.g. Vance Studio"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="h-11 px-4 rounded-none bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors [font-family:'Satoshi',_sans-serif] text-[16px] sm:text-sm font-normal"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="[font-family:'Satoshi',_sans-serif] text-xs uppercase tracking-wider text-white/70 font-normal" htmlFor="inquiry-website">
                    Current Website <span className="text-white/40 text-[10px] lowercase">(optional)</span>
                  </label>
                  <input
                    id="inquiry-website"
                    type="text"
                    placeholder="https://yoursite.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="h-11 px-4 rounded-none bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors [font-family:'Satoshi',_sans-serif] text-[16px] sm:text-sm font-normal"
                  />
                </div>
              </div>
            </div>

            {/* Block 2: Project Scope Selection Grid Cards */}
            <div className="flex flex-col gap-3 relative z-1 pt-2 border-t border-white/10">
              <span className="[font-family:'Satoshi',_sans-serif] text-[11px] font-semibold tracking-[0.2em] text-[#D4AF37] uppercase">
                2. What Are We Building?
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                {PROJECT_TYPES.map((type) => {
                  const isSelected = formData.projectType === type;
                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, projectType: type })}
                      className={`flex items-center justify-between p-2.5 sm:p-3 text-left transition-all duration-200 cursor-pointer border [font-family:'Satoshi',_sans-serif] rounded-none ${
                        isSelected
                          ? "bg-[#4442DB]/25 text-white border-[#D4AF37] shadow-[0_0_15px_rgba(68,66,219,0.35)] font-semibold"
                          : "bg-white/[0.03] text-white/70 border-white/10 hover:border-white/30 hover:text-white font-normal"
                      }`}
                    >
                      <span className="text-[11.5px] sm:text-xs leading-tight">{type}</span>
                      <span
                        className={`text-xs ml-1 transition-colors shrink-0 ${
                          isSelected ? "text-[#D4AF37] opacity-100" : "text-white/20 opacity-40"
                        }`}
                      >
                        ✦
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Block 3: Investment Budget & Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-1 pt-2 border-t border-white/10">
              <div className="flex flex-col gap-2">
                <div className="flex items-baseline justify-between">
                  <label className="[font-family:'Satoshi',_sans-serif] text-[11px] font-semibold tracking-[0.2em] text-[#D4AF37] uppercase" htmlFor="inquiry-budget">
                    3. Estimated Budget
                  </label>
                  <span className="text-[10px] text-white/40 uppercase">Min. €600</span>
                </div>
                <select
                  id="inquiry-budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="h-11 px-3 bg-[#12111A] border border-white/20 text-white focus:outline-none focus:border-[#D4AF37] transition-colors [font-family:'Satoshi',_sans-serif] text-[16px] sm:text-sm font-normal cursor-pointer rounded-none"
                >
                  {BUDGET_TIERS.map((tier) => (
                    <option key={tier} value={tier} className="bg-[#0B0A12] text-white py-1">
                      {tier}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="[font-family:'Satoshi',_sans-serif] text-[11px] font-semibold tracking-[0.2em] text-[#D4AF37] uppercase" htmlFor="inquiry-timeline">
                  Target Launch Window
                </label>
                <select
                  id="inquiry-timeline"
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="h-11 px-3 bg-[#12111A] border border-white/20 text-white focus:outline-none focus:border-[#D4AF37] transition-colors [font-family:'Satoshi',_sans-serif] text-[16px] sm:text-sm font-normal cursor-pointer rounded-none"
                >
                  {TIMELINE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#0B0A12] text-white py-1">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Block 4: Project Vision & Brief */}
            <div className="flex flex-col gap-2 relative z-1 pt-2 border-t border-white/10">
              <label className="[font-family:'Satoshi',_sans-serif] text-[11px] font-semibold tracking-[0.2em] text-[#D4AF37] uppercase" htmlFor="inquiry-message">
                4. Project Brief & Key Objectives
              </label>
              <textarea
                id="inquiry-message"
                rows={4}
                placeholder="Tell us about your brand goals, target audience, specific features (e.g. 3D WebGL, bespoke checkout, animations), or websites you admire..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="p-3.5 rounded-none bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors [font-family:'Satoshi',_sans-serif] text-[16px] sm:text-sm resize-none font-normal"
              />
            </div>

            {/* Block 5: Actions & Submission (2-Col Grid Alignment) */}
            <div className="flex flex-col gap-3 pt-3 relative z-1 border-t border-white/10">
              <div className="flex items-center gap-2 text-white/50 text-xs [font-family:'Satoshi',_sans-serif]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                <span>Quotes responded to within 24h</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://wa.me/35799057690?text=Hi%20Elias,%20I'd%20like%20to%20discuss%20a%20new%20website%20project%20with%20QuarkMade."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-9 px-4 py-3 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 hover:border-[#25D366] text-[#25D366] [font-family:'Satoshi',_sans-serif] text-[13px] font-medium leading-[13px] tracking-[0.13px] uppercase rounded-none transition-all duration-200 w-full whitespace-nowrap shadow-[0_0_15px_rgba(37,211,102,0.15)]"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12C2 13.85 2.5 15.58 3.38 17.07L2 22L7.09 20.67C8.54 21.52 10.22 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM3.85 12C3.85 7.5 7.5 3.85 12 3.85C16.5 3.85 20.15 7.5 20.15 12C20.15 16.5 16.5 20.15 12 20.15C10.42 20.15 8.95 19.7 7.7 18.92L7.35 18.7L4.35 19.49L5.16 16.58L4.92 16.2C4.24 14.94 3.85 13.51 3.85 12ZM8.6 7.4C8.42 7.4 8.16 7.46 7.93 7.71C7.7 7.96 7.05 8.57 7.05 9.8C7.05 11.03 7.95 12.21 8.08 12.38C8.2 12.54 9.82 15.04 12.3 16.11C12.89 16.37 13.35 16.52 13.71 16.63C14.3 16.82 14.84 16.79 15.27 16.73C15.75 16.66 16.74 16.13 16.95 15.55C17.16 14.97 17.16 14.47 17.1 14.37C17.04 14.27 16.88 14.21 16.63 14.09C16.38 13.97 15.18 13.38 14.96 13.3C14.74 13.22 14.58 13.18 14.42 13.43C14.26 13.68 13.79 14.23 13.65 14.39C13.51 14.55 13.37 14.57 13.12 14.45C12.87 14.33 12.08 14.07 11.14 13.23C10.41 12.58 9.92 11.78 9.78 11.53C9.64 11.28 9.76 11.15 9.88 11.03C9.99 10.92 10.13 10.74 10.25 10.6C10.37 10.46 10.41 10.36 10.49 10.2C10.57 10.04 10.53 9.9 10.47 9.78C10.41 9.66 9.94 8.5 9.74 8.03C9.54 7.57 9.35 7.63 9.2 7.62C9.05 7.61 8.89 7.61 8.73 7.61L8.6 7.4Z"
                    />
                  </svg>
                  <span className="whitespace-nowrap">Chat on WhatsApp</span>
                </a>
                <motion.button
                  type="submit"
                  disabled={submitState !== "idle"}
                  className="inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap [font-family:'Satoshi',_sans-serif] text-[13px] font-semibold leading-[13px] tracking-[0.13px] uppercase h-9 px-4 py-3 rounded-none transition-colors duration-200 ease-out outline-none select-none w-full bg-[#d4af37] text-[#0b0a12] hover:bg-[#e5c158] shadow-[0_0_15px_rgba(212,175,55,0.3)] disabled:cursor-not-allowed overflow-hidden relative"
                  data-component="button"
                  whileTap={submitState === "idle" ? { scale: 0.97 } : {}}
                  animate={
                    submitState === "sending"
                      ? { scale: [1, 1.02, 1], transition: { repeat: Infinity, duration: 1.2, ease: "easeInOut" } }
                      : submitState === "sent"
                        ? { scale: [1, 1.05, 1], transition: { duration: 0.4, ease: "easeOut" } }
                        : { scale: 1 }
                  }
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {submitState === "idle" && (
                      <motion.span
                        key="idle"
                        className="inline-flex items-center gap-2"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <svg className="w-auto h-3 block shrink-0 overflow-hidden" fill="none" height="12" viewBox="0 0 7 12" width="7" xmlns="http://www.w3.org/2000/svg">
                          <path d="M-5.20146e-07 0.100448L-4.38375e-09 11.8997C-6.3316e-10 11.9855 0.100519 12.0315 0.165009 11.9754L6.96568 6.07593C7.01144 6.0361 7.01144 5.96442 6.96568 5.92459L0.165008 0.0247822C0.100518 -0.0316963 -5.23897e-07 0.0146446 -5.20146e-07 0.100448Z" fill="currentColor" />
                        </svg>
                        <span>Request Project Quote</span>
                      </motion.span>
                    )}
                    {submitState === "sending" && (
                      <motion.span
                        key="sending"
                        className="inline-flex items-center gap-2"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.span
                          className="inline-block w-3.5 h-3.5 border-2 border-[#0b0a12]/30 border-t-[#0b0a12] rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 0.7, ease: "linear" }}
                        />
                        <span>Transmitting…</span>
                      </motion.span>
                    )}
                    {submitState === "sent" && (
                      <motion.span
                        key="sent"
                        className="inline-flex items-center gap-2"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "backOut" }}
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <motion.path
                            d="M5 13l4 4L19 7"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                          />
                        </svg>
                        <span>Inquiry Sent ✦</span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

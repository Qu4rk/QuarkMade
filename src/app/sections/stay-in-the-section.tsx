"use client";

import { useState } from "react";
import Button from "../components/Button";
import { NoiseBackground } from "../components/ui/noise-background";

/** Project Inquiry and Client Commission Section. */
export default function StayInTheSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="block bg-[#0B0A12] text-white py-24 md:py-32 px-6 max-md:py-16 max-md:px-4 relative overflow-hidden" id="inquire">
      {/* Ambient Cosmic Purple & Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#4442DB]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="flex flex-col items-center gap-12 mx-auto w-full max-w-4xl relative z-10">
        <div data-reveal className="flex flex-col items-center gap-4 text-center max-w-2xl">
          <div className="flex justify-center">
            <NoiseBackground
              containerClassName="w-fit p-1 rounded-full mx-auto bg-black/40 border border-white/10 shadow-[0px_0px_20px_0px_rgba(68,66,219,0.3)]"
              gradientColors={[
                "rgb(68, 66, 219)", // Electric Purple
                "rgb(212, 175, 55)", // Imperial Gold
                "rgb(165, 148, 249)", // Soft Lavender
              ]}
              noiseIntensity={0.25}
              speed={0.12}
            >
              <div className="h-full w-full select-none rounded-full bg-gradient-to-r from-black/90 via-neutral-950/90 to-black/90 px-4 py-1.5 text-white shadow-[0px_1px_0px_0px_rgba(255,255,255,0.12)_inset,0px_1px_2px_0px_rgba(0,0,0,0.8)] [font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-medium leading-none tracking-[0.15em] uppercase flex items-center justify-center gap-2 max-md:text-xs max-md:px-3.5 max-md:py-1.25">
                <svg
                  className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
                <span className="text-white/90">COMMISSIONS & INQUIRIES</span>
              </div>
            </NoiseBackground>
          </div>
          <h2 className="[font-family:'Ivar_Headline',_serif] text-4xl sm:text-5xl md:text-6xl font-normal leading-tight tracking-tight text-white" data-component="heading">
            Start a project with <span className="text-[#F3E5AB]">QuarkMade</span>
          </h2>
          <p className="[font-family:Denim,_serif] text-base md:text-lg text-white/80 leading-relaxed">
            Have a project in mind? We partner with ambitious founders, luxury brands, and visionary teams to engineer digital flagships that set new benchmarks.
          </p>
        </div>

        {submitted ? (
          <div data-reveal className="p-8 rounded-lg bg-white/10 border border-[#D4AF37]/50 text-center max-w-md backdrop-blur-md">
            <div className="text-3xl mb-2 text-[#D4AF37]">✦</div>
            <h3 className="[font-family:'Saans_Mono',_monospace] text-lg font-bold uppercase tracking-wider text-white mb-2">
              Inquiry Received
            </h3>
            <p className="[font-family:Denim,_serif] text-white/80 text-sm">
              Thank you for reaching out. We will review your project brief and get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            data-reveal
            className="w-full max-w-xl flex flex-col gap-4 p-6 md:p-8 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="[font-family:'Saans_Mono',_monospace] text-xs uppercase tracking-wider text-white/70" htmlFor="inquiry-name">
                  Your Name
                </label>
                <input
                  id="inquiry-name"
                  type="text"
                  required
                  placeholder="Elias Liasides"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-10 px-4 rounded-none bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#D4AF37] transition-colors [font-family:Denim,_serif] text-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="[font-family:'Saans_Mono',_monospace] text-xs uppercase tracking-wider text-white/70" htmlFor="inquiry-email">
                  Email Address
                </label>
                <input
                  id="inquiry-email"
                  type="email"
                  required
                  placeholder="elias@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-10 px-4 rounded-none bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#D4AF37] transition-colors [font-family:Denim,_serif] text-sm"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="[font-family:'Saans_Mono',_monospace] text-xs uppercase tracking-wider text-white/70" htmlFor="inquiry-message">
                Project Scope / Timeline
              </label>
              <textarea
                id="inquiry-message"
                rows={3}
                placeholder="Tell us about your brand, vision, or desired launch date..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="p-3 rounded-none bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#D4AF37] transition-colors [font-family:Denim,_serif] text-sm resize-none"
              />
            </div>

            <div className="flex justify-end mt-2">
              <Button type="submit" variant="gold" className="w-full md:w-auto">
                Submit Project Inquiry
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

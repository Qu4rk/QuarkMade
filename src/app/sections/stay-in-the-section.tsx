"use client";

import { useState } from "react";
import Button from "../components/Button";
import ProjectBadge from "../components/ProjectBadge";
import Topography from "../components/ui/Topography";
import BorderBeam from "../components/ui/BorderBeam";

/** Project Inquiry and Client Commission Section with WebGL Topography Background. */
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
          <ProjectBadge label="COMMISSIONS & INQUIRIES" />
          <h2 className="[font-family:'Satoshi',_sans-serif] text-4xl sm:text-5xl md:text-6xl font-normal leading-tight tracking-tight text-white mt-2" data-component="heading">
            Start a project with <span className="[font-family:'Chillax',_sans-serif] font-medium text-[#F3E5AB]">QuarkMade</span>
          </h2>
          <p className="[font-family:'Satoshi',_sans-serif] font-normal text-base md:text-lg text-white/80 leading-relaxed">
            Have a project in mind? We partner with ambitious founders, luxury brands, and visionary teams to engineer digital flagships that set new benchmarks.
          </p>
        </div>

        {submitted ? (
          <div data-reveal className="p-8 rounded-2xl bg-white/10 border border-[#D4AF37]/50 text-center max-w-md backdrop-blur-md relative overflow-hidden">
            <BorderBeam size={220} duration={8} colorFrom="#D4AF37" colorTo="#F3E5AB" />
            <div className="text-3xl mb-2 text-[#D4AF37]">✦</div>
            <h3 className="[font-family:'Satoshi',_sans-serif] text-lg font-bold uppercase tracking-wider text-white mb-2">
              Inquiry Received
            </h3>
            <p className="[font-family:'Satoshi',_sans-serif] text-white/80 text-sm font-normal">
              Thank you for reaching out. We will review your project brief and get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            data-reveal
            className="w-full max-w-xl flex flex-col gap-4 p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            {/* Luminous Animated Border Beam Tracing along perimeter */}
            <BorderBeam size={300} duration={10} colorFrom="#4442DB" colorTo="#D4AF37" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-1">
              <div className="flex flex-col gap-2">
                <label className="[font-family:'Satoshi',_sans-serif] text-xs uppercase tracking-wider text-white/70 font-normal" htmlFor="inquiry-name">
                  Your Name
                </label>
                <input
                  id="inquiry-name"
                  type="text"
                  required
                  placeholder="Elias Liasides"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-10 px-4 rounded-none bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#D4AF37] transition-colors [font-family:'Satoshi',_sans-serif] text-sm font-normal"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="[font-family:'Satoshi',_sans-serif] text-xs uppercase tracking-wider text-white/70 font-normal" htmlFor="inquiry-email">
                  Email Address
                </label>
                <input
                  id="inquiry-email"
                  type="email"
                  required
                  placeholder="elias@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-10 px-4 rounded-none bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#D4AF37] transition-colors [font-family:'Satoshi',_sans-serif] text-sm font-normal"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 relative z-1">
              <label className="[font-family:'Satoshi',_sans-serif] text-xs uppercase tracking-wider text-white/70 font-normal" htmlFor="inquiry-message">
                Project Scope / Timeline
              </label>
              <textarea
                id="inquiry-message"
                rows={3}
                placeholder="Tell us about your brand, vision, or desired launch date..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="p-3 rounded-none bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#D4AF37] transition-colors [font-family:'Satoshi',_sans-serif] text-sm resize-none font-normal"
              />
            </div>

            <div className="flex justify-end mt-2 relative z-1">
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

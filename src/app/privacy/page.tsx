import type { Metadata } from "next";
import Link from "next/link";
import QuarkLogo from "../components/QuarkLogo";
import ProjectBadge from "../components/ProjectBadge";

export const metadata: Metadata = {
  title: "Privacy Policy | QuarkMade",
  description: "Privacy Policy and data protection commitments for QuarkMade Creative Studio.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0B0A12] text-white selection:bg-[#4442DB] selection:text-white relative overflow-hidden py-12 md:py-20 px-6 max-md:px-4">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#4442DB]/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[250px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto relative z-1 flex flex-col gap-12">
        {/* Navigation & Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-8 border-b border-white/10">
          <Link href="/" className="group" aria-label="QuarkMade Home">
            <QuarkLogo size={44} showText={true} />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm [font-family:'Satoshi',_sans-serif] text-white/70 hover:text-[#D4AF37] transition-colors uppercase tracking-wider font-normal"
          >
            <span>←</span> Back to Studio
          </Link>
        </header>

        {/* Title Section */}
        <div className="flex flex-col gap-4">
          <ProjectBadge label="LEGAL / DATA PROTECTION" />
          <h1 className="[font-family:'Chillax',_sans-serif] text-4xl sm:text-5xl md:text-6xl font-medium text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="[font-family:'Satoshi',_sans-serif] text-sm text-[#D4AF37] tracking-wider uppercase font-normal">
            Last Updated: August 2026
          </p>
        </div>

        {/* Policy Body */}
        <div className="flex flex-col gap-10 [font-family:'Satoshi',_sans-serif] text-white/80 font-normal leading-relaxed text-base sm:text-lg">
          <section className="flex flex-col gap-3">
            <h2 className="[font-family:'Chillax',_sans-serif] text-xl sm:text-2xl text-white font-medium">
              1. Overview & Commitment
            </h2>
            <p>
              At QuarkMade, we treat client privacy and intellectual property with the utmost discretion and care. This Privacy Policy outlines how we handle information collected through our website (<span className="text-white">quarkmade.com</span>) and during client discovery and project inquiries.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="[font-family:'Chillax',_sans-serif] text-xl sm:text-2xl text-white font-medium">
              2. Information We Collect
            </h2>
            <p>
              We only collect information that you voluntarily provide to us when submitting project inquiry briefs, scheduling consultation calls, or contacting us via email. This may include:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-white/75">
              <li><strong className="text-white">Contact Details:</strong> Your name, company or brand name, and email address.</li>
              <li><strong className="text-white">Project Information:</strong> Project scope, budget parameters, timeline objectives, and creative references.</li>
              <li><strong className="text-white">Technical Data:</strong> Non-personally identifiable diagnostic and performance data (e.g., browser type, viewport resolution) used strictly to optimize site speed and visual rendering.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="[font-family:'Chillax',_sans-serif] text-xl sm:text-2xl text-white font-medium">
              3. How We Use Your Information
            </h2>
            <p>
              Any information shared with QuarkMade is utilized solely for legitimate business purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-white/75">
              <li>Responding to project commissions and preparing bespoke architectural proposals.</li>
              <li>Executing client contracts, milestone reviews, and digital delivery workflows.</li>
              <li>Maintaining studio performance standards and preventing technical degradation.</li>
            </ul>
            <p className="text-white/70 italic text-sm">
              We never sell, rent, monetize, or disclose your personal information to third-party advertisers or data brokers.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="[font-family:'Chillax',_sans-serif] text-xl sm:text-2xl text-white font-medium">
              4. Cookies & Privacy-First Metrics
            </h2>
            <p>
              Our flagship website is designed with minimal overhead and does not deploy intrusive tracking cookies or cross-site tracking pixels. Any analytical tools utilized measure aggregated performance metrics strictly to ensure 60/120 FPS rendering and rapid asset delivery.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="[font-family:'Chillax',_sans-serif] text-xl sm:text-2xl text-white font-medium">
              5. Data Security & Discretion
            </h2>
            <p>
              We implement industry-standard encryption, SSL protocols, and restricted access measures to safeguard all communications. Any proprietary brand assets or unreleased products shared with our studio are held under strict confidentiality.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="[font-family:'Chillax',_sans-serif] text-xl sm:text-2xl text-white font-medium">
              6. Your Rights & Studio Contact
            </h2>
            <p>
              You have the right to request access to, correction of, or deletion of any personal information provided to our studio. If you have questions regarding this policy or wish to request data removal, please contact our team directly at:
            </p>
            <div className="p-5 rounded-xl bg-white/5 border border-white/10 w-fit">
              <p className="text-white font-medium">QuarkMade Studio Inquiries</p>
              <a href="mailto:hello@quarkmade.com" className="text-[#D4AF37] hover:underline">
                hello@quarkmade.com
              </a>
            </div>
          </section>
        </div>

        {/* Footer note */}
        <footer className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50 [font-family:'Satoshi',_sans-serif]">
          <p>© {new Date().getFullYear()} QuarkMade. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/" className="hover:text-white transition-colors">Studio Flagship</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}

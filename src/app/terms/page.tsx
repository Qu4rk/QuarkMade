import type { Metadata } from "next";
import Link from "next/link";
import QuarkLogo from "../components/QuarkLogo";
import ProjectBadge from "../components/ProjectBadge";

export const metadata: Metadata = {
  title: "Terms of Service | QuarkMade",
  description: "Terms of Service and commercial client engagement conditions for QuarkMade Creative Studio.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0B0A12] text-white selection:bg-[#4442DB] selection:text-white relative overflow-hidden py-12 md:py-20 px-6 max-md:px-4">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#4442DB]/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[250px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none z-0" />

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
          <ProjectBadge label="LEGAL / COMMERCIAL TERMS" />
          <h1 className="[font-family:'Chillax',_sans-serif] text-4xl sm:text-5xl md:text-6xl font-medium text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="[font-family:'Satoshi',_sans-serif] text-sm text-[#D4AF37] tracking-wider uppercase font-normal">
            Last Updated: August 2026
          </p>
        </div>

        {/* Terms Body */}
        <div className="flex flex-col gap-10 [font-family:'Satoshi',_sans-serif] text-white/80 font-normal leading-relaxed text-base sm:text-lg">
          <section className="flex flex-col gap-3">
            <h2 className="[font-family:'Chillax',_sans-serif] text-xl sm:text-2xl text-white font-medium">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing the QuarkMade website (<span className="text-white">quarkmade.com</span>), browsing our portfolio, or commissioning our studio for digital architecture and creative engineering, you agree to comply with and be bound by these Terms of Service.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="[font-family:'Chillax',_sans-serif] text-xl sm:text-2xl text-white font-medium">
              2. Studio Scope of Services
            </h2>
            <p>
              QuarkMade is a boutique creative studio specializing in bespoke web design, interactive 3D/WebGL experiences, brand flagships, and front-end engineering. All custom commissions are governed by individual Master Services Agreements (MSAs), Statements of Work (SOWs), and formal project milestone schedules.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="[font-family:'Chillax',_sans-serif] text-xl sm:text-2xl text-white font-medium">
              3. Intellectual Property & Deliverables
            </h2>
            <p>
              Ownership of intellectual property is clearly partitioned to protect both parties:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-white/75">
              <li><strong className="text-white">Client Deliverables:</strong> Upon full and final settlement of all agreed project invoices, all custom client brand assets, design deliverables, and bespoke source code created specifically for the project transfer unconditionally to the client.</li>
              <li><strong className="text-white">Studio Showcase Rights:</strong> QuarkMade reserves the non-exclusive, perpetual right to display completed, launched projects in our online portfolio, case studies, and design awards, unless a formal Non-Disclosure Agreement (NDA) specifies otherwise.</li>
              <li><strong className="text-white">Studio Frameworks:</strong> Pre-existing proprietary studio utilities, shaders, boilerplates, and development tooling remain the intellectual property of QuarkMade and are licensed to the client for the operation of their project.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="[font-family:'Chillax',_sans-serif] text-xl sm:text-2xl text-white font-medium">
              4. Client Engagements, Estimates & Payments
            </h2>
            <p>
              Project estimates and timelines are based on agreed scope briefs. Any modifications, scope additions, or expedited timelines requested during production will be documented via a formal Change Order with associated cost adjustments.
            </p>
            <p>
              Milestone payments are due according to the schedule specified in the project agreement. Invoices not settled within agreed terms may result in temporary project suspension.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="[font-family:'Chillax',_sans-serif] text-xl sm:text-2xl text-white font-medium">
              5. Confidentiality & Non-Disclosure
            </h2>
            <p>
              Both parties agree to treat proprietary business information, strategy documents, technical architectures, and pre-launch assets as strictly confidential. We routinely execute bilateral NDAs with our enterprise and luxury brand partners.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="[font-family:'Chillax',_sans-serif] text-xl sm:text-2xl text-white font-medium">
              6. Limitation of Liability & Warranty
            </h2>
            <p>
              While QuarkMade adheres to rigorous engineering and accessibility standards, digital services are provided &quot;as is&quot; upon final client sign-off. QuarkMade is not liable for indirect, incidental, or consequential damages arising from third-party hosting failures, domain management, or external API disruptions.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="[font-family:'Chillax',_sans-serif] text-xl sm:text-2xl text-white font-medium">
              7. Studio Contact & Inquiries
            </h2>
            <p>
              For legal inquiries, contract clarifications, or commercial partnerships, please contact:
            </p>
            <div className="p-5 rounded-xl bg-white/5 border border-white/10 w-fit">
              <p className="text-white font-medium">QuarkMade Commercial & Legal</p>
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
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-white transition-colors">Studio Flagship</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}

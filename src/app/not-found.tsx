import Link from "next/link";
import QuarkLogo from "./components/QuarkLogo";
import ProjectBadge from "./components/ProjectBadge";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0B0A12] text-white selection:bg-[#4442DB] selection:text-white relative overflow-hidden py-12 md:py-20 px-6 max-md:px-4 flex flex-col justify-between">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#4442DB]/15 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[250px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto w-full relative z-1 flex flex-col gap-16 flex-1 justify-center">
        {/* Navigation & Header */}
        <header className="flex justify-between items-center pb-8 border-b border-white/10 w-full">
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

        {/* 404 Content */}
        <div className="flex flex-col items-start gap-6 max-w-2xl py-8">
          <ProjectBadge label="404 — ARTIFACT NOT FOUND" />
          <h1 className="[font-family:'Chillax',_sans-serif] text-4xl sm:text-6xl md:text-7xl font-medium text-white tracking-tight leading-[1.1]">
            Page Out of Orbit.
          </h1>
          <p className="[font-family:'Satoshi',_sans-serif] text-base sm:text-lg text-white/75 leading-relaxed font-normal">
            The digital coordinate you navigated to does not exist or has been relocated within our studio architecture.
          </p>

          <div className="pt-4 flex flex-wrap gap-4 items-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center py-3 px-6 [font-family:'Satoshi',_sans-serif] font-semibold text-xs uppercase tracking-wider bg-[#4442DB] text-white border border-[#D4AF37]/40 hover:bg-[#5654E4] hover:border-[#D4AF37] shadow-[0_0_15px_rgba(68,66,219,0.35)] transition-all duration-150"
            >
              Return to Studio Flagship
            </Link>
            <a
              href="mailto:liasides.elias@gmail.com"
              className="inline-flex items-center justify-center py-3 px-6 [font-family:'Satoshi',_sans-serif] font-medium text-xs uppercase tracking-wider bg-white/[0.06] text-white/80 border border-white/15 hover:border-white/30 hover:text-white transition-all duration-150"
            >
              Contact Studio Support
            </a>
          </div>
        </div>

        {/* Footer note */}
        <footer className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50 [font-family:'Satoshi',_sans-serif] w-full mt-auto">
          <p>© {new Date().getFullYear()} QuarkMade. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}

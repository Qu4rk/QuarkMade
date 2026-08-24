import DittoMotion from "./ditto/DittoMotion";
import Navbar from "./sections/navbar";
import HeroSection from "./sections/hero-section";
import PlaceWorthBelongingSection from "./sections/place-worth-belonging-section";
import WhereVisionAndSection from "./sections/where-vision-and-section";
import RootedInHistorySection from "./sections/rooted-in-history-section";
import BuildingPlaceToSection from "./sections/building-place-to-section";
import PartnerWithUsSection from "./sections/partner-with-us-section";
import BaseSection from "./sections/base-section";
import StayInTheSection from "./sections/stay-in-the-section";
import LogoCloudSection from "./sections/logo-cloud-section";
import ScrollObserver from "./components/ScrollObserver";
import Preloader from "./components/ui/Preloader";

import Ferrofluid from "./components/ui/Ferrofluid";

export default function Page() {
  return (
    <>
      <Preloader />
      <ScrollObserver />
      <Navbar />

      {/* Global Interactive Ferrofluid WebGL Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-70">
        <Ferrofluid
          colors={["#4442DB", "#7C3AED", "#D4AF37", "#F3E5AB"]}
          speed={0.4}
          scale={1.5}
          turbulence={0.85}
          fluidity={0.12}
          rimWidth={0.22}
          sharpness={2.8}
          shimmer={1.0}
          glow={2.0}
          dpr={0.65}
          flowDirection="down"
          opacity={0.85}
          mouseInteraction={true}
          mouseStrength={1.2}
          mouseRadius={0.35}
          mouseDampening={0.12}
        />
      </div>

      <main className="min-h-screen block flex-1 bg-transparent text-white relative z-1" id="content">
        <HeroSection />
        <PlaceWorthBelongingSection />
        <WhereVisionAndSection />
        <div className="block w-full" aria-hidden="true" />
        <PartnerWithUsSection />
        <div className="block w-full" aria-hidden="true" />
        <BuildingPlaceToSection />
        <div className="block w-full" aria-hidden="true" />
        <RootedInHistorySection />
        <BaseSection />
        <StayInTheSection />
      </main>
      <LogoCloudSection />
      <DittoMotion spec={{"waapi":[],"rotators":[],"reveals":[{"anchor":"motion-1","opacity":"0","transform":"none","transition":"0.3s cubic-bezier(0.4, 0, 0.2, 1)"},{"anchor":"motion-div","opacity":"0","transform":"none","transition":"0.3s cubic-bezier(0.4, 0, 0.2, 1)"},{"anchor":"motion-close","opacity":"0","transform":"none","transition":"opacity 0.15s cubic-bezier(0, 0, 0.2, 1)"}],"marquees":[]}} />
    </>
  );
}

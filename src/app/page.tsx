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

export default function Page() {
  return (
    <>
      <Preloader />
      <ScrollObserver />
      <Navbar />
      <main className="min-h-screen block flex-1 bg-[#0B0A12] text-white" id="content">
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

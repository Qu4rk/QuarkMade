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

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen block flex-1" id="content">
        <HeroSection />
        <PlaceWorthBelongingSection />
        <WhereVisionAndSection />
        <div className="block w-full" aria-hidden="true" />
        <RootedInHistorySection />
        <div className="block w-full" aria-hidden="true" />
        <BuildingPlaceToSection />
        <div className="block w-full" aria-hidden="true" />
        <PartnerWithUsSection />
        <BaseSection />
        <StayInTheSection />
      </main>
      <LogoCloudSection />
      <div className="block">
        {" "}
        <div className="w-320 h-200 block fixed top-0 -z-1000 overflow-hidden align-middle pointer-events-none max-md:w-[23.4375rem] max-md:h-203 md:max-lg:w-192 md:max-lg:h-256 2xl:w-480 2xl:h-270" id="tooltip-container-wrapper" title="Marker.io tooltip UI">
          <div className="h-full block overflow-hidden text-color-001 [font-family:-apple-system,_'system-ui',_'Segoe_UI',_Roboto,_Oxygen,_Ubuntu,_Cantarell,_'Open_Sans',_'Helvetica_Neue',_sans-serif] leading-4.5 [font-feature-settings:'calt',_'case']">
            <div className="block" id="f5-tooltip-container" />
          </div>
        </div>
        {" "}
        <div className="block">
          <div className="w-200 h-200 block fixed top-0 right-0 -z-1000 overflow-hidden align-middle pointer-events-none" id="notifications-root" title="Marker.io notification overlay">
            <div className="block overflow-hidden text-color-001 [font-family:-apple-system,_'system-ui',_'Segoe_UI',_Roboto,_Oxygen,_Ubuntu,_Cantarell,_'Open_Sans',_'Helvetica_Neue',_sans-serif] leading-4.5 [font-feature-settings:'calt',_'case']" />
          </div>
          {" "}
        </div>
        {" "}
      </div>
      <div className="block" />
      <div className="block" />
      <div className="block" />
      <div className="block" />
      <div className="block" />
      <div className="block" />
      <div className="block" />
      <DittoMotion spec={{"waapi":[],"rotators":[],"reveals":[{"anchor":"motion-1","opacity":"0","transform":"none","transition":"0.3s cubic-bezier(0.4, 0, 0.2, 1)"},{"anchor":"motion-div","opacity":"0","transform":"none","transition":"0.3s cubic-bezier(0.4, 0, 0.2, 1)"},{"anchor":"motion-close","opacity":"0","transform":"none","transition":"opacity 0.15s cubic-bezier(0, 0, 0.2, 1)"}],"marquees":[]}} />
    </>
  );
}

import Button from "../components/Button";
import { NoiseBackground } from "../components/ui/noise-background";

/** Featured Project 3: Chronotomi Case Study with actual website snapshot, official logo mark, parallax depth, and animated NoiseBackground pill. */
export default function PartnerWithUsSection() {
  return (
    <section className="block bg-foreground overflow-hidden" id="chronotomi-showcase">
      <div className="h-200 min-h-160 block relative z-1 max-h-224 overflow-hidden w-full max-md:h-[43.3625rem] max-lg:min-h-0 max-lg:max-h-none md:max-lg:h-240 2xl:h-270 2xl:min-h-240 2xl:max-h-336">
        {/* Parallax Background Layer with Actual Chronotomi Snapshot */}
        <div className="h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none">
          <div
            data-parallax
            data-parallax-speed="0.2"
            className="h-300 block absolute -top-50 inset-x-0 max-md:h-[65.0375rem] max-md:-top-32 md:max-lg:h-360 md:max-lg:-top-40 2xl:h-405 2xl:-top-60"
          >
            <div className="h-full block absolute top-0 inset-x-0 overflow-hidden">
              <img
                className="w-full h-full block absolute overflow-clip object-cover align-middle scale-105"
                alt="Chronotomi Haute Horlogerie Showcase"
                src="/assets/portfolio/chronotomi_timepieces_hero.png"
              />
            </div>
          </div>
        </div>

        {/* Deep Violet & Black Gradient Overlay */}
        <div
          className="h-full block absolute top-0 inset-x-0 z-2"
          style={{
            background:
              "linear-gradient(180deg, rgba(11, 10, 18, 0.75) 0%, rgba(42, 24, 84, 0.6) 50%, rgba(11, 10, 18, 0.9) 100%)",
          }}
        />

        <div className="h-full block absolute top-0 inset-x-0 z-3">
          <div className="flex py-16 px-6 flex-col justify-center items-center mx-auto max-w-screen h-full w-full max-md:py-10 max-md:px-4">
            <div data-reveal className="w-full max-w-162 flex flex-col items-center gap-8 text-white text-center max-md:gap-6">
              {/* Aceternity Noise Background Badge */}
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
                    <span className="text-white/90">FEATURED PROJECT 03 / HAUTE HORLOGERIE & TIMEPIECE FLAGSHIP</span>
                  </div>
                </NoiseBackground>
              </div>

              {/* Main Section Heading: Chillax Medium Gold Brand Title with Logo to the left */}
              <div className="flex flex-col items-center justify-center gap-2 text-center" data-component="heading">
                <div className="flex items-center justify-center gap-3.5 sm:gap-4 flex-wrap">
                  <img
                    src="/assets/portfolio/logos/chronotomi-logo.png"
                    alt="Chronotomi"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain shrink-0 drop-shadow-md transition-transform duration-300 hover:scale-105"
                  />
                  <span className="[font-family:'Chillax',_sans-serif] font-medium text-[2.75rem] sm:text-[3.5rem] md:text-[3.85rem] text-[#F3E5AB] leading-none tracking-tight">
                    Chronotomi:
                  </span>
                </div>
                <p className="[font-family:'Ivar_Headline',_serif] text-[2.25rem] sm:text-[3rem] md:text-[3.35rem] font-normal leading-[1.12] tracking-[0.25px] text-white">
                  Precision in every <span className="inline [font-family:'Chillax',_sans-serif] font-medium text-[#F3E5AB]">frame</span>
                </p>
              </div>
              <p className="[font-family:Denim,_serif] text-base md:text-lg text-white/85 max-w-xl">
                An immersive web flagship designed for haute horlogerie collectors, featuring bespoke kinetic typography, interactive timepiece showcases, and editorial storytelling.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-5 max-md:gap-4 mt-2">
                <Button href="http://www.chronotomi.com/" variant="gold">
                  Visit Live Site (Chronotomi.com)
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

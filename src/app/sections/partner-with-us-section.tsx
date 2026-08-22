import Button from "../components/Button";
import { NoiseBackground } from "../components/ui/noise-background";

/** Featured Project 3: QuieTide Case Study with parallax depth and animated NoiseBackground pill. */
export default function PartnerWithUsSection() {
  return (
    <section className="block bg-foreground overflow-hidden" id="quietide-showcase">
      <div className="h-200 min-h-160 block relative z-1 max-h-224 overflow-hidden w-full max-md:h-[43.3625rem] max-lg:min-h-0 max-lg:max-h-none md:max-lg:h-240 2xl:h-270 2xl:min-h-240 2xl:max-h-336">
        {/* Parallax Background Layer */}
        <div className="h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none">
          <div
            data-parallax
            data-parallax-speed="0.2"
            className="h-300 block absolute -top-50 inset-x-0 max-md:h-[65.0375rem] max-md:-top-32 md:max-lg:h-360 md:max-lg:-top-40 2xl:h-405 2xl:-top-60"
          >
            <div className="h-full block absolute top-0 inset-x-0 overflow-hidden">
              <img
                className="w-full h-full block absolute overflow-clip object-cover align-middle scale-105"
                alt="QuieTide Mediterranean Sea and Sunset"
                src="/assets/branding/hero-sunset.jpg"
              />
            </div>
          </div>
        </div>

        {/* Deep Violet & Black Gradient Overlay */}
        <div
          className="h-full block absolute top-0 inset-x-0 z-2"
          style={{
            background:
              "linear-gradient(180deg, rgba(11, 10, 18, 0.7) 0%, rgba(42, 24, 84, 0.6) 50%, rgba(11, 10, 18, 0.9) 100%)",
          }}
        />

        <div className="h-full block absolute top-0 inset-x-0 z-3">
          <div className="flex py-16 px-6 flex-col justify-center items-center mx-auto max-w-screen h-full w-full max-md:py-10 max-md:px-4">
            <div data-reveal className="w-full max-w-162 flex flex-col items-center gap-10 text-white text-center max-md:gap-8">
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
                    <span className="text-white/90">FEATURED PROJECT 03 / DIGITAL SANCTUARY</span>
                  </div>
                </NoiseBackground>
              </div>

              <div className="block [font-family:'Ivar_Headline',_serif] text-[3.25rem] leading-[4rem] tracking-[0.31px] max-md:text-4xl max-md:leading-[2.6875rem]" data-component="heading">
                <p className="block">
                  QuieTide: The <span className="inline [font-family:'Chillax',_sans-serif] font-medium text-[#F3E5AB]">art</span> of stillness
                </p>
              </div>
              <p className="[font-family:Denim,_serif] text-base md:text-lg text-white/85 max-w-xl">
                A curated digital experience capturing Mediterranean light and rhythmic coastal serenity through WebGL shaders, smooth motion, and contemplative pacing.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-5 max-md:gap-4 mt-2">
                <Button href="https://qu4rk.github.io/quietide-website/" variant="gold">
                  Visit Live Site (QuieTide)
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Button from "../components/Button";
import { NoiseBackground } from "../components/ui/noise-background";

/** Where Vision And section highlighting QuarkMade's multidisciplinary craft with animated NoiseBackground pill and parallax depth. */
export default function WhereVisionAndSection() {
  return (
    <section className="block bg-foreground overflow-hidden" id="full-width-craft">
      <div className="h-200 min-h-160 block relative z-1 max-h-224 overflow-hidden w-full max-md:h-[43.3625rem] max-lg:min-h-0 max-lg:max-h-none md:max-lg:h-240 2xl:h-270 2xl:min-h-240 2xl:max-h-336">
        {/* Parallax Background Layer */}
        <div className="h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none">
          <div
            data-parallax
            data-parallax-speed="0.2"
            className="h-300 block absolute -top-50 inset-x-0 max-md:h-[65.0375rem] max-md:-top-32 md:max-lg:h-360 md:max-lg:-top-40 2xl:h-405 2xl:-top-60"
          >
            <div className="h-full block absolute top-0 inset-x-0 overflow-hidden max-md:hidden">
              <img
                className="w-full h-full block absolute overflow-clip object-cover object-center align-middle"
                alt="QuarkMade Creative Studio Craft"
                src="/assets/cloned/images/ee4e9bcc9a0b.png"
              />
            </div>
            <div className="w-full h-full hidden absolute top-0 overflow-hidden max-md:block">
              <img
                className="w-full h-full block absolute overflow-clip object-cover object-center align-middle"
                alt="QuarkMade Creative Studio Craft"
                src="/assets/cloned/images/ee4e9bcc9a0b.png"
              />
            </div>
          </div>
        </div>

        {/* Deep Violet & Black Gradient Overlay */}
        <div
          className="h-full block absolute top-0 inset-x-0 z-2"
          style={{
            background:
              "linear-gradient(180deg, rgba(11, 10, 18, 0.75) 0%, rgba(42, 24, 84, 0.65) 50%, rgba(11, 10, 18, 0.85) 100%)",
          }}
        />

        <div className="h-full block absolute top-0 inset-x-0 z-3">
          <div className="flex py-16 px-6 flex-col justify-center items-center mx-auto max-w-screen h-full w-full max-md:py-10 max-md:px-4">
            <div data-reveal className="w-full max-w-162 flex flex-col items-center gap-10 text-white text-center max-md:gap-8">
              {/* Aceternity Noise Background Badge (Non-interactive Pill without arrow) */}
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
                    <span className="text-[#D4AF37]">✦</span>
                    <span className="text-white/90">DESIGN, MOTION, & ENGINEERING</span>
                  </div>
                </NoiseBackground>
              </div>

              <div className="block [font-family:'Ivar_Headline',_serif] text-[3.25rem] leading-[4rem] tracking-[0.31px] max-md:text-4xl max-md:leading-[2.6875rem]" data-component="heading">
                <p className="block">
                  Where <span className="inline [font-family:'Chillax',_sans-serif] font-medium text-[#F3E5AB]">vision</span>, <span className="inline [font-family:'Chillax',_sans-serif] font-medium text-[#F3E5AB]">engineering</span>, and <span className="inline [font-family:'Chillax',_sans-serif] font-medium text-[#F3E5AB]">elegance</span> come together
                </p>
              </div>
              <p className="[font-family:Denim,_serif] text-base md:text-lg text-white/80 max-w-xl">
                We believe websites shouldn&apos;t just communicate information — they should create memorable sensory impressions that linger in the mind.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-5 max-md:gap-4 mt-2">
                <Button href="#works" variant="primary-inverse">
                  Explore Selected Works
                </Button>
                <Button href="#capabilities" variant="secondary-inverse">
                  Studio Capabilities
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

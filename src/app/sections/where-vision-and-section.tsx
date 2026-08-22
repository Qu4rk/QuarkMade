import Button from "../components/Button";

/** Where Vision And section highlighting QuarkMade's multidisciplinary craft with parallax depth. */
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#D4AF37]/40 [font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] text-[#D4AF37] uppercase max-md:text-xs">
                <span>✦</span>
                <span>DESIGN, MOTION, & ENGINEERING</span>
              </div>
              <div className="block [font-family:'Ivar_Headline',_serif] text-[3.25rem] leading-[4rem] tracking-[0.31px] max-md:text-4xl max-md:leading-[2.6875rem]" data-component="heading">
                <p className="block">
                  Where <em className="inline italic text-[#F3E5AB]">vision</em>, <em className="inline italic text-[#F3E5AB]">engineering</em>, and <em className="inline italic text-[#F3E5AB]">elegance</em> come together
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

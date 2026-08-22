import Button from "../components/Button";

/** Featured Project 3: QuieTide Case Study with parallax depth. */
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#D4AF37]/40 [font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] text-[#D4AF37] uppercase max-md:text-xs">
                <span>✦</span>
                <span>FEATURED PROJECT 03 / DIGITAL SANCTUARY</span>
              </div>
              <div className="block [font-family:'Ivar_Headline',_serif] text-[3.25rem] leading-[4rem] tracking-[0.31px] max-md:text-4xl max-md:leading-[2.6875rem]" data-component="heading">
                <p className="block">
                  QuieTide: The <em className="inline italic text-[#F3E5AB]">art</em> of stillness
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

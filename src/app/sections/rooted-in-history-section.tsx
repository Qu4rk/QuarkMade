import Button from "../components/Button";

/** Featured Project 1: Chronotomi Case Study. */
export default function RootedInHistorySection() {
  return (
    <section className="block bg-background" id="works">
      <div className="flex py-24 px-6 flex-col gap-16 mx-auto w-full max-w-screen max-md:py-16 max-md:px-4 max-md:gap-10">
        <div data-reveal className="block max-w-242.5 mx-auto [font-family:Denim,_serif] text-[3.625rem] font-semibold leading-[4rem] tracking-[0.31px] text-center max-md:text-4xl max-md:leading-[2.5rem]" data-component="heading">
          <p className="block">
            Chronotomi:
            <br className="inline" />
            Precision in every frame
          </p>
        </div>
        <div data-reveal className="block max-w-242.5 mx-auto [font-family:'Ivar_Mono',_monospace] leading-[1.3125rem] text-center uppercase max-md:text-sm max-md:leading-[1.125rem]" data-component="heading">
          <p className="block whitespace-nowrap text-[#4442DB] font-medium tracking-wider">
            FEATURED PROJECT 01 / HAUTE HORLOGERIE & TIMEPIECE FLAGSHIP
          </p>
        </div>
        <div data-reveal className="block relative z-1 max-w-242.5 mx-auto rounded-lg aspect-[231/130] w-full max-md:aspect-[343/428] overflow-hidden shadow-2xl">
          <div className="h-full block absolute top-0 inset-x-0 rounded-lg overflow-hidden bg-foreground">
            <div className="h-full block absolute top-0 inset-x-0 overflow-hidden">
              <img
                className="w-full h-full block absolute overflow-clip object-cover align-middle scale-105 transition-transform duration-700 hover:scale-100"
                alt="Chronotomi Luxury Horology Showcase"
                src="/assets/cloned/images/c421cbf33a68.jpg"
              />
            </div>
            <div
              className="h-full block absolute top-0 inset-x-0 z-2"
              style={{
                background:
                  "linear-gradient(180deg, rgba(11, 10, 18, 0.4) 0%, rgba(42, 24, 84, 0.5) 50%, rgba(11, 10, 18, 0.8) 100%)",
              }}
            />
            <div className="h-full flex absolute top-0 inset-x-0 z-3 py-22 px-9 justify-center items-center max-md:py-16">
              <div className="flex max-w-119.5 flex-col justify-between items-center gap-6 text-center text-white">
                <div className="flex flex-col items-center gap-2">
                  <span className="[font-family:'Saans_Mono',_monospace] text-2xl font-bold tracking-[0.3em] uppercase text-white">
                    CHRONOTOMI
                  </span>
                  <span className="[font-family:'Saans_Mono',_monospace] text-xs tracking-[0.2em] uppercase text-[#D4AF37]">
                    WWW.CHRONOTOMI.COM
                  </span>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-5 max-md:gap-4">
                  <Button href="http://www.chronotomi.com/" variant="gold">
                    Visit Live Site (Chronotomi.com)
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-reveal className="grid max-w-181 mx-auto flex-col gap-6 grid-cols-1 text-center">
          <div className="block [font-family:Denim,_serif] text-lg font-medium leading-relaxed tracking-[0.16px] max-md:text-base text-foreground/80">
            <p className="block">
              An immersive web flagship designed for haute horlogerie collectors, featuring bespoke kinetic typography, interactive timepiece showcases, and editorial storytelling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

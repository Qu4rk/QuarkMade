import Button from "../components/Button";

/** Featured Project 2: Lumina Living Case Study with actual website snapshot and official logo mark. */
export default function BuildingPlaceToSection() {
  return (
    <section className="block bg-background">
      <div className="flex py-24 px-6 flex-col gap-16 mx-auto w-full max-w-screen max-md:py-16 max-md:px-4 max-md:gap-10">
        <div data-reveal className="block max-w-242.5 mx-auto [font-family:Denim,_serif] text-[3.625rem] font-semibold leading-[4rem] tracking-[0.31px] text-center max-md:text-4xl max-md:leading-[2.5rem]" data-component="heading">
          <p className="block whitespace-nowrap">
            Lumina Living:
          </p>
          {" "}
          <p className="block">
            Architectural serenity
          </p>
        </div>
        <div data-reveal className="block max-w-242.5 mx-auto [font-family:'Ivar_Mono',_monospace] leading-[1.3125rem] text-center uppercase max-md:text-sm max-md:leading-[1.125rem]" data-component="heading">
          <p className="block text-[#4442DB] font-medium tracking-wider">
            FEATURED PROJECT 02 / MODERN REAL ESTATE & SPATIAL PLATFORM
          </p>
        </div>
        <div data-reveal className="block relative z-1 max-w-242.5 mx-auto rounded-lg aspect-[231/130] w-full max-md:aspect-[343/428] overflow-hidden shadow-2xl group">
          <div className="h-full block absolute top-0 inset-x-0 rounded-lg overflow-hidden bg-foreground">
            {/* Real Snapshot of Lumina Living */}
            <div className="h-full block absolute top-0 inset-x-0 overflow-hidden">
              <img
                className="w-full h-full block absolute overflow-clip object-cover align-middle scale-105 transition-transform duration-700 group-hover:scale-100"
                alt="Lumina Living Architectural Showcase"
                src="/assets/portfolio/lumina_hero.png"
              />
            </div>
            {/* Subtle Contrast Gradient */}
            <div
              className="h-full block absolute top-0 inset-x-0 z-2 transition-opacity duration-500 group-hover:opacity-85"
              style={{
                background:
                  "linear-gradient(180deg, rgba(11, 10, 18, 0.45) 0%, rgba(42, 24, 84, 0.5) 50%, rgba(11, 10, 18, 0.85) 100%)",
              }}
            />
            <div className="h-full flex absolute top-0 inset-x-0 z-3 py-22 px-9 justify-center items-center max-md:py-16">
              <div className="flex max-w-119.5 flex-col justify-between items-center gap-6 text-center text-white">
                <div className="flex flex-col items-center gap-3">
                  {/* Official Lumina Living Logo */}
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full p-2 bg-black/40 border border-[#D4AF37]/40 shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-transform duration-500 group-hover:scale-110 flex items-center justify-center">
                    <img
                      src="/assets/portfolio/logos/lumina-logo.png"
                      alt="Lumina Living Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="[font-family:'FT_Polar',_serif] text-3xl font-medium tracking-wider capitalize text-white drop-shadow-md">
                    Lumina Living
                  </span>
                  <span className="[font-family:'Saans_Mono',_monospace] text-xs tracking-[0.2em] uppercase text-[#D4AF37]">
                    WWW.LUMINA-LIVING.NET
                  </span>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-5 max-md:gap-4">
                  <Button href="http://www.lumina-living.net/" variant="gold">
                    Visit Live Site (Lumina-Living.net)
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-reveal className="grid max-w-181 mx-auto flex-col gap-6 grid-cols-1 text-center">
          <div className="block [font-family:Denim,_serif] text-lg font-medium leading-relaxed tracking-[0.16px] max-md:text-base text-foreground/80">
            <p className="block">
              A modern living sanctuary platform crafted with panoramic media viewers, bespoke typography, and seamless property discovery that bridges architecture with digital serenity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

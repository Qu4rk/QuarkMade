import Button from "../components/Button";
import ProjectBadge from "../components/ProjectBadge";

/** Featured Project 3: Chronotomi Case Study with actual website snapshot, official logo mark, and Chillax Gold heading. */
export default function PartnerWithUsSection() {
  return (
    <section className="block bg-background" id="chronotomi-showcase">
      <div className="flex py-24 px-6 flex-col gap-16 mx-auto w-full max-w-screen max-md:py-16 max-md:px-4 max-md:gap-10">
        {/* Main Section Heading: Chillax Medium Gold Brand Title with Logo to the left */}
        <div data-reveal className="flex flex-col items-center justify-center gap-2 text-center max-w-4xl mx-auto" data-component="heading">
          <div className="flex items-center justify-center gap-3.5 sm:gap-4 flex-wrap">
            <img
              src="/assets/portfolio/logos/chronotomi-logo.png"
              alt="Chronotomi"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain shrink-0 drop-shadow-sm transition-transform duration-300 hover:scale-105"
            />
            <span className="[font-family:'Chillax',_sans-serif] font-medium text-[2.75rem] sm:text-[3.5rem] md:text-[3.85rem] text-[#D4AF37] leading-none tracking-tight">
              Chronotomi:
            </span>
          </div>
          <p className="[font-family:'Satoshi',_sans-serif] text-[2.25rem] sm:text-[3rem] md:text-[3.35rem] font-normal leading-[1.12] tracking-[0.25px] text-foreground">
            Precision in every frame
          </p>
        </div>

        <ProjectBadge label="FEATURED PROJECT 03 / HAUTE HORLOGERIE & TIMEPIECE FLAGSHIP" />

        <div data-reveal className="block relative z-1 max-w-242.5 mx-auto rounded-lg aspect-[231/130] w-full max-md:aspect-[343/428] overflow-hidden shadow-2xl group">
          <div className="h-full block absolute top-0 inset-x-0 rounded-lg overflow-hidden bg-foreground">
            {/* Real Snapshot of Chronotomi */}
            <div className="h-full block absolute top-0 inset-x-0 overflow-hidden">
              <img
                className="w-full h-full block absolute overflow-clip object-cover align-middle scale-105 transition-transform duration-700 group-hover:scale-100"
                alt="Chronotomi Haute Horlogerie Showcase"
                src="/assets/portfolio/chronotomi_timepieces_hero.png"
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
                  {/* Official Chronotomi Logo */}
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full p-2 bg-black/40 border border-[#D4AF37]/40 shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-transform duration-500 group-hover:scale-110 flex items-center justify-center">
                    <img
                      src="/assets/portfolio/logos/chronotomi-logo.png"
                      alt="Chronotomi Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="[font-family:'Satoshi',_sans-serif] text-2xl font-bold tracking-[0.3em] uppercase text-white drop-shadow-md">
                    CHRONOTOMI
                  </span>
                  <span className="[font-family:'Satoshi',_sans-serif] text-xs tracking-[0.2em] uppercase text-[#D4AF37]">
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
          <div className="block [font-family:'Satoshi',_sans-serif] text-lg font-normal leading-relaxed tracking-[0.16px] max-md:text-base text-foreground/80">
            <p className="block">
              An immersive web flagship designed for haute horlogerie collectors, featuring bespoke kinetic typography, interactive timepiece showcases, and editorial storytelling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

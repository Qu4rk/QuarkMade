/** Manifesto section presenting QuarkMade's core design philosophy and studio mission. */
export default function PlaceWorthBelongingSection() {
  return (
    <section className="block bg-background py-24 md:py-32 px-6 max-md:py-16 max-md:px-4" id="philosophy">
      <div className="flex flex-col gap-8 mx-auto w-full max-w-4xl text-center">
        <div
          data-reveal
          className="[font-family:'Saans_Mono',_monospace] text-xs md:text-sm font-semibold tracking-[0.25em] text-[#4442DB] uppercase"
        >
          STUDIO MANIFESTO
        </div>

        <div
          data-reveal
          className="[font-family:'Ivar_Headline',_serif] text-3xl sm:text-5xl md:text-6xl text-foreground font-normal leading-tight tracking-tight"
          data-component="heading"
        >
          <p className="block">
            Digital spaces worth remembering.
          </p>
        </div>

        <div
          data-reveal
          className="[font-family:Denim,_serif] text-lg sm:text-xl md:text-2xl text-foreground/80 font-normal leading-relaxed max-w-3xl mx-auto"
        >
          <p className="block">
            QuarkMade designs bespoke, high-performance web experiences where brand prestige, motion craftsmanship, and technical rigor unite.
          </p>
        </div>

        <div
          data-reveal
          className="[font-family:Denim,_serif] text-base sm:text-lg md:text-xl text-foreground/60 font-light leading-relaxed max-w-3xl mx-auto"
        >
          <p className="block">
            From the horological precision of <strong className="font-medium text-foreground">Chronotomi</strong> to the architectural stillness of <strong className="font-medium text-foreground">Lumina Living</strong> and <strong className="font-medium text-foreground">QuieTide</strong>, we design digital flagships where emotion, aesthetics, and engineering grow together.
          </p>
        </div>
      </div>
    </section>
  );
}

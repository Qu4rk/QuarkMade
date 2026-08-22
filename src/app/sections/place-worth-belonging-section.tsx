/** Manifesto section presenting QuarkMade's core design philosophy and studio mission. */
export default function PlaceWorthBelongingSection() {
  return (
    <section className="block bg-background py-20 md:py-28 px-6 max-md:py-16 max-md:px-4" id="philosophy">
      <div className="flex flex-col gap-6 mx-auto w-full max-w-4xl text-center">
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
          className="[font-family:Denim,_serif] text-lg sm:text-2xl md:text-3xl text-foreground/80 font-normal leading-relaxed max-w-3xl mx-auto"
        >
          <p className="block">
            From the horological precision of <strong className="font-semibold text-foreground">Chronotomi</strong> to the architectural stillness of <strong className="font-semibold text-foreground">Lumina Living</strong> and <strong className="font-semibold text-foreground">QuieTide</strong>, QuarkMade designs websites where emotion, aesthetics, and engineering grow together.
          </p>
        </div>
      </div>
    </section>
  );
}

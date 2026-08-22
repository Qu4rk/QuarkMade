/** Place Worth Belonging section with reveal animation. */
export default function PlaceWorthBelongingSection() {
  return (
    <section className="block text-center bg-background">
      <div className="grid py-24 px-6 flex-col gap-8 mx-auto grid-cols-12 w-full max-w-screen max-md:flex max-md:py-16 max-md:px-4 max-md:gap-6">
        <div data-reveal className="block col-start-2 col-end-[span_10] max-md:[grid-column-start:initial] max-md:[grid-column-end:initial]">
          <h4 className="block [font-family:'Ivar_Headline',_serif] text-4xl leading-[3.0625rem] tracking-[0.18px] max-md:text-[1.75rem] max-md:leading-[2.375rem] max-md:tracking-[0.14px]" data-component="heading">
            A place worth belonging to.
            <br className="inline" />
            From the cultural energy of B31 District to the connected streets of Base Living, Base31 is where history, design, and community grow together.
          </h4>
        </div>
      </div>
    </section>
  );
}

import Button from "../components/Button";

/** Building Place To section with reveal animations and Base31 button styles. */
export default function BuildingPlaceToSection() {
  return (
    <section className="block bg-background">
      <div className="flex py-24 px-6 flex-col gap-16 mx-auto w-full max-w-screen max-md:py-16 max-md:px-4 max-md:gap-10">
        <div data-reveal className="block max-w-242.5 mx-auto [font-family:Denim,_serif] text-[3.625rem] font-semibold leading-[4rem] tracking-[0.31px] text-center max-md:text-4xl max-md:leading-[2.5rem]" data-component="heading">
          <p className="block whitespace-nowrap">
            Building a place
          </p>
          {" "}
          <p className="block">
            to call home
          </p>
        </div>
        <div data-reveal className="block max-w-242.5 mx-auto [font-family:'Ivar_Mono',_monospace] leading-[1.3125rem] text-center uppercase max-md:text-sm max-md:leading-[1.125rem]" data-component="heading">
          <p className="block">
            A new kind of homecoming
          </p>
        </div>
        <div data-reveal className="block relative z-1 max-w-242.5 mx-auto rounded-lg aspect-[231/130] w-full max-md:aspect-[343/428] overflow-hidden">
          <div className="h-full block absolute top-0 inset-x-0 rounded-lg overflow-hidden bg-foreground [clip-path:inset(2.381%_round_8px)]">
            <div className="h-full block absolute top-0 inset-x-0 overflow-hidden max-md:hidden">
              <picture className="inline">
                <source className="inline" sizes="(min-width: 970px) 970px, 100vw" srcSet="/assets/cloned/images/4e9837c42d24.jpg 800w, /assets/cloned/images/f5fef7b38e1c.jpg 1600w, /assets/cloned/images/c5a17d9dafaa.jpg 2400w, /assets/cloned/images/f069a63fa207.jpg 3200w, /assets/cloned/images/a860b9fb81e7.jpg 4800w" type="image/webp" />
                <source className="inline" sizes="(min-width: 970px) 970px, 100vw" srcSet="/assets/cloned/images/4e9837c42d24.jpg 800w, /assets/cloned/images/f5fef7b38e1c.jpg 1600w, /assets/cloned/images/c5a17d9dafaa.jpg 2400w, /assets/cloned/images/f069a63fa207.jpg 3200w, /assets/cloned/images/a860b9fb81e7.jpg 4800w" />
                <img className="w-242.5 h-136.5 block absolute overflow-clip object-cover align-middle md:max-lg:w-180 md:max-lg:h-[25.3125rem]" data-component="image" alt="Base Living community" src="/assets/cloned/images/f069a63fa207.jpg" />
              </picture>
            </div>
            <div className="w-full h-full hidden absolute top-0 overflow-hidden max-md:w-[21.4375rem] max-md:block">
              <img className="w-[110%] block absolute top-[-5%] left-[-5%] overflow-clip object-cover align-middle max-md:w-[23.5625rem] max-md:h-55 max-md:-top-[1.3375rem] max-md:left-[-17.1px]" alt="" aria-hidden="true" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
            </div>
            <div className="h-full block absolute top-0 inset-x-0 z-2" style={{ backgroundImage: "linear-gradient(0deg, var(--clr-3) 0%, var(--clr-3) 100%)" }} />
            <div className="h-full flex absolute top-0 inset-x-0 z-3 py-22 px-9 justify-center max-md:py-16">
              <div className="flex max-w-119.5 flex-col justify-between items-center gap-4 text-center">
                <img className="w-44 h-7.5 block max-w-full max-h-[7.1875rem] overflow-clip aspect-[auto_176/30] align-middle text-clr-2" data-component="image" alt="Base Living Logo" height="30" src="/assets/cloned/svg/55b7cc3ec0ee.svg" width="176" />
                <div className="flex flex-wrap justify-center items-center gap-5 max-md:gap-4">
                  <Button href="/living" variant="primary-inverse">
                    Explore Base Living
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-reveal className="grid max-w-181 mx-auto flex-col gap-12 grid-cols-1 max-md:flex max-md:gap-8 max-md:grid-cols-[repeat(1,_1fr)]">
          <div className="block [font-family:Denim,_serif] font-medium leading-[1.375rem] tracking-[0.16px] text-center max-md:text-sm max-md:leading-[1.25rem] max-md:tracking-[0.14px]">
            <p className="block">
              Thoughtfully designed homes, walkable streets, and shared green spaces come together to create neighbourhoods rooted in connection, balance, and belonging.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

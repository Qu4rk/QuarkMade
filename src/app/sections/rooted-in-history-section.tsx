import Icon5 from "../svgs/svg-icon5";
/** Rooted In History section. */
export default function RootedInHistorySection() {
  return (
    <section className="block bg-background">
      <div className="flex py-24 px-6 flex-col gap-16 mx-auto w-full max-w-screen max-md:py-16 max-md:px-4 max-md:gap-10">
        <div className="block max-w-242.5 mx-auto [font-family:Denim,_serif] text-[3.625rem] font-semibold leading-[4rem] tracking-[0.31px] text-center max-md:text-4xl max-md:leading-[2.5rem]" data-component="heading">
          <p className="block">
            {"Rooted in history, "}
            <br className="inline" />
            alive with culture
          </p>
        </div>
        <div className="block max-w-242.5 mx-auto [font-family:'Ivar_Mono',_monospace] leading-[1.3125rem] text-center uppercase max-md:text-sm max-md:leading-[1.125rem]" data-component="heading">
          <p className="block whitespace-nowrap">
            The heartbeat
          </p>
          {" "}
          <p className="block whitespace-nowrap">
            of The County
          </p>
        </div>
        <div className="block relative z-1 max-w-242.5 mx-auto rounded-lg aspect-[231/130] w-full max-md:aspect-[343/428]">
          <div className="h-full block absolute top-0 inset-x-0 rounded-lg overflow-hidden bg-foreground [clip-path:inset(2.381%_round_8px)]">
            <div className="h-full block absolute top-0 inset-x-0 overflow-hidden max-md:hidden">
              <picture className="inline">
                <source className="inline" sizes="(min-width: 970px) 970px, 100vw" srcSet="/assets/cloned/images/4524a083e380.jpg 675w, /assets/cloned/images/3f380161de91.jpg 1350w, /assets/cloned/images/5cd38b1c40f7.jpg 2025w, /assets/cloned/images/c421cbf33a68.jpg 2700w" type="image/webp" />
                <source className="inline" sizes="(min-width: 970px) 970px, 100vw" srcSet="/assets/cloned/images/4524a083e380.jpg 675w, /assets/cloned/images/3f380161de91.jpg 1350w, /assets/cloned/images/5cd38b1c40f7.jpg 2025w, /assets/cloned/images/c421cbf33a68.jpg 2700w" />
                <img className="w-242.5 h-136.5 block absolute overflow-clip object-cover align-middle md:max-lg:w-180 md:max-lg:h-[25.3125rem]" data-component="image" alt="Drill Hall Vibe" src="/assets/cloned/images/c421cbf33a68.jpg" />
              </picture>
            </div>
            <div className="w-full h-full hidden absolute top-0 overflow-hidden max-md:w-[21.4375rem] max-md:block">
              <img className="w-[110%] block absolute top-[-5%] left-[-5%] overflow-clip object-cover align-middle max-md:w-[23.5625rem] max-md:h-63 max-md:-top-[1.3375rem] max-md:left-[-17.1px]" alt="" aria-hidden="true" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
            </div>
            <div className="h-full block absolute top-0 inset-x-0 z-2" style={{ backgroundImage: "linear-gradient(0deg, var(--clr-1) 0%, var(--clr-1) 100%)" }} />
            <div className="h-full flex absolute top-0 inset-x-0 z-3 py-22 px-9 justify-center max-md:py-16">
              <div className="flex max-w-119.5 flex-col justify-between items-center gap-4 text-center">
                <img className="w-[8.9375rem] h-20 block max-w-full max-h-[7.1875rem] overflow-clip aspect-[auto_143/80] align-middle text-clr-2" data-component="image" alt="B31 District Logo" height="80" src="/assets/cloned/svg/43be17a0424f.svg" width="143" />
                <div className="flex flex-wrap justify-center items-center gap-5 max-md:gap-4">
                  <a className="basis-full shrink-0 flex py-3 px-4 justify-center items-center gap-2 [font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] uppercase whitespace-nowrap text-nowrap bg-background [backdrop-filter:blur(12px)] cursor-pointer h-9 max-md:text-xs max-md:leading-[0.75rem] max-md:tracking-[0.12px] hover:bg-clr-5 transition-all duration-300 hover:scale-105 active:scale-95" data-component="button" href="/district">
                    <Icon5 />
                    Explore B31 District
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid max-w-181 mx-auto flex-col gap-12 grid-cols-1 max-md:flex max-md:gap-8 max-md:grid-cols-[repeat(1,_1fr)]">
          <div className="block [font-family:Denim,_serif] font-medium leading-[1.375rem] tracking-[0.16px] text-center max-md:text-sm max-md:leading-[1.25rem] max-md:tracking-[0.14px]">
            <p className="block">
              The District at Base31 is home to galleries, performances, and creative spaces that bring the neighbourhood to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

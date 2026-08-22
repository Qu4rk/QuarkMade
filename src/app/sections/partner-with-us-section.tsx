import Icon5 from "../svgs/svg-icon5";
/** Partner With Us section. */
export default function PartnerWithUsSection() {
  return (
    <section className="block bg-foreground">
      <div className="h-200 min-h-160 block relative z-1 max-h-224 overflow-hidden w-full max-md:h-[43.3625rem] max-lg:min-h-0 max-lg:max-h-none md:max-lg:h-240 2xl:h-270 2xl:min-h-240 2xl:max-h-336">
        <div className="h-full block absolute top-0 inset-x-0 overflow-hidden">
          <div className="h-300 block absolute -top-100 inset-x-0 transform-[matrix(1,0,0,1,0,-17.6406)] max-md:h-[65.0375rem] max-md:top-[-346.9px] md:max-lg:h-360 md:max-lg:-top-120 2xl:h-405 2xl:-top-135">
            <div className="h-full block absolute top-0 inset-x-0 overflow-hidden max-md:hidden">
              <picture className="inline">
                <source className="inline" sizes="(max-width: 3024px) 100vw, 3024px" srcSet="/assets/cloned/images/e6d33de22440.png 756w, /assets/cloned/images/cfc7c6bc6957.png 1512w, /assets/cloned/images/b996d8c968b2.png 2268w, /assets/cloned/images/92c8ab103f68.png 3024w" type="image/webp" />
                <source className="inline" sizes="(max-width: 3024px) 100vw, 3024px" srcSet="/assets/cloned/images/e6d33de22440.png 756w, /assets/cloned/images/cfc7c6bc6957.png 1512w, /assets/cloned/images/b996d8c968b2.png 2268w, /assets/cloned/images/92c8ab103f68.png 3024w" />
                <img className="w-320 h-300 block absolute overflow-clip object-cover align-middle md:max-lg:w-192 md:max-lg:h-360 2xl:w-480 2xl:h-405" data-component="image" alt="Background image" src="/assets/cloned/images/92c8ab103f68.png" />
              </picture>
            </div>
            <div className="w-full h-full hidden absolute top-0 overflow-hidden max-md:w-[23.4375rem] max-md:block">
              <img className="w-[110%] block absolute top-[-5%] left-[-5%] overflow-clip object-cover align-middle max-md:w-[25.8125rem] max-md:h-[17.1875rem] max-md:-top-[3.25rem] max-md:left-[-18.7px]" alt="" aria-hidden="true" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
            </div>
          </div>
        </div>
        <div className="h-full block absolute top-0 inset-x-0 z-3">
          <div className="flex py-16 px-6 flex-col justify-center items-center mx-auto max-w-screen h-full w-full max-md:py-10 max-md:px-4">
            <div className="w-full max-w-162 flex flex-col items-center gap-12 text-background text-center max-md:gap-10">
              <div className="block [font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] uppercase max-md:text-xs max-md:leading-[0.75rem] max-md:tracking-[0.12px]">
                Building together
              </div>
              <div className="block [font-family:'Ivar_Headline',_serif] text-[3.625rem] leading-[4.5625rem] tracking-[0.31px] max-md:text-4xl max-md:leading-[2.6875rem] max-md:tracking-[0.2px]" data-component="heading">
                <p className="block">
                  Partner with us to shape what's next
                </p>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-5 max-md:gap-4">
                <div className="block">
                  <a className="inline-flex py-3 px-4 justify-center items-center shrink-0 gap-2 text-foreground [font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] uppercase whitespace-nowrap text-nowrap bg-background [backdrop-filter:blur(12px)] cursor-pointer h-9 max-md:text-xs max-md:leading-[0.75rem] max-md:tracking-[0.12px] hover:bg-clr-5" data-component="button" href="/partnerships">
                    <Icon5 />
                    See partnership opportunities
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[8.2rem] flex absolute bottom-0 inset-x-0 pb-16 px-6 mx-auto max-w-screen max-md:h-[8.625rem] max-md:pb-10 max-md:px-4">
            <div className="block max-w-181 mx-auto text-background [font-family:Denim,_serif] font-medium leading-[1.375rem] tracking-[0.16px] text-center max-md:text-sm max-md:leading-[1.25rem] max-md:tracking-[0.14px]">
              <p className="h-full block">
                Base31 is shaped through collaboration with local businesses, artists, organizations, and institutions. These partnerships help ensure the site grows with intention, creating opportunities that reflect the character, values, and long-term needs of the County.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

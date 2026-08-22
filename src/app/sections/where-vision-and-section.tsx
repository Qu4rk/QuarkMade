import Icon5 from "../svgs/svg-icon5";

/** Where Vision And section with parallax background and reveal animations. */
export default function WhereVisionAndSection() {
  return (
    <section className="block bg-foreground overflow-hidden" id="full-width-test">
      <div className="h-200 min-h-160 block relative z-1 max-h-224 overflow-hidden w-full max-md:h-[43.3625rem] max-lg:min-h-0 max-lg:max-h-none md:max-lg:h-240 2xl:h-270 2xl:min-h-240 2xl:max-h-336">
        {/* Parallax Background Layer */}
        <div className="h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none">
          <div
            data-parallax
            data-parallax-speed="0.2"
            className="h-300 block absolute -top-50 inset-x-0 max-md:h-[65.0375rem] max-md:-top-32 md:max-lg:h-360 md:max-lg:-top-40 2xl:h-405 2xl:-top-60"
          >
            <div className="h-full block absolute top-0 inset-x-0 overflow-hidden max-md:hidden">
              <picture className="inline">
                <source className="inline" sizes="(max-width: 1362px) 100vw, 1362px" srcSet="/assets/cloned/images/9ed71f9cf06d.png 340w, /assets/cloned/images/c22181b85f80.png 681w, /assets/cloned/images/b1c54ae41d07.png 1021w, /assets/cloned/images/ee4e9bcc9a0b.png 1362w" type="image/webp" />
                <source className="inline" sizes="(max-width: 1362px) 100vw, 1362px" srcSet="/assets/cloned/images/9ed71f9cf06d.png 340w, /assets/cloned/images/c22181b85f80.png 681w, /assets/cloned/images/b1c54ae41d07.png 1021w, /assets/cloned/images/ee4e9bcc9a0b.png 1362w" />
                <img className="w-320 h-300 block absolute overflow-clip object-cover object-[59%_59%] align-middle md:max-lg:w-192 md:max-lg:h-360 2xl:w-480 2xl:h-405" data-component="image" alt="Two children running through the sensory garden of Base 31" src="/assets/cloned/images/ee4e9bcc9a0b.png" title="Base 31 Lifestyle Image" />
              </picture>
            </div>
            <div className="w-full h-full hidden absolute top-0 overflow-hidden max-md:w-[23.4375rem] max-md:block">
              <picture className="inline">
                <source className="inline" sizes="(max-width: 1362px) 100vw, 1362px" srcSet="/assets/cloned/images/9ed71f9cf06d.png 340w, /assets/cloned/images/c22181b85f80.png 681w, /assets/cloned/images/b1c54ae41d07.png 1021w, /assets/cloned/images/ee4e9bcc9a0b.png 1362w" type="image/webp" />
                <source className="inline" sizes="(max-width: 1362px) 100vw, 1362px" srcSet="/assets/cloned/images/9ed71f9cf06d.png 340w, /assets/cloned/images/c22181b85f80.png 681w, /assets/cloned/images/b1c54ae41d07.png 1021w, /assets/cloned/images/ee4e9bcc9a0b.png 1362w" />
                <img className="w-full h-full block absolute overflow-clip object-cover object-[59%_59%] align-middle max-md:w-[23.4375rem] max-md:h-[65.0625rem]" alt="Two children running through the sensory garden of Base 31" src="/assets/cloned/images/ee4e9bcc9a0b.png" title="Base 31 Lifestyle Image" />
              </picture>
            </div>
          </div>
        </div>

        <div className="h-full block absolute top-0 inset-x-0 z-2" style={{ backgroundImage: "linear-gradient(0deg, var(--clr-1) 0%, var(--clr-1) 100%)" }} />

        <div className="h-full block absolute top-0 inset-x-0 z-3">
          <div className="flex py-16 px-6 flex-col justify-center items-center mx-auto max-w-screen h-full w-full max-md:py-10 max-md:px-4">
            <div data-reveal className="w-full max-w-162 flex flex-col items-center gap-12 text-background text-center max-md:gap-10">
              <div className="block [font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] uppercase max-md:text-xs max-md:leading-[0.75rem] max-md:tracking-[0.12px]">
                Place, Community, and Culture
              </div>
              <div className="block [font-family:'Ivar_Headline',_serif] text-[3.625rem] leading-[4.5625rem] tracking-[0.31px] max-md:text-4xl max-md:leading-[2.6875rem] max-md:tracking-[0.2px]" data-component="heading">
                <p className="block">
                  {"Where "}
                  <em className="inline italic">
                    vision
                  </em>
                  {" and "}
                  <em className="inline italic">
                    v
                  </em>
                  <em className="inline italic">
                    alues
                  </em>
                  {" come together"}
                </p>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-5 max-md:gap-4">
                <div className="block">
                  <a className="btn-base btn-primary-inverse" data-component="button" href="/our-story">
                    <Icon5 />
                    What we're building together
                  </a>
                </div>
                <div className="block">
                  <a className="btn-base btn-secondary-inverse" data-component="button" href="/history">
                    <Icon5 />
                    History of The Base
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="h-16 flex absolute bottom-0 inset-x-0 pb-16 px-6 mx-auto max-w-screen max-md:h-10 max-md:pb-10 max-md:px-4" />
        </div>
      </div>
    </section>
  );
}

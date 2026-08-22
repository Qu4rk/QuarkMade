/** Hero section — the page's lead block. */
export default function HeroSection() {
  return (
    <section className="block bg-foreground">
      <div className="h-200 min-h-160 block relative z-1 max-h-224 overflow-hidden w-full max-md:h-[43.3625rem] max-lg:min-h-0 max-lg:max-h-none md:max-lg:h-240 2xl:h-270 2xl:min-h-240 2xl:max-h-336">
        <div className="h-full block absolute top-0 inset-x-0 max-md:hidden">
          <video className="w-full block absolute top-0 left-0 max-w-full overflow-clip object-cover align-middle pointer-events-none h-full" autoPlay loop playsInline poster="/assets/cloned/images/607c120ddf33.jpg" src="/assets/cloned/videos/cb57364355e8.mp4" />
        </div>
        <div className="h-full hidden absolute top-0 inset-x-0 max-md:w-[23.4375rem] max-md:block max-md:right-auto">
          <video className="w-full block absolute top-0 left-0 max-w-full overflow-clip object-cover align-middle pointer-events-none h-full" autoPlay loop playsInline poster="/assets/cloned/images/607c120ddf33.jpg" src="/assets/cloned/videos/cb57364355e8.mp4" />
        </div>
        <div className="h-full block absolute top-0 inset-x-0 z-3">
          <div className="flex py-16 px-6 flex-col justify-center items-center mx-auto max-w-screen h-full w-full max-md:py-10 max-md:px-4" />
          <div className="h-[6.6rem] flex absolute bottom-0 inset-x-0 pb-16 px-6 flex-col items-center gap-10 mx-auto max-w-screen max-md:h-[4.775rem] max-md:pb-10 max-md:px-4 max-md:gap-8">
            <div className="h-full block max-w-119.5 mx-auto text-background [font-family:'Ivar_Mono',_monospace] leading-[1.3125rem] text-center uppercase max-md:text-sm max-md:leading-[1.125rem]" data-component="heading">
              <p className="h-full block">
                <span className="inline" />
                A new chapter
                <br className="inline" />
                for a storied site
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

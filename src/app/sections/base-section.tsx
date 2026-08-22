import CardGridItem from "../components/card-grid-item";
import Icon6 from "../svgs/svg-icon6";
import Icon7 from "../svgs/svg-icon7";
import Icon5 from "../svgs/svg-icon5";
import { cards as cardsContent } from "../content";
/** Base section. */
export default function BaseSection({ cards = cardsContent } = {}) {
  return (
    <section className="block bg-background">
      <div className="flex py-16 px-6 flex-col gap-8 mx-auto w-full max-w-screen max-md:py-10 max-md:px-4 max-md:gap-6">
        <div className="grid pb-8 gap-y-16 gap-x-4 grid-cols-12 max-md:pb-6 max-md:gap-y-12 max-md:gap-x-3">
          <div className="block col-start-3 col-end-[span_8] [font-family:Denim,_serif] text-[3.625rem] font-semibold leading-[4rem] tracking-[0.31px] text-center max-md:col-span-full max-md:text-4xl max-md:leading-[2.5rem]" data-component="heading">
            <p className="h-full block">
              <span className="inline" />
              ON
              <br className="inline" />
              BASE
            </p>
          </div>
          <div className="block col-start-4 col-end-[span_6] [font-family:'Ivar_Mono',_monospace] leading-[1.3125rem] text-center uppercase max-md:col-span-full max-md:text-sm max-md:leading-[1.125rem]">
            <p className="block">
              Stories, updates, and milestones
            </p>
          </div>
        </div>
        <div className="block relative w-full">
          <div className="block overflow-hidden">
            <div className="flex -ml-4 max-md:-ml-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {cards.map((d) => <CardGridItem key={d.variant} d={d} />)}
            </div>
          </div>
          <div className="flex relative my-8 justify-center items-center max-md:my-6">
            <button className="block relative rounded-full overflow-hidden text-center bg-accent [backdrop-filter:blur(12px)] cursor-pointer h-0.5 w-full hover:opacity-80" data-component="button" aria-valuemax="4" aria-valuemin="0" aria-valuenow="0" role="progressbar">
              <span className="block absolute top-0 right-176 left-0 bg-foreground h-full max-md:right-73.5 md:max-lg:right-[514.3px] 2xl:right-[886.9px]" />
            </button>
          </div>
          <div className="flex justify-center items-center gap-5 mx-auto">
            <button className="flex left-6 rounded-full justify-center items-center shrink-0 gap-2 [font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] text-center uppercase whitespace-nowrap text-nowrap [backdrop-filter:blur(12px)] cursor-pointer h-12 w-12 max-md:hidden hover:bg-accent" data-component="button" aria-label="Previous slide">
              <Icon6 />
            </button>
            <button className="flex right-6 rounded-full justify-center items-center shrink-0 gap-2 [font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] text-center uppercase whitespace-nowrap text-nowrap [backdrop-filter:blur(12px)] cursor-pointer h-12 w-12 max-md:hidden hover:bg-accent" data-component="button" aria-label="Next slide">
              <Icon7 />
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <a className="flex py-3 px-4 justify-center items-center shrink-0 gap-2 text-background [font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] uppercase whitespace-nowrap text-nowrap bg-foreground [backdrop-filter:blur(12px)] cursor-pointer h-9 max-md:text-xs max-md:leading-[0.75rem] max-md:tracking-[0.12px] hover:bg-clr-7" data-component="button" href="/on-base-blog">
            <Icon5 />
            View All
          </a>
        </div>
      </div>
    </section>
  );
}

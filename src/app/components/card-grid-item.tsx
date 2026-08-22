export type CardGridItemData = {
  variant: string;
  title: string;
  description: string;
};
/** card grid item component. */
export default function CardGridItem({ d }: { d: CardGridItemData }) {
  switch (d.variant) {
    case "base31-expands-its-public-art-program-with":
      return (
        <div className="w-[26rem] block min-w-0 pl-4 shrink-0 basis-1/3 max-md:w-[18.4875rem] max-md:pl-3 max-md:basis-5/6 md:max-lg:w-[20.4375rem] md:max-lg:basis-[44.44%] 2xl:w-[522.7px]">
          <a className="group flex pb-8 flex-col gap-7 cursor-pointer max-md:pb-6 max-md:gap-5" data-component="link" href="/on-base-blog/base31-expands-its-public-art-program">
            <div className="block relative rounded-lg overflow-hidden aspect-[3/2] h-auto w-full max-md:rounded-md max-md:aspect-[4/3]">
              <div className="h-full block absolute top-0 inset-x-0 overflow-hidden max-md:hidden">
                <picture className="inline">
                  <source className="inline" sizes="(min-width: 1280px) 34vw, (min-width: 768px) 45vw, 85vw" srcSet="/assets/cloned/images/c094d4544e39.png 480w, /assets/cloned/images/ed9cfdfcea0c.png 960w, /assets/cloned/images/1e16266f6343.png 1440w, /assets/cloned/images/be381162fee4.png 1920w" type="image/webp" />
                  <source className="inline" sizes="(min-width: 1280px) 34vw, (min-width: 768px) 45vw, 85vw" srcSet="/assets/cloned/images/c094d4544e39.png 480w, /assets/cloned/images/ed9cfdfcea0c.png 960w, /assets/cloned/images/1e16266f6343.png 1440w, /assets/cloned/images/be381162fee4.png 1920w" />
                  <img className="w-100 h-[16.6875rem] block absolute overflow-clip object-cover align-middle md:max-lg:w-[19.4375rem] md:max-lg:h-[12.9375rem] 2xl:w-[31.6875rem] 2xl:h-84.5 transition-transform duration-500 group-hover:scale-105" data-component="image" alt="Art Walk" src="/assets/cloned/images/be381162fee4.png" />
                </picture>
              </div>
              <div className="w-full h-full hidden absolute top-0 overflow-hidden max-md:w-[17.7375rem] max-md:block">
                <img className="w-[110%] block absolute top-[-5%] left-[-5%] overflow-clip object-cover align-middle max-md:w-78 max-md:h-45.5 max-md:-top-[0.6625rem] max-md:-left-3.5" alt="" aria-hidden="true" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
              </div>
            </div>
            <div className="flex pr-12 flex-col gap-4 max-md:pr-6 max-md:gap-3">
              <h3 className="block [font-family:'Ivar_Headline',_serif] text-[1.625rem] leading-[2.125rem] tracking-[0.13px] max-md:text-2xl max-md:leading-[1.9375rem] max-md:tracking-[0.12px]" data-component="heading">
                {d.title}
              </h3>
              <div className="overflow-hidden [font-family:Denim,_serif] font-medium leading-[1.375rem] tracking-[0.16px] line-clamp-3 max-md:text-sm max-md:leading-[1.25rem] max-md:tracking-[0.14px]">
                <div className="block">
                  <p className="block">
                    {d.description}
                  </p>
                  {" "}
                </div>
              </div>
              <div className="block col-start-4 col-end-[span_6] max-md:col-span-full">
                <div className="flex pt-3 items-center gap-2 max-md:pt-2">
                  <p className="border border-solid border-foreground block p-2 [font-family:'Saans_Mono',_monospace] text-xs font-medium leading-3 tracking-[0.12px] uppercase max-md:text-[0.6875rem] max-md:leading-[0.6875rem] max-md:tracking-[0.11px]">
                    Latest
                  </p>
                  <p className="border border-solid border-foreground block p-2 [font-family:'Saans_Mono',_monospace] text-xs font-medium leading-3 tracking-[0.12px] uppercase max-md:text-[0.6875rem] max-md:leading-[0.6875rem] max-md:tracking-[0.11px]">
                    {"Arts & Culture"}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      );
    case "understanding-the-base31-community-associa":
      return (
        <div className="w-[26rem] block min-w-0 pl-4 shrink-0 basis-1/3 max-md:w-[18.4875rem] max-md:pl-3 max-md:basis-5/6 md:max-lg:w-[20.4375rem] md:max-lg:basis-[44.44%] 2xl:w-[522.7px]">
          <a className="group flex pb-8 flex-col gap-7 cursor-pointer max-md:pb-6 max-md:gap-5" data-component="link" href="/on-base-blog/understanding-the-base31-community-association">
            <div className="block relative rounded-lg overflow-hidden aspect-[3/2] h-auto w-full max-md:rounded-md max-md:aspect-[4/3]">
              <div className="h-full block absolute top-0 inset-x-0 overflow-hidden max-md:hidden">
                <picture className="inline">
                  <source className="inline" sizes="(min-width: 1280px) 34vw, (min-width: 768px) 45vw, 85vw" srcSet="/assets/cloned/images/18b21d92b6a8.jpg 800w, /assets/cloned/images/a1630e0768e8.jpg 1600w, /assets/cloned/images/768a52db32da.jpg 2400w, /assets/cloned/images/bc720b350a2b.jpg 3200w, /assets/cloned/images/14c5592a0e37.jpg 4800w, /assets/cloned/images/e0f405255ade.jpg 6400w" type="image/webp" />
                  <source className="inline" sizes="(min-width: 1280px) 34vw, (min-width: 768px) 45vw, 85vw" srcSet="/assets/cloned/images/18b21d92b6a8.jpg 800w, /assets/cloned/images/a1630e0768e8.jpg 1600w, /assets/cloned/images/768a52db32da.jpg 2400w, /assets/cloned/images/bc720b350a2b.jpg 3200w, /assets/cloned/images/14c5592a0e37.jpg 4800w, /assets/cloned/images/e0f405255ade.jpg 6400w" />
                  <img className="w-100 h-[16.6875rem] block absolute overflow-clip object-cover align-middle md:max-lg:w-[19.4375rem] md:max-lg:h-[12.9375rem] 2xl:w-[31.6875rem] 2xl:h-84.5 transition-transform duration-500 group-hover:scale-105" data-component="image" alt="Drone Shot Of Site" src="/assets/cloned/images/bc720b350a2b.jpg" />
                </picture>
              </div>
              <div className="w-full h-full hidden absolute top-0 overflow-hidden max-md:w-[17.7375rem] max-md:block">
                <img className="w-[110%] block absolute top-[-5%] left-[-5%] overflow-clip object-cover align-middle max-md:w-78 max-md:h-[12.1875rem] max-md:-top-[0.6625rem] max-md:-left-3.5" alt="" aria-hidden="true" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
              </div>
            </div>
            <div className="flex pr-12 flex-col gap-4 max-md:pr-6 max-md:gap-3">
              <h3 className="block [font-family:'Ivar_Headline',_serif] text-[1.625rem] leading-[2.125rem] tracking-[0.13px] max-md:text-2xl max-md:leading-[1.9375rem] max-md:tracking-[0.12px]" data-component="heading">
                {" Understanding the Base31 Community Association"}
              </h3>
              <div className="overflow-hidden [font-family:Denim,_serif] font-medium leading-[1.375rem] tracking-[0.16px] line-clamp-3 max-md:text-sm max-md:leading-[1.25rem] max-md:tracking-[0.14px]">
                <div className="block">
                  <p className="block">
                    {d.description}
                  </p>
                  {" "}
                </div>
              </div>
              <div className="block col-start-4 col-end-[span_6] max-md:col-span-full">
                <div className="flex pt-3 items-center gap-2 max-md:pt-2">
                  <p className="border border-solid border-foreground block p-2 [font-family:'Saans_Mono',_monospace] text-xs font-medium leading-3 tracking-[0.12px] uppercase max-md:text-[0.6875rem] max-md:leading-[0.6875rem] max-md:tracking-[0.11px]">
                    {"Sustainability & Future Living"}
                  </p>
                  <p className="border border-solid border-foreground block p-2 [font-family:'Saans_Mono',_monospace] text-xs font-medium leading-3 tracking-[0.12px] uppercase max-md:text-[0.6875rem] max-md:leading-[0.6875rem] max-md:tracking-[0.11px]">
                    Latest
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      );
    case "five-years-in-base31-builds-on-momentum-un":
      return (
        <div className="w-[26rem] block min-w-0 pl-4 shrink-0 basis-1/3 max-md:w-[18.4875rem] max-md:pl-3 max-md:basis-5/6 md:max-lg:w-[20.4375rem] md:max-lg:basis-[44.44%] 2xl:w-[522.7px]">
          <a className="group flex pb-8 flex-col gap-7 cursor-pointer max-md:pb-6 max-md:gap-5" data-component="link" href="/on-base-blog/five-years-in">
            <div className="block relative rounded-lg overflow-hidden aspect-[3/2] h-auto w-full max-md:rounded-md max-md:aspect-[4/3]">
              <div className="h-full block absolute top-0 inset-x-0 overflow-hidden max-md:hidden">
                <picture className="inline">
                  <source className="inline" sizes="(min-width: 1280px) 34vw, (min-width: 768px) 45vw, 85vw" srcSet="/assets/cloned/images/0beda5f8a159.png 480w, /assets/cloned/images/6198be0e75cc.png 960w, /assets/cloned/images/80c70699b048.png 1440w, /assets/cloned/images/65f1a9b71dab.png 1920w" type="image/webp" />
                  <source className="inline" sizes="(min-width: 1280px) 34vw, (min-width: 768px) 45vw, 85vw" srcSet="/assets/cloned/images/0beda5f8a159.png 480w, /assets/cloned/images/6198be0e75cc.png 960w, /assets/cloned/images/80c70699b048.png 1440w, /assets/cloned/images/65f1a9b71dab.png 1920w" />
                  <img className="w-100 h-[16.6875rem] block absolute overflow-clip object-cover align-middle md:max-lg:w-[19.4375rem] md:max-lg:h-[12.9375rem] 2xl:w-[31.6875rem] 2xl:h-84.5 transition-transform duration-500 group-hover:scale-105" data-component="image" alt="Explaniner video" src="/assets/cloned/images/65f1a9b71dab.png" />
                </picture>
              </div>
            </div>
            <div className="flex pr-12 flex-col gap-4 max-md:pr-6 max-md:gap-3">
              <h3 className="block [font-family:'Ivar_Headline',_serif] text-[1.625rem] leading-[2.125rem] tracking-[0.13px] max-md:text-2xl max-md:leading-[1.9375rem] max-md:tracking-[0.12px]" data-component="heading">
                {d.title}
              </h3>
              <div className="overflow-hidden [font-family:Denim,_serif] font-medium leading-[1.375rem] tracking-[0.16px] line-clamp-3 max-md:text-sm max-md:leading-[1.25rem] max-md:tracking-[0.14px]">
                <p className="block">
                  {"The historic Prince Edward Country destination expands community-focused plans, highlighting Base Living housing initiatives and expanding B31 District as a County cultural hub "}
                </p>
              </div>
              <div className="block col-start-4 col-end-[span_6] max-md:col-span-full">
                <div className="flex pt-3 items-center gap-2 max-md:pt-2">
                  <p className="border border-solid border-foreground block p-2 [font-family:'Saans_Mono',_monospace] text-xs font-medium leading-3 tracking-[0.12px] uppercase max-md:text-[0.6875rem] max-md:leading-[0.6875rem] max-md:tracking-[0.11px]">
                    {"Sustainability & Future Living"}
                  </p>
                  <p className="border border-solid border-foreground block p-2 [font-family:'Saans_Mono',_monospace] text-xs font-medium leading-3 tracking-[0.12px] uppercase max-md:text-[0.6875rem] max-md:leading-[0.6875rem] max-md:tracking-[0.11px]">
                    Latest
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      );
    case "continuing-the-evolution-of-base31":
      return (
        <div className="w-[26rem] block min-w-0 pl-4 shrink-0 basis-1/3 max-md:w-[18.4875rem] max-md:pl-3 max-md:basis-5/6 md:max-lg:w-[20.4375rem] md:max-lg:basis-[44.44%] 2xl:w-[522.7px]">
          <a className="group flex pb-8 flex-col gap-7 cursor-pointer max-md:pb-6 max-md:gap-5" data-component="link" href="/on-base-blog/continuing-the-evolution-of-base31">
            <div className="block relative rounded-lg overflow-hidden aspect-[3/2] h-auto w-full max-md:rounded-md max-md:aspect-[4/3]">
              <div className="h-full block absolute top-0 inset-x-0 overflow-hidden max-md:hidden">
                <img className="w-110 h-[11.4375rem] block absolute top-[-13.3px] -left-5 overflow-clip object-cover align-middle 2xl:w-[34.8125rem] 2xl:h-58 2xl:top-[-16.9px] 2xl:left-[-25.3px]" data-component="image" alt="" aria-hidden="true" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
              </div>
            </div>
            <div className="flex pr-12 flex-col gap-4 max-md:pr-6 max-md:gap-3">
              <h3 className="block [font-family:'Ivar_Headline',_serif] text-[1.625rem] leading-[2.125rem] tracking-[0.13px] max-md:text-2xl max-md:leading-[1.9375rem] max-md:tracking-[0.12px]" data-component="heading">
                {d.title}
              </h3>
              <div className="overflow-hidden [font-family:Denim,_serif] font-medium leading-[1.375rem] tracking-[0.16px] line-clamp-3 max-md:text-sm max-md:leading-[1.25rem] max-md:tracking-[0.14px]">
                <div className="block">
                  <p className="block">
                    {d.description}
                  </p>
                  {" "}
                </div>
              </div>
              <div className="block col-start-4 col-end-[span_6] max-md:col-span-full">
                <div className="flex pt-3 items-center gap-2 max-md:pt-2">
                  <p className="border border-solid border-foreground block p-2 [font-family:'Saans_Mono',_monospace] text-xs font-medium leading-3 tracking-[0.12px] uppercase max-md:text-[0.6875rem] max-md:leading-[0.6875rem] max-md:tracking-[0.11px]">
                    {"Sustainability & Future Living"}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      );
    default:
      return null;
  }
}

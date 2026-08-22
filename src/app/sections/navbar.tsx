import NavLink from "../components/nav-link";
import Tile from "../components/tile";
import Icon from "../svgs/svg-icon";
import Icon2 from "../svgs/svg-icon2";
import Illustration from "../svgs/svg-illustration";
import Icon3 from "../svgs/svg-icon3";
import Icon4 from "../svgs/svg-icon4";
import { NavLink_styles, Tile_styles } from "../_styles";
import { navLinkData as navLinkDataContent, tileData as tileDataContent } from "../content";
/** Top navigation bar. */
export default function Navbar({ navLinkData = navLinkDataContent, tileData = tileDataContent } = {}) {
  return (
    <header className="h-47 block fixed inset-x-0 z-20 text-background max-md:h-[9.925rem] md:max-lg:h-40" id="header">
      <div className="block overflow-hidden">
        <div className="h-19 block sticky top-0 z-20 max-md:h-[4.675rem]">
          <div className="flex pt-5 pb-3 px-6 justify-between mx-auto w-full max-w-screen max-md:p-4">
            <nav className="w-[18.95rem] flex relative p-1 rounded-xs justify-stretch items-center gap-1 bg-surface [backdrop-filter:blur(12px)] max-md:w-[21.4375rem]" data-component="nav">
              <div className="w-[4.4375rem] h-9 block absolute top-1 min-w-0 rounded-xs bg-background pointer-events-none max-md:w-[6.8125rem] max-md:h-[2.175rem]" />
              {navLinkData.map((d, i) => <NavLink key={i} d={d} styles={NavLink_styles[i]} />)}
            </nav>
            <div className="flex pr-3 items-center gap-7 [font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] text-right uppercase whitespace-nowrap text-nowrap max-md:hidden">
              {tileData.map((d, i) => <Tile key={i} d={d} styles={Tile_styles[i]} />)}
            </div>
          </div>
        </div>
      </div>
      <div className="flex relative pt-5 px-6 justify-between mx-auto w-full max-w-screen max-lg:py-3 max-md:px-4">
        <div className="hidden absolute top-0 inset-x-0 opacity-0 isolate min-w-0 flex-col bg-background pointer-events-none h-screen" aria-label="Search" id="mobile-search-overlay" role="search">
          <div className="block absolute inset-x-0 z-10 bg-background pointer-events-none h-24 max-lg:min-w-0" />
          <div className="flex pt-24 pb-10 px-4 flex-col flex-1 gap-10 overflow-auto pointer-events-none">
            <div className="border-b border-solid border-b-clr-0 flex min-w-0 py-3 px-1 items-center gap-3 pointer-events-none h-12">
              <input className="w-full h-full block min-w-0 flex-1 overflow-clip text-foreground [font-family:Denim,_serif] font-medium leading-[1.375rem] tracking-[0.16px] cursor-text pointer-events-none max-lg:h-[1.4375rem] max-md:text-sm max-md:leading-[1.25rem] max-md:tracking-[0.14px]" data-ditto-id="style-input" placeholder="Search" type="text" value="" />
            </div>
          </div>
        </div>
        <div className="block basis-2/5 max-lg:hidden">
          <div className="w-[210.5px] flex items-start gap-3 h-full">
            <button className="flex py-2 px-3 justify-center items-center shrink-0 gap-2 [font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] text-center uppercase whitespace-nowrap text-nowrap cursor-pointer h-8 hover:bg-surface focus:bg-clr-8" data-component="button" aria-controls="megamenu-beNBPFVPT9iW5r6WeQMvcA" aria-expanded="false" aria-haspopup="true">
              About
              <Icon dittoId={"motion-1"} />
            </button>
            <a className="flex py-2 px-3 justify-center items-center shrink-0 gap-2 [font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] uppercase whitespace-nowrap text-nowrap cursor-pointer h-8 hover:bg-surface" data-component="link" href="/on-base-blog" target="_self">
              On Base Blog
            </a>
          </div>
        </div>
        <div className="hidden min-w-0 items-center basis-1/5 max-lg:flex">
          <button className="hidden z-10 flex-col justify-center items-center gap-[0.3125rem] text-center cursor-pointer h-8 w-8 max-lg:flex" aria-expanded="false" aria-label="Open menu">
            <Icon2 />
          </button>
          <div className="hidden absolute top-0 inset-x-0 flex-col bg-background [translate:-100%] h-screen">
            <div className="flex relative flex-col flex-1 overflow-hidden max-md:h-203 md:max-lg:h-256">
              <nav className="h-full flex absolute top-0 inset-x-0 min-w-0 py-24 px-4 flex-col flex-1 gap-2 overflow-auto bg-background [translate:100%] max-md:w-[23.4375rem] max-lg:right-auto md:max-lg:w-192" />
            </div>
          </div>
        </div>
        <a className="flex pb-5 justify-center items-center basis-1/5 cursor-pointer w-full max-lg:basis-3/5 max-lg:pb-0" data-component="link" href="/">
          <div className="h-full block">
            <Illustration />
          </div>
        </a>
        <div className="hidden min-w-0 justify-end items-center basis-1/5 max-lg:flex">
          <button className="flex z-10 justify-center items-center text-center cursor-pointer h-8 w-8" aria-controls="mobile-search-overlay" aria-expanded="false" aria-label="Search" type="button">
            <Icon3 />
          </button>
        </div>
        <div className="flex justify-end items-start basis-2/5 gap-2 max-lg:hidden" data-ditto-id="motion-div">
          <button className="flex py-2 px-3 justify-center items-center shrink-0 gap-2 [font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] text-center uppercase whitespace-nowrap text-nowrap cursor-pointer h-8 hover:bg-surface" data-component="button" aria-controls="header-search-panel" aria-expanded="false" type="button">
            Search
          </button>
          <a className="flex py-2 px-3 justify-center items-center shrink-0 gap-2 [font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] uppercase whitespace-nowrap text-nowrap cursor-pointer h-8 hover:bg-surface" data-component="link" href="/contact-us?inquiry=general" target="_self">
            Contact us
          </a>
        </div>
        <div className="h-30 block absolute top-28 left-160 opacity-0 min-w-0 overflow-auto bg-background [translate:-50%] pointer-events-none max-h-[calc(95vh-120px)] w-screen max-lg:hidden" aria-label="Search" id="header-search-panel" role="search">
          <div className="flex pt-6 pb-12 px-6 flex-col gap-12 pointer-events-none">
            <div className="flex items-center gap-6 pointer-events-none">
              <div className="border-b border-solid border-b-clr-0 flex py-3 px-1 items-center flex-1 gap-3 pointer-events-none h-12">
                <input className="w-full h-[1.4375rem] block min-w-0 flex-1 overflow-clip text-foreground [font-family:Denim,_serif] font-medium leading-[1.375rem] tracking-[0.16px] cursor-text pointer-events-none" data-ditto-id="style-input-2" data-component="input" placeholder="Search" type="text" value="" />
              </div>
              <button className="flex rounded-full justify-center items-center shrink-0 gap-2 text-foreground [font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] text-center uppercase whitespace-nowrap text-nowrap cursor-pointer pointer-events-none h-9 w-9 hover:bg-accent" data-ditto-id="motion-close" data-component="button" aria-label="Close" type="button">
                <Icon4 />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

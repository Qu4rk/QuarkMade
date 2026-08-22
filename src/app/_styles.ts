// Per-instance class overrides, merged onto each component's shared base classes with cn().

export type NavLinkStyles = {
  className: string;
};
export type TileStyles = {
  className: string;
};
export type NavLink2Styles = {
  className: string;
};
export type Logo2Styles = {
  className: string;
  className2: string;
};

export const NavLink_styles: NavLinkStyles[] = [
    { className: "text-foreground [font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-medium leading-[1.25rem] max-md:text-xs max-md:leading-[1.0625rem]" },
    { className: "[font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-medium leading-[1.25rem] max-md:text-xs max-md:leading-[1.0625rem]" },
    { className: "[font-family:'FT_Polar',_serif] text-sm leading-5 max-md:text-[0.8125rem] max-md:leading-[1.1875rem]" }
];
export const Tile_styles: TileStyles[] = [
    { className: "w-[37.3px]" },
    { className: "w-[5.3875rem]" },
    { className: "w-[55.5px]" }
];
export const NavLink2_styles: NavLink2Styles[] = [
    { className: "text-foreground [font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] uppercase max-md:text-xs max-md:leading-[0.75rem] max-md:tracking-[0.12px]" },
    { className: "[font-family:'Saans_Mono',_monospace] text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] uppercase max-md:text-xs max-md:leading-[0.75rem] max-md:tracking-[0.12px]" },
    { className: "[font-family:'FT_Polar',_serif] text-sm leading-3.5 tracking-[0.14px] capitalize max-md:text-[0.8125rem] max-md:leading-[0.8125rem] max-md:tracking-[0.13px]" }
];
export const Logo2_styles: Logo2Styles[] = [
    { className: "h-[4.0625rem]", className2: "w-[6.8125rem] h-[4.0625rem]" },
    { className: "h-[4.0625rem]", className2: "w-[7.1875rem] h-[4.0625rem] opacity-20" },
    { className: "h-7", className2: "w-[7.1875rem] h-7 opacity-20" }
];

import type { ReactNode } from "react";
export type LogoData = {
  href: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo({ d }: { d: LogoData }) {
  return (
    <a className="flex rounded-full justify-center items-center shrink-0 gap-2 [font-family:'Satoshi',_sans-serif] font-normal text-[0.8125rem] font-medium leading-[0.8125rem] tracking-[0.13px] uppercase whitespace-nowrap text-nowrap bg-surface [backdrop-filter:blur(12px)] cursor-pointer h-12 w-12 max-md:text-xs max-md:leading-[0.75rem] max-md:tracking-[0.12px] hover:bg-clr-6" data-component="link" href={d.href} rel="noopener noreferrer" target="_blank">
      <svg className="block shrink-0 overflow-hidden align-middle pointer-events-none w-6 h-6 focus:outline-clr-9 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">{d.icon}</svg>
    </a>
  );
}

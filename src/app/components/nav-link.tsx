import type { NavLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type NavLinkData = {
  label: string;
};
/** A navigation link. */
export default function NavLink({ d, styles }: { d: NavLinkData; styles: NavLinkStyles }) {
  return (
    <button className={cn("block relative z-10 py-2 px-3 rounded-xs tracking-[0.13px] text-center cursor-pointer w-auto max-md:w-full", styles.className)} data-component="button" type="button">
      {d.label}
    </button>
  );
}

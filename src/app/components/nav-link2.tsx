import type { NavLink2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type NavLink2Data = {
  label: string;
};
/** A navigation link. */
export default function NavLink2({ d, styles }: { d: NavLink2Data; styles: NavLink2Styles }) {
  return (
    <button className={cn("flex relative z-10 py-2 px-3 rounded-xs justify-center flex-1 text-center cursor-pointer max-md:px-2", styles.className)} data-component="button" type="button">
      {d.label}
    </button>
  );
}

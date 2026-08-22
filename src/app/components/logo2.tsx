import type { ReactNode } from "react";
import type { Logo2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo2Data = {
  height: string;
  viewBox: string;
  width: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo2({ d, styles }: { d: Logo2Data; styles: Logo2Styles }) {
  return (
    <div className="flex justify-center items-center">
      <button className={cn("block text-center cursor-pointer", styles.className)} data-component="button" type="button">
        <svg className={cn("block max-w-[7.1875rem] overflow-hidden align-middle max-md:w-20 max-md:max-w-20 focus:outline-clr-9 focus:[outline-style:auto] focus:outline-[5px]", styles.className2)} data-component="image" fill="none" height={d.height} viewBox={d.viewBox} width={d.width} xmlns="http://www.w3.org/2000/svg">{d.icon}</svg>
      </button>
    </div>
  );
}

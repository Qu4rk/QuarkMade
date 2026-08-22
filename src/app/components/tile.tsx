import type { TileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TileData = {
  description: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className={cn("flex flex-col justify-center shrink-0", styles.className)}>
      <p className="block">
        {d.description}
      </p>
    </div>
  );
}

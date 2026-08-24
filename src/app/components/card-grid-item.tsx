import React from "react";
import { assetPath } from "../../lib/site";

export type CardGridItemData = {
  variant: string;
  title: string;
  summary: string;
  tags?: string[];
  image: string;
  link: string;
};

/** Card grid item component for QuarkMade Studio Journal & Selected Works. */
export default function CardGridItem({ d }: { d: CardGridItemData }) {
  return (
    <div className="w-[26rem] block min-w-0 pl-4 shrink-0 basis-1/3 max-md:w-[18.5rem] max-md:pl-3 max-md:basis-5/6 md:max-lg:w-[20.5rem] md:max-lg:basis-[45%] 2xl:w-[32.5rem]">
      <a
        className="group flex pb-8 flex-col gap-6 cursor-pointer max-md:pb-6 max-md:gap-4"
        data-component="link"
        href={d.link}
        target={d.link.startsWith("http") ? "_blank" : "_self"}
        rel={d.link.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {/* Card Image Thumbnail */}
        <div className="block relative rounded-lg overflow-hidden aspect-[3/2] h-auto w-full border border-foreground/10 shadow-md transition-shadow duration-300 group-hover:shadow-xl">
          <div className="h-full w-full block absolute top-0 inset-x-0 overflow-hidden">
            <img
              className="w-full h-full block absolute inset-0 object-cover align-middle transition-transform duration-700 ease-out group-hover:scale-105"
              alt={d.title}
              src={assetPath(d.image)}
            />
          </div>
        </div>

        {/* Card Content & Tags */}
        <div className="flex pr-8 flex-col gap-3 max-md:pr-4">
          <h3
            className="block [font-family:'Satoshi',_sans-serif] font-normal text-xl md:text-2xl leading-snug tracking-tight text-foreground group-hover:text-[#4442DB] transition-colors"
            data-component="heading"
          >
            {d.title}
          </h3>

          <p className="[font-family:'Satoshi',_sans-serif] font-normal text-foreground/75 text-sm md:text-base leading-relaxed line-clamp-3">
            {d.summary}
          </p>

          {/* Tags */}
          {d.tags && d.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {d.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 [font-family:'Satoshi',_sans-serif] font-normal text-[10px] md:text-[11px] tracking-[0.1em] uppercase rounded-none border border-foreground/20 text-foreground/80 group-hover:border-[#4442DB]/40 group-hover:text-[#4442DB] transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </a>
    </div>
  );
}

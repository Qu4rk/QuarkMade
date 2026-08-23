import { NoiseBackground } from "./ui/noise-background";

interface ProjectBadgeProps {
  label: string;
}

export default function ProjectBadge({ label }: ProjectBadgeProps) {
  return (
    <div data-reveal className="flex justify-center w-full px-2">
      <NoiseBackground
        containerClassName="w-fit max-w-full p-[2px] rounded-full mx-auto bg-[#0B0A12] border border-[#D4AF37]/35 shadow-[0px_0px_25px_rgba(68,66,219,0.35)]"
        gradientColors={[
          "rgb(68, 66, 219)", // Electric Purple
          "rgb(212, 175, 55)", // Imperial Gold
          "rgb(165, 148, 249)", // Soft Lavender
        ]}
        noiseIntensity={0.3}
        speed={0.12}
      >
        <div className="h-full w-full select-none rounded-full bg-gradient-to-r from-[#0B0A12] via-[#12111A] to-[#0B0A12] px-5 py-2 text-white shadow-[0px_1px_0px_0px_rgba(255,255,255,0.15)_inset,0px_2px_4px_0px_rgba(0,0,0,0.8)] [font-family:'Satoshi',_sans-serif] font-normal text-[0.8125rem] font-medium leading-none tracking-[0.18em] uppercase flex items-center justify-center gap-2.5 max-md:text-[0.7rem] max-md:px-3.5 max-md:py-1.5 text-center">
          <span className="text-[#D4AF37] font-semibold text-sm leading-none shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
            →
          </span>
          <span className="text-white/95">{label}</span>
        </div>
      </NoiseBackground>
    </div>
  );
}

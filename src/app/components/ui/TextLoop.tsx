"use client";

import React, {
  CSSProperties,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";
import "./TextLoop.css";

const VIEW_W = 1200;
const VIEW_H = 520;
const CX = VIEW_W / 2;
const CY = VIEW_H / 2;
const EDGE_PAD = 6;

const buildPath = (shape: string, curviness: number, ribbonWidth: number) => {
  const c = Math.max(0, curviness);
  const room = Math.max(20, CY - Math.max(0, ribbonWidth) / 2 - EDGE_PAD);

  switch (shape) {
    case "circle": {
      const r = Math.min(90 + c * 0.95, room);
      return `M ${CX - r} ${CY} A ${r} ${r} 0 1 1 ${CX + r} ${CY} A ${r} ${r} 0 1 1 ${CX - r} ${CY} Z`;
    }
    case "infinity": {
      const r = 150 + c * 1.4;
      const h = Math.min(60 + c * 0.95, room);
      return [
        `M ${CX} ${CY}`,
        `C ${CX + r * 0.55} ${CY - h} ${CX + r} ${CY - h} ${CX + r} ${CY}`,
        `C ${CX + r} ${CY + h} ${CX + r * 0.55} ${CY + h} ${CX} ${CY}`,
        `C ${CX - r * 0.55} ${CY - h} ${CX - r} ${CY - h} ${CX - r} ${CY}`,
        `C ${CX - r} ${CY + h} ${CX - r * 0.55} ${CY + h} ${CX} ${CY}`,
        "Z",
      ].join(" ");
    }
    case "arch": {
      const rise = Math.min(120 + c * 1.1, room * 2);
      return `M 120 ${CY + rise / 2} Q ${CX} ${CY - rise * 1.5} ${VIEW_W - 120} ${CY + rise / 2}`;
    }
    case "line":
      return `M -320 ${CY} L ${VIEW_W + 320} ${CY}`;
    case "wave":
    default: {
      const a = Math.min(c * 2.2, room * 2);
      return `M -320 ${CY} Q -160 ${CY - a} 0 ${CY} T 320 ${CY} T 640 ${CY} T 960 ${CY} T 1280 ${CY} T ${VIEW_W + 320} ${CY}`;
    }
  }
};

export interface TextLoopProps {
  text?: string;
  shape?: "wave" | "circle" | "infinity" | "arch" | "line";
  path?: string;
  viewBox?: string;
  speed?: number;
  direction?: "forward" | "reverse";
  separator?: string;
  curviness?: number;
  fontSize?: number;
  fontWeight?: number;
  letterSpacing?: number;
  uppercase?: boolean;
  color?: string;
  ribbon?: boolean;
  ribbonColor?: string;
  ribbonWidth?: number;
  ribbonBorder?: boolean;
  ribbonBorderColor?: string;
  pauseOnHover?: boolean;
  className?: string;
  style?: CSSProperties;
}

export default function TextLoop({
  text = "HIGH-CRAFT DIGITAL ARCHITECTURE",
  shape = "wave",
  path,
  viewBox,
  speed = 90,
  direction = "forward",
  separator = "·",
  curviness = 90,
  fontSize = 46,
  fontWeight = 800,
  letterSpacing = 2,
  uppercase = true,
  color = "#ffffff",
  ribbon = true,
  ribbonColor = "#5227FF",
  ribbonWidth = 86,
  ribbonBorder = false,
  ribbonBorderColor = "rgba(255, 255, 255, 0.22)",
  pauseOnHover = true,
  className = "",
  style = {},
}: TextLoopProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const measureRef = useRef<SVGTextElement>(null);
  const textPathRef = useRef<SVGTextPathElement>(null);

  const [metrics, setMetrics] = useState({ pathLength: 0, unitWidth: 0, reps: 4 });

  const rawId = useId();
  const pathId = `text-loop-${rawId.replace(/:/g, "")}`;

  const d = useMemo(
    () => path || buildPath(shape, curviness, ribbonWidth),
    [path, shape, curviness, ribbonWidth]
  );

  const unit = useMemo(() => {
    const base = uppercase ? String(text).toUpperCase() : String(text);
    const gap = separator ? `\u00A0\u00A0${separator}\u00A0\u00A0` : "\u00A0\u00A0\u00A0";
    return `${base}${gap}`;
  }, [text, separator, uppercase]);

  const textStyle = useMemo(
    () => ({ fontSize: `${fontSize}px`, fontWeight, letterSpacing: `${letterSpacing}px` }),
    [fontSize, fontWeight, letterSpacing]
  );

  const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    const pathEl = pathRef.current;
    const measureEl = measureRef.current;
    if (!pathEl || !measureEl) return undefined;

    let cancelled = false;

    const measure = () => {
      if (cancelled) return;
      let pathLength = 0;
      let unitWidth = 0;
      try {
        pathLength = pathEl.getTotalLength();
        unitWidth = measureEl.getComputedTextLength();
      } catch {
        return;
      }
      if (!pathLength || !unitWidth) return;

      const reps = Math.max(3, Math.ceil((pathLength + 2 * unitWidth) / unitWidth) + 2);
      setMetrics((prev) =>
        prev.pathLength === pathLength && prev.unitWidth === unitWidth && prev.reps === reps
          ? prev
          : { pathLength, unitWidth, reps }
      );
    };

    measure();
    if (typeof document !== "undefined" && document.fonts?.ready) {
      document.fonts.ready.then(measure).catch(() => {});
    }

    return () => {
      cancelled = true;
    };
  }, [d, unit, fontSize, fontWeight, letterSpacing]);

  useEffect(() => {
    const { unitWidth } = metrics;
    const textPath = textPathRef.current;
    if (!textPath || !unitWidth) return undefined;

    const prefersReduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || speed <= 0) return undefined;

    // Zero-pop seamless wrap: startOffset moves exactly one unitWidth distance
    const isForward = direction === "forward";
    const startVal = isForward ? -unitWidth : 0;
    const endVal = isForward ? 0 : -unitWidth;

    const state = { offset: startVal };
    textPath.setAttribute("startOffset", `${startVal}px`);

    const tween = gsap.to(state, {
      offset: endVal,
      duration: unitWidth / speed,
      ease: "none",
      repeat: -1,
      onUpdate: () => {
        textPath.setAttribute("startOffset", `${state.offset}px`);
      },
    });

    const root = rootRef.current;
    let timeScaleTween: gsap.core.Tween | null = null;

    const slowDown = () => {
      timeScaleTween?.kill();
      timeScaleTween = gsap.to(tween, {
        timeScale: 0.2,
        duration: 0.9,
        ease: "power2.out",
      });
    };

    const speedUp = () => {
      timeScaleTween?.kill();
      timeScaleTween = gsap.to(tween, {
        timeScale: 1,
        duration: 0.9,
        ease: "power2.out",
      });
    };

    if (pauseOnHover && root) {
      root.addEventListener("pointerenter", slowDown);
      root.addEventListener("pointerleave", speedUp);
    }

    return () => {
      timeScaleTween?.kill();
      tween.kill();
      if (pauseOnHover && root) {
        root.removeEventListener("pointerenter", slowDown);
        root.removeEventListener("pointerleave", speedUp);
      }
    };
  }, [metrics, speed, direction, pauseOnHover]);

  const loopText = useMemo(() => unit.repeat(metrics.reps), [unit, metrics.reps]);

  return (
    <div ref={rootRef} className={`text-loop ${className}`.trim()} style={style}>
      <svg
        className="text-loop-svg"
        viewBox={viewBox || `0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label={text}
      >
        {/* Optional Glass Border Edge */}
        {ribbon && ribbonBorder && (
          <path
            d={d}
            fill="none"
            stroke={ribbonBorderColor}
            strokeWidth={ribbonWidth + 1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.7}
          />
        )}

        <path
          ref={pathRef}
          id={pathId}
          d={d}
          fill="none"
          stroke={ribbon ? ribbonColor : "none"}
          strokeWidth={ribbon ? ribbonWidth : 0}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <text ref={measureRef} className="text-loop-measure" style={textStyle} aria-hidden="true">
          {unit}
        </text>

        <text
          className="text-loop-text [font-family:'Satoshi',_sans-serif]"
          style={textStyle}
          fill={color}
          dominantBaseline="central"
          aria-hidden="true"
        >
          <textPath ref={textPathRef} href={`#${pathId}`} startOffset={0}>
            {loopText}
          </textPath>
        </text>
      </svg>
    </div>
  );
}

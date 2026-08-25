"use client";

import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { motion, AnimatePresence, TargetAndTransition, Transition } from "motion/react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

import "./RotatingText.css";

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export interface RotatingTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  texts: string[];
  colors?: string[];
  transition?: Transition;
  widthTransition?: Transition;
  initial?: TargetAndTransition;
  animate?: TargetAndTransition;
  exit?: TargetAndTransition;
  rotationInterval?: number;
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | "random";
  loop?: boolean;
  auto?: boolean;
  splitBy?: "characters" | "words" | "lines" | string;
  onNext?: (index: number) => void;
  mainClassName?: string;
  splitLevelClassName?: string;
  elementLevelClassName?: string;
}

export interface RotatingTextRef {
  next: () => void;
  previous: () => void;
  jumpTo: (index: number) => void;
  reset: () => void;
}

const RotatingText = forwardRef<RotatingTextRef, RotatingTextProps>((props, ref) => {
  const {
    texts,
    colors,
    transition = { type: "spring", damping: 28, stiffness: 280 },
    widthTransition = { type: "spring", damping: 32, stiffness: 240, mass: 0.8 },
    initial = { y: "100%", opacity: 0 },
    animate = { y: 0, opacity: 1 },
    exit = { y: "-120%", opacity: 0 },
    rotationInterval = 2800,
    staggerDuration = 0.02,
    staggerFrom = "last",
    loop = true,
    auto = true,
    splitBy = "characters",
    onNext,
    mainClassName,
    splitLevelClassName,
    elementLevelClassName,
    ...rest
  } = props;

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();
  const measureRef = useRef<HTMLSpanElement>(null);
  const [currentWidth, setCurrentWidth] = useState<number | undefined>(undefined);

  const currentColor = colors && colors.length > 0 ? colors[currentTextIndex % colors.length] : undefined;

  // Measure natural text width for smooth container width interpolation
  const updateMeasuredWidth = useCallback(() => {
    if (measureRef.current) {
      const measured = measureRef.current.getBoundingClientRect().width;
      if (measured > 0) {
        setCurrentWidth(Math.ceil(measured));
      }
    }
  }, []);

  useLayoutEffect(() => {
    updateMeasuredWidth();
  }, [currentTextIndex, texts, updateMeasuredWidth]);

  useEffect(() => {
    window.addEventListener("resize", updateMeasuredWidth);
    const timer = setTimeout(updateMeasuredWidth, 100);
    return () => {
      window.removeEventListener("resize", updateMeasuredWidth);
      clearTimeout(timer);
    };
  }, [updateMeasuredWidth]);

  const splitIntoCharacters = (text: string) => {
    if (typeof Intl !== "undefined" && (Intl as any).Segmenter) {
      const segmenter = new (Intl as any).Segmenter("en", { granularity: "grapheme" });
      return Array.from(segmenter.segment(text), (segment: any) => segment.segment as string);
    }
    return Array.from(text);
  };

  const elements = useMemo(() => {
    const currentText = texts[currentTextIndex] || "";
    if (splitBy === "characters") {
      const words = currentText.split(" ");
      return words.map((word, i) => ({
        characters: splitIntoCharacters(word),
        needsSpace: i !== words.length - 1,
      }));
    }
    if (splitBy === "words") {
      return currentText.split(" ").map((word, i, arr) => ({
        characters: [word],
        needsSpace: i !== arr.length - 1,
      }));
    }
    if (splitBy === "lines") {
      return currentText.split("\n").map((line, i, arr) => ({
        characters: [line],
        needsSpace: i !== arr.length - 1,
      }));
    }

    return currentText.split(splitBy).map((part, i, arr) => ({
      characters: [part],
      needsSpace: i !== arr.length - 1,
    }));
  }, [texts, currentTextIndex, splitBy]);

  const getStaggerDelay = useCallback(
    (index: number, totalChars: number) => {
      const total = totalChars;
      if (staggerFrom === "first") return index * staggerDuration;
      if (staggerFrom === "last") return (total - 1 - index) * staggerDuration;
      if (staggerFrom === "center") {
        const center = Math.floor(total / 2);
        return Math.abs(center - index) * staggerDuration;
      }
      if (staggerFrom === "random") {
        const randomIndex = Math.floor(Math.random() * total);
        return Math.abs(randomIndex - index) * staggerDuration;
      }
      return index * staggerDuration;
    },
    [staggerFrom, staggerDuration]
  );

  const handleIndexChange = useCallback(
    (newIndex: number) => {
      setCurrentTextIndex(newIndex);
      if (onNext) onNext(newIndex);
    },
    [onNext]
  );

  const next = useCallback(() => {
    const nextIndex = currentTextIndex === texts.length - 1 ? (loop ? 0 : currentTextIndex) : currentTextIndex + 1;
    if (nextIndex !== currentTextIndex) {
      handleIndexChange(nextIndex);
    }
  }, [currentTextIndex, texts.length, loop, handleIndexChange]);

  const previous = useCallback(() => {
    const prevIndex = currentTextIndex === 0 ? (loop ? texts.length - 1 : currentTextIndex) : currentTextIndex - 1;
    if (prevIndex !== currentTextIndex) {
      handleIndexChange(prevIndex);
    }
  }, [currentTextIndex, texts.length, loop, handleIndexChange]);

  const jumpTo = useCallback(
    (index: number) => {
      const validIndex = Math.max(0, Math.min(index, texts.length - 1));
      if (validIndex !== currentTextIndex) {
        handleIndexChange(validIndex);
      }
    },
    [texts.length, currentTextIndex, handleIndexChange]
  );

  const reset = useCallback(() => {
    if (currentTextIndex !== 0) {
      handleIndexChange(0);
    }
  }, [currentTextIndex, handleIndexChange]);

  useImperativeHandle(
    ref,
    () => ({
      next,
      previous,
      jumpTo,
      reset,
    }),
    [next, previous, jumpTo, reset]
  );

  useEffect(() => {
    if (!auto || prefersReducedMotion) return;
    const intervalId = setInterval(next, rotationInterval);
    return () => clearInterval(intervalId);
  }, [next, rotationInterval, auto, prefersReducedMotion]);

  return (
    <motion.span
      className={cn("text-rotate-wrapper", mainClassName)}
      {...(rest as any)}
      animate={currentWidth ? { width: currentWidth } : undefined}
      transition={widthTransition}
      style={{
        color: currentColor,
        ...rest.style,
      }}
    >
      {/* Hidden offscreen element to accurately measure full natural text width */}
      <span
        ref={measureRef}
        aria-hidden="true"
        className="text-rotate-measure"
      >
        {texts[currentTextIndex]}
      </span>

      <span className="text-rotate-sr-only">{texts[currentTextIndex]}</span>

      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={currentTextIndex}
          className="text-rotate-current"
          layout
          transition={transition}
          style={{ color: currentColor }}
          aria-hidden="true"
        >
          {elements.map((wordObj, wordIndex, array) => {
            const previousCharsCount = array
              .slice(0, wordIndex)
              .reduce((sum, word) => sum + word.characters.length, 0);
            return (
              <span key={wordIndex} className={cn("text-rotate-word", splitLevelClassName)}>
                {wordObj.characters.map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    initial={initial}
                    animate={animate}
                    exit={exit}
                    transition={{
                      ...transition,
                      delay: getStaggerDelay(
                        previousCharsCount + charIndex,
                        array.reduce((sum, word) => sum + word.characters.length, 0)
                      ),
                    }}
                    className={cn("text-rotate-element", elementLevelClassName)}
                  >
                    {char}
                  </motion.span>
                ))}
                {wordObj.needsSpace && <span className="text-rotate-space"> </span>}
              </span>
            );
          })}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
});

RotatingText.displayName = "RotatingText";
export default RotatingText;

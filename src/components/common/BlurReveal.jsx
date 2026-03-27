import { useMemo } from "react";
import { motion } from "framer-motion";

const appleEase = [0.16, 1, 0.3, 1];

const directionOffset = {
  up:    { y: 24, x: 0 },
  down:  { y: -24, x: 0 },
  left:  { x: 24, y: 0 },
  right: { x: -24, y: 0 },
  none:  { x: 0,  y: 0 },
};

/**
 * Detects a true desktop pointer (mouse).
 * `(hover: hover) and (pointer: fine)` = mouse device.
 * Tablets + phones return false → blur is skipped for performance.
 */
function useIsDesktop() {
  return useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }, []);
}

/**
 * BlurReveal — scroll-triggered reveal.
 * • Desktop  → blur(Npx) + fade + slide → sharp (cinematic, full effect)
 * • Mobile/iPad → fade + slide only (no blur, no GPU thrash, smooth 60fps)
 *
 * Props:
 *  children   — anything
 *  delay      — seconds (default 0)
 *  duration   — seconds (default 0.85)
 *  blur       — blur amount in px, desktop only (default 12)
 *  direction  — "up" | "down" | "left" | "right" | "none" (default "up")
 *  once       — only animate once (default true)
 *  amount     — viewport threshold 0–1 (default 0.15)
 *  className  — forwarded to the wrapper element
 *  as         — motion tag: "div" | "p" | "section" | "span" etc. (default "div")
 */
const BlurReveal = ({
  children,
  delay = 0,
  duration = 0.85,
  blur = 12,
  direction = "up",
  once = true,
  amount = 0.15,
  className = "",
  as = "div",
}) => {
  const isDesktop = useIsDesktop();
  const { x, y } = directionOffset[direction] ?? directionOffset.up;

  const Tag = motion[as] ?? motion.div;

  // Desktop: full blur + fade + translate
  // Mobile/Tablet: clean fade + translate (no blur — avoids compositing lag)
  const initial = isDesktop
    ? { opacity: 0, filter: `blur(${blur}px)`, x, y }
    : { opacity: 0, x, y };

  const whileInView = isDesktop
    ? { opacity: 1, filter: "blur(0px)", x: 0, y: 0 }
    : { opacity: 1, x: 0, y: 0 };

  return (
    <Tag
      initial={initial}
      whileInView={whileInView}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: appleEase }}
      className={className}
    >
      {children}
    </Tag>
  );
};

export default BlurReveal;

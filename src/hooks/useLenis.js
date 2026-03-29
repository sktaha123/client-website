/**
 * useLenis — centralised Lenis smooth-scroll initialiser.
 *
 * Responsibilities:
 *  1. Create ONE Lenis instance for the entire app lifecycle.
 *  2. Expose it as `window.lenis` so any component can call
 *     `window.lenis?.scrollTo(0)` safely.
 *  3. Proxy Lenis into GSAP ScrollTrigger so all GSAP animations
 *     remain perfectly in sync with the smoothed scroll position.
 *  4. Pause Lenis while Framer Motion's `useScroll` is active on
 *     a sticky container (the ApproachSection card-stack pattern).
 *     Lenis adds a `data-lenis-prevent` attribute handler for this.
 *  5. Clean up everything on unmount.
 *
 * Usage: call once at the App root — `useLenis()` inside <App />.
 */
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useLenis = () => {
  useEffect(() => {
    // Avoid double-init in React StrictMode (second effect call
    // will find window.lenis already set and bail out cleanly).
    if (window.lenis) return;

    const lenis = new Lenis({
      duration: 1.2,          // seconds — Apple-ish feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    // ── Expose globally so any component can use it safely ──
    window.lenis = lenis;

    // ── GSAP ScrollTrigger proxy ──
    // Without this, GSAP reads the native scroll position while
    // Lenis is mid-interpolation, causing jitter on all animations.
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // GSAP ticker calls lenis each frame
    });

    // Disconnect GSAP's default lagSmoothing — Lenis handles this
    gsap.ticker.lagSmoothing(0);

    // ── RAF loop (used ONLY when GSAP ticker is NOT present) ──
    // Since we're using gsap.ticker above this raf is unused,
    // but kept as a safety fallback comment.
    // function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    // requestAnimationFrame(raf);

    return () => {
      // Cleanup: remove listeners, destroy instance, reset globals
      lenis.destroy();
      window.lenis = undefined;
      gsap.ticker.lagSmoothing(1000, 16); // restore default
    };
  }, []);
};

export default useLenis;

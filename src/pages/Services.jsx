import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Seo from "../components/seo/Seo.jsx";
import { pageSeo } from "../utils/pageSeo.js";

gsap.registerPlugin(ScrollTrigger);

/* ─── Data ──────────────────────────────────────────────────── */
const services = [
  { id: "01", title: "Executive Recruitment", cat: "Executive",  desc: "Tailored hiring solutions connecting businesses with talent that ensures cultural fit and long-term success." },
  { id: "02", title: "Bulk Recruitment",      cat: "Operations", desc: "Efficient large-scale hiring designed to meet urgent demands without compromising quality." },
  { id: "03", title: "EOR Services",          cat: "Compliance", desc: "Staffing & Employer of Record solutions that simplify compliance, payroll, and HR management across borders." },
  { id: "04", title: "Blue Collar Hiring",    cat: "Manpower",   desc: "Specialized recruitment for skilled and semi-skilled workers, supporting operational excellence." },
  { id: "05", title: "Global Placement",      cat: "Frontier",   desc: "International recruitment expertise bridging markets and helping professionals expand across borders." },
  { id: "06", title: "Training Academy",      cat: "Academy",    desc: "Customized upskilling programs to enhance productivity and prepare teams for evolving industry needs." },
  { id: "07", title: "Technical Consulting",  cat: "Innovation", desc: "Strategic consulting blending technical expertise with insight for sustainable business innovation." },
  { id: "08", title: "Software Services",     cat: "Technology", desc: "End-to-end software services delivering scalable, secure, and performance-driven solutions." },
];

const serviceImages = [
  "/cardsimages/s1.webp", "/cardsimages/s2.webp", "/cardsimages/s3.webp",
  "/cardsimages/s4.webp", "/cardsimages/s5.webp", "/cardsimages/s6.webp",
  "/cardsimages/s7.webp", "/cardsimages/s8.webp",
];

/* ─── Constants ─────────────────────────────────────────────── */
const EASE        = [0.16, 1, 0.3, 1];
const CYCLE_TIME  = 5000;

/* ─── Framer Motion variants — NO blur (expensive), pure transform ── */
const imgVariants = {
  enter: { opacity: 0, scale: 1.03 },
  center: { opacity: 1, scale: 1,   transition: { duration: 0.55, ease: EASE } },
  exit:  { opacity: 0, scale: 0.98, transition: { duration: 0.35, ease: EASE } },
};

const textVariants = {
  enter: { opacity: 0, y: 12 },
  center: { opacity: 1, y: 0,  transition: { duration: 0.4, ease: EASE } },
  exit:  { opacity: 0, y: -8,  transition: { duration: 0.25, ease: EASE } },
};

/* ─── Component ─────────────────────────────────────────────── */
export function Services() {
  const [active, setActive]     = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const mobileNavRef  = useRef(null);
  const headerRef     = useRef(null);
  const leftPaneRef   = useRef(null);
  const rightPaneRef  = useRef(null);

  /* AutoPlay timer — resets whenever active changes */
  useEffect(() => {
    if (!autoPlay) return;
    const t = setInterval(() => {
      setActive((p) => (p + 1) % services.length);
    }, CYCLE_TIME);
    return () => clearInterval(t);
  }, [active, autoPlay]);

  /* Mobile: keep active tab centred */
  useEffect(() => {
    const nav = mobileNavRef.current;
    if (!nav) return;
    const el = nav.children[active];
    el?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [active]);

  /* Desktop left-pane: scroll active item into view naturally */
  useEffect(() => {
    const pane = leftPaneRef.current;
    if (!pane) return;
    const item = pane.querySelectorAll("[data-nav-item]")[active];
    item?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [active]);

  /* GSAP entrance animation — header only, GPU transforms */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [headerRef.current, leftPaneRef.current, rightPaneRef.current],
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.1,
          scrollTrigger: { trigger: headerRef.current, start: "top 88%", once: true },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  /* Mobile swipe handler */
  const handleDragEnd = useCallback((_e, { offset }) => {
    if (offset.x < -40) { setAutoPlay(false); setActive((p) => (p + 1) % services.length); }
    else if (offset.x > 40) { setAutoPlay(false); setActive((p) => (p - 1 + services.length) % services.length); }
  }, []);

  return (
    <div className="bg-biz-cream font-dm min-h-screen selection:bg-biz-bronze selection:text-white">
      <Seo {...pageSeo.services} />

      {/* ── Page wrapper — padding-top for navbar ── */}
      <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-12 pt-12 pb-16 md:pt-8 md:pb-0 md:h-[calc(100vh-64px)] md:flex md:flex-col">

        {/* ── Header ── */}
        <div ref={headerRef} className="mb-8 md:mb-10 shrink-0 opacity-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-biz-bronze mb-3">
            What We Do
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-[60px] font-light text-biz-charcoal-ink tracking-tight leading-[1.05]">
            Capabilities <span className="font-medium">that scale.</span>
          </h1>
        </div>

        {/* ══════════════════════════════════════════════════════ */}
        {/* ── MOBILE (swipeable tabs) ──────────────────────────  */}
        <div className="md:hidden flex flex-col flex-1 min-h-0">
          {/* Tab strip */}
          <div
            ref={mobileNavRef}
            className="flex overflow-x-auto hide-scrollbar gap-5 border-b border-biz-charcoal/10 mb-6 shrink-0 px-1"
          >
            {services.map((s, i) => {
              const on = active === i;
              return (
                <button
                  key={s.id}
                  onClick={() => { setActive(i); setAutoPlay(false); }}
                  className="relative pb-3 text-[14px] tracking-tight whitespace-nowrap outline-none"
                >
                  <span className={`transition-colors duration-300 ${on ? "text-biz-charcoal-ink font-medium" : "text-biz-charcoal-soft font-light"}`}>
                    {s.title}
                  </span>
                  {on && (
                    <motion.div
                      layoutId="mob-tab"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-biz-bronze"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Swipeable card */}
          <div className="relative flex-1 flex flex-col min-h-[340px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                variants={{ enter: { opacity: 0, x: 16 }, center: { opacity: 1, x: 0, transition: { duration: 0.35, ease: EASE } }, exit: { opacity: 0, x: -16, transition: { duration: 0.2 } } }}
                initial="enter" animate="center" exit="exit"
                className="absolute inset-0 flex flex-col cursor-grab active:cursor-grabbing"
                drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.15}
                onDragEnd={handleDragEnd}
              >
                <div className="relative w-full flex-1 rounded-2xl overflow-hidden bg-biz-charcoal/5 mb-5 pointer-events-none min-h-[200px]">
                  <img
                    src={serviceImages[active]} alt={services[active].title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                </div>
                <div className="shrink-0 pointer-events-none pb-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-biz-bronze mb-1.5 block">
                    {services[active].id} — {services[active].cat}
                  </span>
                  <p className="text-[14px] text-biz-charcoal-soft leading-relaxed font-light">
                    {services[active].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════ */}
        {/* ── DESKTOP (sticky right, scrollable left) ───────── */}
        <div className="hidden md:grid grid-cols-12 gap-10 lg:gap-16 flex-1 min-h-0 pb-10">

          {/* LEFT: Scrollable nav list
              ─ data-lenis-prevent tells Lenis to yield native wheel
                scroll to this element so it can scroll independently */}
          <div
            ref={leftPaneRef}
            data-lenis-prevent
            onMouseLeave={() => setAutoPlay(true)}
            className="col-span-4 relative overflow-y-auto hide-scrollbar py-1 pr-3 opacity-0"
            style={{ scrollbarWidth: "none" }}
          >
            {/* Vertical track line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-biz-charcoal/8" />

            {services.map((s, i) => {
              const on = active === i;
              return (
                <button
                  key={s.id}
                  data-nav-item
                  onMouseEnter={() => { setActive(i); setAutoPlay(false); }}
                  onClick={() => { setActive(i); setAutoPlay(false); }}
                  className="relative w-full flex items-center justify-between py-4 lg:py-5 text-left group shrink-0 outline-none"
                >
                  {/* Animated bronze indicator bar */}
                  {on && (
                    <motion.div
                      layoutId="desk-line"
                      className="absolute left-0 top-0 bottom-0 w-[2px] bg-biz-bronze"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}

                  <div className="flex items-center gap-5 pl-5">
                    <span className={`text-[11px] font-mono shrink-0 transition-colors duration-300 ${on ? "text-biz-bronze" : "text-biz-charcoal-soft/35 group-hover:text-biz-charcoal-soft/70"}`}>
                      {s.id}
                    </span>
                    <span className={`text-[15px] lg:text-[16px] tracking-tight transition-all duration-300 ${on ? "text-biz-charcoal-ink font-medium" : "text-biz-charcoal-soft font-light group-hover:text-biz-charcoal-ink"}`}>
                      {s.title}
                    </span>
                  </div>

                  <ArrowRight
                    size={13}
                    className={`shrink-0 transition-all duration-300 ${on ? "text-biz-bronze opacity-100 translate-x-0" : "text-biz-charcoal-soft opacity-0 -translate-x-2 group-hover:opacity-40 group-hover:translate-x-0"}`}
                  />
                </button>
              );
            })}
          </div>

          {/* RIGHT: Pinned image + text crossfade */}
          <div ref={rightPaneRef} className="col-span-8 flex flex-col h-full min-h-0 opacity-0">

            {/* Image — crossfades, NO blur filter (use opacity+scale only) */}
            <div className="relative w-full flex-1 rounded-2xl overflow-hidden bg-biz-charcoal/5 border border-biz-charcoal/5 min-h-0">
              <AnimatePresence initial={false}>
                <motion.img
                  key={`img-${active}`}
                  src={serviceImages[active]}
                  alt={services[active].title}
                  variants={imgVariants}
                  initial="enter" animate="center" exit="exit"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              </AnimatePresence>

              {/* Service number watermark */}
              <div className="absolute top-5 right-6 text-[11px] font-mono text-white/30 select-none">
                {services[active].id} / {String(services.length).padStart(2, "0")}
              </div>
            </div>

            {/* Text + progress bar — fixed height prevents layout shift */}
            <div className="shrink-0 h-[100px] relative mt-6">
              <AnimatePresence initial={false}>
                <motion.div
                  key={`text-${active}`}
                  variants={textVariants}
                  initial="enter" animate="center" exit="exit"
                  className="absolute inset-0 flex flex-col justify-start pointer-events-none"
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-biz-bronze mb-2">
                    {services[active].cat}
                  </span>
                  <p className="text-[15px] text-biz-charcoal-soft leading-relaxed font-light max-w-lg">
                    {services[active].desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Autoplay progress bar */}
              <div className="absolute bottom-0 left-0 w-40 h-px bg-biz-charcoal/12 overflow-hidden">
                {autoPlay && (
                  <motion.div
                    key={`bar-${active}`}
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: CYCLE_TIME / 1000, ease: "linear" }}
                    className="absolute inset-0 bg-biz-bronze origin-left"
                  />
                )}
              </div>
            </div>

          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}

export default Services;

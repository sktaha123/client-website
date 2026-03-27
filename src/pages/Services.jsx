import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

// Apple's signature smooth ease curve
const appleEase = [0.16, 1, 0.3, 1];
const CYCLE_TIME = 5000;

export function Services() {
  const [active, setActive] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const mobileNavRef = useRef(null);

  // 1. AutoPlay Timer
  useEffect(() => {
    if (!autoPlay) return;
    const t = setInterval(() => {
      setActive((p) => (p + 1) % services.length);
    }, CYCLE_TIME);
    return () => clearInterval(t);
  }, [active, autoPlay]);

  // 2. Mobile Tab Auto-Scroll
  useEffect(() => {
    if (mobileNavRef.current) {
      const activeEl = mobileNavRef.current.children[active];
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [active]);

  // Handle Mobile Swipe
  const handleDragEnd = (e, { offset }) => {
    const swipeThreshold = 40; 
    if (offset.x < -swipeThreshold) {
      setAutoPlay(false);
      setActive((p) => (p + 1) % services.length);
    } else if (offset.x > swipeThreshold) {
      setAutoPlay(false);
      setActive((p) => (p - 1 + services.length) % services.length);
    }
  };

  return (
    <div className="bg-biz-cream font-dm min-h-screen flex items-center justify-center py-16 md:py-0 md:-mt-10 selection:bg-biz-bronze selection:text-white overflow-hidden">
      <div className="w-full max-w-[1100px] mx-auto px-6 lg:px-12 md:h-[75vh] flex flex-col">
        
        {/* ── Header ── */}
        <div className="mb-10 md:mb-12 shrink-0">
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-biz-charcoal-ink tracking-tight">
            Capabilities that scale.
          </h2>
        </div>

        {/* ═════════════════════════════════════════════════════════ */}
        {/* ── MOBILE LAYOUT (Swipeable) ── */}
        <div className="md:hidden flex flex-col flex-1 min-h-0">
          
          <div 
            ref={mobileNavRef}
            className="flex overflow-x-auto hide-scrollbar gap-6 border-b border-biz-charcoal/10 mb-8 shrink-0 relative px-2"
          >
            {services.map((s, i) => {
              const isActive = active === i;
              return (
                <button
                  key={s.id}
                  onClick={() => { setActive(i); setAutoPlay(false); }}
                  className="relative pb-3 text-[15px] tracking-tight whitespace-nowrap outline-none"
                >
                  <span className={`transition-colors duration-300 ${isActive ? "text-biz-charcoal-ink font-medium" : "text-biz-charcoal-soft font-light"}`}>
                    {s.title}
                  </span>
                  {isActive && (
                    <motion.div 
                      layoutId="mobile-active-tab"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-biz-bronze"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="relative flex-1 flex flex-col min-h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, filter: "blur(4px)", x: 15 }}
                animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
                exit={{ opacity: 0, filter: "blur(4px)", x: -15 }}
                transition={{ duration: 0.35, ease: appleEase }}
                className="absolute inset-0 flex flex-col cursor-grab active:cursor-grabbing"
                drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.2} onDragEnd={handleDragEnd}
              >
                <div className="relative w-full flex-1 rounded-2xl overflow-hidden bg-biz-charcoal/5 mb-6 pointer-events-none">
                  <img src={serviceImages[active]} alt={services[active].title} className="absolute inset-0 w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = "none"; }}/>
                </div>
                <div className="shrink-0 pointer-events-none pb-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-biz-bronze mb-2 block">
                    {services[active].id} — {services[active].cat}
                  </span>
                  <p className="text-[15px] text-biz-charcoal-soft leading-relaxed font-light">
                    {services[active].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════ */}
        {/* ── DESKTOP / IPAD LAYOUT (Absolute Crossfade) ── */}
        <div className="hidden md:grid grid-cols-12 gap-12 lg:gap-20 flex-1 min-h-0">

          {/* Left: Interactive Navigation */}
          <div 
            className="col-span-5 relative flex flex-col h-full overflow-y-auto hide-scrollbar py-2 pr-4"
            onMouseLeave={() => setAutoPlay(true)}
          >
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-biz-charcoal/5" />
            
            {services.map((s, i) => {
              const isActive = active === i;
              return (
                <button
                  key={s.id}
                  onMouseEnter={() => { setActive(i); setAutoPlay(false); }}
                  onClick={() => { setActive(i); setAutoPlay(false); }}
                  className="relative w-full flex items-center justify-between py-[1.15rem] lg:py-5 text-left group shrink-0 outline-none"
                >
                  {/* Animated Tracking Line */}
                  {isActive && (
                    <motion.div 
                      layoutId="desktop-active-line"
                      className="absolute left-0 top-0 bottom-0 w-[2px] bg-biz-bronze"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}

                  <div className="flex items-center gap-6 pl-6">
                    <span className={`text-[11px] font-mono transition-colors duration-300 ${isActive ? "text-biz-bronze" : "text-biz-charcoal-soft/40"}`}>
                      {s.id}
                    </span>
                    <span className={`text-[15px] lg:text-[16px] tracking-tight transition-all duration-300 ${isActive ? "text-biz-charcoal-ink font-medium" : "text-biz-charcoal-soft font-light group-hover:text-biz-charcoal-ink"}`}>
                      {s.title}
                    </span>
                  </div>

                  {/* Elegant Arrow Indicator */}
                  <ArrowRight 
                    size={14} 
                    className={`transition-all duration-300 ${isActive ? "text-biz-bronze opacity-100 translate-x-0" : "text-biz-charcoal-soft opacity-0 -translate-x-2"}`} 
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Stable Pane with Crossfading Content */}
          <div className="col-span-7 flex flex-col h-full min-h-0 relative">
            
            {/* 1. Crossfading Image Area */}
            <div className="relative w-full flex-1 rounded-2xl overflow-hidden bg-biz-charcoal/5 mb-8 border border-biz-charcoal/5">
              <AnimatePresence initial={false}>
                <motion.img
                  key={`img-${active}`}
                  src={serviceImages[active]}
                  alt={services[active].title}
                  initial={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.5, ease: appleEase }}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              </AnimatePresence>
            </div>

            {/* 2. Crossfading Text Area (Fixed Height prevents jumping) */}
            <div className="shrink-0 h-[110px] relative w-full">
              <AnimatePresence initial={false}>
                <motion.div
                  key={`text-${active}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: appleEase }}
                  className="absolute inset-0 flex flex-col justify-between pointer-events-none"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-biz-bronze mb-2 block">
                      {services[active].cat}
                    </span>
                    <p className="text-[15px] text-biz-charcoal-soft leading-relaxed font-light max-w-lg">
                      {services[active].desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* 3. AutoPlay Progress Bar */}
              <div className="absolute bottom-0 left-0 w-full md:w-48 h-[2px] bg-biz-charcoal/10 overflow-hidden">
                {autoPlay && (
                  <motion.div
                    key={`progress-${active}`}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: CYCLE_TIME / 1000, ease: "linear" }}
                    className="absolute inset-y-0 left-0 bg-biz-bronze"
                  />
                )}
              </div>
            </div>

          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}

export default Services;
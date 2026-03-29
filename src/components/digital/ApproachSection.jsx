import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    num: "01",
    phase: "Discovery",
    title: "We learn your business inside out.",
    body: "Every great project starts with listening. We conduct a thorough discovery session covering your goals, target audience, competitive landscape, and digital footprint.",
    img: "/svgs/digital/research.webp",
    color: "#A31515",
  },
  {
    num: "02",
    phase: "Strategy",
    title: "We build a roadmap, not a guess.",
    body: "Before a single pixel is pushed, we deliver a clear, phased digital strategy. You see exactly what we will do, why we are doing it, and the expected outcomes.",
    img: "/svgs/digital/roadmap.webp",
    color: "#7B1010",
  },
  {
    num: "03",
    phase: "Execution",
    title: "We build and launch with precision.",
    body: "Our specialists execute across design, development, and content. Every deliverable is rigorously QA-tested and reviewed against your core business objectives.",
    img: "/svgs/digital/launch.webp",
    color: "#5E1111",
  },
];

const appleEase = [0.16, 1, 0.3, 1];

// ── DESKTOP: Performance-Optimized Stacking Card ──
const DesktopCard = ({ step, i, progress, range, targetScale }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const cardScale = useTransform(progress, range, [1, targetScale]);
  const yParallax = useTransform(progress, range, [0, -40 * i]);

  return (
    <div ref={containerRef} className="h-screen w-full flex items-center justify-center sticky top-0 origin-top">
      <motion.div
        style={{ 
          scale: cardScale, 
          y: yParallax, 
          top: `calc(12vh + ${i * 30}px)`,
          willChange: "transform" // Hardware acceleration for 120fps scrolling
        }}
        className="w-full relative flex flex-row items-stretch bg-white border border-biz-charcoal/10 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden"
      >
        {/* Text Side */}
        <div className="w-[45%] p-14 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-10">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-[12px] font-bold text-white shadow-lg shrink-0"
              style={{ background: step.color }}
            >
              {step.num}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-biz-charcoal-soft/60">
              {step.phase}
            </span>
          </div>

          <h3 className="text-[36px] lg:text-[42px] font-medium text-biz-charcoal-ink leading-[1.1] tracking-tight mb-5">
            {step.title}
          </h3>
          <p className="text-[16px] text-biz-charcoal-soft font-light leading-[1.8] max-w-sm">
            {step.body}
          </p>
        </div>

        {/* Image Side */}
        <div className="w-[55%] relative overflow-hidden bg-biz-sand border-l border-biz-charcoal/5 group">
          <motion.div style={{ scale: imageScale, willChange: "transform" }} className="w-full h-full">
            <img
              src={step.img}
              alt={step.phase}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
            {/* Optimized Tint Overlay (No mix-blend-mode) */}
            <div
              className="absolute inset-0 opacity-30 transition-opacity duration-500 group-hover:opacity-10 pointer-events-none"
              style={{ background: `linear-gradient(135deg, ${step.color} 0%, #050505 100%)` }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export const ApproachSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="bg-biz-cream relative border-t border-biz-charcoal/5 selection:bg-biz-bronze selection:text-white">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

        {/* ── LEFT: Sticky Editorial Header (Desktop) ── */}
        <div className="hidden lg:block lg:col-span-4 relative h-full">
          <div className="sticky top-0 h-screen flex flex-col justify-center py-20">

            

            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: appleEase, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-light text-biz-charcoal-ink leading-[1.05] tracking-tight mb-8"
            >
              Our proven <br />
              <span className="font-medium text-biz-bronze">process.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: appleEase, delay: 0.2 }}
              className="text-[16px] text-biz-charcoal-soft font-light leading-[1.8] max-w-sm mb-12"
            >
              A disciplined, three-step methodology that turns complex business goals into measurable, scalable digital results.
            </motion.p>

            {/* Dynamic Scroll Progress Bar */}
            <div className="w-px h-32 bg-biz-charcoal/10 relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-full bg-biz-bronze origin-top"
                style={{ scaleY: scrollYProgress, bottom: 0, willChange: "transform" }}
              />
            </div>

          </div>
        </div>

        {/* ── RIGHT: Scrolling Card Stack (Desktop) ── */}
        <div className="hidden lg:block lg:col-span-8 relative">
          <div className="pb-[10vh]">
            {steps.map((step, i) => {
              const targetScale = 1 - ((steps.length - i) * 0.04);
              return (
                <DesktopCard
                  key={i}
                  i={i}
                  step={step}
                  progress={scrollYProgress}
                  range={[i * 0.33, 1]}
                  targetScale={targetScale}
                />
              );
            })}
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════ */}
        {/* ── MOBILE LAYOUT (Swipe Gallery - No Sticky Scroll Lag) ── */}
        <div className="lg:hidden col-span-1 pt-20 pb-16">
          
          <div className="mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-biz-bronze mb-4">
              How We Work
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-biz-charcoal-ink leading-[1.05] tracking-tight">
              Our proven <span className="font-medium text-biz-bronze">process.</span>
            </h2>
          </div>

          <div className="-mx-6 px-6">
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 hide-scrollbar">
              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: appleEase, delay: i * 0.1 }}
                  className="w-[85vw] md:w-[60vw] shrink-0 snap-center flex flex-col bg-white border border-biz-charcoal/5 rounded-[2rem] overflow-hidden shadow-sm"
                >
                  <div className="w-full aspect-[4/3] relative overflow-hidden bg-biz-sand">
                    <img
                      src={s.img}
                      alt={s.phase}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.style.display = "none"; }}
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-3 shadow-sm">
                      <span className="w-2 h-2 rounded-full" style={{ background: s.color }} />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-biz-charcoal-ink">
                        Phase {s.num}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-[24px] font-medium text-biz-charcoal-ink leading-[1.15] mb-4 tracking-tight">
                      {s.title}
                    </h3>
                    <p className="text-[15px] text-biz-charcoal-soft font-light leading-[1.7]">
                      {s.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};

export default ApproachSection;
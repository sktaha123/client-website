import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    phase: "Discovery",
    title: "We learn your business inside out.",
    body: "Every great project starts with listening. We conduct a thorough discovery session covering your goals, target audience, competitive landscape, and digital footprint.",
    img: "/digital/process-1.webp",
    color: "#A31515",
  },
  {
    num: "02",
    phase: "Strategy",
    title: "We build a roadmap, not a guess.",
    body: "Before a single pixel is pushed, we deliver a clear, phased digital strategy. You see exactly what we will do, why we are doing it, and the expected outcomes.",
    img: "/digital/process-2.webp",
    color: "#7B1010",
  },
  {
    num: "03",
    phase: "Execution",
    title: "We build and launch with precision.",
    body: "Our specialists execute across design, development, and content. Every deliverable is rigorously QA-tested and reviewed against your core business objectives.",
    img: "/digital/process-3.webp",
    color: "#5E1111",
  },
];

// Apple's signature smooth ease
const appleEase = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: appleEase } },
};

export const ApproachSection = () => {
  return (
    <section className="bg-biz-cream py-20 md:py-32 overflow-hidden selection:bg-biz-bronze selection:text-white border-t border-biz-charcoal-ink/5">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">

        {/* ── HEADER ── */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 md:mb-28"
        >
          <div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-biz-charcoal-ink leading-[1.05] tracking-tight">
              Our proven{" "}
              <span className="font-medium text-biz-bronze">3-step process.</span>
            </h2>
          </div>
          <p className="text-[15px] text-biz-charcoal-soft font-light max-w-xs leading-[1.8] hidden md:block pb-2">
            A disciplined methodology that turns complex goals into measurable results.
          </p>
        </motion.div>

        {/* ═════════════════════════════════════════════════════════ */}
        {/* ── DESKTOP LAYOUT (Alternating Timeline) ── */}
        <div className="hidden md:block relative">

          {/* Central Connecting Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-biz-charcoal-ink/20 via-biz-charcoal-ink/10 to-transparent origin-top z-0"
          />

          <div className="flex flex-col gap-24 lg:gap-32 relative z-10">
            {steps.map((s, i) => {
              const isEven = i % 2 === 0;

              return (
                <div
                  key={i}
                  className={`flex items-center gap-12 lg:gap-20 ${
                    isEven ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* TEXT SIDE */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, ease: appleEase }}
                    className="w-1/2 flex flex-col"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-[12px] font-bold text-white shadow-lg"
                        style={{ background: s.color }}
                      >
                        {i + 1}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-biz-charcoal-soft/60">
                        {s.phase}
                      </span>
                    </div>

                    <div className="relative mb-6">
                      
                      <h3 className="relative text-[28px] lg:text-[36px] font-medium text-biz-charcoal-ink leading-[1.1] tracking-tight">
                        {s.title}
                      </h3>
                    </div>

                    <p className="text-[16px] text-biz-charcoal-soft font-light leading-[1.8] max-w-md">
                      {s.body}
                    </p>

                    
                  </motion.div>

                  {/* IMAGE SIDE */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, ease: appleEase, delay: 0.1 }}
                    className="w-1/2"
                  >
                    <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-biz-sand relative shadow-xl border border-biz-charcoal-ink/5 group">
                      <img
                        src={s.img}
                        alt={s.phase}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                        onError={(e) => { e.currentTarget.style.display = "none"; }}
                      />
                      {/* Premium Color Tint Overlay */}
                      <div
                        className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none transition-opacity duration-500 group-hover:opacity-20"
                        style={{
                          background: `linear-gradient(135deg, ${s.color} 0%, transparent 60%)`,
                        }}
                      />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════ */}
        {/* ── MOBILE LAYOUT (Horizontal Swipe Gallery) ── */}
        <div className="md:hidden -mx-6 px-6">
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 hide-scrollbar">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: appleEase, delay: i * 0.1 }}
                className="w-[85vw] shrink-0 snap-center flex flex-col"
              >
                {/* Mobile Image */}
                <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-biz-sand relative mb-8 shadow-md border border-biz-charcoal-ink/5">
                  <img
                    src={s.img}
                    alt={s.phase}
                    loading="lazy"
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

                {/* Mobile Text */}
                <div className="flex flex-col relative">
                  <span
                    className="absolute -top-10 right-0 text-[100px] font-bold leading-none select-none pointer-events-none"
                    style={{ color: "rgba(163,21,21,0.04)" }}
                  >
                    {s.num}
                  </span>
                  <h3 className="text-[26px] font-medium text-biz-charcoal-ink leading-[1.1] mb-4 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-[15px] text-biz-charcoal-soft font-light leading-[1.8]">
                    {s.body}
                  </p>
                </div>
              </motion.div>
            ))}
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
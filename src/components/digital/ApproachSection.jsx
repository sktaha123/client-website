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

// ── Individual Card Component for the Scroll Stack ──
const Card = ({ step, i, progress, range, targetScale }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const cardScale = useTransform(progress, range, [1, targetScale]);

  // Creates a slight parallax effect so the cards feel like they are sliding under
  const yParallax = useTransform(progress, range, [0, -30 * i]);

  return (
    <div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{ scale: cardScale, y: yParallax, top: `calc(10vh + ${i * 30}px)` }}
        className="w-full relative flex flex-col md:flex-row items-stretch bg-white border border-biz-charcoal/5 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] overflow-hidden"
      >
        {/* Text Side */}
        <div className="w-full md:w-[45%] p-10 lg:p-14 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-6 md:mb-10">
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

          <h3 className="text-[28px] lg:text-[40px] font-medium text-biz-charcoal-ink leading-[1.1] tracking-tight mb-4">
            {step.title}
          </h3>
          <p className="text-[16px] text-biz-charcoal-soft font-light leading-[1.8] max-w-sm">
            {step.body}
          </p>
        </div>

        {/* Image Side */}
        <div className="w-full md:w-[55%] relative overflow-hidden bg-biz-sand min-h-[300px] md:min-h-full border-l border-biz-charcoal/5">
          <motion.div style={{ scale: imageScale }} className="w-full h-full">
            <img
              src={step.img}
              alt={step.phase}
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
            {/* Color Tint Overlay */}
            <div
              className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none"
              style={{ background: `linear-gradient(135deg, ${step.color} 0%, transparent 60%)` }}
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
    <section ref={containerRef} className="bg-biz-cream relative">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

        {/* ── LEFT: Sticky Header ── */}
        <div className="hidden lg:block lg:col-span-4 relative h-full">
          <div className="sticky top-0 h-screen flex flex-col justify-center py-20">

            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: appleEase }}
              className="text-[10px] font-bold uppercase tracking-[0.25em] text-biz-bronze mb-5"
            >
              How We Work
            </motion.p>

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
                style={{ scaleY: scrollYProgress, bottom: 0 }}
              />
            </div>

          </div>
        </div>

        {/* ── RIGHT: Scrolling Card Stack ── */}
        <div className="lg:col-span-8 relative">

          {/* Mobile Header (Hidden on Desktop) */}
          <div className="lg:hidden pt-24 pb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-biz-bronze mb-4">
              How We Work
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-biz-charcoal-ink leading-[1.05] tracking-tight">
              Our proven <span className="font-medium text-biz-bronze">process.</span>
            </h2>
          </div>

          <div className="mt-[-10vh] lg:mt-0 pb-[10vh]">
            {steps.map((step, i) => {
              // Calculate target scale so cards get progressively smaller as they stack backwards
              const targetScale = 1 - ((steps.length - i) * 0.04);
              return (
                <Card
                  key={i}
                  i={i}
                  step={step}
                  progress={scrollYProgress}
                  // The range defines when the specific card should start scaling down
                  range={[i * 0.33, 1]}
                  targetScale={targetScale}
                />
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
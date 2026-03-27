import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlurReveal from "../common/BlurReveal";

const appleEase = [0.16, 1, 0.3, 1];
const CYCLE_TIME = 6; // seconds

const steps = [
  {
    num: "01",
    phase: "Discovery",
    title: "We learn your business inside out.",
    body: "Every great project starts with listening. We conduct a thorough discovery session covering your specific goals, target audience, competitive landscape, and current digital footprint.",
    img: "/digital/process-1.webp",
  },
  {
    num: "02",
    phase: "Strategy",
    title: "We build a roadmap, not a guess.",
    body: "Before a single line of code is written or pixel is pushed, we deliver a clear, phased digital strategy. You see exactly what we will do, why we are doing it, and the expected outcomes.",
    img: "/digital/process-2.webp",
  },
  {
    num: "03",
    phase: "Execution",
    title: "We build and launch with precision.",
    body: "Our specialists execute the strategy across design, development, and content creation. Every deliverable is rigorously QA-tested and reviewed against your core business objectives.",
    img: "/digital/process-3.webp",
  },
];

const ApproachSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-biz-cream py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        {/* Header */}
        <BlurReveal className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-biz-charcoal-ink leading-[1.05] tracking-tight">
            A methodology built for{" "}
            <span className="font-medium">real-world results.</span>
          </h2>
        </BlurReveal>

        {/* ── DESKTOP: Alternating split-pane layout ── */}
        <div className="hidden md:block space-y-24 lg:space-y-32">
          {steps.map((s, i) => {
            const isEven = i % 2 !== 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, ease: appleEase }}
                className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${isEven ? "md:flex-row-reverse" : ""}`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-biz-sand">
                    <img
                      src={s.img}
                      alt={s.phase}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 flex flex-col">
                  
                  <h3 className="text-[28px] md:text-[36px] font-medium text-biz-charcoal-ink leading-[1.1] mb-5 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-[15px] md:text-[16px] text-biz-charcoal-soft font-light leading-[1.8]">
                    {s.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── MOBILE: Horizontal swipe tabs ── */}
        <div className="md:hidden">
          {/* Tab Selector */}
          <div className="flex gap-2 mb-8">
            {steps.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex-1 py-3 text-[12px] font-medium rounded-full border transition-all duration-300 ${
                  active === i
                    ? "bg-biz-charcoal-ink text-white border-biz-charcoal-ink"
                    : "bg-transparent text-biz-charcoal-soft border-biz-charcoal/15 hover:border-biz-charcoal/30"
                }`}
              >
                {s.phase}
              </button>
            ))}
          </div>

          {/* Content — Crossfade, zero layout shift */}
          <div className="relative" style={{ minHeight: 560 }}>
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, filter: "blur(6px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                exit={{ opacity: 0, filter: "blur(6px)", y: -10 }}
                transition={{ duration: 0.4, ease: appleEase }}
                className="absolute inset-0 flex flex-col"
              >
                <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-biz-sand mb-7">
                  <img
                    src={steps[active].img}
                    alt={steps[active].phase}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[56px] font-light text-biz-charcoal-ink/8 leading-none select-none">
                  {steps[active].num}
                </span>
                <h3 className="text-[26px] font-medium text-biz-charcoal-ink leading-[1.1] mb-3 tracking-tight">
                  {steps[active].title}
                </h3>
                <p className="text-[15px] text-biz-charcoal-soft font-light leading-[1.8]">
                  {steps[active].body}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ApproachSection;
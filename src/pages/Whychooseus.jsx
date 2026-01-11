import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const benefits = [
  {
    title: "Proven Legacy",
    text: "Built on over six decades of operational excellence, industry relationships, and institutional trust that consistently delivers stability, foresight, and long-term value to partners.",
    highlight: "60+ Years"
  },
  {
    title: "Global Standards",
    text: "End-to-end compliance aligned with international labor laws, data protection policies, and regulatory frameworks across India, UAE, and global markets.",
    highlight: "100% Compliant"
  },
  {
    title: "Strategic Reach",
    text: "A dual-market operational presence that combines deep regional insight with global execution capability, enabling seamless cross-border workforce solutions.",
    highlight: "Cross-Border"
  },
  {
    title: "Digital First",
    text: "Technology-enabled hiring, workforce management, and reporting systems designed for transparency, speed, accuracy, and real-time decision making.",
    highlight: "Tech-Enabled"
  },
  {
    title: "Human Centric",
    text: "People-first engagement model with dedicated account leadership, responsive support teams, and continuous alignment to client objectives.",
    highlight: "Always On"
  },
  {
    title: "Execution Precision",
    text: "Process-driven delivery frameworks that ensure predictable outcomes, minimized risk, and consistent service quality across all engagement stages.",
    highlight: "Process-Led"
  },
  {
    title: "Scalable Solutions",
    text: "Flexible workforce models engineered to scale rapidly with business demand—without compromising compliance, quality, or cultural alignment.",
    highlight: "Built to Scale"
  },
  {
    title: "Market Intelligence",
    text: "Data-backed insights, salary benchmarking, and talent availability analysis that empower informed workforce and expansion decisions.",
    highlight: "Insight Driven"
  },
  {
    title: "Risk Mitigation",
    text: "Proactive governance, contractual safeguards, and compliance monitoring designed to reduce operational, legal, and reputational exposure.",
    highlight: "Risk Secure"
  },
  {
    title: "Partnership Mindset",
    text: "We operate as an extension of your organization—aligning strategy, execution, and accountability to deliver long-term business outcomes.",
    highlight: "Trusted Ally"
  }
];


export function Whychooseus() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef(null);

  // Function to clear and restart the timer
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % benefits.length);
    }, 5000); // 5 seconds
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % benefits.length);
    resetTimer(); // Reset countdown on click
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + benefits.length) % benefits.length);
    resetTimer(); // Reset countdown on click
  };

  return (
   <section className="py-3 bg-[#FAF9F6] font-dm overflow-hidden">
  <motion.div
    className="max-w-7xl mx-auto px-6 w-full relative z-10"
    initial={{ opacity: 0, y: 48 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    }}
    viewport={{ once: true, margin: "-80px" }}
  >

        <div className="flex flex-col lg:flex-row items-stretch min-h-[450px] gap-0 border border-biz-charcoal-ink/10 rounded-[2rem] overflow-hidden bg-white shadow-2xl shadow-biz-charcoal-ink/5">

          {/* --- Left Column: The Anchor --- */}
          <div className="lg:w-2/5 p-12 md:p-16 flex flex-col justify-between bg-biz-charcoal-ink text-white">
            <div>
              <span className="text-biz-bronze text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block">
                The Advantage
              </span>
              <h2 className="text-4xl md:text-5xl font-light leading-tight">
                Why Industry <br />
                Leaders Trust <br />
                <span className="font-serif italic text-biz-bronze">BiznorX</span>
              </h2>
            </div>

            <div className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-center">

  {/* LEFT — Buttons */}
  <div className="flex justify-between items-center lg:justify-start lg:gap-6">
    <div className="flex gap-2">
      <button
        onClick={prev}
        className="p-4 rounded-full border border-white/10 hover:bg-white/10 transition-all active:scale-95"
      >
        <ArrowLeft size={20} className="text-biz-bronze" />
      </button>

      <button
        onClick={next}
        className="p-4 rounded-full border border-white/10 hover:bg-white/10 transition-all active:scale-95"
      >
        <ArrowRight size={20} className="text-biz-bronze" />
      </button>
    </div>

    {/* MOBILE — Counter aligned opposite */}
    <span className="font-mono text-xs text-white/40 lg:hidden">
      0{index + 1} / 0{benefits.length}
    </span>
  </div>

  {/* DESKTOP — Divider */}
  <div className="hidden lg:block h-px flex-1 bg-white/10" />

  {/* DESKTOP — Counter */}
  <span className="hidden lg:block font-mono text-xs text-white/40">
    0{index + 1} / 0{benefits.length}
  </span>

</div>

          </div>

          {/* --- Right Column: The Stage --- */}
          <div className="lg:w-3/5 relative bg-white flex items-center p-12 md:p-20 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ x: direction > 0 ? 24 : -24, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -24 : 24, opacity: 0 }}
                transition={{
                  duration: 0.32,
                  ease: [0.215, 0.61, 0.355, 1], // premium cubic easing
                }}
                className="flex flex-col gap-6"
              >
                {/* Highlight */}
                <motion.span
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.08,
                    duration: 0.22,
                    ease: "easeOut",
                  }}
                  className="text-biz-bronze font-serif italic text-2xl"
                >
                  {benefits[index].highlight}
                </motion.span>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.14,
                    duration: 0.24,
                    ease: "easeOut",
                  }}
                  className="text-3xl md:text-5xl font-light text-biz-charcoal-ink tracking-tight"
                >
                  {benefits[index].title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2,
                    duration: 0.26,
                    ease: "easeOut",
                  }}
                  className="text-lg md:text-xl text-biz-charcoal-soft font-light leading-relaxed max-w-lg"
                >
                  {benefits[index].text}
                </motion.p>
              </motion.div>
            </AnimatePresence>


          </div>
        </div>

      </motion.div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-3 mt-12">
        {benefits.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
              resetTimer();
            }}
            className={`h-1.5 transition-all duration-500 rounded-full ${i === index ? 'w-12 bg-biz-bronze' : 'w-3 bg-biz-charcoal-ink/10 hover:bg-biz-charcoal-ink/30'}`}
          />
        ))}
      </div>

    
    
    </section >
  );
}
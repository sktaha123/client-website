import React, { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const benefits = [
  { title: "Proven Legacy",         highlight: "60+ Years",       text: "Built on over six decades of operational excellence, industry relationships, and institutional trust that consistently delivers stability, foresight, and long-term value to partners." },
  { title: "Global Standards",      highlight: "100% Compliant",  text: "End-to-end compliance aligned with international labour laws, data protection policies, and regulatory frameworks across India, UAE, and global markets." },
  { title: "Strategic Reach",       highlight: "Cross-Border",    text: "A dual-market operational presence combining deep regional insight with global execution capability, enabling seamless cross-border workforce solutions." },
  { title: "Digital First",         highlight: "Tech-Enabled",    text: "Technology-enabled hiring, workforce management, and reporting systems designed for transparency, speed, accuracy, and real-time decision making." },
  { title: "Human Centric",         highlight: "Always On",       text: "People-first engagement model with dedicated account leadership, responsive support teams, and continuous alignment to client objectives." },
  { title: "Execution Precision",   highlight: "Process-Led",     text: "Process-driven delivery frameworks that ensure predictable outcomes, minimised risk, and consistent service quality across all engagement stages." },
  { title: "Scalable Solutions",    highlight: "Built to Scale",  text: "Flexible workforce models engineered to scale rapidly with business demand — without compromising compliance, quality, or cultural alignment." },
  { title: "Market Intelligence",   highlight: "Insight Driven",  text: "Data-backed insights, salary benchmarking, and talent availability analysis that empower informed workforce and expansion decisions." },
  { title: "Risk Mitigation",       highlight: "Risk Secure",     text: "Proactive governance, contractual safeguards, and compliance monitoring designed to reduce operational, legal, and reputational exposure." },
  { title: "Partnership Mindset",   highlight: "Trusted Ally",    text: "We operate as an extension of your organisation — aligning strategy, execution, and accountability to deliver long-term business outcomes." },
];

export function Whychooseus() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef(null);

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((p) => (p + 1) % benefits.length);
    }, 5000);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [resetTimer]);

  const go = (dir) => {
    setDirection(dir);
    setIndex((p) => (p + dir + benefits.length) % benefits.length);
    resetTimer();
  };

  const fmt = (n) => (n < 10 ? `0${n}` : n);

  return (
    <div className="bg-biz-cream font-dm min-h-screen">

      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 pt-16 pb-10 md:pt-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-biz-bronze mb-4">
          The Advantage
        </p>
        <h1 className="text-[48px] md:text-[64px] font-light text-biz-charcoal-ink leading-[1.05] tracking-[-0.03em] max-w-[560px]">
          Why industry leaders trust{" "}
          <em className="text-biz-bronze not-italic">BiznorX.</em>
        </h1>
      </div>

      {/* Split Card */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 pb-24 md:pb-32">
        <div className="grid lg:grid-cols-12 overflow-hidden rounded-2xl border border-biz-charcoal/8 bg-white shadow-[0_4px_40px_rgba(45,34,25,0.06)]">

          {/* Left Dark Pane */}
          <div className="lg:col-span-4 bg-biz-charcoal-ink p-10 md:p-14 flex flex-col justify-between">
            <div>
              

              {/* Visible list mini */}
              <div className="space-y-3 mt-4">
                {benefits.map((b, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); resetTimer(); }}
                    className={`block w-full text-left text-[13px] font-medium transition-all duration-300 ${i === index ? "text-white" : "text-white/25 hover:text-white/50"}`}
                  >
                    {b.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Nav */}
            <div className="flex items-center gap-4 mt-10">
              <button onClick={() => go(-1)} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/8 transition-colors active:scale-95">
                <ArrowLeft size={16} className="text-white/60" />
              </button>
              <button onClick={() => go(1)} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/8 transition-colors active:scale-95">
                <ArrowRight size={16} className="text-white/60" />
              </button>
              <span className="ml-auto text-[11px] font-mono text-white/25">
                {fmt(index + 1)} / {fmt(benefits.length)}
              </span>
            </div>
          </div>

          {/* Right Content Pane */}
          <div className="lg:col-span-8 p-10 md:p-20 flex items-center min-h-[400px] relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ x: direction > 0 ? 40 : -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -40 : 40, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-[500px]"
              >
                <p className="text-biz-bronze text-[18px] md:text-[22px] font-light italic mb-4">
                  {benefits[index].highlight}
                </p>
                <h2 className="text-[38px] md:text-[52px] font-light text-biz-charcoal-ink leading-tight tracking-[-0.02em] mb-6">
                  {benefits[index].title}
                </h2>
                <p className="text-[15px] md:text-[16px] text-biz-charcoal-soft leading-[1.8]">
                  {benefits[index].text}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Big number watermark */}
            <div className="absolute -right-4 -bottom-6 text-[160px] font-light text-biz-charcoal/4 leading-none select-none pointer-events-none">
              {fmt(index + 1)}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Whychooseus;
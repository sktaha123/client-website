import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Strategic Analysis",
    subtitle: "Understanding your organisation.",
    desc: "We dive deep into your organisational DNA to identify the exact talent gaps and cultural requirements needed for sustainable growth.",
  },
  {
    id: "02",
    title: "Precision Sourcing",
    subtitle: "Finding the right people.",
    desc: "Leveraging our 60-year network and AI-driven tools, we pinpoint candidates who don't just fill a role — but elevate it.",
  },
  {
    id: "03",
    title: "Seamless Integration",
    subtitle: "Making it work across borders.",
    desc: "From EOR compliance to cultural onboarding, we manage the complexities of deployment across India and the UAE.",
  },
  {
    id: "04",
    title: "Continuous Optimisation",
    subtitle: "Sustained long-term performance.",
    desc: "Our partnership doesn't end at hiring. We provide ongoing support and upskilling to ensure long-term operational excellence.",
  },
];

// Apple's signature smooth ease curve
const appleEase = [0.16, 1, 0.3, 1];
const CYCLE_TIME = 4000; // 4 seconds per step

export function Process() {
  const [active, setActive] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  
  // Array of refs to track each accordion item's position
  const stepRefs = useRef([]);

  // Auto-play time switch
  useEffect(() => {
    if (!autoPlay) return;
    const t = setInterval(() => {
      setActive((prev) => (prev !== null ? (prev + 1) % steps.length : 0));
    }, CYCLE_TIME);
    return () => clearInterval(t);
  }, [active, autoPlay]);

  // Smooth scroll active item into the center of the view
  useEffect(() => {
    if (active !== null && stepRefs.current[active]) {
      // Small timeout allows the Framer Motion height animation to start
      // so the browser calculates the scroll target accurately.
      const timeoutId = setTimeout(() => {
        stepRefs.current[active].scrollIntoView({
          behavior: "smooth",
          block: "center", // Centers the active item beautifully on screen
        });
      }, 150);
      return () => clearTimeout(timeoutId);
    }
  }, [active]);

  const toggleAccordion = (index) => {
    setAutoPlay(false);
    setActive(active === index ? null : index);
  };

  return (
    <div className="bg-biz-cream font-dm py-16 md:pt-10 md:pb-20 selection:bg-biz-bronze selection:text-white flex justify-center">
      
      {/* ── Constraint Container ── */}
      <div className="w-full max-w-[1100px] mx-auto px-6 lg:px-12">
        
        {/* ── Cinematic Header ── */}
        <div className="mb-12 md:mb-16">
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: appleEase }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-biz-charcoal-ink leading-[1.05] tracking-tighter"
          >
            A systematic approach to <br className="hidden md:block" />
            <span className="font-medium text-biz-bronze">unmatched precision.</span>
          </motion.h2>
        </div>

        {/* ── Typographic Accordion List ── */}
        <div className="border-t border-biz-charcoal/15">
          {steps.map((step, i) => {
            const isActive = active === i;

            return (
              <div 
                key={step.id} 
                ref={(el) => (stepRefs.current[i] = el)} // Attach ref to each step
                className="border-b border-biz-charcoal/15 overflow-hidden"
              >
                
                {/* ── Accordion Trigger ── */}
                <button
                  onClick={() => toggleAccordion(i)}
                  className="w-full flex items-center justify-between py-6 md:py-8 text-left outline-none group"
                >
                  <div className="flex items-center gap-6 md:gap-10">
                    {/* Fixed-width Number */}
                    <span className={`text-[12px] md:text-[14px] font-mono w-6 md:w-8 transition-colors duration-500 ${
                      isActive ? "text-biz-bronze" : "text-biz-charcoal-soft/50 group-hover:text-biz-charcoal-soft"
                    }`}>
                      {step.id}
                    </span>
                    
                    {/* Title */}
                    <span className={`text-xl md:text-2xl lg:text-3xl font-medium tracking-tight transition-colors duration-500 ${
                      isActive ? "text-biz-charcoal-ink" : "text-biz-charcoal-soft group-hover:text-biz-charcoal-ink"
                    }`}>
                      {step.title}
                    </span>
                  </div>

                  {/* Animated Minimalist Toggle */}
                  <motion.div 
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.5, ease: appleEase }}
                    className={`shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors duration-500 ${
                      isActive 
                        ? "bg-biz-charcoal-ink text-white" 
                        : "bg-transparent border border-biz-charcoal/15 text-biz-charcoal-soft group-hover:border-biz-charcoal/30 group-hover:text-biz-charcoal-ink"
                    }`}
                  >
                    <Plus size={18} strokeWidth={isActive ? 2 : 1.5} />
                  </motion.div>
                </button>

                {/* ── Accordion Content ── */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: appleEase }}
                    >
                      <div className="pb-8 md:pb-12 pl-[48px] md:pl-[72px] pr-8 md:pr-16">
                        <div className="max-w-2xl">
                          <h4 className="text-lg md:text-xl font-medium text-biz-charcoal-ink mb-3 tracking-tight">
                            {step.subtitle}
                          </h4>
                          <p className="text-[15px] md:text-[16px] text-biz-charcoal-soft font-light leading-relaxed">
                            {step.desc}
                          </p>

                          {/* Time Switch Progress Bar */}
                          {autoPlay && (
                            <div className="mt-8 h-[2px] w-full max-w-[160px] bg-biz-charcoal/10 relative overflow-hidden rounded-full">
                              <motion.div
                                key={`progress-${active}`}
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: CYCLE_TIME / 1000, ease: "linear" }}
                                className="absolute inset-y-0 left-0 bg-biz-bronze"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default Process;
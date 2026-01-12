import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, UserCheck, Settings, Rocket, Plus, Minus } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Strategic Analysis",
    icon: Search,
    desc: "We dive deep into your organizational DNA to identify the exact talent gaps and cultural requirements needed for sustainable growth.",
  },
  {
    id: "02",
    title: "Precision Sourcing",
    icon: UserCheck,
    desc: "Leveraging our 60-year network and AI-driven tools, we pinpoint candidates who don't just fill a role but elevate it.",
  },
  {
    id: "03",
    title: "Seamless Integration",
    icon: Settings,
    desc: "From EOR compliance to cultural onboarding, we manage the complexities of deployment across India and the UAE.",
  },
  {
    id: "04",
    title: "Continuous Optimization",
    icon: Rocket,
    desc: "Our partnership doesn't end at hiring. We provide ongoing support and upskilling to ensure long-term operational excellence.",
  }
];

export function Process() {
  const [active, setActive] = useState(0);

  // Corrected Auto-cycle logic:
  // Adding 'active' to the dependency array ensures the 6s timer 
  // restarts from scratch whenever a user manually clicks a step.
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [active]); // 🔹 Reset timer on every state change

  return (
    <section className="py-3 bg-biz-cream font-dm" style={{ minHeight: 'calc(90vh - 96px)' }}>
      <motion.div
        className="max-w-5xl mx-auto px-6 w-full relative z-10"
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.215, 0.61, 0.355, 1],
        }}
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Compact Professional Header */}
        <div className="mb-10 md:mb-10 text-center lg:text-left">
          <span className="text-biz-bronze font-bold tracking-ultra uppercase text-[10px]">
            Execution Roadmap
          </span>

          <h2 className="text-4xl md:text-5xl text-biz-charcoal-ink font-light tracking-tightest mt-2 leading-tight">
            A systematic approach to <br />
            <span className="text-biz-bronze font-serif ">unmatched</span> operational precision.
          </h2>
        </div>

        {/* Vertical Pipeline */}
        <div className="space-y-4">
          {steps.map((step, i) => (
            <div
              key={step.id}
              className={`group transition-all duration-500 border-b border-biz-charcoal-ink/5 ${
                active === i ? "pb-8" : "pb-4"
              }`}
            >
              <button
                onClick={() => setActive(i)}
                className="w-full flex items-center justify-between text-left py-4"
              >
                <div className="flex items-center gap-8">
                  <span className={`text-sm font-mono transition-colors duration-300 ${
                    active === i ? "text-biz-bronze" : "text-biz-charcoal-soft/40"
                  }`}>
                    {step.id}
                  </span>
                  <h3 className={`text-xl md:text-2xl transition-all duration-300 ${
                    active === i ? "text-biz-charcoal-ink font-semibold translate-x-1" : "text-biz-charcoal-soft font-light"
                  }`}>
                    {step.title}
                  </h3>
                </div>

                <div className={`p-2 rounded-full transition-all duration-300 ${
                  active === i ? "bg-biz-bronze text-white rotate-0" : "bg-biz-cream text-biz-charcoal-ink/40 rotate-90"
                }`}>
                  {active === i ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <div className="grid md:grid-cols-12 gap-8 pt-4 pl-12 md:pl-16">
                      <div className="md:col-span-8">
                        <p className="text-lg text-biz-bronze font-light leading-relaxed">
                          {step.desc}
                        </p>

                        {/* Progress Indicator - Synced with the 6s timer */}
                        <div className="mt-8 h-[1px] w-full bg-biz-cream relative overflow-hidden">
                          <motion.div
                            key={`bar-${i}`}
                            initial={{ x: "-100%" }}
                            animate={{ x: "0%" }}
                            transition={{ duration: 6, ease: "linear" }}
                            className="absolute inset-0 bg-biz-bronze"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Process;
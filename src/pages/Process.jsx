import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, UserCheck, Settings, Rocket } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Strategic Analysis",
    icon: Search,
    desc: "We dive deep into your organizational DNA to identify the exact talent gaps and cultural requirements needed for sustainable growth.",
    color: "bg-biz-sand"
  },
  {
    id: "02",
    title: "Precision Sourcing",
    icon: UserCheck,
    desc: "Leveraging our 60-year network and AI-driven tools, we pinpoint candidates who don't just fill a role but elevate it.",
    color: "bg-biz-bronze-pale"
  },
  {
    id: "03",
    title: "Seamless Integration",
    icon: Settings,
    desc: "From EOR compliance to cultural onboarding, we manage the complexities of deployment across India and the UAE.",
    color: "bg-biz-charcoal-ink text-biz-cream-light"
  },
  {
    id: "04",
    title: "Continuous Optimization",
    icon: Rocket,
    desc: "Our partnership doesn't end at hiring. We provide ongoing support and upskilling to ensure long-term operational excellence.",
    color: "bg-biz-bronze text-white"
  }
];

const Process = () => {
  const [active, setActive] = useState(0);

  // Auto-cycle the process steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full flex flex-col justify-center px-6">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header - Compact for 90vh */}
        <div className="mb-10">
          <span className="text-biz-bronze text-[10px] font-black uppercase tracking-ultra">Our Methodology</span>
          <h2 className="text-4xl md:text-5xl text-biz-charcoal-ink font-light tracking-tightest mt-2">
            The <span className="text-biz-bronze italic font-serif">Roadmap</span> to Success
          </h2>
        </div>

        {/* Main Process Area */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT: Visual Progress Track */}
          <div className="lg:col-span-4 flex lg:flex-col gap-4">
            {steps.map((step, i) => (
              <button
                key={step.id}
                onClick={() => setActive(i)}
                className={`relative flex items-center gap-6 p-4 rounded-xl transition-all duration-500 text-left ${
                  active === i ? "bg-white shadow-xl shadow-biz-charcoal/5 scale-105 z-10" : "opacity-40 grayscale hover:grayscale-0 hover:opacity-100"
                }`}
              >
                <span className="text-2xl font-serif italic text-biz-bronze">{step.id}</span>
                <div className="flex flex-col">
                  <span className="text-xs font-black uppercase tracking-widest text-biz-bronze">Step</span>
                  <span className="text-sm font-bold text-biz-charcoal">{step.title}</span>
                </div>
                {active === i && (
                  <motion.div 
                    layoutId="activeGlow" 
                    className="absolute inset-0 border-2 border-biz-bronze/20 rounded-xl" 
                  />
                )}
              </button>
            ))}
          </div>

          {/* RIGHT: Dynamic Stage Detail */}
          <div className="lg:col-span-8 relative min-h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`w-full h-full p-12 md:p-16 rounded-biz-xl shadow-2xl relative overflow-hidden ${steps[active].color}`}
              >
                <div className="relative z-10 flex flex-col justify-center h-full">
                  <div className="mb-8 p-4 bg-white/10 backdrop-blur-md rounded-2xl w-fit">
                    {React.createElement(steps[active].icon, { size: 40 })}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-light mb-6 leading-tight">
                    {steps[active].title}
                  </h3>
                  <p className="text-lg md:text-xl font-light opacity-80 leading-relaxed max-w-xl">
                    {steps[active].desc}
                  </p>
                </div>

                {/* Vertical Progress Bar */}
                <div className="absolute right-0 top-0 w-1.5 h-full bg-black/5">
                  <motion.div 
                    key={`bar-${active}`}
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    className="w-full bg-biz-bronze"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;
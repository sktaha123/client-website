import React, { useState, useCallback, useMemo } from "react";
import {
  Search,
  Lightbulb,
  Rocket,
  LineChart,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Understand Business Needs",
    description: "Deep-dive consultation to identify your unique workforce challenges.",
    details: ["Business assessment", "Gap analysis", "Requirements mapping"],
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Design Workforce Strategy",
    description: "Custom solutions tailored to your industry and compliance requirements.",
    details: ["Workforce planning", "Compliance design", "Budget optimization"],
  },
  {
    number: "03",
    icon: Rocket,
    title: "Deploy & Manage Talent",
    description: "Seamless onboarding and integration of qualified professionals.",
    details: ["Rapid deployment", "Onboarding process", "Performance tracking"],
  },
  {
    number: "04",
    icon: LineChart,
    title: "Optimize, Scale & Support",
    description: "Continuous monitoring and analytics for sustained success.",
    details: ["Real-time analytics", "Scalability planning", "24/7 support"],
  },
];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(null);

  // Memoize toggle to prevent re-creation on render
  const handleToggle = useCallback((index) => {
    setActiveStep((prev) => (prev === index ? null : index));
  }, []);

  const handleMouseEnter = useCallback((index) => {
    if (window.innerWidth >= 1024) setActiveStep(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (window.innerWidth >= 1024) setActiveStep(null);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-[#FAF9F6] font-dm overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Header --- */}
        <div className="mb-12 md:mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#8B7E6A] font-medium tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block"
          >
            Our Approach
          </motion.span>
          <h2 className="text-3xl md:text-6xl text-[#2D2D2D] font-light leading-tight max-w-3xl">
            A Disciplined <span className="text-[#8B7E6A] italic">Strategic</span> Roadmap
          </h2>
        </div>

        {/* --- Process Container --- */}
        <div className="relative">
          {/* Background Lines promoted to GPU layers */}
          <div className="hidden lg:block absolute top-[45px] left-0 w-full h-[1px] bg-[#8B7E6A]/20 pointer-events-none transform-gpu" />
          <div className="lg:hidden absolute left-[39px] top-0 bottom-0 w-[1px] bg-[#8B7E6A]/20 pointer-events-none transform-gpu" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12 relative">
            {steps.map((step, index) => (
              <StepItem 
                key={index}
                step={step}
                index={index}
                isActive={activeStep === index}
                onToggle={handleToggle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-component to prevent parent re-renders when only one card changes
const StepItem = React.memo(({ step, index, isActive, onToggle, onMouseEnter, onMouseLeave }) => {
  const Icon = step.icon;

  return (
    <div 
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={onMouseLeave}
      onClick={() => onToggle(index)}
      className="group relative cursor-pointer outline-none transform-gpu"
      role="button"
      aria-expanded={isActive}
      tabIndex={0}
    >
      {/* Step Marker */}
      <div className="flex items-center gap-6 lg:block lg:mb-8">
        <div className={`
          relative z-10 w-20 h-20 rounded-full flex items-center justify-center
          transition-all duration-500 border shrink-0 will-change-transform
          ${isActive 
            ? "bg-[#8B7E6A] border-[#8B7E6A] shadow-xl shadow-[#8B7E6A]/20 scale-105" 
            : "bg-white border-[#8B7E6A]/20"}
        `}>
          <Icon className={`h-7 w-7 transition-colors duration-500 ${isActive ? "text-white" : "text-[#8B7E6A]"}`} />
          <span className={`
            absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold border
            transition-colors duration-500
            ${isActive ? "bg-[#2D2219] text-white border-[#2D2219]" : "bg-[#EAE4D9] text-[#2D2219] border-white"}
          `}>
            {step.number}
          </span>
        </div>

        <div className="lg:hidden flex-1">
           <h3 className="text-lg font-semibold text-[#2D2D2D]">{step.title}</h3>
           <div className="flex items-center gap-1 text-[#8B7E6A] text-[10px] font-bold uppercase tracking-widest mt-1">
              {isActive ? "Close" : "View Details"}
              <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} />
           </div>
        </div>
      </div>

      {/* Content Card - Optimized with Framer Motion for Height animations */}
      <motion.div 
        initial={false}
        animate={{ 
          backgroundColor: isActive ? "#ffffff" : "transparent",
          borderColor: isActive ? "rgba(139, 126, 106, 0.3)" : "rgba(0,0,0,0)",
          y: isActive ? -5 : 0
        }}
        className={`
          relative transition-shadow duration-500 border rounded-[2rem] md:rounded-[2.5rem]
          lg:block overflow-hidden
          ${isActive ? "shadow-2xl p-6 md:p-8 mt-4 lg:mt-0" : "p-0 lg:p-8"}
        `}
      >
        <h3 className="hidden lg:block text-xl font-semibold text-[#2D2D2D] mb-4">
          {step.title}
        </h3>
        
        {/* Description visibility optimized */}
        <div className={`transition-opacity duration-300 ${isActive ? 'opacity-100' : 'hidden lg:block opacity-60'}`}>
          <p className="text-[#6B5E4C] text-sm leading-relaxed mb-6 font-light">
            {step.description}
          </p>
        </div>

        {/* Height animation using Framer Motion (GPU accelerated) instead of CSS max-height */}
        <AnimatePresence>
          {isActive && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="space-y-3"
            >
              {step.details.map((detail, dIndex) => (
                <div key={dIndex} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#8B7E6A]" />
                  <span className="text-xs text-[#8B7E6A] font-medium tracking-wide">
                    {detail}
                  </span>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div className={`hidden lg:flex items-center gap-2 text-[#8B7E6A] mt-4 transition-opacity ${isActive ? 'opacity-0' : 'opacity-50'}`}>
            <span className="text-[10px] font-bold uppercase tracking-widest">Explore</span>
            <ChevronRight className="h-3 w-3" />
        </div>
      </motion.div>
    </div>
  );
});
import React, { useState, useEffect } from "react";
import {
  Users, Layers, UserPlus, HardHat,
  Globe, GraduationCap, Laptop
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { id: "01", icon: Users, title: "Executive Recruitment", cat: "EXECUTIVE", desc: "Tailored hiring solutions connecting businesses with talent that ensures cultural fit and long-term success. Finding leaders who drive growth.", bg: "bg-biz-sand" },
  { id: "02", icon: Layers, title: "Bulk Recruitment", cat: "OPERATIONS", desc: "Efficient large-scale hiring designed to meet urgent demands without compromising quality. Precision and speed for high-volume needs.", bg: "bg-biz-bronze-pale" },
  { id: "03", icon: UserPlus, title: "EOR Services", cat: "COMPLIANCE", desc: "Staffing & Employer of Record solutions that simplify compliance, payroll, and HR management across borders.", bg: "bg-biz-charcoal-ink text-biz-cream-light" },
  { id: "04", icon: HardHat, title: "Blue Collar Hiring", cat: "MANPOWER", desc: "Specialized recruitment for skilled and semi-skilled workers, supporting operational excellence and industrial demand.", bg: "bg-biz-bronze text-white" },
  { id: "05", icon: Globe, title: "Global Placement", cat: "FRONTIER", desc: "International recruitment expertise bridging markets and helping professionals expand across borders with ease.", bg: "bg-biz-sand" },
  { id: "06", icon: GraduationCap, title: "Training Academy", cat: "ACADEMY", desc: "Customized upskilling programs to enhance productivity and prepare teams for evolving industry needs.", bg: "bg-biz-bronze-pale" },
  { id: "07", icon: Laptop, title: "Technical Consulting", cat: "INNOVATION", desc: "Strategic consulting blending technical expertise with insight for sustainable business innovation and digital shifts.", bg: "bg-biz-charcoal-ink text-biz-cream-light" },
];

export function Services() {
  const [active, setActive] = useState(0);
  const [isAuto, setIsAuto] = useState(true);

  useEffect(() => {
    if (!isAuto) return;

    // Resetting the timer whenever 'active' or 'isAuto' changes
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [active, isAuto]); // 🔹 Added 'active' here to reset the 5s clock on every change

  return (
    <section
      id="services"
      className="relative bg-biz-cream font-dm flex items-center overflow-hidden"
      style={{ minHeight: "calc(90vh - 96px)" }}
    >
      <motion.div
        className="max-w-7xl mx-auto px-6 w-full"
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.215, 0.61, 0.355, 1], // premium cubic easing
        }}
        viewport={{ once: true, margin: "-80px" }}
      >


        {/* 🔹 SECTION HEADING */}
        <div className="mb-10 md:mb-0 text-center lg:text-left">
          <span className="text-biz-bronze font-bold tracking-ultra uppercase text-[10px]">
            Ecosystem
          </span>
          <h2 className="text-4xl md:text-5xl text-biz-charcoal-ink font-light tracking-tightest mt-2">
            Our <span className="text-biz-bronze font-serif">Services</span>
          </h2>
        </div>

        {/* 🔹 CONTENT GRID */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">

          {/* RIGHT SECTION → FOCUS CARD */}
          <div className="order-1 lg:order-2 lg:col-span-7 md:mb-10 relative flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                className={`w-full p-10 md:p-16 rounded-biz shadow-2xl relative overflow-hidden min-h-[420px] ${services[active].bg}`}
              >
                <div className="absolute -bottom-10 -right-10 opacity-5 rotate-12">
                  {React.createElement(services[active].icon, { size: 240 })}
                </div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-12">
                    <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl">
                      {React.createElement(services[active].icon, { size: 28 })}
                    </div>
                    <span className="text-[10px] font-black tracking-ultra opacity-50 uppercase">
                      Category: {services[active].cat}
                    </span>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
                    {services[active].title}
                  </h3>

                  <p className="text-lg md:text-xl leading-relaxed font-light opacity-80 max-w-md">
                    {services[active].desc}
                  </p>
                </div>

                {/* Auto Progress Bar - Syncs perfectly with the 5s timer */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-black/5">
                  {isAuto && (
                    <motion.div
                      key={`bar-${active}`}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5, ease: "linear" }}
                      className="h-full bg-biz-bronze"
                    />
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* LEFT SECTION → NAVIGATION */}
          <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col justify-center">
            <div className="space-y-1">
              {services.map((service, i) => (
                <button
                  key={service.id}
                  onMouseEnter={() => { setActive(i); setIsAuto(false); }}
                  onMouseLeave={() => setIsAuto(true)}
                  onClick={() => setActive(i)}
                  className={`group flex items-center gap-4 w-full text-left py-3 px-4 rounded-xl transition-all duration-300 ${active === i
                      ? "bg-biz-bronze-pale/20 translate-x-2"
                      : "opacity-40 hover:opacity-100"
                    }`}
                >
                  <span className={`text-[10px] font-bold font-serif italic ${active === i ? "text-biz-bronze" : "text-biz-charcoal"
                    }`}>
                    {service.id}
                  </span>

                  <span className={`text-sm md:text-base font-medium tracking-tight ${active === i ? "text-biz-charcoal-ink" : "text-biz-charcoal-soft"
                    }`}>
                    {service.title}
                  </span>

                  {active === i && (
                    <motion.div
                      layoutId="dot"
                      className="w-1.5 h-1.5 rounded-full bg-biz-bronze ml-auto"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

export default Services;
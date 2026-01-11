import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



import {
  Factory,
  Stethoscope,
  Laptop,
  ShoppingBag,
  Building,
  Truck,
  GraduationCap,
  Hotel,
  Landmark,
  Zap,
  PlaneTakeoff,
  HardHat,
  X,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- Data ---
const allIndustries = [
  { icon: Factory, name: "Manufacturing" },
  { icon: Stethoscope, name: "Healthcare" },
  { icon: Laptop, name: "Technology" },
  { icon: ShoppingBag, name: "Retail" },
  { icon: Building, name: "Real Estate" },
  { icon: Truck, name: "Logistics" },
  { icon: GraduationCap, name: "Education" },
  { icon: Hotel, name: "Hospitality" },
  { icon: Landmark, name: "Banking & Finance" },
  { icon: Zap, name: "Energy" },
  { icon: PlaneTakeoff, name: "Aviation" },
  { icon: HardHat, name: "Construction" },
];

const row1 = allIndustries.slice(0, 6);
const row2 = allIndustries.slice(6, 12);

// --- Marquee Component (Scrolling Rows) ---
const MarqueeRow = ({ items, direction = "left", speed = 40 }) => {
  return (
    <div className="flex overflow-hidden relative w-full py-4 group">
      <motion.div
        className="flex gap-6 whitespace-nowrap"
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: speed }}
        whileHover={{ animationPlayState: "paused" }}
        style={{ width: "max-content" }}
      >
        {[...items, ...items, ...items, ...items].map((industry, index) => {
          const Icon = industry.icon;
          return (
            <div
              key={index}
              className="relative flex items-center gap-4 w-[280px] md:w-[320px] p-6 rounded-xl bg-white border border-biz-charcoal-ink/10 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-biz-bronze/50 hover:bg-biz-cream-light"
            >
              <div className="p-3 bg-biz-cream/50 rounded-lg text-biz-bronze">
                <Icon size={24} strokeWidth={1.5} />
              </div>
              <span className="text-lg font-medium text-biz-charcoal-ink">
                {industry.name}
              </span>
            </div>
          );
        })}
      </motion.div>
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
    </div>
  );
};

// --- Main Component ---
export function Industries() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <section
      className="
    bg-biz-cream font-dm overflow-hidden
    py-20 md:py-11
  "
      style={{ minHeight: "calc(90vh - 96px)" }}
    >

      <motion.div
  className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10"
  initial={{ opacity: 0, y: 48 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.6,
    ease: [0.215, 0.61, 0.355, 1],
  }}
  viewport={{ once: true, margin: "-80px" }}
>

        <span className="text-biz-bronze font-bold tracking-ultra uppercase text-[10px] block mb-4">
          Sector Expertise
        </span>
        <h2 className="text-4xl md:text-5xl text-biz-charcoal-ink font-light tracking-tight">
          Solving workforce challenges across <br />
          <span className="font-serif  text-biz-bronze">
            every major vertical
          </span>
        </h2>
      </motion.div>

      {/* Scrolling Tickers */}
      <div className="flex flex-col ">
        <MarqueeRow items={row1} direction="left" speed={45} />
        <MarqueeRow items={row2} direction="right" speed={45} />
      </div>

      {/* Trigger Button */}
      <div className="text-center mt-12">
        <p className="text-sm text-biz-charcoal-soft mb-4">
          Looking for a specific field?
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="
    relative inline-flex items-center gap-2
    text-biz-charcoal-ink font-bold
    transition-colors duration-300
    hover:text-biz-bronze
    group
  "
        >
          {/* Text */}
          <span className="relative z-10">
            View All Industries
          </span>

          {/* Arrow Icon (45° already by design) */}
          <ArrowUpRight
            className="
      h-4 w-4
      text-biz-bronze
      transition-transform duration-500 ease-out
      group-hover:translate-x-1 group-hover:-translate-y-1
    "
          />

          {/* Animated underline */}
          <span
            className="
      absolute left-0 -bottom-1
      h-[2px] w-full
      bg-biz-bronze
      scale-x-0 origin-left
      transition-transform duration-500 ease-out
      group-hover:scale-x-100
    "
          />
        </button>

      </div>

      {/* --- Full Screen Modal (Capability Statement) --- */}
      {/* --- Full Screen Modal (Capability Statement) --- */}
    <AnimatePresence mode="wait">
  {isOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className="
        fixed inset-0 z-[60]
        flex items-end md:items-center justify-center
        bg-biz-charcoal-ink/60
        backdrop-blur-sm
        p-0 md:p-8
      "
    >
      {/* Modal Content Container */}
      <motion.div
  initial={{ y: "100%", x: 0 }}
  animate={{ y: "0%", x: 0 }}
  exit={{ y: "100%", x: 0 }}
  transition={{
    type: "tween",
    duration: 0.45,
    ease: [0.215, 0.61, 0.355, 1],
  }}
  style={{
    transformOrigin: "center",
    willChange: "transform",
  }}
  className="
    bg-biz-cream
    w-full max-w-6xl
    h-[95vh] md:h-auto md:max-h-[90vh]
    rounded-t-[2rem] md:rounded-[2rem]
    shadow-2xl
    overflow-hidden
    flex flex-col
    relative
  "
>

              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 md:p-8 border-b border-biz-bronze/10 bg-white sticky top-0 z-20">
                <div>
                  <h3 className="text-2xl font-light text-biz-charcoal-ink">
                    Capability Statement
                  </h3>
                  <p className="text-sm text-biz-charcoal-soft mt-1">
                    Comprehensive industry coverage across India & UAE
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-3 bg-biz-cream hover:bg-biz-bronze hover:text-white rounded-full transition-colors duration-300"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable Content Area */}
              <div className="overflow-y-auto grow">
                <div className="p-0 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-biz-bronze/20">
                    {allIndustries.map((industry, index) => {
                      const Icon = industry.icon;
                      return (
                        <div
                          key={index}
                          className="
                      group relative flex items-center justify-between
                      p-8 border-b border-r border-biz-bronze/20
                      transition-all duration-500 ease-out
                      hover:bg-white cursor-default bg-biz-cream
                    "
                        >
                          <div className="flex items-center gap-6">
                            <div className="relative">
                              <div className="absolute inset-0 bg-biz-bronze/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 blur-xl" />
                              <Icon className="h-6 w-6 text-biz-bronze relative z-10 transition-transform duration-500 group-hover:-rotate-12" />
                            </div>
                            <span className="text-lg font-medium text-biz-charcoal tracking-tight transition-colors duration-300 group-hover:text-biz-bronze">
                              {industry.name}
                            </span>
                          </div>

                          <ArrowUpRight className="h-4 w-4 text-biz-bronze/30 opacity-0 -translate-y-2 translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* --- New Niche Statement Footer --- */}
                <div className="p-12 text-center bg-white/50 border-t border-biz-bronze/10">
                  <p className="text-biz-charcoal-soft text-lg font-light mb-4">
                    Can't find your niche?
                  </p>
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-2 text-biz-charcoal-ink font-bold group"
                  >
                    <Link
                      to="/contact"
                      className="border-b-2 border-biz-bronze pb-1 group-hover:text-biz-bronze transition-colors"
                    >
                      Contact Us
                    </Link>

                    <ArrowUpRight className="h-5 w-5 text-biz-bronze group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Industries;
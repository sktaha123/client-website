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

/* ---------------- DATA ---------------- */

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

const industr = {
  Manufacturing: "/industries/manufacturing.webp",
  Healthcare: "/industries/healthcare.webp",
  Technology: "/industries/technology.webp",
  Retail: "/industries/retail.webp",
  "Real Estate": "/industries/real-estate.webp",
  Logistics: "/industries/logistics.webp",
  Education: "/industries/education.webp",
  Hospitality: "/industries/hospitality.webp",
  "Banking & Finance": "/industries/banking-finance.webp",
  Energy: "/industries/energy.webp",
  Aviation: "/industries/aviation.webp",
  Construction: "/industries/construction.webp",
};

const row1 = allIndustries.slice(0, 6);
const row2 = allIndustries.slice(6, 12);

/* ---------------- MARQUEE ---------------- */

const MarqueeRow = ({ items, direction = "left", speed = 45 }) => {
  return (
    <div className="flex overflow-hidden relative w-full py-4 contain-paint">
      <motion.div
        className="flex gap-6 whitespace-nowrap translate-z-0"
        initial={{
          x: direction === "left" ? "0%" : "-50%",
          opacity: 0
        }}
        animate={{
          x: direction === "left" ? "-50%" : "0%",
          opacity: 1
        }}
        transition={{
          x: { repeat: Infinity, ease: "linear", duration: speed },
          opacity: { duration: 1.2, ease: "easeOut" }
        }}
        style={{ width: "max-content", willChange: "transform" }}
      >
        {[...items, ...items, ...items].map((industry, index) => {
          const Icon = industry.icon;

          return (
            <div
              key={index}
              className="
                group relative flex items-center gap-4
                w-[280px] md:w-[320px] md:h-[120px] p-6 rounded-xl
                border border-biz-charcoal-ink/10
                 transition-all duration-300
                hover:shadow-lg hover:border-biz-bronze/50
                overflow-hidden bg-white
                translate-z-0 will-change-transform
              "
            >
              {/* Background Image (merged layers) */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.20)),
                    url(${industr[industry.name]})
                  `,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Foreground */}
              <div className="relative z-10 flex items-center gap-4">
                <div className="p-3 bg-black/30 rounded-lg text-biz-cream">
                  <Icon size={24} strokeWidth={1.5} />
                </div>

                <span className="text-lg font-medium text-biz-cream">
                  {industry.name}
                </span>
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* Edge fades */}

    </div>
  );
};

/* ---------------- MAIN ---------------- */

export function Industries() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <section
      className="bg-biz-cream font-dm overflow-hidden py-20 md:py-8"
      style={{ minHeight: "calc(90vh - 96px)" }}
    >
      {/* Heading */}
      <motion.div
        className="max-w-7xl mx-auto px-6 mb-16 text-center"
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
        viewport={{ once: true, margin: "-80px" }}
      >
        <span className="text-biz-bronze font-bold tracking-ultra uppercase text-[10px] block mb-4">
          Sector Expertise
        </span>
        <h2 className="text-4xl md:text-5xl text-biz-charcoal-ink font-light tracking-tight">
          Solving workforce challenges across <br />
          <span className="font-serif text-biz-bronze">
            every major vertical
          </span>
        </h2>
      </motion.div>

      {/* Marquees */}
      <motion.div
        className="flex flex-col"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1]
        }}
        viewport={{ once: true }}
      >
        <div className="space-y-2">
          <MarqueeRow items={row1} direction="left" speed={50} />
          <MarqueeRow items={row2} direction="right" speed={50} />
        </div>
      </motion.div>

      {/* Trigger */}
      <div className="text-center mt-12">
        <p className="text-sm text-biz-charcoal-soft mb-4">
          Looking for a specific field?
        </p>

        <button
          onClick={() => setIsOpen(true)}
          className="biz-btn biz-btn-outline group"
        >
          <span>View All Industries</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          <div className="btn-gloss" />
        </button>
      </div>

      {/* MODAL */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex items-end md:items-center justify-center bg-biz-charcoal-ink/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.45, ease: [0.215, 0.61, 0.355, 1] }}
              className="bg-biz-cream w-full max-w-6xl h-[95vh] md:h-auto md:max-h-[90vh] rounded-t-[2rem] md:rounded-[2rem] shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-biz-bronze/10 sticky top-0 bg-biz-cream z-20">
                <div>
                  <h3 className="text-2xl font-light text-biz-charcoal-ink">
                    Capability Statement
                  </h3>
                  <p className="text-sm text-biz-charcoal-soft">
                    Comprehensive industry coverage across India & UAE
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-3 bg-biz-cream hover:bg-biz-bronze hover:text-white rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Grid */}
              <div className="overflow-y-auto grow">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-biz-bronze/20">
                  {allIndustries.map((industry, index) => {
                    const Icon = industry.icon;

                    return (
                      <div
                        key={index}
                        className="
                          group relative flex items-center justify-between
                          p-8 border-b border-r border-biz-bronze/20
                          overflow-hidden bg-biz-cream
                          translate-z-0 will-change-transform
                        "
                      >
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage: `
                              linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)),
                              url(${industr[industry.name]})
                            `,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        />

                        <div className="relative z-10 flex items-center gap-6">
                          <div className="relative">
                            <div className="absolute inset-0 bg-biz-bronze/20 rounded-full blur-xl" />
                            <Icon className="h-6 w-6 text-biz-cream relative z-10" />
                          </div>
                          <span className="text-lg font-medium text-biz-cream-dark">
                            {industry.name}
                          </span>
                        </div>


                      </div>
                    );
                  })}
                </div>

                {/* Footer */}
                <div className="p-12 text-center bg-white/50 border-t border-biz-bronze/10">
                  <p className="text-biz-charcoal-soft text-lg font-light mb-4">
                    Can't find your niche?
                  </p>
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-2 font-bold text-biz-charcoal-ink hover:text-biz-bronze"
                  >
                    Contact Us
                    <ArrowUpRight className="h-5 w-5 text-biz-bronze" />
                  </Link>
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

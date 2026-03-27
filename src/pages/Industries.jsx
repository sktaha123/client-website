import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Factory, Stethoscope, Laptop, ShoppingBag, Building, Truck,
  GraduationCap, Hotel, Landmark, Zap, PlaneTakeoff, HardHat,
  X, ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

const industrImages = {
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

// Apple-style smooth easing
const modalEase = [0.25, 1, 0.5, 1];

const MarqueeRow = ({ items, direction = "left", speed = 50 }) => {
  // Triple the array to ensure completely seamless looping
  const loopedItems = [...items, ...items, ...items];

  return (
    <div className="flex overflow-hidden w-full py-3 ">
      <motion.div
        className="flex gap-5 whitespace-nowrap"
        animate={{ x: direction === "left" ? [0, "-33.333%"] : ["-33.333%", 0] }}
        transition={{ repeat: Infinity, ease: "linear", duration: speed }}
        style={{ width: "max-content" }}
      >
        {loopedItems.map((ind, index) => {
          const Icon = ind.icon;
          return (
            <div
              key={index}
              className="relative flex items-center gap-5 w-[300px] md:w-[320px] h-[96px] px-5 rounded-[1.25rem] border border-black/5 hover:border-biz-bronze/30 shadow-md transition-all duration-500 overflow-hidden group shrink-0 cursor-default"
            >
              {/* Always Visible Image with Slow Hover Zoom */}
              <div
                className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-out z-0"
                style={{ backgroundImage: `url(${industrImages[ind.name]})` }}
              />

              {/* Premium Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent group-hover:from-black/90 group-hover:via-black/40 transition-colors duration-500 z-0" />

              <div className="relative z-10 flex items-center gap-4 w-full">
                {/* Glassmorphic Icon Container */}
                <div className="w-12 h-12 rounded-[1rem] bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-biz-bronze/90 group-hover:border-biz-bronze shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-500 shrink-0">
                  <Icon size={20} className="text-white opacity-90 group-hover:opacity-100 transition-opacity duration-500" strokeWidth={1.5} />
                </div>
                <span className="text-[16px] font-medium tracking-tight text-white/90 group-hover:text-white transition-colors duration-500">
                  {ind.name}
                </span>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export function Industries() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <div className="bg-biz-cream font-dm py-24 md:py-10 selection:bg-biz-bronze selection:text-white overflow-hidden">

      {/* ── Cinematic Header ── */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 mb-16 md:mb-20 flex flex-col items-center text-center">
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-biz-charcoal-ink leading-[1.1] tracking-tight max-w-3xl">
          Solving workforce challenges across every{" "}
          <span className="font-medium text-biz-bronze relative inline-block">
            major vertical.
            {/* Subtle underline accent */}
            <span className="absolute bottom-1 left-0 w-full h-[2px] bg-biz-bronze/20 rounded-full"></span>
          </span>
        </h2>
      </div>

      {/* ── Endless Marquees ── */}
      <div className="space-y-1 mb-16 md:mb-20">
        <MarqueeRow items={row1} direction="left" speed={45} />
        <MarqueeRow items={row2} direction="right" speed={50} />
      </div>

      {/* ── CTA ── */}
      <div className="flex flex-col items-center text-center px-6">
        <p className="text-[14px] font-light text-biz-charcoal-soft mb-5">
          Looking for a specific industry?
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="group inline-flex items-center gap-3 bg-biz-charcoal-ink text-biz-cream px-8 py-3.5 rounded-full text-[14px] font-medium hover:bg-biz-bronze transition-colors duration-300 shadow-lg shadow-biz-charcoal-ink/10"
        >
          View All Industries
          <ArrowUpRight size={16} className="opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
        </button>
      </div>

      {/* ── iOS-Style Modal ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-biz-charcoal-ink/40"
            onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
          >
            <motion.div
              initial={{ y: "100%", scale: 0.95, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: "20%", scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: modalEase }}
              className="bg-biz-cream w-full max-w-[950px] h-[85vh] md:h-auto md:max-h-[85vh] rounded-t-[2rem] md:rounded-[2rem] overflow-hidden flex flex-col shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-8 py-6 bg-white/50 backdrop-blur-md border-b border-biz-charcoal/5 sticky top-0 z-20">
                <div>
                  <h3 className="text-[20px] font-semibold text-biz-charcoal-ink tracking-tight">
                    All Industries
                  </h3>
                  <p className="text-[13px] font-light text-biz-charcoal-soft mt-1">
                    Comprehensive coverage across global markets.
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full bg-biz-charcoal/5 hover:bg-biz-charcoal/10 flex items-center justify-center transition-colors"
                >
                  <X size={18} className="text-biz-charcoal" />
                </button>
              </div>

              {/* Modal Grid */}
              <div className="overflow-y-auto flex-1 p-6 md:p-8 hide-scrollbar">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                  {allIndustries.map((ind, i) => {
                    const Icon = ind.icon;
                    return (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.03, duration: 0.4, ease: modalEase }}
                        key={i}
                        className="relative flex flex-col justify-end h-[160px] p-6 rounded-[1.25rem] overflow-hidden group cursor-default shadow-sm border border-white/10"
                      >
                        {/* Modal Card Image */}
                        <div
                          className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-[1.5s] ease-out z-0"
                          style={{ backgroundImage: `url(${industrImages[ind.name]})` }}
                        />
                        {/* Modal Card Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-0" />

                        <div className="relative z-10 flex items-center gap-4 mt-auto">
                          <div className="w-10 h-10 rounded-[0.8rem] bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:bg-biz-bronze/90 transition-colors duration-500">
                            <Icon size={18} className="text-white" strokeWidth={1.5} />
                          </div>
                          <span className="text-[15px] font-medium tracking-tight text-white/95 group-hover:text-white transition-colors duration-500">
                            {ind.name}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Modal Footer / Contact */}
                <div className="pt-10 pb-4 flex flex-col items-center justify-center text-center">
                  <p className="text-[13px] font-light text-biz-charcoal-soft mb-3">
                    Can't find your specific niche?
                  </p>
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="group inline-flex items-center gap-2 text-[14px] font-medium text-biz-charcoal-ink hover:text-biz-bronze transition-colors"
                  >
                    Contact our specialists
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}

export default Industries;
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Apple's signature smooth ease
const appleEase = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: appleEase } },
};

const CTASection = () => {
  return (
    <section className="bg-[#050505] px-6 lg:px-12 py-24 md:py-32 selection:bg-[#A31515] selection:text-white">
      <div className="max-w-[1300px] mx-auto min-h-[50vh] flex flex-col justify-end">
        
        {/* ── Top Structural Line ── */}
        <motion.div 
          initial={{ scaleX: 0 }} 
          whileInView={{ scaleX: 1 }} 
          viewport={{ once: true, amount: 0.1 }} 
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-full h-px bg-white/10 mb-16 md:mb-24 origin-left" 
        />

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-16 lg:gap-12"
        >
          {/* ── LEFT: Giant Typography ── */}
          <div className="flex-1">
            <div className="overflow-hidden pb-1">
              <motion.h2 variants={fadeUp} className="text-[13vw] sm:text-[10vw] lg:text-[120px] font-medium text-white leading-[0.9] tracking-tighter">
                Engineer
              </motion.h2>
            </div>
            
            <div className="overflow-hidden pb-4">
              <motion.h2 variants={fadeUp} className="text-[13vw] sm:text-[10vw] lg:text-[120px] font-light text-white/30 leading-[0.9] tracking-tighter">
                your growth.
              </motion.h2>
            </div>
          </div>

          {/* ── RIGHT: Structural Email Link ── */}
          <motion.div variants={fadeUp} className="shrink-0 pb-2 lg:pb-6 w-full lg:w-auto mt-8 lg:mt-0">
            <a 
              href="mailto:business@biznorx.com?subject=Ready%20to%20Build%20Presence"
              className="group flex items-center justify-between w-full lg:w-auto gap-12 md:gap-24 border-b border-white/20 pb-6 text-white hover:border-[#A31515] transition-colors duration-500 outline-none cursor-pointer"
            >
              <span className="text-[14px] md:text-[16px] font-light uppercase tracking-widest group-hover:text-[#A31515] transition-colors duration-500">
                Build Presence
              </span>
              
              <span className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#A31515] group-hover:scale-105 transition-all duration-500">
                <ArrowUpRight size={20} strokeWidth={1.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
              </span>
            </a>
          </motion.div>
          
        </motion.div>

      </div>
    </section>
  );
};

export default CTASection;
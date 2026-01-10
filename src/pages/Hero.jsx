import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + i * 0.08,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  return (
    <section className="relative min-h-[85vh] md:min-h-[80vh] px-4 md:px-8 md:pt-[10px] font-dm overflow-hidden bg-biz-cream">
      
      {/* Background Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative h-full w-full overflow-hidden rounded-biz shadow-sm will-change-transform"
      >
        
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center will-change-transform transition-transform duration-1000 ease-out hover:scale-105"
          style={{
            backgroundImage: "url('/svgs/heroimage.jpg')",
            backgroundColor: "#2D2219" // Using biz-charcoal hex for the fallback
          }}
        />
        
        {/* Overlay - Using the expanded charcoal shades for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-biz-charcoal-ink/80 via-biz-charcoal/40 to-biz-charcoal-ink/80 pointer-events-none" />

        <div className="relative z-30 flex h-full min-h-[85vh] md:min-h-[95vh] w-full flex-col justify-end pb-12 md:pb-24 px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            
            <div className="md:col-span-7">
              <motion.span 
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-biz-cream-light/90 uppercase tracking-ultra text-[14px] font-bold mb-6 block"
              >
                Workforce Excellence
              </motion.span>
              
              <h1 className="text-biz-cream-light text-5xl md:text-[5.5rem] leading-[1] font-light tracking-tightest">
                <motion.span custom={1} initial="hidden" animate="visible" variants={fadeInUp} className="block will-change-transform">
                  Innovate.
                </motion.span>
                <motion.span custom={2} initial="hidden" animate="visible" variants={fadeInUp} className="block text-biz-bronze italic font-serif will-change-transform">
                  Integrity.
                </motion.span>
                <motion.span custom={3} initial="hidden" animate="visible" variants={fadeInUp} className="block will-change-transform">
                  Building <span className="font-semibold text-biz-cream-light">Futures.</span>
                </motion.span>
              </h1>
            </div>

            <motion.div 
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="md:col-span-5 md:pl-12 flex flex-col items-start gap-8 will-change-transform"
            >
              <p className="text-biz-cream/80 text-lg md:text-xl leading-relaxed max-w-sm font-light">
                Bridging decades of business wisdom with modern execution to help organizations scale with confidence.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href="#cv-upload"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-biz-bronze px-8 py-4 text-biz-cream-light transition-all hover:bg-biz-charcoal shadow-xl shadow-biz-charcoal-ink/20"
                >
                  <span className="relative z-10 font-bold tracking-widest uppercase text-sm">Upload Your CV</span>
                  <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-biz-cream-light/20 transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                  
                  <motion.div 
                    initial={{ x: "-105%" }}
                    whileHover={{ x: "105%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-biz-cream-light/10 to-transparent pointer-events-none"
                  />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Pulse Element */}
        <motion.div 
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.15, 0.25, 0.15] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-biz-bronze blur-[100px] pointer-events-none will-change-transform" 
        />
      </motion.div>
    </section>
  );
}
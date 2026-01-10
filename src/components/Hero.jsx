import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  // Use 'will-change' to tell the browser to promote these elements to their own GPU layer
  // This prevents the browser from re-calculating the layout during animation.
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 }, // Reduced y distance for smoother feel and less paint area
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + i * 0.08, // Slightly tighter delays
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  return (
    <section className="relative min-h-[85vh] md:min-h-[95vh] px-4 md:px-8 pt-8 font-dm overflow-hidden">
      
      {/* Background Container - Added will-change-transform */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative h-full w-full overflow-hidden rounded-[3rem] shadow-sm will-change-transform"
      >
        
        {/* Background Image - Optimized transition-property to 'transform' only */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center will-change-transform transition-transform duration-1000 ease-out hover:scale-105"
          style={{
            backgroundImage: "url('/svgs/heroimage.jpg')",
            // Adding a background color helps during lazy loading
            backgroundColor: "#2D2219" 
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D2219]/70 via-[#2D2219]/30 to-[#2D2219]/70 pointer-events-none" />

        <div className="relative z-30 flex h-full min-h-[85vh] md:min-h-[95vh] w-full flex-col justify-end pb-12 md:pb-24 px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            
            <div className="md:col-span-7">
              <motion.span 
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-[#EAE4D9] uppercase tracking-[0.3em] text-xs font-semibold mb-6 block"
              >
                Workforce Excellence
              </motion.span>
              
              <h1 className="text-white text-5xl md:text-[5.5rem] leading-[1] font-light tracking-tight">
                {/* Wrapped in spans for better paint performance than animating whole blocks */}
                <motion.span custom={1} initial="hidden" animate="visible" variants={fadeInUp} className="block will-change-transform">
                  Innovate.
                </motion.span>
                <motion.span custom={2} initial="hidden" animate="visible" variants={fadeInUp} className="block text-[#f6e3c7] md:text-[#8B7E6A] italic will-change-transform">
                  Integrity.
                </motion.span>
                <motion.span custom={3} initial="hidden" animate="visible" variants={fadeInUp} className="block will-change-transform">
                  Building <span className="font-semibold">Futures.</span>
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
              <p className="text-[#FAF9F6]/80 text-lg md:text-xl leading-relaxed max-w-sm font-light">
                Bridging decades of business wisdom with modern execution to help organizations scale with confidence.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href="#cv-upload"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#8B7E6A] px-8 py-4 text-white transition-all hover:bg-[#6B5E4C] shadow-xl shadow-[#2D2219]/20"
                >
                  <span className="relative z-10 font-medium">Upload Your CV</span>
                  <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                  
                  {/* Performance fix: Use x translate instead of left for the shine */}
                  <motion.div 
                    initial={{ x: "-105%" }}
                    whileHover={{ x: "105%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
                  />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* performance: use 'opacity' and 'transform' only for the pulse */}
        <motion.div 
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.15, 0.25, 0.15] 
          }}
          transition={{ 
            duration: 10, // Slower duration = lower CPU usage
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-[#8B7E6A] blur-[100px] pointer-events-none will-change-transform" 
        />
      </motion.div>
    </section>
  );
};

export default Hero;
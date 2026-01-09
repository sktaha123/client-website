import React from "react";
import { Network, ShieldCheck, Zap, Globe } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  // Use performance-optimized variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Faster staggering for better perceived performance
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.7, 
        ease: [0.215, 0.61, 0.355, 1], // Cubic-bezier is smoother than ease-out
      },
    },
  };

  const attributes = [
    { text: "Trust-driven", icon: <ShieldCheck className="size-3" /> },
    { text: "Technology-enabled", icon: <Zap className="size-3" /> },
    { text: "Globally scalable", icon: <Globe className="size-3" /> },
  ];

  return (
    <section
      id="about"
      className="pt-32 pb-24 bg-[#FAF9F6] font-dm overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }} // Smaller margin fires faster
          className="grid md:grid-cols-12 gap-12 lg:gap-24 items-center"
        >
          
          {/* Visual Content - Left Side */}
          <motion.div variants={itemVariants} className="md:col-span-5 relative order-2 md:order-1 will-change-transform">
            <div className="relative rounded-[3.5rem] overflow-hidden aspect-[4/5] shadow-[0_30px_60px_-15px_rgba(45,34,25,0.15)] group transform-gpu">
              {/* Image Performance: Promoted to layer */}
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                alt="Strategic Office Environment"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2219]/40 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

            {/* Floating Metric Card - Optimized with transform-gpu */}
            <motion.div
              initial={{ x: 10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-4 md:-right-12 bg-white/95 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(45,34,25,0.08)] border border-[#8B7E6A]/15 z-20 transform-gpu will-change-transform"
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-[#2D2219] flex items-center justify-center shadow-lg">
                  <Network className="h-6 w-6 text-[#8B7E6A]" />
                </div>
                <div>
                  <div className="text-4xl text-[#2D2219] font-bold tracking-tight">
                    2,500<span className="text-[#8B7E6A]">+</span>
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[#8B7E6A] font-bold mt-1">
                    Global Placements
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Ambient Glow - Fixed performance by using transform over filter if possible */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#8B7E6A]/10 rounded-full blur-[80px] -z-10 pointer-events-none" />
          </motion.div>

          {/* Text Content - Right Side */}
          <div className="md:col-span-7 order-1 md:order-2">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#8B7E6A]/10 rounded-full mb-10 will-change-transform">
              <div className="w-2 h-2 rounded-full bg-[#8B7E6A] shadow-[0_0_8px_#8B7E6A]" />
              <span className="text-[#8B7E6A] text-[11px] font-bold uppercase tracking-[0.3em]">
                Legacy of Excellence
              </span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl text-[#2D2219] mb-10 leading-[1.05] font-light tracking-tight will-change-transform">
              Strategic Partners in <br />
              <span className="text-[#8B7E6A] italic font-serif">Workforce Intelligence</span>
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-8 max-w-2xl will-change-transform">
              <p className="text-2xl text-[#6B5E4C] leading-relaxed font-light">
                Built on <span className="text-[#2D2219] font-medium border-b-2 border-[#8B7E6A]/20">six decades of business legacy</span>, 
                we architect workforce ecosystems.
              </p>

              <p className="text-lg text-[#6B5E4C]/80 leading-relaxed font-light">
                BiznorX bridges the gap between traditional reliability and modern agility across <span className="text-[#2D2219] font-medium">India and the UAE.</span>
              </p>
            </motion.div>

            {/* Key Attributes - Optimized hover performance */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 mt-12"
            >
              {attributes.map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -3, backgroundColor: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-[#8B7E6A]/15 bg-white/40 cursor-default transform-gpu will-change-transform"
                >
                  <div className="text-[#8B7E6A]">{item.icon}</div>
                  <span className="text-sm text-[#2D2219] font-semibold tracking-widest text-[10px] uppercase">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
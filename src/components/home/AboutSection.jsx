import React from "react";
import { Network, ArrowRight, ShieldCheck, Zap, Globe } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
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
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-12 gap-12 lg:gap-24 items-center"
        >
          
          {/* Visual Content - Left Side */}
          <motion.div variants={itemVariants} className="md:col-span-5 relative order-2 md:order-1">
            <div className="relative rounded-[3.5rem] overflow-hidden aspect-[4/5] shadow-[0_30px_60px_-15px_rgba(45,34,25,0.2)] group">
              {/* Professional Abstract Image - Focus on architectural scale/people */}
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                alt="Strategic Office Environment"
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
              />
              {/* Refined Bronze Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2219]/40 via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Metric Card */}
            <motion.div
              initial={{ x: 5, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="absolute -bottom-8 -right-4 md:-right-12 bg-white/90 backdrop-blur-2xl p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(45,34,25,0.12)] border border-[#8B7E6A]/15 z-20"
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-[#2D2219] flex items-center justify-center shadow-lg shadow-[#2D2219]/20">
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
            
            {/* Soft Ambient Glow */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#8B7E6A]/10 rounded-full blur-[100px] -z-10" />
          </motion.div>

          {/* Text Content - Right Side */}
          <div className="md:col-span-7 order-1 md:order-2">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#8B7E6A]/10 rounded-full mb-10">
              <div className="w-2 h-2 rounded-full bg-[#8B7E6A] shadow-[0_0_10px_#8B7E6A]" />
              <span className="text-[#8B7E6A] text-[11px] font-bold uppercase tracking-[0.3em]">
                Legacy of Excellence
              </span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl text-[#2D2219] mb-10 leading-[1.05] font-light tracking-tight">
              Strategic Partners in <br />
              <span className="text-[#8B7E6A] italic font-serif">Workforce Intelligence</span>
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-8 max-w-2xl">
              <p className="text-2xl text-[#6B5E4C] leading-relaxed font-light">
                Built on <span className="text-[#2D2219] font-medium border-b-2 border-[#8B7E6A]/20">six decades of business legacy</span>, 
                we architect workforce ecosystems that define industry standards.
              </p>

              <p className="text-lg text-[#6B5E4C]/80 leading-relaxed font-light">
                BiznorX bridges the gap between traditional reliability and modern agility, 
                delivering compliant, tech-enabled strategies tailored for the unique 
                landscapes of <span className="text-[#2D2219] font-medium">India and the UAE.</span>
              </p>
            </motion.div>

            {/* Key Attributes - Animated Tags */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 mt-12"
            >
              {attributes.map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5, backgroundColor: "#fff", borderColor: "rgba(139,126,106,0.4)" }}
                  className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-[#8B7E6A]/15 bg-white/40 transition-all duration-300 cursor-default"
                >
                  <div className="text-[#8B7E6A]">{item.icon}</div>
                  <span className="text-sm text-[#2D2219] font-semibold tracking-tight uppercase tracking-widest text-[10px]">
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
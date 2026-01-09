import React from "react";
import { ShieldCheck, Zap, Globe, Minus } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 15 },
    view: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <section id="about" className="relative py-24 md:py-48 bg-[#FAF9F6] font-dm overflow-hidden">
      {/* Background Architectural Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#EAE4D9]/20 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-y-16 items-start">
          
          {/* --- TOP: BRANDING & HEADLINE --- */}
          <div className="md:col-span-12 relative mb-12">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-12"
            >
              <span className="text-[11px] font-black uppercase tracking-[0.6em] text-[#8B7E6A]">About BiznorX</span>
              <Minus className="text-[#D9CDBA] w-12" />
            </motion.div>

            <motion.h2 
              initial={fadeIn.initial}
              whileInView={fadeIn.view}
              viewport={{ once: true }}
              transition={fadeIn.transition}
              className="text-6xl md:text-[8.5rem] text-[#2D2219] font-light leading-[0.85] tracking-tighter"
            >
              A new old <br />
              <span className="text-[#8B7E6A] italic font-serif leading-none">business street.</span>
            </motion.h2>
          </div>

          {/* --- MIDDLE: VISUAL & NARRATIVE --- */}
          <div className="md:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl transform-gpu"
            >
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
                alt="BiznorX Heritage" 
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700 ease-in-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#2D2219]/5 mix-blend-multiply pointer-events-none" />
            </motion.div>
            
            {/* Float Caption - Size Balanced */}
            <div className="absolute -bottom-8 -right-8 hidden lg:block bg-[#2D2219] text-white p-10 max-w-sm rounded-sm shadow-2xl transform-gpu">
              <p className="text-sm md:text-base font-light leading-relaxed opacity-90 tracking-tight">
                "Built on six decades of trust and resilience, uniting tradition with digital agility across global markets."
              </p>
            </div>
          </div>

          {/* --- RIGHT: THE NARRATIVE --- */}
          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center space-y-14 md:pt-12">
            <motion.div 
              initial={fadeIn.initial}
              whileInView={fadeIn.view}
              viewport={{ once: true }}
              transition={{ ...fadeIn.transition, delay: 0.1 }}
              className="space-y-10"
            >
              <h3 className="text-4xl md:text-6xl font-light text-[#2D2219] tracking-tight leading-[1.1]">
                Rooted in <span className="italic">integrity</span>, <br /> 
                driven by <span className="text-[#8B7E6A] italic font-serif">innovation.</span>
              </h3>
              
              <div className="space-y-8">
                <p className="text-xl md:text-2xl text-[#6B5E4C] font-light leading-relaxed">
                  We blend the legacy of past generations with the digital speed of tomorrow’s technology to architect workforce ecosystems that stand the test of time.
                </p>
                <p className="text-base md:text-lg text-[#6B5E4C]/80 font-light leading-relaxed max-w-xl">
                  BiznorX is more than a name—it’s a symbol of unity. We empower enterprises across India and the UAE with solutions that bridge traditional reliability and modern agility.
                </p>
              </div>
            </motion.div>

            {/* Structured Detail Grid - Balanced Title Sizes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 pt-12 border-t border-[#D9CDBA]">
              {[
                { label: "01 / INTEGRITY", title: "Trust Driven", icon: <ShieldCheck size={18} /> },
                { label: "02 / SPEED", title: "Tech Enabled", icon: <Zap size={18} /> },
                { label: "03 / SCALE", title: "Global Reach", icon: <Globe size={18} /> }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="space-y-4 group cursor-default transform-gpu"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-[#8B7E6A] group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.4em] text-[#8B7E6A] uppercase">
                      {item.label}
                    </span>
                  </div>
                  <h4 className="text-xl md:text-2xl text-[#2D2219] font-medium group-hover:text-[#8B7E6A] transition-colors duration-300">
                    {item.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
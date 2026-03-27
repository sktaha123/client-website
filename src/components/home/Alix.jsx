import React from "react";
import { motion } from "framer-motion";
import { Workflow, ShieldCheck, Target } from "lucide-react";

const capabilities = [
  {
    Icon: Workflow,
    title: "Smart Matching Engine.",
    description: "Evaluates company requirements against candidate skills to ensure relevance, accuracy, and long-term alignment.",
  },
  {
    Icon: ShieldCheck,
    title: "Bias-Reduced Decisions.",
    description: "Every recommendation is supported by transparent logic, reducing subjectivity in recruitment outcomes.",
  },
  {
    Icon: Target,
    title: "Business-Centric Intelligence.",
    description: "Considers role intent, growth goals, and organizational structure — not just resumes and keywords.",
  },
];

// Apple-style ultra-smooth, slightly longer ease curves
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 1.2, 
      ease: [0.16, 1, 0.3, 1], // Signature Apple smooth ease-out
      delay: i * 0.1 
    },
  }),
};

export default function Alix() {
  return (
    <section className="bg-biz-dark py-28 md:py-40 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">

          {/* Left Column: Typography & Content */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col justify-center"
          >
            
            
            <h2 className="text-[60px] md:text-[80px] font-light text-white leading-none tracking-[-0.03em] mb-8">
              Meet <em className="text-biz-bronze not-italic">Alix.</em>
            </h2>
            
            <p className="text-[16px] text-white/50 leading-[1.75] mb-14 max-w-[480px]">
              Our proprietary intelligence layer that transforms recruitment from guesswork into a structured, data-backed process.
            </p>

            {/* Feature List */}
            <div className="space-y-10">
              {capabilities.map((item, i) => {
                const Icon = item.Icon;
                return (
                  <motion.div
                    key={i}
                    custom={i + 1}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex gap-6 group"
                  >
                    <div className="shrink-0 mt-1 w-11 h-11 rounded-2xl bg-biz-dark-surface flex items-center justify-center border border-white/5 group-hover:border-biz-bronze/30 group-hover:bg-biz-dark-panel transition-all duration-500">
                      <Icon size={18} className="text-biz-sand-muted group-hover:text-biz-bronze-light transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    
                    {/* Feature Text */}
                    <div>
                      <h3 className="text-[16px] font-medium text-white mb-2">{item.title}</h3>
                      <p className="text-[15px] text-white/40 leading-[1.75] max-w-[380px]">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Cinematic Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:h-[800px] flex items-center justify-center"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-linear-to-br from-biz-bronze/10 via-transparent to-transparent blur-3xl pointer-events-none rounded-full" />
            
            {/* Main Image */}
            <div className="relative z-10 w-full rounded-2xl overflow-hidden bg-biz-dark-surface border border-white/5 shadow-[0_0_60px_rgba(0,0,0,0.5)]">
               {/* Note: I kept your image source intact. For the full Apple effect, 
                  ensure this PNG has a transparent background or perfectly matches #1d1d1f 
               */}
              <img
                src="/svgs/Alix1.png"
                alt="Alix AI Interface"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-[2s] ease-out"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
import React from "react";
import { motion } from "framer-motion";

const stats = [
  { num: "5+", label: "Years of expertise" },
  { num: "120+", label: "Projects delivered" },
  { num: "98%", label: "Client satisfaction" },
];

// Apple's signature smooth ease curve
const appleEase = [0.16, 1, 0.3, 1];

// Cinematic Text Reveal (with Blur)
const blurReveal = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: appleEase } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const AboutSection = () => {
  return (
    <section className="bg-biz-cream py-20 md:py-32 border-t border-biz-charcoal/5 overflow-hidden selection:bg-biz-bronze selection:text-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* ═════════════════════════════════════════════════════════ */}
        {/* ── DESKTOP LAYOUT (Split Column) ── */}
        <div className="hidden lg:grid grid-cols-12 gap-24 items-stretch">

          {/* LEFT COLUMN: Text & Stats */}
          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="col-span-7 flex flex-col justify-between h-full py-4"
          >
            {/* Top: Eyebrow & Quote */}
            <div>
              
              
              <motion.blockquote variants={blurReveal} className="text-[56px] font-light text-biz-charcoal-ink leading-[1.1] tracking-tight">
                "Digital isn't a checkbox — it's the{" "}
                <em className="not-italic font-medium text-biz-bronze">storefront</em>{" "}
                of the modern era. We partner only with brands ready to{" "}
                <em className="not-italic font-medium">own their space."</em>
              </motion.blockquote>
            </div>

            {/* Bottom: Stats */}
            <div className="mt-24 pt-12 border-t border-biz-charcoal/10">
              <motion.div variants={staggerContainer} className="grid grid-cols-3 gap-10">
                {stats.map((s, i) => (
                  <motion.div key={i} variants={blurReveal} className="flex flex-col gap-2 relative">
                    <span className="text-[56px] font-light text-biz-charcoal-ink tracking-tighter leading-none">
                      {s.num}
                    </span>
                    <span className="text-[10px] font-bold text-biz-charcoal-soft/60 uppercase tracking-[0.15em] leading-snug pr-2">
                      {s.label}
                    </span>
                    {/* Vertical Divider */}
                    {i !== stats.length - 1 && (
                      <div className="absolute right-[-1.25rem] top-2 bottom-2 w-px bg-biz-charcoal/10" />
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Editorial Image */}
          <div className="col-span-5 flex flex-col justify-center h-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, filter: "blur(15px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, ease: appleEase }}
              className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-biz-sand relative shadow-xl border border-biz-charcoal/5"
            >
              <img
                src="/svgs/digital/team.webp"
                alt="BiznorX Team"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-biz-charcoal-ink/60 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-[18px] font-medium tracking-tight mb-1">BiznorX Team</p>
                <p className="text-white/70 text-[13px] font-light">Built for long-term partnerships</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════ */}
        {/* ── MOBILE & TABLET LAYOUT (Stacked Flow) ── */}
        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          className="lg:hidden flex flex-col gap-12"
        >
          {/* Top: Quote */}
          <div>
            <motion.p variants={blurReveal} className="text-[10px] font-bold uppercase tracking-[0.25em] text-biz-bronze mb-6">
              Our Philosophy
            </motion.p>
            <motion.blockquote variants={blurReveal} className="text-[36px] md:text-[48px] font-light text-biz-charcoal-ink leading-[1.15] tracking-tight">
              "Digital isn't a checkbox — it's the{" "}
              <em className="not-italic font-medium text-biz-bronze">storefront</em>{" "}
              of the modern era. We partner only with brands ready to{" "}
              <em className="not-italic font-medium">own their space."</em>
            </motion.blockquote>
          </div>

          {/* Middle: Editorial Image */}
          <motion.div 
            variants={blurReveal}
            className="w-full aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden bg-biz-sand relative shadow-lg border border-biz-charcoal/5"
          >
            <img
              src="/svgs/digital/team.webp"
              alt="BiznorX Team"
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-biz-charcoal-ink/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white text-[16px] font-medium tracking-tight mb-0.5">BiznorX Team</p>
              <p className="text-white/70 text-[12px] font-light">Built for long-term partnerships</p>
            </div>
          </motion.div>

          {/* Bottom: Stats */}
          <div className="pt-4 border-t border-biz-charcoal/10">
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <motion.div key={i} variants={blurReveal} className="flex flex-col gap-2 relative">
                  <span className="text-[32px] md:text-[48px] font-light text-biz-charcoal-ink tracking-tighter leading-none">
                    {s.num}
                  </span>
                  <span className="text-[9px] md:text-[10px] font-bold text-biz-charcoal-soft/60 uppercase tracking-[0.15em] leading-snug">
                    {s.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
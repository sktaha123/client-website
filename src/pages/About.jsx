import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const slides = [
  {
    tag: "The Heritage",
    title: "A Commitment to Excellence",
    content: "Reputation was currency, and trust was built across generations. We are a modern revival of the old business street—where relationships matter most."
  },
  {
    tag: "The Vision",
    title: "Thoughtful Innovation",
    content: "We unite the wisdom of the past with the velocity of tomorrow. Traditional business ethics seamlessly integrate with digital precision and scalability."
  },
  {
    tag: "The Purpose",
    title: "Character-Led Growth",
    content: "Growth should never come at the cost of character. We build businesses that last, not just scale—uniting markets, cultures, and ambitions."
  }
];

export const About = () => {
  const [index, setIndex] = useState(0);

  // Auto-scroll logic (5 seconds per slide)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="about" 
      className="relative h-screen md:h-[90vh] bg-biz-cream font-dm overflow-hidden flex items-center"
    >
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute left-1/2 top-0 w-px h-full bg-biz-charcoal" />
        <div className="absolute top-1/2 left-0 h-px w-full bg-biz-charcoal" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
        
        {/* --- LEFT: PERMANENT ANCHOR --- */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <span className="text-biz-bronze text-[10px] font-black uppercase tracking-ultra">
              About BiznorX
            </span>
            <div className="h-[1px] w-12 bg-biz-bronze mt-2" />
          </motion.div>

          <h2 className="text-5xl md:text-7xl text-biz-charcoal font-light leading-[1] tracking-tightest mb-8">
            Building businesses <br />
            that <span className="text-biz-bronze italic font-serif">last</span>, not just <br />
            scale.
          </h2>

          <div className="flex items-center gap-4 text-biz-charcoal-soft">
            <Quote className="h-5 w-5 text-biz-bronze/40" />
            <p className="text-lg italic font-light">Rooted in integrity, driven by innovation.</p>
          </div>
        </div>

        {/* --- RIGHT: AUTO-SCROLLING CARDS --- */}
        <div className="relative h-[400px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-biz-cream-light p-10 md:p-14 rounded-biz border border-biz-bronze-pale shadow-2xl flex flex-col justify-center"
            >
              <div className="mb-6 flex justify-between items-center">
                <span className="text-[10px] font-bold text-biz-bronze tracking-[0.3em] uppercase">
                  {slides[index].tag}
                </span>
                <span className="text-xs font-serif italic text-biz-charcoal/30">
                  0{index + 1} / 0{slides.length}
                </span>
              </div>

              <h3 className="text-2xl md:text-4xl text-biz-charcoal font-light mb-6 leading-tight">
                {slides[index].title}
              </h3>

              <p className="text-base md:text-lg text-biz-charcoal-soft font-light leading-relaxed">
                {slides[index].content}
              </p>

              {/* Progress Bar Loader */}
              <div className="absolute bottom-0 left-0 h-1 bg-biz-bronze-pale/20 w-full">
                <motion.div 
                  key={`bar-${index}`}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="h-full bg-biz-bronze"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Background Card Decoration (Stacked Effect) */}
          <div className="absolute inset-0 bg-biz-sand/10 rounded-biz -translate-x-4 translate-y-4 -z-10 border border-biz-bronze-pale/20" />
        </div>

      </div>

      {/* Manual Controls (Optional Overlay) */}
      <div className="absolute bottom-10 right-10 flex gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 transition-all duration-500 rounded-full ${index === i ? "w-8 bg-biz-bronze" : "w-2 bg-biz-bronze-pale"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
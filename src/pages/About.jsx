import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const slideImages = [
  "/cardsimages/about1.webp",
  "/cardsimages/about2.webp",
  "/cardsimages/about3.webp",
];


const slides = [
  {
    tag: "THE HERITAGE",
    title: "Rooted in Integrity",
    content:
      "For over six decades, our legacy has been shaped by resilience and accountability. We unite the wisdom of the past with the intelligence of tomorrow's technology."
  },
  {
    tag: "THE VISION",
    title: "Thoughtful Innovation",
    content:
      "A place where reputation is currency. We bridge traditional business ethics with digital precision, scalability, and global reach across India and the UAE."
  },
  {
    tag: "THE COMMITMENT",
    title: "Character-Led Growth",
    content:
      "Growth should never come at the cost of character. We are a unifying force connecting ambitions—building businesses that last, not just scale."
  }
];


export const About = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [index]);

  const handleNext = () => setIndex((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      id="about"
      className="relative w-full flex pb-5 items-center justify-center overflow-hidden bg-biz-cream"
      style={{ minHeight: "calc(90vh - 96px)" }}
    >
      <motion.div
        className="max-w-7xl mx-auto px-6 w-full relative z-10"
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.215, 0.61, 0.355, 1],
        }}
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* LEFT: STATIC TEXT */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-biz-bronze text-[10px] font-black uppercase tracking-ultra">
                The Narrative
              </span>
              <div className="h-[1px] w-12 bg-biz-bronze-pale" />
            </div>

            <h2 className="text-5xl md:text-6xl text-biz-charcoal-ink font-light leading-[1.1] tracking-tightest">
              A modern <br />
              revival of <br />
              <span className="text-biz-bronze italic font-serif">old ethics.</span>
            </h2>

            <div className="flex items-start gap-3 text-biz-charcoal-soft">
              <Quote className="h-5 w-5 text-biz-bronze/40 shrink-0" />
              <p className="text-lg font-light flex flex-col leading-relaxed">
                <span className="mb-2">
                  At <span className="text-biz-charcoal-ink lg:text-xl font-bold">biznor</span><span className="text-biz-bronze/80 lg:text-xl font-bold">X</span>, we are more than a platform—we are a new old business street. Rooted in integrity and honor, we blend the legacy of past generations with the speed and innovation of tomorrow’s technology.
                </span>
                
                <span className="mb-2">
                  For over 60 years, our legacy has been built on trust and resilience. Today, we carry it forward by empowering entrepreneurs and enterprises with solutions that unite tradition and digital agility.
                </span>
               
                <span>
                  <span className="text-biz-charcoal-ink lg:text-xl font-bold">biznor</span><span className="text-biz-bronze/80 lg:text-xl font-bold">X</span> is more than a name—it’s a commitment to excellence, a promise of innovation, and a symbol of unity across markets.
                </span>
              </p>
            </div>
          </div>

          {/* RIGHT: ANIMATED CARD */}
          <div className="lg:col-span-7 md:pb-20 relative">
            <div className="relative h-[450px] w-full flex items-center justify-center">

              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative w-full p-12 md:p-16 rounded-biz overflow-hidden border border-biz-bronze-pale/20 shadow-[20px_20px_60px_rgba(0,0,0,0.03)]"
                >
                  {/* 🔹 BACKGROUND IMAGE PLACEHOLDER */}
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={slideImages[index]}
                      alt=""
                      loading="eager"
                      className="w-full h-full object-cover opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]"
                    />

                    <div className="absolute inset-0 bg-black/60" />
                  </div>


                  {/* 🔹 CONTENT */}
                  <div className="relative z-10 flex flex-col h-full text-white">
                    <div className="flex justify-between items-center mb-10">
                      <span className="text-biz-bronze-pale text-[15px] font-bold tracking-[0.2em]">
                        {slides[index].tag}
                      </span>
                      <span className="text-white/100 font-serif  text-sm">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-medium mb-6 tracking-tight">
                      {slides[index].title}
                    </h3>

                    <p className="text-lg font-light leading-relaxed mb-10 text-white/80">
                      {slides[index].content}
                    </p>

                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex gap-4">
                        <button
                          onClick={handlePrev}
                          className="group p-2 border-b border-white/20 hover:border-biz-bronze transition-all"
                        >
                          <ChevronLeft className="text-white group-hover:text-biz-bronze transition-colors" size={20} />
                        </button>
                        <button
                          onClick={handleNext}
                          className="group p-2 border-b border-white/20 hover:border-biz-bronze transition-all"
                        >
                          <ChevronRight className="text-white group-hover:text-biz-bronze transition-colors" size={20} />
                        </button>
                      </div>

                      <div className="flex gap-2">
                        {slides.map((_, i) => (
                          <div
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-300 ${index === i ? "w-6 bg-biz-bronze-pale" : "w-1.5 bg-white/30"
                              }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="absolute -z-10 inset-0 border-biz-bronze/5 translate-x-4 translate-y-4 rounded-biz" />
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default About;

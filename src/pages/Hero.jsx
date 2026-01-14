import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Hero() {
  const [index, setIndex] = useState(0);
  const words = [
    { text: "Innovate", class: "text-biz-cream-light" },
    { text: "Integrity", class: "text-biz-bronze italic font-serif" },
    { text: "Inspire", class: "font-semibold text-biz-cream-light" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 4000); // Increased slightly to appreciate the letter animation
    return () => clearInterval(timer);
  }, []);

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
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative h-full w-full overflow-hidden rounded-biz shadow-sm will-change-transform"
      >
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center will-change-transform transition-transform duration-1000 ease-out hover:scale-105"
          style={{
            backgroundImage: "url('/svgs/heroimage.webp')",
            backgroundColor: "#2D2219"
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-biz-charcoal-ink/80 via-biz-charcoal/40 to-biz-charcoal-ink/80 pointer-events-none" />

        <div className="relative z-30 flex h-full min-h-[85vh] md:min-h-[95vh] w-full flex-col justify-end pb-12 md:pb-24 px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">

            <div className="md:col-span-7">
              <motion.span
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-biz-cream-light/90 uppercase tracking-ultra text-[10px] md:text-[14px] font-bold mb-6 block"
              >
                Workforce Excellence
              </motion.span>

              {/* NEXT LEVEL TEXT TRANSITION START */}
              <h1 className="text-biz-cream-light text-6xl md:text-[7.5rem] leading-[1.1] font-light tracking-tightest h-[1.2em] flex items-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index].text}
                    className={`flex will-change-transform ${words[index].class}`}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    {words[index].text.split("").map((char, i) => (
                      <motion.span
                        key={i}
                        variants={{
                          initial: { y: "100%", opacity: 0, rotateX: -90 },
                          animate: { y: 0, opacity: 1, rotateX: 0 },
                          exit: { y: "-100%", opacity: 0, rotateX: 90 }
                        }}
                        transition={{
                          duration: 0.5,
                          delay: i * 0.04,
                          ease: [0.215, 0.61, 0.355, 1]
                        }}
                        className="inline-block origin-bottom"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.span>
                </AnimatePresence>
              </h1>
              {/* NEXT LEVEL TEXT TRANSITION END */}
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

export default Hero;
import React, { useState, useEffect } from "react";
import { ArrowUpRight, FileUser } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Innovate.", "Integrity.", "Inspire."];
const backgroundImages = ["/svgs/he1.webp", "/svgs/he2.webp", "/svgs/he3.webp"];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setBgIndex((p) => (p + 1) % backgroundImages.length), 6000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setWordIndex((p) => (p + 1) % words.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-biz-charcoal-ink">
      {/* Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={bgIndex}
            src={backgroundImages[bgIndex]}
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1.06 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.5 }, scale: { duration: 8, ease: "linear" } }}
            className="absolute inset-0 w-full h-full object-cover"
            fetchpriority={bgIndex === 0 ? "high" : "auto"}
          />
        </AnimatePresence>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end max-w-[1200px] mx-auto px-6 lg:px-8 pb-20 md:pb-28">

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/50 text-[12px] font-medium uppercase tracking-[0.3em] mb-6"
        >
          Workforce Excellence · Est. 1966
        </motion.p>

        <h1 className="sr-only">Intelligent Recruitment & Workforce Solutions in India & UAE</h1>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          {/* Left: Animated word */}
          <div>
            <h2 className="text-white text-[72px] md:text-[110px] lg:text-[130px] font-light leading-[0.9] tracking-[-0.03em] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[wordIndex]}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
                  className="block"
                >
                  {words[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </h2>
          </div>

          {/* Right: Description + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 md:max-w-[380px] shrink-0"
          >
            <p className="text-white/70 text-[16px] leading-[1.7] font-light">
              Bridging decades of business wisdom with modern execution to help organizations scale with confidence.
            </p>
            <div className="flex items-center gap-3">
              <Link
                to="/cv"
                className="flex items-center gap-2.5 bg-white text-biz-charcoal-ink text-[13px] font-medium px-6 py-3 rounded-full hover:bg-biz-cream transition-colors duration-200"
              >
                Upload CV
                <FileUser size={15} />
              </Link>
              <Link
                to="/services"
                className="flex items-center gap-2 text-white/70 text-[13px] hover:text-white transition-colors duration-200"
              >
                Our services
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

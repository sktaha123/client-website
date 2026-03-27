import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    tag: "Heritage",
    title: "Rooted in Integrity",
    body: "For over six decades, our legacy has been shaped by resilience and accountability. We unite the wisdom of the past with the intelligence of tomorrow's technology.",
    img: "/cardsimages/about1.webp",
  },
  {
    tag: "Vision",
    title: "Thoughtful Innovation",
    body: "A place where reputation is currency. We bridge traditional business ethics with digital precision, scalability, and global reach across India and the UAE.",
    img: "/cardsimages/about2.webp",
  },
  {
    tag: "Commitment",
    title: "Character-Led Growth",
    body: "Growth should never come at the cost of character. We are a unifying force connecting ambitions — building businesses that last, not just scale.",
    img: "/cardsimages/about3.webp",
  },
];

const pillars = [
  { num: "01", label: "Integrity first", body: "Every recommendation is grounded in verified data and honest reasoning — always." },
  { num: "02", label: "Built to last", body: "60+ years of operational experience shape every decision we make today." },
  { num: "03", label: "Global precision", body: "Dual-market operations across India and UAE with seamless cross-border execution." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

export const About = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((p) => (p + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-biz-cream font-dm">

      {/* ── Hero Section ─────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-8 pt-16 pb-12 md:pt-4 md:pb-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left */}
          <div>
            
            <h1 className="text-[52px] md:text-[68px] font-light text-biz-charcoal-ink leading-[1.05] tracking-[-0.03em] mb-8">
              A modern revival<br />of{" "}
              <em className="text-biz-bronze not-italic">old ethics.</em>
            </h1>
            <p className="text-[16px] text-biz-charcoal-soft leading-[1.8] max-w-[480px]">
              At <strong className="text-biz-charcoal-ink font-semibold">biznor</strong>
              <strong className="text-biz-bronze font-semibold">X</strong>, we are more than a platform — we are a new old business street. Rooted in integrity and honour, we blend the legacy of past generations with the speed and innovation of tomorrow's technology.
            </p>
            <p className="text-[16px] text-biz-charcoal-soft leading-[1.8] max-w-[480px] mt-4">
              For over 60 years, our legacy has been built on trust and resilience. Today, we carry it forward by empowering entrepreneurs and enterprises with solutions that unite tradition and digital agility.
            </p>
          </div>

          {/* Right – Cycling card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative h-[480px] lg:h-[540px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 rounded-2xl overflow-hidden"
              >
                <img
                  src={slides[index].img}
                  alt={slides[index].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-biz-bronze/80 mb-3">
                    {slides[index].tag}
                  </p>
                  <h2 className="text-[26px] font-medium text-white mb-3 leading-tight">
                    {slides[index].title}
                  </h2>
                  <p className="text-[14px] text-white/70 leading-[1.7]">{slides[index].body}</p>

                  {/* Dots */}
                  <div className="flex gap-2 mt-6">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? "w-8 bg-biz-bronze" : "w-2 bg-white/30"}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── Pillars ──────────────────────────────────── */}


    </div>
  );
};

export default About;

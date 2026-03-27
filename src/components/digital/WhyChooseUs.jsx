import { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BlurReveal from "../common/BlurReveal";

const appleEase = [0.16, 1, 0.3, 1];

// Staggered container — blur added only on desktop via BlurReveal
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const reasons = [
  {
    title: "Strategy before execution",
    body: "We refuse to operate on assumptions. Every engagement begins with a comprehensive audit of your digital ecosystem to ensure we are solving the right problems.",
    img: "/digital/why-strategy.webp",
  },
  {
    title: "Premium design standards",
    body: "Your digital presence is your first impression. We engineer products that don't just function perfectly, but look and feel exceptional, stopping users mid-scroll.",
    img: "/digital/why-design.webp",
  },
  {
    title: "Measurable, revenue-focused results",
    body: "We map every campaign to your actual business revenue. No vanity metrics—just transparent reporting on rankings, traffic, qualified leads, and actual conversions.",
    img: "/digital/why-results.webp",
  },
  {
    title: "A long-term growth partner",
    body: "We don't just deliver a project and disappear. We operate as an extension of your team, continually adapting, optimising, and scaling strategies as your business evolves.",
    img: "/digital/why-growth.webp",
  },
];

// cardVariant with NO inline blur — BlurReveal handles the blur conditionally
const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: appleEase } },
};

const WhyChooseUs = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#050505] py-20 md:py-32 text-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        {/* ── Header ── */}
        <BlurReveal
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-14 mb-14 md:pb-20 md:mb-20"
        >
          <div className="max-w-2xl">
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight">
              Why leading brands choose{" "}
              <span className="font-medium text-biz-bronze">BiznorX.</span>
            </h2>
          </div>

          
        </BlurReveal>

        {/* ── Desktop: 2×2 Grid ── */}
        <motion.div
          className="hidden md:grid grid-cols-2 gap-x-20 gap-y-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {reasons.map((r, i) => (
            <BlurReveal key={i} delay={i * 0.12} className="group flex flex-col gap-6">
              {/* Image block */}
              <div className="w-full aspect-video rounded-3xl overflow-hidden bg-white/5 border border-white/8">
                <img
                  src={r.img}
                  alt={r.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-[20px] md:text-[22px] font-medium mb-3 tracking-tight leading-snug">
                  {r.title}
                </h3>
                <p className="text-[15px] md:text-[16px] text-white/50 leading-[1.8] font-light">
                  {r.body}
                </p>
              </div>
            </BlurReveal>
          ))}
        </motion.div>

        {/* ── Mobile: Horizontal swipe gallery (NO blur, buttery smooth) ── */}
        <div className="md:hidden -mx-6 px-6">
          <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar">
            {reasons.map((r, i) => (
              <div
                key={i}
                className="snap-start shrink-0 w-[82vw] flex flex-col gap-5 bg-white/3 border border-white/8 rounded-[2rem] p-6 overflow-hidden"
              >
                <div className="w-full aspect-video rounded-3xl overflow-hidden bg-white/5">
                  <img
                    src={r.img}
                    alt={r.title}
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
                <div>
                  <h3 className="text-[19px] font-medium tracking-tight leading-snug mb-2">
                    {r.title}
                  </h3>
                  <p className="text-[14px] text-white/50 leading-[1.75] font-light">
                    {r.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicator dots */}
          <div className="flex justify-center gap-2 mt-5">
            {reasons.map((_, i) => (
              <span key={i} className="w-1 h-1 rounded-full bg-white/20" />
            ))}
          </div>
        </div>

        {/* ── Mobile CTA ── */}
        <div className="md:hidden mt-8">
          <button
            onClick={() => navigate("/contact")}
            className="w-full inline-flex items-center justify-center gap-2 border border-white/15 text-white text-[14px] font-medium px-6 py-4 rounded-full hover:bg-white hover:text-biz-charcoal-ink transition-all duration-300"
          >
            Start a project <ArrowUpRight size={16} />
          </button>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `.hide-scrollbar::-webkit-scrollbar{display:none}.hide-scrollbar{-ms-overflow-style:none;scrollbar-width:none}` }} />
    </section>
  );
};

export default WhyChooseUs;
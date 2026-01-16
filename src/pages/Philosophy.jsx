import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const revealVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
      delay: index * 0.12,
    },
  }),
};

export function Philosophy() {
  return (
    <section className="py-30 md:py-12 md:mt-24 bg-biz-cream relative overflow-hidden font-dm">
      <motion.div
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto px-6 text-center relative z-10"
      >
        {/* Decorative Top Badge */}
        <motion.div
          custom={0}
          variants={revealVariants}
          className="mb-12 flex flex-col items-center"
        >
          <span className="text-biz-bronze text-[10px] md:text-xs uppercase tracking-ultra font-bold mb-4">
            The Foundation
          </span>
          <div className="w-8 h-[1px] bg-biz-bronze" />
        </motion.div>

        {/* Large Editorial Quote */}
        <motion.div
          custom={1}
          variants={revealVariants}
          className="relative"
        >
          <Quote className="absolute -top-10 left-1/2 -translate-x-1/2 h-12 w-12 text-biz-bronze/10" />

          <blockquote
            className="
              text-3xl
              md:text-5xl
              lg:text-3xl
              text-biz-charcoal
              mb-16
              leading-[1.2]
              font-light
              tracking-tightest
            "
          >
            “We believe strong businesses are built through{" "}
            <span className="text-biz-bronze italic font-serif">
              clarity, collaboration, and consistent{" "}
            </span>
            execution.
            <br />
            Our role is to align ideas with opportunity — responsibly,
            strategically, and at scale.”
          </blockquote>
        </motion.div>

        {/* Philosophy Signature */}
        <motion.div
          custom={2}
          variants={revealVariants}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-8">
            <div className="h-[1px] w-12 bg-biz-bronze/30" />
            <p className="text-biz-charcoal-muted text-sm font-medium tracking-widest uppercase italic">
              Our Philosophy
            </p>
            <div className="h-[1px] w-12 bg-biz-bronze/30" />
          </div>

          <p className="text-[10px] text-biz-bronze font-bold tracking-widest uppercase">
            EST. 1966 — Defined by Excellence
          </p>
        </motion.div>
      </motion.div>

      {/* Minimalist Corner Accents */}
      <div className="absolute bottom-10 left-10 w-32 h-32 border-l border-b border-biz-bronze/10 rounded-bl-biz hidden lg:block" />
      <div className="absolute top-10 right-10 w-32 h-32 border-r border-t border-biz-bronze/10 rounded-tr-biz hidden lg:block" />
    </section>
  );
}

export default Philosophy;

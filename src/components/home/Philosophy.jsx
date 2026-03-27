import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="bg-biz-cream py-28 md:py-40 overflow-hidden">
      <div className="max-w-[900px] mx-auto px-6 lg:px-8 text-center">

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-semibold uppercase tracking-[0.3em] text-biz-bronze mb-10"
        >
          Our Philosophy
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-[28px] md:text-[42px] lg:text-[52px] font-light text-biz-charcoal-ink leading-[1.2] tracking-[-0.02em]"
        >
          "We believe strong businesses are built through{" "}
          <span className="text-biz-bronze italic">
            clarity, collaboration, and consistent execution.
          </span>
          {" "}Our role is to align ideas with opportunity — responsibly, strategically, and at scale."
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 h-px w-12 bg-biz-bronze/40 mx-auto"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-5 text-[12px] font-medium uppercase tracking-[0.25em] text-biz-charcoal-soft"
        >
          Est. 1966 — Defined by Excellence
        </motion.p>

      </div>
    </section>
  );
}

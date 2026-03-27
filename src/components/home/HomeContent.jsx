import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

const sections = [
  {
    label: "Core Focus",
    title: "What biznorX Does",
    body: "biznorX focuses on structured recruitment execution rather than volume-based hiring. Each engagement begins with understanding role intent, organizational structure, and business direction.",
  },
  {
    label: "Solutions",
    title: "Recruitment & Workforce",
    body: "Our solutions are built around clarity and accountability — assisting organizations with talent acquisition, workforce planning, and hiring optimization using consistent evaluation frameworks.",
  },
  {
    label: "Experience",
    title: "Industries We Serve",
    body: "We work across technology, manufacturing, logistics, finance, healthcare, and professional services — adapting strategies based on sector-specific workforce complexity.",
  },
  {
    label: "Differentiation",
    title: "Why Choose BiznorX",
    body: "We prioritize execution integrity. Every recommendation is supported by verified data and clear reasoning. Speed is never chosen over alignment.",
  },
];

export default function HomeContent() {
  return (
    <section className="bg-biz-cream py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        {/* Intro */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-[680px] mb-20 md:mb-28"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-biz-bronze mb-5">
            About BiznorX
          </p>
          <h2 className="text-[36px] md:text-[48px] font-light text-biz-charcoal-ink leading-[1.15] tracking-[-0.02em]">
            A recruitment and workforce solutions platform designed to help organizations make confident hiring decisions.
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 border-t border-biz-charcoal/8 pt-16">
          {sections.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="group"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-biz-bronze/70 mb-4">
                {item.label}
              </p>
              <h3 className="text-[22px] font-medium text-biz-charcoal-ink mb-3 leading-tight">
                {item.title}
              </h3>
              <p className="text-[15px] text-biz-charcoal-soft leading-[1.75]">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats strip */}
        

      </div>
    </section>
  );
}
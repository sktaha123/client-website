import { motion } from "framer-motion";

const stats = [
  { num: "60+",  label: "Years of Legacy",     body: "A heritage built on trust, resilience, and proven operational discipline." },
  { num: "12+",  label: "Industries Served",   body: "Sector-specific workforce expertise across India, UAE, and global markets." },
  { num: "2",    label: "Global Offices",      body: "Dual-market presence enabling seamless cross-border execution at scale." },
  { num: "100%", label: "Compliance Focus",    body: "Every engagement is governed with full regulatory and ethical transparency." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

export default function Trust() {
  return (
    <section className="bg-biz-cream border-t border-biz-charcoal/8 py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        {/* Section label */}
       

        {/* Stats grid — matches HomeContent's 2-col layout rhythm */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12  border-biz-charcoal/8 py-12">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col gap-3"
            >
              {/* Big number — same size scale as HomeContent headings */}
              <div className="text-[52px] md:text-[64px] font-light text-biz-charcoal-ink leading-none tracking-[-0.03em]">
                {s.num}
              </div>

              {/* Label — matches the .professional-label style */}
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-biz-bronze">
                {s.label}
              </p>

              {/* Body — matches HomeContent's 15px soft text */}
              <p className="text-[15px] text-biz-charcoal-soft leading-[1.75]">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
        

      </div>
    </section>
  );
}
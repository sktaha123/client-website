import { motion } from "framer-motion";
import BlurReveal from "../common/BlurReveal";

const appleEase = [0.16, 1, 0.3, 1];

const clients = [
  "Startups with big ambitions",
  "D2C & E-commerce brands",
  "Professional service firms",
  "Healthcare & wellness brands",
  "Real estate & property",
  "SaaS & technology",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: appleEase, delay: i * 0.08 },
  }),
};

const AboutSection = () => (
  <section className="bg-white py-20 md:py-32 border-t border-black/5">
    <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

      {/* Editorial Landscape Image — fluid aspect ratio, no fixed height */}
      <BlurReveal blur={16} direction="none" duration={1} className="w-full aspect-[16/7] rounded-[2rem] overflow-hidden mb-16 md:mb-24">
        <img
          src="/digital/about-office.webp"
          alt="Our Team"
          className="w-full h-full object-cover"
        />
      </BlurReveal>

      <div className="grid md:grid-cols-12 gap-8 lg:gap-24">

        {/* Left Text Block */}
        <motion.div
          className="md:col-span-7"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
         
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-biz-charcoal-ink leading-[1.05] tracking-tight mb-6">
            We partner with ambitious brands ready to{" "}
            <span className="font-medium">own their space.</span>
          </h2>
          <p className="text-[15px] md:text-[16px] text-biz-charcoal-soft leading-[1.8] font-light">
            Digital isn't just a checkbox; it's the storefront of the modern era. We don't work with everyone. We collaborate exclusively with businesses that view digital as an investment in their long-term growth, rather than a short-term expense.
          </p>
        </motion.div>

        {/* Right List Block */}
        <motion.div
          className="md:col-span-5 bg-[#f5f5f7] p-8 md:p-10 rounded-[2rem] flex flex-col justify-center"
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-[18px] font-medium text-biz-charcoal-ink mb-6 tracking-tight">
            Our Core Sectors
          </h3>
          <ul className="space-y-4">
            {clients.map((c, i) => (
              <li
                key={i}
                className="flex items-center gap-4 text-[15px] text-biz-charcoal-soft border-b border-black/6 pb-4 last:border-0 last:pb-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-biz-bronze shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </div>
  </section>
);

export default AboutSection;
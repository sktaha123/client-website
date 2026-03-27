import { motion } from "framer-motion";
import HeroSection from "../components/digital/HeroSection";
import ServicesSection from "../components/digital/ServicesSection";
import AboutSection from "../components/digital/AboutSection";
import WhyChooseUs from "../components/digital/WhyChooseUs";
import ApproachSection from "../components/digital/ApproachSection";
import CTASection from "../components/digital/CTASection";

const appleEase = [0.16, 1, 0.3, 1];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const statVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: appleEase } },
};

function ResultsStrip() {
  const items = [
    { num: "3×",   label: "Avg. organic traffic growth" },
    { num: "40%",  label: "Average conversion lift" },
    { num: "12wk", label: "Avg. time to rank on page 1" },
    { num: "98%",  label: "Client retention rate" },
  ];

  return (
    <div className="bg-biz-charcoal-ink border-y border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 md:divide-x divide-white/10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={statVariant}
              className="flex flex-col items-center md:items-start text-center md:text-left md:pl-12 first:pl-0"
            >
              <div className="text-[40px] md:text-[48px] font-medium text-white tracking-tight leading-none mb-2">
                {item.num}
              </div>
              <p className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

const Digital = () => (
  <div className="font-dm bg-white selection:bg-biz-bronze selection:text-white">
    <HeroSection />
    <ResultsStrip />
    <ServicesSection />
    <AboutSection />
    <WhyChooseUs />
    <ApproachSection />
    <CTASection />
  </div>
);

export default Digital;
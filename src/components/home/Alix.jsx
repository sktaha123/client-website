import GlowText from "./GlowText";
import { motion } from "framer-motion";
import {
  Workflow,
  ShieldCheck,
  ChevronRight,
  Target,
  Layers
} from "lucide-react";

const revealVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
      delay: index * 0.1,
    },
  }),
};

export default function Alix() {
  const capabilities = [
    {
      Icon: Workflow,
      title: "Smart Matching Engine",
      description:
        "Evaluates company requirements against candidate skills to ensure relevance, accuracy, and long-term alignment.",
    },
    {
      Icon: ShieldCheck,
      title: "Bias-Reduced Decisions",
      description:
        "Every recommendation is supported by transparent logic, reducing subjectivity in recruitment outcomes.",
    },
    {
      Icon: Target,
      title: "Business-Centric Intelligence",
      description:
        "Considers role intent, growth goals, and organizational structure—not just resumes and keywords.",
    },
  ];

  return (
    <section className="bg-biz-cream pt-20 pb-6 px-6 md:px-12 lg:px-24 font-['DM_Sans'] relative">
      <motion.div
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT */}
          <div>
            <motion.h2
              custom={1}
              variants={revealVariants}
              className="text-5xl md:text-7xl font-extrabold mb-8"
            >
              <GlowText text="Alix" />
            </motion.h2>

            <div className="space-y-10">
              {capabilities.map((item, index) => {
                const Icon = item.Icon;

                return (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={revealVariants}
                    className="flex gap-6"
                  >
                    <Icon className="w-5 h-5 text-biz-bronze mt-1 shrink-0" />

                    <div>
                      <h3 className="font-bold text-sm uppercase mb-2">
                        {item.title}
                      </h3>

                      <p className="text-sm text-biz-charcoal-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}
          <motion.div
            custom={2}
            variants={revealVariants}
            className="relative"
          >
            <img
              src="/svgs/Alix.png"
              alt="Alix AI"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
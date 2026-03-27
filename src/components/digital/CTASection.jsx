import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BlurReveal from "../common/BlurReveal";

const appleEase = [0.16, 1, 0.3, 1];

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full py-32 md:py-48 flex items-center justify-center overflow-hidden">

      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/digital/cta-bg.webp"
          alt="Office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-biz-charcoal-ink/82 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: appleEase }}
        className="relative z-10 max-w-[800px] mx-auto px-6 text-center flex flex-col items-center"
      >
        

        <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] font-light text-white leading-[1.05] tracking-tight mb-7">
          Ready to engineer{" "}
          <span className="font-medium">your growth?</span>
        </h2>

        <p className="text-[15px] md:text-[16px] text-white/60 leading-[1.8] font-light mb-12 max-w-xl">
          Let's discuss your objectives. Get a free digital presence audit, a clear campaign roadmap, and transparent pricing upfront.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center justify-center gap-2 bg-biz-bronze text-white text-[14px] font-medium px-10 py-4 rounded-full hover:bg-white hover:text-biz-charcoal-ink transition-all duration-300"
          >
            Book a Strategy Call <ArrowUpRight size={16} />
          </button>
        </div>
      </motion.div>

    </section>
  );
};

export default CTASection;
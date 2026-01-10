import { motion } from "framer-motion";
import { ArrowRight, Clock, Shield, Sparkles } from "lucide-react";
import { Button } from "../components/ui/button.jsx";

export function Final() {
  // Optimized variants with reduced range for better paint performance
  const fadeInScale = {
    hidden: { opacity: 0, y: 15, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } // Power3 ease-out
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32 bg-biz-charcoal-ink font-dm"
    >
      {/* Background Architectural Pattern - Promoted to GPU Layer */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none transform-gpu">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #FAF9F6 1px, transparent 1px), linear-gradient(to bottom, #FAF9F6 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Decorative Top Border - Optimized with will-change */}
      <motion.div 
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 160, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-biz-bronze to-transparent will-change-[width]" 
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }} 
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.div 
          variants={fadeInScale}
          className="inline-flex items-center gap-3 px-4 py-2 bg-biz-cream/5 rounded-full mb-10 border border-biz-cream/10 transform-gpu"
        >
          <Sparkles className="w-3 h-3 text-biz-bronze" />
          <span className="text-biz-bronze text-[10px] font-bold uppercase tracking-widest">
            Take the next step
          </span>
        </motion.div>

        <motion.h2 
          variants={fadeInScale}
          className="text-4xl md:text-6xl lg:text-7xl text-biz-cream mb-8 leading-[1.1] font-light transform-gpu"
        >
          Ready to Transform Your <br />
          <span className="text-biz-bronze italic font-serif">Workforce Strategy?</span>
        </motion.h2>

        <motion.p 
          variants={fadeInScale}
          className="text-lg md:text-xl text-biz-cream/70 mb-14 max-w-2xl mx-auto leading-relaxed font-light transform-gpu"
        >
          Partner with BiznorX for disciplined, compliant, and scalable workforce
          solutions built for organizations that value <span className="text-biz-cream font-medium">precision and legacy.</span>
        </motion.p>

        <motion.div 
          variants={fadeInScale}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
        >
          <Button
            size="lg"
            className="bg-biz-bronze text-biz-cream px-12 py-8 text-sm uppercase tracking-widest font-bold rounded-full group transition-all duration-300 hover:bg-biz-cream hover:text-biz-charcoal hover:-translate-y-1 transform-gpu"
          >
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="bg-transparent text-biz-cream border-biz-cream/20 px-12 py-8 text-sm uppercase tracking-widest font-bold rounded-full transition-all duration-300 hover:bg-biz-cream/10 hover:border-biz-cream hover:-translate-y-1 transform-gpu"
          >
            Submit CV
          </Button>
        </motion.div>

        {/* Trust Indicators - Optimized Interaction */}
        <motion.div 
          variants={fadeInScale}
          className="flex flex-col md:flex-row items-center justify-center gap-12"
        >
          <div className="flex flex-col items-center gap-3 group cursor-default">
            <motion.div 
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="w-10 h-10 rounded-full bg-biz-cream/5 flex items-center justify-center border border-biz-cream/10 transition-colors group-hover:border-biz-bronze/50 transform-gpu"
            >
              <Clock className="h-4 w-4 text-biz-bronze" />
            </motion.div>
            <span className="text-[10px] text-biz-bronze uppercase tracking-[0.2em] font-bold">24-Hour Response</span>
          </div>

          <div className="hidden md:block w-[1px] h-12 bg-biz-cream/10" />

          <div className="flex flex-col items-center gap-3 group cursor-default">
            <motion.div 
              whileHover={{ rotate: -10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="w-10 h-10 rounded-full bg-biz-cream/5 flex items-center justify-center border border-biz-cream/10 transition-colors group-hover:border-biz-bronze/50 transform-gpu"
            >
              <Shield className="h-4 w-4 text-biz-bronze" />
            </motion.div>
            <span className="text-[10px] text-biz-bronze uppercase tracking-[0.2em] font-bold">Confidentiality Assured</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Glow - Fixed Performance Bottleneck */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.05, 0.03],
          x: [0, 15, 0],
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute -bottom-24 -right-24 w-96 h-96 bg-biz-bronze blur-[80px] rounded-full pointer-events-none will-change-transform transform-gpu" 
      />
    </section>
  );
}

export default Final;
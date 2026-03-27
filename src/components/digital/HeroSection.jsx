import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BlurReveal from "../common/BlurReveal";

const appleEase = [0.16, 1, 0.3, 1];

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full bg-[#050505] pt-32 pb-20 md:pt-14 md:pb-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left: Content */}
          <div className="flex flex-col z-10">
            <BlurReveal delay={0} duration={0.8}>
              
            </BlurReveal>

            <BlurReveal delay={0.08} duration={0.9}>
              <h1 className="text-5xl md:text-6xl lg:text-[5.25rem] font-light text-white leading-[1.05] tracking-tight mb-8">
                We build brands that{" "}
                <span className="font-medium text-white/90">lead online.</span>
              </h1>
            </BlurReveal>

            <BlurReveal delay={0.16} duration={0.9}>
              <p className="text-[15px] md:text-[16px] text-white/60 leading-[1.8] font-light mb-10 max-w-[480px]">
                We are a full-service digital agency. From high-performance websites to growth marketing that actually converts, we turn your digital presence into your biggest competitive advantage.
              </p>
            </BlurReveal>

            <BlurReveal delay={0.22} duration={0.9}>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button
                  onClick={() => navigate("/contact")}
                  className="inline-flex items-center justify-center gap-2 bg-white text-black text-[14px] font-medium px-8 py-4 rounded-full hover:bg-biz-bronze hover:text-white transition-all duration-300"
                >
                  Start a Project <ArrowUpRight size={16} />
                </button>
                
              </div>
            </BlurReveal>
          </div>

          {/* Right: Image */}
          <BlurReveal delay={0.2} duration={1.1} direction="left" className="w-full">
            <div className="relative w-full aspect-[4/5] lg:aspect-[6/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="/digital/hero-image.webp"
                alt="Digital Agency Work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-white/10 rounded-[2rem] pointer-events-none" />
            </div>
          </BlurReveal>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
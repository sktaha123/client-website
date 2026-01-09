import React from "react";
import { Network, ArrowRight } from "lucide-react";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="pt-24 pb-20 bg-[#FAF9F6] font-dm overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Visual Content - Taking 5 columns */}
          <div className="md:col-span-5 relative order-2 md:order-1">
            <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl group">
              <img
                src="/svgs/linkedincard.webp"
                alt="Business network and connections"
                className="w-full h-full object-cover  transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Subtle Bronze Overlay */}
              <div className="absolute inset-0 bg-[#8B7E6A]/10 mix-blend-multiply" />
            </div>

            {/* Floating Metric - Redesigned as a minimal Glassmorphism card */}
            <div
              className="
                absolute
                -bottom-6
                -right-6
                md:-right-10
                bg-white/80
                backdrop-blur-xl
                p-8
                rounded-[2rem]
                shadow-[0_20px_50px_rgba(45,34,25,0.1)]
                border border-[#8B7E6A]/10
                z-20
              "
            >
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-2xl bg-[#8B7E6A] flex items-center justify-center mb-2">
                  <Network className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-3xl text-[#2D2219] font-bold tracking-tight">
                    2,500+
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#8B7E6A] font-bold">
                    Enterprise Clients
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Background Element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#D9CDBA] rounded-full blur-[80px] opacity-30 -z-10" />
          </div>

          {/* Text Content - Taking 7 columns */}
          <div className="md:col-span-7 order-1 md:order-2">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#8B7E6A]/10 rounded-full mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#8B7E6A] animate-pulse" />
              <span className="text-[#8B7E6A] text-[11px] font-bold uppercase tracking-[0.2em]">
                About BiznorX
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl text-[#2D2219] mb-8 leading-[1.1] font-light">
              Your Strategic Partner in <br />
              <span className="text-[#8B7E6A] italic">Workforce Excellence</span>
            </h2>

            <div className="space-y-6 max-w-xl">
              <p className="text-xl text-[#6B5E4C] leading-relaxed font-light">
                Built on <span className="text-[#2D2219] font-medium">six decades of business legacy</span>, BiznorX delivers
                enterprise-grade workforce solutions that strengthen
                operational resilience and long-term growth.
              </p>

              <p className="text-lg text-[#6B5E4C]/80 leading-relaxed font-light">
                We combine deep industry expertise with disciplined processes and
                modern technology to design scalable, compliant workforce
                strategies across <span className="border-b border-[#8B7E6A]/30">India and the UAE.</span>
              </p>
            </div>

            {/* Key Attributes - Redesigned as Minimalist Tags */}
            <div className="flex flex-wrap gap-4 mt-10">
              {[
                "Trust-driven",
                "Technology-enabled",
                "Globally scalable",
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-[#8B7E6A]/10 bg-white/50 hover:bg-white hover:border-[#8B7E6A]/30 transition-all duration-300"
                >
                  <ArrowRight className="w-3 h-3 text-[#8B7E6A]" />
                  <span className="text-sm text-[#2D2219] font-medium tracking-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
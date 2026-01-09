import React from "react";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-[95vh] px-4 md:px-8 pt-8 font-dm">
      
      {/* Background Container - High-End Frame */}
      <div className="relative h-full w-full overflow-hidden rounded-[3rem] shadow-sm">
        
        {/* Background Image with a warmer, cleaner treatment */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
          style={{
            backgroundImage: "url('/svgs/heroimage.jpg')",
          }}
        />
        
        {/* Subtle Warm Gradient Overlay (Replaces the heavy black/60) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D2219]/70 via-[#2D2219]/30 to-[#2D2219]/70" />

        {/* Content Wrapper */}
        <div className="relative z-30 flex h-full min-h-[85vh] md:min-h-[95vh] w-full flex-col justify-end pb-12 md:pb-24 px-6 md:px-16">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            
            {/* LEFT: Catchy Editorial Title */}
            <div className="md:col-span-7">
              <span className="text-[#EAE4D9] uppercase tracking-[0.3em] text-xs font-semibold mb-6 block">
                Workforce Excellence
              </span>
              <h1 className="text-white text-5xl md:text-[5.5rem] leading-[1] font-light tracking-tight">
                Innovate. <br />
                <span className="text-[#8B7E6A] italic">Integrity.</span> <br />
                Building <span className="font-semibold">Futures.</span>
              </h1>
            </div>

            {/* RIGHT: Sophisticated Description & Action */}
            <div className="md:col-span-5 md:pl-12 flex flex-col items-start gap-8">
              <p className="text-[#FAF9F6]/80 text-lg md:text-xl leading-relaxed max-w-sm font-light">
                Bridging decades of business wisdom with modern execution to help organizations scale with confidence.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#cv-upload"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#8B7E6A] px-8 py-4 text-white transition-all hover:bg-[#6B5E4C] shadow-xl shadow-[#2D2219]/20"
                >
                  <span className="relative z-10 font-medium">Upload Your CV</span>
                  <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </a>
                
                <button className="px-8 py-4 rounded-full border border-white/30 text-white backdrop-blur-md hover:bg-white/10 transition-all font-medium">
                  Our Solutions
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Decorative Element - Soft Light Blur */}
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-[#8B7E6A] opacity-20 blur-[120px]" />
      </div>
    </section>
  );
};

export default HeroSection;
import { ArrowRight, Clock, Shield, Sparkles } from "lucide-react";
import { Button } from "../ui/button.jsx";

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32 bg-[#2D2219] font-dm"
    >
      {/* Subtle Architectural Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #FAF9F6 1px, transparent 1px), linear-gradient(to bottom, #FAF9F6 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Decorative Top Border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-[#8B7E6A] to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        {/* Minimalist Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#FAF9F6]/5 rounded-full mb-10 border border-[#FAF9F6]/10">
          <Sparkles className="w-3 h-3 text-[#8B7E6A]" />
          <span className="text-[#8B7E6A] text-[10px] font-bold uppercase tracking-[0.3em]">
            Take the next step
          </span>
        </div>

        {/* Heading: Large & Elegant */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl text-[#FAF9F6] mb-8 leading-[1.1] font-light">
          Ready to Transform Your <br />
          <span className="text-[#8B7E6A] italic font-serif">Workforce Strategy?</span>
        </h2>

        {/* Description: High Readability */}
        <p className="text-lg md:text-xl text-[#FAF9F6]/70 mb-14 max-w-2xl mx-auto leading-relaxed font-light">
          Partner with BiznorX for disciplined, compliant, and scalable workforce
          solutions built for organizations that value <span className="text-[#FAF9F6] font-medium">precision and legacy.</span>
        </p>

        {/* CTAs: Refined Pill Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          {/* Primary CTA */}
          <Button
            size="lg"
            className="
              bg-[#8B7E6A]
              text-[#FAF9F6]
              px-12 py-8
              text-sm
              uppercase
              tracking-widest
              font-bold
              rounded-full
              group
              transition-all duration-500
              hover:bg-[#FAF9F6]
              hover:text-[#2D2219]
              hover:shadow-[0_20px_50px_rgba(139,126,106,0.3)]
              hover:-translate-y-1
            "
          >
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" />
          </Button>

          {/* Secondary CTA */}
          <Button
            size="lg"
            variant="outline"
            className="
              bg-transparent
              text-[#FAF9F6]
              border-[#FAF9F6]/20
              px-12 py-8
              text-sm
              uppercase
              tracking-widest
              font-bold
              rounded-full
              transition-all duration-500
              hover:bg-[#FAF9F6]/10
              hover:border-[#FAF9F6]
              hover:-translate-y-1
            "
          >
            Submit CV
          </Button>
        </div>

        {/* Trust Indicators: Simplified & Centered */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FAF9F6]/5 flex items-center justify-center border border-[#FAF9F6]/10">
              <Clock className="h-4 w-4 text-[#8B7E6A]" />
            </div>
            <span className="text-[10px] text-[#8B7E6A] uppercase tracking-[0.2em] font-bold">24-Hour Response</span>
          </div>

          <div className="hidden md:block w-[1px] h-12 bg-[#FAF9F6]/10" />

          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FAF9F6]/5 flex items-center justify-center border border-[#FAF9F6]/10">
              <Shield className="h-4 w-4 text-[#8B7E6A]" />
            </div>
            <span className="text-[10px] text-[#8B7E6A] uppercase tracking-[0.2em] font-bold">Confidentiality Assured</span>
          </div>
        </div>
      </div>

      {/* Subtle Corner Texture */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#8B7E6A] opacity-[0.03] blur-[100px] rounded-full" />
    </section>
  );
}
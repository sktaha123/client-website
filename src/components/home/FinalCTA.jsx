import { ArrowRight, Clock, Shield } from "lucide-react";
import { Button } from "../ui/button.jsx";

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="
        relative overflow-hidden
        py-28
        bg-[#071510]
        
      "
    >
      {/* Ultra-Subtle Texture */}
      <div className="absolute inset-0 opacity-[0.025]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #1f5e46 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2
          className="
            text-4xl md:text-5xl lg:text-6xl
            text-[#f3f4f2]
            mb-6
            leading-tight
            font-raleway
            font-semibold
          "
        >
          Ready to Transform Your Workforce Strategy?
        </h2>

        {/* Description */}
        <p
          className="
            text-lg md:text-xl
            text-[#cfd6d2]
            mb-14
            max-w-2xl
            mx-auto
            leading-relaxed
            font-helvetica
            tracking-tightest
          "
        >
          Partner with BiznorX for disciplined, compliant, and scalable workforce
          solutions built for organizations that value precision and trust.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
          {/* Primary CTA */}
          <Button
            size="lg"
            className="
              bg-[#1f5e46]
              text-[#f3f4f2]
              px-10 py-6
              text-base
              font-helvetica
              tracking-tightest
              font-semibold
              group
              transition-all duration-300 ease-out
              hover:bg-[#25745a]
              hover:-translate-y-1
              hover:shadow-[0_14px_36px_rgba(31,94,70,0.35)]
            "
          >
            Contact Us
            <ArrowRight
              className="
                ml-2 h-5 w-5
                transition-transform duration-300
                group-hover:translate-x-1
              "
            />
          </Button>

          {/* Secondary CTA */}
          <Button
            size="lg"
            variant="outline"
            className="
              bg-[#1f5e46]
              text-[#f3f4f2]
              px-10 py-6
              text-base
              font-helvetica
              tracking-tightest
              font-semibold
              group
              transition-all duration-300 ease-out
              hover:bg-[#25745a]
              hover:-translate-y-1
              hover:shadow-[0_14px_36px_rgba(31,94,70,0.35)]
              hover:text-[#f3f4f2]
            "
          >
            Submit CV
          </Button>
        </div>

        {/* Trust Indicators */}
        <div
          className="
            flex flex-col sm:flex-row
            items-center justify-center
            gap-10
            text-[#cfd6d2]/80
            text-sm
            font-helvetica
            tracking-tightest
          "
        >
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#1f5e46]" />
            <span>Response within 24 hours</span>
          </div>

          <div className="hidden sm:block w-px h-4 bg-[#cfd6d2]/25" />

          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-[#1f5e46]" />
            <span>Complete confidentiality guaranteed</span>
          </div>
        </div>
      </div>

      {/* Deep Ambient Glows */}
      <div className="absolute top-16 left-16 w-80 h-80 bg-[#1f5e46] opacity-10 blur-3xl rounded-full" />
      <div className="absolute bottom-16 right-16 w-96 h-96 bg-[#0b2a1f] opacity-10 blur-3xl rounded-full" />
    </section>
  );
}

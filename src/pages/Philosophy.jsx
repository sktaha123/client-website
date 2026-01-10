import { Quote } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export function Philosophy() {
  const { ref, isVisible } = useInView();

  return (
    <section className="mt-25 md:py-48 bg-biz-cream relative overflow-hidden font-dm">
      {/* Structural Background Element */}
     

      <div
        ref={ref}
        className={`
          max-w-5xl mx-auto px-6 text-center relative z-10
          transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
        `}
      >
        {/* Decorative Top Badge */}
        <div className="mb-12 flex flex-col items-center">
          <span className="text-biz-bronze text-[10px] md:text-xs uppercase tracking-ultra font-bold mb-4">
            The Foundation
          </span>
          <div className="w-8 h-[1px] bg-biz-bronze" />
        </div>

        {/* Large Editorial Quote */}
        <div className="relative">
          {/* Subtle Decorative Quote Icon */}
          <Quote className="absolute -top-10 left-1/2 -translate-x-1/2 h-12 w-12 text-biz-bronze/10" />
          
          <blockquote
            className="
              text-3xl
              md:text-5xl
              lg:text-6xl
              text-biz-charcoal
              mb-16
              leading-[1.2]
              font-light
              tracking-tightest
            "
          >
            “We believe exceptional businesses are built on{" "}
            <span className="text-biz-bronze italic font-serif">exceptional people</span>. 
            Our role is to connect ambition with opportunity — responsibly, 
            strategically, and at scale.”
          </blockquote>
        </div>

        {/* Philosophy Signature */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-8">
            <div className="h-[1px] w-12 bg-biz-bronze/30" />
            <p className="text-biz-charcoal-muted text-sm font-medium tracking-widest uppercase italic">
              Our Philosophy
            </p>
            <div className="h-[1px] w-12 bg-biz-bronze/30" />
          </div>
          
          {/* Subtle Year/Legacy detail */}
          <p className="text-[10px] text-biz-bronze font-bold tracking-widest uppercase">
            EST. 1966 — Defined by Excellence
          </p>
        </div>
      </div>

      {/* Minimalist Corner Accents */}
      <div className="absolute bottom-10 left-10 w-32 h-32 border-l border-b border-biz-bronze/10 rounded-bl-biz hidden lg:block" />
      <div className="absolute top-10 right-10 w-32 h-32 border-r border-t border-biz-bronze/10 rounded-tr-biz hidden lg:block" />
    </section>
  );
}

export default Philosophy;
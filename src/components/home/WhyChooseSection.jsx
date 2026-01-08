import { Check } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const benefits = [
  "Six decades of proven business legacy and market expertise",
  "Comprehensive compliance across all regulatory frameworks",
  "Dual-market presence with deep understanding of India and UAE",
  "Technology-driven processes for efficiency and transparency",
  "Dedicated account management and 24/7 support availability",
  "Industry-specific solutions across 15+ verticals",
  "End-to-end workforce lifecycle management",
  "Strategic partnerships with leading enterprises globally",
];

export function WhyChooseSection() {
  const { ref, isVisible } = useInView();

  return (
    <section className="py-24 bg-[#071510]">
      <div
        ref={ref}
        className={`
          transition-all duration-700 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div className="flex flex-col items-center justify-center ">
              <div
                className="
                
                
                  inline-block
                  px-4 py-1.5
                  bg-[#1f5e46]/15
                  text-[#cfd6d2]
                  text-xs
                  uppercase
                  tracking-wider
                  rounded-full
                  mb-6
                  font-raleway
                "
              >
                Why Choose BiznorX
              </div>

              <h2
                className="
                  text-4xl md:text-5xl
                  text-center
                  text-[#f3f4f2]
                  mb-6
                  leading-tight
                  font-raleway
                  font-semibold
                "
              >
                The Strategic Advantage You Need
              </h2>

              <p
                className="
                  text-lg
                   text-center 
                  text-[#cfd6d2]
                  leading-relaxed
                  font-helvetica
                  tracking-tightest
                "
              >
                We don’t just deliver workforce solutions — we operate as a
                long-term strategic partner, helping organizations build
                resilient, compliant, and future-ready operations at scale.
              </p>
            </div>

            {/* Benefits List */}
            <div className="grid gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="
                    flex items-start gap-4
                    p-4
                    bg-[#0b2a1f]
                    rounded-xl
                    border border-[#cfd6d2]/10
                    transition-all duration-300
                    hover:border-[#1f5e46]
                    hover:-translate-y-1
                    hover:shadow-[0_12px_28px_rgba(31,94,70,0.25)]
                    group
                  "
                >
                  <div
                    className="
                      flex-shrink-0
                      w-6 h-6
                      rounded-full
                      bg-[#1f5e46]/20
                      flex items-center justify-center
                      mt-0.5
                      transition-colors
                      group-hover:bg-[#1f5e46]
                    "
                  >
                    <Check className="h-4 w-4 text-[#f3f4f2]" />
                  </div>

                  <p
                    className="
                      text-[#f3f4f2]
                      leading-relaxed
                      font-helvetica
                      tracking-tightest
                    "
                  >
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

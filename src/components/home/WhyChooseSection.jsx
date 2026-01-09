import { Check } from "lucide-react";

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
  return (
    <section className="py-24 bg-[#FAF9F6] font-dm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT CONTENT: Sticky Branding & Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#8B7E6A]/10 rounded-full mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#8B7E6A]" />
              <span className="text-[#8B7E6A] text-[11px] font-bold uppercase tracking-[0.2em]">
                The BiznorX Advantage
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl text-[#2D2D2D] mb-8 leading-[1.1] font-light">
              The Strategic <br />
              <span className="text-[#8B7E6A] italic font-serif">Advantage</span> You Need
            </h2>

            <p className="text-xl text-[#6B5E4C] leading-relaxed font-light max-w-md">
              We don’t just deliver workforce solutions — we operate as a 
              <span className="text-[#2D2D2D] font-medium"> long-term strategic partner</span>, 
              helping organizations build resilient operations at scale.
            </p>
            
            {/* Decorative Element */}
            <div className="mt-12 w-24 h-[1px] bg-[#8B7E6A]/30 hidden lg:block" />
          </div>

          {/* RIGHT CONTENT: Refined List */}
          <div className="lg:col-span-7">
            <div className="grid gap-0 border-t border-[#8B7E6A]/10">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="
                    group flex items-center gap-6
                    py-8 px-4
                    border-b border-[#8B7E6A]/10
                    transition-all duration-500
                    hover:bg-white hover:px-8
                  "
                >
                  {/* Subtle Numbering or Icon */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-10 h-10 rounded-full border border-[#8B7E6A]/20 flex items-center justify-center transition-all duration-500 group-hover:bg-[#8B7E6A] group-hover:border-[#8B7E6A]">
                      <Check className="h-4 w-4 text-[#8B7E6A] transition-colors duration-500 group-hover:text-white" />
                    </div>
                    {/* Ghost number background */}
                    <span className="absolute -top-2 -left-2 text-[10px] font-bold text-[#8B7E6A]/30 opacity-0 group-hover:opacity-100 transition-opacity">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="text-[#2D2D2D] text-lg font-light leading-snug transition-all duration-500 group-hover:translate-x-2">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom CTA Hook */}
            <div className="mt-12 p-8 rounded-[2rem] bg-[#EAE4D9]/30 border border-[#8B7E6A]/10 text-center lg:text-left">
                <p className="text-[#8B7E6A] font-medium text-sm italic">
                    "Driving excellence through disciplined processes and local expertise in India & UAE."
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
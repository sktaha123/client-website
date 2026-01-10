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

export function Whychooseus() {
  return (
    <section className="py-24 bg-biz-cream font-dm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT CONTENT: Sticky Branding & Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-biz-bronze/10 rounded-full mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-biz-bronze" />
              <span className="text-biz-bronze text-[11px] font-bold uppercase tracking-widest">
                The BiznorX Advantage
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl text-biz-charcoal mb-8 leading-[1.1] font-light tracking-tightest">
              The Strategic <br />
              <span className="text-biz-bronze italic font-serif">Advantage</span> You Need
            </h2>

            <p className="text-xl text-biz-charcoal-soft leading-relaxed font-light max-w-md">
              We don’t just deliver workforce solutions — we operate as a 
              <span className="text-biz-charcoal-ink font-medium"> long-term strategic partner</span>, 
              helping organizations build resilient operations at scale.
            </p>
            
            {/* Decorative Element */}
            <div className="mt-12 w-24 h-[1px] bg-biz-bronze/30 hidden lg:block" />
          </div>

          {/* RIGHT CONTENT: Refined List */}
          <div className="lg:col-span-7">
            <div className="grid gap-0 border-t border-biz-bronze/10">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="
                    group flex items-center gap-6
                    py-8 px-4
                    border-b border-biz-bronze/10
                    transition-all duration-500
                    hover:bg-biz-cream-light hover:px-8
                  "
                >
                  {/* Subtle Numbering or Icon */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-10 h-10 rounded-full border border-biz-bronze/20 flex items-center justify-center transition-all duration-500 group-hover:bg-biz-bronze group-hover:border-biz-bronze">
                      <Check className="h-4 w-4 text-biz-bronze transition-colors duration-500 group-hover:text-biz-cream-light" />
                    </div>
                    {/* Ghost number background */}
                    <span className="absolute -top-2 -left-2 text-[10px] font-bold text-biz-bronze/30 opacity-0 group-hover:opacity-100 transition-opacity">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="text-biz-charcoal text-lg font-light leading-snug transition-all duration-500 group-hover:translate-x-2">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom CTA Hook */}
            <div className="mt-12 p-8 rounded-biz bg-biz-sand/30 border border-biz-bronze/10 text-center lg:text-left">
                <p className="text-biz-bronze font-medium text-sm italic">
                    "Driving excellence through disciplined processes and local expertise in India & UAE."
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
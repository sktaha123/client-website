import { Check } from "lucide-react";
import { motion } from "framer-motion";

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

export  function Chooseb() {
  return (
    <section id="why-choose" className="py-20 md:py-32 bg-biz-cream font-dm">
      <div className="max-w-7xl mx-auto px-6">
        {/* items-start is required for the sticky behavior to function */}
        <div className="grid lg:grid-cols-12 gap-16 items-start relative">
          
          {/* LEFT CONTENT: STICKY LOCK */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-10"
            >
              <span className="text-biz-bronze font-bold tracking-[0.4em] uppercase text-[14px]">
                The BiznorX Advantage
              </span>
              <div className="h-[1px] w-12 bg-biz-stone/50" />
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl text-biz-charcoal mb-8 leading-[1.15] font-light tracking-tight"
            >
              The Strategic <br />
              <span className="text-biz-bronze italic font-serif">Advantage</span> You Need
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-biz-earth leading-relaxed font-light max-w-md"
            >
              We don’t just deliver workforce solutions — we operate as a 
              <span className="text-biz-charcoal font-medium"> long-term strategic partner</span>, 
              helping organizations build resilient operations at scale.
            </motion.p>
            
            <div className="mt-12 w-24 h-[1px] bg-biz-stone/40 hidden lg:block" />
          </div>

          {/* RIGHT CONTENT: SCROLLING LIST */}
          <div className="lg:col-span-7">
            <div className="grid gap-0 border-t border-biz-stone/30">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="
                    group flex items-center gap-6
                    py-12 px-4
                    border-b border-biz-stone/30
                    transition-all duration-500
                    hover:bg-white hover:px-8
                    cursor-default
                  "
                >
                  <div className="flex-shrink-0 relative">
                    <div className="w-10 h-10 rounded-full border border-biz-stone flex items-center justify-center transition-all duration-500 group-hover:bg-biz-bronze group-hover:border-biz-bronze">
                      <Check className="h-4 w-4 text-biz-bronze transition-colors duration-500 group-hover:text-biz-cream" />
                    </div>
                    <span className="absolute -top-2 -left-2 text-[10px] font-bold text-biz-bronze/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="text-biz-charcoal text-base md:text-lg font-light leading-snug transition-all duration-500 group-hover:translate-x-2">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom CTA Card */}
            <div className="mt-12 p-8 md:p-14 rounded-biz bg-biz-sand/20 border border-biz-stone/30 text-center lg:text-left">
                <p className="text-biz-bronze font-medium text-lg italic tracking-wide">
                    "Driving excellence through disciplined processes and local expertise in India & UAE."
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
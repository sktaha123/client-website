import {
  Factory,
  Stethoscope,
  Laptop,
  ShoppingBag,
  Building,
  Truck,
  GraduationCap,
  Hotel,
  Landmark,
  Zap,
  PlaneTakeoff,
  HardHat,
  ArrowUpRight,
} from "lucide-react";

const industries = [
  { icon: Factory, name: "Manufacturing" },
  { icon: Stethoscope, name: "Healthcare" },
  { icon: Laptop, name: "Technology" },
  { icon: ShoppingBag, name: "Retail" },
  { icon: Building, name: "Real Estate" },
  { icon: Truck, name: "Logistics" },
  { icon: GraduationCap, name: "Education" },
  { icon: Hotel, name: "Hospitality" },
  { icon: Landmark, name: "Banking & Finance" },
  { icon: Zap, name: "Energy" },
  { icon: PlaneTakeoff, name: "Aviation" },
  { icon: HardHat, name: "Construction" },
];

export function Industries() {
  return (
    <section id="industries" className="py-24 bg-biz-cream font-dm">
      <div className="max-w-7xl mx-auto px-6">

        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-biz-bronze font-bold tracking-ultra uppercase text-[10px]">What we do</span>
              <div className="h-[1px] flex-1 bg-biz-bronze-pale" />
            </div>

            <h2 className="text-4xl md:text-6xl text-biz-charcoal font-light leading-tight tracking-tightest">
              Sector <span className="text-biz-bronze italic font-serif">Expertise</span> That Matters
            </h2>
          </div>
          <p className="text-biz-charcoal-soft text-lg font-light max-w-sm">
            Deep industry understanding across diverse verticals, enabling
            precise and compliant workforce solutions in India and the UAE.
          </p>
        </div>

        {/* --- Industries Directory (Minimalist Table) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-biz-bronze/20">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="
                  group relative flex items-center justify-between
                  p-10 border-b border-biz-bronze/20
                  transition-all duration-500 ease-out
                  hover:bg-biz-cream-light cursor-default
                "
              >
                <div className="flex items-center gap-6">
                  {/* Icon with subtle bronze glow on hover */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-biz-bronze/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 blur-xl" />
                    <Icon className="h-6 w-6 text-biz-bronze relative z-10 transition-transform duration-500 group-hover:-rotate-12" />
                  </div>

                  <span className="text-xl font-medium text-biz-charcoal tracking-tight transition-colors duration-300 group-hover:text-biz-bronze">
                    {industry.name}
                  </span>
                </div>

                {/* Minimalist Arrow Reveal */}
                <ArrowUpRight className="h-4 w-4 text-biz-bronze/30 opacity-0 -translate-y-2 translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
              </div>
            );
          })}
        </div>

        {/* --- Footer Note --- */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-6">
          <p className="text-biz-charcoal-soft font-light">
            Don’t see your industry?
          </p>
          <a
            href="#contact"
            className="
              group flex items-center gap-3 px-8 py-4
              bg-biz-charcoal-ink text-biz-cream-light rounded-full
              text-sm font-medium tracking-widest uppercase
              transition-all duration-300 hover:bg-biz-bronze
              hover:shadow-2xl hover:shadow-biz-bronze/20
            "
          >
            Request a Consultation
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Industries;
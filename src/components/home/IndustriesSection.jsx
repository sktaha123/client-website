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

export function IndustriesSection() {
  return (
    <section
      id="industries"
      className="py-24 bg-[#071510]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
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
            Industries We Serve
          </div>

          <h2
            className="
              text-4xl md:text-5xl
              text-[#f3f4f2]
              mb-4
              font-raleway
              font-semibold
            "
          >
            Sector Expertise That Matters
          </h2>

          <p
            className="
              text-lg
              text-[#cfd6d2]
              max-w-2xl
              mx-auto
              font-helvetica
              tracking-tightest
            "
          >
            Deep industry understanding across diverse verticals, enabling
            precise and compliant workforce solutions.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <div
                key={index}
                className="
                  flex flex-col items-center justify-center
                  p-6
                  bg-[#0b2a1f]
                  rounded-xl
                  border border-[#cfd6d2]/10
                  cursor-pointer
                  transition-all duration-300 ease-out
                  hover:border-[#1f5e46]
                  hover:-translate-y-1
                  hover:shadow-[0_14px_30px_rgba(31,94,70,0.25)]
                  group
                "
              >
                <div
                  className="
                    w-12 h-12
                    rounded-full
                    border border-[#cfd6d2]/20
                    flex items-center justify-center
                    mb-3
                    transition-all duration-300
                    group-hover:bg-[#1f5e46]
                    group-hover:border-[#1f5e46]
                  "
                >
                  <Icon
                    className="
                      h-5 w-5
                      text-[#cfd6d2]
                      transition-colors duration-300
                      group-hover:text-[#f3f4f2]
                    "
                  />
                </div>

                <span
                  className="
                    text-sm
                    text-[#f3f4f2]
                    text-center
                    font-helvetica
                    tracking-tightest
                  "
                >
                  {industry.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-14 text-center">
          <p className="text-[#cfd6d2] font-helvetica tracking-tightest">
            Don’t see your industry?{" "}
            <a
              href="#contact"
              className="
                text-[#f3f4f2]
                border-b border-[#1f5e46]
                hover:text-[#1f5e46]
                hover:border-[#f3f4f2]
                transition-colors
              "
            >
              Let’s talk
            </a>{" "}
            about your specific requirements.
          </p>
        </div>

      </div>
    </section>
  );
}

import { Award, Globe, Shield, Target } from "lucide-react";

const trustItems = [
  {
    icon: Award,
    title: "60+ Years",
    subtitle: "Business Legacy",
  },
  {
    icon: Globe,
    title: "Global Presence",
    subtitle: "India & UAE",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade",
    subtitle: "Compliance",
  },
  {
    icon: Target,
    title: "Industry-Focused",
    subtitle: "Solutions",
  },
];

export default function Trust() {
  return (
    <section
      className="
        py-14
        bg-[#071510]
        border-b border-[#cfd6d2]/10
      "
    >
      <div className="max-w-[90rem] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  flex flex-col items-center text-center
                  transition-all duration-300
                  
                  group
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-14 h-14
                    rounded-full
                    bg-[#1f5e46]/20
                    border border-[#cfd6d2]/15
                    flex items-center justify-center
                    mb-4
                    transition-all duration-300
                    group-hover:bg-[#1f5e46]
                    group-hover:border-[#1f5e46]
                    group-hover:shadow-[0_12px_28px_rgba(31,94,70,0.35)]
                  "
                >
                  <Icon className="h-6 w-6 text-[#f3f4f2]" />
                </div>

                {/* Title */}
                <div className="text-lg font-raleway font-semibold text-[#f3f4f2]">
                  {item.title}
                </div>

                {/* Subtitle */}
                <div className="text-sm font-helvetica tracking-tightest text-[#cfd6d2]">
                  {item.subtitle}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

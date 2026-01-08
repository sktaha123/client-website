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
        py-12
        bg-gradient-to-r
        from-[#e8eddf]
        to-[#cfdbd5]
        border-b border-[#cfdbd5]/50
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
                  group
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-14 h-14
                    rounded-full
                    bg-[#f5cb5c]/25
                    flex items-center justify-center
                    mb-4
                    transition-colors
                    group-hover:bg-[#f5cb5c]/40
                  "
                >
                  <Icon className="h-6 w-6 text-black/50" />
                </div>

                {/* Title */}
                <div className="text-lg font-semibold text-[#242423]">
                  {item.title}
                </div>

                {/* Subtitle */}
                <div className="text-sm text-[#333533]">
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

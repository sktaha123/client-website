import { Award, Globe, Shield, Target } from "lucide-react";

const trustItems = [
  { icon: Award, title: "60+ Years", subtitle: "Business Legacy" },
  { icon: Globe, title: "Global Presence", subtitle: "India & UAE" },
  { icon: Shield, title: "Enterprise-Grade", subtitle: "Compliance" },
  { icon: Target, title: "Industry-Focused", subtitle: "Solutions" },
];

export default function Trust() {
  return (
    <section className="py-5 bg-[#f0dcac] rounded-4xl mx-5 shadow-lg mb-2">
      <div className="max-w-[90rem] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  flex flex-col items-center justify-center text-center
                  bg-[#fef6e3]
                  rounded-4xl
                  transition-all duration-300
                  aspect-square md:aspect-auto
                  p-4 md:py-10
                  group
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-14 h-14
                    rounded-full
                    bg-[#750404]
                    flex items-center justify-center
                    mb-3 md:mb-4
                    transition-all duration-300
                    group-hover:bg-[#5b0202]
                  "
                >
                  <Icon className="h-6 w-6 text-[#fff4d9]" />
                </div>

                {/* Title */}
                <div className="text-sm md:text-lg font-dm font-semibold text-[#504017]">
                  {item.title}
                </div>

                {/* Subtitle */}
                <div className="text-xs md:text-sm font-dm tracking-tightest text-[#504017]">
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

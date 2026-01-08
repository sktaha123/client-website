import {
  Users,
  UserCheck,
  Briefcase,
  GraduationCap,
  Building2,
  Shield,
  Globe2,
  TrendingUp,
} from "lucide-react";
import { Card } from "../ui/card.jsx";
import { useInView } from "@/hooks/useInView";

const coreServices = [
  {
    icon: Users,
    title: "Permanent Staffing",
    description:
      "Strategic talent acquisition for long-term organizational growth and stability.",
  },
  {
    icon: UserCheck,
    title: "Contract Staffing",
    description:
      "Flexible workforce solutions for project-based and temporary requirements.",
  },
  {
    icon: Briefcase,
    title: "Payroll Management",
    description:
      "Comprehensive payroll processing with full compliance and accuracy.",
  },
  {
    icon: GraduationCap,
    title: "Training & Development",
    description:
      "Upskilling programs designed to enhance workforce capabilities.",
  },
];

const specializedServices = [
  {
    icon: Building2,
    title: "Executive Search",
    description:
      "C-suite and senior leadership recruitment for critical business roles.",
  },
  {
    icon: Shield,
    title: "Compliance Advisory",
    description:
      "Expert guidance on labor laws, regulations, and statutory requirements.",
  },
  {
    icon: Globe2,
    title: "Global Mobility",
    description:
      "Cross-border workforce deployment and immigration support.",
  },
  {
    icon: TrendingUp,
    title: "Workforce Analytics",
    description:
      "Data-driven insights for strategic workforce planning and optimization.",
  },
];

export function ServicesSection() {
  const { ref, isVisible } = useInView();

  return (
    <section id="services" className="py-24 bg-[#071510]">
      <div
        ref={ref}
        className={`
          transition-all duration-700 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-[#1f5e46]/15 text-[#cfd6d2] text-xs uppercase tracking-wider rounded-full mb-6 font-raleway">
              Our Services
            </div>

            <h2 className="text-4xl md:text-5xl text-[#f3f4f2] mb-4 font-raleway font-semibold">
              Comprehensive Workforce Solutions
            </h2>

            <p className="text-lg text-[#cfd6d2] max-w-2xl mx-auto font-helvetica tracking-tightest">
              End-to-end services designed to support every stage of your workforce lifecycle
            </p>
          </div>

          {/* Core Workforce Solutions */}
          <div className="mb-14">
            <h3 className="text-xl text-[#f3f4f2] mb-6 pl-4 border-l-4 border-[#1f5e46] font-raleway font-semibold">
              Core Workforce Solutions
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={index}
                    className="
                      p-6
                      bg-[#0b2a1f]
                      border border-[#cfd6d2]/10
                      transition-all duration-300
                      cursor-pointer
                      hover:border-[#1f5e46]
                      hover:-translate-y-1
                      hover:shadow-[0_16px_36px_rgba(31,94,70,0.25)]
                      group
                    "
                  >
                    <div
                      className="
                        w-12 h-12
                        rounded-lg
                        bg-[#1f5e46]/20
                        flex items-center justify-center
                        mb-4
                        transition-all duration-300
                        group-hover:bg-[#1f5e46]
                        group-hover:scale-110
                      "
                    >
                      <Icon className="h-6 w-6 text-[#f3f4f2]" />
                    </div>

                    <h4 className="text-lg text-[#f3f4f2] mb-2 font-raleway font-semibold">
                      {service.title}
                    </h4>

                    <p className="text-sm text-[#cfd6d2] leading-relaxed font-helvetica tracking-tightest">
                      {service.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Specialized & Global Solutions */}
          <div>
            <h3 className="text-xl text-[#f3f4f2] mb-6 pl-4 border-l-4 border-[#1f5e46] font-raleway font-semibold">
              Specialized & Global Solutions
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specializedServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={index}
                    className="
                      p-6
                      bg-[#0b2a1f]
                      border border-[#cfd6d2]/10
                      transition-all duration-300
                      cursor-pointer
                      hover:border-[#1f5e46]
                      hover:-translate-y-1
                      hover:shadow-[0_16px_36px_rgba(31,94,70,0.25)]
                      group
                    "
                  >
                    <div
                      className="
                        w-12 h-12
                        rounded-lg
                        bg-[#1f5e46]/20
                        flex items-center justify-center
                        mb-4
                        transition-all duration-300
                        group-hover:bg-[#1f5e46]
                        group-hover:scale-110
                      "
                    >
                      <Icon className="h-6 w-6 text-[#f3f4f2]" />
                    </div>

                    <h4 className="text-lg text-[#f3f4f2] mb-2 font-raleway font-semibold">
                      {service.title}
                    </h4>

                    <p className="text-sm text-[#cfd6d2] leading-relaxed font-helvetica tracking-tightest">
                      {service.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

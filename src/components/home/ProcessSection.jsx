import { useState } from "react";
import {
  Search,
  Lightbulb,
  Rocket,
  LineChart,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Card } from "../ui/card.jsx";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Understand Business Needs",
    description:
      "Deep-dive consultation to identify your unique workforce challenges and objectives.",
    details: [
      "Comprehensive business assessment",
      "Stakeholder consultation sessions",
      "Gap analysis and requirements mapping",
      "Industry benchmarking",
    ],
    color: "from-[#1f5e46] to-[#0b2a1f]",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Design Workforce Strategy",
    description:
      "Custom solutions tailored to your industry, scale, and compliance requirements.",
    details: [
      "Customized workforce planning",
      "Compliance framework design",
      "Talent sourcing strategy",
      "Budget optimization models",
    ],
    color: "from-[#0b2a1f] to-[#1f5e46]",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Deploy & Manage Talent",
    description:
      "Seamless onboarding and integration of qualified professionals into your operations.",
    details: [
      "Rapid talent deployment",
      "Comprehensive onboarding process",
      "Performance tracking systems",
      "Continuous support and management",
    ],
    color: "from-[#1f5e46] to-[#0b2a1f]",
  },
  {
    number: "04",
    icon: LineChart,
    title: "Optimize, Scale & Support",
    description:
      "Continuous monitoring, analytics, and strategic adjustments for sustained success.",
    details: [
      "Real-time performance analytics",
      "Quarterly business reviews",
      "Scalability planning",
      "24/7 dedicated support",
    ],
    color: "from-[#0b2a1f] to-[#1f5e46]",
  },
];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(null);
  const safeStep = activeStep !== null ? steps[activeStep] : steps[0];

  return (
    <section className="py-24 bg-[#071510]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#1f5e46]/15 text-[#cfd6d2] text-xs uppercase tracking-wider rounded-full mb-6 font-raleway">
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl text-[#f3f4f2] mb-4 font-raleway font-semibold">
            Our Proven Process
          </h2>
          <p className="text-lg text-[#cfd6d2] max-w-2xl mx-auto font-helvetica tracking-tightest">
            A disciplined, structured approach to delivering workforce excellence
          </p>
        </div>

        {/* DESKTOP TIMELINE */}
        <div className="hidden lg:block relative mb-12">
          <div className="absolute top-12 left-0 right-0 h-px bg-[#1f5e46]/40" />

          <div className="grid grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                  className="text-center cursor-pointer"
                >
                  <div className="relative inline-flex mb-6">
                    <div
                      className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color}
                        flex items-center justify-center transition-all duration-300
                        ${isActive ? "scale-110 shadow-[0_20px_40px_rgba(31,94,70,0.35)]" : ""}
                      `}
                    >
                      <Icon className="h-10 w-10 text-[#f3f4f2]" />
                    </div>

                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#050807] text-[#f3f4f2] rounded-full flex items-center justify-center text-sm">
                      {step.number}
                    </div>
                  </div>

                  <h3 className={`text-xl font-raleway font-semibold mb-2 ${
                    isActive ? "text-[#1f5e46]" : "text-[#f3f4f2]"
                  }`}>
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#cfd6d2] font-helvetica tracking-tightest">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* DESKTOP DETAILS */}
        <div className="hidden lg:block">
          <div
            className={`
              overflow-hidden transition-all duration-500 ease-out
              ${activeStep !== null
                ? "max-h-[600px] opacity-100 translate-y-0"
                : "max-h-0 opacity-0 -translate-y-4"}
            `}
          >
            <Card className="p-8 bg-[#0b2a1f] border border-[#cfd6d2]/10">
              <div className="flex gap-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${safeStep.color} flex items-center justify-center`}>
                  <safeStep.icon className="h-8 w-8 text-[#f3f4f2]" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl text-[#f3f4f2] mb-4 font-raleway font-semibold">
                    Step {safeStep.number}: {safeStep.title}
                  </h3>

                  <p className="text-[#cfd6d2] mb-6 font-helvetica tracking-tightest">
                    {safeStep.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-3">
                    {safeStep.details.map((d, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#1f5e46]" />
                        <span className="text-[#f3f4f2] font-helvetica">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* MOBILE ACCORDION */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const open = activeStep === index;

            return (
              <Card
                key={index}
                onClick={() => setActiveStep(open ? null : index)}
                className="overflow-hidden bg-[#0b2a1f] border border-[#cfd6d2]/10"
              >
                <div className="p-6 flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                    <Icon className="h-8 w-8 text-[#f3f4f2]" />
                  </div>

                  <div className="flex-1">
                    <h4 className="font-raleway font-semibold text-[#f3f4f2]">
                      {step.title}
                    </h4>
                    <p className="text-sm text-[#cfd6d2] font-helvetica tracking-tightest">
                      {step.description}
                    </p>
                  </div>

                  <ArrowRight className={`text-[#cfd6d2] transition-transform ${open ? "rotate-90" : ""}`} />
                </div>

                <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden px-6 pb-6 space-y-3">
                    {step.details.map((d, i) => (
                      <div key={i} className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#1f5e46]" />
                        <span className="text-[#f3f4f2] font-helvetica">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import { useState } from "react";
import {
  Search,
  Lightbulb,
  Rocket,
  LineChart,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Understand Business Needs",
    description: "Deep-dive consultation to identify your unique workforce challenges.",
    details: ["Business assessment", "Gap analysis", "Requirements mapping"],
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Design Workforce Strategy",
    description: "Custom solutions tailored to your industry and compliance requirements.",
    details: ["Workforce planning", "Compliance design", "Budget optimization"],
  },
  {
    number: "03",
    icon: Rocket,
    title: "Deploy & Manage Talent",
    description: "Seamless onboarding and integration of qualified professionals.",
    details: ["Rapid deployment", "Onboarding process", "Performance tracking"],
  },
  {
    number: "04",
    icon: LineChart,
    title: "Optimize, Scale & Support",
    description: "Continuous monitoring and analytics for sustained success.",
    details: ["Real-time analytics", "Scalability planning", "24/7 support"],
  },
];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(null);

  // Toggle function for mobile accessibility
  const handleToggle = (index) => {
    setActiveStep(activeStep === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-[#FAF9F6] font-dm overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Header --- */}
        <div className="mb-12 md:mb-20">
          <span className="text-[#8B7E6A] font-medium tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-6xl text-[#2D2D2D] font-light leading-tight max-w-3xl">
            A Disciplined <span className="text-[#8B7E6A] italic">Strategic</span> Roadmap
          </h2>
        </div>

        {/* --- Process Container --- */}
        <div className="relative">
          
          {/* Horizontal Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[45px] left-0 w-full h-[1px] bg-[#8B7E6A]/20" />

          {/* Vertical Line (Mobile Only) */}
          <div className="lg:hidden absolute left-[39px] top-0 bottom-0 w-[1px] bg-[#8B7E6A]/20" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;

              return (
                <div 
                  key={index}
                  // Desktop: Hover behavior
                  onMouseEnter={() => { if (window.innerWidth >= 1024) setActiveStep(index); }}
                  onMouseLeave={() => { if (window.innerWidth >= 1024) setActiveStep(null); }}
                  // Mobile: Click behavior
                  onClick={() => handleToggle(index)}
                  className="group relative cursor-pointer outline-none"
                  role="button"
                  aria-expanded={isActive}
                  tabIndex={0}
                >
                  {/* Step Marker (The Circle) */}
                  <div className="flex items-center gap-6 lg:block lg:mb-8">
                    <div className={`
                      relative z-10 w-20 h-20 rounded-full flex items-center justify-center
                      transition-all duration-500 border shrink-0
                      ${isActive 
                        ? "bg-[#8B7E6A] border-[#8B7E6A] shadow-xl shadow-[#8B7E6A]/20 scale-105" 
                        : "bg-white border-[#8B7E6A]/20"}
                    `}>
                      <Icon className={`h-7 w-7 transition-colors duration-500 ${isActive ? "text-white" : "text-[#8B7E6A]"}`} />
                      
                      <span className={`
                        absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold border
                        transition-colors duration-500
                        ${isActive ? "bg-[#2D2219] text-white border-[#2D2219]" : "bg-[#EAE4D9] text-[#2D2219] border-white"}
                      `}>
                        {step.number}
                      </span>
                    </div>

                    {/* Mobile Title (Next to circle on small screens) */}
                    <div className="lg:hidden flex-1">
                       <h3 className="text-lg font-semibold text-[#2D2D2D]">{step.title}</h3>
                       <div className="flex items-center gap-1 text-[#8B7E6A] text-[10px] font-bold uppercase tracking-widest mt-1">
                          {isActive ? "Close" : "View Details"}
                          <ChevronDown className={`h-3 w-3 transition-transform ${isActive ? 'rotate-180' : ''}`} />
                       </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`
                    transition-all duration-500 border rounded-[2rem] md:rounded-[2.5rem]
                    lg:block // Always show content on desktop
                    ${isActive 
                      ? "bg-white border-[#8B7E6A]/30 shadow-2xl p-6 md:p-8 mt-4 lg:mt-0 opacity-100" 
                      : "bg-transparent border-transparent lg:opacity-100 p-0 lg:p-8 max-h-0 lg:max-h-none overflow-hidden lg:overflow-visible"}
                  `}>
                    {/* Desktop Title (Hidden on mobile inside the card) */}
                    <h3 className="hidden lg:block text-xl font-semibold text-[#2D2D2D] mb-4">
                      {step.title}
                    </h3>
                    
                    <p className={`text-[#6B5E4C] text-sm leading-relaxed mb-6 font-light ${isActive ? 'mt-0' : 'hidden lg:block'}`}>
                      {step.description}
                    </p>

                    {/* Reveal Details */}
                    <div className={`
                      space-y-3 transition-all duration-500
                      ${isActive ? "opacity-100 max-h-60" : "opacity-0 max-h-0 pointer-events-none lg:max-h-0"}
                    `}>
                      {step.details.map((detail, dIndex) => (
                        <div key={dIndex} className="flex items-center gap-3">
                          <CheckCircle2 className="h-4 w-4 text-[#8B7E6A]" />
                          <span className="text-xs text-[#8B7E6A] font-medium tracking-wide">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Desktop Indicator */}
                    <div className={`hidden lg:flex items-center gap-2 text-[#8B7E6A] mt-2 transition-opacity ${isActive ? 'opacity-0' : 'opacity-50'}`}>
                        <span className="text-[10px] font-bold uppercase tracking-widest">Explore</span>
                        <ChevronRight className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- Footer Badge --- */}
        
      </div>
    </section>
  );
}
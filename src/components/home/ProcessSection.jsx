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

  const handleToggle = (index) => {
    setActiveStep(activeStep === index ? null : index);
  };

  return (
    // Added mt-24 and pt-32 to provide deep clearance for overlapping sections
    <section id="process" className="mt-24 pt-32 pb-24 md:pb-40 bg-[#FAF9F6] font-dm overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Header --- */}
        <div className="mb-16 md:mb-28">
          <span className="text-[#8B7E6A] font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-6 block">
            Our Approach
          </span>
          <h2 className="text-4xl md:text-7xl text-[#2D2D2D] font-light leading-[1.1] max-w-4xl tracking-tight">
            A Disciplined <span className="text-[#8B7E6A] italic font-serif">Strategic</span> Roadmap
          </h2>
        </div>

        {/* --- Process Container --- */}
        <div className="relative">
          
          {/* Horizontal Line (Desktop Only) - Thinned for elegance */}
          <div className="hidden lg:block absolute top-[45px] left-0 w-full h-[0.5px] bg-[#8B7E6A]/30" />

          {/* Vertical Line (Mobile Only) */}
          <div className="lg:hidden absolute left-[39px] top-0 bottom-0 w-[1px] bg-[#8B7E6A]/20" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 md:gap-14 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;

              return (
                <div 
                  key={index}
                  onMouseEnter={() => { if (window.innerWidth >= 1024) setActiveStep(index); }}
                  onMouseLeave={() => { if (window.innerWidth >= 1024) setActiveStep(null); }}
                  onClick={() => handleToggle(index)}
                  className="group relative cursor-pointer outline-none transition-transform duration-300"
                  role="button"
                  aria-expanded={isActive}
                  tabIndex={0}
                >
                  {/* Step Marker */}
                  <div className="flex items-center gap-8 lg:block lg:mb-10">
                    <div className={`
                      relative z-10 w-20 h-20 rounded-full flex items-center justify-center
                      transition-all duration-700 border shrink-0
                      ${isActive 
                        ? "bg-[#8B7E6A] border-[#8B7E6A] shadow-2xl shadow-[#8B7E6A]/30 scale-110" 
                        : "bg-white border-[#8B7E6A]/20"}
                    `}>
                      <Icon className={`h-8 w-8 transition-colors duration-500 ${isActive ? "text-white" : "text-[#8B7E6A]"}`} />
                      
                      <span className={`
                        absolute -top-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-black border
                        transition-all duration-500
                        ${isActive ? "bg-[#2D2219] text-white border-[#2D2219]" : "bg-[#EAE4D9] text-[#2D2219] border-white"}
                      `}>
                        {step.number}
                      </span>
                    </div>

                    <div className="lg:hidden flex-1">
                       <h3 className="text-xl font-medium text-[#2D2D2D] tracking-tight">{step.title}</h3>
                       <div className="flex items-center gap-2 text-[#8B7E6A] text-[11px] font-bold uppercase tracking-[0.15em] mt-2">
                          {isActive ? "Close Phase" : "Explore Phase"}
                          <ChevronDown className={`h-3 w-3 transition-transform duration-500 ${isActive ? 'rotate-180' : ''}`} />
                       </div>
                    </div>
                  </div>

                  {/* Content Card - Increased text size and spacing */}
                  <div className={`
                    transition-all duration-700 border rounded-[2.5rem]
                    lg:block
                    ${isActive 
                      ? "bg-white border-[#8B7E6A]/30 shadow-[0_32px_64px_-16px_rgba(139,126,106,0.15)] p-8 md:p-10 mt-6 lg:mt-0 opacity-100 translate-y-[-8px]" 
                      : "bg-transparent border-transparent lg:opacity-100 p-0 lg:p-10 max-h-0 lg:max-h-none overflow-hidden lg:overflow-visible translate-y-0"}
                  `}>
                    <h3 className="hidden lg:block text-2xl font-medium text-[#2D2D2D] mb-5 tracking-tight leading-tight">
                      {step.title}
                    </h3>
                    
                    <p className={`text-[#6B5E4C] text-lg leading-relaxed mb-8 font-light ${isActive ? 'mt-0' : 'hidden lg:block'}`}>
                      {step.description}
                    </p>

                    {/* Reveal Details */}
                    <div className={`
                      space-y-4 transition-all duration-700
                      ${isActive ? "opacity-100 max-h-80" : "opacity-0 max-h-0 pointer-events-none lg:max-h-0"}
                    `}>
                      {step.details.map((detail, dIndex) => (
                        <div key={dIndex} className="flex items-center gap-4 group/item">
                          <CheckCircle2 className="h-4 w-4 text-[#8B7E6A] shrink-0" />
                          <span className="text-[13px] text-[#2D2219]/80 font-medium tracking-wide">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className={`hidden lg:flex items-center gap-2 text-[#8B7E6A] mt-6 transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-60'}`}>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Detailed Analysis</span>
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
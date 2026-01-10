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

export function Process() {
  const [activeStep, setActiveStep] = useState(null);

  const handleToggle = (index) => {
    setActiveStep(activeStep === index ? null : index);
  };

  return (
    <section id="process" className="mt-24 pt-32 pb-24 md:pb-40 bg-biz-cream font-dm overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Header --- */}
        <div className="mb-16 md:mb-28">
          <div className="flex items-center gap-4 mb-8">
              <span className="text-biz-bronze font-bold tracking-ultra uppercase text-[10px]">Our Approach</span>
              <div className="h-[1px] flex-1 bg-biz-bronze-pale" />
            </div>
          <h2 className="text-4xl md:text-7xl text-biz-charcoal font-light leading-[1.1] max-w-4xl tracking-tightest">
            A Disciplined <span className="text-biz-bronze italic font-serif">Strategic</span> Roadmap
          </h2>
        </div>

        {/* --- Process Container --- */}
        <div className="relative">
          
          {/* Horizontal Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[45px] left-0 w-full h-[0.5px] bg-biz-bronze/30" />

          {/* Vertical Line (Mobile Only) */}
          <div className="lg:hidden absolute left-[39px] top-0 bottom-0 w-[1px] bg-biz-bronze/20" />

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
                        ? "bg-biz-bronze border-biz-bronze shadow-2xl shadow-biz-bronze/30 scale-110" 
                        : "bg-biz-cream-light border-biz-bronze-pale"}
                    `}>
                      <Icon className={`h-8 w-8 transition-colors duration-500 ${isActive ? "text-biz-cream-light" : "text-biz-bronze"}`} />
                      
                      <span className={`
                        absolute -top-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-black border
                        transition-all duration-500
                        ${isActive ? "bg-biz-charcoal text-biz-cream-light border-biz-charcoal" : "bg-biz-sand text-biz-charcoal border-biz-cream-light"}
                      `}>
                        {step.number}
                      </span>
                    </div>

                    <div className="lg:hidden flex-1">
                       <h3 className="text-xl font-medium text-biz-charcoal tracking-tight">{step.title}</h3>
                       <div className="flex items-center gap-2 text-biz-bronze text-[11px] font-bold uppercase tracking-widest mt-2">
                          {isActive ? "Close Phase" : "Explore Phase"}
                          <ChevronDown className={`h-3 w-3 transition-transform duration-500 ${isActive ? 'rotate-180' : ''}`} />
                       </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`
                    transition-all duration-700 border rounded-biz
                    lg:block
                    ${isActive 
                      ? "bg-biz-cream-light border-biz-bronze/30 shadow-[0_32px_64px_-16px_rgba(139,126,106,0.15)] p-8 md:p-10 mt-6 lg:mt-0 opacity-100 translate-y-[-8px]" 
                      : "bg-transparent border-transparent lg:opacity-100 p-0 lg:p-10 max-h-0 lg:max-h-none overflow-hidden lg:overflow-visible translate-y-0"}
                  `}>
                    <h3 className="hidden lg:block text-2xl font-medium text-biz-charcoal mb-5 tracking-tight leading-tight">
                      {step.title}
                    </h3>
                    
                    <p className={`text-biz-charcoal-soft text-lg leading-relaxed mb-8 font-light ${isActive ? 'mt-0' : 'hidden lg:block'}`}>
                      {step.description}
                    </p>

                    {/* Reveal Details */}
                    <div className={`
                      space-y-4 transition-all duration-700
                      ${isActive ? "opacity-100 max-h-80" : "opacity-0 max-h-0 pointer-events-none lg:max-h-0"}
                    `}>
                      {step.details.map((detail, dIndex) => (
                        <div key={dIndex} className="flex items-center gap-4 group/item">
                          <CheckCircle2 className="h-4 w-4 text-biz-bronze shrink-0" />
                          <span className="text-[13px] text-biz-charcoal-muted font-medium tracking-wide">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className={`hidden lg:flex items-center gap-2 text-biz-bronze mt-6 transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-60'}`}>
                        <span className="text-[10px] font-black uppercase tracking-widest">Detailed Analysis</span>
                        <ChevronRight className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
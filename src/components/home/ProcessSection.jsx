import { useState } from 'react';
import { Search, Lightbulb, Rocket, LineChart, CheckCircle2, ArrowRight } from 'lucide-react';
import { Card } from '../ui/card.jsx';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Understand Business Needs',
    description: 'Deep-dive consultation to identify your unique workforce challenges and objectives.',
    details: [
      'Comprehensive business assessment',
      'Stakeholder consultation sessions',
      'Gap analysis and requirements mapping',
      'Industry benchmarking'
    ],
    color: 'from-[#f5cb5c] to-[#e6b846]'
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Design Workforce Strategy',
    description: 'Custom solutions tailored to your industry, scale, and compliance requirements.',
    details: [
      'Customized workforce planning',
      'Compliance framework design',
      'Talent sourcing strategy',
      'Budget optimization models'
    ],
    color: 'from-[#e6b846] to-[#f5cb5c]'
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Deploy & Manage Talent',
    description: 'Seamless onboarding and integration of qualified professionals into your operations.',
    details: [
      'Rapid talent deployment',
      'Comprehensive onboarding process',
      'Performance tracking systems',
      'Continuous support and management'
    ],
    color: 'from-[#f5cb5c] to-[#e6b846]'
  },
  {
    number: '04',
    icon: LineChart,
    title: 'Optimize, Scale & Support',
    description: 'Continuous monitoring, analytics, and strategic adjustments for sustained success.',
    details: [
      'Real-time performance analytics',
      'Quarterly business reviews',
      'Scalability planning',
      '24/7 dedicated support'
    ],
    color: 'from-[#e8eddf] to-[#f5cb5c]'
  },
];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-[#cfdbd5]/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-[#f5cb5c]/20 text-[#f5cb5c] text-xs uppercase tracking-wider rounded-full mb-6 font-raleway">
            How We Work
          </div>
          <h2 className="text-4xl md:text-5xl text-[#242423] mb-4 font-raleway font-semibold">
            Our Proven Process
          </h2>
          <p className="text-lg text-[#333533] max-w-2xl mx-auto font-helvetica tracking-tightest">
            A systematic, data-driven approach to delivering workforce excellence at every stage
          </p>
        </div>

        {/* Desktop Timeline View */}
        <div className="hidden lg:block relative mb-16">
          {/* Connection Line */}
          <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-[#f5cb5c]/20 via-[#f5cb5c] to-[#f5cb5c]/20" />

          <div className="grid grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              return (
                <div 
                  key={index} 
                  className="relative cursor-pointer"
                  onMouseEnter={() => setActiveStep(index)}
                >
                  {/* Step Card */}
                  <div className="text-center">
                    {/* Icon Badge */}
                    <div className="relative inline-flex mb-6">
                      <div 
                        className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg relative z-10 transition-all duration-300 ${
                          isActive ? 'scale-110 shadow-2xl' : 'scale-100'
                        }`}
                      >
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      <div className={`absolute -top-2 -right-2 w-10 h-10 bg-[#242423] text-white rounded-full flex items-center justify-center text-sm z-20 transition-all duration-300 ${
                        isActive ? 'scale-110' : 'scale-100'
                      }`}>
                        {step.number}
                      </div>
                      
                      {/* Active Indicator Ring */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-full border-4 border-[#f5cb5c]/30 animate-pulse" />
                      )}
                    </div>
                    
                    <h3 className={`text-xl mb-3 transition-colors font-raleway font-semibold ${
                      isActive ? 'text-[#f5cb5c]' : 'text-[#242423]'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#333533] leading-relaxed mb-4 font-helvetica tracking-tightest">
                      {step.description}
                    </p>

                    {/* Arrow Indicator */}
                    
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Details Panel - Desktop */}
        <div className="hidden lg:block">
          <Card className="p-8 border-2 border-[#f5cb5c]/20 bg-gradient-to-br from-[#e8eddf]/20 to-[#f5cb5c]/10">
            <div className="flex items-start gap-6">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${steps[activeStep].color} flex items-center justify-center flex-shrink-0`}>
                {(() => {
                  const Icon = steps[activeStep].icon;
                  return <Icon className="h-8 w-8 text-white" />;
                })()}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl text-[#242423] mb-4 font-raleway font-semibold">
                  Step {steps[activeStep].number}: {steps[activeStep].title}
                </h3>
                <p className="text-[#333533] mb-6 leading-relaxed font-helvetica tracking-tightest">
                  {steps[activeStep].description}
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {steps[activeStep].details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#f5cb5c] flex-shrink-0" />
                      <span className="text-[#242423] font-helvetica">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Mobile/Tablet Accordion View */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isExpanded = activeStep === index;
            return (
              <Card 
                key={index}
                className={`overflow-hidden transition-all duration-300 cursor-pointer ${
                  isExpanded ? 'border-2 border-[#f5cb5c] shadow-lg' : 'border border-[#cfdbd5]'
                }`}
                onClick={() => setActiveStep(isExpanded ? -1 : index)}
              >
                {/* Header */}
                <div className="p-6 flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 relative`}>
                    <Icon className="h-8 w-8 text-white" />
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#242423] text-white rounded-full flex items-center justify-center text-xs">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg text-[#242423] mb-1 font-raleway font-semibold">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#333533] font-helvetica tracking-tightest">
                      {step.description}
                    </p>
                  </div>
                  <div className={`transform transition-transform ${isExpanded ? 'rotate-90' : ''}`}>
                    <ArrowRight className="h-5 w-5 text-[#f5cb5c]" />
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-6 pb-6 border-t border-[#cfdbd5] pt-4">
                    <div className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-[#f5cb5c] flex-shrink-0" />
                          <span className="text-[#242423] font-helvetica">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Timeline Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-[#e8eddf] to-[#cfdbd5]/50 rounded-xl border border-[#cfdbd5]">
            <div className="text-3xl text-[#f5cb5c] mb-2 font-raleway font-semibold">48hrs</div>
            <div className="text-sm text-[#333533] font-helvetica tracking-tightest">Average Response Time</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-[#e8eddf] to-[#cfdbd5]/50 rounded-xl border border-[#cfdbd5]">
            <div className="text-3xl text-[#f5cb5c] mb-2 font-raleway font-semibold">95%</div>
            <div className="text-sm text-[#333533] font-helvetica tracking-tightest">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-[#e8eddf] to-[#cfdbd5]/50 rounded-xl border border-[#cfdbd5]">
            <div className="text-3xl text-[#f5cb5c] mb-2 font-raleway font-semibold">7-14 Days</div>
            <div className="text-sm text-[#333533] font-helvetica tracking-tightest">Deployment Timeline</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-[#e8eddf] to-[#cfdbd5]/50 rounded-xl border border-[#cfdbd5]">
            <div className="text-3xl text-[#f5cb5c] mb-2 font-raleway font-semibold">24/7</div>
            <div className="text-sm text-[#333533] font-helvetica tracking-tightest">Ongoing Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
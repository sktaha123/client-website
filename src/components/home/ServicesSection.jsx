import { 
  Users, 
  UserCheck, 
  Briefcase, 
  GraduationCap, 
  Building2, 
  Shield, 
  Globe2, 
  TrendingUp 
} from 'lucide-react';
import { Card } from '../ui/card.jsx';
import { useInView } from "@/hooks/useInView";

const coreServices = [
  {
    icon: Users,
    title: 'Permanent Staffing',
    description: 'Strategic talent acquisition for long-term organizational growth and stability.',
  },
  {
    icon: UserCheck,
    title: 'Contract Staffing',
    description: 'Flexible workforce solutions for project-based and temporary requirements.',
  },
  {
    icon: Briefcase,
    title: 'Payroll Management',
    description: 'Comprehensive payroll processing with full compliance and accuracy.',
  },
  {
    icon: GraduationCap,
    title: 'Training & Development',
    description: 'Upskilling programs designed to enhance workforce capabilities.',
  },
];

const specializedServices = [
  {
    icon: Building2,
    title: 'Executive Search',
    description: 'C-suite and senior leadership recruitment for critical business roles.',
  },
  {
    icon: Shield,
    title: 'Compliance Advisory',
    description: 'Expert guidance on labor laws, regulations, and statutory requirements.',
  },
  {
    icon: Globe2,
    title: 'Global Mobility',
    description: 'Cross-border workforce deployment and immigration support.',
  },
  {
    icon: TrendingUp,
    title: 'Workforce Analytics',
    description: 'Data-driven insights for strategic workforce planning and optimization.',
  },
];

export function ServicesSection() {
  const { ref, isVisible } = useInView();

  return (
    
    <section id="services" className="py-24 bg-[#cfdbd5]/20">
    <div
      ref={ref}
      className={`
        transition-all duration-750 ease-out
        ${isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-[#f5cb5c]/20 text-[#f5cb5c] text-xs uppercase tracking-wider rounded-full mb-6 font-raleway">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl text-[#242423] mb-4 font-raleway font-semibold">
            Comprehensive Workforce Solutions
          </h2>
          <p className="text-lg text-[#333533] max-w-2xl mx-auto font-helvetica tracking-tightest">
            End-to-end services designed to meet every aspect of your workforce needs
          </p>
        </div>

        {/* Core Workforce Solutions */}
        <div className="mb-12">
          <h3 className="text-xl text-[#242423] mb-6 pl-4 border-l-4 border-[#f5cb5c] font-raleway font-semibold">
            Core Workforce Solutions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-[#cfdbd5] hover:border-[#f5cb5c]/50 group bg-[#e8eddf]/30"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#f5cb5c]/20 flex items-center justify-center mb-4 group-hover:bg-[#f5cb5c] group-hover:scale-110 transition-all">
                    <Icon className="h-6 w-6 text-[#f5cb5c] group-hover:text-[#242423] transition-colors" />
                  </div>
                  <h4 className="text-lg text-[#242423] mb-2 font-raleway font-semibold">
                    {service.title}
                  </h4>
                  <p className="text-sm text-[#333533] leading-relaxed font-helvetica tracking-tightest">
                    {service.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Specialized & Global Solutions */}
        <div>
          <h3 className="text-xl text-[#242423] mb-6 pl-4 border-l-4 border-[#f5cb5c] font-raleway font-semibold">
            Specialized & Global Solutions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-[#cfdbd5] hover:border-[#f5cb5c]/50 group bg-[#e8eddf]/30"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#f5cb5c]/20 flex items-center justify-center mb-4 group-hover:bg-[#f5cb5c] group-hover:scale-110 transition-all">
                    <Icon className="h-6 w-6 text-[#f5cb5c] group-hover:text-[#242423] transition-colors" />
                  </div>
                  <h4 className="text-lg text-[#242423] mb-2 font-raleway font-semibold">
                    {service.title}
                  </h4>
                  <p className="text-sm text-[#333533] leading-relaxed font-helvetica tracking-tightest">
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

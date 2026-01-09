import {
  Users, UserCheck, Briefcase, GraduationCap,
  Building2, Shield, Globe2, TrendingUp, ArrowUpRight
} from "lucide-react";
import { useInView } from "@/hooks/useInView";

const coreServices = [
  {
    icon: Users,
    title: "Permanent Staffing",
    description: "Strategic talent acquisition for long-term organizational growth and stability.",
    span: "md:col-span-2",
    bg: "bg-[#EAE4D9]"
  },
  {
    icon: UserCheck,
    title: "Contract Staffing",
    description: "Flexible workforce solutions for project-based requirements.",
    span: "md:col-span-1",
    bg: "bg-[#D9CDBA]"
  },
  {
    icon: Briefcase,
    title: "Payroll Management",
    description: "Comprehensive payroll processing with full compliance.",
    span: "md:col-span-1",
    bg: "bg-[#D9CDBA]"
  },
  {
    icon: GraduationCap,
    title: "Training & Development",
    description: "Upskilling programs designed to enhance workforce capabilities.",
    span: "md:col-span-2",
    bg: "bg-[#EAE4D9]"
  },
];

const specializedServices = [
  {
    icon: Building2,
    title: "Executive Search",
    description: "C-suite and senior leadership recruitment for critical roles.",
    span: "md:col-span-2", // Made wider to allow for the background image feel
    bg: "bg-[#2D2219]",
    isPremium: true,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: Shield,
    title: "Compliance Advisory",
    description: "Expert guidance on labor laws and statutory requirements.",
    span: "md:col-span-1",
    bg: "bg-[#8B7E6A]"
  },
  {
    icon: Globe2,
    title: "Global Mobility",
    description: "Cross-border workforce deployment and immigration support.",
    span: "md:col-span-1",
    bg: "bg-[#D9CDBA]"
  },
];

export function ServicesSection() {
  const { ref, isVisible } = useInView();

  return (
    <section id="services" className="py-24 bg-[#FAF9F6] font-dm overflow-hidden">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ease-out 
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        {/* --- Luxury Minimalist Header --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-[#EAE4D9] pb-12">
          <div className="max-w-2xl">
            <span className="text-[#8B7E6A] font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
              Our Services
            </span>
            <h2 className="text-4xl md:text-6xl text-[#2D2D2D] font-light leading-tight">
              Comprehensive <span className="text-[#8B7E6A] italic">Workforce</span> Solutions
            </h2>
          </div>
          <p className="text-lg text-[#6B5E4C] max-w-xs leading-relaxed font-light">
            End-to-end services designed to support every stage of your workforce lifecycle.
          </p>
        </div>

        {/* --- Bento Grid Layout --- */}
        <div className="space-y-16">
          <div>
            <h3 className="text-[#8B7E6A] text-xs font-bold uppercase tracking-[0.3em] mb-8">
              Core Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[240px]">
              {coreServices.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[#8B7E6A] text-xs font-bold uppercase tracking-[0.3em] mb-8">
              Specialized Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-[240px]">
              {specializedServices.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  const Icon = service.icon;
  const isDark = service.bg === "bg-[#8B7E6A]" || service.isPremium;
  
  return (
    <div
      className={`
        ${service.span} ${service.bg}
        relative rounded-[2.5rem] p-10 group overflow-hidden
        transition-all duration-500 hover:shadow-2xl hover:-translate-y-1
        flex flex-col justify-between
      `}
    >
      {/* Background Image Overlay for Premium Cards (Like the furniture image) */}
      {service.image && (
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image} 
            alt="" 
            className="w-full h-full object-cover opacity-40 grayscale group-hover:scale-110 transition-transform duration-1000" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D2219] via-[#2D2219]/40 to-transparent" />
        </div>
      )}

      {/* Glassmorphism sphere effect */}
      {!service.image && (
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-white opacity-20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
      )}

      <div className="z-10 flex justify-between items-start">
        <div className={`w-14 h-14 rounded-2xl backdrop-blur-md flex items-center justify-center shadow-sm transition-all duration-500
          ${isDark ? "bg-white/10" : "bg-white/40 group-hover:bg-white"}`}>
          <Icon className={`h-7 w-7 ${isDark ? "text-white" : "text-[#634E3C]"}`} />
        </div>
        <ArrowUpRight className={`h-6 w-6 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1
          ${isDark ? "text-white/40 group-hover:text-white" : "text-[#2D2D2D]/20 group-hover:text-[#2D2D2D]"}`} />
      </div>

      <div className="z-10">
        <h4 className={`text-xl font-semibold mb-2 ${isDark ? "text-white" : "text-[#2D2D2D]"}`}>
          {service.title}
        </h4>
        <p className={`text-sm leading-relaxed ${isDark ? "text-white/70" : "text-[#6B5E4C]"}`}>
          {service.description}
        </p>
      </div>
    </div>
  );
}
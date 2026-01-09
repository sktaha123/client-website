import React from "react";
import { 
  Users, Layers, UserPlus, HardHat, 
  Globe, GraduationCap, Laptop, ArrowUpRight 
} from "lucide-react";

const services = [
  {
    number: "01",
    category: "EXECUTIVE",
    icon: Users,
    title: "Recruitment",
    description: "Tailored hiring solutions connecting businesses with talent that ensures cultural fit and long-term success. We focus on understanding your unique DNA to find leaders who drive growth.",
    gridClass: "md:col-span-7 md:row-span-2", 
    bg: "bg-[#EAE4D9]",
  },
  {
    number: "02",
    category: "OPERATIONS",
    icon: Layers,
    title: "Bulk Recruitment",
    description: "Efficient large-scale hiring designed to meet urgent demands without compromising quality. Our streamlined processes ensure high-volume placements with precision and speed.",
    gridClass: "md:col-span-5 md:row-span-1",
    bg: "bg-white border border-[#D9CDBA]",
  },
  {
    number: "03",
    category: "COMPLIANCE",
    icon: UserPlus,
    title: "EOR Services",
    description: "Staffing & Employer of Record solutions that simplify compliance, payroll, and HR management across borders, allowing you to focus on your core business expansion.",
    gridClass: "md:col-span-5 md:row-span-1",
    bg: "bg-[#D9CDBA]",
  },
  {
    number: "04",
    category: "MANPOWER",
    icon: HardHat,
    title: "Blue Collar Hiring",
    description: "Specialized recruitment for skilled and semi-skilled workers, supporting operational excellence. We bridge the gap between industrial demand and reliable, trained manpower.",
    gridClass: "md:col-span-4 md:row-span-2",
    bg: "bg-[#2D2219]",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
  },
  {
    number: "05",
    category: "FRONTIER",
    icon: Globe,
    title: "Global Placement",
    description: "International recruitment expertise bridging markets and helping professionals expand across borders with ease and strategic placement support.",
    gridClass: "md:col-span-4 md:row-span-1",
    bg: "bg-[#8B7E6A]",
  },
  {
    number: "06",
    category: "ACADEMY",
    icon: GraduationCap,
    title: "Training",
    description: "Customized upskilling programs to enhance productivity and prepare teams for evolving industry needs through modern pedagogical approaches.",
    gridClass: "md:col-span-4 md:row-span-1",
    bg: "bg-[#EAE4D9]",
  },
  {
    number: "07",
    category: "INNOVATION",
    icon: Laptop,
    title: "Technical Consulting",
    description: "Strategic consulting blending technical expertise with insight for sustainable business innovation. We provide the roadmap for navigating complex digital and operational shifts.",
    gridClass: "md:col-span-8 md:row-span-1",
    bg: "bg-[#FAF9F6] border border-[#D9CDBA]",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative z-20 py-24 md:py-40 bg-[#FAF9F6] font-dm rounded-t-[3rem] md:rounded-t-[6rem] shadow-[-20px_0_80px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32 gap-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[#8B7E6A] font-bold tracking-[0.4em] uppercase text-[10px]">What we do</span>
              <div className="h-[1px] flex-1 bg-[#D9CDBA]" />
            </div>
            <h2 className="text-5xl md:text-[7rem] text-[#2D2219] font-light leading-[0.9] tracking-tighter">
              A comprehensive <br />
              <span className="text-[#8B7E6A] italic font-serif">ecosystem</span> of talent.
            </h2>
          </div>
          <p className="hidden md:block text-xl text-[#6B5E4C] max-w-[280px] font-light italic opacity-70 mb-4">
            "Merging heritage with modern workforce innovation."
          </p>
        </div>

        {/* --- Mosaic Grid --- */}
        <div className="flex flex-col md:grid md:grid-cols-12 md:grid-rows-4 gap-4 md:gap-6 h-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Mobile Spacer */}
        <div className="h-[15vh] md:hidden" />
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const Icon = service.icon;
  const isDark = service.bg.includes("#2D2219") || service.bg.includes("#8B7E6A");
  const mobileStickyTop = `${80 + index * 25}px`;

  return (
    <div
      style={{ top: mobileStickyTop, zIndex: index }}
      className={`
        ${service.gridClass} ${service.bg}
        sticky md:relative 
        mb-12 md:mb-0 
        group relative overflow-hidden rounded-[2.5rem] md:rounded-[1.5rem]
        min-h-[400px] md:min-h-0
        transition-all duration-700 hover:shadow-2xl flex flex-col
      `}
    >
      {/* Background Image Logic */}
      {service.image && (
        <div className="absolute inset-0 z-0 opacity-20 grayscale group-hover:scale-105 transition-transform duration-1000">
          <img src={service.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#2D2219]/40" />
        </div>
      )}

      <div className="relative z-10 p-8 md:p-10 flex h-full">
        {/* Desktop Vertical Accent */}
        <div className="hidden md:flex flex-col justify-between border-r border-black/5 pr-6 mr-8">
          <span className={`rotate-180 [writing-mode:vertical-lr] text-[10px] tracking-[0.5em] font-bold uppercase ${isDark ? "text-white/40" : "text-[#8B7E6A]"}`}>
            {service.category}
          </span>
          <span className={`text-xs font-serif italic ${isDark ? "text-white/30" : "text-black/20"}`}>
            {service.number}
          </span>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col justify-between w-full h-full">
          <div className="flex justify-between items-start">
            <div className={`p-4 rounded-2xl transition-all duration-500 ${isDark ? "bg-white/10 text-white" : "bg-white shadow-sm text-[#2D2219]"}`}>
              <Icon className="h-6 w-6" />
            </div>
            <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 group-hover:bg-[#2D2219] group-hover:text-white group-hover:border-[#2D2219] ${isDark ? "border-white/20 text-white/40" : "border-black/5 text-black/20"}`}>
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>

          <div className="mt-12 md:mt-0">
            <h4 className={`text-3xl md:text-4xl font-light tracking-tight mb-4 ${isDark ? "text-white" : "text-[#2D2219]"}`}>
              {service.title}
            </h4>
            <p className={`text-base leading-relaxed font-light max-w-[95%] ${isDark ? "text-white/60" : "text-[#6B5E4C]"}`}>
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from "react";
import { 
  Users, UserCheck, Briefcase, GraduationCap, 
  Building2, Shield, Globe2, ArrowUpRight 
} from "lucide-react";
import { motion } from "framer-motion";

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
    span: "md:col-span-2",
    bg: "bg-[#2D2219]",
    isPremium: true,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"
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
    bg: "bg-[#D9CDBA]",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

export function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-[#FAF9F6] font-dm overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Header with Reveal Animation --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8 border-b border-[#EAE4D9] pb-16"
        >
          <div className="max-w-2xl">
            <span className="text-[#8B7E6A] font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">
              Global Expertise
            </span>
            <h2 className="text-5xl md:text-7xl text-[#2D2D2D] font-light leading-[1.1] tracking-tight">
              Our <span className="text-[#8B7E6A] italic font-serif">Solutions</span> Portfolio
            </h2>
          </div>
          <p className="text-xl text-[#6B5E4C] max-w-sm leading-relaxed font-light">
            An ecosystem of high-impact services tailored for the modern enterprise.
          </p>
        </motion.div>

        {/* --- Bento Grid Section --- */}
        <div className="space-y-24">
          
          {/* Core Solutions Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-[#8B7E6A] text-[10px] font-bold uppercase tracking-[0.4em] mb-10 opacity-60">
              Core Operations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
              {coreServices.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </motion.div>

          {/* Specialized Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-[#8B7E6A] text-[10px] font-bold uppercase tracking-[0.4em] mb-10 opacity-60">
              Specialized Divisions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]">
              {specializedServices.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  const Icon = service.icon;
  const isDark = service.bg === "bg-[#8B7E6A]" || service.isPremium;
  
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8 }}
      className={`
        ${service.span} ${service.bg}
        relative rounded-[3rem] p-10 group overflow-hidden cursor-pointer
        shadow-[0_4px_20px_rgba(45,34,25,0.02)]
        flex flex-col justify-between
      `}
    >
      {/* Background Image Logic */}
      {service.image && (
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover opacity-30 grayscale group-hover:scale-110 group-hover:grayscale-0 transition-all duration-[1.5s] ease-out" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D2219] via-[#2D2219]/60 to-transparent" />
        </div>
      )}

      {/* Decorative Glow */}
      {!service.image && (
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-white opacity-20 rounded-full blur-[80px] group-hover:opacity-40 transition-opacity duration-700" />
      )}

      <div className="z-10 flex justify-between items-start">
        <motion.div 
          whileHover={{ rotate: 5, scale: 1.1 }}
          className={`w-14 h-14 rounded-2xl backdrop-blur-xl flex items-center justify-center shadow-lg transition-all duration-500
          ${isDark ? "bg-white/10" : "bg-white/60 group-hover:bg-white"}`}
        >
          <Icon className={`h-6 w-6 ${isDark ? "text-white" : "text-[#634E3C]"}`} />
        </motion.div>
        <div className={`p-2 rounded-full border transition-all duration-500
          ${isDark ? "border-white/20 text-white" : "border-[#2D2D2D]/10 text-[#2D2D2D]"}`}>
          <ArrowUpRight className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>

      <div className="z-10">
        <h4 className={`text-2xl font-light mb-3 tracking-tight ${isDark ? "text-white" : "text-[#2D2D2D]"}`}>
          {service.title}
        </h4>
        <p className={`text-[13px] leading-relaxed font-light ${isDark ? "text-white/60" : "text-[#6B5E4C]"}`}>
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}
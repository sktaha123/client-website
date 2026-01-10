import React, { useState, useEffect, useRef } from "react";
import { 
  Users, Layers, UserPlus, HardHat, 
  Globe, GraduationCap, Laptop 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { 
    id: "01", icon: Users, title: "Executive Recruitment", cat: "EXECUTIVE", 
    desc: "Tailored hiring solutions connecting businesses with talent that ensures cultural fit and long-term success.", 
    pattern: "circles",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: "02", icon: Layers, title: "Bulk Recruitment", cat: "OPERATIONS", 
    desc: "Efficient large-scale hiring designed to meet urgent demands without compromising quality.", 
    pattern: "lines",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: "03", icon: UserPlus, title: "EOR Services", cat: "COMPLIANCE", 
    desc: "Staffing & Employer of Record solutions that simplify compliance, payroll, and HR management across borders.", 
    pattern: "topography",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: "04", icon: HardHat, title: "Blue Collar Hiring", cat: "MANPOWER", 
    desc: "Specialized recruitment for skilled workers, supporting industrial demand and operational excellence.", 
    pattern: "circles",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: "05", icon: Globe, title: "Global Placement", cat: "FRONTIER", 
    desc: "International recruitment expertise bridging markets and helping professionals expand across borders.", 
    pattern: "lines",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: "06", icon: GraduationCap, title: "Training Academy", cat: "ACADEMY", 
    desc: "Customized upskilling programs to enhance productivity and prepare teams for evolving industry needs.", 
    pattern: "topography",
    img: "https://images.unsplash.com/photo-1524178232363-1fb28f74b504?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: "07", icon: Laptop, title: "Technical Consulting", cat: "INNOVATION", 
    desc: "Strategic consulting blending technical expertise with insight for digital shifts.", 
    pattern: "circles",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  },
];

const Texture = ({ type }) => {
  const baseClass = "absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none z-10";
  if (type === "circles") return (
    <svg className={baseClass} xmlns="http://www.w3.org/2000/svg"><pattern id="s-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1" fill="white" /></pattern><rect width="100%" height="100%" fill="url(#s-circles)" /></svg>
  );
  if (type === "topography") return (
    <svg className={baseClass} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M0 20 Q 25 10, 50 20 T 100 20 M0 50 Q 25 40, 50 50 T 100 50" fill="none" stroke="white" strokeWidth="0.1" /></svg>
  );
  return (
    <svg className={baseClass} xmlns="http://www.w3.org/2000/svg"><pattern id="s-lines" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="10" stroke="white" strokeWidth="0.5" /></pattern><rect width="100%" height="100%" fill="url(#s-lines)" /></svg>
  );
};

export function Services() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % services.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [active]);

  useEffect(() => {
    if (scrollRef.current && window.innerWidth < 1024) {
      const activeTab = scrollRef.current.children[active];
      activeTab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [active]);

  return (
    <section 
      id="services" 
      className="relative flex items-center justify-center overflow-hidden bg-biz-cream"
      style={{ 
        minHeight: 'calc(90vh - 96px)', // Reverted to standard Safe Zone calculation
        paddingTop: '2px', 
        paddingBottom: '80px' 
      }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-4xl md:text-6xl text-biz-charcoal-ink font-light tracking-tightest mt-2">
                Our <span className="text-biz-bronze  font-serif">Services</span>
              </h2>
            </div>

            <div 
              ref={scrollRef}
              className="flex lg:flex-col overflow-x-auto lg:overflow-visible no-scrollbar gap-3 pb-2 lg:pb-0"
            >
              {services.map((service, i) => (
                <button
                  key={service.id}
                  onClick={() => setActive(i)}
                  className={`flex-shrink-0 flex items-center gap-4 py-3 px-6 rounded-full lg:rounded-xl transition-all duration-300 border ${
                    active === i 
                      ? "bg-biz-bronze text-white border-biz-bronze shadow-lg lg:translate-x-4" 
                      : "bg-white/40 border-transparent text-biz-charcoal-soft hover:border-biz-bronze-pale"
                  }`}
                >
                  <span className="text-xs font-bold lg:block hidden opacity-50">{service.id}</span>
                  <span className="text-sm md:text-base font-medium whitespace-nowrap lg:whitespace-normal">
                    {service.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="relative h-[400px] md:h-[480px] w-full flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 30, filter: "blur(3px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: 0, filter: "blur(3px)" }}
                  transition={{ duration: 0.2, ease: "circOut" }}
                  className="absolute inset-0 rounded-biz shadow-2xl p-10 md:p-16 overflow-hidden flex flex-col justify-center text-white"
                >
                  {/* Background Image with Dark Overlay */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={services[active].img} 
                      alt={services[active].title}
                      className="w-full h-full object-cover transition-transform duration-1000 scale-105"
                    />
                    <div className="absolute inset-0 bg-biz-charcoal-ink/80 backdrop-blur-[2px]" />
                  </div>

                  <Texture type={services[active].pattern} />

                  <div className="relative z-20">
                    <div className="flex justify-between items-start mb-10">
                      <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl text-biz-bronze">
                        {React.createElement(services[active].icon, { size: 32 })}
                      </div>
                      <div className="text-right">
                        <p className="text-[9px] font-black tracking-widest text-biz-bronze uppercase">Domain</p>
                        <p className="text-xs font-serif italic text-white/60">{services[active].cat}</p>
                      </div>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-light text-white mb-6 tracking-tight leading-tight">
                      {services[active].title}
                    </h3>
                    
                    <p className="text-base md:text-lg text-white/80 font-light leading-relaxed max-w-lg">
                      {services[active].desc}
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 flex z-30">
                    <motion.div 
                      key={`progress-${active}`}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 7, ease: "linear" }}
                      className="h-full bg-biz-bronze"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;
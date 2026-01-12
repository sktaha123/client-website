import React from 'react';
import { 
  Code2, 
  Smartphone, 
  Cpu, 
  ShieldCheck, 
  Cloud, 
  Globe2, 
  ArrowRight,
  CheckCircle2,
  Terminal,
  Layers
} from 'lucide-react';

/**
 * Software.jsx
 * BiznorX Software Solutions - Professional Futuristic Edition
 * Focus: High-end enterprise aesthetics, India & UAE localized precision.
 */

const Software = () => {
  const capabilities = [
    {
      id: "01",
      title: "Custom Web Applications",
      description: "Next-gen React & Node.js architectures engineered for sub-second latency and enterprise-grade concurrency.",
      icon: <Code2 className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "02",
      title: "Mobile App Development",
      description: "High-engagement iOS & Android solutions featuring biometric integration and seamless offline-first synchronization.",
      icon: <Smartphone className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "03",
      title: "Business Automation & Workflows",
      description: "Cognitive ERP/CRM systems that autonomously route business logic to optimize operational throughput.",
      icon: <Cpu className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1518433278983-e4395980cab7?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "04",
      title: "Secure & Scalable Architecture",
      description: "Military-grade encryption protocols and distributed ledgers ensuring zero-trust security for financial data.",
      icon: <ShieldCheck className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "05",
      title: "Cloud-Ready Digital Systems",
      description: "Multi-cloud AWS & Azure deployments with auto-healing capabilities and infinite horizontal scaling.",
      icon: <Cloud className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "06",
      title: "India & UAE Market Expertise",
      description: "Strategic localized software foundations built for regional regulatory compliance and rapid expansion.",
      icon: <Globe2 className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="bg-[#FBF8F6] font-['DM_Sans'] text-[#180F0C] selection:bg-[#7A1E1E] selection:text-white overflow-hidden">
      
      {/* 1. HERO SECTION - FUTURISTIC MINIMALISM */}
      <section className="relative min-h-screen flex items-center px-6 lg:px-12 -top-13">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-[#7A1E1E]/5 rounded-full blur-[120px]" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[400px] h-[400px] bg-[#D8C5C1]/30 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-10">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-3 text-[#7A1E1E] font-['Plus_Jakarta_Sans'] text-[11px] font-black uppercase tracking-[0.6em] mb-4">
                  <Terminal size={14} /> Software Solutions
                </span>
                <h1 className="font-['Martel_Sans'] text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter">
                  Engineering the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A1E1E] to-[#180F0C]">Digital Apex.</span>
                </h1>
              </div>

              <p className="text-[#4A3A34] text-xl md:text-2xl max-w-2xl font-light leading-relaxed">
                BiznorX develops high-velocity software systems for <span className="font-bold">India & UAE</span>, merging deep-tech automation with enterprise-grade resilience.
              </p>

              <div className="flex flex-wrap gap-6 pt-4">
                <button className="bg-[#180F0C] text-white px-10 py-5 rounded-[2rem] font-bold text-lg hover:bg-[#7A1E1E] transition-all duration-500 shadow-2xl hover:shadow-[#7A1E1E]/20 flex items-center gap-3 group">
                  Start Your Project <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="bg-transparent border-2 border-[#D8C5C1] px-10 py-5 rounded-[2rem] font-bold text-lg hover:bg-white transition-all">
                  Talk to Our Team
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-4 hidden lg:block">
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-[#F1ECE9] rounded-[4rem] rotate-6 scale-95 opacity-50 animate-pulse" />
                <div className="relative bg-white border border-[#D8C5C1]/50 p-12 rounded-[4rem] shadow-2xl flex items-center justify-center">
                   <Layers size={140} strokeWidth={0.5} className="text-[#7A1E1E] opacity-20 absolute" />
                   <Cpu size={80} strokeWidth={1} className="text-[#180F0C]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DESCRIPTION SECTION - THE LOGIC */}
      <section className="py-32 px-6 lg:px-12 bg-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-6">
            <h2 className="font-['Martel_Sans'] text-4xl md:text-5xl font-black leading-tight tracking-tightest">
              Synthesizing Speed, <br />Security, and Scale.
            </h2>
            <div className="h-1 w-24 bg-[#7A1E1E]" />
          </div>
          <div className="space-y-8 text-[#4A3A34] text-lg font-light leading-relaxed">
            <p>
              At BiznorX, we don't just write code; we architect regional dominance. Our custom software development lifecycle is optimized for the India and UAE enterprise sectors, addressing localized regulatory frameworks while maintaining global performance standards.
            </p>
            <p>
              From web platforms to complex integrated business systems, our focus remains on <span className="text-[#180F0C] font-bold">long-term adaptability</span>. We integrate secure, future-ready automation that allows your business to pivot at the speed of the market without technical debt.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES GRID - FUTURISTIC CARDS */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {capabilities.map((item) => (
            <article 
              key={item.id} 
              className="group relative h-[480px] bg-[#F1ECE9] rounded-[3rem] overflow-hidden flex flex-col justify-end p-10 transition-all duration-700 hover:shadow-2xl"
            >
              {/* Image Background Layer */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#180F0C] via-[#180F0C]/80 to-transparent opacity-90 group-hover:opacity-60 transition-opacity" />
              </div>

              {/* Card Label */}
              <span className="absolute top-10 right-10 text-white/20 font-mono text-4xl font-black">
                {item.id}
              </span>

              {/* Content */}
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 bg-[#7A1E1E] text-white rounded-2xl flex items-center justify-center shadow-2xl group-hover:bg-white group-hover:text-[#7A1E1E] transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="font-['Martel_Sans'] text-2xl font-black text-white leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed font-light transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. WHY BIZNORX - THE EDGE */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto bg-[#180F0C] rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7A1E1E]/20 blur-[100px] -mr-48 -mt-48" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h2 className="font-['Martel_Sans'] text-4xl md:text-6xl font-black text-white leading-tight">
                Why Industry <br />Architects Choose Us
              </h2>
              <p className="text-white/50 text-xl font-light">
                Premium reliability built for the world's fastest-growing business hubs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { t: "Elite Performance", d: "Sub-second latency as standard." },
                { t: "User-Centric Design", d: "UX that reduces cognitive friction." },
                { t: "Zero-Trust Security", d: "Proactive compliance and encryption." },
                { t: "Market Intelligence", d: "Local India/UAE data sovereignty." }
              ].map((point, i) => (
                <div key={i} className="space-y-3">
                  <CheckCircle2 size={24} className="text-[#7A1E1E]" />
                  <h4 className="text-white font-bold tracking-tight text-lg">{point.t}</h4>
                  <p className="text-white/40 text-sm font-light">{point.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLOSING CTA - THE COMMITMENT */}
      <section className="py-32 px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Martel_Sans'] text-4xl md:text-7xl font-black tracking-tighter mb-10 leading-[1.1]">
            Ready to <span className="text-[#7A1E1E]">Future-Proof</span> <br />Your Operation?
          </h2>
          <p className="text-[#4A3A34] text-xl mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Secure your digital legacy with a software partner that understands the scale of India and the velocity of the UAE.
          </p>
          <button className="bg-[#7A1E1E] text-white px-12 py-6 rounded-full font-bold text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center gap-4 mx-auto group">
            Consult an Architect <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>

    </div>
  );
};

export default Software;
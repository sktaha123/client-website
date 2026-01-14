import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { 
  Code2, Smartphone, Cpu, ShieldCheck, Cloud, Globe2, 
  ArrowRight, CheckCircle2, Terminal, Layers, Zap, 
  Lock, TrendingUp, Users, Rocket, Target 
} from 'lucide-react';

/**
 * 3D Neural Swarm Component
 * High-performance instanced particles representing data logic
 */
function NeuralSwarm({ count = 120 }) {
  const mesh = useRef();
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        t: Math.random() * 100,
        factor: 20 + Math.random() * 100,
        speed: 0.01 + Math.random() / 200,
        xFactor: -5 + Math.random() * 10,
        yFactor: -5 + Math.random() * 10,
        zFactor: -5 + Math.random() * 10,
      });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      dummy.position.set(
        xFactor + Math.cos(t) + (Math.sin(t * 1) * factor) / 10,
        yFactor + Math.sin(t) + (Math.cos(t * 2) * factor) / 10,
        zFactor + Math.cos(t) + (Math.sin(t * 3) * factor) / 10
      );
      const s = Math.cos(t);
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[0.03, 16, 16]} />
      <meshBasicMaterial color="#7A1E1E" transparent opacity={0.3} />
    </instancedMesh>
  );
}

const Software = () => {
  const capabilities = [
    { id: "01", title: "Custom Web Applications", description: "Next-gen React & Node.js architectures engineered for sub-second latency and enterprise-grade concurrency.", icon: <Code2 className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
    { id: "02", title: "Mobile App Development", description: "High-engagement iOS & Android solutions featuring biometric integration and seamless offline-first synchronization.", icon: <Smartphone className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" },
    { id: "03", title: "Business Automation", description: "Cognitive ERP/CRM systems that autonomously route business logic to optimize operational throughput.", icon: <Cpu className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1518433278983-e4395980cab7?auto=format&fit=crop&q=80&w=800" },
    { id: "04", title: "Secure Architecture", description: "Military-grade encryption protocols and distributed ledgers ensuring zero-trust security for financial data.", icon: <ShieldCheck className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
    { id: "05", title: "Cloud-Ready Systems", description: "Multi-cloud AWS & Azure deployments with auto-healing capabilities and infinite horizontal scaling.", icon: <Cloud className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" },
    { id: "06", title: "India & UAE Expertise", description: "Strategic localized software foundations built for regional regulatory compliance and rapid expansion.", icon: <Globe2 className="w-5 h-5" />, image: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <div className="bg-[#FBF8F6] font-['DM_Sans'] text-[#180F0C] selection:bg-[#7A1E1E] selection:text-white overflow-x-hidden">
      
      {/* 1. HERO SECTION WITH THREE.JS ENGINE */}
      <section className="relative min-h-screen flex items-center px-6 lg:px-12 pt-20 overflow-hidden">
        
        {/* Three.js Canvas Layer */}
        <div className="absolute inset-0 z-0 opacity-60">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#7A1E1E" />
            
            {/* Abstract Fluid Core */}
            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
              <Sphere args={[1.5, 100, 100]} position={[3, 0, -1]}>
                <MeshDistortMaterial
                  color="#7A1E1E"
                  speed={3}
                  distort={0.4}
                  radius={1}
                  opacity={0.15}
                  transparent
                />
              </Sphere>
            </Float>

            <NeuralSwarm />
          </Canvas>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 pointer-events-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-10 pointer-events-auto">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-3 text-[#7A1E1E] font-['Plus_Jakarta_Sans'] text-xs font-black uppercase tracking-[0.3em] mb-4 bg-white/50 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Terminal size={16} /> Enterprise Software Solutions
                </span>
                <h1 className="font-['Martel_Sans'] text-4xl md:text-6xl lg:text-8xl font-black leading-[1.0] tracking-tighter">
                  Engineering the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A1E1E] via-[#180F0C] to-[#7A1E1E]">Digital Apex</span>
                </h1>
              </div>

              <p className="text-[#4A3A34] text-lg md:text-xl max-w-2xl font-light leading-relaxed">
                BiznorX develops high-velocity software systems engineered for the dynamic markets of <span className="font-bold underline decoration-[#7A1E1E]">India & UAE</span>.
              </p>

              <div className="flex flex-wrap gap-4 pt-6">
                <button className="bg-[#180F0C] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#7A1E1E] transition-all duration-300 shadow-xl flex items-center gap-3 group">
                  Start Your Project <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DESCRIPTION SECTION */}
      <section className="py-24 px-6 lg:px-12 bg-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-['Martel_Sans'] text-3xl md:text-5xl font-black leading-tight tracking-tight">
              Synthesizing Speed, <br />Security, and Scale
            </h2>
            <div className="h-1 w-20 bg-[#7A1E1E]"></div>
            <div className="flex items-center gap-4 p-4 bg-[#FBF8F6] rounded-2xl w-fit">
              <Target size={24} className="text-[#7A1E1E]" />
              <span className="font-semibold text-[#180F0C]">Regional Compliance Experts</span>
            </div>
          </div>
          <div className="space-y-6 text-[#4A3A34] text-lg font-light leading-relaxed">
            <p className="bg-gradient-to-r from-[#7A1E1E]/5 to-transparent p-6 rounded-2xl border border-[#D8C5C1]/30">
              At BiznorX, we architect regional dominance. Our software lifecycle is optimized for India and UAE enterprise sectors, addressing localized frameworks while maintaining global performance.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES GRID */}
      <section id="capabilities" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-['Martel_Sans'] text-3xl md:text-5xl font-black mb-4">Enterprise Capabilities</h2>
          <p className="text-[#4A3A34] text-lg max-w-2xl mx-auto">Tailored solutions for unique market demands.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
  {capabilities.map((item) => (
    <article 
      key={item.id} 
      className="group relative h-[450px] overflow-hidden rounded-[2.5rem] border border-white/20 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(122,30,30,0.15)]"
    >
      {/* 1. Background Image with Masking */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title} 
          className="h-full w-full object-cover opacity-10 grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-30 group-hover:grayscale-0" 
        />
        {/* The "Scanning" Line Effect */}
        <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#7A1E1E] to-transparent opacity-0 group-hover:animate-scan" />
      </div>

      {/* 2. Vertical ID Accent */}
      <div className="absolute left-6 top-8 font-['Martel_Sans'] text-5xl font-black text-[#7A1E1E]/10 transition-colors duration-500 group-hover:text-[#7A1E1E]/20">
        {item.id}
      </div>

      {/* 3. Floating Icon Node */}
      <div className="absolute right-8 top-8">
        <div className="relative flex h-14 w-14 items-center justify-center">
          <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-[#7A1E1E]/30 opacity-0 group-hover:opacity-100" />
          <div className="z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-xl transition-all duration-500 group-hover:bg-[#7A1E1E] group-hover:text-white">
            {item.icon}
          </div>
        </div>
      </div>

      {/* 4. Content Content */}
      <div className="relative z-10 flex h-full flex-col justify-end p-8">
        <div className="space-y-4">
          <div className="h-1 w-12 bg-[#7A1E1E] transition-all duration-500 group-hover:w-20" />
          <h3 className="font-['Martel_Sans'] text-2xl font-black text-[#180F0C]">
            {item.title}
          </h3>
          <p className="text-sm font-light leading-relaxed text-[#4A3A34]/80 transition-all duration-500 group-hover:text-[#180F0C]">
            {item.description}
          </p>
          
          {/* Action Link */}
          <div className="flex items-center gap-2 pt-4 text-xs font-bold uppercase tracking-widest text-[#7A1E1E] opacity-0 transition-all duration-500 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
            <span>Explore Architecture</span>
            <ArrowRight size={14} />
          </div>
        </div>
      </div>
      
      {/* 5. Glass Border Highlight (Inner) */}
      <div className="absolute inset-[1px] rounded-[2.5rem] border border-white/40 pointer-events-none" />
    </article>
  ))}
</div>
      </section>

      {/* 4. CLOSING CTA */}
      <section id="contact" className="py-24 px-6 lg:px-12 text-center bg-[#180F0C] text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="font-['Martel_Sans'] text-4xl md:text-6xl font-black tracking-tighter">
            Ready to <span className="text-[#7A1E1E]">Future-Proof</span> Your Operation?
          </h2>
          <p className="text-white/60 text-lg font-light max-w-2xl mx-auto">
            Secure your digital legacy with a software partner that understands the scale of India and the velocity of the UAE.
          </p>
          <button className="bg-[#7A1E1E] text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center gap-3 mx-auto group">
            Consult an Architect <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
          </button>
        </div>
      </section>
      
    </div>
  );
};

export default Software;
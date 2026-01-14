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
    <div className="bg-[#FBF8F6] font-['DM_Sans'] text-[#180F0C] selection:bg-[#7A1E1E] selection:text-white flex justify-center items-center overflow-x-hidden">
      
     <h1 className='mt-60 text-8xl'>Under development
     </h1>
      
    </div>
  );
};

export default Software;
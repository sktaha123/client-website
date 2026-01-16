import React, { useState, useEffect, useRef } from 'react';
import GlowText from './GlowText';
import { motion } from "framer-motion";

import {
  Workflow,
  ShieldCheck,
  ChevronRight,
  Cpu,
  Target,
  Layers
} from 'lucide-react';



const Alix = () => {
  

  const capabilities = [
    {
      icon: <Workflow className="w-5 h-5 text-[var(--color-biz-bronze)]" />,
      title: 'Smart Matching Engine',
      description:
        'Evaluates company requirements against candidate skills to ensure relevance, accuracy, and long-term alignment.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[var(--color-biz-bronze)]" />,
      title: 'Bias-Reduced Decisions',
      description:
        'Every recommendation is supported by transparent logic, reducing subjectivity in recruitment outcomes.'
    },
    {
      icon: <Target className="w-5 h-5 text-[var(--color-biz-bronze)]" />,
      title: 'Business-Centric Intelligence',
      description:
        'Considers role intent, growth goals, and organizational structure—not just resumes and keywords.'
    }
  ];

  return (
    <section className="bg-[var(--color-biz-cream)] py-20 px-6 md:px-12 lg:px-24 font-['DM_Sans'] antialiased overflow-hidden relative">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(var(--color-biz-charcoal) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          {/* Text Content */}
          <div>
            <header className="mb-16">
              <div className="
  inline-flex items-center gap-3
  px-4 py-2
  mb-10
  rounded-xl
  bg-white/80
  backdrop-blur-sm
  border border-[var(--color-biz-sand-muted)]
  shadow-[0_8px_20px_-12px_rgba(0,0,0,0.25)]
">
  {/* Accent Dot */}
  <span className="w-2 h-2 rounded-full bg-[var(--color-biz-bronze)] opacity-80" />

  <span className="
    text-[10px]
    font-extrabold
    tracking-[0.45em]
    uppercase
    text-[var(--color-biz-bronze)]
  ">
    AI Decision System
  </span>
</div>


              <motion.h2
  initial={{ opacity: 0, y: 26 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
  viewport={{ once: true }}
  className="flex items-center gap-6 text-5xl md:text-7xl font-extrabold leading-[1.05] mb-10"
>
  {/* Glowing Alix Text */}
  <GlowText
    text="Alix"
    className="font-black tracking-[-0.05em]"
  />

  {/* Avatar Space */}
  <motion.span
    animate={{ scale: [1, 1.04, 1] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className="
      relative
      w-14 h-14
      md:w-16 md:h-16
      rounded-full
      bg-[var(--color-biz-sand)]
      border border-[var(--color-biz-sand-muted)]
      flex items-center justify-center
      shadow-sm
      overflow-hidden
      flex-shrink-0
    "
  >
    {/* Placeholder Icon */}
    <Cpu className="w-7  h-7 text-[var(--color-biz-charcoal-soft)]" />

    {/* 🔁 Replace later with real avatar */}
    {/*
    <img
      src="/images/alix-avatar.png"
      alt="Alix AI Avatar"
      className="w-full h-full object-cover"
    />
    */}
  </motion.span>
</motion.h2>






              <p className="text-[19px] text-[var(--color-biz-charcoal-muted)] leading-relaxed max-w-lg">
                Alix is the intelligence layer behind biznorX. It evaluates talent,
                business needs, and growth intent to deliver structured,
                trustworthy recruitment outcomes.
              </p>
            </header>

            <div className="space-y-12 mb-16">
              {capabilities.map((item, index) => (
                <div key={index} className="flex items-start gap-8">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h3 className="font-['Martel_Sans'] font-bold text-sm uppercase tracking-widest mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--color-biz-charcoal-muted)] max-w-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <footer className="pt-10 border-t border-[var(--color-biz-sand-muted)]">
              <div className="flex items-center gap-4 text-[11px] font-bold text-[var(--color-biz-bronze)] uppercase tracking-[0.3em]">
                <Layers className="w-4 h-4" />
                <span>Built for Scalable Hiring</span>
                <ChevronRight className="w-3 h-3 ml-auto opacity-40" />
              </div>
            </footer>
          </div>

          {/* Mobile AI Chat Preview */}
          {/* Alix Avatar Image Placeholder */}
          <div className="relative mx-auto w-full max-w-[420px]">
            {/* Soft ambient glow */}
            <div className="absolute inset-0 bg-[var(--color-biz-bronze)] opacity-[0.06]  rounded-full pointer-events-none" />

            <div
              className="
      relative
      
      bg-biz-cream
      rounded-[var(--radius-biz)]
     
      overflow-hidden
      h-[720px]
      lg:h-[92vh]
      flex
              
      items-center
      justify-center
    "
            >
              {/* Avatar Placeholder */}
              

               
      <img
        src="/svgs/Alix.png"
        alt="Alix AI Avatar"
        className="absolute inset-0 w-full h-full object-cover"
      />
     
              </div>
            </div>
          </div>


        </div>
      
    </section>
  );
};

export default Alix;

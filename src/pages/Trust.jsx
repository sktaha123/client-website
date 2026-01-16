import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      delay: index * 0.08,
    },
  }),
};



import {
  Award,
  Globe,
  Shield,
  Target,
  Briefcase,
  Scale,
  Layers,
  TrendingUp
} from "lucide-react";

const trustItems = [
  { icon: Award, title: "60+ Years", subtitle: "Business Legacy" },
  { icon: Globe, title: "Global Presence", subtitle: "India & UAE" },
  { icon: Shield, title: "Enterprise-Grade", subtitle: "Compliance" },
  { icon: Target, title: "Industry-Focused", subtitle: "Solutions" },

  { icon: Briefcase, title: "Trusted Partners", subtitle: "Long-Term Alliances" },
  { icon: Scale, title: "Risk Managed", subtitle: "Governance First" },
  { icon: Layers, title: "Cross-Border", subtitle: "Execution Ready" },
  { icon: TrendingUp, title: "Outcome Driven", subtitle: "Measurable Impact" },
];


export  function Trust() {
  return (
    <section className="pt-7 md:pt-2 md:pb-10 bg-biz-cream font-dm">
      <div className="max-w-7xl mx-auto px-6">
        {/* Container with a subtle top border to create an architectural break */}
        <div className="pt-12 ">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
            {trustItems.map((item, index) => {
              const Icon = item.icon;

              return (
               <motion.div
  key={index}
  custom={index}
  variants={cardVariants}
  initial="hidden"
  whileInView="visible"
 viewport={{ once: true, amount: 0.3 }}

  className="group flex flex-col items-center lg:items-center text-center space-y-4"
>

                  {/* Minimalist Icon Treatment */}
                  <div className="relative">
                    {/* Background "Ghost" Circle that appears on hover */}
                    <div className="absolute inset-0 bg-biz-bronze/5 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 ease-out" />
                    
                    <div className="relative flex items-center justify-center w-12 h-12 rounded-biz  bg-white shadow-sm transition-all duration-300 group-hover:border-biz-bronze group-hover:shadow-md">
                      <Icon className="h-5 w-5 text-biz-bronze stroke-[1.5px]" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    {/* Title with tighter tracking and bold editorial feel */}
                    <h3 className="text-xl font-bold text-biz-charcoal tracking-tight">
                      {item.title}
                    </h3>
                    
                    {/* Subtitle with a muted bronze tone and expanded tracking */}
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-biz-bronze">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>

              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
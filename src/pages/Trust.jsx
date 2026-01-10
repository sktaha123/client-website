import React from "react";
import { Award, Globe, Shield, Target } from "lucide-react";

const trustItems = [
  { icon: Award, title: "60+ Years", subtitle: "Business Legacy" },
  { icon: Globe, title: "Global Presence", subtitle: "India & UAE" },
  { icon: Shield, title: "Enterprise-Grade", subtitle: "Compliance" },
  { icon: Target, title: "Industry-Focused", subtitle: "Solutions" },
];

export  function Trust() {
  return (
    <section className="py-12 bg-biz-cream font-dm">
      <div className="max-w-7xl mx-auto px-6">
        {/* Container with a subtle top border to create an architectural break */}
        <div className="pt-12 border-t border-biz-stone/40">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
            {trustItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group flex flex-col items-center lg:items-start text-center lg:text-left space-y-4"
                >
                  {/* Minimalist Icon Treatment */}
                  <div className="relative">
                    {/* Background "Ghost" Circle that appears on hover */}
                    <div className="absolute inset-0 bg-biz-bronze/5 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 ease-out" />
                    
                    <div className="relative flex items-center justify-center w-12 h-12 rounded-biz border border-biz-stone/60 bg-white shadow-sm transition-all duration-300 group-hover:border-biz-bronze group-hover:shadow-md">
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
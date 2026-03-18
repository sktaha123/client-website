import { motion } from "framer-motion";
import {
  Award, Globe, Shield, Target,
  Briefcase, Scale, Layers, TrendingUp
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

export default function Trust() {
  return (
    <section className="bg-biz-cream py-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
        {trustItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div key={i} className="text-center">
              <Icon className="mx-auto mb-2 text-biz-bronze" />
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-xs">{item.subtitle}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
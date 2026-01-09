import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Linkedin, Instagram, Facebook } from "lucide-react";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";

// MOVE STATIC DATA OUTSIDE: Prevents re-allocation of memory on every render
const SOCIAL_LINKS = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: FaXTwitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

const CONTACT_METHODS = [
  { 
    icon: FaWhatsapp, 
    label: "India Office", 
    value: "+91 9004378003", 
    href: "https://wa.me/919004378003",
    color: "text-green-600" 
  },
  { 
    icon: FaWhatsapp, 
    label: "UAE Office", 
    value: "+971 506012581", 
    href: "https://wa.me/971506012581",
    color: "text-green-600" 
  },
  { 
    icon: Mail, 
    label: "General Inquiry", 
    value: "hello@biznorx.com", 
    href: "mailto:hello@biznorx.com",
    color: "text-[#8B7E6A]"
  },
];

const LEGAL_LINKS = ["Privacy", "Terms", "Cookies"];

// Optimized Variants
const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 15 }, // Reduced y-offset for faster paint
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] } 
  },
};

export function Footer() {
  return (
    <footer className="bg-[#FAF9F6] border-t border-[#8B7E6A]/10 pt-24 pb-12 font-dm overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto px-6"
        variants={CONTAINER_VARIANTS}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          
          {/* BRAND COLUMN */}
          <motion.div variants={ITEM_VARIANTS} className="lg:col-span-5 transform-gpu">
            <div className="text-3xl text-[#2D2219] tracking-tighter mb-6 font-bold uppercase">
              BiznorX
            </div>
            <p className="text-[#6B5E4C] text-lg leading-relaxed mb-10 font-light max-w-md">
              Enterprise-grade workforce solutions built on 60+ years
              of legacy. Serving global organizations with trust,
              discipline, and architectural precision.
            </p>
            
            {/* SOCIAL ROW */}
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ y: -4, backgroundColor: "#2D2219", color: "#FAF9F6" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full border border-[#8B7E6A]/20 flex items-center justify-center text-[#2D2219] transition-colors duration-300 will-change-transform transform-gpu"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* CONTACT HUB COLUMN */}
          <motion.div variants={ITEM_VARIANTS} className="lg:col-span-7 transform-gpu">
            <div className="bg-[#EAE4D9]/25 rounded-[2.5rem] p-8 md:p-12 border border-[#8B7E6A]/10 relative">
              <h3 className="text-[#2D2219] text-xs font-bold uppercase tracking-[0.3em] mb-10">
                Direct Communication
              </h3>
              
              <div className="grid md:grid-cols-2 gap-y-10 gap-x-12">
                {CONTACT_METHODS.map((method) => {
                  const Icon = method.icon;
                  return (
                    <motion.a 
                      key={method.label} 
                      href={method.href} 
                      className="group/item block transform-gpu"
                      whileHover={{ x: 4 }}
                    >
                      <p className="text-[10px] text-[#8B7E6A] font-bold uppercase tracking-widest mb-2">
                        {method.label}
                      </p>
                      <div className="flex items-center gap-3">
                        <Icon className={`h-5 w-5 ${method.color} transition-transform group-hover/item:scale-110`} />
                        <span className="text-xl text-[#2D2219] font-medium tracking-tight border-b border-transparent group-hover/item:border-[#8B7E6A] transition-all duration-300">
                          {method.value}
                        </span>
                      </div>
                    </motion.a>
                  );
                })}
                
                {/* Physical Locations */}
                <div className="md:col-span-2 pt-6 border-t border-[#8B7E6A]/10 mt-2">
                  <div className="grid md:grid-cols-2 gap-8">
                    <LocationItem title="India Office" city="Mumbai, Maharashtra" />
                    <LocationItem title="UAE Office" city="Dubai, United Arab Emirates" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM LEGAL BAR */}
        <motion.div 
          variants={ITEM_VARIANTS}
          className="pt-10 border-t border-[#8B7E6A]/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-[#8B7E6A]"
        >
          <p>© 2026 BiznorX — All Rights Reserved.</p>
          <div className="flex gap-8">
            {LEGAL_LINKS.map((link) => (
              <motion.a 
                key={link}
                href="#" 
                whileHover={{ color: "#2D2219" }}
                className="transition-colors duration-200"
              >
                {link}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

// Sub-component for locations to isolate bounce animation logic
const LocationItem = React.memo(({ title, city }) => (
  <div className="flex items-start gap-3 group/loc cursor-default transform-gpu">
    <MapPin className="h-4 w-4 mt-1 text-[#8B7E6A] transition-transform duration-300 group-hover/loc:-translate-y-1" />
    <p className="text-sm text-[#6B5E4C] leading-snug">
      <strong className="text-[#2D2219] block mb-1">{title}</strong>
      {city}
    </p>
  </div>
));
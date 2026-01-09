import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Instagram, Menu, X, Facebook, ArrowUpRight } from "lucide-react";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";

const NAV_LINKS = [
  { name: "Expertise", href: "#industries" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Approach", href: "#approch" }, 
  { name: "Contact", href: "#contact" } 
];

const SOCIALS = [
  { icon: Linkedin, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: FaXTwitter, href: "#" },
  { icon: Instagram, href: "#" },
];

const FAST_TRANSITION = { 
  type: "spring", 
  stiffness: 400, 
  damping: 35, 
  mass: 0.3,
  restDelta: 0.01 
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Scroll logic
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 40 && !isScrolled) setIsScrolled(true);
    if (latest <= 40 && isScrolled) setIsScrolled(false);
  });

  // Body scroll lock when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* 1. NAVBAR - FLOATING STATE */}
      <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-3 md:pt-4 px-4 pointer-events-none">
        <motion.div
          layout
          transition={FAST_TRANSITION}
          className={`
            relative flex items-center justify-between h-14 md:h-16 rounded-full border border-[#8B7E6A]/20 
            backdrop-blur-md shadow-lg pointer-events-auto transform-gpu px-4
            ${isScrolled ? "bg-[#2D2219] w-[260px] md:w-[320px]" : "bg-[#FAF9F6]/95 w-full max-w-[1000px]"}
          `}
        >
          {/* Logo */}
          <motion.div layout transition={FAST_TRANSITION} className="shrink-0 pl-1">
            <img 
              src="/svgs/Biznorlogo.png" 
              alt="Logo" 
              className={`h-5 md:h-6 transition-all duration-300 ${isScrolled ? "brightness-0 invert" : ""}`} 
            />
          </motion.div>

          {/* Nav / Condensed Icons */}
          <div className="flex-1 flex justify-center overflow-hidden px-2">
            <AnimatePresence mode="wait">
              {!isScrolled ? (
                <motion.nav
                  key="desktop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="hidden lg:flex items-center gap-8 font-dm"
                >
                  {NAV_LINKS.map((link) => (
                    <a key={link.name} href={link.href} className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#2D2219]/70 hover:text-[#8B7E6A] transition-colors">
                      {link.name}
                    </a>
                  ))}
                </motion.nav>
              ) : (
                <motion.div
                  key="scrolled"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-4 text-white/70"
                >
                  <a href="https://wa.me/919004378003" className="hover:text-white"><FaWhatsapp size={15} /></a>
                  <a href="mailto:hello@biznorx.com" className="hover:text-white"><Mail size={15} /></a>
                  <a href="#" className="hover:text-white"><Linkedin size={14} /></a>
                  <a href="#" className="hover:text-white"><Facebook size={14} /></a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className={`p-2 shrink-0 transition-colors ${isScrolled ? "text-white" : "text-[#2D2219]"}`}
          >
            <Menu size={20} />
          </button>
        </motion.div>
      </header>

      {/* 2. MENU OVERLAY - TOP LAYER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-[#E5E2DD] z-[9999] pointer-events-auto flex flex-col p-6 md:p-12 overflow-hidden"
          >
            {/* Menu Header */}
            <div className="flex justify-between items-start shrink-0">
              <p className="text-[#8B7E6A] text-[9px] font-dm font-bold uppercase tracking-[0.3em] opacity-60 mb-2"></p>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 text-[#2D2219] font-dm font-bold text-[9px] uppercase tracking-widest bg-white/40 py-2 px-5 rounded-full border border-black/5"
              >
                Close <X size={14} />
              </button>
            </div>

            {/* Nav Links - Font Weight Reduced */}
            <nav className="flex-grow flex flex-col justify-center gap-3">
              
              {NAV_LINKS.map((item, i) => (
                <motion.a
                  key={item.name}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1, transition: { delay: i * 0.04 } }}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-dm text-4xl md:text-7xl font-medium text-[#2D2219] tracking-tight uppercase leading-none hover:text-[#8B7E6A] transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>

            {/* Optimized Footer */}
            <div className="shrink-0 border-t border-[#2D2219]/10 pt-8 md:pt-8 mt-4">
              <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                
                {/* Contact Columns */}
                <div className="w-full md:w-auto space-y-4">
                  <div className="flex flex-wrap gap-x-8 gap-y-4">
                    <div className="space-y-1">
                      <span className="text-[8px] font-bold text-[#8B7E6A] uppercase tracking-tighter">India</span>
                      <a href="https://wa.me/919004378003" target="_blank" rel="noopener noreferrer" className="block text-sm font-semibold text-[#2D2219] font-dm">+91 90043 78003</a>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[8px] font-bold text-[#8B7E6A] uppercase tracking-tighter">UAE</span>
                      <a href="https://wa.me/971506012581" target="_blank" rel="noopener noreferrer" className="block text-sm font-semibold text-[#2D2219] font-dm">+971 50 601 2581</a>
                    </div>
                  </div>
                  <a href="mailto:hello@biznorx.com" className="flex items-center gap-2 text-sm font-semibold text-[#2D2219] font-dm group">
                    hello@biznorx.com <ArrowUpRight size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>

                {/* Socials & Copyright */}
                <div className="flex flex-col items-end gap-4">
                  <div className="flex gap-2.5">
                    {SOCIALS.map((S, i) => (
                      <a 
                        key={i} 
                        href={S.href} 
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#2D2219] hover:bg-[#2D2219] hover:text-white transition-all shadow-sm active:scale-95"
                      >
                        <S.icon size={16} />
                      </a>
                    ))}
                  </div>
                  <p className="text-[#8B7E6A] text-[7px] font-dm font-bold uppercase tracking-[0.2em]">© 2026 BiznorX Legacy</p>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
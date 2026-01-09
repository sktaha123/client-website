import React, { useState, useEffect } from "react";
import { Mail, MessageCircle, ArrowRight, Linkedin, Instagram, Facebook, Menu, X, Phone } from "lucide-react";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const socialLinks = [
    { icon: Linkedin, href: "#" },
    { icon: FaXTwitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Facebook, href: "#" },
  ];

  return (
    <>
      <div className="fixed top-0 md:top-2 left-0 right-0 z-50 flex justify-center px-0 md:px-6">
        <div
          className={`
            w-full md:w-[98vw] max-w-7xl
            bg-[#FAF9F6]/90 backdrop-blur-xl
            md:rounded-[3rem] border-b md:border border-[#8B7E6A]/15
            shadow-[0_10px_40px_rgba(45,34,25,0.04)]
            transition-all duration-500
            ${isOpen ? "rounded-b-none border-b-transparent" : ""}
          `}
        >
          <div className="px-6 md:px-10 h-20 flex items-center justify-between">
            
            {/* LEFT — LOGO */}
            <div className="flex items-center justify-start scale-90 md:scale-100 z-[60]">
              <img
                src="/svgs/Biznorlogo.png"
                alt="BiznorX"
                className="h-12 md:h-14 shrink-0 transition-opacity hover:opacity-80"
              />
            </div>

            {/* CENTER — DESKTOP NAV */}
            <div className="hidden lg:flex items-center space-x-10">
              <nav className="flex items-center space-x-8">
                {/* WhatsApp Dropdown */}
                <div className="relative group/icon cursor-pointer">
                  <div className="flex items-center gap-2 group">
                    <MessageCircle className="size-3.5 text-[#8B7E6A]" />
                    <span className="font-dm text-[10px] uppercase tracking-[0.2em] font-bold text-[#2D2D2D]/60 group-hover:text-[#8B7E6A] transition-colors">
                      WhatsApp
                    </span>
                  </div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-2 transition-all duration-300 group-hover/icon:opacity-100 group-hover/icon:visible group-hover/icon:translate-y-0">
                    <div className="bg-[#FAF9F6] border border-[#8B7E6A]/15 rounded-2xl shadow-2xl w-48 p-4 space-y-3">
                      <a href="https://wa.me/919004378003" className="flex items-center justify-between text-[11px] font-dm text-[#2D2D2D] hover:text-[#8B7E6A] transition-colors">
                        <span>India</span> <span>+91 90043...</span>
                      </a>
                      <a href="https://wa.me/971506012581" className="flex items-center justify-between text-[11px] font-dm text-[#2D2D2D] hover:text-[#8B7E6A] transition-colors">
                        <span>UAE</span> <span>+971 506...</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="relative group/icon cursor-pointer">
                  <div className="flex items-center gap-2 group">
                    <Mail className="size-3.5 text-[#8B7E6A]" />
                    <span className="font-dm text-[10px] uppercase tracking-[0.2em] font-bold text-[#2D2D2D]/60 group-hover:text-[#8B7E6A] transition-colors">
                      Email
                    </span>
                  </div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-2 transition-all duration-300 group-hover/icon:opacity-100 group-hover/icon:visible group-hover/icon:translate-y-0">
                    <div className="bg-[#FAF9F6] border border-[#8B7E6A]/15 rounded-2xl shadow-2xl px-5 py-3">
                      <a href="mailto:hello@biznorx.com" className="text-[11px] font-dm text-[#2D2D2D] hover:text-[#8B7E6A] transition-colors">
                        hello@biznorx.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="w-px h-4 bg-[#8B7E6A]/20" />

                {/* Desktop Socials */}
                <div className="flex items-center space-x-5">
                  {socialLinks.map((social, i) => (
                    <a key={i} href={social.href} className="text-[#2D2D2D]/40 hover:text-[#8B7E6A] transition-colors">
                      <social.icon className="size-4" />
                    </a>
                  ))}
                </div>
              </nav>
            </div>

            {/* RIGHT — CTA + HAMBURGER */}
            <div className="flex items-center space-x-4 z-[60]">
              <a
                href="#contact"
                className="hidden md:flex items-center gap-3 rounded-full bg-[#2D2219] hover:bg-[#8B7E6A] px-7 py-3 text-white text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 font-dm shadow-xl shadow-[#2D2219]/10 group"
              >
                Let's Talk
                <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
              </a>

              {/* HAMBURGER BUTTON */}
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-[#2D2219] transition-transform active:scale-90"
              >
                {isOpen ? <X className="size-7" /> : <Menu className="size-7" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div 
        className={`
          fixed inset-0 bg-[#FAF9F6] z-40 lg:hidden
          transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)]
          ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `}
      >
        <div className="flex flex-col h-full pt-32 px-8 pb-12">
          {/* Mobile Nav Links */}
          <div className="flex flex-col space-y-8 mb-auto">
            <span className="text-[#8B7E6A] text-[10px] font-bold uppercase tracking-[0.3em]">Menu</span>
            <a href="#about" onClick={() => setIsOpen(false)} className="text-4xl font-light text-[#2D2219]">About</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="text-4xl font-light text-[#2D2219]">Services</a>
            <a href="#industries" onClick={() => setIsOpen(false)} className="text-4xl font-light text-[#2D2219]">Expertise</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-4xl font-light text-[#2D2219]">Contact</a>
          </div>

          {/* Mobile Contact Hub */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-[#8B7E6A] font-bold uppercase tracking-widest">Connect on WhatsApp</span>
                <div className="flex flex-wrap gap-4">
                  <a href="https://wa.me/919004378003" className="flex items-center gap-2 text-sm text-[#2D2219] font-medium border border-[#8B7E6A]/20 rounded-full px-4 py-2">
                    <FaWhatsapp className="text-green-600 size-4" /> India
                  </a>
                  <a href="https://wa.me/971506012581" className="flex items-center gap-2 text-sm text-[#2D2219] font-medium border border-[#8B7E6A]/20 rounded-full px-4 py-2">
                    <FaWhatsapp className="text-green-600 size-4" /> UAE
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-[#8B7E6A] font-bold uppercase tracking-widest">Email Us</span>
                <a href="mailto:hello@biznorx.com" className="flex items-center gap-2 text-lg text-[#2D2219] font-medium">
                  <Mail className="text-[#8B7E6A] size-5" /> hello@biznorx.com
                </a>
              </div>
            </div>

            {/* Mobile Socials */}
            <div className="flex items-center justify-between pt-8 border-t border-[#8B7E6A]/10">
              <div className="flex space-x-6">
                {socialLinks.map((social, i) => (
                  <a key={i} href={social.href} className="text-[#2D2219] hover:text-[#8B7E6A] transition-colors">
                    <social.icon className="size-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
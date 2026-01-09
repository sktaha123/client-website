import { MapPin, Mail, Phone, Linkedin, Instagram, Facebook } from "lucide-react";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: FaXTwitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  const contactMethods = [
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

  return (
    <footer className="bg-[#FAF9F6] border-t border-[#8B7E6A]/10 pt-24 pb-12 font-dm">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-5">
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
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className="
                      w-12 h-12 rounded-full
                      border border-[#8B7E6A]/20
                      flex items-center justify-center
                      text-[#2D2219]
                      transition-all duration-500
                      hover:bg-[#2D2219] hover:text-[#FAF9F6]
                      hover:-translate-y-1
                    "
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* CONTACT HUB COLUMN */}
          <div className="lg:col-span-7">
            <div className="bg-[#EAE4D9]/30 rounded-[2.5rem] p-8 md:p-12 border border-[#8B7E6A]/10">
              <h3 className="text-[#2D2219] text-xs font-bold uppercase tracking-[0.3em] mb-10">
                Direct Communication
              </h3>
              
              <div className="grid md:grid-cols-2 gap-y-10 gap-x-12">
                {contactMethods.map((method, idx) => {
                  const Icon = method.icon;
                  return (
                    <a key={idx} href={method.href} className="group block">
                      <p className="text-[10px] text-[#8B7E6A] font-bold uppercase tracking-widest mb-2">
                        {method.label}
                      </p>
                      <div className="flex items-center gap-3">
                        <Icon className={`h-5 w-5 ${method.color} transition-transform group-hover:scale-110`} />
                        <span className="text-xl text-[#2D2219] font-medium tracking-tight border-b border-transparent group-hover:border-[#8B7E6A]">
                          {method.value}
                        </span>
                      </div>
                    </a>
                  );
                })}
                
                {/* Physical Locations as a distinct sub-section */}
                <div className="md:col-span-2 pt-6 border-t border-[#8B7E6A]/10 mt-2">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 mt-1 text-[#8B7E6A]" />
                      <p className="text-sm text-[#6B5E4C] leading-snug">
                        <strong className="text-[#2D2219] block mb-1">India Office</strong>
                        Mumbai, Maharashtra
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 mt-1 text-[#8B7E6A]" />
                      <p className="text-sm text-[#6B5E4C] leading-snug">
                        <strong className="text-[#2D2219] block mb-1">UAE Office</strong>
                        Dubai, United Arab Emirates
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM LEGAL BAR */}
        <div className="pt-10 border-t border-[#8B7E6A]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-[#8B7E6A]">
            <p>© 2026 BiznorX — Excellence Defined.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-[#2D2219] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#2D2219] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#2D2219] transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { Mail } from "lucide-react";
import { Instagram, Linkedin } from "lucide-react";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";

const socials = [
  { Icon: Instagram,  href: "https://www.instagram.com/biznorx",         label: "Instagram" },
  { Icon: FaXTwitter, href: "#",                                           label: "Twitter" },
  { Icon: Linkedin,   href: "https://www.linkedin.com/company/biznorx/", label: "LinkedIn" },
  { Icon: FaWhatsapp, href: "https://wa.me/919004072449",                 label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="bg-biz-charcoal-ink border-t border-white/6 font-dm">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Copyright */}
        <p className="text-[12px] text-white/20">
          © {new Date().getFullYear()} BiznorX. All rights reserved.
        </p>

        {/* Socials */}
        

        {/* Email */}
        <a
          href="mailto:business@biznorx.com"
          className="text-[12px] text-white/20 hover:text-biz-bronze transition-colors duration-200 flex items-center gap-1.5"
        >
          <Mail size={12} />
          business@biznorx.com
        </a>

      </div>
    </footer>
  );
}

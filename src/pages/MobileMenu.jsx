import { useState } from "react";
import {
  Menu,
  X,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
} from "lucide-react";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";

const socialItems = [
  { label: "Instagram", href: "https://instagram.com/", icon: Instagram },
  { label: "Facebook", href: "https://facebook.com/", icon: Facebook },
  { label: "X (Twitter)", href: "https://x.com/", icon: FaXTwitter },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: Linkedin },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="
          md:hidden
          w-10 h-10
          flex items-center justify-center
          rounded-lg
          
          
          shadow-md
          z-50
          transition-colors
          focus:outline-none focus:ring-2 focus:ring-[#f5cb5c]
        "
      >
        {isOpen ? (
          <X className="w-6 h-6 text-[#f3f4f2]" />
        ) : (
          <Menu className="w-6 h-6 text-[#f3f4f2]" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Solid Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw]
          bg-[#050807]
          text-[#f3f4f2]
          z-50
          transition-transform duration-300 ease-in-out
          md:hidden
          flex flex-col
          border-l border-[#1f5e46]/40
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        {/* Header */}
        <div className="p-6 border-b border-[#1f5e46]/30">
          <div className="flex items-center justify-between">
            <div
              id="mobile-menu-title"
              className="font-raleway text-xl font-bold tracking-wide text-[#f3f4f2]"
            >
              BiznorX
            </div>
            <button
              onClick={closeMenu}
              aria-label="Close menu"
              className="text-[#f3f4f2] hover:text-[#f5cb5c] focus:outline-none focus:ring-2 focus:ring-[#f5cb5c]/50 rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="font-helvetica text-xs text-[#a8b8b0] mt-1">
            Enterprise Workforce Solutions
          </p>
        </div>

        {/* Social Links */}
        <nav className="p-6 flex-1">
          <ul className="space-y-2">
            {socialItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={index}>
                  <a
                    href={item.href.trim()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="
                      flex items-center gap-3
                      px-4 py-3
                      rounded-lg
                      font-helvetica
                      text-sm
                      text-[#f3f4f2]
                      hover:bg-[#1f5e46]/40
                      active:bg-[#1f5e46]/60
                      transition-colors
                      focus:outline-none focus:ring-2 focus:ring-[#f5cb5c]/50
                    "
                  >
                    <Icon className="w-5 h-5 flex-shrink-0 text-[#f3f4f2]" />
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Contact Section */}
        <div className="px-6 pb-6 space-y-3">
          <a
            href="https://wa.me/919004378003"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="
              flex items-center gap-3
              px-4 py-3
              rounded-lg
              font-helvetica
              text-sm
              bg-[#1f5e46]/20
              text-[#f3f4f2]
              hover:bg-[#1f5e46]/40
              active:bg-[#1f5e46]/60
              transition-colors
              focus:outline-none focus:ring-2 focus:ring-[#f5cb5c]/50
            "
          >
            <FaWhatsapp className="w-5 h-5 text-green-400 flex-shrink-0" />
            <span>🇮🇳 +91 9004378003</span>
          </a>

          <a
            href="https://wa.me/971506012581"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="
              flex items-center gap-3
              px-4 py-3
              rounded-lg
              font-helvetica
              text-sm
              bg-[#1f5e46]/20
              text-[#f3f4f2]
              hover:bg-[#1f5e46]/40
              active:bg-[#1f5e46]/60
              transition-colors
              focus:outline-none focus:ring-2 focus:ring-[#f5cb5c]/50
            "
          >
            <FaWhatsapp className="w-5 h-5 text-green-400 flex-shrink-0" />
            <span>🇦🇪 +971 506012581</span>
          </a>

          <a
            href="mailto:hello@biznorx.com"
            onClick={closeMenu}
            className="
              flex items-center gap-3
              px-4 py-3
              rounded-lg
              font-helvetica
              text-sm
              bg-[#1f5e46]/20
              text-[#f3f4f2]
              hover:bg-[#1f5e46]/40
              active:bg-[#1f5e46]/60
              transition-colors
              focus:outline-none focus:ring-2 focus:ring-[#f5cb5c]/50
            "
          >
            <Mail className="w-5 h-5 flex-shrink-0 text-[#f3f4f2]" />
            <span>hello@biznorx.com</span>
          </a>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#1f5e46]/30 text-center">
          <p className="font-helvetica text-xs text-[#a8b8b0]">
            © 2026 BiznorX. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
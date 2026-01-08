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
  { label: "Twitter", href: "https://x.com/", icon: FaXTwitter },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: Linkedin },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        className="
          md:hidden
          w-10 h-10
          flex items-center justify-center
          rounded-lg
          bg-[#e8eddf]
          border border-[#cfdbd5]/60
          shadow-sm
          z-50
        "
      >
        {isOpen ? (
          <X className="w-6 h-6 text-[#242423]" />
        ) : (
          <Menu className="w-6 h-6 text-[#242423]" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw]
        bg-[#e8eddf]
        z-50
        transition-transform duration-300 ease-in-out
        md:hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#cfdbd5]/60">
          <div className="flex items-center justify-between mb-2">
            <div className="font-raleway text-2xl font-semibold tracking-wide text-[#242423]">
              BiznorX
            </div>
            <button onClick={closeMenu}>
              <X className="w-6 h-6 text-[#242423]" />
            </button>
          </div>
          <p className="font-helvetica tracking-tightest text-sm text-[#333533]">
            Enterprise Workforce Solutions
          </p>
        </div>

        {/* Social Links */}
        <nav className="p-6">
          <ul className="space-y-2">
            {socialItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={index}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="
                      flex items-center gap-4
                      px-4 py-3
                      rounded-xl
                      font-helvetica
                      tracking-tightest
                      text-[15px]
                      text-[#242423]
                      hover:bg-[#f5cb5c]
                      hover:text-[#242423]
                      transition
                    "
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Contact Section */}
        <div className="px-6 space-y-3">
          <a
            href="https://wa.me/919004378003"
            className="
              flex items-center gap-4
              px-4 py-3
              rounded-xl
              font-helvetica
              tracking-tightest
              text-sm
              bg-[#f5cb5c]/20
              hover:bg-[#f5cb5c]
              text-[#242423]
              hover:text-[#242423]
              transition
            "
          >
            <FaWhatsapp className="w-5 h-5 text-green-600" />
            <span>🇮🇳 +91 9004378003</span>
          </a>

          <a
            href="https://wa.me/971506012581"
            className="
              flex items-center gap-4
              px-4 py-3
              rounded-xl
              font-helvetica
              tracking-tightest
              text-sm
              bg-[#f5cb5c]/20
              hover:bg-[#f5cb5c]
              text-[#242423]
              hover:text-[#242423]
              transition
            "
          >
            <FaWhatsapp className="w-5 h-5 text-green-600" />
            <span>🇦🇪 +971 506012581</span>
          </a>

          <a
            href="mailto:hello@biznorx.com"
            className="
              flex items-center gap-4
              px-4 py-3
              rounded-xl
              font-helvetica
              tracking-tightest
              text-sm
              bg-[#f5cb5c]/20
              hover:bg-[#f5cb5c]
              text-[#242423]
              hover:text-[#242423]
              transition
            "
          >
            <Mail className="w-5 h-5" />
            <span>hello@biznorx.com</span>
          </a>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-[#cfdbd5]/60 text-center">
          <p className="font-helvetica text-xs text-[#333533] tracking-tightest">
            © 2026 BiznorX. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { MobileMenu } from "./MobileMenu";

const Navbar = () => {
  return (
    <>
      {/* NAVBAR */}
      <div
        className="
          fixed w-full z-50
          bg-[#050807]
          border-b border-[#1f5e46]/30
        "
      >
        <div
          className="
            max-w-[90rem] mx-auto
            px-4 sm:px-6 lg:px-8
            flex items-center justify-between
            h-16
          "
        >
          {/* Logo */}
          <img
            src="/svgs/Biznorlogo.png"
            alt="BiznorX"
            className="h-14 md:h-16 shrink-0"
          />

          {/* Right Section */}
          <div className="flex items-center space-x-5 h-full">

            {/* Desktop Socials */}
            <div
              className="
                hidden md:flex items-center space-x-7
                bg-[#1f5e46]
                hover:bg-[#2a7a5c]
                transition-all duration-200
                hover:-translate-y-0.5
                px-8 py-3 rounded-xl
                shadow-lg
                cursor-pointer
                group
              "
            >
              {["instagram", "facebook", "twitter", "linkedin"].map((icon) => (
                <div key={icon} className="relative size-5">
                  <img
                    src={`/svgs/${icon}w.svg`}
                    alt={icon}
                    className="absolute inset-0"
                  />
                </div>
              ))}

              {/* WhatsApp */}
              <div className="relative group/icon">
                <div className="relative size-5">
                  <img
                    src="/svgs/whatsappw.svg"
                    alt="whatsapp"
                    className="absolute inset-0"
                  />
                </div>

                <div
                  className="
                    absolute top-9 left-1/2 -translate-x-1/2
                    bg-[#071510]
                    rounded-xl shadow-xl w-40
                    px-4 py-3 space-y-2
                    border border-[#1f5e46]/40

                    opacity-0 invisible translate-y-2
                    transition-all duration-300
                    group-hover/icon:opacity-100
                    group-hover/icon:visible
                    group-hover/icon:translate-y-0
                  "
                >
                  <a
                    href="https://wa.me/919004378003"
                    className="block text-sm font-helvetica tracking-tightest text-[#f3f4f2]"
                  >
                    🇮🇳 +91 9004378003
                  </a>
                  <a
                    href="https://wa.me/971506012581"
                    className="block text-sm font-helvetica tracking-tightest text-[#f3f4f2]"
                  >
                    🇦🇪 +971 506012581
                  </a>
                </div>
              </div>

              {/* Gmail */}
              <div className="relative group/icon">
                <div className="relative size-5">
                  <img
                    src="/svgs/gmailw.svg"
                    alt="gmail"
                    className="absolute inset-0"
                  />
                </div>

                <div
                  className="
                    absolute top-9 left-1/2 -translate-x-1/2
                    bg-[#071510]
                    rounded-xl shadow-xl w-48
                    px-4 py-3
                    border border-[#1f5e46]/40

                    opacity-0 invisible translate-y-2
                    transition-all duration-300
                    group-hover/icon:opacity-100
                    group-hover/icon:visible
                    group-hover/icon:translate-y-0
                  "
                >
                  <a
                    href="mailto:hello@biznorx.com"
                    className="block text-sm font-helvetica tracking-tightest text-[#f3f4f2]"
                  >
                    hello@biznorx.com
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

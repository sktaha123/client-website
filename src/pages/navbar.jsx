import React from "react";
import { MobileMenu } from "./MobileMenu";

const Navbar = () => {
  return (
    <>
      {/* NAVBAR */}
      <div
        className="
          fixed w-full z-50
          bg-[#e8eddf]
          border-b border-[#cfdbd5]/50
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
                bg-[#f5cb5c]
                hover:bg-[#e6b846]
                transition-all duration-150
                hover:-translate-y-0.5
                px-8 py-3 rounded-xl
                shadow-sm
                cursor-pointer
                group
              "
            >
              {["instagram", "facebook", "twitter", "linkedin"].map((icon) => (
                <div key={icon} className="relative size-5">
                  <img
                    src={`/svgs/${icon}.svg`}
                    alt={icon}
                    className="
                      absolute inset-0
                      transition-opacity duration-200
                      group-hover:opacity-0
                    "
                  />
                  <img
                    src={`/svgs/${icon}w.svg`}
                    alt={`${icon}-white`}
                    className="
                      absolute inset-0
                      opacity-0
                      transition-opacity duration-200
                      group-hover:opacity-100
                    "
                  />
                </div>
              ))}

              {/* WhatsApp */}
              <div className="relative group/icon">
                <div className="relative size-5">
                  <img
                    src="/svgs/whatsapp.svg"
                    alt="whatsapp"
                    className="absolute inset-0 transition-opacity group-hover:opacity-0"
                  />
                  <img
                    src="/svgs/whatsappw.svg"
                    alt="whatsapp-white"
                    className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </div>

                <div
                  className="
                    absolute top-8 left-1/2 -translate-x-1/2
                    bg-white
                    rounded-xl shadow-lg w-40
                    px-4 py-3 space-y-2
                    opacity-0 invisible translate-y-2
                    transition-all duration-300
                    group-hover/icon:opacity-100
                    group-hover/icon:visible
                    group-hover/icon:translate-y-0
                  "
                >
                  <a
                    href="https://wa.me/919004378003"
                    className="block text-sm font-helvetica tracking-tightest text-[#242423]"
                  >
                    🇮🇳 +91 9004378003
                  </a>
                  <a
                    href="https://wa.me/971506012581"
                    className="block text-sm font-helvetica tracking-tightest text-[#242423]"
                  >
                    🇦🇪 +971 506012581
                  </a>
                </div>
              </div>

              {/* Gmail */}
              <div className="relative group/icon">
                <div className="relative size-5">
                  <img
                    src="/svgs/gmail.svg"
                    alt="gmail"
                    className="absolute inset-0 transition-opacity group-hover:opacity-0"
                  />
                  <img
                    src="/svgs/gmailw.svg"
                    alt="gmail-white"
                    className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </div>

                <div
                  className="
                    absolute top-8 left-1/2 -translate-x-1/2
                    bg-white
                    rounded-xl shadow-lg w-48
                    px-4 py-3
                    opacity-0 invisible translate-y-2
                    transition-all duration-300
                    group-hover/icon:opacity-100
                    group-hover/icon:visible
                    group-hover/icon:translate-y-0
                  "
                >
                  <a
                    href="mailto:hello@biznorx.com"
                    className="block text-sm font-helvetica tracking-tightest text-[#242423]"
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

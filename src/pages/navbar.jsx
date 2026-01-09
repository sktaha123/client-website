import React from "react";
import { MobileMenu } from "./MobileMenu";

const Navbar = () => {
  return (
    <>
      {/* FIXED WRAPPER */}
      <div className="fixed md:top-1 left-0 right-0  z-50 flex justify-center">
        {/* NAVBAR SURFACE */}
        <div
          className="
            w-[100vw] md:w-[90vw]
            max-w-7xl
            bg-[#fffbf2]
           
            md:rounded-full
            shadow-2xl
            
          "
        >
          {/* GRID LAYOUT */}
          <div
            className="
              px-4 sm:px-6 lg:px-8
              h-16
              grid grid-cols-2
              md:grid-cols-[1fr_auto_1fr]
              items-center
            "
          >
            {/* LEFT — LOGO */}
            <div className="flex items-center justify-start">
              <img
                src="/svgs/Biznorlogo.png"
                alt="BiznorX"
                className="h-14 md:h-16 shrink-0"
              />
            </div>

            {/* CENTER — SOCIALS (DESKTOP ONLY) */}
            <div className="hidden md:flex justify-center">
              <div
                className="
                  flex items-center space-x-7
                  
                  
                  px-8 py-3 rounded-xl
                  
                  cursor-pointer
                  group
                "
              >
                {["instagram", "facebook", "twitter", "linkedin"].map(
                  (icon) => (
                    <div key={icon} className="relative size-5">
                      <img
                        src={`/svgs/${icon}.svg`}
                        alt={icon}
                        className="absolute inset-0"
                      />
                    </div>
                  )
                )}

                {/* WhatsApp */}
                <div className="relative group/icon">
                  <div className="relative size-5">
                    <img
                      src="/svgs/whatsapp.svg"
                      alt="whatsapp"
                      className="absolute inset-0"
                    />
                  </div>

                  <div
                    className="
                      absolute top-9 left-1/2 -translate-x-1/2
                      bg-[#FAF5EA]
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
                      className="block text-sm text-[black]"
                    >
                      🇮🇳 +91 9004378003
                    </a>
                    <a
                      href="https://wa.me/971506012581"
                      className="block text-sm text-[black]"
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
                      className="absolute inset-0"
                    />
                  </div>

                  <div
                    className="
                      absolute top-9 left-1/2 -translate-x-1/2
                      bg-[#FAF5EA]
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
                      className="block text-sm text-[black]"
                    >
                      hello@biznorx.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — CTA + MOBILE MENU */}
            <div className="flex items-center justify-end space-x-5">
              <a
                href="#homepage"
                className="
                hidden md:block
                   rounded-lg
                  bg-[#750404]
                  hover:bg-[#5b0202]
                  px-4 py-2
                  text-white
                  font-semibold
                  transition
                  font-dm
                  
                  
                  
                  md:text-md
                "
              >
                Contact Us
              </a>

              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

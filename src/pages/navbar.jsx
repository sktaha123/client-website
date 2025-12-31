import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 pt-3">
        <div
          className="
            flex items-center justify-between
            h-14 md:h-16
            px-6
            rounded-full
            bg-white/15 backdrop-blur-xl
            border border-white/20
            shadow-lg
          "
        >
          {/* Logo */}
          <span className="text-black font-semibold tracking-wide">
            Biznor Xpress
          </span>

          {/* Right Section */}
          <div className="flex items-center space-x-8">
            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@biznorx.com&su=Inquiry&body=Hello%20Biznorx,"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block text-sm text-white/90 hover:text-white transition"
            >
              hello@biznorx.com
            </a>

            {/* Social Icons (Desktop only) */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#"><img src="/svgs/instagram.svg" className="h-5 w-5 opacity-80 hover:opacity-100 transition" /></a>
              <a href="#"><img src="/svgs/linkedin.svg" className="h-5 w-5 opacity-80 hover:opacity-100 transition" /></a>
              <a href="#"><img src="/svgs/telegram.svg" className="h-5 w-5 opacity-80 hover:opacity-100 transition" /></a>
              <a href="#"><img src="/svgs/facebook.svg" className="h-5 w-5 opacity-80 hover:opacity-100 transition" /></a>

              {/* WhatsApp Dropdown */}
              <div className="relative group">
                <img
                  src="/svgs/whatsapp.svg"
                  alt="WhatsApp"
                  className="h-5 w-5 cursor-pointer opacity-80 hover:opacity-100 transition"
                />

                <div
                  className="
                    absolute right-0 top-8
                    w-48
                    rounded-xl
                    bg-white/90 backdrop-blur
                    shadow-xl border
                    opacity-0 invisible
                    translate-y-2 scale-95
                    transition-all duration-300 ease-out
                    group-hover:opacity-100
                    group-hover:visible
                    group-hover:translate-y-0
                    group-hover:scale-100
                  "
                >
                  <ul className="py-2 text-sm text-gray-800">
                    <li>
                      <a
                        href="https://wa.me/919004378003"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 hover:bg-gray-100 transition"
                      >
                        🇮🇳 +91 9004378003
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://wa.me/971506012581"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 hover:bg-gray-100 transition"
                      >
                        🇦🇪 +971 506012581
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Hamburger (Mobile) */}
            <button className="md:hidden text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-7 w-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

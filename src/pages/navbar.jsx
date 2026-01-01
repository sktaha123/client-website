import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openWhatsapp, setOpenWhatsapp] = useState(false);


  return (
    <>
      {/* NAVBAR */}
      
       <div className="bg-white rounded-b-2xl shadow-xl z-50 fixed top-0 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-18">

        <div>
          <img src="/svgs/Biznorlogo.jpeg" alt="" className="h-14 md:h-16 mr-3" />
        </div>

        {/* Desktop Socials */}
        <div className="hidden md:block md:flex md:space-x-7 bg-gray-100 px-4 py-3 rounded-full shadow-lg md:mx-auto">
          <a href=""><img src="/svgs/instagram.svg" className="size-5 transition-transform duration-200 hover:scale-110" /></a>
          <a href=""><img src="/svgs/facebook1.svg" className="size-5 transition-transform duration-200 hover:scale-110" /></a>
          <a href=""><img src="/svgs/twitter.svg" className="size-5 transition-transform duration-200 hover:scale-110" /></a>
          <a href=""><img src="/svgs/linkedin.svg" className="size-5 transition-transform duration-200 hover:scale-110" /></a>
          <div className="relative hidden md:block group">
  <img
    src="/svgs/whatsapp.svg"
    className="size-5 cursor-pointer transition-transform duration-200 hover:scale-110"
  />

  {/* WhatsApp Dropdown */}
  <div
    className="
      absolute top-8 left-1/2 -translate-x-1/2
      bg-white rounded-xl shadow-lg w-40
      px-4 py-3 space-y-2
      opacity-0 invisible translate-y-2
      transition-all duration-300
      group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
    "
  >
    <a
      href="https://wa.me/91919004378003"
      target="_blank"
      className="block text-sm hover:text-shadow-lg"
    >
      🇮🇳 +91 9004378003
    </a>
    <a
      href="https://wa.me/971506012581"
      target="_blank"
      className="block text-sm hover:text-shadow-lg"
    >
      🇦🇪 +971 506012581
    </a>
  </div>
</div>

<div className="relative hidden md:block group">
  <img
    src="/svgs/gmail.svg"
    className="size-5 cursor-pointer transition-transform duration-200 hover:scale-110"
  />

  {/* gmail Dropdown */}
  <div
    className="
      absolute top-8 left-1/2 -translate-x-1/2
      bg-white rounded-xl shadow-lg w-40
      px-4 py-3 space-y-2
      opacity-0 invisible translate-y-2
      transition-all duration-300
      group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
    "
  >
    <a
  href="mailto:hello@biznorx.com"
  target="_blank"
  className="block text-sm "
  style={{ transition: "text-shadow 0.3s", cursor: "pointer" }}
  onMouseEnter={e => (e.currentTarget.style.textShadow = "0 0 15px #3b82f6")}
  onMouseLeave={e => (e.currentTarget.style.textShadow = "none")}
>
   hello@biznorx.com
</a>

    
  </div>
</div>

        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center px-3 ml-auto md:ml-0 space-x-5 md:space-x-1">
          <span
            className="
              inline-flex items-center justify-center
              md:px-5 md:py-2 px-3 py-1
              rounded-full text-sm font-medium tracking-wide
              bg-gray-100 text-gray-900 shadow-sm cursor-pointer
              transition-all duration-300 ease-out
              hover:bg-gray-200 hover:shadow-md
              active:scale-95
            "
          >
            Submit CV
          </span>

          {/* Hamburger / Close */}
          <span
            className="size-6 md:hidden  cursor-pointer relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img
              src="/svgs/hamburger.svg"
              alt="Open menu"
              className={`absolute inset-0 transition-all duration-300 ease-out
                ${isMenuOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"}
              `}
            />
            <img
              src="/svgs/close.svg"
              alt="Close menu"
              className={`absolute inset-0 transition-all duration-300 ease-out
                ${isMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"}
              `}
            />
          </span>
        </div>
      </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden fixed right-10 top-1/3 z-50
          transform -translate-y-1/2
          flex flex-col space-y-7
          px-3 py-4 bg-gray-100 shadow-lg rounded-full
          transition-all duration-300 ease-out
          ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-24 opacity-0 pointer-events-none"}
        `}
      >
        <a href=""><img src="/svgs/instagram.svg" className="size-5 transition-transform duration-200 hover:scale-110" /></a>
        <a href=""><img src="/svgs/facebook1.svg" className="size-5 transition-transform duration-200 hover:scale-110" /></a>
        <a href=""><img src="/svgs/twitter.svg" className="size-5 transition-transform duration-200 hover:scale-110" /></a>
        <a href=""><img src="/svgs/linkedin.svg" className="size-5 transition-transform duration-200 hover:scale-110" /></a>
       <div className="relative">
  <img
    src="/svgs/whatsapp.svg"
    className="size-5 cursor-pointer transition-transform duration-200 hover:scale-110"
    onClick={() => setOpenWhatsapp(!openWhatsapp)}
  />

  {/* Mobile WhatsApp Dropdown */}
  <div
    className={`
      absolute right-10 top-1/2 -translate-y-1/2
      bg-white rounded-xl shadow-lg
      px-4 py-3 space-y-2 w-40
      transition-all duration-300
      ${openWhatsapp ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
    `}
  >
    <a
      href="https://wa.me/919004378003"
      target="_blank"
      className="block text-sm"
    >
      🇮🇳 +91 9004378003
    </a>
    <a
      href="https://wa.me/971506012581"
      target="_blank"
      className="block text-sm"
    >
      🇦🇪 +971 506012581
    </a>
  </div>
</div>

<div className="relative">
  <img
    src="/svgs/gmail.svg"
    className="size-5 cursor-pointer transition-transform duration-200 hover:scale-110"
    onClick={() => setOpenWhatsapp(!openWhatsapp)}
  />

  {/* Mobile Gmail Dropdown */}
  <div
    className={`
      absolute right-10 mt-4 top-1/2 -translate-y-1/2
      bg-white rounded-xl shadow-lg
      px-4 py-3 space-y-2 w-40
      transition-all duration-300
      ${openWhatsapp ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
    `}
  >
    <a
  href="mailto:hello@biznorx.com"
  target="_blank"
  className="block text-sm "
  style={{ transition: "text-shadow 0.3s", cursor: "pointer" }}
  onMouseEnter={e => (e.currentTarget.style.textShadow = "0 0 15px #3b82f6")}
  onMouseLeave={e => (e.currentTarget.style.textShadow = "none")}
>
   hello@biznorx.com
</a>
  
  </div>
</div>

      </div>
    </>
  );
};

export default Navbar;

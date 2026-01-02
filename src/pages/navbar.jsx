import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openWhatsapp, setOpenWhatsapp] = useState(false);
  const [openGmail, setOpenGmail] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Scroll detection */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <div
        className={`
          fixed top-0 w-full z-50 rounded-b-2xl
          transition-all duration-300 ease-in-out
          ${
            scrolled
              ? "bg-white/30 shadow-md backdrop-blur-sm"
              : "bg-black/20 bg-transparent shadow-none backdrop-blur-sm"
          }
        `}
      >
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-18">
          
          {/* Logo */}
          <img
            src="/svgs/Biznorlogo.jpeg"
            alt="BiznorX"
            className="h-14 md:h-16"
          />

          {/* Desktop Socials */}
          <div className="hidden md:flex space-x-7 bg-indigo-950/10 backdrop-blur-sm border border-white/30 px-4 py-3 rounded-full shadow-lg mx-auto">

  {/* Social Icons */}
  {[
    "instagram",
    "facebook",
    "twitter",
    "linkedin",
  ].map((icon) => (
    <img
      key={icon}
      src={scrolled ? `/svgs/${icon}.svg` : `/svgs/${icon}w.svg`}
      alt={icon}
      className="size-5 transition-transform duration-200 hover:scale-110 cursor-pointer"
    />
  ))}

  {/* WhatsApp (dropdown preserved) */}
  <div className="relative group">
    <img
      src={scrolled ? "/svgs/whatsapp.svg" : "/svgs/whatsappw.svg"}
      alt="WhatsApp"
      className="size-5 cursor-pointer transition-transform duration-200 hover:scale-110"
    />

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

  {/* Gmail (dropdown preserved) */}
  <div className="relative group">
    <img
      src={scrolled ? "/svgs/gmail.svg" : "/svgs/gmailw.svg"}
      alt="Gmail"
      className="size-5 cursor-pointer transition-transform duration-200 hover:scale-110"
    />

    <div
      className="
        absolute top-8 left-1/2 -translate-x-1/2
        bg-white rounded-xl shadow-lg w-48
        px-4 py-3
        opacity-0 invisible translate-y-2
        transition-all duration-300
        group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
      "
    >
      <a
        href="mailto:hello@biznorx.com"
        className="block text-sm"
      >
        hello@biznorx.com
      </a>
    </div>
  </div>

</div>


          {/* Right Section */}
          <div className="flex items-center space-x-5">
           <span
  className={`
    inline-flex items-center justify-center
    px-4 py-2
    rounded-full
    text-sm font-medium
    cursor-pointer mr-0
    transition-all duration-300 ease-out
    shadow-lg

    ${
      scrolled
        ? "bg-black text-white hover:bg-gray-900"
        : "bg-white/90 text-black hover:bg-white"
    }
  `}
>
  Submit CV
</span>


            {/* Hamburger / Close */}
            <span
              className="size-6 md:hidden cursor-pointer relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <img
                src={scrolled ? "/svgs/hamburgerb.svg" : "/svgs/hamburgerw.svg"}
                className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100"
                }`}
              />
              <img
                src="/svgs/close.svg"
                className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? "opacity-100" : "opacity-0 -rotate-90 scale-75"
                }`}
              />
            </span>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden fixed right-10 top-1/3 z-50 -translate-y-1/2
          flex flex-col space-y-7 px-3 py-4 bg-gray-100 shadow-lg rounded-full
          transition-all duration-300
          ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-24 opacity-0 pointer-events-none"}
        `}
      >
        {["instagram", "facebook1", "twitter", "linkedin"].map(icon => (
          <img key={icon} src={`/svgs/${icon}.svg`} className="size-5 hover:scale-110 transition" />
        ))}

        {/* Mobile WhatsApp */}
        <div className="relative">
          <img
            src="/svgs/whatsapp.svg"
            className="size-5 cursor-pointer"
            onClick={() => {
              setOpenWhatsapp(!openWhatsapp);
              setOpenGmail(false);
            }}
          />
          <div className={`absolute right-10 top-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg px-4 py-3 space-y-2 w-40 transition-all duration-300 ${openWhatsapp ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <a href="https://wa.me/919004378003" className="block text-sm">🇮🇳 +91 9004378003</a>
            <a href="https://wa.me/971506012581" className="block text-sm">🇦🇪 +971 506012581</a>
          </div>
        </div>

        {/* Mobile Gmail */}
        <div className="relative">
          <img
            src="/svgs/gmail.svg"
            className="size-5 cursor-pointer"
            onClick={() => {
              setOpenGmail(!openGmail);
              setOpenWhatsapp(false);
            }}
          />
          <div className={`absolute right-10 top-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg px-4 py-3 w-48 transition-all duration-300 ${openGmail ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <a href="mailto:hello@biznorx.com" className="block text-sm">hello@biznorx.com</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;




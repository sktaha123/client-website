import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // 🔗 SINGLE SOURCE OF TRUTH FOR LINKS
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Process", to: "/process" },
    { name: "Industries", to: "/industries" },
    { name: "Why BiznorX", to: "/whychooseus" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <div className="fixed top-0 md:top-2 left-0 right-0 z-50 flex justify-center px-0 md:px-6">
        <div
          className="
            w-full md:w-[98vw] max-w-7xl
            bg-biz-cream/90 backdrop-blur-xl
            md:rounded-biz
            shadow-[0_10px_40px_rgba(45,34,25,0.04)]
            transition-all duration-500
          "
        >
          <div className="px-6 md:px-10 h-20 flex items-center justify-between">

            {/* LEFT — LOGO */}
            <Link
              to="/"
              className="flex items-center scale-90 md:scale-100 z-[60]"
            >
              <img
                src="/svgs/Biznorlogo.png"
                alt="BiznorX"
                className="h-12 md:h-20 shrink-0 opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>

            {/* CENTER — DESKTOP NAV */}
            <nav className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="
                    font-dm text-[11px]
                    uppercase tracking-widest
                    font-bold
                    text-biz-charcoal/60
                    hover:text-biz-bronze
                    transition-colors
                  "
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* RIGHT — CTA + HAMBURGER */}
            <div className="flex items-center space-x-4 z-[60]">
              <Link
                to="/contact"
                className="
                  hidden md:flex items-center gap-3
                  rounded-full
                  bg-biz-charcoal-ink hover:bg-biz-bronze
                  px-7 py-3
                  text-biz-cream-light text-[10px]
                  font-bold uppercase tracking-widest
                  transition-all duration-500
                  font-dm shadow-xl shadow-biz-charcoal-ink/10
                  group
                "
              >
                Let's Talk
                <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
              </Link>

              {/* HAMBURGER */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-biz-charcoal-ink active:scale-90"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="size-7" /> : <Menu className="size-7" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed inset-0 bg-biz-cream z-40 lg:hidden
          transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)]
          ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `}
      >
        <div className="flex flex-col h-full pt-32 px-8 pb-12">
          <span className="text-biz-bronze text-[10px] font-bold uppercase tracking-ultra mb-10">
            Menu
          </span>

          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-4xl font-light text-biz-charcoal"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
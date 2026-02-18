import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X, Headset, MessageCircleMore } from "lucide-react";
import { Link, useLocation, NavLink } from "react-router-dom";

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

  // 🔗 LINK STRUCTURE
  // Groups for Desktop Dropdowns
  const menuGroups = {
    company: [
      { name: "About Us", to: "/about" },
      { name: "Process", to: "/process" },
      { name: "Why BiznorX", to: "/whychooseus" },
    ],
    solutions: [
      { name: "Services", to: "/services" },
      { name: "Industries", to: "/industries" },
      { name: "Software Solutions", to: "/software" },
    ],
    
  };

  // Flat list for Mobile
  const mobileLinks = [
    { name: "Home", to: "/" },
    ...menuGroups.company,
    ...menuGroups.solutions,
    { name: "Contact Us", to: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <div className="fixed top-0 md:top-0 left-0 right-0 z-50 flex justify-center px-0 md:px-6">
        <div
          className="
            w-full md:w-[99vw] max-w-5xl
            bg-biz-cream/90 backdrop-blur-xl sm:border-b md:border-0 border-white/40 md:border-white/20
            md:rounded-biz 
            shadow-[0_2px_40px_rgba(45,34,25,0.04)]
            transition-all duration-500
          "
        >
          <div className="px-6 md:px-6 h-18 flex items-center justify-between">
            {/* LEFT — LOGO */}
            <Link
              to="/"
              className="flex items-center scale-90 md:scale-100 z-60 mr-auto"
            >
              <img
                src="/svgs/Biznorlogo.png"
                alt="BiznorX"
                className="h-20 md:h-20 shrink-0 opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>

            {/* RIGHT SIDE GROUP: NAV + CTA */}
            <div className="hidden lg:flex items-center gap-8">

              <nav className="flex items-center gap-6">
                <NavLink
                  to="/"
                  onClick={() => window.lenis?.scrollTo(0)}
                  className={({ isActive }) =>
                    `font-dm text-[11px] uppercase tracking-widest font-bold transition-colors ${isActive ? "text-biz-bronze" : "text-biz-charcoal/60 hover:text-biz-bronze"}`
                  }
                >
                  Home
                </NavLink>

                {/* Company Dropdown Group */}
                <div className="group relative h-20 flex items-center cursor-pointer">
                  <span className="font-dm text-[11px] uppercase tracking-widest font-bold text-biz-charcoal/60 group-hover:text-biz-bronze transition-colors flex items-center gap-1">
                    Company
                    <span className="text-[9px] opacity-50 group-hover:rotate-180 transition-transform duration-300">▼</span>
                  </span>

                  {/* Dropdown Panel */}
                  <div className="absolute top-full right-0 pt-0 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out">
                    <div className="bg-white rounded-2xl shadow-xl p-2 min-w-[200px] flex flex-col gap-1">
                      {menuGroups.company.map((link) => (
                        <NavLink
                          key={link.name}
                          to={link.to}
                          onClick={() => window.lenis?.scrollTo(0)}
                          className={({ isActive }) =>
                            `block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${isActive ? "bg-biz-cream-dark text-biz-bronze" : "text-biz-charcoal hover:bg-biz-cream hover:text-biz-bronze"}`
                          }
                        >
                          {link.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Solutions Dropdown Group */}
                <div className="group relative h-20 flex items-center cursor-pointer">
                  <span className="font-dm text-[11px] uppercase tracking-widest font-bold text-biz-charcoal/60 group-hover:text-biz-bronze transition-colors flex items-center gap-1">
                    Solutions
                    <span className="text-[9px] opacity-50 group-hover:rotate-180 transition-transform duration-300">▼</span>
                  </span>

                  <div className="absolute top-full right-0 pt-0 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out">
                    <div className="bg-white rounded-2xl shadow-xl p-2 min-w-[220px] flex flex-col gap-1">
                      {menuGroups.solutions.map((link) => (
                        <NavLink
                          key={link.name}
                          to={link.to}
                          onClick={() => window.lenis?.scrollTo(0)}
                          className={({ isActive }) =>
                            `block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${isActive ? "bg-biz-cream-dark text-biz-bronze" : "text-biz-charcoal hover:bg-biz-cream hover:text-biz-bronze"}`
                          }
                        >
                          {link.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              </nav>

              

              {/* CONTACT & HAMBURGER */}
              <div className="flex items-center space-x-4">
                <Link
                  to="/contact"
                  onClick={() => window.lenis?.scrollTo(0)}
                  className="biz-btn biz-btn-primary px-6! py-2.5! gap-2! group hidden md:flex text-[10px]"
                >
                  <span className="relative z-10">Get in Touch</span>
                  <div className="relative z-10 bg-white/20 p-1 rounded-full group-hover:bg-white group-hover:text-biz-bronze transition-all duration-500">
                    <MessageCircleMore className="size-5" />
                  </div>
                  <div className="btn-gloss" />
                </Link>
              </div>
            </div>

            {/* MOBILE ONLY: HAMBURGER (Since desktop nav is hidden on mobile) */}
            <div className="flex lg:hidden items-center ml-auto">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-biz-charcoal-ink active:scale-90"
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
          fixed inset-0 bg-biz-cream z-40 lg:hidden overflow-hidden
          transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)]
          ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-50"}
        `}
      >
        <div className="flex flex-col h-full pt-32 px-8 pb-12 overflow-y-auto">
          <span className="text-biz-bronze text-[10px] font-bold uppercase tracking-ultra mb-10 block opacity-50">
            Menu
          </span>

          <nav className="flex flex-col space-y-6">
            {mobileLinks.map((link, idx) => (
              <div
                key={link.name}
                className={`
                  transform transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                  ${isOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}
                `}
                style={{ transitionDelay: `${100 + idx * 60}ms` }}
              >
                <NavLink
                  to={link.to}
                  onClick={() => window.lenis?.scrollTo(0)}
                  className={({ isActive }) =>
                    `
        text-4xl font-light tracking-tight
        transition-colors inline-block
        ${isActive
                      ? "text-biz-bronze  font-normal "
                      : "text-biz-charcoal hover:text-biz-bronze active:scale-95 duration-200"
                    }
        `
                  }
                >
                  {link.name}
                </NavLink>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
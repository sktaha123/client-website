import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Industries", to: "/industries" },
    { name: "Process", to: "/process" },
    { name: "Why Us", to: "/whychooseus" },
    { name: "Digital Solution", to: "/digital" },

  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? "bg-biz-cream/95 backdrop-blur-2xl border-b border-biz-charcoal/8 shadow-[0_1px_0_rgba(26,6,6,0.04)]"
            : "bg-biz-cream/95 border-b border-biz-charcoal/6"
          }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="h-[64px] flex items-center justify-between">

            {/* Logo */}
            <Link to="/" onClick={() => window.lenis?.scrollTo(0)} className="flex items-center shrink-0">
              <img
                src="/svgs/Biznorlogo.png"
                alt="BiznorX"
                className="h-[52px] w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  onClick={() => window.lenis?.scrollTo(0)}
                  className={({ isActive }) =>
                    `text-[13px] font-medium transition-colors duration-200 ${isActive
                      ? "text-biz-charcoal-ink"
                      : "text-biz-charcoal/50 hover:text-biz-charcoal"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/contact"
                onClick={() => window.lenis?.scrollTo(0)}
                className="text-[13px] font-medium bg-biz-bronze text-white px-5 py-2.5 rounded-full hover:bg-biz-bronze-dark transition-colors duration-200"
              >
                Get in Touch
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 -mr-1 text-biz-charcoal"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden bg-biz-cream transition-all duration-500 ease-[cubic-bezier(0.83,0,0.17,1)] ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex flex-col h-full pt-24 px-8 pb-12">
          <nav className="flex flex-col gap-2">
            {[...navLinks, { name: "Contact", to: "/contact" }].map((link, i) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={() => window.lenis?.scrollTo(0)}
                style={{
                  transitionDelay: isOpen ? `${i * 50}ms` : "0ms",
                }}
                className={({ isActive }) => `
                  py-4 border-b border-biz-charcoal/8 text-[28px] font-light tracking-tight
                  transition-all duration-500
                  ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                  ${isActive ? "text-biz-bronze" : "text-biz-charcoal"}
                `}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
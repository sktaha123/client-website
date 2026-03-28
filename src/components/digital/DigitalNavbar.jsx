import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, NavLink } from "react-router-dom";
import gsap from "gsap";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Industries", to: "/industries" },
  { name: "Process", to: "/process" },
  { name: "Why Us", to: "/whychooseus" },
  { name: "Digital Solution", to: "/digital" },
];

const DigitalNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const logoRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(logoRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.8 }, 0.1)
        .fromTo(linksRef.current.filter(Boolean),
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.07 }, 0.2)
        .fromTo(ctaRef.current,
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.7 }, 0.3);
    }, navRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#050505]/90 backdrop-blur-xl border-b border-white/8 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent border-b border-white/10"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="h-[64px] flex items-center justify-between">

            <Link
              ref={logoRef}
              to="/"
              onClick={() => window.lenis?.scrollTo(0)}
              className="flex items-center shrink-0 opacity-0"
            >
              <img
                src="/svgs/Biznorlogo.png"
                alt="BiznorX"
                className="h-[52px] w-auto object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link, i) => (
                <NavLink
                  key={link.name}
                  ref={(el) => (linksRef.current[i] = el)}
                  to={link.to}
                  onClick={() => window.lenis?.scrollTo(0)}
                  className={({ isActive }) =>
                    `text-[13px] font-medium transition-all duration-200 opacity-0 relative
                    after:content-[''] after:absolute after:-bottom-0.5 after:left-0
                    after:h-px after:bg-biz-bronze after:transition-all after:duration-300
                    ${isActive ? "text-white after:w-full" : "text-white/50 hover:text-white after:w-0 hover:after:w-full"}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            <div ref={ctaRef} className="hidden lg:flex items-center opacity-0">
              <Link
                to="/contact"
                onClick={() => window.lenis?.scrollTo(0)}
                className="text-[13px] font-medium bg-biz-bronze text-white px-5 py-2.5 rounded-full hover:bg-white hover:text-biz-charcoal-ink transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 -mr-1 text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-[cubic-bezier(0.83,0,0.17,1)] ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "#050505" }}
      >
        <div className="flex flex-col h-full pt-24 px-8 pb-12">
          <nav className="flex flex-col gap-2">
            {[...navLinks, { name: "Contact", to: "/contact" }].map((link, i) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={() => window.lenis?.scrollTo(0)}
                style={{ transitionDelay: isOpen ? `${i * 50}ms` : "0ms" }}
                className={({ isActive }) => `
                  py-4 border-b border-white/8 text-[28px] font-light tracking-tight
                  transition-all duration-500
                  ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                  ${isActive ? "text-biz-bronze" : "text-white"}
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

export default DigitalNavbar;

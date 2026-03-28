import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: "01",
    title: "Brand Identity",
    desc: "We build enduring brands with strategic foundations and striking visual systems that cut through the noise.",
    img: "/svgs/digital/brand.webp",
    categories: ["Logo Design", "Visual Identity", "Brand Guidelines", "Typography Systems", "Color Systems", "Brand Strategy"],
  },
  {
    num: "02",
    title: "Digital Design",
    desc: "Websites and digital experiences that convert. We design with purpose, creating user journeys that turn visitors into customers.",
    img: "/svgs/digital/digitald.webp",
    categories: ["Web Design", "Landing Pages", "E-commerce", "UI/UX Audit", "Wireframing", "Prototyping"],
  },
  {
    num: "03",
    title: "Product Design",
    desc: "Intuitive, highly functional interfaces for complex software. We bridge the gap between user needs and business goals.",
    img: "/svgs/digital/productd.webp",
    categories: ["SaaS Design", "Mobile Apps", "Design Systems", "User Testing", "Interaction Design"],
  },
  {
    num: "04",
    title: "Marketing & Growth",
    desc: "Data-driven campaigns designed to capture intent, build communities, and scale revenue predictably.",
    img: "/svgs/digital/marketing.webp",
    categories: ["SEO", "Content Strategy", "Performance Ads", "Social Media", "Conversion Rate Optimization"],
  },
  {
    num: "05",
    title: "Development",
    desc: "Robust, scalable, and secure engineering. We bring high-fidelity designs to life with modern technology stacks.",
    img: "/svgs/digital/devel.webp",
    categories: ["Frontend", "Backend", "API Integration", "CMS Development", "Web Animations"],
  },
];

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const navItemsRef = useRef([]);
  const cardRefs = useRef([]);

  /* ── Intersection-based active tracking ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveIndex(Number(entry.target.dataset.index));
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sectionRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });
    return () => observer.disconnect();
  }, []);

  /* ── GSAP header reveal ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", once: true },
        }
      );

      /* Stagger nav items */
      gsap.fromTo(navItemsRef.current,
        { opacity: 0, x: -20 },
        {
          opacity: 1, x: 0, duration: 0.7, ease: "power3.out", stagger: 0.1,
          scrollTrigger: { trigger: navItemsRef.current[0], start: "top 85%", once: true },
        }
      );

      /* Scroll-driven image reveal per card */
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const img = card.querySelector(".srv-img");
        const heading = card.querySelector(".srv-heading");
        const tags = card.querySelectorAll(".srv-tag");
        const text = card.querySelector(".srv-desc");

        const tl = gsap.timeline({
          scrollTrigger: { trigger: card, start: "top 78%", once: true },
        });
        tl.fromTo(img,
          { opacity: 0, y: 40, scale: 0.97, filter: "blur(12px)" },
          { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 1.1, ease: "power3.out" }
        )
          .fromTo(heading,
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }, "-=0.6"
          )
          .fromTo(text,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.5"
          )
          .fromTo(tags,
            { opacity: 0, scale: 0.85, y: 8 },
            { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(1.7)", stagger: 0.05 }, "-=0.4"
          );
      });
    });
    return () => ctx.revert();
  }, []);

  const scrollToSection = (index) => {
    if (sectionRefs.current[index]) {
      const el = sectionRefs.current[index];
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-biz-dark font-dm py-20 md:py-32 selection:bg-white selection:text-biz-dark">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* HEADER */}
        <div ref={headerRef} className="mb-16 md:mb-24 opacity-0">
          <h2 ref={titleRef} className="text-5xl md:text-7xl lg:text-[65px] font-light text-center text-white leading-[1] tracking-tighter">
            Services.
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 relative">

          {/* LEFT — sticky nav */}
          <div className="hidden md:block md:col-span-4 lg:col-span-3">
            <div className="sticky top-32 pr-8">
              <ul className="flex flex-col space-y-6">
                {services.map((s, i) => {
                  const isActive = activeIndex === i;
                  return (
                    <li key={s.num} ref={(el) => (navItemsRef.current[i] = el)} className="opacity-0">
                      <button
                        onClick={() => scrollToSection(i)}
                        className={`text-left text-2xl lg:text-[25px] tracking-tight transition-all duration-500 ease-out outline-none ${isActive
                          ? "text-white font-medium scale-[1.02] translate-x-2"
                          : "text-white/25 font-light hover:text-white/60"
                          }`}
                      >
                        {s.title}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="md:col-span-8 lg:col-span-9 md:border-l md:border-white/10 md:pl-10 lg:pl-16">
            <div className="flex flex-col gap-24 md:gap-40 pb-16">
              {services.map((s, i) => (
                <div
                  key={s.num}
                  ref={(el) => {
                    sectionRefs.current[i] = el;
                    cardRefs.current[i] = el;
                  }}
                  data-index={i}
                  className="flex flex-col scroll-mt-32"
                >
                  {/* Image */}
                  <div className="srv-img w-full aspect-[4/3] md:aspect-[19/10] bg-biz-dark-surface overflow-hidden mb-8 md:mb-12 border border-white/5 rounded-3xl opacity-0">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover transition-all duration-700"
                      loading="lazy"
                      onError={(e) => { e.currentTarget.style.display = "none"; }}
                    />
                  </div>

                  {/* Heading */}
                  <h3 className="srv-heading text-3xl md:text-4xl font-medium text-white tracking-tight mb-8 md:mb-10 opacity-0">
                    <span className="text-biz-bronze font-mono text-2xl mr-2">[{s.num}]</span> {s.title}
                  </h3>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    <div className="lg:col-span-6">
                      <p className="srv-desc text-[16px] text-white/60 leading-[1.8] font-light max-w-md opacity-0">
                        {s.desc}
                      </p>
                    </div>
                    <div className="lg:col-span-6">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-5">
                        Categories
                      </p>
                      <div className="flex flex-wrap gap-2.5">
                        {s.categories.map((cat, idx) => (
                          <span
                            key={idx}
                            className="srv-tag px-4 py-2 border border-white/10 rounded-2xl text-white/70 text-[12px] font-light tracking-wide bg-white/2 hover:border-biz-bronze/50 hover:text-white transition-all duration-300 opacity-0"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
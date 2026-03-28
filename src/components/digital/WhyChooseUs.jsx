import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, Plus } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    num: "01",
    title: "Strategy before execution",
    body: "We refuse to operate on assumptions. Every engagement begins with a comprehensive audit of your digital ecosystem to ensure we are solving the right problems.",
    img: "/svgs/digital/strategy.webp",
    tag: "Audit-driven",
  },
  {
    num: "02",
    title: "Premium design standards",
    body: "Your digital presence is your first impression. We engineer products that don't just function perfectly, but look and feel exceptional, stopping users mid-scroll.",
    img: "/svgs/digital/premiumd.webp",
    tag: "Award-quality",
  },
  {
    num: "03",
    title: "Measurable, revenue-focused results",
    body: "We map every campaign to your actual business revenue. No vanity metrics—just transparent reporting on rankings, traffic, qualified leads, and conversions.",
    img: "/svgs/digital/reven.webp",
    tag: "Data-backed",
  },
  {
    num: "04",
    title: "A long-term growth partner",
    body: "We don't deliver and disappear. We operate as an extension of your team, continually adapting, optimising, and scaling strategies as your business evolves.",
    img: "/digital/why-growth.webp",
    tag: "Always on",
  },
];

const WhyChooseUs = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const rowsRef = useRef([]);
  const bodyRefs = useRef([]);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 32 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 82%", once: true },
        }
      );

      const validRows = rowsRef.current.filter(Boolean);
      if (validRows.length) {
        gsap.fromTo(validRows,
          { opacity: 0, y: 24 },
          {
            opacity: 1, y: 0, duration: 0.65, ease: "power3.out", stagger: 0.1,
            scrollTrigger: { trigger: validRows[0], start: "top 82%", once: true },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    reasons.forEach((_, i) => {
      const el = bodyRefs.current[i];
      if (!el) return;
      if (i === openIndex) {
        gsap.to(el, { height: "auto", opacity: 1, duration: 0.45, ease: "power3.out" });
      } else {
        gsap.to(el, { height: 0, opacity: 0, duration: 0.35, ease: "power3.in" });
      }
    });
  }, [openIndex]);

  return (
    <section ref={sectionRef} className="bg-[#060608] py-24 md:py-36 text-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20 opacity-0"
        >
          <div>
           
            <h2 className="text-4xl md:text-6xl lg:text-[68px] font-light leading-[1.05] tracking-tight max-w-2xl">
              Why leading brands{" "}
              <span className="font-medium text-biz-bronze">choose BiznorX.</span>
            </h2>
          </div>
          
        </div>

        <div className="border-t border-white/10">
          {reasons.map((r, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                ref={(el) => (rowsRef.current[i] = el)}
                className="border-b border-white/10 opacity-0"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between py-7 md:py-8 gap-6 text-left group"
                >
                  <div className="flex items-center gap-6 md:gap-10">
                    <span className="text-[12px] font-mono text-biz-bronze/70 shrink-0">{r.num}</span>
                    <span className={`text-[22px] md:text-[28px] font-light tracking-tight transition-colors duration-300 ${isOpen ? "text-white" : "text-white/50 group-hover:text-white"}`}>
                      {r.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-5 shrink-0">
                    <span className="hidden md:inline-block text-[11px] border border-white/15 text-white/40 rounded-full px-3 py-1 group-hover:border-biz-bronze/40 group-hover:text-biz-bronze/70 transition-all duration-300">
                      {r.tag}
                    </span>
                    <span className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-biz-bronze border-biz-bronze rotate-45" : "border-white/20 group-hover:border-white/50"}`}>
                      <Plus size={13} />
                    </span>
                  </div>
                </button>

                <div
                  ref={(el) => (bodyRefs.current[i] = el)}
                  style={{ height: 0, overflow: "hidden", opacity: 0 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-8 pb-10 pl-[calc(12px+2.5rem)] md:pl-[calc(12px+4rem)]">
                    <p className="text-[16px] text-white/55 leading-[1.85] font-light">{r.body}</p>
                    <div className="w-full aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/8">
                      <img src={r.img} alt={r.title} loading="lazy" className="w-full h-full object-cover opacity-80" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="md:hidden mt-10">
          <button
            onClick={() => navigate("/contact")}
            className="w-full inline-flex items-center justify-center gap-2 border border-white/15 text-white text-[14px] font-medium px-6 py-4 rounded-full"
          >
            Work with us <ArrowUpRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

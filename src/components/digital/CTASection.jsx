import { useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const textRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1, x: 0, duration: 1.1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true },
        }
      );

      gsap.fromTo(rightRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1, x: 0, duration: 1.1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true },
          delay: 0.1,
        }
      );

      const textChildren = textRef.current ? Array.from(textRef.current.children) : [];
      if (textChildren.length) {
        gsap.fromTo(textChildren,
          { opacity: 0, y: 24 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.12,
            scrollTrigger: { trigger: textRef.current, start: "top 80%", once: true },
            delay: 0.3,
          }
        );
      }

      gsap.fromTo(lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1, duration: 1.2, ease: "power4.inOut",
          scrollTrigger: { trigger: lineRef.current, start: "top 85%", once: true },
          delay: 0.5,
        }
      );

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#060608] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-24 md:py-36">

        <div
          ref={lineRef}
          className="w-full h-px bg-white/10 mb-16 md:mb-20"
          style={{ transformOrigin: "left" }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[480px] rounded-[2.5rem] overflow-hidden border border-white/8">

          {/* LEFT */}
          <div
            ref={leftRef}
            className="relative flex flex-col justify-between p-10 md:p-14 bg-white/2 opacity-0"
          >
            <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-biz-bronze/30" />

            <div ref={textRef}>

              <h2 className="text-[clamp(36px,5vw,64px)] font-light text-white leading-[1.1] tracking-tight mb-6 opacity-0">
                Ready to engineer{" "}
                <span className="font-medium">your growth?</span>
              </h2>
              <p className="text-[16px] text-white/50 leading-[1.8] font-light max-w-[440px] opacity-0">
                Let's discuss your objectives. Get a free digital presence audit, a clear
                campaign roadmap, and transparent pricing upfront.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <button
                onClick={() => navigate("/contact")}
                className="group inline-flex items-center justify-center gap-2.5 bg-biz-bronze text-white text-[14px] font-medium px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300"
              >
                Book a Strategy Call
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-black/10 transition-colors shrink-0">
                  <ArrowUpRight size={13} />
                </span>
              </button>
              
            </div>
          </div>

          {/* RIGHT */}
          <div ref={rightRef} className="relative opacity-0 min-h-[300px]">
            <img
              src="/svgs/digital/team.webp"
              alt="Strategy session"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#060608] via-transparent to-transparent hidden lg:block" />
            <div className="absolute inset-0 bg-[#060608]/55" />

            <div className="absolute bottom-8 left-8 right-8 bg-white/8 backdrop-blur-xl border border-white/12 rounded-2xl p-5">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {["A", "B", "C"].map((l, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-biz-bronze-dark border-2 border-white/10 flex items-center justify-center text-[10px] text-white font-bold">
                      {l}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-white text-[13px] font-medium">Join 120+ brands</p>
                  <p className="text-white/50 text-[11px]">transforming their digital presence</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;

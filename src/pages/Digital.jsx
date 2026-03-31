import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "../components/digital/HeroSection";
import ServicesSection from "../components/digital/ServicesSection";
import AboutSection from "../components/digital/AboutSection";
import WhyChooseUs from "../components/digital/WhyChooseUs";
import ApproachSection from "../components/digital/ApproachSection";
import CTASection from "../components/digital/CTASection";
import DigitalNavbar from "../components/digital/DigitalNavbar";
import Seo from "../components/seo/Seo.jsx";
import { pageSeo } from "../utils/pageSeo.js";

gsap.registerPlugin(ScrollTrigger);

/* ─── Animated counter hook ─── */
function useCounter(ref, target, suffix = "") {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: parseFloat(target),
      duration: 2.2,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 88%", once: true },
      onUpdate: () => {
        el.textContent = Number.isInteger(parseFloat(target))
          ? Math.round(obj.val) + suffix
          : obj.val.toFixed(0) + suffix;
      },
    });
  }, [ref, target, suffix]);
}

const statsData = [
  { target: "3", suffix: "×",   label: "Avg. organic traffic growth" },
  { target: "40", suffix: "%",  label: "Average conversion lift" },
  { target: "12", suffix: "wk", label: "Avg. time to rank on page 1" },
  { target: "98", suffix: "%",  label: "Client retention rate" },
];

function StatItem({ stat }) {
  const numRef = useRef(null);
  useCounter(numRef, stat.target, stat.suffix);
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left md:pl-12 first:pl-0">
      <div
        ref={numRef}
        className="text-[40px] md:text-[48px] font-medium text-white tracking-tight leading-none mb-2"
      >
        0{stat.suffix}
      </div>
      <p className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold">
        {stat.label}
      </p>
    </div>
  );
}

function ResultsStrip() {
  const stripRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(stripRef.current?.querySelectorAll(".stat-block"),
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.12,
        scrollTrigger: { trigger: stripRef.current, start: "top 88%", once: true },
      }
    );
  }, []);

  return (
    <div className="bg-biz-charcoal-ink border-y border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-12 md:py-16">
        <div
          ref={stripRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 md:divide-x divide-white/10"
        >
          {statsData.map((stat, i) => (
            <div key={i} className="stat-block opacity-0">
              <StatItem stat={stat} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const Digital = () => (
  <div className="font-dm bg-white selection:bg-biz-bronze selection:text-white">
    <Seo {...pageSeo.digital} />
    {/* Dark navbar only for Digital page */}
    <DigitalNavbar />
    <HeroSection />
    <ResultsStrip />
    <ServicesSection />
    <AboutSection />
    <WhyChooseUs />
    <ApproachSection />
    <CTASection />
  </div>
);

export default Digital;

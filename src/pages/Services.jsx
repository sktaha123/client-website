import React, { useState, useEffect } from "react";
import {
  Users,
  Layers,
  UserPlus,
  HardHat,
  Globe,
  GraduationCap,
  Laptop,
  Code2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------- DATA ---------------- */

const services = [
  {
    id: "01",
    icon: Users,
    title: "Executive Recruitment",
    cat: "EXECUTIVE",
    desc: "Tailored hiring solutions connecting businesses with talent that ensures cultural fit and long-term success. Finding leaders who drive growth.",
  },
  {
    id: "02",
    icon: Layers,
    title: "Bulk Recruitment",
    cat: "OPERATIONS",
    desc: "Efficient large-scale hiring designed to meet urgent demands without compromising quality. Precision and speed for high-volume needs.",
  },
  {
    id: "03",
    icon: UserPlus,
    title: "EOR Services",
    cat: "COMPLIANCE",
    desc: "Staffing & Employer of Record solutions that simplify compliance, payroll, and HR management across borders.",
  },
  {
    id: "04",
    icon: HardHat,
    title: "Blue Collar Hiring",
    cat: "MANPOWER",
    desc: "Specialized recruitment for skilled and semi-skilled workers, supporting operational excellence and industrial demand.",
  },
  {
    id: "05",
    icon: Globe,
    title: "Global Placement",
    cat: "FRONTIER",
    desc: "International recruitment expertise bridging markets and helping professionals expand across borders with ease.",
  },
  {
    id: "06",
    icon: GraduationCap,
    title: "Training Academy",
    cat: "ACADEMY",
    desc: "Customized upskilling programs to enhance productivity and prepare teams for evolving industry needs.",
  },
  {
    id: "07",
    icon: Laptop,
    title: "Technical Consulting",
    cat: "INNOVATION",
    desc: "Strategic consulting blending technical expertise with insight for sustainable business innovation and digital shifts.",
  },
  {
  id: "08",
  icon: Code2,
  title: "Software Services",
  cat: "TECHNOLOGY",
  desc: "End-to-end software services delivering scalable, secure, and performance-driven solutions tailored to evolving business needs.",
},
];

const serviceImages = [
  "/cardsimages/s1.webp",
  "/cardsimages/s2.webp",
  "/cardsimages/s3.webp",
  "/cardsimages/s4.webp",
  "/cardsimages/s5.webp",
  "/cardsimages/s6.webp",
  "/cardsimages/s7.webp",
  "/cardsimages/s8.webp",
];

/* ---------------- COMPONENT ---------------- */

export function Services() {
  const [active, setActive] = useState(0);
  const [isAuto, setIsAuto] = useState(true);

  useEffect(() => {
    if (!isAuto) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [active, isAuto]);

  return (
    <section
      id="services"
      className="relative bg-biz-cream font-dm flex items-center overflow-hidden"
      style={{ minHeight: "calc(90vh - 96px)" }}
    >
      <motion.div
        className="max-w-7xl mx-auto px-6 w-full"
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* SECTION HEADING */}
        <div className="mb-10 md:mb-0 text-center lg:text-left">
          <span className="text-biz-bronze font-bold tracking-ultra uppercase text-[10px]">
            Ecosystem
          </span>
          <h2 className="text-4xl md:text-5xl text-biz-charcoal-ink font-light tracking-tightest mt-2">
            Our <span className="text-biz-bronze font-serif">Services</span>
          </h2>
        </div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          {/* RIGHT — FOCUS CARD */}
          <div className="order-1 lg:order-2 lg:col-span-7 relative flex items-center min-h-[420px] overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="
                  absolute inset-0 w-full p-10 md:p-16 rounded-biz
                  overflow-hidden translate-z-0 will-change-[opacity]
                "
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(0,0,0,0.88), rgba(0,0,0,0.66)),
                    url(${serviceImages[active]})
                  `,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Decorative Icon */}
                <div className="absolute -bottom-10 -right-10 opacity-[0.06] rotate-12 text-biz-cream-light pointer-events-none">
                  {React.createElement(services[active].icon, { size: 240 })}
                </div>

                <div className="relative z-10">
                  <div className="mb-12">
                    <div className="p-4 bg-white/15 rounded-2xl inline-block text-biz-cream-light">
                      {React.createElement(services[active].icon, { size: 28 })}
                    </div>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-light tracking-tight mb-6 text-biz-cream-light">
                    {services[active].title}
                  </h3>

                  <p className="text-lg md:text-xl leading-relaxed font-light text-biz-cream/90 max-w-md">
                    {services[active].desc}
                  </p>
                </div>

                {/* Auto Progress */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
                  {isAuto && (
                    <motion.div
                      key={`bar-${active}`}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5, ease: "linear" }}
                      className="h-full bg-biz-bronze"
                    />
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* LEFT — NAVIGATION */}
          <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col justify-center">
            <div className="space-y-1">
              {services.map((service, i) => {
                const isActive = active === i;

                return (
                  <button
                    key={service.id}
                    onMouseEnter={() => {
                      setActive(i);
                      setIsAuto(false);
                    }}
                    onMouseLeave={() => setIsAuto(true)}
                    onClick={() => setActive(i)}
                    className={`
                      group relative flex items-center gap-4 w-full text-left
                      py-3 px-4 rounded-xl
                      transition-[background-color,opacity]
                      duration-300 ease-out
                      will-change-[opacity,background-color]
                      ${
                        isActive
                          ? "bg-biz-bronze-pale/20 opacity-100"
                          : "opacity-50 hover:opacity-100"
                      }
                    `}
                  >
                    <span
                      className={`
                        text-[12px] font-bold font-mono 
                        transition-colors duration-300
                        ${
                          isActive
                            ? "text-biz-bronze"
                            : "text-biz-charcoal"
                        }
                      `}
                    >
                      {service.id}
                    </span>

                    <span
                      className={`
                        text-sm md:text-base font-medium tracking-tight
                        transition-colors duration-300
                        ${
                          isActive
                            ? "text-biz-charcoal-ink"
                            : "text-biz-charcoal-soft"
                        }
                      `}
                    >
                      {service.title}
                    </span>

                    <span className="ml-auto relative w-2 h-2">
                      {isActive && (
                        <motion.span
                          layoutId="service-dot"
                          className="absolute inset-0 rounded-full bg-biz-bronze"
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        />
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Services;

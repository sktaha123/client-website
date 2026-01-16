import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Minus } from "lucide-react";



const ExpertiseSection = ({ services }) => {
  return (
    <section
      aria-label="BiznorX Software Development, SaaS Platforms and Digital Capabilities"
      className="bg-biz-cream py-20 lg:py-32 overflow-visible"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Editorial Header */}
        <div className="max-w-4xl text-center flex flex-col justify-center items-center mx-auto mb-20 lg:mb-40 lg:mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="professional-label text-biz-bronze md:text-lg mb-6 block">
              Our Services
            </span>

            <h2 className="font-alix text-5xl md:text-8xl font-bold text-biz-charcoal-ink leading-tight tracking-tighter">
              Precision{" "}
              <span className="text-biz-charcoal-soft font-light italic">
                Logic.
              </span>
            </h2>

            {/* SEO SUPPORT TEXT (Visible & Editorial) */}
            <p className="mt-6 text-biz-charcoal-muted text-lg max-w-3xl leading-relaxed">
              <span className="text-biz-charcoal-ink lg:text-xl font-bold">biznor</span><span className="text-biz-bronze/80 lg:text-xl font-bold">X</span> delivers enterprise-grade software development, SaaS
              platform engineering, modern website development, and intelligent
              automation solutions built to support scalable growth, operational
              efficiency, and long-term digital performance.
            </p>
          </motion.div>
        </div>

        {/* The Stacking Container */}
        <div className="relative flex flex-col gap-0 lg:gap-32">
          {services.map((service, idx) => (
            <ExpertiseBlock
              key={idx}
              service={service}
              index={idx}
              total={services.length}
            />
          ))}
        </div>

        {/* SEO CONTENT BLOCK (Low Visual Impact, High SEO Value) */}
        <div className="mt-20 lg:mt-40 max-w-5xl mx-auto px-6">
          <h3 className="sr-only">
            Custom Software Development and SaaS Solutions by BiznorX
          </h3>

          <p className="text-biz-charcoal-soft text-center text-base md:text-2xl leading-relaxed mb-6">
             <span className="text-biz-charcoal-ink lg:text-3xl font-bold">biznor</span><span className="text-biz-bronze/80 lg:text-3xl font-bold">X</span> is a technology-driven software services company specializing
            in custom software development, scalable SaaS platform solutions,
            high-performance website development, and intelligent business
            automation. We work with startups, growing companies, and enterprises
            to design systems that adapt to evolving business requirements.
          </p>

          <p className="text-biz-charcoal-soft text-center text-base md:text-2xl leading-relaxed">
            Our expertise spans secure backend architecture, API-driven systems,
            cloud-ready SaaS products, and user-focused digital platforms—built
            to deliver reliability, performance, and measurable business impact
            over time.
          </p>
        </div>
      </div>
    </section>
  );
};

const ExpertiseBlock = ({ service, index, total }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const yContent = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <motion.div
      ref={container}
      className="sticky top-10 lg:relative lg:top-0 w-full mb-10 lg:mb-0"
      style={{ zIndex: index + 1 }}
    >
      <div
        className={`relative flex flex-col lg:flex-row items-center h-[85vh] lg:h-[80vh] w-full bg-white lg:bg-transparent rounded-[3rem] lg:rounded-none  shadow-biz-charcoal-ink/5 lg:shadow-none overflow-hidden lg:overflow-visible ${
          index % 2 !== 0 ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Visual Canvas */}
        <div className="w-full lg:w-[60%] h-[45vh] lg:h-full relative overflow-hidden lg:rounded-[3rem] bg-biz-cream-dark">
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-full object-cover grayscale-[0.3] brightness-[0.8] lg:brightness-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-biz-charcoal/40 to-transparent lg:hidden" />

          <span className="absolute top-6 right-8 text-white/20 font-alix text-6xl font-bold lg:hidden">
            0{index + 1}
          </span>
        </div>

        {/* Content Layer */}
        <motion.div
          style={{
            y:
              typeof window !== "undefined" && window.innerWidth >= 1024
                ? yContent
                : 0,
          }}
          className={`w-full lg:w-[44%] lg:h-auto z-20 p-8 lg:p-14 lg:absolute lg:top-1/2 lg:-translate-y-1/2 ${
            index % 2 === 0 ? "lg:right-0" : "lg:left-0"
          } bg-white lg:rounded-[2.5rem] `}
        >
          <h3 className="font-alix text-3xl lg:text-4xl font-bold text-biz-charcoal-ink mb-4 lg:mb-6 tracking-tight">
            {service.title}
          </h3>

          <p className="text-biz-bronze text-base lg:text-lg font-light leading-relaxed mb-8">
            {service.desc}
          </p>

          <div className="space-y-3 lg:space-y-4 mb-10">
            {service.items.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b border-biz-sand pb-2 lg:pb-3 group"
              >
                <span className="text-[10px] lg:text-xs font-bold uppercase tracking-wider text-biz-charcoal-soft group-hover:text-biz-bronze transition-colors">
                  {item}
                </span>
                <Minus
                  size={12}
                  className="text-biz-sand group-hover:text-biz-bronze transition-all"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ExpertiseSection;

import { useState } from "react";
import BlurReveal from "../common/BlurReveal";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const appleEase = [0.16, 1, 0.3, 1];

const services = [
  {
    title: "Website & App Development",
    desc: "Bespoke, high-performance digital products engineered for speed, scalability, and seamless user experiences.",
    img: "/digital/service-web.webp",
    tag: "Engineering",
  },
  {
    title: "Social Media Strategy",
    desc: "Data-driven storytelling and community management that turns passive scrollers into active brand advocates.",
    img: "/digital/service-social.webp",
    tag: "Growth",
  },
  {
    title: "SEO & Search Dominance",
    desc: "Technical SEO and content ecosystems designed to capture high-intent traffic and dominate the first page of Google.",
    img: "/digital/service-seo.webp",
    tag: "Visibility",
  },
  {
    title: "Digital Growth Ecosystems",
    desc: "A unified, full-funnel strategy linking your website, content, and paid channels for compounding revenue growth.",
    img: "/digital/service-growth.webp",
    tag: "Strategy",
  },
];

// Staggered container
const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: appleEase } },
};

const ServicesSection = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-biz-cream py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        {/* Header */}
        <BlurReveal className="flex flex-col md:flex-row justify-between items-end mb-14 md:mb-16 gap-6 border-b border-black/8 pb-10">
          <div className="max-w-xl">
           
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-biz-charcoal-ink tracking-tight leading-[1.05]">
              Our Capabilities
            </h2>
          </div>
         
        </BlurReveal>

        {/* Desktop Grid */}
        <motion.div
          className="hidden md:grid grid-cols-2 gap-8 lg:gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              className="group flex flex-col"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="w-full aspect-video rounded-[2rem] overflow-hidden mb-6 bg-biz-sand relative">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
              </div>
              <h3 className="text-[22px] md:text-[24px] font-medium text-biz-charcoal-ink mb-3 tracking-tight">
                {s.title}
              </h3>
              <p className="text-[15px] md:text-[16px] text-biz-charcoal-soft leading-[1.8] font-light">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: Horizontal Swipe Gallery */}
        <div className="md:hidden -mx-6 px-6">
          <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar">
            {services.map((s, i) => (
              <div
                key={i}
                className="snap-start shrink-0 w-[80vw] flex flex-col"
              >
                <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-5 bg-biz-sand relative">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-[0.2em] bg-white/90 text-biz-bronze px-3 py-1.5 rounded-full">
                    {s.tag}
                  </span>
                </div>
                <h3 className="text-[20px] font-medium text-biz-charcoal-ink mb-2 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-[15px] text-biz-charcoal-soft leading-[1.8] font-light">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile CTA */}
        <button
          onClick={() => navigate("/contact")}
          className="mt-10 md:hidden w-full inline-flex items-center justify-center gap-2 text-[14px] font-medium border border-biz-charcoal-ink text-biz-charcoal-ink px-6 py-4 rounded-full hover:bg-biz-charcoal-ink hover:text-white transition-colors"
        >
          Discuss a project <ArrowUpRight size={16} />
        </button>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `.hide-scrollbar::-webkit-scrollbar{display:none}.hide-scrollbar{-ms-overflow-style:none;scrollbar-width:none}` }} />
    </section>
  );
};

export default ServicesSection;
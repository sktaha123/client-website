import React, { useState } from 'react';
import ExpertiseSection from '@/components/software/ExpertiseSection';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Rocket, Monitor, Layers, Palette, BarChart,
  ArrowRight, ArrowUpRight, Plus, Minus, Check, ShieldCheck,
  Zap, Globe, Cpu
} from 'lucide-react';

const services = [
  {
    title: "Software Development",
    icon: <Cpu />,
    img: "/cardsimages/softsoft.webp",
    desc: "We deliver secure, scalable, and high-performance software development services tailored to complex business requirements, operational workflows, and long-term growth.",
    items: [
      "Custom enterprise software solutions",
      "Business process automation systems",
      "API development & system integrations",
      "Application performance optimization"
    ]
  },
  {
    title: "Website Development",
    icon: <Globe />,
    img: "/cardsimages/softweb.webp",
    desc: "We design and develop fast, responsive, and SEO-friendly websites that strengthen digital presence, improve user experience, and drive measurable conversions.",
    items: [
      "Corporate & business website development",
      "Landing pages & professional portfolios",
      "High-performance, mobile-first builds",
      "SEO-optimized website structure"
    ]
  },
  {
    title: "SaaS Platform Development",
    icon: <Layers />,
    img: "/cardsimages/softsaas.webp",
    desc: "We help businesses plan, build, and scale SaaS platforms with clean architecture, intuitive user flows, and cloud-ready infrastructure designed for growth.",
    items: [
      "SaaS MVP & product development",
      "Custom dashboards & admin panels",
      "Subscription & user management systems",
      "Cloud-native, scalable infrastructure"
    ]
  },
  {
    title: "Creative Content & Design",
    icon: <Palette />,
    img: "/cardsimages/softcontent.webp",
    desc: "We create strategic visual design and creative content that strengthens brand identity, builds trust, and communicates clarity across digital platforms.",
    items: [
      "UI/UX design systems & user flows",
      "Brand identity & visual design",
      "Marketing & promotional creatives",
      "Product and web interface design"
    ]
  },
  {
    title: "Digital Marketing",
    icon: <BarChart />,
    img: "/cardsimages/softmarket.webp",
    desc: "We deliver data-driven digital marketing services that increase visibility, attract the right audience, and convert engagement into sustainable business growth.",
    items: [
      "SEO & content marketing strategy",
      "Paid advertising (PPC & social media)",
      "Brand positioning & messaging",
      "Performance-focused growth campaigns"
    ]
  }
];


const faqs = [
  {
    q: "Do you work with startups as well as established businesses?",
    a: "Yes. We work with startups, growing companies, and established enterprises. For startups, we focus on rapid MVP development and speed-to-market. For established businesses, we prioritize scalability, security, performance optimization, and complex system integrations."
  },
  {
    q: "Can you build custom software from scratch?",
    a: "Absolutely. We specialize in custom software development built entirely from the ground up. Every solution is designed around your unique business logic, workflows, and long-term growth goals—never using one-size-fits-all templates."
  },
  {
    q: "Do you provide ongoing support after project completion?",
    a: "Yes. We offer ongoing maintenance and support services, including security updates, performance monitoring, feature enhancements, and system optimization to ensure your product continues to perform reliably after launch."
  },
  {
    q: "How long does a typical software or website project take?",
    a: "Timelines vary depending on scope and complexity. A standard website project typically takes 4–8 weeks, while custom software or SaaS platform development may take 3–6 months. We provide a clear roadmap with milestones before development begins."
  },
  {
    q: "Who owns the source code once the project is completed?",
    a: "You retain full ownership of the source code and intellectual property once the project is completed and final payment is made. We believe your software should remain fully under your control."
  },
  {
    q: "How do you ensure project security and data privacy?",
    a: "Security and data privacy are integrated into every stage of our process. We follow industry best practices such as secure authentication, encryption-at-rest, secure APIs, and regular security audits to protect your data and systems."
  }
];

const Software = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <div className="bg-biz-cream font-dm text-biz-charcoal selection:bg-biz-bronze selection:text-white">

      {/* --- HERO SECTION --- */}
      <section className="relative pt-17 pb-20 lg:pt-7 lg:pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="professional-label mb-6 block tracking-widest md:text-[13px] text-biz-bronze">
              Software That Moves Businesses Forward

            </span>
            <h1 className="font-alix text-5xl md:text-7xl lg:text-8xl font-bold md:leading-23 mb-8">
              Where Strategy Meets <span className="text-biz-bronze">Execution.</span>
            </h1>
            <p className="text-biz-charcoal-muted text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
              From custom software to SaaS platforms and high-performance websites, we build digital systems that help businesses operate smarter, scale faster, and stay competitive in a changing market.            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group relative cursor-pointer inline-flex items-center gap-4 overflow-hidden rounded-biz bg-biz-charcoal-ink px-12 py-6 font-bold text-biz-cream-light transition-colors duration-300 hover:bg-biz-bronze shadow-xl shadow-biz-charcoal-ink/25 mx-auto"
            >
              <span className="relative z-10 tracking-widest uppercase text-sm">
                Talk to Our Team  </span>

              {/* Arrow Container */}
              <div className="relative z-10 flex h-7 w-7   aspect-square shrink-0 items-center justify-center rounded-full bg-biz-cream-light/20 transition-transform duration-500 transform group-hover:translate-x-1 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </div>

              {/* Light Sweep */}
              <motion.div
                initial={{ x: "-105%" }}
                whileHover={{ x: "105%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-biz-cream-light/10 to-transparent"
              />
            </motion.button>


          </motion.div>
        </div>
      </section>

      {/* --- EXPERTISE SECTION (NEW LAYOUT) --- */}
      <ExpertiseSection services={services} />


      {/* --- FAQ SECTION WITH ANIMATION --- */}
      <section className="py-32 bg-biz-cream">
        <div className=" max-w-[99vw] md:max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="professional-label mb-4 block">Clear Answers</span>
            <h2 className="font-alix text-4xl md:text-5xl font-bold">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`  transition-all duration-300 ${activeFaq === i ? 'border-biz-bronze ' : 'border-biz-sand bg-transparent'}`}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-8 py-7 flex justify-between items-center text-left"
                >
                  <span className="font-bold text-xl pr-6">{faq.q}</span>
                  <div className={`p-2 rounded-full transition-transform duration-300 ${activeFaq === i ? 'bg-biz-bronze text-white rotate-45' : 'bg-biz-sand text-biz-charcoal'}`}>
                    <Plus size={20} />
                  </div>
                </button>

                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 text-biz-bronze leading-relaxed text-lg border-t border-biz-sand/50 pt-6">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto bg-biz-charcoal-ink rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-alix text-4xl md:text-6xl font-bold text-white mb-8">
              Ready to Build Something <span className="text-biz-bronze">Powerful?</span>
            </h2>
            <p className="text-biz-sand-muted text-lg mb-12 max-w-2xl mx-auto">
              Partner with <span className="text-biz-bronze-pale lg:text-xl font-bold">biznor</span><span className="text-biz-bronze/80 lg:text-xl font-bold">X</span> and turn your digital vision into a scalable, high-impact solution that grows with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full bg-biz-bronze px-12 py-6 font-bold text-lg text-biz-cream-light transition-all hover:bg-biz-bronze-dark shadow-xl shadow-biz-bronze/30"
              >
                <span className="relative z-10 tracking-widest uppercase text-sm">
                  Start Your Project
                </span>

                <div className="relative z-10   aspect-square shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-biz-cream-light/20 transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </div>

                <motion.div
                  initial={{ x: "-105%" }}
                  whileHover={{ x: "105%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-biz-cream-light/10 to-transparent pointer-events-none"
                />
              </motion.button>


            </div>
          </div>
          {/* Decorative Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-biz-bronze/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-biz-bronze/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />
        </div>
      </section>

    </div>
  );
};

export default Software;
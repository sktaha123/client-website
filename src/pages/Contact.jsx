import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Linkedin, Instagram, Facebook } from "lucide-react";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";

const CONTACT_METHODS = [
  { Icon: FaWhatsapp, label: "India Office", value: "+91 9004072449",  href: "https://wa.me/919004072449",  color: "hover:text-green-600" },
  { Icon: FaWhatsapp, label: "UAE Office",   value: "+971 522585437", href: "https://wa.me/971522585437",  color: "hover:text-green-600" },
  { Icon: Mail,       label: "Email",        value: "business@biznorx.com", href: "mailto:business@biznorx.com", color: "hover:text-biz-bronze" },
];

const SOCIAL_LINKS = [
  { Icon: Instagram,  href: "https://www.instagram.com/biznorx", label: "Instagram" },
  { Icon: FaXTwitter, href: "#",                                  label: "Twitter" },
  { Icon: Linkedin,   href: "https://www.linkedin.com/company/biznorx/", label: "LinkedIn" },
  { Icon: Facebook,   href: "#",                                  label: "Facebook" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
};

export function Contact() {
  return (
    <div className="bg-biz-cream font-dm min-h-screen">

      {/* ── Header ───────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 pt-16 pb-12 md:pt-10 md:pb-16">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[11px] font-semibold uppercase tracking-[0.25em] text-biz-bronze mb-4"
        >
          Contact
        </motion.p>
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[52px] md:text-[80px] font-light text-biz-charcoal-ink leading-[1.0] tracking-[-0.03em]"
        >
          biznor<span className="text-biz-bronze">X</span>
        </motion.h1>
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 text-[16px] text-biz-charcoal-soft leading-[1.75] max-w-[440px]"
        >
          Enterprise-grade workforce solutions built on 60+ years of legacy. Serving global organisations with discipline and precision.
        </motion.p>
      </div>

      {/* ── Main Grid ────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 pb-24 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 border-t border-biz-charcoal/8 pt-12">

          {/* Left: Contact methods */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-biz-charcoal/30 mb-8">
              Reach Us
            </p>
            <div className="space-y-10">
              {CONTACT_METHODS.map((method, i) => {
                const Icon = method.Icon;
                return (
                  <motion.a
                    key={i}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-biz-charcoal/30 mb-2 group-hover:text-biz-bronze transition-colors">
                      {method.label}
                    </p>
                    <div className="flex items-center gap-4">
                      <Icon size={18} className={`text-biz-charcoal/20 transition-all duration-300 ${method.color}`} />
                      <span className={`text-[22px] md:text-[28px] font-light text-biz-charcoal-ink tracking-tight transition-all duration-300 ${method.color.replace("hover:", "group-hover:")}`}>
                        {method.value}
                      </span>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Right: Locations + Social */}
          <div className="flex flex-col gap-14">

            {/* Locations */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-biz-charcoal/30 mb-8">
                Our Offices
              </p>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { title: "India Office", city: "Mumbai, Maharashtra" },
                  { title: "UAE Office",   city: "Dubai, UAE" },
                ].map((loc, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <MapPin size={16} className="text-biz-bronze mt-1 shrink-0 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-biz-charcoal/30 mb-1">{loc.title}</p>
                      <p className="text-[15px] font-medium text-biz-charcoal">{loc.city}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social */}
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-biz-charcoal/30 mb-6">
                Follow Us
              </p>
              <div className="flex gap-5">
                {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="w-10 h-10 rounded-full border border-biz-charcoal/10 flex items-center justify-center text-biz-charcoal/40 hover:text-biz-bronze hover:border-biz-bronze/30 transition-colors duration-200"
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
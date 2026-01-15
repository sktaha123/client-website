import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Linkedin, Instagram, Facebook } from "lucide-react";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";

const SOCIAL_LINKS = [
  { icon: Instagram, href: "https://www.instagram.com/biznorx?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
  { icon: FaXTwitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

const CONTACT_METHODS = [
  {
    icon: FaWhatsapp,
    label: "India Office",
    value: "+91 9004378003",
    href: "https://wa.me/919004378003",
    accent: "group-hover:text-green-600"
  },
  {
    icon: FaWhatsapp,
    label: "UAE Office",
    value: "+971 506012581",
    href: "https://wa.me/971506012581",
    accent: "group-hover:text-green-600"
  },
  {
    icon: Mail,
    label: "General Inquiry",
    value: "hello@biznorx.com",
    href: "mailto:hello@biznorx.com",
    accent: "group-hover:text-biz-bronze"
  },
];

const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  },
};

const LocationItem = React.memo(({ title, city }) => (
  <motion.div
    variants={ITEM_VARIANTS}
    className="flex items-start gap-4 group/loc cursor-default"
  >
    <div className="mt-1 text-biz-bronze transition-transform duration-500 group-hover/loc:-translate-y-1 group-hover/loc:scale-110">
      <MapPin className="h-4 w-4" />
    </div>
    <div className="flex flex-col">
      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-biz-bronze/60 mb-1">
        {title}
      </span>
      <p className="text-base text-biz-charcoal font-medium group-hover/loc:text-biz-bronze transition-colors">
        {city}
      </p>
    </div>
  </motion.div>
));

export function Contact() {
  return (
    <section id="contact" className="bg-biz-cream pt-8 pb-24 font-dm overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-12"
        variants={CONTAINER_VARIANTS}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid lg:grid-cols-12 gap-20 items-start">

          {/* LEFT: BRANDING & NARRATIVE */}
          <motion.div variants={ITEM_VARIANTS} className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, letterSpacing: "0.2em" }}
                whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
                transition={{ duration: 1.5 }}
                className="text-biz-bronze text-[12px] font-bold uppercase"
              >
                Contact
              </motion.h2>
              <h3 className="text-6xl lg:text-7xl text-biz-charcoal tracking-tighter font-bold  leading-[0.85] overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.8, ease: "circOut" }}
                  className="inline-block"
                >
                  biznor<span className="text-biz-bronze/80">X</span>
                </motion.span>
              </h3>
            </div>

            <p className="text-biz-charcoal/60 text-xl leading-relaxed font-light max-w-md">
              Enterprise-grade workforce solutions built on 60+ years of legacy. Serving global organizations with discipline and precision.
            </p>

            <div className="pt-6 space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-biz-charcoal/30">
                Network
              </p>
              <div className="flex gap-6">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        y: -2,
                        scale: 1.2,
                        rotate: 2
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 400, damping: 40 }}
                      className="text-biz-charcoal/40 hover:text-biz-bronze transition-colors duration-300"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: DIRECT COMMUNICATION */}
          <motion.div variants={ITEM_VARIANTS} className="lg:col-span-7">
            <div className="space-y-16">
              {/* Communication Links */}
              <div className="space-y-12">
                {CONTACT_METHODS.map((method) => {
                  const Icon = method.icon;
                  return (
                    <motion.a
                      key={method.label}
                      href={method.href}
                      className="group block transform-gpu origin-left"
                      whileHover={{ x: 20 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <p className="text-[10px] text-biz-bronze font-bold uppercase tracking-[0.4em] mb-3 opacity-50 group-hover:opacity-100 transition-opacity">
                        {method.label}
                      </p>
                      <div className="flex items-center gap-6">
                        <Icon className={`h-6 w-6 text-biz-charcoal/20 transition-all duration-500 ${method.accent} group-hover:scale-125 group-hover:rotate-[15deg]`} />
                        <span className="text-3xl md:text-5xl text-biz-charcoal font-bold tracking-tighter transition-all duration-300 group-hover:text-biz-charcoal-ink group-hover:tracking-normal">
                          {method.value}
                        </span>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Physical Footprint */}
              <div className="pt-8 border-t border-biz-charcoal/5">
                <div className="grid md:grid-cols-2 gap-12">
                  <LocationItem title="India Office" city="Mumbai, MH" />
                  <LocationItem title="UAE Office" city="Dubai, UAE" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
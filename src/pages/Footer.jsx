import React from "react";
import { motion } from "framer-motion";

const LEGAL_LINKS = ["Privacy", "Terms", "Cookies"];

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }
  },
};

export  function Footer() {
  return (
    <footer className="bg-biz-cream border-t border-biz-stone/30 pb-12 font-dm">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={ITEM_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-biz-bronze"
        >
          <p>© 2026 BiznorX — All Rights Reserved.</p>
          
          <div className="flex gap-8">
            {LEGAL_LINKS.map((link) => (
              <motion.a
                key={link}
                href="#"
                whileHover={{ color: "#2D2D2D" }}
                className="transition-colors duration-200 cursor-pointer"
              >
                {link}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
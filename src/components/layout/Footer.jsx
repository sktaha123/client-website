import React from "react";
import { motion } from "framer-motion";

/* Animation Variants */
const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const LEGAL_LINKS = ["Privacy", "Terms", "Cookies"];

export function Footer() {
  return (
    <footer className="bg-biz-cream pt-8 pb-12 font-dm overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-6"
        variants={CONTAINER_VARIANTS}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Bottom Legal Bar */}
        <motion.div
          variants={ITEM_VARIANTS}
          className="pt-30 border-t border-[#8B7E6A]/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] md:text-[11px] font-bold uppercase tracking-widest text-[#8B7E6A]"
        >
          <p>© 2026 BiznorX. All rights reserved.</p>

          
        </motion.div>
      </motion.div>
    </footer>
  );
}

import { motion } from "framer-motion";

const GlowText = ({
  text,
  className = "",
  glowColor = "var(--color-biz-bronze-light)"
}) => {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      style={{
        fontFamily: "var(--font-alix)",
        backgroundImage: `linear-gradient(120deg, var(--color-biz-charcoal), ${glowColor}, var(--color-biz-charcoal))`,
        backgroundSize: "200% 200%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {text}

      {/* Soft glow */}
      <span
        aria-hidden
        className="absolute inset-0 blur-xl opacity-25"
        style={{
          backgroundImage: `linear-gradient(120deg, ${glowColor}, transparent)`,
          WebkitBackgroundClip: "text"
        }}
      />
    </motion.span>
  );
};

export default GlowText;

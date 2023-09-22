"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  bg?: string;
  modifier?: string;
  padding?: string;
  borderRadius?: string;
  hover?: string;
}

export function ButtonText({
  text,
  onClick,
  bg,
  modifier = "primary",
  padding,
  borderRadius = "60px",
  hover,
}: ButtonProps) {
  return (
    <motion.button
      className={`button button--${modifier}`}
      onClick={onClick}
      whileHover={hover && { scale: 1.05 }}
      transition={{
        duration: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 6,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
      style={{
        background: bg,
        padding: padding || ".8rem 2rem",
        borderRadius: borderRadius || "1rem",
      }}
    >
      {text}
    </motion.button>
  );
}

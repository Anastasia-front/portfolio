"use client";

import React from "react";

import { motion } from "framer-motion";

interface Props {
  onClick?: () => void;
  children: React.ReactNode;
  as?: "button" | "div";
  className?: string;
  ariaLabel: string;
}

const commonMotionProps = {
  whileHover: { scale: 1.05 },
  transition: {
    duration: 0.01,
    ease: [0, 0.71, 0.2, 1.01],
    scale: {
      type: "spring",
      damping: 6,
      stiffness: 100,
      restDelta: 0.001,
    },
  },
};

export function ButtonWrapper({
  onClick,
  children,
  as: Component = "button",
  className = "button",
  ariaLabel,
}: Props) {
  const commonProps = {
    onClick,
    className,
  };

  if (Component === "button") {
    return (
      <motion.button
        aria-label={ariaLabel}
        {...commonProps}
        {...commonMotionProps}
      >
        {children}
      </motion.button>
    );
  } else {
    return (
      <motion.div
        aria-label={ariaLabel}
        {...commonProps}
        {...commonMotionProps}
      >
        {children}
      </motion.div>
    );
  }
}

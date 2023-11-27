"use client";

import React from "react";

import { motion } from "framer-motion";

interface Props {
  onClick?: () => void;
  children: React.ReactNode;
}

export function ButtonWrapper({ onClick, children }: Props) {
  return (
    <motion.button
      className="button"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      transition={{
        duration: 0.01,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 6,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    >
      {children}
    </motion.button>
  );
}

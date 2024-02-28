"use client";

import { motion } from "framer-motion";

import { buttonMotionProps } from "@/utils";

interface Props {
  text: string;
  ariaLabel: string;
  onClick?: () => void;
}

export function ButtonText({ ariaLabel, text, onClick }: Props) {
  return (
    <motion.button
      aria-label={ariaLabel}
      onClick={onClick}
      className="button"
      {...buttonMotionProps}
    >
      {text}
    </motion.button>
  );
}

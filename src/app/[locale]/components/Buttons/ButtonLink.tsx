"use client";

import { motion } from "framer-motion";

import { buttonMotionProps } from "@/utils";

interface Props {
  text: string;
  href: string;
}

export function ButtonLink({ text, href }: Props) {
  return (
    <motion.a
      aria-label={text}
      href={href}
      {...buttonMotionProps}
      className="button"
    >
      {text}
    </motion.a>
  );
}

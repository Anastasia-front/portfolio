"use client";

import { motion } from "framer-motion";

import { buttonMotionProps } from "@/utils";

interface Props {
  text: string;
  href: string;
}

export function ButtonScroll({ text, href }: Props) {
  const handleClick = () => {
    const targetElement = document.getElementById(href);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.button
      aria-label={text}
      onClick={handleClick}
      {...buttonMotionProps}
      className="button"
    >
      {text}
    </motion.button>
  );
}

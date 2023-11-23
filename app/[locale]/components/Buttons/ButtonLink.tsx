"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  text: string;
  href: string;
  lang: "en" | "uk";
  onClick?: () => void;
  hover?: string;
}

export function ButtonLink({ text, href, lang, onClick, hover }: Props) {
  return (
    <motion.button
      className="button"
      onClick={onClick}
      whileHover={hover && { scale: 1.05 }}
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
      <Link href={href} locale={lang}>
        {text}
      </Link>
    </motion.button>
  );
}

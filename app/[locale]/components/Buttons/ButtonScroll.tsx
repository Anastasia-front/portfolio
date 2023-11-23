"use client";

import { motion } from "framer-motion";
import { Link } from "react-scroll";

interface Props {
  text: string;
  href: string;
  hover?: string;
}

export function ButtonScroll({ text, href, hover }: Props) {
  return (
    <motion.div
      className="button"
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
      <Link
        to={href}
        spy={true}
        smooth={true}
        duration={300}
        className="button-link"
      >
        {text}
      </Link>
    </motion.div>
  );
}

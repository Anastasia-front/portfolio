"use client";

import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import { buttonMotionProps } from "@/utils";

interface Props {
  text: string;
  href: string;
}

export function ButtonLink({ text, href }: Props) {
  const pathname = usePathname();
  const lang = pathname.slice(0, 3);

  return (
    <motion.a
      aria-label={text}
      href={`${lang}${href}`}
      {...buttonMotionProps}
      className="button"
    >
      {text}
    </motion.a>
  );
}

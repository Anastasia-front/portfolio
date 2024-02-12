"use client";

import { motion } from "framer-motion";

import { titleVariants } from "@/utils";

interface Props {
  number: string;
  title: string;
  description: string;
}

export function AboutItem({ number, title, description }: Props) {
  return (
    <motion.li
      className="about-item"
      variants={titleVariants("first")}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="about-item__title">
        <span className="about-item__number">{number}</span>
        <h2 className="about-item__text">{title}</h2>
      </div>
      <p className="about-item__description">{description}</p>
    </motion.li>
  );
}

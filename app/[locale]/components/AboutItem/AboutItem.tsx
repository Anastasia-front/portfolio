"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

interface Props {
  number: string;
  title: string;
  description: string;
}

export function AboutItem({ number, title, description }: Props) {
  const listItem = React.useRef(null);

  const scrollYProgress: any = useScroll({
    target: listItem,
    offset: ["start end", "end start"],
  }).scrollYProgress;

  const y = useTransform(scrollYProgress, [0, 0.5], [500, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.li
      ref={listItem}
      className="about-item"
      style={{
        y,
        scale,
        opacity,
      }}
    >
      <div className="about-item__title">
        <span className="about-item__number">{number}</span>
        <span className="about-item__text">{title}</span>
      </div>
      <p className="about-item__description">{description}</p>
    </motion.li>
  );
}

"use client";

import { Tilt } from "react-tilt";

import Image, { StaticImageData } from "next/image";

import { motion } from "framer-motion";

import { fadeIn } from "@/utils";

interface Props {
  title: string;
  image: StaticImageData;
}

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1.1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

export function SkillItem({ title, image }: Props) {
  return (
    <Tilt options={defaultOptions} style={{ height: 150, width: 150 }}>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="skills-item"
      >
        <Image src={image} alt={title} width={200} height={150} />
      </motion.div>
    </Tilt>
  );
}

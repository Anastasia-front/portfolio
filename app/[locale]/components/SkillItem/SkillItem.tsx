"use client";

import { Tilt } from "react-tilt";

import Image, { StaticImageData } from "next/image";

import { motion } from "framer-motion";

import { fadeIn } from "@/utils";

interface Props {
  title: string;
  image: StaticImageData;
  animation: "left" | "right";
  isBig?: boolean;
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

export function SkillItem({ title, image, animation, isBig }: Props) {
  return (
    <motion.div variants={fadeIn(animation)} initial="hidden" animate="visible">
      <Tilt
        options={defaultOptions}
        className="skills-item"
        style={{ height: 150, width: 150 }}
      >
        <Image
          className={`${isBig ? "isBig" : ""}`}
          src={image}
          alt={title}
          width={200}
          height={150}
        />
      </Tilt>
    </motion.div>
  );
}

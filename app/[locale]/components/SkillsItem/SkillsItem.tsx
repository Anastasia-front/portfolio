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
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

export function SkillsItem({ title, image }: Props) {
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

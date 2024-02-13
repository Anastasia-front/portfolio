"use client";

import { useState } from "react";

import Image from "next/image";

import { motion } from "framer-motion";

import { Project } from "@/constants";
import { gridItemVariants, hoverVariants } from "@/utils";

export function ProjectItem({ name, image, categories, onClick }: Project) {
  const [isHover, setIsHover] = useState(false);

  const handleHoverStart = () => {
    setIsHover(true);
  };

  const handleHoverEnd = () => {
    setIsHover(false);
  };

  return (
    <motion.li
      className="project project-banner"
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onClick={onClick}
      variants={gridItemVariants}
    >
      <Image loading="lazy" src={image} alt={name} width={300} height={100} />
      <div className="hover">
        <motion.div
          className="hover__categories"
          variants={hoverVariants("first")}
          initial="offscreen"
          whileInView={isHover ? "onscreen" : "offscreen"}
        >
          {categories?.map((category) => {
            if (category !== "") {
              return <span key={category}>{category}</span>;
            }
          })}
        </motion.div>
        <motion.p
          className="hover__title"
          variants={hoverVariants("second")}
          initial="offscreen"
          whileInView={isHover ? "onscreen" : "offscreen"}
        >
          {name}
        </motion.p>
      </div>
    </motion.li>
  );
}

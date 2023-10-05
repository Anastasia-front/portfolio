"use client";

import { useState } from "react";

import Image from "next/image";

import { motion } from "framer-motion";

import { Project } from "@/constants";
import { gridItemVariants, hoverVariants, hoverVariants2 } from "@/utils";

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
      <Image src={image} alt={name} width={300} height={100} />
      <div className="hover">
        <motion.div
          className="hover__categories"
          initial="hidden"
          variants={hoverVariants}
          animate={isHover ? "visible" : "hidden"}
        >
          {categories.map((category, index) => {
            if (category !== "") {
              return <span key={index}>{category}</span>;
            }
          })}
        </motion.div>
        <motion.p
          className="hover__title"
          initial="hidden"
          variants={hoverVariants2}
          animate={isHover ? "visible" : "hidden"}
        >
          {name}
        </motion.p>
      </div>
    </motion.li>
  );
}

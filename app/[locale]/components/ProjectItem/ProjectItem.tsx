"use client";

import { useState } from "react";

import Image from "next/image";

import { motion } from "framer-motion";

import { Project } from "@/constants";
import { gridItemVariants, hoverVariants, hoverVariants2 } from "@/utils";

export function ProjectItem({ title, image, categories, onClick }: Project) {
  const [isHover, setIsHover] = useState(false);

  const handleHoverStart = () => {
    setIsHover(true);
    console.log("hover");
  };

  const handleHoverEnd = () => {
    setIsHover(false);
    console.log("hover end");
  };

  return (
    <motion.div
      className="project"
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onClick={onClick}
      variants={gridItemVariants}
    >
      <Image src={image} alt={title} />
      <div className="hover">
        <motion.div
          className="hover__projects"
          initial="hidden"
          variants={hoverVariants}
          animate={isHover ? "visible" : "hidden"}
        >
          {categories.map((category) => {
            return <span key={category}>{category}</span>;
          })}
        </motion.div>
        <motion.p
          className="hover__title"
          initial="hidden"
          variants={hoverVariants2}
          animate={isHover ? "visible" : "hidden"}
        >
          {title}
        </motion.p>
      </div>
    </motion.div>
  );
}

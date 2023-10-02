"use client";

import React from "react";

import { useRouter } from "next/navigation";

import { motion } from "framer-motion";

import { ProjectItem } from "@/components";
import { projectsEnglishLang } from "@/constants";
import { gridVariants } from "@/utils";

export function Projects() {
  const router = useRouter();

  // memoize portfolio item to prevent re-render
  const MemoizedPortfolioItem = React.memo(ProjectItem);

  return (
    <motion.div
      className="projects"
      variants={gridVariants}
      initial="hidden"
      animate="visible"
    >
      {projectsEnglishLang.map((project) => {
        return (
          <MemoizedPortfolioItem
            key={project.id}
            name={project.name}
            image={project.image}
            url={project.url}
            categories={project.categories}
            onClick={() => {
              router.push(`/project/${project.url}`);
            }}
          />
        );
      })}
    </motion.div>
  );
}

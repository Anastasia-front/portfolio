"use client";

import React from "react";

import { useRouter } from "next/navigation";

import { motion } from "framer-motion";

import { ProjectItem } from "@/components";
import { Project } from "@/constants";
import { gridVariants } from "@/utils";

interface Props {
  projects: Project[];
}

export function Projects({ projects }: Props) {
  const router = useRouter();

  // memoize portfolio item to prevent re-render
  const MemoizedPortfolioItem = React.memo(ProjectItem);

  return (
    <motion.ul
      className="projects"
      variants={gridVariants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project: Project) => {
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
    </motion.ul>
  );
}

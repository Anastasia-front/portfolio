"use client";

import React from "react";

import { useRouter } from "next/navigation";

import { motion } from "framer-motion";

import { ProjectItem } from "@/components";
import { projects } from "@/constants";
import { gridVariants } from "@/utils";

export function Projects() {
  const router = useRouter();

  // memoize portfolio item to prevent re-render
  const MemoizedPortfolioItem = React.memo(ProjectItem);

  return (
    <motion.div
      className="portfolios"
      variants={gridVariants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project) => {
        return (
          <MemoizedPortfolioItem
            key={project.id}
            title={project.title}
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
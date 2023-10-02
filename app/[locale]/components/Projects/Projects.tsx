"use client";

import React from "react";

import { usePathname, useRouter } from "next/navigation";

import { motion } from "framer-motion";

import { ProjectItem } from "@/components";
import { projectsEnglishLang, projectsUkrainianLang } from "@/constants";
import { gridVariants } from "@/utils";

export function Projects() {
  const router = useRouter();

  const pathname = usePathname();
  const lang = pathname.slice(0, 3);
  const projectLang = (() => {
    if (lang === "/uk") {
      return projectsUkrainianLang;
    } else {
      return projectsEnglishLang;
    }
  })();

  // memoize portfolio item to prevent re-render
  const MemoizedPortfolioItem = React.memo(ProjectItem);

  return (
    <motion.div
      className="projects"
      variants={gridVariants}
      initial="hidden"
      animate="visible"
    >
      {projectLang.map((project) => {
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

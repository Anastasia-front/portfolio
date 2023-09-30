"use client";

import React from "react";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";

import { ProjectItem } from "@/components";
import { gridVariants } from "@/utils";

export function Projects() {
  const i = useTranslations("projects.items");

  const router = useRouter();

  // memoize portfolio item to prevent re-render
  const MemoizedPortfolioItem = React.memo(ProjectItem);

  const keys = [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
    "eighth",
    "ninth",
    "tenth",
    "eleventh",
    "twelfth",
  ] as const;

  return (
    <motion.div
      className="projects"
      variants={gridVariants}
      initial="hidden"
      animate="visible"
    >
      {keys.map((project, index) => {
        const url = i(`${project}.url`);
        const array: string[] = [];

        keys.map((categories) => {
          const category = i(`${project}.categories.${categories}`);
          array.push(category);
          return array;
        });

        return (
          <MemoizedPortfolioItem
            key={index}
            title={i(`${project}.name`)}
            image={i(`${project}.image`)}
            url={url}
            categories={array}
            onClick={() => {
              router.push(`/project/${url}`);
            }}
          />
        );
      })}
    </motion.div>
  );
}

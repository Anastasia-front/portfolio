"use client";

import { useState } from "react";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import { Banner, Dropdown, Projects } from "@/components";
import { projectsEnglishLang, projectsUkrainianLang } from "@/constants";
import { gridVariants } from "@/utils";

export default function ProjectsPage() {
  const t = useTranslations("projects");
  const b = useTranslations("banner");

  const pathname = usePathname();
  const lang = pathname.slice(0, 3);
  const projectLang = (() => {
    if (lang === "/uk") {
      return projectsUkrainianLang;
    } else {
      return projectsEnglishLang;
    }
  })();

  const [filteredProjects, setFilteredProjects] = useState(projectLang);

  const handleTypeChange = (type: string) => {
    const filteredProjects = projectLang.filter((project) => {
      return type === "all" || type === "всі" || project.development === type;
    });
    setFilteredProjects(filteredProjects);
  };

  const handleCategoryChange = (category: string, type: string) => {
    const filteredProjects = projectLang.filter((project) => {
      const typeMatch =
        type === "all" || type === "всі" || project.development === type;
      const categoryMatch = project.type === category;
      return typeMatch && categoryMatch;
    });

    setFilteredProjects(filteredProjects);
  };

  return (
    <main className="u-pad-2">
      <div className="projects__header">
        <div className="projects__headings">
          <motion.h1 variants={gridVariants} initial="hidden" animate="visible">
            {t("title")}
          </motion.h1>
          <motion.h6 variants={gridVariants} initial="hidden" animate="visible">
            {t("description")}
          </motion.h6>
        </div>
        <Dropdown
          handleCategoryChange={handleCategoryChange}
          handleTypeChange={handleTypeChange}
        />
      </div>

      <Projects projects={filteredProjects} />
      <Banner text={b("contact")} button />
    </main>
  );
}

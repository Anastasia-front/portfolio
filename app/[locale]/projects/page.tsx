"use client";

import { useTranslations } from "next-intl";

import { motion } from "framer-motion";
import { useState } from "react";

import { usePathname } from "next/navigation";

import { projectsEnglishLang, projectsUkrainianLang } from "@/constants";

import { Banner, Dropdown, Projects } from "@/components";

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

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");

  function filterProjects(projects, selectedCategory, selectedType) {
    if (selectedType) {
      return projects.filter((project) => {
        // Проверяем совпадение по полю development и selectedType
        if (selectedType === "all" || selectedType === "всі") {
          return projects;
        } else if (selectedType === "backend" || selectedType === "бекенд") {
          project.development === "backend";
        } else {
          project.type === selectedCategory;
        }
      });
    }
    return projects;
  }

  const filteredProjects = filterProjects(
    projectLang,
    selectedCategory,
    selectedType
  );

  console.log(filteredProjects);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    console.log(type);
  };

  return (
    <div className="u-pad-2">
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
    </div>
  );
}

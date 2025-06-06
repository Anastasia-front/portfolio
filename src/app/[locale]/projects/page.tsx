"use client";

import { useState } from "react";

import { useLocale, useTranslations } from "next-intl";
import dynamic from "next/dynamic";

import { motion } from "framer-motion";

import { type Locale } from "src/locales";

import {
  projectsEnglishLang,
  projectsNorwegianLang,
  projectsUkrainianLang,
} from "@/constants";
import { gridVariants } from "@/utils";

import "@/styles/partials/_project.scss";
import "@/styles/partials/_projects.scss";

const Banner = dynamic(() =>
  import("../components/Banner/Banner").then((mod) => mod.Banner)
);
const BeforeAfterSlider = dynamic(() =>
  import("../components/Sliders/BeforeAfterSlider").then(
    (mod) => mod.BeforeAfterSlider
  )
);
const Dropdown = dynamic(() =>
  import("../components/Filters/Filters").then((mod) => mod.Filters)
);
const LottiePlayer = dynamic(() =>
  import("../components/LottiePlayer/LottiePlayer").then(
    (mod) => mod.LottiePlayer
  )
);
const Projects = dynamic(() =>
  import("../components/Projects/Projects").then((mod) => mod.Projects)
);

export default function ProjectsPage() {
  const t = useTranslations("projects");
  const b = useTranslations("banner");

  const locale = useLocale() as Locale;
  const projectLang = (() => {
    if (locale === "uk") {
      return projectsUkrainianLang;
    } else if (locale === "no") {
      return projectsNorwegianLang;
    } else {
      return projectsEnglishLang;
    }
  })();

  const [activeTypeFilter, setActiveTypeFilter] = useState<string | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<
    string | null
  >(null);
  const [filteredProjects, setFilteredProjects] = useState(projectLang);

  const handleTypeChange = (type: string) => {
    const filteredProjects = projectLang.filter((project) => {
      return type === "all" || type === "всі" || project.development === type;
    });
    setFilteredProjects(filteredProjects);
    setActiveTypeFilter(type);
    setActiveCategoryFilter(null);
  };

  const handleLanguageChange = (lang: string) => {
    const filteredProjects = projectLang.filter((project) => {
      return lang === "all" || lang === "всі" || project.language === lang;
    });
    setFilteredProjects(filteredProjects);
    setActiveTypeFilter(lang);
    setActiveCategoryFilter(null);
  };

  const handleCategoryChange = (category: string, type: string) => {
    const filteredProjects = projectLang.filter((project) => {
      const typeMatch =
        type === "all" || type === "всі" || project.development === type;
      const categoryMatch = project.type === category;
      return typeMatch && categoryMatch;
    });
    setFilteredProjects(filteredProjects);
    setActiveTypeFilter(type);
    setActiveCategoryFilter(`${type}.${category}`);
  };

  return (
    <main className="container">
      <div className="projects__header">
        <div className="page-headings">
          <motion.h1 variants={gridVariants} initial="hidden" animate="visible">
            {t("title")}
          </motion.h1>
          <motion.p variants={gridVariants} initial="hidden" animate="visible">
            {t("description")}
          </motion.p>
        </div>
        <div className="projects__filter">
          <Dropdown
            activeTypeFilter={activeTypeFilter}
            activeCategoryFilter={activeCategoryFilter}
            handleCategoryChange={handleCategoryChange}
            handleTypeChange={handleTypeChange}
            handleLanguageChange={handleLanguageChange}
          />
          <LottiePlayer
            src="/animation/filter.json"
            background="transparent"
            speed={1}
            className="projects__filter-animation"
            loop
            autoplay
          />
        </div>
      </div>
      {filteredProjects.length === 0 ? (
        <h4 className="center-text">{t("emptyList")} :(</h4>
      ) : (
        <Projects projects={filteredProjects} />
      )}
      <Banner text={b("contact")} button />
      <BeforeAfterSlider />
    </main>
  );
}

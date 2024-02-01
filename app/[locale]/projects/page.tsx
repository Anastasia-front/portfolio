"use client";

import { useState } from "react";

import { useTranslations } from "next-intl";
import Head from "next/head";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import { Banner, Dropdown, LottiePlayer, Projects } from "@/components";
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

  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = useState(projectLang);

  const handleTypeChange = (type: string) => {
    const filteredProjects = projectLang.filter((project) => {
      return type === "all" || type === "всі" || project.development === type;
    });
    setFilteredProjects(filteredProjects);
    setActiveFilter(type);
  };

  const handleLanguageChange = (lang: string) => {
    const filteredProjects = projectLang.filter((project) => {
      return lang === "all" || lang === "всі" || project.language === lang;
    });
    setFilteredProjects(filteredProjects);
    setActiveFilter(lang);
  };

  const handleCategoryChange = (category: string, type: string) => {
    const filteredProjects = projectLang.filter((project) => {
      const typeMatch =
        type === "all" || type === "всі" || project.development === type;
      const categoryMatch = project.type === category;
      return typeMatch && categoryMatch;
    });
    setFilteredProjects(filteredProjects);
    setActiveFilter(`${type}.${category}`);
  };

  return (
    <>
      <Head>
        <meta property="og:image" content={t("ogImage")} />
      </Head>

      <main className="container">
        <div className="projects__header">
          <div className="page-headings">
            <motion.h1
              variants={gridVariants}
              initial="hidden"
              animate="visible"
            >
              {t("title")}
            </motion.h1>
            <motion.h5
              variants={gridVariants}
              initial="hidden"
              animate="visible"
            >
              {t("description")}
            </motion.h5>
          </div>
          <div className="projects__filter">
            <Dropdown
              activeFilter={activeFilter}
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
      </main>
    </>
  );
}

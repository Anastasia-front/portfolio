"use client";

import { useTranslations } from "next-intl";

import { motion } from "framer-motion";

import { Banner, Dropdown, Projects } from "@/components";

import { gridVariants } from "@/utils";

export default function ProjectsPage() {
  const t = useTranslations("projects");
  const b = useTranslations("banner");

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
        <Dropdown />
      </div>

      <Projects />
      <Banner text={b("contact")} button />
    </div>
  );
}

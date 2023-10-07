"use client";

import { useTranslations } from "next-intl";

import { motion } from "framer-motion";

import { SkillsItem } from "@/components";
import { skills } from "@/constants";
import { gridVariants } from "@/utils";

export default function SkillsPage() {
  const t = useTranslations("skills");
  return (
    <div className="u-pad-2">
      <div className="projects__headings">
        <motion.h1 variants={gridVariants} initial="hidden" animate="visible">
          {t("title")}
        </motion.h1>
        <motion.h6 variants={gridVariants} initial="hidden" animate="visible">
          {t("description")}
        </motion.h6>
      </div>

      <div className="skills-section__list">
        {skills.map((skill, index) => (
          <SkillsItem key={index} {...skill} />
        ))}
      </div>
    </div>
  );
}

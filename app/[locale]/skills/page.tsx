"use client";

import { useTranslations } from "next-intl";

import { motion } from "framer-motion";

import { Accordion, SkillSlider } from "@/components";
import { gridVariants, imgVariants } from "@/utils";

export default function SkillsPage() {
  const t = useTranslations("skills");

  return (
    <main className="skills-page container">
      <div className="page-headings">
        <motion.h1 variants={gridVariants} initial="hidden" animate="visible">
          {t("title")}
        </motion.h1>
        <motion.h6
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          className="page-headings__medium-width"
        >
          {t("description")}
        </motion.h6>
      </div>

      <Accordion />
      <motion.div
        variants={imgVariants("left")}
        className="skills-section__slider"
      >
        <SkillSlider />
      </motion.div>
    </main>
  );
}

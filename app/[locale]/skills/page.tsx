"use client";

import { useTranslations } from "next-intl";

import { motion } from "framer-motion";

import { Accordion, Banner, LottiePlayer, SkillSlider } from "@/components";
import { gridVariants, opacityVariants } from "@/utils";

export default function SkillsPage() {
  const t = useTranslations("skills");
  const b = useTranslations("banner");

  return (
    <main className="skills-page container">
      <div className="skills-header">
        <div className="page-headings">
          <motion.h1 variants={gridVariants} initial="hidden" animate="visible">
            {t("title")}
          </motion.h1>
          <motion.h5
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            className="page-headings__medium-width"
          >
            {t("description")}
          </motion.h5>
        </div>
        <LottiePlayer
          src="/animation/skills.json"
          background="transparent"
          speed={1}
          className="skills-animation"
          loop
          autoplay
        />
      </div>

      <Accordion />
      <Banner text={b("contact")} button />
      <motion.div
        variants={opacityVariants("first")}
        className="skills-section__slider"
      >
        <SkillSlider />
      </motion.div>
    </main>
  );
}

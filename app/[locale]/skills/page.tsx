"use client";

import { useTranslations } from "next-intl";

import { motion } from "framer-motion";

import { Accordion } from "@/components";
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

      <Accordion />
    </div>
    // Изображение от <a href="https://ru.freepik.com/free-vector/background-realistic-abstract-technology-particle_6938839.htm#query=technology%20background&position=0&from_view=search&track=ais">Freepik</a>
  );
}

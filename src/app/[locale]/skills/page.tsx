"use client";

import { useLocale, useTranslations } from "next-intl";
import dynamic from "next/dynamic";

import { motion } from "framer-motion";

import { type Locale } from "src/locales";

import { bannerVariants, gridVariants, opacityVariants } from "@/utils";

import "@/styles/partials/_skills.scss";

const Accordion = dynamic(() =>
  import("../components/Skills/SkillsAccordion").then(
    (mod) => mod.SkillsAccordion
  )
);
const Banner = dynamic(() =>
  import("../components/Banner/Banner").then((mod) => mod.Banner)
);
const LottiePlayer = dynamic(() =>
  import("../components/LottiePlayer/LottiePlayer").then(
    (mod) => mod.LottiePlayer
  )
);
const Slider = dynamic(() =>
  import("../components/Skills/SkillsSlider").then((mod) => mod.SkillSlider)
);

export default function SkillsPage() {
  const t = useTranslations("skills");
  const b = useTranslations("banner");

  const locale = useLocale() as Locale;

  return (
    <motion.main
      variants={bannerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0 }}
      className="skills-page container"
    >
      <div className="skills-header">
        <div className="page-headings page-headings__skills">
          <motion.h1 variants={gridVariants} initial="hidden" animate="visible">
            {t("title")}
          </motion.h1>
          <motion.p
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            className="page-headings__medium-width"
          >
            {t("description")}
          </motion.p>
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

      <Accordion lang={locale} />
      <Banner text={b("contact")} button />
      <motion.div
        variants={opacityVariants("first")}
        className="skills-section__slider"
      >
        <Slider />
      </motion.div>
    </motion.main>
  );
}

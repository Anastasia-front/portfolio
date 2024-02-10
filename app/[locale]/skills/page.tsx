"use client";

import { useTranslations } from "next-intl";
import Head from "next/head";

import { motion } from "framer-motion";

import { Accordion, Banner, LottiePlayer, SkillSlider } from "@/components";
import { bannerVariants, gridVariants, opacityVariants } from "@/utils";

export default function SkillsPage() {
  const t = useTranslations("skills");
  const b = useTranslations("banner");
  const n = useTranslations("nav");

  return (
    <>
      <Head>
        <meta property="og:image" content={t("ogImage")} />
        <title>{`${n("page")} ${n("skills")}`} </title>
      </Head>

      <motion.main
        variants={bannerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0 }}
        className="skills-page container"
      >
        <div className="skills-header">
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
      </motion.main>
    </>
  );
}

"use client";

import React from "react";

import { useTranslations } from "next-intl";
import { Libre_Franklin, Source_Code_Pro } from "next/font/google";

import { motion, useScroll, useTransform } from "framer-motion";

import { Certificate } from "@/components";
import { bannerVariants, titleVariants } from "@/utils";

const franklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["500"],
});

const source = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["600"],
});

export function AchievementBlock() {
  const a = useTranslations("about.achievements");
  const t = useTranslations("about");

  const achievementBlock = React.useRef(null);

  const scrollYProgress: any = useScroll({
    target: achievementBlock,
    offset: ["start end", "end start"],
  }).scrollYProgress;

  const y = useTransform(scrollYProgress, [0, 0.3], [10, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.9], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <motion.div
      className="about-achievements"
      ref={achievementBlock}
      style={{
        y,
        scale,
        opacity,
      }}
    >
      <motion.h4
        className={`about-achievements__title ${franklin.className}`}
        variants={titleVariants("second")}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.2 }}
      >
        {t("confirm")}
      </motion.h4>
      <motion.h5
        className={`about-achievements__subtitle ${source.className}`}
        variants={titleVariants("second")}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.2 }}
      >
        {a("title.first")}
      </motion.h5>
      <motion.div
        className="about-achievements__slider about-achievements__slider-certificate"
        variants={bannerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <Certificate />
      </motion.div>
      {/* <motion.h5
        className={`about-achievements__subtitle ${source.className}`}
        variants={titleVariants("second")}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.2 }}
      >
        {a("title.second")}
      </motion.h5> */}
      {/* <motion.div
        className="about-achievements__slider about-achievements__slider-progress"
        variants={bannerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <Progress />
      </motion.div> */}
    </motion.div>
  );
}

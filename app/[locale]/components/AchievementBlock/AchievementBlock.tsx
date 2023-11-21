"use client";

import { useTranslations } from "next-intl";
import { Libre_Franklin, Source_Code_Pro } from "next/font/google";

import { motion } from "framer-motion";

import { Certificate, Progress } from "@/components";
import { titleVariants } from "@/utils";

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

  return (
    <motion.div className="about-achievements">
      <motion.h4
        className={`about-achievements__title ${franklin.className}`}
        variants={titleVariants("second")}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        {t("confirm")}
      </motion.h4>
      <motion.h5
        className={`about-achievements__subtitle ${source.className}`}
        variants={titleVariants("second")}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        {a("title.first")}
      </motion.h5>
      <motion.div
        className="about-achievements__slider about-achievements__slider-certificate"
        variants={titleVariants("first")}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Certificate />
      </motion.div>
      <motion.h5
        className={`about-achievements__subtitle ${source.className}`}
        variants={titleVariants("second")}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        {a("title.second")}
      </motion.h5>
      <motion.div
        className="about-achievements__slider"
        variants={titleVariants("first")}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Progress />
      </motion.div>
    </motion.div>
  );
}

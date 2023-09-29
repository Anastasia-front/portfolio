"use client";

import React from "react";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

import { motion, useScroll, useTransform } from "framer-motion";

import { imgVariants, imgVariants2, titleVariants3 } from "@/utils";

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

  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const lang = pathname.slice(0, 3);

  const achievement1 = (() => {
    if (lang === "/uk") {
      if (theme === "light") {
        return "/images/achievements/uk-light-a1.png";
      } else {
        return "/images/achievements/uk-dark-a1.png";
      }
    } else {
      if (theme === "light") {
        return "/images/achievements/en-light-a1.png";
      } else {
        return "/images/achievements/en-dark-a1.png";
      }
    }
  })();

  const achievement2 = (() => {
    if (lang === "/uk") {
      if (theme === "light") {
        return "/images/achievements/uk-light-a2.png";
      } else {
        return "/images/achievements/uk-dark-a2.png";
      }
    } else {
      if (theme === "light") {
        return "/images/achievements/en-light-a2.png";
      } else {
        return "/images/achievements/en-dark-a2.png";
      }
    }
  })();

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
      <motion.h3
        className="about-achievements__title"
        variants={titleVariants3}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.2 }}
      >
        {t("confirm")}
      </motion.h3>
      <motion.h4
        className="about-achievements__subtitle"
        variants={titleVariants3}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.2 }}
      >
        {a("title.first")}
      </motion.h4>
      <motion.img
        src="/images/achievements/certificate1.png"
        alt={a("alt.certificate.first")}
        className="about-achievements__image"
        variants={imgVariants2}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.2 }}
      />
      <motion.img
        src="/images/achievements/certificate2.png"
        alt={a("alt.certificate.second")}
        className="about-achievements__image"
        variants={imgVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.2 }}
      />
      <motion.img
        src="/images/achievements/certificate3.png"
        alt={a("alt.certificate.third")}
        className="about-achievements__image"
        variants={imgVariants2}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.2 }}
      />
      <motion.h4
        className="about-achievements__subtitle"
        variants={titleVariants3}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.2 }}
      >
        {a("title.second")}
      </motion.h4>
      <motion.img
        src={achievement1}
        alt={a("alt.cabinet.first")}
        className="about-achievements__image"
        variants={imgVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.2 }}
      />
      <motion.img
        src={achievement2}
        alt={a("alt.cabinet.second")}
        className="about-achievements__image"
        variants={imgVariants2}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.2 }}
      />
    </motion.div>
  );
}

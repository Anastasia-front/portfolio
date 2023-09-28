"use client";

import React from "react";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { Abril_Fatface } from "next/font/google";
import { usePathname } from "next/navigation";

import { motion, useScroll, useTransform } from "framer-motion";

import { bannerVariants, titleVariants } from "@/utils";

import { AboutItem, Banner } from "@/components";

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: ["400"],
});

export default function AboutPage() {
  const t = useTranslations("about");
  const b = useTranslations("banner");
  const a = useTranslations("about.achievements");
  const i = useTranslations("about.features.items");
  const keys = [
    "first",
    "second",
    "third",
    "forth",
    "fifth",
    "sixth",
    "seventh",
  ] as const;
  const header = React.useRef(null);

  const { theme, setTheme } = useTheme();

  const pathname = usePathname();
  const lang = pathname.slice(0, 3);
  const img = (() => {
    if (lang === "/uk") {
      if (theme === "light") {
        return "/images/about/uk-light.png";
      } else {
        return "/images/about/uk-dark.png";
      }
    } else {
      if (theme === "light") {
        return "/images/about/en-light.png";
      } else {
        return "/images/about/en-dark.png";
      }
    }
  })();

  const achievement1 = (() => {
    if (lang === "/uk") {
      return "/images/achievements/uk-a1.png";
    } else {
      return "/images/achievements/en-a1.png";
    }
  })();

  const achievement2 = (() => {
    if (lang === "/uk") {
      return "/images/achievements/uk-a2.png";
    } else {
      return "/images/achievements/en-a2.png";
    }
  })();

  //scroll animations
  const scrollYProgress = useScroll({
    target: header,
    offset: ["start end", "end start"],
  }).scrollYProgress;

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.3, 1.2]);
  const x = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, -2400]);
  const y = useTransform(scrollYProgress, [0, 0.75, 1], [0, 0, -900]);
  const opacity = useTransform(scrollYProgress, [0, 0.85, 0.95], [1, 1, 0]);

  return (
    <div className="u-pad-2">
      <motion.header ref={header} className="about-header">
        <motion.img
          src={img}
          alt={t("alt")}
          className="about-header__image"
          variants={bannerVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0 }}
          style={{
            scale,
            translateX: "-50%",
            x,
            y,
            opacity,
          }}
        />
        <motion.div
          className="about-header__content"
          variants={titleVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h1 className={`about-header__title ${abril.className}`}>
            {t("title")}
          </h1>
          <p>{t("description")}</p>
        </motion.div>
      </motion.header>
      <div className="about-content">
        <Banner text={b("contact")} button />

        <section className="about-section">
          <motion.h2
            className="about-section__title"
            variants={titleVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
          >
            {t("features.title")}
          </motion.h2>
          <ol className="about-section__list">
            {keys.map((key) => (
              <AboutItem
                key={key}
                number={i(`${key}.number`)}
                title={i(`${key}.title`)}
                description={i(`${key}.description`)}
              />
            ))}
          </ol>
          <div className="about-achievements">
            <h3 className="about-achievements__title">{t("confirm")}</h3>
            <motion.img
              src={achievement1}
              alt={a("first.title")}
              className="about-achievements__image"
            />
            <motion.img
              src={achievement2}
              alt={a("second.title")}
              className="about-achievements__image"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

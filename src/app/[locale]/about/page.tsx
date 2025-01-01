"use client";

import { lazy, useRef } from "react";

import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

import { motion, useScroll, useTransform } from "framer-motion";

import { type Locale } from "src/locales";

import { sevenKeys } from "@/constants";
import { useScreenQuery } from "@/hooks";
import { bannerVariants, titleVariants } from "@/utils";

import "@/styles/partials/_about.scss";

const AboutItem = lazy(() => import("../components/AboutItem/AboutItem"));
const Achievements = lazy(
  () => import("../sections/Achievements/AchievementsSection")
);

const Banner = dynamic(() =>
  import("../components/Banner/Banner").then((mod) => mod.Banner)
);

export default function AboutPage() {
  const t = useTranslations("about");
  const b = useTranslations("banner");
  const i = useTranslations("about.features.items");

  const { theme } = useTheme();
  const locale = useLocale() as Locale;
  const { isScreenTabletSm } = useScreenQuery();

  const folder = isScreenTabletSm ? "tablet-and-desktop" : "mobile";

  const img = `/images/about/${folder}/${locale}-${theme}.webp`;

  // scroll animations
  const header = useRef(null);
  const scrollYProgress = useScroll({
    target: header,
    offset: ["start end", "end start"],
  }).scrollYProgress;

  const scale = useTransform(scrollYProgress, [0, 0.7], [0.7, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.5]);

  return (
    <main className="container">
      <motion.div ref={header} className="about-header">
        <motion.img
          src={img}
          alt={t("alt")}
          className="about-header__image"
          variants={bannerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0 }}
          style={{
            scale,
            translateX: "-50%",
            opacity,
          }}
        />
      </motion.div>
      <div className="about-content">
        <Banner text={b("contact")} button className="about-content__banner" />
        <section className="about-section">
          <motion.h1
            className="about-section__title"
            variants={titleVariants("first")}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
          >
            {t("features.title")}
          </motion.h1>
          <ol className="about-section__list">
            {sevenKeys.map((key) => (
              <AboutItem
                key={key}
                number={i(`${key}.number`)}
                title={i(`${key}.title`)}
                description={i(`${key}.description`)}
              />
            ))}
          </ol>
          <Achievements />
        </section>
      </div>
    </main>
  );
}

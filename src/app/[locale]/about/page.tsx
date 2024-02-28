"use client";

import { lazy, useRef } from "react";

import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

import { motion, useScroll, useTransform } from "framer-motion";

import { type Locale } from "src/locales";

import { menuItems, sevenKeys } from "@/constants";
import { useScreenQuery } from "@/hooks";
import { bannerVariants, titleVariants } from "@/utils";

const AboutItem = lazy(() => import("../components/AboutItem/AboutItem"));
const AchievementBlock = lazy(
  () => import("../components/AchievementBlock/AchievementBlock")
);

const Banner = dynamic(() =>
  import("../components/Banner/Banner").then((mod) => mod.Banner)
);
const Robots = dynamic(() =>
  import("../components/Robots/Robots").then((mod) => mod.Robots)
);

export default function AboutPage() {
  const t = useTranslations("about");
  const b = useTranslations("banner");
  const i = useTranslations("about.features.items");
  const n = useTranslations("nav");

  const { theme } = useTheme();

  const { isScreenTabletSm } = useScreenQuery();

  const folder = isScreenTabletSm ? "tablet-and-desktop" : "mobile";

  const locale = useLocale() as Locale;
  const img = (() => {
    return `/images/about/${folder}/${locale}-${theme}.webp`;
  })();

  //scroll animations
  const header = useRef(null);
  const scrollYProgress = useScroll({
    target: header,
    offset: ["start end", "end start"],
  }).scrollYProgress;

  const scale = useTransform(scrollYProgress, [0, 0.7], [0.7, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.5]);

  return (
    <>
      <Robots
        page={menuItems[1].url}
        ogImg={t("ogImage")}
        title={`${n("page")} ${n("about")}`}
      />
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
          <Banner
            text={b("contact")}
            button
            className="about-content__banner"
          />

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
            <AchievementBlock />
          </section>
        </div>
      </main>
    </>
  );
}
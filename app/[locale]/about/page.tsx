"use client";

import React, { useEffect, useState } from "react";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { Abril_Fatface } from "next/font/google";

import { motion, useScroll, useTransform } from "framer-motion";

import { bannerVariants, titleVariants } from "@/utils";

import { AboutItem } from "@/components/AboutItem";
import { Banner, ContactBanner } from "@/components/Banners";

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: ["400"],
});

export default function AboutPage() {
  const t = useTranslations("about");
  const b = useTranslations("banner");
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
  const [lang, setLang] = useState<string>("en");
  useEffect(() => {
    // Check if window and localStorage are defined (client-side)
    if (typeof window !== "undefined" && window.localStorage) {
      // Access localStorage safely
      const storedTheme = window.localStorage.getItem("theme");
      if (storedTheme) {
        setTheme(storedTheme);
      }
      const storedLang = window.localStorage.getItem("lang");
      if (storedLang) {
        setLang(storedLang);
      }
    }
  }, [setTheme]);

  //scroll animations
  const scrollYProgress = useScroll({
    target: header,
    offset: ["start end", "end start"],
  }).scrollYProgress;

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.3, 1.2]);
  const x = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, -2400]);
  const y = useTransform(scrollYProgress, [0, 0.75, 1], [0, 0, -900]);
  const opacity = useTransform(scrollYProgress, [0, 0.85, 0.95], [1, 1, 0]);

  const img = (() => {
    if (lang === "en") {
      if (theme === "light") {
        return "/about/uk-light.png";
      } else {
        return "/about/uk-dark.png";
      }
    } else {
      if (theme === "light") {
        return "/about/en-light.png";
      } else {
        return "/about/en-dark.png";
      }
    }
  })();

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
          {/* <div className="icons">
            <Link href="https://www.linkedin.com/">
              <BsLinkedin />
            </Link>
            <Link href="https://github.com/Maclinz">
              <BsGithub />
            </Link>
            <Link href="https://www.youtube.com/@TheCodeDealer/featured">
              <BsYoutube />
            </Link>
          </div> */}
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
        </section>

        <ContactBanner />
      </div>
    </div>
  );
}

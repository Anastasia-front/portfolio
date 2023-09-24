"use client";

import { Abril_Fatface } from "next/font/google";

import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";

import { AboutItem } from "@/components/AboutItem/AboutItem";
import { Banner } from "@/components/Banners/Banner";
import { ContactBanner } from "@/components/Banners/ContactBanner";

import { bannerVariants, titleVariants } from "@/utils/animation";

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
          src="/about.png"
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

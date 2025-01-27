"use client";

import { useTranslations } from "next-intl";
import { Oswald } from "next/font/google";
import Image from "next/image";

import { motion } from "framer-motion";

import decoration from "@/assets/images/hero/decoration.webp";
import hero from "@/assets/images/hero/hero.webp";

import { AnimatedText, ButtonScroll } from "@/components";
import { useScreenQuery } from "@/hooks";
import { opacityVariants } from "@/utils";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Hero() {
  const i = useTranslations("home.hero");
  const t = useTranslations("home.hero.title");
  const b = useTranslations("btn");
  const a = useTranslations("alt.decoration");
  const h = useTranslations("alt");

  const { isScreenMobileLg } = useScreenQuery();

  return (
    <motion.div
      variants={opacityVariants("first")}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
    >
      <section className="container__box-shadow">
        <div className="hero-container container">
          <div className="hero-content">
            <span className="hero-blur"></span>
            <span className="hero-blur"></span>
            <div className="hero-headings">
              <AnimatedText
                variant="word"
                once={false}
                text={i("subtitle")}
                className="accent-text"
                el="h5"
              />
              <AnimatedText
                variant="word"
                once={false}
                text={t("name")}
                className="accent-text"
                el="h2"
              />
              <AnimatedText
                variant="word"
                once={false}
                text={t("position")}
                el="h1"
                className={`${oswald.className} accent-text`}
              />
            </div>
            <p className="accent-text skeleton-text">{i("description")}</p>
            <div className="hero-buttons">
              <ButtonScroll href="features" text={b("hero")} />
              <ButtonScroll href="tools" text={b("tools")} />
            </div>
          </div>
          <div className="hero-image">
            {isScreenMobileLg && (
              <Image
                loading="eager"
                priority={true}
                src={decoration}
                alt={a("hero")}
                className="hero-image__decoration"
              />
            )}
            <Image
              loading="eager"
              priority={true}
              src={hero}
              alt={h("hero")}
              className="hero-image__content"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { BsInfoCircle } from "react-icons/bs";

import { useTranslations } from "next-intl";
import Image from "next/image";

import { motion } from "framer-motion";

import { ButtonLink } from "@/components";
import { threeKeys } from "@/constants";
import { useScreenQuery } from "@/hooks";
import { opacityVariants } from "@/utils";

export function Features() {
  const i = useTranslations("home.features");
  const b = useTranslations("btn");
  const a = useTranslations("alt.decoration");

  const { isScreenTabletSm } = useScreenQuery();

  const [lang, setLang] = useState<"en" | "uk">("en");

  useEffect(() => {
    let storedLang: "en" | "uk";
    if (typeof window !== "undefined") {
      storedLang = window.localStorage.getItem("lang") as "en" | "uk";
    } else {
      storedLang = "en";
    }

    setLang(storedLang);
  }, []);

  return (
    <motion.section
      className="container__box-shadow"
      id="features"
      variants={opacityVariants("first")}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
    >
      <div className="features container">
        <div className="section-header">
          <h2>{i("title")}</h2>
          <ButtonLink text={b("features")} href="/projects" lang={lang} />
        </div>
        <p className="block-hint  block-hint__for-one block-hint__self-start">
          <BsInfoCircle /> {i("subtitle")}
        </p>

        <div className="features-cards">
          {threeKeys.map((key,index) => {
            return (
              <div className="features-card" key={key}>
                <div className="features-card__content">
                  <div
                    className={`features-card__front features-card__front-${key}`}
                  >
                    <Image
                      src={`/svg/${i(`${key}.svg`)}.svg`}
                      alt={i(`${key}.alt`)}
                      width={100}
                      height={100}
                    />
                    <h4 className="features-card__title">
                      {i(`${key}.title`)}
                    </h4>
                    <p className="features-card__subtitle">
                      {i(`${key}.subtitle`)}
                    </p>
                  </div>

                  <div className="features-card__back">
                    <p className="features-card__body">{i(`${key}.text`)}</p>
                  </div>
                </div>
                {isScreenTabletSm && (
                  <Image
                    className="features-card__decoration"
                    src={`/images/features/decoration/${index}.webp`}
                    width={300}
                    height={300}
                    alt={a("features")}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

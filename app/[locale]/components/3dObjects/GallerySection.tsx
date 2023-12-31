"use client";

import { useEffect, useState } from "react";
import { BsInfoCircle } from "react-icons/bs";

import { useTranslations } from "next-intl";

import { motion } from "framer-motion";

import { ButtonLink } from "@/components";
import { opacityVariants } from "@/utils";

import { Dynamic } from "./Dynamic";

export function GallerySection() {
  const i = useTranslations("home.gallery");
  const b = useTranslations("btn");

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
      className="gallery-section"
      variants={opacityVariants("first")}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
    >
      <div className="gallery container">
        <div className="section-header section-header__container">
          <h2>{i("title")}</h2>
          <ButtonLink text={b("gallery")} href="/about" lang={lang} />
        </div>
        <p className="block-hint block-hint__for-one block-hint__self-start">
          <BsInfoCircle /> {i("subtitle")}
        </p>
      </div>

      <Dynamic componentName="Gallery" />
    </motion.section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { BsInfoCircle } from "react-icons/bs";

import { useTranslations } from "next-intl";

import { ButtonLink } from "@/components";
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
    <section className="gallery-section">
      <div className="section-header container">
        <h2>{i("title")}</h2>
        <ButtonLink
          text={b("gallery")}
          hover="true"
          href="/about"
          lang={lang}
        />
      </div>
      <p className="container block-hint  block-hint__for-one block-hint__without-margin">
        <BsInfoCircle /> {i("subtitle")}
      </p>
      <Dynamic componentName="Gallery" />
    </section>
  );
}

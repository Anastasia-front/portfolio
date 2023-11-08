"use client";

import { useEffect, useState } from "react";

import { useTranslations } from "next-intl";

import { ButtonLink, Gallery } from "@/components";

export function GallerySection() {
  const i = useTranslations("home");
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
      <div className=" section-header container">
        <h2>{i("gallery")}</h2>
        <ButtonLink
          text={b("gallery")}
          hover="true"
          href="/about"
          lang={lang}
        />
      </div>

      <Gallery />
    </section>
  );
}

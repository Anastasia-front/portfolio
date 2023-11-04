"use client";

import { useTranslations } from "next-intl";

import { ButtonText, Gallery } from "@/components";

export function GallerySection() {
  const i = useTranslations("home");
  const b = useTranslations("btn");

  return (
    <section className="gallery-section">
      <div className=" section-header container">
        <h2>{i("gallery")}</h2>
        <ButtonText text={b("gallery")} hover="true" />
      </div>

      <Gallery />
    </section>
  );
}

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
        <ButtonText
          text={b("gallery")}
          borderRadius="1rem"
          padding="0.7rem 1.5rem"
          hover="true"
        />
      </div>

      <Gallery />
    </section>
  );
}

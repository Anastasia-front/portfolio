"use client";

import { useTranslations } from "next-intl";

import { Banner, FooterBanner, Projects } from "@/components";

export default function ProjectsPage() {
  const t = useTranslations("projects");
  const b = useTranslations("banner");
  return (
    <div className="u-pad-2">
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <Projects />
      <Banner text={b("contact")} button />
      <FooterBanner />
    </div>
  );
}

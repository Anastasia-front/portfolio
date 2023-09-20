"use client";

import { useTranslations } from "next-intl";

export default function ProjectsPage() {
  const t = useTranslations("projects");
  return (
    <>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </>
  );
}

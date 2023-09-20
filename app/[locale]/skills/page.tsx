"use client";

import { useTranslations } from "next-intl";

export default function SkillsPage() {
  const t = useTranslations("skills");
  return (
    <>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </>
  );
}

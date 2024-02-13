"use client";

import { useTranslations } from "next-intl";

import { ButtonLink } from "./components";

export default function NotFound() {
  const t = useTranslations("notFound");
  const h = useTranslations("home");

  return (
    <main className="loading">
      <div className="page-headings page-headings__align-center page-headings__reverse">
        <h1>{t("title")}</h1>
        <h3>{t("description")}</h3>
      </div>
      <ButtonLink text={t("link")} href="/" />
    </main>
  );
}

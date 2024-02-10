"use client";

import { useTranslations } from "next-intl";

import Link from "next/link";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="page-headings">
      <h1>{t("title")}</h1>
      <h2>{t("description")}</h2>
      <Link aria-label="Home page" href="/">
        {t("link")}
      </Link>
    </div>
  );
}

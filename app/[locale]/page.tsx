"use client";

import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");
  return (
    <>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </>
  );
}

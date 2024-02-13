"use client";

import { useTranslations } from "next-intl";

import { Loader } from "@/components";

export default function Loading() {
  const t = useTranslations("loading");
  const n = useTranslations("nav");

  return (
    <main className="main-layout">
      <div className="page-headings page-headings__align-center ">
        <h1>{t("please")}</h1>
        <h2>{t("wait")},</h2>
        <h3>{t("page")}</h3>
        <h4>{t("titled")}</h4>
        <h5>« {n("projects")} »</h5>
        <h6>{t("load")}</h6>
      </div>
      <Loader />
    </main>
  );
}

"use client";

import { useTranslations } from "next-intl";

export default function ContactsPage() {
  const t = useTranslations("contacts");
  return (
    <>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </>
  );
}

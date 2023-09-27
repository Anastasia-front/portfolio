"use client";

import { useTranslations } from "next-intl";

import { Banner, Projects } from "@/components";

export default function ProjectsPage() {
  const t = useTranslations("projects");
  return (
    <div className="u-pad-2">
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <Projects />
      <Banner
        text="Interested in working with me on your next project? Send me an email or schedule a meeting."
        button
      />
    </div>
  );
}

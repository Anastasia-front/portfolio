import { useTranslation } from "react-i18next";

export function ProjectsPage() {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("projects.title")}</h1>
      <p>{t("projects.description")}</p>
    </>
  );
}

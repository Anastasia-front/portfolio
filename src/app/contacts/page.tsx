import { useTranslation } from "react-i18next";

export function ContactsPage() {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("contacts.title")}</h1>
      <p>{t("contacts.description")}</p>
    </>
  );
}

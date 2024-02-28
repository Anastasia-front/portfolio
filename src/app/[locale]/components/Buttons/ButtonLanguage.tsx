"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

import UA from "@/assets/svg/ukraine.svg";
import US from "@/assets/svg/united-states.svg";

import { type Locale } from "src/locales";

import { ButtonSwitcher } from "@/components";

export const ButtonLanguage = () => {
  const [isVisible, setIsVisible] = useState(true);

  const a = useTranslations("alt");
  const t = useTranslations("switcher");

  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const newLocaleRef = useRef<Locale>(locale);

  useEffect(() => {
    newLocaleRef.current = locale;
  }, [locale]);
  useEffect(() => {
    newLocaleRef.current = locale === "en" ? "uk" : "en";
  }, [locale]);

  function handleLocaleChange(): void {
    setIsVisible(false);
    document.cookie = `NEXT_LOCALE=${newLocaleRef.current}; max-age=31536000; SameSite=Lax`;
    router.refresh();
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }

  const icon = useMemo(() => {
    const IconUA = <UA />;
    const IconUS = <US />;
    return locale === "uk" ? IconUA : IconUS;
  }, [locale]);

  return (
    <ButtonSwitcher
      type="link"
      href={pathname}
      ariaLabel={t("lang.title")}
      className={isVisible ? "visible" : "invisible"}
      alt={a("svgLang")}
      icon={icon}
      onClick={handleLocaleChange}
      title={locale === "en" ? t("lang.en") : t("lang.uk")}
    />
  );
};

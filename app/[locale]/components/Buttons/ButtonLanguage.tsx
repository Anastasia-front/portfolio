"use client";

import { useEffect, useMemo, useState } from "react";

import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import { usePathname } from "next/navigation";

import UA from "@/assets/svg/ukraine.svg";
import US from "@/assets/svg/united-states.svg";

import { ButtonSwitcher } from "./ButtonSwitcher";

export const ButtonLanguage = () => {
  const [isVisible, setIsVisible] = useState(true);

  const a = useTranslations("alt");
  const t = useTranslations("switcher");

  const pathname = usePathname();

  const [lang, setLang] = useState<string>("en");

  const icon = useMemo(() => {
    const IconUA = <UA />;
    const IconUS = <US />;
    return pathname === "/uk" ? IconUA : IconUS;
  }, [pathname]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("lang", "en");
    }
  }, []);

  const clickHandler = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsVisible(true);
      if (pathname === "/uk") {
        setLang("en");
        window.localStorage.setItem("lang", "en");
      } else {
        setLang("uk");
        window.localStorage.setItem("lang", "uk");
      }
    }, 300);
  };

  return (
    <Link href="/" locale={lang}>
      <ButtonSwitcher
        className={isVisible ? "visible" : "invisible"}
        alt={a("svgLang")}
        icon={icon}
        onClick={clickHandler}
        title={lang === "en" ? t("lang.en") : t("lang.uk")}
      />
    </Link>
  );
};

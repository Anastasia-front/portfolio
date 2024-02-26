"use client";

import { useEffect, useMemo, useState } from "react";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import UA from "@/assets/svg/ukraine.svg";
import US from "@/assets/svg/united-states.svg";

import { ButtonSwitcher } from "./ButtonSwitcher";

export const ButtonLanguage = () => {
  const [isVisible, setIsVisible] = useState(true);

  const a = useTranslations("alt");
  const t = useTranslations("switcher");

  const pathname = usePathname();

  const [lang, setLang] = useState<"en" | "uk">("en");
  const arrayPath = pathname.split("/");

  const translatedPage = () => {
    if (arrayPath[1] === "uk") {
      arrayPath.splice(1, 1, "en");
      return arrayPath.join("/");
    } else {
      arrayPath.splice(1, 1, "uk");
      return arrayPath.join("/");
    }
  };
  const translatedPageString = translatedPage();

  const icon = useMemo(() => {
    const IconUA = <UA />;
    const IconUS = <US />;
    return arrayPath[1] === "uk" ? IconUS : IconUA;
  }, [arrayPath]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLang = window.localStorage.getItem("lang") as "en" | "uk";
      if (storedLang) {
        setLang(storedLang);
      } else {
        setLang("en");
      }
    }
  }, []);

  const clickHandler = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsVisible(true);
      if (arrayPath[1] === "uk") {
        setLang("en");
        window.localStorage.setItem("lang", "en");
      } else {
        setLang("uk");
        window.localStorage.setItem("lang", "uk");
      }
    }, 300);
  };

  return (
    <ButtonSwitcher
      type="link"
      href={translatedPageString}
      ariaLabel={t("lang.title")}
      className={isVisible ? "visible" : "invisible"}
      alt={a("svgLang")}
      icon={icon}
      onClick={clickHandler}
      title={lang === "en" ? t("lang.en") : t("lang.uk")}
    />
  );
};

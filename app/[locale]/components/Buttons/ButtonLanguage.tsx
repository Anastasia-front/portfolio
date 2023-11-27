"use client";

import { useEffect, useMemo, useState } from "react";

import { useTranslations } from "next-intl";
import Link from "next/link";
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
  const array = pathname.split("/");

  const translatedPage = () => {
    if (array[1] === "uk") {
      array.splice(1, 1, "en");
      return array.join("/");
    } else {
      array.splice(1, 1, "uk");
      return array.join("/");
    }
  };
  const translatedPageString = translatedPage();

  const icon = useMemo(() => {
    const IconUA = <UA />;
    const IconUS = <US />;
    return array[1] === "uk" ? IconUS : IconUA;
  }, [array]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("lang", "en");
    }
  }, []);

  const clickHandler = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsVisible(true);
      if (array[1] === "uk") {
        setLang("uk");
        window.localStorage.setItem("lang", "uk");
      } else {
        setLang("en");
        window.localStorage.setItem("lang", "en");
      }
    }, 300);
  };

  return (
    <Link href={translatedPageString}>
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

"use client";

import { useState } from "react";

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

  const IconUA = <UA />;
  const IconUS = <US />;

  const pathname = usePathname();

  const [lang, setLang] = useState<string>("en");

  const [icon, setIcon] = useState(() => {
    if (pathname === "/uk") {
      return IconUA;
    } else {
      return IconUS;
    }
  });

  const clickHandler = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsVisible(true);
      if (pathname === "/uk") {
        setLang("en");
        setIcon(IconUS);
      } else {
        setLang("uk");
        setIcon(IconUA);
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

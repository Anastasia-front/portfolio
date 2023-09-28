"use client";

import { useState } from "react";

import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import { usePathname } from "next/navigation";

import UA from "@/assets/svg/ukraine.svg";
import US from "@/assets/svg/united-states.svg";

import { ButtonSwitcher } from "./ButtonSwitcher";

export const ButtonLanguage = () => {
  //  const ref = useRef<HTMLDivElement>();

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
    if (pathname === "/uk") {
      setLang("en");
      setIcon(IconUS);
    } else {
      setLang("uk");
      setIcon(IconUA);
    }
  };

  return (
    <Link href="/" locale={lang}>
      <ButtonSwitcher
        alt={a("svgLang")}
        icon={icon}
        onClick={clickHandler}
        title={lang === "en" ? t("lang.en") : t("lang.uk")}
        // ref={ref}
      />
    </Link>
  );
};

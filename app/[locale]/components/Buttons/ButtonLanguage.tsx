import { useEffect, useState } from "react";

import { useTranslations } from "next-intl";
import Link from "next-intl/link";

import UA from "@/assets/svg/ukraine.svg";
import US from "@/assets/svg/united-states.svg";

import { IThemeContext } from "@/constants";
import { useThemeContext } from "@/context";

import { ButtonSwitcher } from "./ButtonSwitcher";

export const ButtonLanguage = () => {
  //  const ref = useRef<HTMLDivElement>();

  const a = useTranslations("alt");
  const t = useTranslations("switcher");

  const IconUA = <UA />;
  const IconUS = <US />;

  const { theme }: IThemeContext = useThemeContext();

  const [lang, setLang] = useState<string>("en");

  useEffect(() => {
    // Check if window and localStorage are defined (client-side)
    if (typeof window !== "undefined" && window.localStorage) {
      // Access localStorage safely
      const storedLang = window.localStorage.getItem("lang");
      if (storedLang) {
        setLang(storedLang);
      }
    }
  }, []);

  const [icon, setIcon] = useState(() => {
    if (lang === "en") {
      return IconUS;
    } else {
      return IconUA;
    }
  });

  const clickHandler = () => {
    if (lang === "en") {
      setLang("uk");
      localStorage.setItem("lang", "uk");
      setIcon(IconUA);
    } else {
      setLang("en");
      localStorage.setItem("lang", "en");
      setIcon(IconUS);
    }
  };

  return (
    <Link href="/" locale={lang}>
      <ButtonSwitcher
        alt={a("svgLang")}
        icon={icon}
        onClick={clickHandler}
        theme={theme}
        title={lang === "en" ? t("lang.en") : t("lang.uk")}
        // ref={ref}
      />
    </Link>
  );
};

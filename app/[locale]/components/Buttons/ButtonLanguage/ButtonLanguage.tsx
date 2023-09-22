import { useEffect, useState } from "react";

import { useTranslations } from "next-intl";

import { useThemeContext } from "../../../context/themeContext";

import IconUA from "../../../assets/svg/ukraine.svg";
import IconUS from "../../../assets/svg/united-states.svg";

import { ButtonSwitcher } from "../ButtonSwitcher/ButtonSwitcher";

import Link from "next-intl/link";
import { IThemeContext } from "../../../constants/types";

export const ButtonLanguage = () => {
  //  const ref = useRef<HTMLDivElement>();

  const { theme }: IThemeContext = useThemeContext();
  const t = useTranslations("switcher");

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
      return IconUA;
    } else {
      return IconUS;
    }
  });

  const clickHandler = () => {
    if (lang === "uk") {
      setLang("en");
      localStorage.setItem("lang", "en");
      setIcon(IconUS);
    } else {
      setLang("uk");
      localStorage.setItem("lang", "uk");
      setIcon(IconUA);
    }
  };

  return (
    <Link href="/" locale={lang}>
      <ButtonSwitcher
        imgUrl={icon}
        onClick={clickHandler}
        theme={theme}
        title={lang === "en" ? t("lang.en") : t("lang.uk")}
        // ref={ref}
      />
    </Link>
  );
};

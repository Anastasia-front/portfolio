import { useState } from "react";

import { useTranslations } from "next-intl";

import { useThemeContext } from "../../context/themeContext";

import { ICONS } from "../../constants/icons";
import { ButtonSwitcher } from "./ButtonSwitcher";

import { IThemeContext } from "../../constants/types";

export const ButtonLanguage = () => {
  const UA = <ICONS.UA />;
  const UK = <ICONS.UK />;

  //  const ref = useRef<HTMLDivElement>();

  const { theme }: IThemeContext = useThemeContext();
  const t = useTranslations("switcher");

  const [lang, setLang] = useState<string>(
    () => localStorage.getItem("lang") ?? "en"
  );

  //   const handleClickLanguage = (language: string) => {
  //     if (language === lang) {
  //       return;
  //     }
  //     i18n.changeLanguage(language);
  //     setLang(language);
  //   };

  const [icon, setIcon] = useState<JSX.Element>(() => {
    if (lang === "en") {
      return UK;
    } else {
      return UA;
    }
  });

  const clickHandler = () => {
    if (lang === "en") {
      setLang("en");
      localStorage.setItem("lang", "en");
      setIcon(UK);
    } else {
      setLang("uk");
      localStorage.setItem("lang", "uk");
      setIcon(UK);
    }
  };

  return (
    <ButtonSwitcher
      icon={icon}
      onClick={clickHandler}
      theme={theme}
      title={lang === "en" ? t("lang.en") : t("lang.uk")}
      // ref={ref}
    />
  );
};

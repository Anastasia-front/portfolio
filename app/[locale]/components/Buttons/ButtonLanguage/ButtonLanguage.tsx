import { useState } from "react";

import { useTranslations } from "next-intl";

import { useThemeContext } from "../../../context/themeContext";

import { ICONS } from "../../../constants/icons";
import { ButtonSwitcher } from "../ButtonSwitcher/ButtonSwitcher";

import { Link } from "next-intl";
import { IThemeContext } from "../../../constants/types";

export const ButtonLanguage = () => {
  const UA = <ICONS.UA />;
  const US = <ICONS.US />;
  const srcUS = US.type.src;
  const srcUA = UA.type.src;

  //  const ref = useRef<HTMLDivElement>();

  const { theme }: IThemeContext = useThemeContext();
  const t = useTranslations("switcher");

  const [lang, setLang] = useState<string>(
    () => localStorage.getItem("lang") || "en"
  );

  const [icon, setIcon] = useState(() => {
    if (lang === "en") {
      return srcUA;
    } else {
      return srcUS;
    }
  });

  const clickHandler = () => {
    if (lang === "uk") {
      setLang("en");
      localStorage.setItem("lang", "en");
      setIcon(srcUS);
    } else {
      setLang("uk");
      localStorage.setItem("lang", "uk");
      setIcon(srcUA);
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

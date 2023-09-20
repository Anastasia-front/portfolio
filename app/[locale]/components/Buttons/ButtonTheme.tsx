"use client";

import { useTranslations } from "next-intl";

import { useState } from "react";

import { useThemeContext } from "../../context/themeContext";

import { ICONS } from "../../constants/icons";
import { IThemeContext } from "../../constants/types";
import { ButtonSwitcher } from "./ButtonSwitcher";

export const ButtonTheme = () => {
  const SunIcon = <ICONS.SUN stroke={"var(--color--light-blue-4)"} />;
  const MoonIcon = <ICONS.MOON stroke={"var(--color--light-blue-4)"} />;

  const { theme, setTheme }: IThemeContext = useThemeContext();

  const t = useTranslations("switcher");

  const [icon, setIcon] = useState<JSX.Element>(() => {
    if (theme === "dark") {
      return MoonIcon;
    } else {
      return SunIcon;
    }
  });

  const clickHandler = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", '"dark"');
      setIcon(MoonIcon);
    } else {
      setTheme("light");
      localStorage.setItem("theme", '"light"');
      setIcon(SunIcon);
    }
  };

  return (
    <ButtonSwitcher
      icon={icon}
      onClick={clickHandler}
      theme={theme}
      title={theme === "dark" ? t("theme.dark") : t("theme.light")}
    />
  );
};

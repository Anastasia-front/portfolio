"use client";

import { useState } from "react";

import { useTranslations } from "next-intl";

import { ICONS } from "../../../constants/icons";

import { ButtonSwitcher } from "../ButtonSwitcher/ButtonSwitcher";

export const ButtonTheme = () => {
  const SunIcon = <ICONS.SUN />;
  const MoonIcon = <ICONS.MOON />;
  const srcSunIcon = SunIcon.type.src;
  const srcMoonIcon = MoonIcon.type.src;

  const [theme, setTheme] = useState<string>(
    () => localStorage.getItem("theme") || "light"
  );

  const t = useTranslations("switcher");

  const [icon, setIcon] = useState(() => {
    if (theme === "dark") {
      return srcMoonIcon;
    } else {
      return srcSunIcon;
    }
  });

  const clickHandler = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      setIcon(srcMoonIcon);
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      setIcon(srcSunIcon);
    }
  };

  return (
    <ButtonSwitcher
      imgUrl={icon}
      onClick={clickHandler}
      title={theme === "dark" ? t("theme.dark") : t("theme.light")}
    />
  );
};

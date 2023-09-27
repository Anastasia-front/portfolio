"use client";

import { useState } from "react";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import Moon from "@/assets/svg/moon.svg";
import Sun from "@/assets/svg/sun.svg";

import { ButtonSwitcher } from "./ButtonSwitcher";

export const ButtonTheme = () => {
  const { theme, setTheme } = useTheme();

  const a = useTranslations("alt");
  const t = useTranslations("switcher");

  const IconMoon = <Moon />;
  const IconSun = <Sun />;

  const [icon, setIcon] = useState(() => {
    if (theme === "dark") {
      return IconMoon;
    } else {
      return IconSun;
    }
  });

  const clickHandler = () => {
    if (theme === "light") {
      setTheme("dark");
      setIcon(IconMoon);
    } else {
      setTheme("light");
      setIcon(IconSun);
    }
  };

  return (
    <ButtonSwitcher
      alt={a("svgTheme")}
      icon={icon}
      onClick={clickHandler}
      title={theme === "dark" ? t("theme.dark") : t("theme.light")}
    />
  );
};

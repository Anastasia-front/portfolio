"use client";

import { useEffect, useState } from "react";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import Moon from "@/assets/svg/moon.svg";
import Sun from "@/assets/svg/sun.svg";

import { ButtonSwitcher } from "./ButtonSwitcher";

interface Props {
  settings?: boolean;
}

export const ButtonTheme = ({ settings }: Props) => {
  const { theme, setTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(true);

  const a = useTranslations("alt");
  const t = useTranslations("switcher");

  const IconMoon = <Moon />;
  const IconSun = <Sun />;

  const iconSvg = theme === "dark" ? IconMoon : IconSun;

  const [icon, setIcon] = useState(() => {
    return iconSvg;
  });

  useEffect(() => {
    setIcon(iconSvg);
  }, [settings, iconSvg]);

  const clickHandler = () => {
    setIsVisible(false);

    setTimeout(() => {
      setIsVisible(true);
      if (theme === "light") {
        setTheme("dark");
        setIcon(IconMoon);
      } else {
        setTheme("light");
        setIcon(IconSun);
      }
    }, 300);
  };

  return (
    <ButtonSwitcher
      className={isVisible ? "visible" : "invisible"}
      alt={a("svgTheme")}
      icon={icon}
      onClick={clickHandler}
      title={theme === "dark" ? t("theme.dark") : t("theme.light")}
    />
  );
};

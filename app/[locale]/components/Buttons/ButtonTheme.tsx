"use client";

import { useEffect, useMemo, useState } from "react";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import Moon from "@/assets/svg/moon.svg";
import Sun from "@/assets/svg/sun.svg";

import { ButtonSwitcher } from "./ButtonSwitcher";

export const ButtonTheme = () => {
  const { theme, setTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(true);

  const a = useTranslations("alt");
  const t = useTranslations("switcher");

  const icon = useMemo(() => {
    const IconMoon = <Moon />;
    const IconSun = <Sun />;
    return theme === "dark" ? IconMoon : IconSun;
  }, [theme]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", "light");
    }
  }, []);

  const clickHandler = () => {
    setIsVisible(false);

    setTimeout(() => {
      setIsVisible(true);
      if (theme === "light") {
        setTheme("dark");
      } else {
        setTheme("light");
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

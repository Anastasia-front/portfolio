"use client";

import { useEffect, useState } from "react";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import Moon from "@/assets/svg/moon.svg";
import Sun from "@/assets/svg/sun.svg";

import { ButtonSwitcher } from "./ButtonSwitcher";

export const ButtonTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const a = useTranslations("alt");
  const t = useTranslations("switcher");

  const IconMoon = <Moon />;
  const IconSun = <Sun />;

  useEffect(() => {
    // Check if window and localStorage are defined (client-side)
    if (typeof window !== "undefined" && window.localStorage) {
      // Access localStorage safely
      const storedTheme = window.localStorage.getItem("theme");
      if (storedTheme) {
        setTheme(storedTheme);
      }
    }
  }, [setTheme]);

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
      localStorage.setItem("theme", "dark");
      setIcon(IconMoon);
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      setIcon(IconSun);
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ButtonSwitcher
      alt={a("svgTheme")}
      icon={icon}
      onClick={clickHandler}
      title={theme === "dark" ? t("theme.dark") : t("theme.light")}
    />
  );
};

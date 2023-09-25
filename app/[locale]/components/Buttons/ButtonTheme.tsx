"use client";

import { useEffect, useState } from "react";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import MoonIcon from "@/assets/svg/moon.svg";
import SunIcon from "@/assets/svg/sun.svg";

import { ButtonSwitcher } from "./ButtonSwitcher";

export const ButtonTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

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

  const t = useTranslations("switcher");

  const [icon, setIcon] = useState(() => {
    if (theme === "dark") {
      return MoonIcon;
    } else {
      return SunIcon;
    }
  });

  const clickHandler = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      setIcon(MoonIcon);
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      setIcon(SunIcon);
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
      imgUrl={icon}
      onClick={clickHandler}
      title={theme === "dark" ? t("theme.dark") : t("theme.light")}
    />
  );
};

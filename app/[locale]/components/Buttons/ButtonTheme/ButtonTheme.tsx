"use client";

import { useEffect, useState } from "react";

import { useTranslations } from "next-intl";

// import { ICONS } from "../../../constants/icons";

import { ButtonSwitcher } from "../ButtonSwitcher/ButtonSwitcher";

import MoonIcon from "../../../assets/svg/moon.svg";
import SunIcon from "../../../assets/svg/sun.svg";

export const ButtonTheme = () => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    // Check if window and localStorage are defined (client-side)
    if (typeof window !== "undefined" && window.localStorage) {
      // Access localStorage safely
      const storedTheme = window.localStorage.getItem("theme");
      if (storedTheme) {
        setTheme(storedTheme);
      }
    }
  }, []);

  const t = useTranslations("switcher");

  const [icon, setIcon] = useState(() => {
    if (theme === "dark") {
      return SunIcon;
    } else {
      return MoonIcon;
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

  return (
    <ButtonSwitcher
      imgUrl={icon}
      onClick={clickHandler}
      title={theme === "dark" ? t("theme.dark") : t("theme.light")}
    />
  );
};

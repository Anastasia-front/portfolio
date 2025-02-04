"use client";

import { useEffect, useRef, useState } from "react";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import { LANGUAGE_KEYS, THEMES } from "@/constants";

import { useClickOutside } from "@/hooks";
import { ButtonSwitcher } from "./ButtonSwitcher";

export const ButtonTheme = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDropdownVisible, setDropdownIsVisible] = useState(false);

  const { theme, setTheme } = useTheme();
  const containerRef = useRef<HTMLUListElement>(null);
  useClickOutside(containerRef, () => setDropdownIsVisible(false));

  const a = useTranslations("alt");
  const t = useTranslations("switcher");

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!localStorage.getItem("theme")) {
        localStorage.setItem("theme", "light");
      }
    }
  }, []);

  const toggleDisplayThemeOptions = () => {
    setDropdownIsVisible(!isDropdownVisible);
  };

  const handleThemeChange = (key: LANGUAGE_KEYS) => {
    setIsVisible(false);

    setTimeout(() => {
      setIsVisible(true);
      setTheme(key);
    }, 300);
  };

  const activeThemeAriaLabel =
    theme === "dark"
      ? t("theme.dark")
      : theme === "light"
      ? t("theme.light")
      : t("theme.system");

  const { icon, label } = theme
    ? THEMES[theme as LANGUAGE_KEYS]
    : THEMES["system"];

  return (
    <>
      <ButtonSwitcher
        alt={a("svgTheme")}
        ariaLabel={activeThemeAriaLabel}
        icon={icon}
        onClick={toggleDisplayThemeOptions}
        title={label}
        className={
          isDropdownVisible
            ? "margin-right-50"
            : isVisible
            ? "visible"
            : "invisible"
        }
      />
      {isDropdownVisible && (
        <ul className="themes-container container-items" ref={containerRef}>
          {Object.values(THEMES).map(
            ({ icon, label, key }, index) =>
              key !== theme && (
                <li key={index} className="theme-item">
                  <ButtonSwitcher
                    alt={a("svgTheme")}
                    icon={icon}
                    onClick={() => handleThemeChange(key)}
                    ariaLabel={t("theme.title")}
                    title={label}
                  />
                </li>
              )
          )}
        </ul>
      )}
    </>
  );
};

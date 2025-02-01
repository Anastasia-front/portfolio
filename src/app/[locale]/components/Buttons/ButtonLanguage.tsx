"use client";

import { useEffect, useRef, useState } from "react";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

import { LANGUAGES, LOCALES, type Locale } from "src/locales";

import { ButtonSwitcher } from "@/components";

export const ButtonLanguage = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDropdownVisible, setDropdownIsVisible] = useState(false);

  const a = useTranslations("alt");
  const t = useTranslations("switcher");

  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const newLocaleRef = useRef<Locale>(locale);

  useEffect(() => {
    const currentIndex = LOCALES.indexOf(locale);
    newLocaleRef.current = LOCALES[(currentIndex + 1) % LOCALES.length];
  }, [locale]);

  const toggleDisplayLanguageOptions = () => {
    setDropdownIsVisible(!isDropdownVisible);
  };

  const handleLocaleChange = (): void => {
    setIsVisible(false);
    setDropdownIsVisible(false);
    document.cookie = `NEXT_LOCALE=${newLocaleRef.current}; max-age=31536000; SameSite=Lax`;
    router.refresh();
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  };
  
  const { flag, label } = LANGUAGES[locale];

  return (
    <>
      <ButtonSwitcher
        alt={a("svgLang")}
        ariaLabel={t("lang.title")}
        icon={flag}
        onClick={toggleDisplayLanguageOptions}
        title={label}
      />
      {isDropdownVisible && (
        <ul className="languages-container container-items container-items__frame">
          {Object.values(LANGUAGES).map(
            ({ flag, label, key }, index) =>
              key !== locale && (
                <li key={index} className="languages-item">
                  <ButtonSwitcher
                    alt={a("svgLang")}
                    ariaLabel={t("lang.title")}
                    className={isVisible ? "visible" : "invisible"}
                    href={pathname}
                    icon={flag}
                    onClick={handleLocaleChange}
                    title={label}
                    type="link"
                  />
                </li>
              )
          )}
        </ul>
      )}
    </>
  );
};

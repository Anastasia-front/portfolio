"use client";

import { useEffect, useRef, useState } from "react";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

import { LANGUAGES, LOCALES, type Locale } from "src/locales";

import { ButtonSwitcher } from "@/components";
import { useClickOutside } from "@/hooks";

export const ButtonLanguage = () => {
  const [isDropdownVisible, setDropdownIsVisible] = useState(false);

  const containerRef = useRef<HTMLUListElement>(null);
  useClickOutside(containerRef, () => setDropdownIsVisible(false));

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
    if (!isDropdownVisible) {
      setDropdownIsVisible(true);
      return;
    }
    return;
  };

  const handleLocaleChange = (): void => {
    setDropdownIsVisible(false);
    document.cookie = `NEXT_LOCALE=${newLocaleRef.current}; max-age=31536000; SameSite=Lax`;
    router.refresh();
  };

  const { flag, label } = LANGUAGES[locale];

  return (
    <>
      <ButtonSwitcher
        alt={a("svgLang")}
        ariaLabel={t("lang.title")}
        className={isDropdownVisible ? "margin-left-50" : ""}
        icon={flag}
        onClick={toggleDisplayLanguageOptions}
        title={label}
      />
      {isDropdownVisible && (
        <ul className="languages-container container-items" ref={containerRef}>
          {Object.values(LANGUAGES).map(
            ({ flag, label, key }, index) =>
              key !== locale && (
                <li key={index} className="languages-item">
                  <ButtonSwitcher
                    alt={a("svgLang")}
                    ariaLabel={t("lang.title")}
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

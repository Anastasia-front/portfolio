"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { menuItems } from "@/constants";

interface Props {
  location?: string;
  onClick?: () => void;
}

export function Navigation({ location = "", onClick }: Props) {
  const t = useTranslations("nav");

  const pathname = usePathname();
  const searchParams = useSearchParams();

  let lang;

  if (typeof window !== "undefined" && window.localStorage) {
    // Access localStorage safely
    const storedLang = window.localStorage.getItem("lang");
    if (storedLang === "uk") {
      lang = "uk/";
    } else {
      lang = "";
    }
  }

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
  }, [pathname, searchParams]);

  const routesAndMenus = [
    { route: `/${lang}`, menuIndex: 0 },
    { route: `/${lang}about`, menuIndex: 1 },
    { route: `/${lang}skills`, menuIndex: 2 },
    { route: `/${lang}projects`, menuIndex: 3 },
    { route: `/${lang}contacts`, menuIndex: 4 },
  ];

  const activeLink = routesAndMenus.find(
    (routeItem) => routeItem.route === pathname
  );

  return (
    <ul className="navigation-items">
      {menuItems.map((item, index: number) => {
        return (
          <li
            key={item.id}
            className={`navigation-items__item ${
              location === "banner" ? "navigation-items__item-color" : ""
            }  ${activeLink?.menuIndex === index ? "active-menu" : ""} 
            ${
              activeLink?.menuIndex === index && location === "banner"
                ? "active-menu__banner"
                : ""
            }
            `}
          >
            <Link href={item.url} onClick={onClick}>
              {t(`${item.translationKey}`)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

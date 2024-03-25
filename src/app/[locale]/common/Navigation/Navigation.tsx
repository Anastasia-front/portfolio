"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { menuItems, routes } from "@/constants";

interface Props {
  location?: string;
  onClick?: () => void;
}

export function Navigation({ location = "", onClick }: Props) {
  const t = useTranslations("nav");

  const routesAndMenus = [
    { route: routes.HOME, menuIndex: 0 },
    { route: routes.ABOUT, menuIndex: 1 },
    { route: routes.SKILLS, menuIndex: 2 },
    { route: routes.PROJECTS, menuIndex: 3 },
    { route: routes.CONTACTS, menuIndex: 4 },
  ];

  const pathname = usePathname();
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
            <Link
              href={item.url}
              onClick={onClick}
              aria-label={t(`${item.translationKey}`)}
            >
              {t(`${item.translationKey}`)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

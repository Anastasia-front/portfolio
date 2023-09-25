"use client";

import { useTranslations } from "next-intl";

import Link from "next/link";
import React from "react";

import { menuItems } from "../../constants/menuItems";

interface Props {
  location?: string;
}

export function Navigation({ location = "" }: Props) {
  const t = useTranslations("nav");

  const [activeMenu, setActiveMenu] = React.useState(0);

  return (
    <ul
      className={`navigation-items ${
        location !== "banner" ? "navigation-items__header" : ""
      }`}
    >
      {menuItems.map((item, index: number) => {
        return (
          <li
            key={item.id}
            className={`navigation-items__item ${
              location === "banner" && "navigation-items__item-color"
            }  ${activeMenu === index && "active-menu"} 
            ${
              activeMenu === index &&
              location === "banner" &&
              "active-menu__banner"
            }
            `}
            onClick={() => {
              setActiveMenu(index);
            }}
          >
            <Link href={item.url}>{t(`${item.translationKey}`)}</Link>
          </li>
        );
      })}
    </ul>
  );
}

"use client";

import React from "react";

import { useTranslations } from "next-intl";
import Link from "next/link";

import { menuItems } from "@/constants";

interface Props {
  location?: string;
  onClick?: () => void;
}

export function Navigation({ location = "", onClick }: Props) {
  const t = useTranslations("nav");

  const [activeMenu, setActiveMenu] = React.useState(0);

  return (
    <ul className="navigation-items">
      {menuItems.map((item, index: number) => {
        return (
          <li
            key={item.id}
            className={`navigation-items__item ${
              location === "banner" ? "navigation-items__item-color" : ""
            }  ${activeMenu === index ? "active-menu" : ""} 
            ${
              activeMenu === index && location === "banner"
                ? "active-menu__banner"
                : ""
            }
            `}
            onClick={() => {
              setActiveMenu(index);
            }}
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

"use client";

import { useTranslations } from "next-intl";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { menuItems } from "../../constants/menuItems";

export function Navigation() {
  const t = useTranslations("nav");
  const logo = useTranslations("logo");

  const [activeMenu, setActiveMenu] = React.useState(0);

  return (
    <ul className="container-items">
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt={t("alt")}
          width={45}
          height={45}
          className="logo"
        />
      </Link>

      {menuItems.map((item, index: number) => {
        return (
          <li
            key={item.id}
            className={`container-items__item ${
              activeMenu === index && "active-menu"
            }`}
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

"use client";

import { useTranslations } from "next-intl";

import Image from "next/image";
import Link from "next/link";

import { Navigation } from "./Navigation";

export function NavigationAndLogo() {
  const logo = useTranslations("logo");

  return (
    <div className="container-items container-items__frame">
      <Link href="/" className="logo">
        <Image
          className="logo__img"
          src="/logo.png"
          alt={logo("alt")}
          width={45}
          height={45}
        />
      </Link>
      <Navigation />
    </div>
  );
}

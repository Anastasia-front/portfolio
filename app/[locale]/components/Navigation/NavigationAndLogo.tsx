"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { BurgerMenu, Navigation } from "@/components";
import { useGlobalContext } from "@/context";
import { useScreenQuery } from "@/hooks";

export function NavigationAndLogo() {
  const logo = useTranslations("alt");

  const context = useGlobalContext();
  const { handleMenuClose } = context;

  const { isScreenTabletSm } = useScreenQuery();

  return (
    <nav className="container-items container-items__frame">
      <Link href="/" className="logo" onClick={() => handleMenuClose()}>
        <Image
          className="logo__img"
          src="/logo.png"
          alt={logo("logo")}
          width={30}
          height={30}
        />
      </Link>
      {isScreenTabletSm ? <Navigation /> : <BurgerMenu />}
    </nav>
  );
}

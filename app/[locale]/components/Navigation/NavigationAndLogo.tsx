"use client";

import { useTranslations } from "next-intl";

import { BurgerMenu, Logo, Navigation } from "@/components";
import { useGlobalContext } from "@/context";
import { useScreenQuery } from "@/hooks";

export function NavigationAndLogo() {
  const logo = useTranslations("alt");

  const context = useGlobalContext();
  const { handleMenuClose } = context;

  const { isScreenTabletSm } = useScreenQuery();

  return (
    <nav className="container-items container-items__frame">
      <Logo onClick={() => handleMenuClose()} />
      {isScreenTabletSm ? <Navigation /> : <BurgerMenu />}
    </nav>
  );
}

"use client";

import { BurgerMenu, Navigation } from "@/common";
import { Logo } from "@/components";
import { useGlobalContext } from "@/context";
import { useScreenQuery } from "@/hooks";

export function NavigationAndLogo() {
  const { menuModal } = useGlobalContext();

  const { isScreenTabletSm } = useScreenQuery();

  return (
    <nav className="container-items container-items__frame">
      <Logo onClick={menuModal.close} />
      {isScreenTabletSm ? <Navigation /> : <BurgerMenu />}
    </nav>
  );
}
